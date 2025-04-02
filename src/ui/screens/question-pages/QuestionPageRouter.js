import { useEffect, useState } from 'react';
import { useQuestionsStore } from "../../storage/zustand";
import { useNavigate } from "react-router-dom";
import QuestionPageCompleted from './completed/QuestionPageCompleted';
import QuestionPageNextContainer from './next/QuestionPageNextContainer';

const QuestionPageRouter = () => {
    const profileQuestions = useQuestionsStore((state) => state.questions);
    const [completed, setCompleted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (profileQuestions?.fields?.length === 0) {
            setCompleted(true);
        }
    }, [profileQuestions, navigate]);

    if (completed) {
        return <QuestionPageCompleted />;
    }

    return <QuestionPageNextContainer />;
};

export default QuestionPageRouter;
