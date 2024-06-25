import React, {useEffect, useState} from 'react';
import VStack from "../../../components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import ProfileCompletionBar from "./ProfileCompletionBar";
import {useProfileSectionStore} from "../../../storage/useProfileSectionStore";
import {useProfileSectionListHandlers} from "../hooks/useProfileSectionListHandlers";

const ProfileSectionList = ({profileSectionData, mode, setCompleted}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [entityData, setEntityData] = useState({});
    const retrieveCurrentEntityData = useProfileSectionStore((state) => state.retrieveCurrentEntityData);
    const retrieveCurrentDatafield = useProfileSectionStore((state) => state.retrieveCurrentDatafield);
    const {
        handleConfirm,
        handleBack,
        handleSkip
    } = useProfileSectionListHandlers(mode, setCurrentIndex, profileSectionData, setCompleted);

    useEffect(() => {
        setEntityData(retrieveCurrentEntityData());
        const datafield = retrieveCurrentDatafield();
        if (datafield) {
            const index = profileSectionData.fields.findIndex((field) => field.datafield === datafield);
            if (index !== -1) {
                setCurrentIndex(index);
            }
        } else {
            setCurrentIndex(0);
        }

    }, [profileSectionData, retrieveCurrentDatafield, retrieveCurrentEntityData]);

    console.log('ProfileSectionList', profileSectionData, entityData, currentIndex)

    const currentField = profileSectionData.fields[currentIndex];
    console.log('currentField', currentIndex)

    return (
        <VStack sx={{width: '100%', paddingTop: '50px'}} gap={3}>
            <ProfileCompletionBar length={profileSectionData.fields.length} index={currentIndex}/>
            <VStack gap={1}>
                {currentField ? (
                    <ProfileSectionField currentField={currentField}
                                         currentIndex={currentIndex}
                                         entityData={entityData}
                                         handleConfirm={handleConfirm}
                                         handleBack={handleBack}
                                         handleSkip={handleSkip}/>
                ) : null}
            </VStack>
        </VStack>
    );
};

export default ProfileSectionList;
