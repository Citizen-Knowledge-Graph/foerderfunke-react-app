import { useState } from "react";

const useFeedbackHandler = () => {
    const [feedbackText, setFeedbackText] = useState("");
    const [feedbackValue, setFeedbackValue] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const submitFeedback = async () => {
        const body = {
            feedback_value: feedbackValue,
            feedback_text: feedbackText,
        };

        try {
            setIsSubmitting(true);
            setError(null); // Clear previous errors

            const response = await fetch("https://f6g96htf6f.execute-api.eu-north-1.amazonaws.com/staging/feedback-handler", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Origin': 'https://foerderfunke.org',
                },
                body: JSON.stringify(body),
            });

            // Check if response status is not 200
            if (response.status !== 200) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const result = await response.json();
            console.log("Response:", result);
        } catch (err) {
            console.error("Error sending feedback:", err);
            setError("Failed to submit feedback: " + err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        feedbackText,
        setFeedbackText,
        setFeedbackValue,
        isSubmitting,
        error,
        submitFeedback,
    };
};

export default useFeedbackHandler;
