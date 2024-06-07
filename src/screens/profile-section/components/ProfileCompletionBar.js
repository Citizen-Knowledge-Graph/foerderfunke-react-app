import React from "react";
import {Card} from "@mui/material";
import {green, yellow} from "@mui/material/colors";
import HStack from "../../../components/HStack";

const ProfileCompletionBar = ({ length, index }) => {
    return (
        <HStack justifyContent="space-between" sx={{ width: '100%' }} gap={1}>
            {Array.from({ length: length }).map((_, i) => (
                <Card
                    key={i}
                    sx={{
                        flexGrow: 1,
                        height: '10px',
                        backgroundColor: i === index ? yellow[500] : (i < index ? green[500] : 'rgba(0, 0, 0, 0.1)'),
                        boxShadow: 'none',
                        margin: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                />
            ))}
        </HStack>
    );
}

export default ProfileCompletionBar;
