module.exports = {
    webpack: function (config) {
        return { ...config, ignoreWarnings: [/Failed to parse source map/] };
    },
    jest: function (config) {
        config.transformIgnorePatterns = [
            '[/\\\\]node_modules[/\\\\](?!axios[/\\\\]).+\\.(js|jsx|mjs|cjs|ts|tsx)$'
        ];
        return config;
    }
};
