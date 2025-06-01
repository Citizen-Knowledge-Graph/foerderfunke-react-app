import { useEffect, useState } from 'react';
import QuestionPageCompleted from './completed/QuestionPageCompleted';
import QuestionPageNextContainer from './next/QuestionPageNextContainer';
import { useQuestionsStore } from '@/ui/storage/zustand';
import { useQuestionsUpdate } from '@/ui/storage/updates';
import useFetchQuizReport from './hooks/useFetchQuizReport';

const QuestionPageRouter = () => {
    useFetchQuizReport();
    const profileQuestions = useQuestionsStore((s) => s.questions);
    const questionsAreLoading = useQuestionsUpdate((s) => s.questionsAreLoading);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (profileQuestions?.prioritizedMissingDataFields?.fields?.length === 0) {
            setCompleted(true);
        } else {
            setCompleted(false);
        }
    }, [profileQuestions]);

    if (completed && !questionsAreLoading) {
        return <QuestionPageCompleted />;
    }

    return <QuestionPageNextContainer />;
};

export default QuestionPageRouter;
