const defaultFlags = {
    newFeedbackSection: false,
    newCollaborationSection: false,
    newLanguageToggle: false,
};

const getFeatureFlag = (flag) => {
    const storedFlag = localStorage.getItem(flag);
    return storedFlag !== null ? JSON.parse(storedFlag) : defaultFlags[flag];
};

const featureFlags = {
    newFeedbackSection: getFeatureFlag('newFeedbackSection'),
    newCollaborationSection: getFeatureFlag('newCollaborationSection'),
    newLanguageToggle: getFeatureFlag('newLanguageToggle'),
};

export const setFeatureFlag = (flag, value) => {
    localStorage.setItem(flag, JSON.stringify(value));
    window.location.reload();
};

export default featureFlags;
