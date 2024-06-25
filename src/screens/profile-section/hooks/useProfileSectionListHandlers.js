export const useProfileSectionListHandlers = (setCurrentIndex, profileSectionData, setCompleted) => {
    const handleConfirm = async (currentIndex) => {
        if (currentIndex < profileSectionData.fields.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            console.log('All sections completed');
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