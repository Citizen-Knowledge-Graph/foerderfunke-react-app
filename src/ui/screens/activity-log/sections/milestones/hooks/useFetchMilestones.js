import { milestonesList } from "../content/milestonesList";
import { useLanguageStore } from "@/ui/storage/useLanguageStore";

const useFetchMilestones = () => {
    const language = useLanguageStore
    return {
        upcoming: milestonesList[language]?.comingUp || [],
        past: milestonesList[language]?.past || [],
    };
};

export default useFetchMilestones;
