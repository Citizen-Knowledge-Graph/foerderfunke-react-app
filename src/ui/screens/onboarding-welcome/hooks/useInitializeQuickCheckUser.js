import createUserProfile from "../../hooks/createUserProfile";
import {useUserStore} from "../../../../core/storage/zustand";
import useInitializeEntityData from "./useInitializeEntityData";
import {useEffect} from "react";

// UNUSED

const useInitializeQuickCheckUser = () => {
    const updateUserId = useUserStore((state) => state.updateUserId);
    const userId = "ff:quick-check-user";

    useEffect(() => {
        createUserProfile(userId);
        updateUserId(userId);
    }, [userId, updateUserId]);

    return useInitializeEntityData(userId);
}

export default useInitializeQuickCheckUser;
