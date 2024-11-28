import React, {useEffect, useState} from 'react';
import VStack from "../../../shared-components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import {useProfileSectionStore} from "../../../storage/useProfileSectionStore";
import {useProfileSectionListHandlers} from "../hooks/useProfileSectionListHandlers";
import ProfileSectionHeader from "./ProfileSectionHeader";

const ProfileSectionList = ({profileQuestions, mode, setCompleted}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [entityData, setEntityData] = useState({});
    const retrieveCurrentEntityData = useProfileSectionStore((state) => state.retrieveCurrentEntityData);
    const retrieveCurrentDataField = useProfileSectionStore((state) => state.retrieveCurrentDataField);
    const {
        handleConfirm,
        handleBack,
    } = useProfileSectionListHandlers(mode, setCurrentIndex, profileQuestions, setCompleted);

    useEffect(() => {
        setEntityData(retrieveCurrentEntityData());
        const dataField = retrieveCurrentDataField();
        if (dataField) {
            const index = profileQuestions.fields.findIndex((field) => field.datafield === dataField);
            if (index !== -1) {
                setCurrentIndex(index);
            }
        } else {
            setCurrentIndex(0);
        }

    }, [profileQuestions, retrieveCurrentDataField, retrieveCurrentEntityData]);

    const currentField = profileQuestions.fields[currentIndex];
    return (
        <VStack sx={{width: '100%'}} gap={3}>
            <ProfileSectionHeader handleBack={() => handleBack(currentIndex)}/>
            <VStack gap={1}>
                {currentField ? (
                    <ProfileSectionField currentField={currentField}
                                         currentIndex={currentIndex}
                                         entityData={entityData}
                                         handleConfirm={handleConfirm}/>
                ) : null}
            </VStack>
        </VStack>
    );
};

export default ProfileSectionList;
