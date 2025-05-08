import { useEffect, useState } from "react";
import matchingEngineManager from "@/core/managers/matchingEngineManagar";

const useInitialiseMatchingEngine = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initialise = async () => {
      try {
        setLoading(true);
        await matchingEngineManager.initialiseMatchingEngine();
      } catch (err) {
        console.error("Error initializing Matching Engine:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    initialise();
  }, []);

  return { loading, error };
};

export default useInitialiseMatchingEngine;