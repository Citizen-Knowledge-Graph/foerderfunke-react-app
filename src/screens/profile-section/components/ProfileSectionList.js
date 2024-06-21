import React, {useState} from 'react';
import VStack from "../../../components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import ProfileCompletionBar from "./ProfileCompletionBar";
import useCompleteSection from "../hooks/useCompleteSection";

const ProfileSectionList = ({profileSectionData, setProfileSectionData, setCompleted}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleCompleteSection = useCompleteSection(profileSectionData.id);

    const handleConfirm = async () => {
        if (currentIndex < profileSectionData.fields.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            console.log('All sections completed');
            await handleCompleteSection();
            setCompleted(true);
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            console.log('All sections completed');
        }
    };

    const handleSkip = () => {
        if (currentIndex < profileSectionData.fields.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            console.log('All sections completed');
        }
    };

    const currentSection = profileSectionData.fields[currentIndex];
    const entityData = profileSectionData.fields[currentIndex].nestedEntityData || profileSectionData.entityData

    return (
        <VStack sx={{width: '100%', paddingTop: '50px'}} gap={3}>
            <ProfileCompletionBar length={profileSectionData.fields.length} index={currentIndex}/>
            <VStack gap={1}>
                <ProfileSectionField profileSectionField={currentSection}
                                     entityData={entityData}
                                     currentIndex={currentIndex}
                                     setProfileSectionData={setProfileSectionData}
                                     handleConfirm={handleConfirm}
                                     handleBack={handleBack}
                                     handleSkip={handleSkip}/>
            </VStack>
        </VStack>
    );
};

export default ProfileSectionList;
