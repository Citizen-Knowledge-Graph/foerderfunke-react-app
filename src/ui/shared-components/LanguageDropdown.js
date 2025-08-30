import React from "react";
import { Select, MenuItem, Typography, Box } from "@mui/material";
import { HBox } from "@/ui/shared-components/LayoutBoxes";
import { LANG_OPTIONS } from "@/ui/language/useTranslation";
import { useLanguageStore } from '@/ui/storage/useLanguageStore';

const LanguageDropdown = ({ isApp }) => {
    const language = useLanguageStore((state) => state.language);
    const setLanguage = useLanguageStore((state) => state.setLanguage);

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    }

    return (
        <HBox alignItems="center">
            <Select
                value={language}
                variant="standard"
                onChange={handleLanguageChange}
                disableUnderline
                IconComponent={() => null}
                sx={{
                    backgroundColor: "white !important",
                    border: `1px solid ${isApp ? "white" : "#868B8E"}`,
                    borderRadius: "16px",
                    padding: "10px 12px",
                    color: isApp ? "white" : "black",

                    "& .MuiSelect-select": {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        minWidth: 0,
                        pr: "0 !important",
                    },
                    "& .MuiSelect-select:focus": { backgroundColor: "transparent !important" },
                }}
            >
                {LANG_OPTIONS.map((opt) => (
                    <MenuItem key={opt.code} value={opt.code}>
                        <HBox sx={{ gap: 1, alignItems: "center" }}>
                            <Box
                                sx={{
                                    width: 28,
                                    borderRadius: "4px",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={opt.icon}
                                    alt={opt.label}
                                    width="100%"
                                    height="100%"
                                    style={{ display: "block", opacity: 0.75 }}
                                />
                            </Box>
                            <Typography variant="body2" sx={{ color: isApp ? "white" : "black" }}>
                                {opt.label}
                            </Typography>
                        </HBox>
                    </MenuItem>
                ))}
            </Select>
        </HBox>
    );
}

export default LanguageDropdown;