import React from "react";
import {Link} from "react-router-dom";
import {Button, Typography} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Layout from "../../components/Layout";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import VStack from "../../components/VStack";
import HStack from "../../components/HStack";

const InfoPrivacy = () => {
    const privacyImageUrl = `${process.env.PUBLIC_URL}/assets/images/info-screens/privacy_1.svg`;

    return (
        <Layout isApp={true}>
            <AppScreenWrapper>
                <VStack alignItems={'center'} gap={5} sx={{maxWidth: '840px'}}>
                    <Typography sx={styles.title}>Your data is only stored locally</Typography>
                    <img src={privacyImageUrl} alt="logo" style={{height: '225px'}}/>
                    <VStack gap={5}>
                        <Typography sx={styles.infoText}>
                            All information you enter is only <strong>stored locally on your browser</strong> and never
                            leaves your
                            device.
                        </Typography>
                        <Typography sx={styles.infoText}>
                            We believe that only you should have access to your personal data. That is why <strong>we do
                            not
                            offer
                            user accounts</strong> managed by us.
                        </Typography>
                    </VStack>
                    <HStack justifyContent={'flex-end'} sx={{width: '100%'}}>
                        <Button variant="text" sx={styles.button} endIcon={<ChevronRightIcon/>} component={Link}
                                to="/info-account">Next</Button>
                    </HStack>
                </VStack>
            </AppScreenWrapper>
        </Layout>
    );
}

const styles = {
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    infoText: {
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        color: 'black',
        fontSize: 16,
    }
}


export default InfoPrivacy;
