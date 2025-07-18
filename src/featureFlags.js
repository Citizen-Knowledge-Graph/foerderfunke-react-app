const defaultFlags = {
    showNearestCounselingCentre: false,
    showMermaidRuleGraph: false,
    runwaysActive: false
};

const getFeatureFlag = (flag) => {
    const storedFlag = localStorage.getItem(flag);
    return storedFlag !== null ? JSON.parse(storedFlag) : defaultFlags[flag];
};

const featureFlags = {
    showNearestCounselingCentre: getFeatureFlag('showNearestCounselingCentre'),
    showMermaidRuleGraph: getFeatureFlag('showMermaidRuleGraph'),
    runwaysActive: getFeatureFlag('runwaysActive')
};

export const setFeatureFlag = (flag, value) => {
    localStorage.setItem(flag, JSON.stringify(value));
    window.location.reload();
};

export default featureFlags;
