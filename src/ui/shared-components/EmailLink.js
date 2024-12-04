import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from '@mui/material';
import HStack from "./HStack";

const EmailLink = ({email}) => (
    <HStack gap={1} alignItems={'center'}>
        <EmailIcon/>
        <Link href={`mailto:${email}`} sx={{ textDecoration: 'underline', color: 'inherit' }}>{email}</Link>
    </HStack>
);

export default EmailLink;
