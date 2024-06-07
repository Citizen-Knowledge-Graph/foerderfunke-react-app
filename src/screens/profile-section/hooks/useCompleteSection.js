import {useCallback} from "react";
import {useProfileInputSectionStore} from "../../../storage/zustand";

const useCompleteSection = (sectionId) => {
    const updateCompletedSections = useProfileInputSectionStore(
        (state) => state.updateCompletedSections
    );

    return useCallback(async () => {
        await updateCompletedSections(sectionId);
    }, [sectionId, updateCompletedSections]);
};

export default useCompleteSection;
