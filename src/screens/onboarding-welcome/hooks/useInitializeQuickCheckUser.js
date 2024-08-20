import createUserProfile from "../../hooks/createUserProfile";
import {useUserStore} from "../../../storage/zustand";
import useInitializeEntityData from "./useInitializeEntityData";
import {useEffect} from "react";

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
