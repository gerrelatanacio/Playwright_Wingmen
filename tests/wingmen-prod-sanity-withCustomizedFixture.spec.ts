import { test, expect } from "../playwright-files/fixtures/customizedFixture";

const url = "https://wmn-t-wisp-wa.azurewebsites.net/";
const email = "demo_wisp_admin@wingmen.dk";
const password = "Admin1022!";

test.only("TC01_EstimateCreation", async ({ page, homePage, cicsPage }) => {
  await homePage.navigateToHome();
  await page.waitForTimeout(3000);
});

test("TC02_Open CICS Configurations", async ({ page, loginPage, homePage }) => {
  await homePage.navigateToHome();
  await homePage.clickOnCICS();
  await page.waitForTimeout(3000);
});
