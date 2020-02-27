const { override } = require("customize-cra");

module.exports = override(useEslintRc(".eslintrc.json", { fix: true }));

// use self-made useEslintRc because we want to add options to eslint-loader
function useEslintRc(configFile, options) {
  return config => {
    const eslintRule = config.module.rules.filter(
      r =>
        r.use && r.use.some(u => u.options && u.options.useEslintrc !== void 0)
    )[0];

    const eslintOptions = eslintRule.use[0].options;
    eslintOptions.useEslintrc = true;
    eslintOptions.ignore = true;
    eslintOptions.configFile = configFile;
    delete eslintOptions.baseConfig;
    eslintRule.use[0].options = Object.assign(eslintOptions, options);

    const rules = config.module.rules.map(r =>
      r.use && r.use.some(u => u.options && u.options.useEslintrc !== void 0)
        ? eslintRule
        : r
    );
    config.module.rules = rules;

    return config;
  };
}
