
const { assert } = require("chai");
const { expect } = require("chai");
const { platform } = require("../../utils/tools");
const allureReporter = require("@wdio/allure-reporter").default;

class webDashboardPage{
  locators = {
    android: {
      chromeAccount:"//android.widget.Button[@text='Use without an account']",
      chromeNotification:"//android.widget.Button[@text='No thanks']",
      chromeSearchText:"//android.widget.EditText[@text='Search or type web address']",
      signIn:
        "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/bigoven_sign_in_button']",
      userName:
        "//android.widget.EditText[@resource-id='com.bigoven.android:id/email']",
      passWord:
        "//android.widget.EditText[@resource-id='com.bigoven.android:id/password']",
      bigOvenLogo:
        "//android.view.ViewGroup[@resource-id='com.bigoven.android:id/scrollingToolbar']/android.widget.ImageView",
    },
    ios: {
        notificationAlert: "",
        oldAppAlert: "~No",
        titleDesc: "~The future of travel.",
        menuBar: "",
        signOutButton: "~Sign out",
        chromeAccount:"//android.widget.Button[@text='Use without an account']",
        chromeNotification:"//android.widget.Button[@text='No thanks']",
        chromeSearchText:"//android.widget.EditText[@text='Search or type web address']",
        signIn:
        "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/bigoven_sign_in_button']",
      userName:
        "//android.widget.EditText[@resource-id='com.bigoven.android:id/email']",
      passWord:
        "//android.widget.EditText[@resource-id='com.bigoven.android:id/password']",
      bigOvenLogo:
        "//android.view.ViewGroup[@resource-id='com.bigoven.android:id/scrollingToolbar']/android.widget.ImageView",
    }
    }
    get clickChromeAccount() {
      return $(this.locators[platform()].chromeAccount);
    }
    get clickChromeNotification() {
      return $(this.locators[platform()].chromeNotification);
    }
    get clickChromeSearchText() {
      return $(this.locators[platform()].chromeSearchText);
    }

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
      async chromeTasks(url){
        await this.clickChromeAccount.click();
        await this.clickChromeNotification.click();
        await this.clickChromeSearchText.click();
        await this.clickChromeSearchText.setValue(url);
        await browser.keys("\uE007");
      }
      async loginIntoApplication(username, password) {
        await this.signInButton.click();
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.signInButton.click();
       //await browser.pause(6000);
      }
}
module.exports = new webDashboardPage();