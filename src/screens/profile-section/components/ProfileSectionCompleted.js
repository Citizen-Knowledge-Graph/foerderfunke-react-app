import React from 'react';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import { Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ButtonCard from "../../../components/ButtonCard";
import globalStyles from "../../../styles/styles";
import { useMetadataStore } from "../../../storage/zustand";
import { UserModel } from "../../../models/UserModel";
import dayjs from "dayjs";

const ProfileSectionCompleted = () => {
    const metadata = useMetadataStore((state) => state.metadata);
    const userProfile = UserModel.retrieveUserData("ff:quick-check-user");

    const expand = (uri) => {
        return uri.startsWith("ff:") ? "https://foerderfunke.org/default#" + uri.split(":")[1] : uri;
    };

    const getChoiceLabel = (value, dfObj) => {
        if (value === "true") return "yes";
        if (value === "false") return "no";
        return dfObj.choices.find(choice => expand(choice.value) === expand(value)).label;
    };

    const convertUserValueRaw = (raw, dfObj) => {
        if (Array.isArray(raw)) {
            return raw.map(r => getChoiceLabel(r, dfObj)).join(", ");
        }
        if (typeof raw === 'boolean') {
            return raw ? "yes" : "no";
        }
        if (raw.startsWith("ff:")) {
            return getChoiceLabel(raw, dfObj);
        }
        if (dayjs(raw).isValid()) {
            return dayjs(raw).format("YYYY-MM-DD");
        }
        return raw;
    };

    const buildUserProfile = () => {
        return (
            <VStack sx={{ width: '100%'}}>
                {Object.entries(userProfile).map(([key, value]) => {
                    if (key.startsWith("@")) return null;
                    const dfObj = metadata.df[expand(key)];
                    const dfLabel = dfObj.label;
                    const dfValue = convertUserValueRaw(value, dfObj);
                    return (
                        <Typography key={key} variant="body1" sx={{ marginBottom: '10px' }}>
                            <strong>{dfLabel}:</strong> {dfValue}
                        </Typography>
                    );
                })}
            </VStack>
        );
    };

    return (
        <VStack>
            <VStack />
            <VStack gap={5} justifyContent={'flex-start'}>
                <HStack justifyContent={'center'} sx={{ width: "100%" }}>
                    <VStack gap={1} alignItems={'center'} sx={styles.completeTextBox}>
                        <CheckCircleIcon sx={styles.icon} />
                    </VStack>
                </HStack>
                <HStack justifyContent={'center'} sx={{ width: "100%" }}>
                    <VStack gap={1} alignItems={'center'} sx={styles.completeTextBox}>
                        <Typography variant="h4" sx={styles.completeText}>
                            Your quick check is complete
                        </Typography>
                    </VStack>
                </HStack>
                {userProfile && (
                    <>
                        <Typography variant="h5">These data points are in your profile:</Typography>
                        {buildUserProfile()}
                    </>
                )}
                <ButtonCard
                    link={`/eligibility-overview`}
                    text="Discover your benefits"
                    backgroundColor={globalStyles.secondaryColor}
                />
            </VStack>
        </VStack>
    );
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
