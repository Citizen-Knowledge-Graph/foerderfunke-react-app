import ProfileInputSelection from "./ProfileInputSelection";
import ProfileInputText from "./ProfileInputText";
import ProfileInputInteger from "./ProfileInputInteger";
import ProfileInputDate from "./ProfileInputDate";
import ProfileInputBoolean from "./ProfileInputBoolean";
import ProfileInputMultiSelection from "./ProfileInputMultiSelection";

const ProfileSectionInputSwitch = ({ t, value, setValue, currentField, error }) => {
    switch (currentField.datatype) {
        case 'selection':
            return <ProfileInputSelection
                value={value}
                setValue={setValue}
                currentField={currentField}
                error={error} />;
        case 'selection-multiple':
            return <ProfileInputMultiSelection
                value={value}
                setValue={setValue}
                currentField={currentField}
                error={error} />;
        case 'date':
            return <ProfileInputDate
                t={t}
                value={value}
                setValue={setValue}
                error={error} />;
        case 'boolean':
            return <ProfileInputBoolean
                value={value}
                setValue={setValue}
                error={error} />;
        case 'integer':
            return <ProfileInputInteger
                value={value}
                setValue={setValue}
                error={error} />;
        default:
            return <ProfileInputText
                value={value}
                setValue={setValue}
                error={error} />;
    }
}

export default ProfileSectionInputSwitch;
