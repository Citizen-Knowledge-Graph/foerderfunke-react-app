import React from 'react';
import Layout from "@/ui/shared-components/Layout";
import AppScreenWrapper from "@/ui/shared-components/AppScreenWrapper";
import QuestionPageHeader from '../components/QuestionPageHeader';
import { VBox } from "@/ui/shared-components/LayoutBoxes";
import QuestionPageQuestionsCount from '../components/QuestionPageQuestionsCount';
import QuestionPageField from '../components/QuestionPageField';

const QuestionPageNext = ({
    t,
    isLoading,
    eligibleRPs,
    questionsCount,
    currentQuestion,
    value,
    setValue,
    error,
    handleAddClick,
    handleBackClick
}) => {
    
    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper isLoading={isLoading} scrollKey={currentQuestion}>
                <VBox sx={{ gap: 2 }}>
                    <QuestionPageHeader t={t} eligibleRPs={eligibleRPs} />
                    <QuestionPageQuestionsCount
                        t={t}
                        handleBackClick={handleBackClick}
                        questionsCount={questionsCount}
                    />
                    <QuestionPageField
                        t={t}
                        currentQuestion={currentQuestion}
                        value={value}
                        setValue={setValue}
                        error={error}
                        handleAddClick={handleAddClick}
                    />
                </VBox>
            </AppScreenWrapper>
        </Layout >
    )
};

export default QuestionPageNext;
