import { useState } from "react";

const useFeedbackHandler = () => {
    const [feedbackText, setFeedbackText] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const submitFeedback = async () => {
        const body = { feedback_text: feedbackText };

        try {
            setIsSubmitting(true);
            setError(null); // Clear previous errors

            const response = await fetch("https://igts6w8tsh.execute-api.eu-central-1.amazonaws.com/prod/feedback-handler", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Origin': 'https://foerderfunke.org',
                },
                body: JSON.stringify(body),
            });

            if (response.status !== 200) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            setSuccess(true);
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
        isSubmitting,
        success,
        error,
        submitFeedback,
    };
};

export default useFeedbackHandler;
