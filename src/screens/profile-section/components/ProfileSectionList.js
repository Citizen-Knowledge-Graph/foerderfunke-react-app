import React, {useEffect, useState} from 'react';
import VStack from "../../../components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import {useProfileSectionStore} from "../../../storage/useProfileSectionStore";
import {useProfileSectionListHandlers} from "../hooks/useProfileSectionListHandlers";

const ProfileSectionList = ({profileSectionData, mode, setCompleted}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [entityData, setEntityData] = useState({});
    const retrieveCurrentEntityData = useProfileSectionStore((state) => state.retrieveCurrentEntityData);
    const retrieveCurrentDataField = useProfileSectionStore((state) => state.retrieveCurrentDataField);
    const {
        handleConfirm,
        handleBack,
        handleSkip
    } = useProfileSectionListHandlers(mode, setCurrentIndex, profileSectionData, setCompleted);

    useEffect(() => {
        setEntityData(retrieveCurrentEntityData());
        const dataField = retrieveCurrentDataField();
        if (dataField) {
            const index = profileSectionData.fields.findIndex((field) => field.datafield === dataField);
            if (index !== -1) {
                setCurrentIndex(index);
            }
        } else {
            setCurrentIndex(0);
        }

    }, [profileSectionData, retrieveCurrentDataField, retrieveCurrentEntityData]);

    const currentField = profileSectionData.fields[currentIndex];

    return (
        <VStack sx={{width: '100%'}} gap={3}>
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
