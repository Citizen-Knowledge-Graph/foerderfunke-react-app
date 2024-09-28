import React from 'react';
import {Typography} from "@mui/material";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import MilestoneElement from "./MilestoneElement";

const MilestonesList = ({title, milestones}) => {
    return (
        <VStack sx={{width: '100%'}}>
            <HStack justifyContent={'flex-end'} sx={styles.listHeaderBox}>
                <Typography sx={styles.listTitle}>
                    {title}
                </Typography>
            </HStack>
            <VStack>
                {
                    milestones.map((milestone, index) => {
                        return (
                            <MilestoneElement
                                key={index}
                                milestone={milestone}
                                showBorderBottom={index < milestones.length - 1}
                            />
                        )
                    })
                }
            </VStack>
        </VStack>
    )
}

const styles = {
    listHeaderBox: {
        width: '100%',
        borderBottom: '2px solid rgba(189, 189, 189)',
    },
    listTitle: {
        fontSize: '28px',
        fontWeight: 'bold'
    }
}

export default MilestonesList;

