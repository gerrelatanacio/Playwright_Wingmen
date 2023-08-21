import { test, expect } from "@playwright/test";

test("Validate WISP login", async ({ page }) => {
  // await page.goto(
  //   "https://login.microsoftonline.com/1a172cd1-4193-4225-8540-cc1ef65ebb2c/oauth2/v2.0/authorize?client_id=d8369b51-0491-45e3-afbb-6bb19f639720&redirect_uri=https%3A%2F%2Fwmn-t-wisp-wa.azurewebsites.net%2Fsignin-oidc&response_type=id_token&scope=openid%20profile&response_mode=form_post&nonce=638281921683276650.YjQ0NDkxNTAtYTFiMy00Y2I4LTk1NzgtNjcxZGJmZjVmMzk5YTA3MDg3ZGItOGYyMi00MjIwLWJmNTktY2NjZWRmMjBiODVk&client_info=1&x-client-brkrver=IDWeb.1.25.0.0&state=CfDJ8DbdqJN7WCxBoCDxPNf6Pj5_EZ18d12Hvq-voT-Q0W841HF5ghZEjbWLcIghO4SSvFFHA-4d4BeE118bxlYkVzzZO6vaRRpz9akkTrqbvz2SGsgBwk9EZtiuZHNbDnwpjdFwtn8pMOqwsfNb4CU-VeTq7VskUra1o7BiYPRb0OjWB8oYxwXxfm695h_AfsO0sUXk2zjV7dAJMuEgOv7BS8UuMqZQwp1P3zCT1grtxcgZHe6wxBfHAuJM1og7ZAt807NWu6vdtMqf97-8R9sV08pIr4OZ_AyJENE781iaxepWFlK34cQzJ2YKGy0JEipTQg&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.17.0.0"
  // );
  await page.goto(
    "https://login.microsoftonline.com/1a172cd1-4193-4225-8540-cc1ef65ebb2c/oauth2/v2.0/authorize?client_id=d8369b51-0491-45e3-afbb-6bb19f639720&redirect_uri=https%3A%2F%2Fwmn-t-wisp-wa.azurewebsites.net%2Fsignin-oidc&response_type=id_token&scope=openid%20profile&response_mode=form_post&nonce=638281921683276650.YjQ0NDkxNTAtYTFiMy00Y2I4LTk1NzgtNjcxZGJmZjVmMzk5YTA3MDg3ZGItOGYyMi00MjIwLWJmNTktY2NjZWRmMjBiODVk&client_info=1&x-client-brkrver=IDWeb.1.25.0.0&state=CfDJ8DbdqJN7WCxBoCDxPNf6Pj5_EZ18d12Hvq-voT-Q0W841HF5ghZEjbWLcIghO4SSvFFHA-4d4BeE118bxlYkVzzZO6vaRRpz9akkTrqbvz2SGsgBwk9EZtiuZHNbDnwpjdFwtn8pMOqwsfNb4CU-VeTq7VskUra1o7BiYPRb0OjWB8oYxwXxfm695h_AfsO0sUXk2zjV7dAJMuEgOv7BS8UuMqZQwp1P3zCT1grtxcgZHe6wxBfHAuJM1og7ZAt807NWu6vdtMqf97-8R9sV08pIr4OZ_AyJENE781iaxepWFlK34cQzJ2YKGy0JEipTQg&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.17.0.0&sso_reload=true"
  );
  await page.getByPlaceholder("Email, phone, or Skype").click();
  const emailField = page.getByPlaceholder("Email, phone, or Skype");
  console.log(`Before entering the data: ${await emailField.inputValue()}`);
  await emailField.type("demo_wisp_admin@wingmen.dk");
  console.log(`After entering the data: ${await emailField.inputValue()}`);
  expect(await emailField.inputValue()).toContain("demo_wisp_admin@wingmen.dk");
  console.log(
    `Got the email field text using textContent Method: ${await emailField.textContent()}`
  );
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("Admin1022!");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.getByRole("button", { name: "Yes" }).click();
  await page.goto("https://wmn-t-wisp-wa.azurewebsites.net/", {
    timeout: 60000,
  });
  const wispTitle = page.locator("#react-admin-title span");
  await wispTitle.scrollIntoViewIfNeeded();
  page.screenshot();
  await expect(wispTitle).toHaveText("Wingmen Integration Services Platform");
});

test("validate checkboxes", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );

  const singleCheckbox = page.locator("#isAgeSelected");
  //expect(await singleCheckbox.isChecked()).toBe(false);
  expect(singleCheckbox).not.toBeChecked();
  await page.getByLabel("Click on check box").check();
  expect(singleCheckbox).toBeChecked();
});

test("handling alerts", async ({ page }) => {
  await page.goto(
    "https://www.Lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  //Acts as an event listener
  page.on("dialog", async (alert) => {
    //WHEN IT HAS A PROMPT INPUT FIELD
    const text = alert.defaultValue();
    console.log(text);
    await alert.accept("GERREL ATANACIO");
  });
  await page.getByText("Click Me").nth(2).click();
  expect(page.locator("#prompt-demo")).toContainText("GERREL");
});

test("modal alerts", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo"
  );
  await page.locator("[data-target='#myModal']").click();
  await page.locator("#myModal").getByText("Save Changes").click();
});

test("handling single-select dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.locator("#select-demo").selectOption("Tuesday"); // single selection matching the value
  await page.waitForTimeout(2000);
  await page.locator("#select-demo").selectOption({ label: "Wednesday" }); //single selection matching the label
  await page.waitForTimeout(5000);
});

test("handling multi-select dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.locator("#multi-select").scrollIntoViewIfNeeded();
  await page
    .locator("#multi-select")
    .selectOption([{ label: "Florida" }, { value: "Texas" }, { index: 4 }]); // multi-select dropdown accepts arrays of values
});

test.only("handling jquery dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );
  await selectCountry("India");
  await page.waitForTimeout(3000);
  await selectCountry("Denmark");
  await page.waitForTimeout(3000);
  await selectCountry("South Africa");
  await page.waitForTimeout(3000);

  async function selectCountry(countryName) {
    await page.click("#country+span");
    await page
      .locator("ul#select2-country-results")
      .locator("li", {
        hasText: countryName,
      })
      .click();
  }
});
