import { test as base } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CICSPage from "../pages/CICSPage";

type customizedFixture = {
  loginPage: LoginPage;
  homePage: HomePage;
  cicsPage: CICSPage;
};

export const test = base.extend<customizedFixture>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  cicsPage: async ({ page }, use) => {
    await use(new CICSPage(page));
  },
});

export { expect } from "@playwright/test";
