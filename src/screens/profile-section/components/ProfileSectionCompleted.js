import React from 'react';
import ProfileCompletedPieChart from "./ProfileCompletedPieChart";
import {useProfileInputSectionStore} from "../../../storage/zustand";

const ProfileSectionCompleted = () => {
    const onboardingSectionsState = useProfileInputSectionStore(
        (state) => state.sections
    );
    console.log("onboardingSectionsState: ", onboardingSectionsState)
    const completedSections = onboardingSectionsState.reduce((acc, section) => {
        return section.completed ? acc + 1 : acc;
    }, 0);
    const totalSections = onboardingSectionsState.length;

    return (
        <ProfileCompletedPieChart completedSections={completedSections} totalSections={totalSections}/>
    );
};

export default ProfileSectionCompleted;
