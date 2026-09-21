module.exports = {
  default: {
    require: ["steps/**/*.js", "support/**/*.js"],
    paths: ["features/**/*.feature"],
    format: ["progress-bar", "html:reports/cucumber-report.html"],
  },
};
