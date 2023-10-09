import { Page, test } from "@playwright/test";
import LoginPage from "../playwright-files/pages/LoginPage";
import HomePage from "../playwright-files/pages/HomePage";
import CICSPage from "../playwright-files/pages/CICSPage";

let loginPage: LoginPage;
let homePage: HomePage;
let cics: CICSPage;

const url = "https://wmn-t-wisp-wa.azurewebsites.net/";
const email = "demo_wisp_admin@wingmen.dk";
const password = "Admin1022!";

test("TC01_Login to WISP", async ({ page }) => {
  test.setTimeout(60000);

  loginPage = new LoginPage(page);
  await loginPage.logintoWISP(email, password);
  await page.goto(url, {
    timeout: 60000,
  });

  homePage = new HomePage(page);
  await homePage.clickOnCICS();

  cics = new CICSPage(page);
  await cics.clickOnRenewals();
  await homePage.navigateToHome();

  await homePage.navigateToHome();
  await homePage.validateWelcomeMessage();
  await page.waitForTimeout(5000);
});

test("TC02_Open CICS Configurations", async ({ page }) => {
  test.setTimeout(60000);

  loginPage = new LoginPage(page);
  await loginPage.logintoWISP(email, password);
  homePage = new HomePage(page);
  await homePage.navigateToHome();
  await homePage.clickOnCICS();

  await page.waitForTimeout(10000);
});
