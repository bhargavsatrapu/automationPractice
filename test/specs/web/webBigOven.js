const { expect, driver } = require("@wdio/globals");
const allureReporter = require("@wdio/allure-reporter").default;
const page = require("../../pageobjects/page");
const webLoginPage=require("../../pageobjects/webBigOven.login.page");


require("dotenv").config();

describe("Verify bigOven application through web", () => {
    it("should open chrome",async ()=>{
      await webLoginPage.chromeTasks(process.env.url);
    });
    
//   it("user should login with valid credentials", async () => {
//     await webLoginPage.loginIntoApplication(
//       process.env.username_expert,
//       process.env.password_expert
//     );
//     await expect(webLoginPage.bigOvenLogo).toBeExisting();
//   });
});
