import { Page, Locator, expect } from "@playwright/test";
export default class HomePage {
  constructor(public page: Page) {}

  //Locators
  private readonly pucs: Locator = this.page.locator(
    ".list-wrapper > [href='#/files']"
  );
  private readonly cics: Locator = this.page.locator(
    ".list-wrapper > [href='#/cics']"
  );
  private readonly admin: Locator = this.page.locator(
    ".list-wrapper > [href='#/cisco']"
  );
  private readonly welcomeMessage: Locator = this.page.locator(
    ".MuiCardHeader-title"
  );
  //Actions

  async clickOnPUCS() {
    await this.pucs.click();
  }
  async clickOnCICS() {
    await this.cics.click();
  }
  async clickOnADMIN() {
    await this.admin.click();
  }
  async navigateToHome() {
    await this.page.goto("https://wmn-t-wisp-wa.azurewebsites.net/");
  }
  async validateWelcomeMessage() {
    expect(await this.welcomeMessage.textContent()).toContain(
      "Welcome to WISP"
    );
  }
}
