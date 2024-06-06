import React, {useState} from 'react';
import VStack from "../../../components/VStack";
import ProfileSectionField from "./ProfileSectionField";

const ProfileSectionList = ({profileSectionData}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleConfirm = () => {
        if (currentIndex < profileSectionData.fields.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            // Handle the case when all sections are completed
            console.log('All sections completed');
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
        <VStack sx={{width: '100%', paddingTop: '50px'}}>
            <VStack gap={1}>
                <ProfileSectionField profileSectionField={currentSection}
                                     currentIndex={currentIndex}
                                     handleConfirm={handleConfirm}
                                     handleBack={handleBack}
                                     handleSkip={handleSkip}/>
            </VStack>
        </VStack>
    );
};

export default ProfileSectionList;
