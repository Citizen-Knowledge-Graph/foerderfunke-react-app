import {useSelectedTopicsStore, useUserStore} from "../../../storage/zustand";
import {UserModel} from "../../../models/UserModel";
import {useEffect} from "react";


const useInitializeQuestionsArray = () => {
    const selectedTopicsStore = useSelectedTopicsStore((state) => state.selectedTopics);
    const userId = useUserStore((state) => state.activeUserId);
    const userData = UserModel.retrieveUserData(userId);

    useEffect(() => {

    }, []);



}
