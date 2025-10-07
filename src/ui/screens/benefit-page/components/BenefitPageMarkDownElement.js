import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography, Box } from "@mui/material";

const BenefitPageMarkdownElement = ({ content, icon = null }) => {
  return (
    <ReactMarkdown
      components={{
        h1: (props) => <Typography variant="h1" gutterBottom {...props} />,
        h2: (props) => <Typography variant="h2" gutterBottom {...props} />,
        h3: (props) => <Typography variant="h3" gutterBottom {...props} />,
        h4: (props) => <Typography variant="h4" gutterBottom {...props} />,
        h5: (props) => <Typography variant="h5" gutterBottom {...props} />,
        h6: (props) => <Typography variant="h6" gutterBottom {...props} />,
        p: (props) => <Typography variant="body1" component="p" {...props} />,

        ul: ({ node, ...props }) => (
          <Box
            component="ul"
            sx={{
              mt: 0.5,
              mb: 1.25,
              pl: icon ? 0 : 2.25,
              listStyleType: icon ? "none" : "disc",
              listStylePosition: "outside",
            }}
            {...props}
          />
        ),
        li: ({ node, children, ...props }) => {
          if (icon) {
            return (
              <Box
                component="li"
                sx={{ display: "list-item", mb: 1, listStyleType: "none" }}
                {...props}
              >
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Box sx={{ mr: 1, mt: "2px" }}>{icon}</Box>
                  <Typography variant="body1" component="div">{children}</Typography>
                </Box>
              </Box>
            );
          }
          return (
            <Box
              component="li"
              sx={{ display: "list-item", mb: 1 }}
              {...props}
            >
              <Typography variant="body1" component="div">{children}</Typography>
            </Box>
          );
        },
        span: (props) => <Typography variant="body2" component="span" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default BenefitPageMarkdownElement;