import {useEffect, useState} from "react";
import {transformRulesFromRequirementProfile} from "@foerderfunke/matching-engine/src/prematch";
import readJson from "../../../utilities/readJson";
import {fetchTurtleResource} from "../../../services/githubService";
import {useMetadataStore} from "../../../storage/zustand";

const BenefitPageRules = ({benefitId}) => {
    const [rulesData, setRulesData] = useState([]);
    const metadata = useMetadataStore((state) => state.metadata);

    useEffect(() => {
        let rpUri = benefitId.startsWith("ff:") ? "https://foerderfunke.org/default#" + benefitId.split(":")[1] : benefitId;
        const fetchRulesData = async () => {
            const validationConfig = await readJson('assets/data/requirement-profiles/requirement-profiles.json');
            let query = validationConfig['queries'].find(query => query['rpUri'] === rpUri);
            let rpTurtleStr = await fetchTurtleResource(query.fileUrl);
            let results = await transformRulesFromRequirementProfile(rpTurtleStr);
            // metadata.df TODO
            setRulesData(results); // TODO
        };
        fetchRulesData();
    }, [benefitId, rulesData, metadata]);

    return (
        <span>TODO</span>
    );
}

export default BenefitPageRules;
