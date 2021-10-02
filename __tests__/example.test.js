const expect = require('expect-playwright');

test("Test passed with tms link @test1", async () => {
  /**
  * @issue https://github.com/d-shch/playwright-jest-circus-allure/issues/1
  */

  await page.goto('https://github.com/d-shch/playwright-jest-circus-allure/issues/1')
  await expect(page).toHaveText('.js-issue-title', 'Test issue')
})

test("Test failed with attach screenshot @test2", async () => {
  await page.goto('https://github.com/d-shch/playwright-jest-circus-allure/issues/1')
  await expect(page).toHaveText('.js-issue-title', 'Fail')
})
