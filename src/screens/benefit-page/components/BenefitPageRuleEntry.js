import globalStyles from "../../../styles/styles";
import VStack from "../../../components/VStack";
import {Typography} from "@mui/material";
import HStack from "../../../components/HStack";
import React from "react";

const BenefitPageRuleEntry = ({ ruleData }) => {
    const backgroundColor = (() => {
        switch (ruleData.validity) {
            case 'valid':
                return globalStyles.secondaryColorTransparent;
            case 'missing':
                return globalStyles.colorLightGreyTransparent;
            case 'invalid':
                return globalStyles.colorRedTransparent;
            default:
                return globalStyles.colorLightGreyTransparent;
        }
    })();

    return (
        <HStack gap={3} alignItems={'space-between'} sx={{
            backgroundColor: backgroundColor,
            padding: '12px',
            borderRadius: '12px'
        }}>
            <VStack gap={0} sx={{width: '50%'}}>
                <Typography sx={styles.fieldText}>
                    {ruleData.requirement.label}
                </Typography>
                <Typography sx={styles.requirementText}>
                    {ruleData.requirement.rule}
                </Typography>
            </VStack>
            <VStack gap={0} sx={{width: '50%'}}>
                <Typography sx={styles.fieldText}>
                    Your answer
                </Typography>
                <Typography sx={styles.requirementText}>
                    {ruleData.userValue}
                </Typography>
            </VStack>
        </HStack>
    )
}


const styles = {
    fieldText: {
        fontSize: '14px',
        fontWeight: '300',
    },
    requirementText: {
        fontSize: '16px',
        fontWeight: '400',
    }
}

export default BenefitPageRuleEntry;
