import ProfileSectionSelection from "./ProfileSectionSelection";
import ProfileSectionClass from "./ProfileSectionClass";
import ProfileSectionInput from "./ProfileSectionInput";
import ProfileSectionDate from "./ProfileSectionDate";

const ProfileSectionInputSwitch = ({value, setValue, currentField, entityData, error}) => {
    switch (currentField.datatype) {
        case 'selection':
            return <ProfileSectionSelection
                value={value}
                setValue={setValue}
                currentField={currentField}
                error={error}/>;
        case 'selection-multiple':
            return <ProfileSectionSelection
                value={value}
                setValue={setValue}
                currentField={currentField}
                error={error}/>;
        case 'date':
            return <ProfileSectionDate
                value={value}
                setValue={setValue}
                error={error}/>;
        case 'class':
            return <ProfileSectionClass
                value={value}
                currentField={currentField}
                entityData={entityData}/>;
        default:
            return <ProfileSectionInput
                value={value}
                setValue={setValue}
                error={error}/>;
    }
}

export default ProfileSectionInputSwitch;
