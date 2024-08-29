import {useEffect, useState} from "react";
import {RuleType, transformRulesFromRequirementProfile} from "@foerderfunke/matching-engine/src/prematch";
import readJson from "../../../utilities/readJson";
import {fetchTurtleResource} from "../../../services/githubService";
import {useMetadataStore} from "../../../storage/zustand";

const BenefitPageRules = ({benefitId}) => {
    const [loaded, setLoaded] = useState(false);
    const [rulesData, setRulesData] = useState({});
    const metadata = useMetadataStore((state) => state.metadata);

    const expand = (uri) => {
        return uri.startsWith("ff:") ? "https://foerderfunke.org/default#" + uri.split(":")[1] : uri;
    }

    const getChoiceLabel = (value, dfObj) => {
        if (value === "true") return "yes";
        if (value === "false") return "no";
        return dfObj.choices.find(choice => expand(choice.value) === value).label;
    }

    const trim = (str) => {
        return str.substring(0, str.length - 2);
    }

    const buildSingleRuleOutput = (rulesObj, dfObj) => {
        let msg = "";
        switch(rulesObj.type) {
            case RuleType.EXISTENCE:
                return "Needs to exist";
            case RuleType.VALUE_IN:
                msg += "Must be " + (rulesObj.values.length === 1 ? "exactly: " : "one of: ");
                for (let value of rulesObj.values) {
                    msg += getChoiceLabel(value, dfObj) + ", ";
                }
                return trim(msg);
            case RuleType.VALUE_NOT_IN:
                msg += "Must not be " + (rulesObj.values.length === 1 ? "exactly: " : "one of: ");
                for (let value of rulesObj.values) {
                    msg += getChoiceLabel(value, dfObj) + ", ";
                }
                return trim(msg);
            case RuleType.OR:
                msg += "One or both of the following must be true: ";
                for (let element of rulesObj.elements) {
                    // this is pretty hardcoded for the very limited OR-cases we support for now, compare the respective code in matching-engine TODO
                    msg += metadata.df[element.path].label + ": " + getChoiceLabel(element.valueIn[0], null) + ", ";
                }
                return trim(msg);
            default:
                return "Unknown rule type";
        }
    }

    const buildRulesOutput = () => {
        const elements = [];
        for (let dfUri of Object.keys(rulesData)) {
            let rulesObj = rulesData[dfUri];
            let dfObj = metadata.df[dfUri];
            elements.push(<h3 key={dfUri}>{dfObj?.label ?? "Or-Rule"}</h3>);
            elements.push(<div key={dfUri + "_rule"}>{buildSingleRuleOutput(rulesObj, dfObj)}</div>);
            elements.push(<br key={dfUri + "_br"}/>)
        }
        return elements;
    }

    useEffect(() => {
        if (loaded) return;
        let rpUri = benefitId.startsWith("ff:") ? "https://foerderfunke.org/default#" + benefitId.split(":")[1] : benefitId;
        const fetchRulesData = async () => {
            const validationConfig = await readJson('assets/data/requirement-profiles/requirement-profiles.json');
            let query = validationConfig['queries'].find(query => query['rpUri'] === rpUri);
            let rpTurtleStr = await fetchTurtleResource(query.fileUrl);
            let results = await transformRulesFromRequirementProfile(rpTurtleStr);
            setRulesData(results.rulesByDf);
            setLoaded(true);
        };
        fetchRulesData();
    }, [benefitId, rulesData, metadata, loaded]);

    return (
        <>
            {loaded &&
                <span>{buildRulesOutput()}</span>
            }
        </>
    );
}

export default BenefitPageRules;
