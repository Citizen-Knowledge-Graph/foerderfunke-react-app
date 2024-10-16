import React from "react";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import {Typography} from "@mui/material";
import globalStyles from "../../../../../styles/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import useTranslation from "../../../../../language/useTranslation";


const GithubCommitElement = ({commit, showBorderBottom}) => {
    const { t } = useTranslation();
    const borderBottom = showBorderBottom ? '1px solid rgba(252, 215, 85)' : 'none';

    const mapDate = (date) => {
        const dateObj = new Date(date);
        const today = new Date();

        dateObj.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        const diffTime = today - dateObj;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            return t('activityLog.gitCommits.today');
        } else if (diffDays === 1) {
            return t('activityLog.gitCommits.yesterday');
        } else {
            return t('activityLog.gitCommits.daysAgo', { count: diffDays });
        }
    };

    return (
        <HStack justifyContent={'space-between'} alignItems={'flex-start'}
                sx={{...styles.commitBox, borderBottom: borderBottom}}>
            <VStack gap={1} alignItems={'flex-start'}>
                <Typography sx={styles.title}>
                    {commit.commit_message}
                </Typography>
                <Typography sx={styles.repoName}>
                    {commit.repo_name}
                </Typography>
            </VStack>
            <VStack gap={1} justifyContent={'flex-start'} alignItems={'flex-end'} sx={styles.dateBox}>
                <Typography sx={styles.date}>
                    {mapDate(commit.timestamp)}
                </Typography>
                <a href={commit.commit_url} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{fontSize: 24, color: 'black'}}/>
                </a>
            </VStack>
        </HStack>
    )
}

const styles = {
    commitBox: {
        paddingBottom: '16px',
        paddingTop: '0px',
    },
    title: {
        fontSize: '20px',
    },
    dateBox: {
        minWidth: '90px',
    },
    date: {
        fontSize: '16px',
        fontWeight: '300',
        color: globalStyles.colorDarkGrey,
        textAlign: 'right'
    },
    repoName: {
        fontSize: '16px',
        fontWeight: '300',
        color: globalStyles.colorDarkGrey,
        textAlign: 'right'
    },
}

export default GithubCommitElement;
