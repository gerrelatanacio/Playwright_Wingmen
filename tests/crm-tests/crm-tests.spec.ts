import { test, expect } from "@playwright/test";

// Reset storage state for this file to avoid being authenticated
//test.use({ storageState: { cookies: [], origins: [] } });

test("login to CRM", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto("https://www.google.com/");
  await page.goto(
    "https://gatanacio:crmAvit22!@a01crm02.a01.onavit.net/AvitGlobalAcceptatie/"
  );
});
