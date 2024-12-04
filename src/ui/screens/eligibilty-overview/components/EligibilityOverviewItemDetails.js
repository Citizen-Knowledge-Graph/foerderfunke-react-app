import React from 'react';
import {Button, Typography} from '@mui/material';
import VStack from "../../../shared-components/VStack";
import HStack from "../../../shared-components/HStack";
import {Link} from "react-router-dom";
import globalStyles from "../../../styles/styles";
import useTranslation from "../../../language/useTranslation";
import {useSelectedBenefitStore} from "../../../storage/zustand";

const EligibilityOverviewItemDetails = ({item, eligible}) => {
    const { t } = useTranslation();
    const setSelectedBenefit = useSelectedBenefitStore((state) => state.setSelectedBenefit);

    return (
        <VStack alignItems={'flex-start'}>
            <Typography sx={styles.itemDescription}>
                {item.description}
            </Typography>
            <HStack>
                {eligible === 'indeterminate' &&
                    <Button
                        sx={styles.checkEligibilityButton}
                        variant="text"
                        component={Link}
                        onClick={setSelectedBenefit(item.id)}
                        to={`/onboarding-welcome/${true}`}>
                        {t('app.browseAll.checkElBtn')}
                    </Button>
                }
                <Button
                    sx={styles.learnMoreButton}
                    variant="text"
                    component={Link}
                    to={`/benefit-page/${item.id}`}>
                    {t('app.browseAll.learnMoreBtn')}
                </Button>
            </HStack>
        </VStack>
    );
};

const styles = {
    itemDescription: {
        fontSize: '16px',
        fontWeight: '400',
    },
    checkEligibilityButton: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '15px',
        borderColor: globalStyles.secondaryColor,
        backgroundColor: globalStyles.secondaryColor,
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: globalStyles.secondaryColor,
            color: 'white',
            borderColor: globalStyles.secondaryColor,
        },
    },
    learnMoreButton: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '15px',
        borderColor: globalStyles.colorDarkGrey,
        color: globalStyles.colorDarkGrey,
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'none',
    }
};

export default EligibilityOverviewItemDetails;
