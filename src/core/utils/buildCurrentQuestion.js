const buildCurrentQuestion = (questionId, metadata) => {
    console.log("Building current question with ID:", questionId, metadata);
    return metadata?.['ff:hasDF']?.find(df => df?.["@id"] === questionId);
}

export default buildCurrentQuestion;