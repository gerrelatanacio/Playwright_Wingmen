// import {
//   test,
//   expect,
//   Browser,
//   BrowserContext,
//   Page,
//   chromium,
// } from "@playwright/test";
import { test, expect } from "./fixtures/customizedFixture";

const email: string = "demo_wisp_admin@wingmen.dk";
const password: string = "Admin1022!";
const url: string = "https://wmn-t-wisp-wa.azurewebsites.net/";

test("Wingmen WISP Login Setup", async ({ page, loginPage, homePage }) => {
  await loginPage.logintoWISP(email, password);
  await page.goto(url);
  await homePage.validateWelcomeMessage();
  await page.context().storageState({ path: "./LoginWISPAuth.json" });
});

//CAN BE DELETED ALREADY
// export default async function globalSetup() {
//   const browser: Browser = await chromium.launch();
//   const context: BrowserContext = await browser.newContext();
//   const page: Page = await context.newPage();

//   //Wingmen WISP Login
//   const loginPage = new LoginPage(page);
//   loginPage.logintoWISP(email, password);
//   await expect(page.locator(".MuiCardHeader-title")).toBeVisible();
//   await page.context().storageState({ path: "./LoginWISPAuth.json" });
//   await browser.close();
// }
