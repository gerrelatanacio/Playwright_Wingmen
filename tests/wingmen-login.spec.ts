import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // await page.goto(
  //   "https://login.microsoftonline.com/1a172cd1-4193-4225-8540-cc1ef65ebb2c/oauth2/v2.0/authorize?client_id=d8369b51-0491-45e3-afbb-6bb19f639720&redirect_uri=https%3A%2F%2Fwmn-t-wisp-wa.azurewebsites.net%2Fsignin-oidc&response_type=id_token&scope=openid%20profile&response_mode=form_post&nonce=638281921683276650.YjQ0NDkxNTAtYTFiMy00Y2I4LTk1NzgtNjcxZGJmZjVmMzk5YTA3MDg3ZGItOGYyMi00MjIwLWJmNTktY2NjZWRmMjBiODVk&client_info=1&x-client-brkrver=IDWeb.1.25.0.0&state=CfDJ8DbdqJN7WCxBoCDxPNf6Pj5_EZ18d12Hvq-voT-Q0W841HF5ghZEjbWLcIghO4SSvFFHA-4d4BeE118bxlYkVzzZO6vaRRpz9akkTrqbvz2SGsgBwk9EZtiuZHNbDnwpjdFwtn8pMOqwsfNb4CU-VeTq7VskUra1o7BiYPRb0OjWB8oYxwXxfm695h_AfsO0sUXk2zjV7dAJMuEgOv7BS8UuMqZQwp1P3zCT1grtxcgZHe6wxBfHAuJM1og7ZAt807NWu6vdtMqf97-8R9sV08pIr4OZ_AyJENE781iaxepWFlK34cQzJ2YKGy0JEipTQg&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.17.0.0"
  // );
  await page.goto(
    "https://login.microsoftonline.com/1a172cd1-4193-4225-8540-cc1ef65ebb2c/oauth2/v2.0/authorize?client_id=d8369b51-0491-45e3-afbb-6bb19f639720&redirect_uri=https%3A%2F%2Fwmn-t-wisp-wa.azurewebsites.net%2Fsignin-oidc&response_type=id_token&scope=openid%20profile&response_mode=form_post&nonce=638281921683276650.YjQ0NDkxNTAtYTFiMy00Y2I4LTk1NzgtNjcxZGJmZjVmMzk5YTA3MDg3ZGItOGYyMi00MjIwLWJmNTktY2NjZWRmMjBiODVk&client_info=1&x-client-brkrver=IDWeb.1.25.0.0&state=CfDJ8DbdqJN7WCxBoCDxPNf6Pj5_EZ18d12Hvq-voT-Q0W841HF5ghZEjbWLcIghO4SSvFFHA-4d4BeE118bxlYkVzzZO6vaRRpz9akkTrqbvz2SGsgBwk9EZtiuZHNbDnwpjdFwtn8pMOqwsfNb4CU-VeTq7VskUra1o7BiYPRb0OjWB8oYxwXxfm695h_AfsO0sUXk2zjV7dAJMuEgOv7BS8UuMqZQwp1P3zCT1grtxcgZHe6wxBfHAuJM1og7ZAt807NWu6vdtMqf97-8R9sV08pIr4OZ_AyJENE781iaxepWFlK34cQzJ2YKGy0JEipTQg&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.17.0.0&sso_reload=true"
  );
  await page.getByPlaceholder("Email, phone, or Skype").click();
  await page
    .getByPlaceholder("Email, phone, or Skype")
    .fill("demo_wisp_admin@wingmen.dk");
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("Admin1022!");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.getByRole("button", { name: "Yes" }).click();
  await page.goto("https://wmn-t-wisp-wa.azurewebsites.net/", {
    timeout: 60000,
  });
  await expect(page.locator("#react-admin-title span")).toHaveText(
    "Wingmen Integration Services Platform X"
  );
});
