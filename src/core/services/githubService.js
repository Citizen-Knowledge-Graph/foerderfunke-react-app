export const fetchTurtleResource = async (url) => {
    const response = await fetch(url);
    return response.text();
}
