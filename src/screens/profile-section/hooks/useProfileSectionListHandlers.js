import {useProfileSectionStore} from "../../../storage/useProfileSectionStore";
import {useNavigate} from "react-router-dom";

export const useProfileSectionListHandlers = (mode, setCurrentIndex, profileSectionData, setCompleted) => {
    const navigate = useNavigate()
    const deleteLastNestedSection = useProfileSectionStore((state) => state.deleteLastNestedSection);
    const currentProfileSection = useProfileSectionStore((state) => state.retrieveCurrentProfileSection);

    const handleConfirm = async (currentIndex) => {
        console.log('handleConfirm', currentIndex, profileSectionData);
        if (currentIndex < profileSectionData.fields.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            if (mode === 'nested') {
                deleteLastNestedSection();
                navigate(`/profile-section/${currentProfileSection()}/return`);
            } else {
                setCompleted(true);
            }
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
