import React from "react";
import { Grid, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpIcon from '@mui/icons-material/Help';
import CancelIcon from '@mui/icons-material/Cancel';
import useTranslation from "../../../language/useTranslation";
import globalStyles from "../../../styles/styles";

const BenefitPageRuleEntry = ({ ruleData }) => {
    const { t } = useTranslation();

    const icon = (() => {
        switch (ruleData.validity) {
            case 'valid':
                return <CheckCircleIcon sx={{ fontSize: 30, color: globalStyles.secondaryColor }} />;
            case 'missing':
                return <HelpIcon sx={{ fontSize: 30, color: globalStyles.colorDarkGrey }} />;
            case 'invalid':
                return <CancelIcon sx={{ fontSize: 30, color: globalStyles.colorCoralRed }} />;
            default:
                return <HelpIcon sx={{ fontSize: 30, color: globalStyles.colorDarkGrey }} />;
        }
    })();

    return (
        <Grid
            container
            spacing={2}
            sx={{
                padding: '12px',
                borderRadius: '12px',
                alignItems: 'center',
            }}
        >
            <Grid item xs={6} sm={5}>
                <Typography variant="body2">{ruleData.requirement.label}</Typography>
                <Typography variant="body1">{ruleData.requirement.rule}</Typography>
            </Grid>
            <Grid item xs={6} sm={5}>
                <Typography variant="body2">
                    {t('app.benefitPage.rulesTable.yourAnswer')}
                </Typography>
                <Typography variant="body1">{ruleData.userValue}</Typography>
            </Grid>
            <Grid item xs={12} sm={2}
                sx={{ display: 'flex', justifyContent: "flex-end"}}
            >
                {icon}
            </Grid>
        </Grid>
    );
};

export default BenefitPageRuleEntry;