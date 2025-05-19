import React from "react";
import { Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "@/ui/shared-components/Layout";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import AppScreenWrapperContainer from "@/ui/shared-components/app-screen-wrapper/AppScreenWrapperContainer";
import theme from "@/theme";
import RegularButton from "@/ui/shared-components/RegularButton";

const InfoScreenPrivacy = ({t, isDesktop, privacyBox}) => {
    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapperContainer back={true} backTarget={'/'} isLoading={false}>
                <VBox sx={{ gap: { xs: 4, md: 8 } }}>
                    {
                        !isDesktop ? (
                            <VBox sx={{ alignItems: 'center' }}>
                                <img src={privacyBox} alt="logo" style={{
                                    width: "150px",
                                }} />
                            </VBox>
                        ) : null
                    }
                    <Typography variant="h1">
                        {t('app.privacySite.header')}
                    </Typography>
                    <HBox>
                        <VBox sx={{ gap: 4 }}>
                            <VBox sx={{ maxWidth: '800px' }}>
                                <Typography variant="h4">
                                    {t('app.privacySite.subHeader')}
                                </Typography>
                                <Typography variant="body1">
                                    {t('app.privacySite.text1')}
                                </Typography>
                            </VBox>
                            <VBox sx={{
                                padding: 4,
                                borderRadius: theme.shape.borderRadius,
                                backgroundColor: 'white.main',
                                maxWidth: '506px',
                            }}>
                                <VBox>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                        {t('app.privacySite.optionHeader')}
                                    </Typography>
                                    <HBox alignItems={'center'}>
                                        <FileDownloadIcon sx={{ color: 'custom.darkGrey', fontSize: '16px' }} />
                                        <Typography variant="body1">
                                            {t('app.privacySite.option1')}
                                        </Typography>
                                    </HBox>
                                    <HBox alignItems={'center'}>
                                        <DeleteIcon sx={{ color: 'custom.darkGrey', fontSize: '16px' }} />
                                        <Typography variant="body1">
                                            {t('app.privacySite.option2')}
                                        </Typography>
                                    </HBox>
                                </VBox>
                            </VBox>
                            <RegularButton 
                                variant={'blueContained'} 
                                text={'app.privacySite.button'} 
                                link={'/onboarding-choice'} 
                            />
                        </VBox>
                        {
                            isDesktop ? (
                                <VBox sx={{ justifyContent: 'flex-end' }}>
                                    <img src={privacyBox} alt="logo" style={{
                                        width: "315px",
                                        marginRight: "-50px",
                                        marginBottom: "-50px"
                                    }} />
                                </VBox>
                            ) : null
                        }
                    </HBox>
                </VBox>
            </AppScreenWrapperContainer>
        </Layout >
    );
}

export default InfoScreenPrivacy;
