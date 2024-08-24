import React, {useEffect, useState} from 'react';
import VStack from "../../../components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import {useProfileSectionStore} from "../../../storage/useProfileSectionStore";

const ProfileSectionTopQuestion = ({topQuestion, setCompleted}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [entityData, setEntityData] = useState({});
    const retrieveCurrentEntityData = useProfileSectionStore((state) => state.retrieveCurrentEntityData);

    useEffect(() => {
        setEntityData(retrieveCurrentEntityData());
    }, [retrieveCurrentEntityData]);

    return (
        <VStack sx={{width: '100%'}} gap={3}>
            <VStack gap={1}>
                {topQuestion ? (
                    <ProfileSectionField
                        currentField={topQuestion}
                        currentIndex={0}
                        entityData={entityData}
                    />
                ) : null}
            </VStack>
        </VStack>
    );
};

export default ProfileSectionTopQuestion;
