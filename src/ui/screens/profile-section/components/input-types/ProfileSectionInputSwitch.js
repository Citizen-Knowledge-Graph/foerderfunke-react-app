import ProfileInputSelection from "./ProfileInputSelection";
import ProfileInputClass from "./ProfileInputClass";
import ProfileInputText from "./ProfileInputText";
import ProfileInputDate from "./ProfileInputDate";
import ProfileInputBoolean from "./ProfileInputBoolean";
import ProfileInputMultiSelection from "./ProfileInputMultiSelection";

const ProfileSectionInputSwitch = ({value, setValue, currentField, entityData, error}) => {
    switch (currentField.datatype) {
        case 'selection':
            return <ProfileInputSelection
                value={value}
                setValue={setValue}
                currentField={currentField}
                error={error}/>;
        case 'selection-multiple':
            return <ProfileInputMultiSelection
                value={value}
                setValue={setValue}
                currentField={currentField}
                error={error}/>;
        case 'date':
            return <ProfileInputDate
                value={value}
                setValue={setValue}
                error={error}/>;
        case 'class':
            return <ProfileInputClass
                value={value}
                currentField={currentField}
                entityData={entityData}/>;
        case 'boolean':
            return <ProfileInputBoolean
                value={value}
                setValue={setValue}
                error={error}/>;
        default:
            return <ProfileInputText
                value={value}
                setValue={setValue}
                error={error}/>;
    }
}

export default ProfileSectionInputSwitch;
