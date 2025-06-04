import { useEffect, useState } from 'react';
import QuestionPageCompleted from './completed/QuestionPageCompleted';
import QuestionPageNextContainer from './next/QuestionPageNextContainer';
import { useQuestionsUpdate } from '@/ui/storage/updates';
import useFetchQuizReport from './hooks/useFetchQuizReport';

const QuestionPageRouter = () => {
    const { quizReport } = useFetchQuizReport();
    const questionsAreLoading = useQuestionsUpdate((s) => s.questionsAreLoading);
    const [completed, setCompleted] = useState(false);
    
    useEffect(() => {
        if (Number(quizReport?.['ff:hasNumberOfMissingDatafields']?.['@value']) === 0) {
            setCompleted(true);
        } else {
            setCompleted(false);
        }
    }, [quizReport]);

    if (completed && !questionsAreLoading) {
        return <QuestionPageCompleted />;
    }

    return <QuestionPageNextContainer />;
};

export default QuestionPageRouter;
