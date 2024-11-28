import HStack from "./HStack";
import GitHubIcon from '@mui/icons-material/GitHub';
import {Link} from "@mui/material";
import React from "react";

const GitHubLink = ({href}) => (
    <HStack gap={1} alignItems={'center'}>
        <GitHubIcon/>
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'underline', color: 'inherit' }}
        >GitHub</Link>
    </HStack>
);

export default GitHubLink;
