import { useEffect } from "react";
import { useDynamicQuestionsStore, useQuestionsStore } from "../../../storage/zustand";

const useUpdateDynamicQuestions = (index) => {
    const profileQuestions = useQuestionsStore((state) => state.questions);
    const dynamicQuestions = useDynamicQuestionsStore((state) => state.dynamicQuestions);
    const updateDynamicQuestions = useDynamicQuestionsStore((state) => state.updateDynamicQuestions);

    useEffect(() => {
        // Check if all profile questions are present in dynamic questions
        const hasDifference = !profileQuestions.fields.every(profileQuestion =>
            dynamicQuestions.some(dynamicQuestion => dynamicQuestion.id === profileQuestion.id)
        );

        if (hasDifference) {
            updateDynamicQuestions(profileQuestions.fields, index);
        }

    }, [profileQuestions, dynamicQuestions, updateDynamicQuestions]);
};

export default useUpdateDynamicQuestions;
