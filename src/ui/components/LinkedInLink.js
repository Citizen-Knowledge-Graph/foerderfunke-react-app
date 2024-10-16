import HStack from "./HStack";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link} from "@mui/material";
import React from "react";

const LinkedInLink = ({linkedin}) => (
    <HStack gap={1} alignItems={'center'}>
        <LinkedInIcon/>
        <Link
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'underline', color: 'inherit' }}
        >LinkedIn</Link>
    </HStack>
);

export default LinkedInLink;
