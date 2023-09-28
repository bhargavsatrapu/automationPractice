const { expect, driver } = require("@wdio/globals");
const allureReporter = require("@wdio/allure-reporter").default;
const LoginPage = require("../pageobjects/login.page");
const page = require("../pageobjects/page");
const dashboardPage = require("../pageobjects/login.page");
const bigOvenPage = require("../pageobjects/bigOven.page");
const testData = require("../../data/bigOvenTestData.json");
const utilTools = require("../../utils/tools");
require("dotenv").config();

describe("Verify bigOven application", () => {
  it("user should login with valid credentials", async () => {
    await LoginPage.loginIntoApplication(
      process.env.username_expert,
      process.env.password_expert
    );
    await expect(LoginPage.bigOvenLogo).toBeExisting();
  });

  it("user can add recipes to his favorites", async () => {
    await bigOvenPage.verifySearchIconsSubTabs();
    await bigOvenPage.addReciepeTofav(testData.recepiSearch);
    await bigOvenPage.removeFromFav();
  });

  it("user can add recipe clipper from other websites", async () => {
    await bigOvenPage.addReceipeFromWebsites(testData.reciepesLinks);
    await bigOvenPage.verifyReceipesAreAdded(testData.texts);
    await bigOvenPage.removeReceipesFromAll();
  });

  it("user should see buy reciepe banner for premium services", async () => {
    await bigOvenPage.myRecipe();
    await bigOvenPage.plusIcon();
    await bigOvenPage.recipeScan();
    await bigOvenPage.accessPopUp();
    await bigOvenPage.addImageIcon();
    await bigOvenPage.buyRecipeScan();
    await bigOvenPage.crossIcon();
    await bigOvenPage.backIcon();
  });

  it("user can post new recipe into application", async () => {
    const title = utilTools.generateRandString(5);
    await bigOvenPage.addingNewRecipes(
      title,
      testData.ingradients,
      testData.preparation
    );
    await bigOvenPage.checkingThePresenceOfNewRecipe(title);
  });
  
  it("user should logout successfully", async () => {
    await LoginPage.logOut();
  });  
  it("user should not login with invalid credentials", async () => {
    await LoginPage.loginIntoApplication(
      testData.wrongUserName,testData.wrongPassword);
    await expect(LoginPage.bigOvenLogo).toBeExisting();
  });

});
