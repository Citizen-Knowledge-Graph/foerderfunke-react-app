import React, { useState } from "react";
import useTranslation from "../../../../../language/useTranslation";
import theme from "../../../../../../theme";
import { HBox, VBox } from "../../../../../shared-components/LayoutBoxes";
import { Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useFetchLatestCommitsHandler from "../../../../activity-log/sections/commithistory/hooks/useFetchLatestCommitsHandler";
import GithubCommitElement from "../../../../activity-log/sections/commithistory/components/GithubCommitElement";
import GitHubIcon from "@mui/icons-material/GitHub";

const LandingPagePrinciplesMobile = ({ isDesktop }) => {
    const { t } = useTranslation();
    const locket = `${process.env.PUBLIC_URL}/assets/images/landing-page/lockets.svg`;
    const { commits, error } = useFetchLatestCommitsHandler();
    const [showCommits, setShowCommits] = useState(false);

    return (
        <VBox sx={{alignItems: 'center'}}>
            <VBox sx={{ gap: theme.spacing(8), alignItems: 'center' }}>
                <img
                    src={locket}
                    alt="logo"
                    style={{ maxWidth: "330px" }}
                />
                <HBox sx={{ alignItems: 'center', gap: theme.spacing(8) }}>
                    <VBox sx={{ gap: theme.spacing(6) }}>
                        <Typography variant="h1" sx={{ color: theme.palette.black.main }}>
                            {t('home.principles.header')}
                        </Typography>
                        <VBox sx={{ gap: theme.spacing(4) }}>
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
                    </VBox>
                </HBox>
                <VBox sx={{ width: "100%" }}>
                    <VBox
                        onClick={() => setShowCommits(!showCommits)}
                        sx={{
                            width: "100%",
                            paddingBottom: theme.spacing(2)
                        }}>
                        <HBox sx={{ alignItems: 'center' }}>
                            <Typography variant="h4" sx={{ fontWeight: 400, color: theme.palette.black.main }}>
                                {t('home.principles.githubHeader')}
                            </Typography>
                        </HBox>
                        <HBox sx={{ alignItems: 'center' }}>
                            <IconButton
                                sx={{
                                    transition: "transform 0.3s",
                                    transform: showCommits ? "rotate(180deg)" : "rotate(0deg)",
                                    marginLeft: "8px",
                                }}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                            <GitHubIcon sx={{ fontSize: 24, color: "text.primary" }} />
                            <Typography variant="body1">
                                {t('home.principles.githubText')}
                            </Typography>
                        </HBox>
                    </VBox>
                    <Collapse in={showCommits}>
                        {commits.map((item, index) => (
                            <GithubCommitElement key={index} commit={item} />
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
    );
}

export default LandingPagePrinciplesMobile;
