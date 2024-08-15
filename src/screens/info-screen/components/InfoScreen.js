import React from "react";
import {Link} from "react-router-dom";
import {Button, Typography} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Layout from "../../../components/Layout";
import AppScreenWrapper from "../../../components/AppScreenWrapper";
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {useStore} from "../../../components/ViewportUpdater";
import globalStyles from "../../../styles/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const InfoScreen = ({title, children, imageUrl, backLink, forwardLink}) => {
    const isDesktop = useStore((state) => state.isDesktop);
    const privacyImageUrl = `${process.env.PUBLIC_URL}/assets/images/info-screens/${imageUrl}.svg`;
    let stackType;

    const titleFontSize = isDesktop ? 40 : 30;

    if (backLink === undefined) {
        stackType = 'flex-end';
    } else {
        stackType = 'space-between';
    }

    return (
        <Layout isApp={true}>
            <AppScreenWrapper isDesktop={isDesktop}>
                <VStack alignItems={'center'} gap={5} sx={{width: "100%"}}>
                    <HStack sx={styles.titleWrapper}>
                        <Typography sx={{...styles.title, fontSize: titleFontSize}}>{title}</Typography>
                    </HStack>
                    <img src={privacyImageUrl} alt="logo" style={{height: '225px'}}/>
                    <VStack gap={3} sx={styles.infoWrapper}>
                        {children}
                    </VStack>
                    <HStack justifyContent={stackType} sx={{width: '100%'}}>
                        {backLink !== undefined &&
                            <Button variant="text" sx={styles.button} startIcon={<ChevronLeftIcon/>} component={Link}
                                    to={backLink}>Previous</Button>}
                        <Button variant="text" sx={styles.button} endIcon={<ChevronRightIcon/>} component={Link}
                                to={forwardLink}>Next</Button>
                    </HStack>
                </VStack>
            </AppScreenWrapper>
        </Layout>
    );
}

const styles = {
    titleWrapper: {
        width: '100%',
        boxSizing: 'border-box',
        padding: '16px',
        backgroundColor: globalStyles.primaryColorTransparent,
        borderRadius: '12px',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'left',
    },
    infoWrapper: {
        padding: '16px',
        backgroundColor: globalStyles.primaryColorTransparent,
        borderRadius: '12px'
    },
    button: {
        color: 'black',
        fontSize: 16,
    }
}


export default InfoScreen;
