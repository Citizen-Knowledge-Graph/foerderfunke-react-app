import {useProfileSectionStore} from "../../../storage/useProfileSectionStore";
import {useNavigate} from "react-router-dom";

export const useProfileSectionListHandlers = (mode, setCurrentIndex, profileSectionData, setCompleted) => {
    const navigate = useNavigate()
    const deleteLastNestedSection = useProfileSectionStore((state) => state.deleteLastNestedSection);
    const currentProfileSection = useProfileSectionStore((state) => state.retrieveCurrentProfileSection);

    const handleConfirm = async (currentIndex) => {
        if (currentIndex < profileSectionData.fields.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            console.log('All sections completed');
            if (mode === 'nested') {
                deleteLastNestedSection();
                console.log("we are moving to: ", currentProfileSection());
                navigate(`/profile-section/${currentProfileSection()}/return`);
            }
            setCompleted(true);
        }
    };

    const handleBack = (currentIndex) => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            console.log('All sections completed');
        }
    };

    const handleSkip = (currentIndex) => {
        if (currentIndex < profileSectionData.fields.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            console.log('All sections completed');
        }
    };

    return { handleConfirm, handleBack, handleSkip };
};
