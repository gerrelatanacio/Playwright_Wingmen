import { test, expect } from "../fixtures/customizedFixture";

const url = "https://wmn-t-wisp-wa.azurewebsites.net/";
const email = "demo_wisp_admin@wingmen.dk";
const password = "Admin1022!";

test.only("TC01_EstimateCreation", async ({ page, homePage, cicsPage }) => {
  await page.goto("https://wisp.wingmen.dk/");
  await page3.goto(
await page3.getByRole('link', { name: 'Configurations' }).click();
  await page3.getByRole("link", { name: "CICS" }).click();
  await page3.getByRole("link", { name: "Logs" }).click();
  await page3.getByRole("link", { name: "Configurations" }).click();
  await homePage.clickOnCICS();
  await page
    .getByRole("group", { name: "Skip zero dollar option model" })
    .getByLabel("Yes")
    .check();
  await page.getByLabel("Cisco Configuration Number").click();
  await page.getByLabel("Cisco Configuration Number").fill("UV144792439GI");
  await page.getByLabel("Opportunity Number *").click();
  await page.getByLabel("Opportunity Number *").fill("0061v000012pCVmAAM");
  await page.getByRole("button", { name: "Select lines to transfer" }).click();
  await page
    .getByRole("checkbox", {
      name: "1.1.1 E2N-SDWAN-C-T0-G-A Enterprise WAN Tier 0 Cloud (25M) DNA EA Advantage $77.78",
    })
    .click();
  await page
    .getByRole("checkbox", {
      name: "1.1.1 E2N-SDWAN-C-T0-G-A Enterprise WAN Tier 0 Cloud (25M) DNA EA Advantage $77.78",
    })
    .getByRole("checkbox")
    .check();
  await page.getByRole("button", { name: "OK" }).click();
  await page.getByLabel("Proceed to create Estimate").click();
  await page.getByRole("button", { name: "Go to logs" }).click();
  const downloadPromise = page.waitForEvent("download");
  await page
    .getByTitle(
      "estimatesLog-2023_10_03_14_50-d195dd29-e94b-4789-b1c3-0975429d59ab.txt"
    )
    .click();
  const download = await downloadPromise;
  await page1
    .getByRole("link", { name: "03b1c247-05f7-4b99-b429-4775ce85f782" })
    .click();
  await page1.getByRole("link", { name: "Show in folder" }).click();
  await page1.getByRole("link", { name: "Show in folder" }).click();
  await page1
    .getByRole("link", { name: "03b1c247-05f7-4b99-b429-4775ce85f782" })
    .click();
  await page1.getByRole("link", { name: "Show in folder" }).click();
  await page1.getByRole("link", { name: "Show in folder" }).click({
    button: "right",
  });
  const page2Promise = page1.waitForEvent("popup");
  const download1Promise = page1.waitForEvent("download");
  await page1
    .getByRole("link", {
      name: "https://wmn-t-wisp-wa.azurewebsites.net/api/Logs/DownloadQuoteLog?logName=estimatesLog-2023_10_03_14_50-d195dd29-e94b-4789-b1c3-0975429d59ab.txt",
    })
    .click();
  const page2 = await page2Promise;
  const download1 = await download1Promise;
  await page1
    .getByTitle(
      "C:\\Users\\gerre\\AppData\\Local\\Temp\\playwright-artifacts-9Fd2MC\\03b1c247-05f7-4b99-b429-4775ce85f782"
    )
    .click();
  await page1
    .getByTitle(
      "C:\\Users\\gerre\\AppData\\Local\\Temp\\playwright-artifacts-9Fd2MC\\03b1c247-05f7-4b99-b429-4775ce85f782"
    )
    .click({
      clickCount: 3,
    });
  await page1
    .getByRole("link", { name: "539b33a5-1a72-40ea-b25b-b9d5d1b8b8ca" })
    .click();
  await page1
    .getByTitle(
      "C:\\Users\\gerre\\AppData\\Local\\Temp\\playwright-artifacts-9Fd2MC\\539b33a5-1a72-40ea-b25b-b9d5d1b8b8ca"
    )
    .click();
  await page1.locator("#downloadsList").click();
});

test("TC02_Open CICS Configurations", async ({ page, loginPage, homePage }) => {
  await page.waitForTimeout(10000);
  await homePage.navigateToHome();
  await homePage.clickOnCICS();
  await page.waitForTimeout(10000);
});
