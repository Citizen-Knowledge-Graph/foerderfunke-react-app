const buildCurrentQuestion = (questionId, metadata) => {
    return metadata?.['ff:hasDF']?.find(df => df?.["@id"] === questionId);
}

export default buildCurrentQuestion;