import { useEffect, useState } from 'react';
import QuestionPageCompleted from './completed/QuestionPageCompleted';
import QuestionPageNextContainer from './next/QuestionPageNextContainer';
import useProduceNextQuestion from './hooks/useProduceNextQuestion';

const QuestionPageRouter = () => {
    const {profileQuestions, questionsAreLoading } = useProduceNextQuestion();
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
