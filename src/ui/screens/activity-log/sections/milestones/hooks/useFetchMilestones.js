import { useContext } from "react";
import { LanguageContext } from "../../../../../language/LanguageContext";
import { milestonesList } from "../content/milestonesList";

const useFetchMilestones = () => {
    const { language } = useContext(LanguageContext);
    return {
        upcoming: milestonesList[language]?.comingUp || [],
        past: milestonesList[language]?.past || [],
    };
};

export default useFetchMilestones;
