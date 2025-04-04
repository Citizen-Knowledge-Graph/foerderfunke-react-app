const defaultFlags = {
    newFeedbackSection: true,
    newCollaborationSection: true,
    newLanguageToggle: true,
    newActivityLog: true,
    showNearestCounselingCentre: false
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
    showNearestCounselingCentre: getFeatureFlag('showNearestCounselingCentre'),
};

export const setFeatureFlag = (flag, value) => {
    localStorage.setItem(flag, JSON.stringify(value));
    window.location.reload();
};

export default featureFlags;
