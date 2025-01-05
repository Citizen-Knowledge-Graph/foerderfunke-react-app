import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userManager from "../../../core/managers/userManager";
import { useUserExistsStatus, UserStatus } from "./hooks/useUserExistsStatus";
import { useUserStore } from "../../storage/zustand";
import { useProfileSectionStore } from "../../storage/useProfileSectionStore";

const InfoPageRouter = () => {
    const userStatus = useUserExistsStatus(userManager);
    const initializeSectionStore = useProfileSectionStore((state) => state.initializeSectionStore);
    const updateUserId = useUserStore((state) => state.updateUserId);
    const navigate = useNavigate();

    const initNewUser = useCallback(() => {
        userManager.initialiseNewUser();
        initializeSectionStore();
        updateUserId("ff:quick-check-user");
    }, [updateUserId, initializeSectionStore]);

    useEffect(() => {
        if (userStatus === UserStatus.USER_EXISTS) {
            navigate("/returning-user");
        }

        if (userStatus === UserStatus.USER_DOES_NOT_EXIST) {
            initNewUser();
            navigate("/privacy-info");
        }
    }, [userStatus, navigate, initNewUser]);

    return null;
};

export default InfoPageRouter;