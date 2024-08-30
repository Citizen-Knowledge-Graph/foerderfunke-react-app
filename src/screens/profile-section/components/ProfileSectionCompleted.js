import React from 'react';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ButtonCard from "../../../components/ButtonCard";
import globalStyles from "../../../styles/styles";
import {useMetadataStore} from "../../../storage/zustand";
import {UserModel} from "../../../models/UserModel";
import dayjs from "dayjs";

const ProfileSectionCompleted = () => {
    const metadata = useMetadataStore((state) => state.metadata);
    const userProfile = UserModel.retrieveUserData("ff:quick-check-user");

    // the next 3 methods are the same as in BenefitPageRules, put them into utils? TODO

    const expand = (uri) => {
        return uri.startsWith("ff:") ? "https://foerderfunke.org/default#" + uri.split(":")[1] : uri;
    }

    const getChoiceLabel = (value, dfObj) => {
        if (value === "true") return "yes";
        if (value === "false") return "no";
        return dfObj.choices.find(choice => expand(choice.value) === expand(value)).label;
    }

    const convertUserValueRaw = (raw, dfObj) => {
        if (Array.isArray(raw)) {
            return raw.map(r => getChoiceLabel(r, dfObj)).join(", ");
        }
        if (raw.startsWith("ff:")) {
            return getChoiceLabel(raw, dfObj);
        }
        if (dayjs(raw).isValid()) {
            return dayjs(raw).format("YYYY-MM-DD");
        }
        return raw;
    }

    const buildUserProfile = () => {
        const elements = [];
        for (const [key, value] of Object.entries(userProfile)) {
            if (key.startsWith("@")) continue;
            let dfObj = metadata.df[expand(key)];
            let dfLabel = dfObj.label;
            let dfValue = convertUserValueRaw(value, dfObj);
            elements.push(
                <span key={key}>
                    <span style={{fontWeight: "bold"}} key={key}>{dfLabel}:</span>
                    <span> {dfValue}</span>
                </span>
            );
        }
        return elements;
    }

    return (
        <VStack sx={{height: "90vh"}}>
            <VStack sx={{height: "5vh"}}>
            </VStack >
            <VStack gap={5} justifyContent={'flex-start'} sx={{height: "85vh"}}>
                <HStack justifyContent={'center'} sx={{width: "100%"}}>
                    <VStack gap={1} alignItems={'center'} sx={styles.completeTextBox}>
                        <CheckCircleIcon sx={styles.icon}/>
                    </VStack>
                </HStack>
                <HStack justifyContent={'center'} sx={{width: "100%"}}>
                    <VStack gap={1} alignItems={'center'} sx={styles.completeTextBox}>
                        <Typography variant="h4" sx={styles.completeText}>Your quick check is complete</Typography>
                    </VStack>
                </HStack>
                {userProfile &&
                    <>
                        <h3>These data points are in your profile:</h3>
                        {buildUserProfile()}
                    </>}
                <ButtonCard link={`/eligibility-overview`} text="Discover your benefits"
                            backgroundColor={globalStyles.secondaryColor}/>
            </VStack>
        </VStack>);
};

const styles = {
    completeTextBox: {
        paddingLeft: '45px',
        paddingRight: '45px',
    },
    completeText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    icon: {
        width: '80px',
        height: '80px',
        color: globalStyles.secondaryColor,
    },
};

export default ProfileSectionCompleted;
