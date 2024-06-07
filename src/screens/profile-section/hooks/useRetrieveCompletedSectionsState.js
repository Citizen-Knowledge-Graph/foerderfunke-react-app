import { useCallback} from "react";

const useRetrieveCompletedSectionsState = (sectionsState) => {
    console.log("sectionsState: ", sectionsState)
    return useCallback(() => {
        console.log("##@@@# executing useRetrieveCompletedSectionsState")
        // count number of completed sections
        const completedSections = sectionsState.reduce((acc, section) => {
            return section.completed ? acc + 1 : acc;
        }, 0);

        // count total number of sections
        const totalSections = sectionsState.length;

        console.log("completedSections: ", completedSections)
        console.log("totalSections: ", totalSections)

        return { completedSections, totalSections };
    }, [sectionsState]);
}

export default useRetrieveCompletedSectionsState;
