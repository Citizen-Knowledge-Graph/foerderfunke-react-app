import { useEffect, useState } from "react";
import { useProfileSectionStore } from "../../../storage/useProfileSectionStore";

const useRetrieveEntityData = () => {
    const [entityData, setEntityData] = useState({});
    const retrieveCurrentEntityData = useProfileSectionStore((state) => state.retrieveCurrentEntityData);

    useEffect(() => {
        setEntityData(retrieveCurrentEntityData());
    }, [retrieveCurrentEntityData]);

    return entityData;
};

export default useRetrieveEntityData;
