import { useEffect } from 'react';
import { useUserStore } from "./storage/zustand";
import { runValidation } from "./services/validationService";

// UNUSED

const AppValidation = () => {
    const activeUserId = useUserStore((state) => state.activeUserId);

    // initialise session store
    useEffect(() => {
        const validate = async () => {
            if (activeUserId) {
                await runValidation(activeUserId);
            }
        };

        validate();
    }, [activeUserId]);

    return null;
};

export default AppValidation;
