const playwright = require('playwright');
const AllureNodeEnvironment = require('jest-circus-allure-environment').default;


class PlaywrightEnviroment extends AllureNodeEnvironment {
  async setup() {
    await super.setup();
    this.global.browser = await playwright.chromium.launch({headless: false});

    this.global.context = await this.global.browser.newContext();
    this.global.page = await this.global.context.newPage();
  }

  async teardown() {
    await super.setup();
    await this.global.page.close();
    await this.global.browser.close();
  }

  async handleTestEvent(event, state) {
    await super.handleTestEvent(event, state);
    switch (event.name) {
      case 'test_fn_failure':
        await this.global.allure.attachment(
          "Screenshot",
          await this.global.page.screenshot(),
          "image/png"
        )
      default:
        break
    }
  }
}

module.exports = PlaywrightEnviroment;
