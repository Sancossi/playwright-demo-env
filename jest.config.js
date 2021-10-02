module.exports = {
  globalSetup: './setup.js',
  globalTeardown: './teerdown.js',
  testEnvironment: './playwright_environment.js',
  testRunner: 'jest-circus/runner',
  testTimeout: 10000,
  testEnvironmentOptions: {
    jiraUrl: ""
  }
}
