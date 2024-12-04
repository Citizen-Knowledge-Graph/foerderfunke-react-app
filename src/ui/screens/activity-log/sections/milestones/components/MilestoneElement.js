import React from "react";
import VStack from "../../../../../shared-components/VStack";
import HStack from "../../../../../shared-components/HStack";
import {IconButton, Typography} from "@mui/material";
import globalStyles from "../../../../../styles/styles";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const MilestoneElement = ({milestone, showBorderBottom}) => {
    const borderBottom = showBorderBottom ? '1px solid rgba(252, 215, 85)' : 'none';

    return (
        <VStack gap={2} sx={{...styles.milestoneBox, borderBottom: borderBottom}}>
            <HStack justifyContent={'space-between'}>
                <Typography sx={styles.title}>
                    {milestone.title}
                </Typography>
                <Typography sx={styles.date}>
                    {milestone.date}
                </Typography>
            </HStack>
            <VStack>
                <HStack>
                    <Typography>
                        {milestone.description}
                    </Typography>
                </HStack>
                <HStack>
                    {
                        milestone.links?.length > 0 && milestone.links.map((link, index) => {
                            return (
                                <IconButton
                                    component="a"
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={styles.linkButton}
                                >
                                    <HStack gap={1} alignItems={'center'}>
                                        <OpenInNewIcon sx={{fontSize: 16, color: 'black'}}/>
                                        <Typography sx={styles.linkText} key={index}>
                                            {link.title}
                                        </Typography>
                                    </HStack>
                                </IconButton>
                            )
                        })
                    }
                </HStack>
            </VStack>
        </VStack>
    )
}

const styles = {
    milestoneBox: {
        paddingBottom: '16px',
        paddingTop: '0px',
    },
    title: {
        flex: 3,
        fontSize: '20px',
        fontWeight: 'bold'
    },
    date: {
        flex: 1,
        fontSize: '16px',
        fontWeight: '300',
        color: globalStyles.colorDarkGrey,
        textAlign: 'right'
    },
    description: {
        lineHeight: '1.5',
        margin: '0px',
    },
    linkButton: {
        borderRadius: '4px',
        padding: '4px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: globalStyles.primaryColor,
        '&:hover': {
            backgroundColor: globalStyles.primaryColor,
        },
    },
    linkText: {
        fontSize: '12px',
        color: 'black'
    }
}

export default MilestoneElement;
