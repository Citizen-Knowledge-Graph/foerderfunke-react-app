import React from 'react';
import {Typography} from "@mui/material";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import GithubCommitElement from "./GithubCommitElement";

const GithubCommitsList = ({commits}) => {

    return (
        <VStack sx={{width: '100%'}}>
            <HStack justifyContent={'flex-end'} sx={styles.listHeaderBox}>
                <Typography sx={styles.listTitle}>
                    Last 5 commits
                </Typography>
            </HStack>
            <VStack>
                {
                    commits.map((item, index) => {
                        return (
                            <GithubCommitElement
                                key={index}
                                commit={item}
                                showBorderBottom={index < commits.length - 1}
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
        fontSize: '20px',
        fontWeight: 'bold'
    }
}

export default GithubCommitsList;

