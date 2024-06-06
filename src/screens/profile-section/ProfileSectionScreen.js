import React, {useState} from 'react';
import { Typography } from '@mui/material';
import VStack from "../../components/VStack";
import Layout from "../../components/Layout";
import {useParams} from "react-router-dom";

const ProfileSectionScreen = () => {
    const { id } = useParams();
    //const [data, setData] = useState(null);

    return (
        <Layout>
            <VStack>
                <VStack gap={1}>
                    <Typography variant="h4" gutterBottom sx={styles.titleText}>
                        {id}
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                        Bevor wir losgehen können, benötigen wir noch einen Benutzernamen von dir.
                    </Typography>
                </VStack>
            </VStack>
        </Layout>
    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
    },
    subTitleText: {
        fontSize: '16px',
        fontWeight: '400'
    }
};

export default ProfileSectionScreen;
