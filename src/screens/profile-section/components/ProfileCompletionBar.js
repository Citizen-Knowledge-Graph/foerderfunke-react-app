import React from "react";
import HStack from "../../../components/HStack";
import LinearProgress from '@mui/material/LinearProgress';
import {grey} from "@mui/material/colors";

const ProfileCompletionBar = ({length, index}) => {
    return (
        <HStack justifyContent="space-between" sx={{width: '100%'}} gap={1}>
            <LinearProgress variant="determinate" value={(index/length) * 100} sx={styles.progressBar}/>
        </HStack>
    );
}

const styles = {
    progressBar: {
        width: '100%',
        height: '10px',
        backgroundColor: grey[300],
        borderRadius: '5px',
    }
}

export default ProfileCompletionBar;
