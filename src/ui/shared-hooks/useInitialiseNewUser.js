import { useCallback } from "react";
import userManager from "@/core/managers/userManager";
import { useUserStore } from "@/ui/storage/zustand";

const useInitialiseNewUser = () => {
    const updateUserId = useUserStore((state) => state.updateUserId);

    const initialiseNewUser = useCallback((userId, userType) => {
        const userIdWithNameSpace = `ff:${userId}`;
        const userTypeWithNameSpace = `ff:${userType}`;

        try {
            userManager.initialiseNewUser(userIdWithNameSpace, userTypeWithNameSpace);
            updateUserId(userIdWithNameSpace);
            return { success: true, error: null };
        } catch (err) {
            console.error(`Error initializing new user: ${err.message}`);
            return { success: false, error: err };
        }
    }, [updateUserId]);

    return { initialiseNewUser };
};

export default useInitialiseNewUser;