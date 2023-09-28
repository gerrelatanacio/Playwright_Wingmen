import { test, expect } from "@playwright/test";
import { TOTP } from "otpauth";
import "dotenv/config";

test.only("test", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(
    "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?redirect_uri=https%3A%2F%2Fportal.azure.com%2Fsignin%2Findex%2F&response_type=code%20id_token&scope=https%3A%2F%2Fmanagement.core.windows.net%2F%2Fuser_impersonation%20openid%20email%20profile&state=OpenIdConnect.AuthenticationProperties%3DDAZPUmrt80pg6tUK1axJe-_4fzg6JQgf3PHjmoxTBPuKtiULIkeQ9UbhDm90VcOrmfMxKDZFxzW7UAu5np-aoNPFCF2bcPatf5zH0Zzzp3EJ8GbcMZHMFCuGLqb9ra79echKKw782aRlJ0AZ_tRLRs6B1H040BYgSqblEbFxjAl3zZ7YDcmxDlOJ6OpiIUJMwWbZrxV0jbPeCeF_ZKQwSnR-L-ziWIjUcBKy1n1BKhGoFI8zk3P0ydxsTbjkiaNzbLh8lLTnx8as02muIDeqxBCUwVIktIPSch4uCVnvkt3Y_NVh5j18mN4ed0ywG4w79Wx-_L98FR-eBh3At54UtFQXuULK18C3tuMu7QhaBxqx0GMIZpB99fBV_ndjY--IhC2z6m5vaqOiQa7hzP4eqILstv39fLSu5aG4KTVnI93-cii7vJ1k3IiVeoocKTGPKVUB7IAz164h3FIHq0fRlCxnaDSLeu5BmWK_ahzC6NsGAvi-IFrBaDxboulYJ4Ji&response_mode=form_post&nonce=638313914886218416.N2IxMzBhYjgtZjdhZS00Zjc3LTg5ZjctYjBlNWE3ZTljMzQ5MGU4NGE0ZmEtMTUwNS00Y2MwLTk4MTAtYTdiZWJiNDc4MTJj&client_id=c44b4083-3bb0-49c1-b47d-974e53cbdf3c&site_id=501430&client-request-id=6eaecc11-2034-42c5-954d-bf5506e44eee&x-client-SKU=ID_NET472&x-client-ver=6.30.1.0&sso_reload=true"
  );
  console.log(process.env.totp);
  await page.getByPlaceholder("Email, phone, or Skype").click();
  await page
    .getByPlaceholder("Email, phone, or Skype")
    .fill("gerrel.atanacio@avitgroup.com");
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("crmAvit22!");
  await page.getByPlaceholder("Password").press("Enter");
  await page
    .getByRole("link", {
      name: "I can't use my Microsoft Authenticator app right now",
    })
    .click();
  await page.getByRole("button", { name: "Use a verification code" }).click();

  var totp = new TOTP({
    algorithm: "SHA1",
    digits: 6,
    period: 30,
    secret: process.env.totp,
  });

  // Generate a token.
  var token = totp.generate();

  await page.getByLabel("Enter code").fill(token);
  await page.getByRole("button", { name: "Verify" }).click();

  await page.waitForTimeout(6000);
  await page.goto("https://portal.azure.com/");
  await page.waitForLoadState();
  await page.getByRole("link", { name: "spb-t-assetm-rg" }).click();
  await page.waitForSelector(
    "div.fxs-tilesize-fittocontainer div[role='tablist'] [role='tab']:nth-child(1) > :not(span[aria-hidden='true'])> span"
  );
  await page.waitForTimeout(6000);
  await page.getByRole("columnheader", { name: "Type" }).locator("svg").click();
  await page
    .getByRole("link", { name: "spb-t-aggrigator-fa", exact: true })
    .click();
  await page.goto(
    "https://portal.azure.com/#view/WebsitesExtension/FunctionMenuBlade/~/functionOverview/resourceId/%2Fsubscriptions%2F981cbb21-6771-4bf2-9784-97cb3018d330%2FresourceGroups%2Fspb-t-assetm-rg%2Fproviders%2FMicrosoft.Web%2Fsites%2Fspb-t-aggrigator-fa%2Ffunctions%2FAggregateGoldenViewTrigger"
  );
  await page.waitForLoadState();
  await page.waitForTimeout(10000);
  await page.locator("[data-telemetryname='Menu-monitor']").click();
  // await page.waitForSelector(
  //   "#invocations-tab .ms-List-page .ms-List-cell:nth-child(1) .ms-DetailsRow-fields > [role='gridcell'] #invocations-0"
  // );

  const frame = page.frameLocator("iframe[class='fxs-part-frame']");
  await frame
    .locator("#invocations-0")
    .waitFor({ state: "visible", timeout: 45000 });

  await page.waitForTimeout(3000);
  await page.screenshot();
});
