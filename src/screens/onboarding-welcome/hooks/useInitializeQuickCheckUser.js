import createUserProfile from "../../hooks/createUserProfile";
import {useUserStore} from "../../../storage/zustand";
import useInitializeEntityData from "../../profile-section/hooks/useInitializeEntityData";
import {useEffect} from "react";

const useInitializeQuickCheckUser = () => {
    const updateUserId = useUserStore((state) => state.updateUserId);
    const userId = "quick-check-user";

    useEffect(() => {
        createUserProfile(userId);
        updateUserId(userId);
    }, [userId, updateUserId]);

    return useInitializeEntityData(userId);
}

export default useInitializeQuickCheckUser;
