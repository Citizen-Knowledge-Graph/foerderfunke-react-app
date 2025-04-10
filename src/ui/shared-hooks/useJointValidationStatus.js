import { useState, useEffect } from "react";
import { useQuestionsUpdate, useValidationUpdate } from "@/ui/storage/updates";

const useJointValidationStatus = () => {
    const [isLoadingJointStatus, setIsLoadingJointStatus] = useState(true);
    const validationIsLoading = useValidationUpdate((s) => s.validationIsLoading);
    const questionsAreLoading = useQuestionsUpdate((s) => s.questionsAreLoading);

    useEffect(() => {
        setIsLoadingJointStatus(validationIsLoading || questionsAreLoading);
    }, [validationIsLoading, questionsAreLoading]);

    return {
        isLoadingJointStatus,
    };
};

export default useJointValidationStatus;