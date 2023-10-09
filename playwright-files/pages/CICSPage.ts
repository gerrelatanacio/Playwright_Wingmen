import { Page, Locator } from "@playwright/test";

export default class CICSPage {
  constructor(public page: Page) {}

  private readonly cicsConfigurations: Locator = this.page.locator(
    ".sub-menu [href='#/cics']']"
  );
  private readonly cicsRenewals: Locator = this.page.locator(
    ".sub-menu [href='#/renewal']"
  );

  async clickOnConfigurations() {
    await this.cicsConfigurations.click();
    console.log("done clicking on Configurations");
  }

  async clickOnRenewals() {
    await this.cicsRenewals.click();
    console.log("done clicking on Renewals");
  }
}
