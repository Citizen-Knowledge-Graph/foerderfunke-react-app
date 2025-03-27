const path = require('path');

module.exports = {
    webpack: function (config) {
        config.resolve.alias = {
          ...(config.resolve.alias || {}),
          '@': path.resolve(__dirname, 'src'),
        };
    
        config.ignoreWarnings = [
          ...(config.ignoreWarnings || []),
          {
            message: /Failed to parse source map/,
          },
        ];
    
        return config;
      },

  jest: function (config) {
    config.moduleNameMapper = {
      ...(config.moduleNameMapper || {}),
      '^@/(.*)$': '<rootDir>/src/$1',
    };

    return config;
  },
};