import React, {useEffect, useState} from 'react';
import VStack from "../../../components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import {useProfileSectionStore} from "../../../storage/useProfileSectionStore";
import {useProfileSectionListHandlers} from "../hooks/useProfileSectionListHandlers";
import {Typography} from "@mui/material";

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

const styles = {
    titleText: {
        fontWeight: 'bold',
    },
}

export default ProfileSectionList;
