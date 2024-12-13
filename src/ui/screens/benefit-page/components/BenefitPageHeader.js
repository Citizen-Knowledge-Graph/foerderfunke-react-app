import VStack from "../../../shared-components/VStack";
import {Box, Button, IconButton, Typography} from "@mui/material";
import HStack from "../../../shared-components/HStack";
import globalStyles from "../../../styles/styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React, {useState} from "react";
import {useStore} from "../../../shared-components/ViewportUpdater";
import {Link} from "react-router-dom";
import {useSelectedBenefitStore, useSelectedTopicsStore, useValidationReportStore} from "../../../storage/zustand";
import useIsMissingDataBenefit from "../hooks/useIsMissingDataBenefit";
import useTranslation from "../../../language/useTranslation";

const BenefitPageHeader = ({id, benefit}) => {
    const {t} = useTranslation();

    const [leiKaInfo, setLeiKaInfo] = useState(false);
    const isDesktop = useStore((state) => state.isDesktop);
    const titleFontSize = isDesktop ? '32px' : '28px';

    const setSelectedBenefit = useSelectedBenefitStore((state) => state.setSelectedBenefit);
    const clearSelectedTopics = useSelectedTopicsStore((state) => state.clear);
    const validationReport = useValidationReportStore((state) => state.validationReport);

    const isMissingDataBenefit = useIsMissingDataBenefit(id, validationReport);

    return (
        <VStack gap={0} alignItems={'flex-start'} sx={{
            width: '100%',
            backgroundColor: globalStyles.colorDeepTealTransparent,
            padding: '16px',
            borderRadius: '12px'
        }}>
            <VStack>
                <Typography sx={{...styles.titleText, fontSize: titleFontSize}}>
                    {benefit.title}
                </Typography>
                <VStack>
                    <HStack alignItems={'center'}>
                        <Typography sx={styles.subTitleText}>
                            LeiKa-Id: {benefit.leikaId}
                        </Typography>
                        <IconButton
                            sx={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: globalStyles.colorLightGrey,
                                },
                            }}
                            onClick={() => setLeiKaInfo(!leiKaInfo)}
                        >
                            <InfoOutlinedIcon sx={{fontSize: 16, color: 'black'}}/>
                        </IconButton>
                    </HStack>
                    {leiKaInfo && (
                        <VStack sx={{backgroundColor: 'white', padding: '12px', borderRadius: '12px'}}>
                            <Typography sx={styles.subTitleText}>
                                LeiKa is a unique identifier for benefits in Germany. It helps you to
                                find
                                the right benefit for you.
                            </Typography>
                        </VStack>)}
                    {id && isMissingDataBenefit && (
                        <Box sx={{width: '100%', mb: 2}}>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setSelectedBenefit(id);
                                    clearSelectedTopics()
                                }}
                                sx={{
                                    backgroundColor: 'secondary.main',
                                    borderColor: 'secondary.main',
                                    color: 'white',
                                    '&:hover': {
                                        color: 'black',
                                    }
                            }}
                                component={Link}
                                to={`/onboarding-welcome/${id}`}
                            >
                                {t('app.benefitPage.eligibilityBtn')}
                            </Button>
                        </Box>
                    )}
                </VStack>
            </VStack>
        </VStack>
    );
}


const styles = {
    titleText: {
        fontWeight: 'bold',
    },
    subTitleText: {
        fontSize: '14px',
        fontWeight: '400',
        color: 'black',
        textTransform: 'none',
    },
}

export default BenefitPageHeader;
