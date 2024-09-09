const defaultFlags = {
    newFeedbackSection: false,
    newCollaborationSection: false,
};

const getFeatureFlag = (flag) => {
    const storedFlag = localStorage.getItem(flag);
    return storedFlag !== null ? JSON.parse(storedFlag) : defaultFlags[flag];
};

const featureFlags = {
    newFeature: getFeatureFlag('newFeature'),
    betaFeature: getFeatureFlag('betaFeature'),
};

export const setFeatureFlag = (flag, value) => {
    localStorage.setItem(flag, JSON.stringify(value));
    window.location.reload();
};

export default featureFlags;
