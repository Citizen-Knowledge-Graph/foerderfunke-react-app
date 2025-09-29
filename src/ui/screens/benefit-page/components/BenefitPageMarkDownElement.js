import React from 'react';
import ReactMarkdown from "react-markdown";
import { Typography, Box } from "@mui/material";

const BenefitPageMarkdownElement = ({ content, icon = null }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => (<Typography variant="h1" gutterBottom {...props} />),
        h2: ({ node, ...props }) => (<Typography variant="h2" gutterBottom {...props} />),
        h3: ({ node, ...props }) => (<Typography variant="h3" gutterBottom {...props} />),
        h4: ({ node, ...props }) => (<Typography variant="h4" gutterBottom {...props} />),
        h5: ({ node, ...props }) => (<Typography variant="h5" gutterBottom {...props} />),
        h6: ({ node, ...props }) => (<Typography variant="h6" gutterBottom {...props} />),
        p: ({ node, ...props }) => (<Typography variant="body1" component="p" {...props} />),
        ul: ({ node, ...props }) => (
          <Box
            component="ul"
            sx={{
              mt: 0.5,
              mb: 1.25,
              pl: icon ? 0 : 2.25,
              listStyle: icon ? "none" : "disc",
            }}
            {...props}
          />
        ),
        li: ({ node, children, ...props }) =>
          icon ? (
            <Box
              component="li"
              sx={{ display: "flex", alignItems: "flex-start", mb: 1, listStyle: "none" }}
            >
              <Box sx={{ mr: 1, mt: "2px" }}>{icon}</Box>
              <Typography variant="body1" component="span">
                {children}
              </Typography>
            </Box>
          ) : (
            <Box
              component="li"
              sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}
            >
              <li {...props}>
                <Typography variant="body1" component="span">
                  {children}
                </Typography>
              </li>
            </Box>
          ),
        span: ({ node, ...props }) => (<Typography variant="body2" component="span" {...props} />),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default BenefitPageMarkdownElement;