import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import { Typography, Box, Collapse } from "@mui/material";
import theme from '@/theme';
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BenefitPageMarkdown = ({ title, content, icon = null, defaultExpanded = false }) => {
  const [open, setOpen] = useState(defaultExpanded);

  return (
    <VBox
      sx={{
        backgroundColor: 'white.main',
        padding: '32px',
        borderRadius: theme.shape.borderRadius,
        gap: 2,
      }}
    >
      <HBox
        sx={{ justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      >
        <Typography variant="h2" sx={{ fontWeight: 400, wordBreak: "break-word" }}>
          {title}
        </Typography>
        <IconButton
          aria-label="toggle section"
          aria-expanded={open}
          sx={{
            transition: "transform 0.3s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            ml: 1,
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </HBox>
      {
        open && (
          <Collapse in={open}>
            <VBox sx={{ gap: 2, maxWidth: 800 }}>
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
                        sx={{ display: "flex", alignItems: "flex-start", mb: 1.5, listStyle: "none" }}
                      >
                        <Box sx={{ mr: 1, mt: "2px" }}>{icon}</Box>
                        <Typography variant="body1" component="span">
                          {children}
                        </Typography>
                      </Box>
                    ) : (
                      <Box
                        component="li"
                        sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}
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
            </VBox>
          </Collapse>
        )
      }
    </VBox>
  );
};

export default BenefitPageMarkdown;