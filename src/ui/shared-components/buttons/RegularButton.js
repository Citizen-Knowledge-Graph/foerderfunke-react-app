import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useTranslation from "@/ui/language/useTranslation";
import buttonStyles from "./ButtonStyles";

const sizeStyles = {
  small: {
    padding: "9px 16px",
    fontSize: "14px",
    borderRadius: "10px",
  },
  medium: {
    padding: "12px 20px",
    fontSize: "18px",
  },
  large: {
    padding: "14px 24px",
    fontSize: "20px",
  },
};

const RegularButton = ({
  variant,
  text = "home.global.actionButton",
  link = null,
  onClick = null,
  size = "medium",
}) => {
  const { t } = useTranslation();
  const chosenSizeStyles = sizeStyles[size] || sizeStyles.medium;
  const chosenVariantStyles = buttonStyles[variant] || buttonStyles.default;

  return (
    <Button
      variant="contained"
      sx={{
        ...chosenSizeStyles,
        ...chosenVariantStyles,
      }}
      {...(link
        ? {
            component: Link,
            to: link,
          }
        : {})}
      onClick={onClick || undefined}
    >
      {t(text)}
    </Button>
  );
};

export default RegularButton;