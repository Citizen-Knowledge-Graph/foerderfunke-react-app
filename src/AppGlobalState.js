import useRunValidation from "./ui/shared-hooks/useRunValidation";
import useRunPrioritizedQuestions from "./ui/shared-hooks/useRunPrioritizedQuestions";

const AppGlobalState = () => {

    // whenever user id or an update counter changes, run validation
    useRunValidation()

    // update the list of prioritized questions
    useRunPrioritizedQuestions()
};

export default AppGlobalState;
