import React, {useState} from "react";
import featureFlags, {setFeatureFlag} from "../../../../../../featureFlags";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    FormGroup, IconButton,
    Switch
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';


const FeatureToggle = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const [flags, setFlags] = useState(() => {
        const initialFlags = {};
        for (const key in featureFlags) {
            initialFlags[key] = featureFlags[key];
        }
        return initialFlags;
    });

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleToggle = (flagKey) => {
        const updatedFlags = {...flags, [flagKey]: !flags[flagKey]};
        setFlags(updatedFlags); // Update state
        setFeatureFlag(flagKey, !flags[flagKey]); // Update in localStorage
    };

    return (
        <>
            <IconButton onClick={handleDialogOpen} sx={{ p: 0, alignSelf: 'flex-start' }}>
                <SettingsIcon />
            </IconButton>

            <Dialog open={dialogOpen} onClose={handleDialogClose}>
                <DialogTitle>Feature Toggles</DialogTitle>
                <DialogContent>
                    <FormGroup>
                        {Object.keys(flags).map((flagKey) => (
                            <FormControlLabel
                                key={flagKey}
                                control={
                                    <Switch
                                        checked={flags[flagKey]}
                                        onChange={() => handleToggle(flagKey)}
                                        name={flagKey}
                                    />
                                }
                                label={`Enable ${flagKey}`}
                            />
                        ))}
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default FeatureToggle;
