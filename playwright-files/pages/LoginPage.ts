import { Page, Locator } from "@playwright/test";
export default class LoginPage {
  constructor(public page: Page) {}

  //Locators
  private readonly emailField: Locator = this.page.getByPlaceholder(
    "Email, phone, or Skype"
  );
  private readonly nextBtn: Locator = this.page.getByRole("button", {
    name: "Next",
  });
  private readonly passwordField: Locator =
    this.page.getByPlaceholder("Password");
  private readonly signinBtn: Locator = this.page.getByRole("button", {
    name: "Sign in",
  });
  private readonly yesBtn: Locator = this.page.getByRole("button", {
    name: "Yes",
  });
  private readonly initialURL: string =
    "https://login.microsoftonline.com/1a172cd1-4193-4225-8540-cc1ef65ebb2c/oauth2/v2.0/authorize?client_id=d8369b51-0491-45e3-afbb-6bb19f639720&redirect_uri=https%3A%2F%2Fwmn-t-wisp-wa.azurewebsites.net%2Fsignin-oidc&response_type=id_token&scope=openid%20profile&response_mode=form_post&nonce=638281921683276650.YjQ0NDkxNTAtYTFiMy00Y2I4LTk1NzgtNjcxZGJmZjVmMzk5YTA3MDg3ZGItOGYyMi00MjIwLWJmNTktY2NjZWRmMjBiODVk&client_info=1&x-client-brkrver=IDWeb.1.25.0.0&state=CfDJ8DbdqJN7WCxBoCDxPNf6Pj5_EZ18d12Hvq-voT-Q0W841HF5ghZEjbWLcIghO4SSvFFHA-4d4BeE118bxlYkVzzZO6vaRRpz9akkTrqbvz2SGsgBwk9EZtiuZHNbDnwpjdFwtn8pMOqwsfNb4CU-VeTq7VskUra1o7BiYPRb0OjWB8oYxwXxfm695h_AfsO0sUXk2zjV7dAJMuEgOv7BS8UuMqZQwp1P3zCT1grtxcgZHe6wxBfHAuJM1og7ZAt807NWu6vdtMqf97-8R9sV08pIr4OZ_AyJENE781iaxepWFlK34cQzJ2YKGy0JEipTQg&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.17.0.0&sso_reload=true";

  //Actions
  async enterEmail(email: string) {
    await this.emailField.type(email);
  }
  async clickNext() {
    await this.nextBtn.click();
  }
  async enterPassword(password: string) {
    await this.passwordField.type(password);
  }
  async clickSignIn() {
    await this.signinBtn.click();
  }
  async clickYes() {
    await this.yesBtn.click();
  }
  async logintoWISP(email: string, password: string) {
    await this.goToInitialURL();
    await this.enterEmail(email);
    await this.clickNext();
    await this.enterPassword(password);
    await this.clickSignIn();
    await this.clickYes();
  }
  async goToInitialURL() {
    this.page.goto(this.initialURL);
  }
}
