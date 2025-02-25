import React, { useState } from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import useTranslation from "../../../../language/useTranslation";
import theme from "../../../../../theme";
import { HBox, VBox } from "../../../../shared-components/LayoutBoxes";
import { Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useFetchLatestCommitsHandler from "../../../activity-log/sections/commithistory/hooks/useFetchLatestCommitsHandler";
import GithubCommitElement from "../../../activity-log/sections/commithistory/components/GithubCommitElement";
import GitHubIcon from "@mui/icons-material/GitHub";

const LandingPagePrinciples = ({ isDesktop }) => {
    const { t } = useTranslation();
    const locket = `${process.env.PUBLIC_URL}/assets/images/landing-page/lockets.svg`;
    const { commits, error } = useFetchLatestCommitsHandler();

    const [showCommits, setShowCommits] = useState(false);

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VBox sx={{
                paddingTop: '104px',
                paddingBottom: '104px',
                paddingLeft: '96px',
                paddingRight: '96px',
                alignItems: 'center',
            }}>
                <VBox sx={{ gap: theme.spacing(10) }}>
                    <HBox sx={{ gap: theme.spacing(8) }}>
                        <VBox sx={{ maxWidth: '760px', gap: theme.spacing(6) }}>
                            <Typography variant="h1" sx={{ color: theme.palette.black.main }}>
                                {t('home.principles.header')}
                            </Typography>
                            <VBox>
                                <Typography variant="h4" sx={{ fontWeight: 400, color: theme.palette.black.main }}>
                                    {t('home.principles.part1Header')}
                                </Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.black.main }}>
                                    {t('home.principles.part1Text')}
                                </Typography>
                            </VBox>
                            <VBox>
                                <Typography variant="h4" sx={{ fontWeight: 400, color: theme.palette.black.main }}>
                                    {t('home.principles.part2Header')}
                                </Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.black.main }}>
                                    {t('home.principles.part2Text')}
                                </Typography>
                            </VBox>
                        </VBox>
                        <VBox>
                            <img
                                src={locket}
                                alt="logo"
                            />
                        </VBox>
                    </HBox>
                    <VBox gap={2}>
                        <HBox sx={{
                            width: "100%",
                            justifyContent: 'space-between',
                            paddingBottom: theme.spacing(2),
                            borderBottom: `1px solid ${theme.palette.black.light}`
                        }}>
                            <HBox sx={{ alignItems: 'center' }} onClick={() => setShowCommits(!showCommits)}>
                                <IconButton
                                    sx={{
                                        transition: "transform 0.3s",
                                        transform: showCommits ? "rotate(180deg)" : "rotate(0deg)",
                                        marginLeft: "8px",
                                    }}
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                                <Typography variant="h4" sx={{ fontWeight: 400, color: theme.palette.black.main }}>
                                    {t('home.principles.githubHeader')}
                                </Typography>
                            </HBox>
                            <HBox sx={{ alignItems: 'center' }}>
                                <GitHubIcon sx={{ fontSize: 24, color: "text.primary" }} />
                                <Typography variant="body1">
                                {t('home.principles.githubText')}
                                </Typography>
                            </HBox>
                        </HBox>
                        <Collapse in={showCommits}>
                            {commits.map((item) => (
                                <GithubCommitElement key={item.sha || item.id} commit={item} />
                            ))}
                            {error && (
                                <Typography color="error" sx={{ marginTop: 2 }}>
                                    {error}
                                </Typography>
                            )}
                        </Collapse>
                    </VBox>
                </VBox>
            </VBox>
        </LandingPageSectionWrapper>
    );
}

export default LandingPagePrinciples;
