import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useTranslation from "@/ui/language/useTranslation";
import buttonStyles from "./ButtonStyles";

const tileSizeStyles = {
  small: {
    padding: "12px 16px",
    borderRadius: "10px",
    minWidth: "120px",
  },
  medium: {
    padding: "32px",
    minWidth: "160px",
  },
  large: {
    padding: "20px 32px",
    minWidth: "200px",
  },
};

const TileButton = ({
  variant,
  title="home.global.actionButton",
  subtitle="home.global.actionButton",
  link = null,
  onClick = null,
  size = "medium",
}) => {
  const { t } = useTranslation();

  const chosenVariantStyles = buttonStyles[variant] || buttonStyles.default;
  const chosenSizeStyles = tileSizeStyles[size] || tileSizeStyles.medium;

  return (
    <Button
      variant="contained"
      sx={{
        ...chosenSizeStyles,
        ...chosenVariantStyles,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textTransform: "none",
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
      }}
      {...(link
        ? {
            component: Link,
            to: link,
          }
        : {})}
      onClick={onClick || undefined}
    >
      <Typography
        variant="h6"
        sx={{ color: 'inherit' }}
      >
        {t(title)}
      </Typography>
      <Typography
        variant="body2"
        sx={{ opacity: 0.8, color: 'inherit' }}
      >
        {t(subtitle)}
      </Typography>
    </Button>
  );
};

export default TileButton;