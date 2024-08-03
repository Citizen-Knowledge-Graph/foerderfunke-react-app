import React from "react";
import {Link} from "react-router-dom";
import {Button, Typography} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Layout from "../../components/Layout";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import VStack from "../../components/VStack";
import HStack from "../../components/HStack";


const InfoAccount = () => {
    const privacyImageUrl = `${process.env.PUBLIC_URL}/assets/images/info-screens/privacy_1.svg`;

    return (
        <Layout isApp={true}>
            <AppScreenWrapper>
                <VStack alignItems={'center'} gap={5} sx={{maxWidth: '840px'}}>
                    <Typography sx={styles.title}>Full control over your data</Typography>
                    <img src={privacyImageUrl} alt="logo" style={{height: '225px'}}/>
                    <VStack gap={3}>
                        <Typography sx={styles.infoText}>
                            Before leaving the website, you have three options:
                        </Typography>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>
                                <Typography sx={styles.itemText}>Come back anytime and continue filling in your profile. Your information will still be there.</Typography>
                            </li>
                            <li style={styles.listItem}>
                                <Typography sx={styles.itemText}><strong>Export your data</strong> as an RDF file.</Typography>
                            </li>
                            <li style={styles.listItem}>
                                <Typography sx={styles.itemText}><strong>Export your data and erase it</strong> from the browser with one click.</Typography>
                            </li>
                        </ul>
                    </VStack>
                    <HStack justifyContent={'space-between'} sx={{width: '100%'}}>
                        <Button variant="text" sx={styles.button} startIcon={<ChevronLeftIcon/>} component={Link}
                                to="/info-privacy">Previous</Button>
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
    itemText: {
        fontSize: 20,
        textAlign: 'left',
    },
    button: {
        color: 'black',
        fontSize: 16,
    },
    list: {
        paddingLeft: '20px',
        listStyleType: 'disc',
    },
    listItem: {
        marginBottom: '8px',
    }
}


export default InfoAccount;
