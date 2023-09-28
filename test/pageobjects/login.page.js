const LoginPage = require("./login.page");
const { assert } = require("chai");
const { expect } = require("chai");
const { platform } = require("../../utils/tools");
const allureReporter = require("@wdio/allure-reporter").default;

class dashboardPage {
  locators = {
    android: {
      signIn:
        "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/bigoven_sign_in_button']",
      userName:
        "//android.widget.EditText[@resource-id='com.bigoven.android:id/email']",
      passWord:
        "//android.widget.EditText[@resource-id='com.bigoven.android:id/password']",
      bigOvenLogo:
        "//android.view.ViewGroup[@resource-id='com.bigoven.android:id/scrollingToolbar']/android.widget.ImageView",
      headerThreeDots:
        "//android.widget.ImageView[@content-desc='More options']",
      setting: "//android.widget.TextView[@text='Settings']",
      signOutButton:
        "(//android.widget.TextView[@resource-id='android:id/title'])[8]/..",
      acceptSignModel:
        "//android.widget.Button[@resource-id='android:id/button1']",
      signIn:
        "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/bigoven_sign_in_button']",
      signIn2:
        "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/bigoven_sign_in_button']",
      popUpMessage:
        "//android.widget.LinearLayout[@resource-id='com.bigoven.android:id/password_wrapper']",
      textMessage:
        "//android.widget.TextView[@resource-id='com.bigoven.android:id/textinput_error']",
      userNameText:
        "//android.widget.EditText[@resource-id='com.bigoven.android:id/email']",
      passwordText:
        "//android.widget.EditText[@resource-id='com.bigoven.android:id/password']",
      textMessage2:
        "//android.widget.TextView[@resource-id='com.bigoven.android:id/textinput_error']",
    },
    ios: {
      notificationAlert: "",
      oldAppAlert: "~No",
      titleDesc: "~The future of travel.",
      menuBar: "",
      signOutButton: "~Sign out",
      signIn:
      "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/bigoven_sign_in_button']",
    userName:
      "//android.widget.EditText[@resource-id='com.bigoven.android:id/email']",
    passWord:
      "//android.widget.EditText[@resource-id='com.bigoven.android:id/password']",
    bigOvenLogo:
      "//android.view.ViewGroup[@resource-id='com.bigoven.android:id/scrollingToolbar']/android.widget.ImageView",
    headerThreeDots:
      "//android.widget.ImageView[@content-desc='More options']",
    setting: "//android.widget.TextView[@text='Settings']",
    signOutButton:
      "(//android.widget.TextView[@resource-id='android:id/title'])[8]/..",
    acceptSignModel:
      "//android.widget.Button[@resource-id='android:id/button1']",
    signIn:
      "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/bigoven_sign_in_button']",
    signIn2:
      "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/bigoven_sign_in_button']",
    popUpMessage:
      "//android.widget.LinearLayout[@resource-id='com.bigoven.android:id/password_wrapper']",
    textMessage:
      "//android.widget.TextView[@resource-id='com.bigoven.android:id/textinput_error']",
    userNameText:
      "//android.widget.EditText[@resource-id='com.bigoven.android:id/email']",
    passwordText:
      "//android.widget.EditText[@resource-id='com.bigoven.android:id/password']",
    textMessage2:
      "//android.widget.TextView[@resource-id='com.bigoven.android:id/textinput_error']",
    },
  };
 
  get signInButton() {
    return $(this.locators[platform()].signIn);
  }
  get usernameField() {
    return $(this.locators[platform()].userName);
  }

  get passwordField() {
    return $(this.locators[platform()].passWord);
  }

  get bigOvenLogo() {
    return $(this.locators[platform()].bigOvenLogo);
  }

  get headerThreeDots() {
    return $(this.locators[platform()].headerThreeDots);
  }

  get setting() {
    return $(this.locators[platform()].setting);
  }

  get signOutButton() {
    return $(this.locators[platform()].signOutButton);
  }
  get acceptSignModel() {
    return $(this.locators[platform()].acceptSignModel);
  }
  get clickOnSignIn() {
    return $(this.locators[platform()].signIn);
  }
  get clickOnSignIn2() {
    return $(this.locators[platform()].signIn2);
  }
  get fillUserNameText() {
    return $(this.locators[platform()].userNameText);
  }
  get fillWrongUserName() {
    return $(this.locators[platform()].userNameText);
  }
  get fillWrongPassword() {
    return $(this.locators[platform()].passwordText);
  }
  async login() {
    await this.clickOnSignIn.click();
  }
  get showPopUpMessage() {
    return $(this.locators[platform()].popUpMessage);
  }
  get showErrorMessage() {
    return $(this.locators[platform()].textMessage2);
  }
 
  async loginIntoApplication(username, password) {
    await this.signInButton.click();
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.signInButton.click();
   //await browser.pause(6000);
  }
  async logOut() {
    await this.headerThreeDots.click();
    await this.setting.click();
    await this.signOutButton.click();
    await this.acceptSignModel.click();
    await browser.pause(10000);
  }
 
  async signInWithoutCredentials() {
    await this.clickOnSignIn2.click();
    await browser.pause(3000);
  }
  async validateErrorPopUp() {
    // await expect(this.showPopUpMessage).toBeExisting();
    assert.isTrue(await this.showPopUpMessage.isDisplayed(), "pop up is not displayed" );
  }
  async signInWithUserName(userName) {
    await this.fillUserNameText.click();
    await this.fillUserNameText.setValue(userName);
    await browser.pause(2000);
    await this.clickOnSignIn.click();
    await browser.pause(3000);
  }
  async validateErrorMessage(actualMessage) {
    let currentMessage = await this.showErrorMessage.getText();
    //assert.isTrue(currentMessage==actualMessage,"error message is not displayed");
    assert.equal(currentMessage, actualMessage);
  }
  async signInWithWrongCredentials(wrongUserName, wrongPassword) {
    await this.fillWrongUserName.click();
    await this.fillWrongUserName.setValue(wrongUserName);
    await browser.pause(2000);
    await this.fillWrongPassword.click();
    await this.fillWrongPassword.setValue(wrongPassword);
    await browser.pause(2000);
    await this.clickOnSignIn.click();
    await browser.pause(3000);
  }
  async inValidCredentials(actualShowMessage) {
    //  let currentShowMessage = await this.showErrorMessage.getText();
    // assert.equal(currentShowMessage, actualShowMessage);
  }
}
module.exports = new dashboardPage();
