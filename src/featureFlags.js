const defaultFlags = {
    subindividuals: false,
    showMermaidRuleGraph: true,
    bielefunke: true
};

const getFeatureFlag = (flag) => {
    const storedFlag = localStorage.getItem(flag);
    return storedFlag !== null ? JSON.parse(storedFlag) : defaultFlags[flag];
};

const featureFlags = {
    subindividuals: getFeatureFlag('subindividuals'),
    showMermaidRuleGraph: getFeatureFlag('showMermaidRuleGraph'),
    bielefunke: getFeatureFlag('bielefunke')
};

export const setFeatureFlag = (flag, value) => {
    localStorage.setItem(flag, JSON.stringify(value));
    window.location.reload();
};

export default featureFlags;
