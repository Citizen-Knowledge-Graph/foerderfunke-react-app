import { useEffect, useState } from "react";
import matchingEngineManager from "@/core/managers/matchingEngineManagar";

const useFetchQuizReport = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const rpUri = 'https://foerderfunke.org/default#hilfe-zum-lebensunterhalt';

  useEffect(() => {
    const fetchQuizReport = async () => {
      try {
        setLoading(true);
        const quizReport = await matchingEngineManager.fetchQuizReport("ff:quick-check-user", [rpUri]);
        console.log("Quiz Report:", quizReport['ff:hasMostMissedDatafield']['@id']);
        console.log("Quiz Report count:", quizReport['ff:hasNumberOfMissingDatafields']['@value']);
      } catch (err) {
        console.error("Error producing quiz report:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizReport();
  }, []);

  return { loading, error };
};

export default useFetchQuizReport;