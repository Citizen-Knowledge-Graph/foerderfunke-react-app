import React, {useEffect, useState} from 'react';
import VStack from "../../../components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import ProfileCompletionBar from "./ProfileCompletionBar";
import {useProfileSectionStore} from "../../../storage/useProfileSectionStore";
import {useProfileSectionListHandlers} from "../hooks/useProfileSectionListHandlers";
import {Typography} from "@mui/material";
import InfoCard from "../../../components/InfoCard";

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
            <ProfileCompletionBar length={profileSectionData.fields.length} index={currentIndex}/>
            <Typography variant="h4" gutterBottom sx={styles.titleText}>
                {profileSectionData.title}
            </Typography>
            <InfoCard hollow={true} text="Let’s start your profile to discover social benefits for you. If you need help
                            you can always use the info icon."/>
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
