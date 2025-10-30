const defaultFlags = {
    subindividuals: false,
    matchingEnginePerformanceLogging: false,
    profileUpdates: false,
    writtenViolations: false
};

const getFeatureFlag = (flag) => {
    const storedFlag = localStorage.getItem(flag);
    return storedFlag !== null ? JSON.parse(storedFlag) : defaultFlags[flag];
};

const featureFlags = {
    subindividuals: getFeatureFlag('subindividuals'),
    matchingEnginePerformanceLogging: getFeatureFlag('matchingEnginePerformanceLogging'),
    profileUpdates: getFeatureFlag('profileUpdates'),
    writtenViolations: getFeatureFlag('writtenViolations'),
};

export const setFeatureFlag = (flag, value) => {
    localStorage.setItem(flag, JSON.stringify(value));
    window.location.reload();
};

export default featureFlags;
