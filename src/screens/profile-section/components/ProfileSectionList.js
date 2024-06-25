import React, {useEffect, useState} from 'react';
import VStack from "../../../components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import ProfileCompletionBar from "./ProfileCompletionBar";
import {useProfileSectionStore} from "../../../storage/useProfileSectionStore";
import {useProfileSectionListHandlers} from "../hooks/useProfileSectionListHandlers";

const ProfileSectionList = ({profileSectionData, setCompleted}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [entityData, setEntityData] = useState({});
    const retrieveCurrentEntityData = useProfileSectionStore((state) => state.retrieveCurrentEntityData);
    const {
        handleConfirm,
        handleBack,
        handleSkip
    } = useProfileSectionListHandlers(setCurrentIndex, profileSectionData, setCompleted);

    useEffect(() => {
        setEntityData(retrieveCurrentEntityData());
        setCurrentIndex(0);
    }, [profileSectionData, retrieveCurrentEntityData]);

    const currentField = profileSectionData.fields[currentIndex];
    return (
        <VStack sx={{width: '100%', paddingTop: '50px'}} gap={3}>
            <ProfileCompletionBar length={profileSectionData.fields.length} index={currentIndex}/>
            <VStack gap={1}>
                <ProfileSectionField currentField={currentField}
                                     currentIndex={currentIndex}
                                     entityData={entityData}
                                     handleConfirm={handleConfirm}
                                     handleBack={handleBack}
                                     handleSkip={handleSkip}/>
            </VStack>
        </VStack>
    );
};

export default ProfileSectionList;
