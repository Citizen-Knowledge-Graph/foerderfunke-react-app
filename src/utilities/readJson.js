const readJson = async (filePath) => {
    const response = await fetch(filePath);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export default readJson;
