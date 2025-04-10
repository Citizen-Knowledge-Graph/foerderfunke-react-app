import { useState, useCallback } from "react";
import userManager from "@/core/managers/userManager";
import { useUserStore } from "@/ui/storage/zustand";

const useInitialiseNewUser = () => {
    const [error, setError] = useState(null);
    const updateUserId = useUserStore((state) => state.updateUserId);

    const initialiseNewUser = useCallback((userId, userType) => {
        const userIdWithNameSpace = `ff:${userId}`;
        const userTypeWithNameSpace = `ff:${userType}`;

        try {
            userManager.initialiseNewUser(userIdWithNameSpace, userTypeWithNameSpace);
            updateUserId(userIdWithNameSpace);
        } catch (err) {
            console.error(`Error initializing new user: ${err.message}`);
            setError(err);
        }
    }, [updateUserId]);

    return { initialiseNewUser, error };
};

export default useInitialiseNewUser;