import {useState, useEffect} from 'react';

const useFetchLatestCommitsHandler = () => {
    const [commits, setCommits] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = 'https://ad4bhcx01e.execute-api.eu-central-1.amazonaws.com/prod/fetch-latest-commits';

        const fetchLatestCommits = async () => {
            try {
                const response = await fetch(apiUrl, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        'Origin': 'https://foerderfunke.org',
                    }
                });

                if (!response.ok) {
                    const errorMessage = `Error: ${response.status} - ${response.statusText}`;
                    setError(errorMessage);
                    return;
                }

                const data = await response.json();
                setCommits(data);
            } catch (error) {
                setError(`Fetch error: ${error.message}`);
            }
        };

        fetchLatestCommits();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts.

    console.log("Commits:", commits);

    return {commits, error};
};

export default useFetchLatestCommitsHandler;
