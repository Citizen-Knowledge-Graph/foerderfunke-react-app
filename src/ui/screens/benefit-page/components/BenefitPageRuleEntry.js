import React from "react";
import globalStyles from "../../../styles/styles";
import VStack from "../../../shared-components/VStack";
import {Typography} from "@mui/material";
import HStack from "../../../shared-components/HStack";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpIcon from '@mui/icons-material/Help';
import CancelIcon from '@mui/icons-material/Cancel';
import {useStore} from "../../../shared-components/ViewportUpdater";
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
                    <Typography variant="body2">
                        {ruleData.requirement.label}
                    </Typography>
                    <Typography variant="body1">
                        {ruleData.requirement.rule}
                    </Typography>
                </VStack>
                <VStack gap={0} sx={{width: '50%'}}>
                    <Typography variant="body2">
                        {t('app.benefitPage.rulesTable.yourAnswer')}
                    </Typography>
                    <Typography variant="body1">
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

export default BenefitPageRuleEntry;
