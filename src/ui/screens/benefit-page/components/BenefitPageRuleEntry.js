import React from "react";
import globalStyles from "../../../styles/styles";
import VStack from "../../../components/VStack";
import {Typography} from "@mui/material";
import HStack from "../../../components/HStack";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpIcon from '@mui/icons-material/Help';
import CancelIcon from '@mui/icons-material/Cancel';
import {useStore} from "../../../components/ViewportUpdater";
import useTranslation from "../../../language/useTranslation";

const BenefitPageRuleEntry = ({ruleData}) => {
    const { t } = useTranslation();
    const isDesktop = useStore((state) => state.isDesktop);

    const icon = (() => {
        switch (ruleData.validity) {
            case 'valid':
                return <CheckCircleIcon sx={{fontSize: 30, color: globalStyles.secondaryColor}}/>;
            case 'missing':
                return <HelpIcon sx={{fontSize: 30, color: globalStyles.colorDarkGrey}}/>;
            case 'invalid':
                return <CancelIcon sx={{fontSize: 30, color: globalStyles.colorCoralRed}}/>;
            default:
                return <HelpIcon sx={{fontSize: 30, color: globalStyles.colorDarkGrey}}/>;
        }
    })();

    const DynamicStacker = ({children}) => {
        if (isDesktop) {
            return (
                <HStack gap={3} alignItems={'center'}
                        sx={{
                            padding: '12px',
                            borderRadius: '12px',
                        }}>
                    {children}
                </HStack>
            )
        }
        return (
            <VStack
                gap={1}
                sx={{
                    padding: '12px',
                    borderRadius: '12px'
            }}>
                {children}
            </VStack>
        )
    }

    return (
        <DynamicStacker>
            <HStack sx={{width: '100%'}}>
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
                        {t('app.benefitPage.rulesTable.yourAnswer')}
                    </Typography>
                    <Typography sx={styles.requirementText}>
                        {ruleData.userValue}
                    </Typography>
                </VStack>
            </HStack>
            <HStack justifyContent={'flex-end'}>
                {icon}
            </HStack>
        </DynamicStacker>
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
