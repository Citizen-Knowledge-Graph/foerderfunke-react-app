const defaultFlags = {
    newFeedbackSection: true,
    newCollaborationSection: true,
    newLanguageToggle: true,
    newActivityLog: true,
};

const getFeatureFlag = (flag) => {
    const storedFlag = localStorage.getItem(flag);
    return storedFlag !== null ? JSON.parse(storedFlag) : defaultFlags[flag];
};

const featureFlags = {
    newFeedbackSection: getFeatureFlag('newFeedbackSection'),
    newCollaborationSection: getFeatureFlag('newCollaborationSection'),
    newLanguageToggle: getFeatureFlag('newLanguageToggle'),
    newActivityLog: getFeatureFlag('newActivityLog'),
};

export const setFeatureFlag = (flag, value) => {
    localStorage.setItem(flag, JSON.stringify(value));
    window.location.reload();
};

export default featureFlags;
