import ProfileInputSelection from "../../question-pages/components/input-types/ProfileInputSelection";
import ProfileInputText from "../../question-pages/components/input-types/ProfileInputText";
import ProfileInputInteger from "../../question-pages/components/input-types/ProfileInputInteger";
import ProfileInputDate from "../../question-pages/components/input-types/ProfileInputDate";
import ProfileInputBoolean from "../../question-pages/components/input-types/ProfileInputBoolean";
import ProfileInputMultiSelection from "../../question-pages/components/input-types/ProfileInputMultiSelection";


const ProfileUpdateInputSwitch = ({ t, value, setValue, datafieldDetails, error }) => {
    switch (datafieldDetails?.datatype) {
        case 'ff:selection':
            return <ProfileInputSelection
                value={value}
                setValue={setValue}
                answerOptions={datafieldDetails?.answerOptions}
                error={error}
                optionsFormat={'flat'} />;
        case 'ff:selection_multiple':
            return <ProfileInputMultiSelection
                value={value}
                setValue={setValue}
                answerOptions={datafieldDetails?.answerOptions}
                error={error}
                optionsFormat={'flat'} />;
        case 'xsd:date':
            return <ProfileInputDate
                t={t}
                value={value}
                setValue={setValue}
                error={error} />;
        case 'xsd:boolean':
            return <ProfileInputBoolean
                value={value}
                setValue={setValue}
                error={error} />;
        case 'xsd:integer':
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

export default ProfileUpdateInputSwitch;
