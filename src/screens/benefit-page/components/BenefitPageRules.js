import {useEffect, useState} from "react";
import {transformRulesFromRequirementProfile} from "@foerderfunke/matching-engine/src/prematch";
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

    const buildValueInAndValueNotInText = (valueInOrNotIn) => {
        let part = "";
        for (let dfUri of Object.keys(valueInOrNotIn)) {
            let dfObj = metadata.df[dfUri];
            part += dfObj.label + " (";
            for (let choiceValue of valueInOrNotIn[dfUri]) {
                if (choiceValue === "true") {
                    part += "Ja, ";
                    continue;
                }
                if (choiceValue === "false") {
                    part += "Nein, ";
                    continue;
                }
                let choice = dfObj.choices.find(choice => expand(choice.value) === choiceValue);
                part += choice.label + ", ";
            }
            part += "), ";
        }
        return part;
    }

    const buildRulesText = () => {
        let existencePart = "";
        if (rulesData.existence.length > 0) {
            existencePart += "The following data fields are required: ";
            existencePart += rulesData.existence.map(dfUri => metadata.df[dfUri].label).join(", ");
        }
        let valueInPart = "";
        if (Object.keys(rulesData.valueIn).length > 0) {
            valueInPart += "The following data fields must have one of the following values: ";
            valueInPart += buildValueInAndValueNotInText(rulesData.valueIn);
        }
        let valueNotInPart = "";
        if (Object.keys(rulesData.valueNotIn).length > 0) {
            valueNotInPart += "The following data fields must have NOT one of the following values: ";
            valueNotInPart += buildValueInAndValueNotInText(rulesData.valueNotIn);
        }
        let orPart = "";
        return (
            <>
                {existencePart}<br/>
                {valueInPart}<br/>
                {valueNotInPart}<br/>
                {orPart}<br/>
            </>
        );
    };

    useEffect(() => {
        if (loaded) return;
        let rpUri = benefitId.startsWith("ff:") ? "https://foerderfunke.org/default#" + benefitId.split(":")[1] : benefitId;
        const fetchRulesData = async () => {
            const validationConfig = await readJson('assets/data/requirement-profiles/requirement-profiles.json');
            let query = validationConfig['queries'].find(query => query['rpUri'] === rpUri);
            let rpTurtleStr = await fetchTurtleResource(query.fileUrl);
            let results = await transformRulesFromRequirementProfile(rpTurtleStr);
            setRulesData(results);
            setLoaded(true);
        };
        fetchRulesData();
    }, [benefitId, rulesData, metadata, loaded]);

    return (
        <>
            {loaded &&
                <span>{buildRulesText()}</span>
            }
        </>
    );
}

export default BenefitPageRules;
