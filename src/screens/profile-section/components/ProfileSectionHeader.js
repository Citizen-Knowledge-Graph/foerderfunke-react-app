import React from "react";
import TemplateViewHeader from "../../../components/TemplateViewHeader";

const ProfileSectionHeader = ({handleBack}) => {

    return (
        <TemplateViewHeader onClick={handleBack} />
    );
}

export default ProfileSectionHeader;
