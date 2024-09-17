import React from "react";
import {Typography} from "@mui/material";
import VStack from "../../components/VStack";
import InfoScreen from "../info-screen/components/InfoScreen";

const ActivityLogScreen = () => {
    return (
        <InfoScreen title={'Activity log'}>
            <VStack sx={styles.infoBox}>
                <Typography sx={styles.infoText}>
                    <strong>What's happening at the moment:</strong>
                    <ul>
                        <li>
                            A collaboration with ZenDiS is shaping up
                        </li>
                        <li>
                            We applied for some grants &#129310;
                        </li>
                    </ul>
                </Typography>
                <Typography sx={styles.infoText}>
                    <strong>Milestones in the past:</strong>
                    <ul>
                        <li>
                            <em>2024-09-17</em> Add feedback and collaboration section
                        </li>
                        <li>
                            <em>2024-09-03</em> Live with a first version of 10 social benefits for the <a href="https://prototypefund.de/demo-day/">Prototype Fund
                            Demo Day</a>
                        </li>
                    </ul>
                </Typography>
            </VStack>
        </InfoScreen>
    );
}

const styles = {
    infoText: {
        fontSize: '20px',
        textAlign: 'left',
    },
    infoBox: {
        width: '100%',
    }
}

export default ActivityLogScreen;
