import React, {useState} from 'react';
import VStack from "../../../components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import ProfileCompletionBar from "./ProfileCompletionBar";

const ProfileSectionList = ({profileSectionData, entityData}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [completed, setCompleted] = useState(false);

    const handleConfirm = () => {
        if (currentIndex < profileSectionData.fields.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCompleted(true);
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            // Handle the case when all sections are completed
            console.log('All sections completed');
        }
    };

    const handleSkip = () => {
        if (currentIndex < profileSectionData.fields.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            // Handle the case when all sections are completed
            console.log('All sections completed');
        }
    };

    const currentSection = profileSectionData.fields[currentIndex];

    return (
        <VStack sx={{width: '100%', paddingTop: '50px'}} gap={3}>
            <ProfileCompletionBar length={profileSectionData.fields.length} index={currentIndex}/>
            <VStack gap={1}>
                <ProfileSectionField profileSectionField={currentSection}
                                     entityData={entityData}
                                     currentIndex={currentIndex}
                                     handleConfirm={handleConfirm}
                                     handleBack={handleBack}
                                     handleSkip={handleSkip}/>
            </VStack>
        </VStack>
    );
};

export default ProfileSectionList;
