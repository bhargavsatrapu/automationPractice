const LoginPage = require("./login.page");
const { assert } = require("chai");
//const { expect } = require("chai");
const utilTools = require("../../utils/tools");
const { platform } = require("../../utils/tools");
class BigOvenPage {
  locators = {
    android: {
      clickOnPlusSymbol:
        "//android.widget.ImageButton[@resource-id='com.bigoven.android:id/fab']",
      clickOnReceipeClipper:
        "(//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/label_container'])[2]",
      clickOnEnterWebsite:
        "//android.widget.EditText[@resource-id='com.bigoven.android:id/website_entry']",
      clickOnSaveReceipe:
        "//android.view.ViewGroup[@resource-id='com.bigoven.android:id/clip_toolbar']",
      clickOnPreparation:
        "//android.widget.LinearLayout[@content-desc= 'Preparation']",
      clickOnNutrition:
        "//android.widget.LinearLayout[@content-desc= 'Nutrition']",
      selectAdded: "//android.widget.TextView[@text='Added']",
      addedItem:
        "//android.widget.TextView[@text='I Turned My Favorite Italian Dessert Into the Easiest Breakfast Ever']",
      selectAll: "//android.widget.TextView[@text='All']",
      clickOnEditTheAddedIems:
        "//android.widget.Button[@resource-id='com.bigoven.android:id/action_edit_myrecipes']",
      selectTheIemsToEdit:
        "//android.widget.ImageView[@resource-id='com.bigoven.android:id/selected_indicator']",
      clickOnDeleteIcon:
        "//android.widget.Button[@resource-id='com.bigoven.android:id/action_remove_recipe_from_my_recipes']",
      clickOnRemove:
        "//android.widget.Button[@resource-id='android:id/button1']",
      selectMyRecipes:
        "//android.widget.LinearLayout[@content-desc = 'My Recipes']",
      navigateToHomeFromSeachField:
        "//android.widget.ImageButton[@content-desc= 'Navigate up']",
      remaindMeLater:
        '//android.widget.Button[@resource-id="android:id/button2"]',
      myRecipe: "//android.widget.LinearLayout[@content-desc='My Recipes']",
      plusIcon:
        "//android.widget.ImageButton[@resource-id='com.bigoven.android:id/fab']",
      recipeScan:
        "(//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/label_container'])[3]",
      accessPopUp:
        "//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_allow_all_button']",
      addImageIcon:
        "//android.widget.ImageButton[@resource-id='com.bigoven.android:id/add_image']",
      buyRecipeScan: "//android.widget.TextView[@text='Buy RecipeScans']",
      crossIcon: "//android.widget.ImageButton[@content-desc='Navigate up']",
      backIcon: "//android.widget.ImageButton[@content-desc='Navigate up']",
      clickOnPlusButton:
        "//android.widget.ImageButton[@resource-id='com.bigoven.android:id/fab']",
      clickOnTypeInRecipe:
        "//android.widget.LinearLayout[@resource-id='com.bigoven.android:id/type_it_in_fab']/android.widget.ImageButton",
      clickOnAddTitle: "//android.widget.EditText[@resource-id='titleInput']",
      clickOnIngradients:
        "//android.widget.EditText[@resource-id='ingredientsInput']",
      clickOnPreparation1:
        "//android.widget.EditText[@resource-id='instructionsInput']",
      clickToSeeAddedProduct:
        "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/content_frame']/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View",
      comparingTextValue:
        "//android.view.View[@resource-id='fb-root']/parent::android.webkit.WebView/android.view.View/android.widget.TextView[2]",
      checkingRecipePresence:
        "//android.widget.TextView[@resource-id='com.bigoven.android:id/title']",
      checkingTitleText:
        "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/content_frame']/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/android.view.View[2]/android.view.View[1]",
      checkingIngradientsText:
        "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/content_frame']/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/android.view.View[2]/android.view.View[2]",
      checkingInstructionText:
        "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/content_frame']/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/android.view.View[2]/android.view.View[3]",
      searchRecipe:
        "//android.widget.AutoCompleteTextView[@resource-id = 'com.bigoven.android:id/searchBarText']",
      selectSearchField:
        "//android.view.ViewGroup[@resource-id = 'com.bigoven.android:id/searchToolbar']",
      searchIcon:
        "//android.widget.Button[@resource-id='com.bigoven.android:id/action_search_all']",
      allRecipes:
        '//android.widget.HorizontalScrollView[@resource-id="com.bigoven.android:id/tabs"]/android.widget.LinearLayout/android.widget.LinearLayout[1]',
      navigateToHomeFromSelectedItem:
        "//android.view.ViewGroup[@resource-id = 'com.bigoven.android:id/appToolbar']/android.widget.ImageButton",
      dynamicAddedReceipes: (currentText) =>
        "//android.widget.TextView[contains(@text,'" + currentText + "')]",
      addType: "//android.widget.TextView[@text='Added']/..",
      checkInspiredText:
        "(//android.widget.TextView[@resource-id ='com.bigoven.android:id/header_text'])[1]",
      checkByCourseText:
        "(//android.widget.TextView[@resource-id = 'com.bigoven.android:id/header_text'])[2]",
      checkTopBloggersText:
        "//android.widget.TextView[@resource-id = 'com.bigoven.android:id/header_text']",
      checkMyCourseTextInMyRecipe:
        "//android.widget.TextView[@resource-id = 'com.bigoven.android:id/header_text']",
      clickForAddToFavorites:
        "//android.widget.ImageButton[@resource-id = 'com.bigoven.android:id/favoriteButton']",
      selectFavorites: "//android.widget.TextView[@text='Favorites']",
      clickToRemoveFromFavorites:
        "//android.widget.ImageButton[@resource-id = 'com.bigoven.android:id/favoriteButton']",
      navigateToHomeFromFavorites:
        "//android.view.ViewGroup[@resource-id='com.bigoven.android:id/appToolbar']/android.widget.ImageButton",
      clickOnGetIdeas:
        "//android.widget.LinearLayout[@content-desc='Get Ideas']",
      selectCooks: "//android.widget.LinearLayout[@content-desc = 'Cooks']",
      selectedItem:
        "(//androidx.recyclerview.widget.RecyclerView[@resource-id = 'com.bigoven.android:id/recyclerview']/android.widget.FrameLayout/  android.widget.RelativeLayout)[1]",
    },
    ios: {
      notificationAlert: "",
      oldAppAlert: "~No",
      titleDesc: "~The future of travel.",
      menuBar: "",
      signOutButton: "~Sign out",
      clickOnPlusSymbol:
        "//android.widget.ImageButton[@resource-id='com.bigoven.android:id/fab']",
      clickOnReceipeClipper:
        "(//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/label_container'])[2]",
      clickOnEnterWebsite:
        "//android.widget.EditText[@resource-id='com.bigoven.android:id/website_entry']",
      clickOnSaveReceipe:
        "//android.view.ViewGroup[@resource-id='com.bigoven.android:id/clip_toolbar']",
      clickOnPreparation:
        "//android.widget.LinearLayout[@content-desc= 'Preparation']",
      clickOnNutrition:
        "//android.widget.LinearLayout[@content-desc= 'Nutrition']",
      selectAdded: "//android.widget.TextView[@text='Added']",
      addedItem:
        "//android.widget.TextView[@text='I Turned My Favorite Italian Dessert Into the Easiest Breakfast Ever']",
      selectAll: "//android.widget.TextView[@text='All']",
      clickOnEditTheAddedIems:
        "//android.widget.Button[@resource-id='com.bigoven.android:id/action_edit_myrecipes']",
      selectTheIemsToEdit:
        "//android.widget.ImageView[@resource-id='com.bigoven.android:id/selected_indicator']",
      clickOnDeleteIcon:
        "//android.widget.Button[@resource-id='com.bigoven.android:id/action_remove_recipe_from_my_recipes']",
      clickOnRemove:
        "//android.widget.Button[@resource-id='android:id/button1']",
      selectMyRecipes:
        "//android.widget.LinearLayout[@content-desc = 'My Recipes']",
      navigateToHomeFromSeachField:
        "//android.widget.ImageButton[@content-desc= 'Navigate up']",
      remaindMeLater:
        '//android.widget.Button[@resource-id="android:id/button2"]',
      myRecipe: "//android.widget.LinearLayout[@content-desc='My Recipes']",
      plusIcon:
        "//android.widget.ImageButton[@resource-id='com.bigoven.android:id/fab']",
      recipeScan:
        "(//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/label_container'])[3]",
      accessPopUp:
        "//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_allow_all_button']",
      addImageIcon:
        "//android.widget.ImageButton[@resource-id='com.bigoven.android:id/add_image']",
      buyRecipeScan: "//android.widget.TextView[@text='Buy RecipeScans']",
      crossIcon: "//android.widget.ImageButton[@content-desc='Navigate up']",
      backIcon: "//android.widget.ImageButton[@content-desc='Navigate up']",
      clickOnPlusButton:
        "//android.widget.ImageButton[@resource-id='com.bigoven.android:id/fab']",
      clickOnTypeInRecipe:
        "//android.widget.LinearLayout[@resource-id='com.bigoven.android:id/type_it_in_fab']/android.widget.ImageButton",
      clickOnAddTitle: "//android.widget.EditText[@resource-id='titleInput']",
      clickOnIngradients:
        "//android.widget.EditText[@resource-id='ingredientsInput']",
      clickOnPreparation1:
        "//android.widget.EditText[@resource-id='instructionsInput']",
      clickToSeeAddedProduct:
        "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/content_frame']/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View",
      comparingTextValue:
        "//android.view.View[@resource-id='fb-root']/parent::android.webkit.WebView/android.view.View/android.widget.TextView[2]",
      checkingRecipePresence:
        "//android.widget.TextView[@resource-id='com.bigoven.android:id/title']",
      checkingTitleText:
        "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/content_frame']/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/android.view.View[2]/android.view.View[1]",
      checkingIngradientsText:
        "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/content_frame']/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/android.view.View[2]/android.view.View[2]",
      checkingInstructionText:
        "//android.widget.FrameLayout[@resource-id='com.bigoven.android:id/content_frame']/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/android.view.View[2]/android.view.View[3]",
      searchRecipe:
        "//android.widget.AutoCompleteTextView[@resource-id = 'com.bigoven.android:id/searchBarText']",
      selectSearchField:
        "//android.view.ViewGroup[@resource-id = 'com.bigoven.android:id/searchToolbar']",
      searchIcon:
        "//android.widget.Button[@resource-id='com.bigoven.android:id/action_search_all']",
      allRecipes:
        '//android.widget.HorizontalScrollView[@resource-id="com.bigoven.android:id/tabs"]/android.widget.LinearLayout/android.widget.LinearLayout[1]',
      navigateToHomeFromSelectedItem:
        "//android.view.ViewGroup[@resource-id = 'com.bigoven.android:id/appToolbar']/android.widget.ImageButton",
      dynamicAddedReceipes: (currentText) =>
        "//android.widget.TextView[contains(@text,'" + currentText + "')]",
      addType: "//android.widget.TextView[@text='Added']/..",
      checkInspiredText:
        "(//android.widget.TextView[@resource-id ='com.bigoven.android:id/header_text'])[1]",
      checkByCourseText:
        "(//android.widget.TextView[@resource-id = 'com.bigoven.android:id/header_text'])[2]",
      checkTopBloggersText:
        "//android.widget.TextView[@resource-id = 'com.bigoven.android:id/header_text']",
      checkMyCourseTextInMyRecipe:
        "//android.widget.TextView[@resource-id = 'com.bigoven.android:id/header_text']",
      clickForAddToFavorites:
        "//android.widget.ImageButton[@resource-id = 'com.bigoven.android:id/favoriteButton']",
      selectFavorites: "//android.widget.TextView[@text='Favorites']",
      clickToRemoveFromFavorites:
        "//android.widget.ImageButton[@resource-id = 'com.bigoven.android:id/favoriteButton']",
      navigateToHomeFromFavorites:
        "//android.view.ViewGroup[@resource-id='com.bigoven.android:id/appToolbar']/android.widget.ImageButton",
      clickOnGetIdeas:
        "//android.widget.LinearLayout[@content-desc='Get Ideas']",
      selectCooks: "//android.widget.LinearLayout[@content-desc = 'Cooks']",
      selectedItem:
        "(//androidx.recyclerview.widget.RecyclerView[@resource-id = 'com.bigoven.android:id/recyclerview']/android.widget.FrameLayout/  android.widget.RelativeLayout)[1]",
    },
  };

  get clickOnPlusSymbol() {
    return $(this.locators[utilTools.platform()].clickOnPlusSymbol);
  }
  get clickOnReceipeClipper() {
    return $(this.locators[platform()].clickOnReceipeClipper);
  }
  get clickOnEnterWebsite() {
    return $(this.locators[platform()].clickOnEnterWebsite);
  }
  get clickOnSaveReceipe() {
    return $(this.locators[platform()].clickOnSaveReceipe);
  }
  get clickOnPreparation() {
    return $(this.locators[platform()].clickOnPreparation);
  }
  get clickOnNutrition() {
    return $(this.locators[platform()].clickOnNutrition);
  }
  get selectAdded() {
    return $(this.locators[platform()].selectAdded);
  }
  get addedItem() {
    return $(this.locators[platform()].addedItem);
  }
  get selectAll() {
    return $(this.locators[platform()].selectAll);
  }
  get clickOnEditTheAddedIems() {
    return $(this.locators[platform()].clickOnEditTheAddedIems);
  }
  get selectTheIemsToEdit() {
    return $$(this.locators[platform()].selectTheIemsToEdit);
  }
  get clickOnDeleteIcon() {
    return $(this.locators[platform()].clickOnDeleteIcon);
  }
  get clickOnRemove() {
    return $(this.locators[platform()].clickOnRemove);
  }
  get selectMyRecipes() {
    return $(this.locators[platform()].selectMyRecipes);
  }
  get navigateToHomeFromSeachField() {
    return $(this.locators[platform()].navigateToHomeFromSeachField);
  }
  get remaindMeLater() {
    return $(this.locators[platform()].remaindMeLater);
  }
  dynamicAddedReceipes(currentText) {
    return $(this.locators[platform()].dynamicAddedReceipes(currentText));
  }
  get addType() {
    return $(this.locators[platform()].addType);
  }
  get checkInspiredText() {
    return $(this.locators[platform()].checkInspiredText);
  }
  get checkByCourseText() {
    return $(this.locators[platform()].checkByCourseText);
  }
  get checkMyCourseTextInMyRecipe() {
    return $(this.locators[platform()].checkMyCourseTextInMyRecipe);
  }
  get checkTopBloggersText() {
    return $(this.locators[platform()].checkTopBloggersText);
  }
  get clickForAddToFavorites() {
    return $(this.locators[platform()].clickForAddToFavorites);
  }
  get selectedItem() {
    return $(this.locators[platform()].selectedItem);
  }
  get selectFavorites() {
    return $(this.locators[platform()].selectFavorites);
  }
  get clickToRemoveFromFavorites() {
    return $(this.locators[platform()].clickToRemoveFromFavorites);
  }
  get navigateToHomeFromFavorites() {
    return $(this.locators[platform()].navigateToHomeFromFavorites);
  }
  get clickOnGetIdeas() {
    return $(this.locators[platform()].clickOnGetIdeas);
  }
  get selectCooks() {
    return $(this.locators[platform()].selectCooks);
  }
  get clickOnMyRecipe() {
    return $(this.locators[platform()].myRecipe);
  }
  get clickOnPlusIcon() {
    return $(this.locators[platform()].plusIcon);
  }
  get clickOnRecipeScan() {
    return $(this.locators[platform()].recipeScan);
  }
  get clickOnAccessPopUp() {
    return $(this.locators[platform()].accessPopUp);
  }
  get clickOnAddImageIcon() {
    return $(this.locators[platform()].addImageIcon);
  }
  get clickOnBuyRecipeScan() {
    return $(this.locators[platform()].buyRecipeScan);
  }
  get clickOnCrossIcon() {
    return $(this.locators[platform()].crossIcon);
  }
  get clickOnBackIcon() {
    return $(this.locators[platform()].backIcon);
  }
  get clickOnPlusButton() {
    return $(this.locators[platform()].clickOnPlusButton);
  }
  get clickOnTypeInRecipe() {
    return $(this.locators[platform()].clickOnTypeInRecipe);
  }
  get clickOnAddTitle() {
    return $(this.locators[platform()].clickOnAddTitle);
  }
  get clickOnIngradients() {
    return $(this.locators[platform()].clickOnIngradients);
  }
  get clickOnPreparation1() {
    return $(this.locators[platform()].clickOnPreparation1);
  }
  get clickToSeeAddedProduct() {
    return $(this.locators[platform()].clickToSeeAddedProduct);
  }
  get comparingTextValue() {
    return $(this.locators[platform()].comparingTextValue);
  }
  get checkingRecipePresence() {
    return $(this.locators[platform()].checkingRecipePresence);
  }
  get checkingTitleText() {
    return $(this.locators[platform()].checkingTitleText);
  }
  get checkingIngradientsText() {
    return $(this.locators[platform()].checkingIngradientsText);
  }
  get checkingInstructionText() {
    return $(this.locators[platform()].checkingInstructionText);
  }

  get navigateToHomeFromSelectedItem() {
    return $(this.locators[platform()].navigateToHomeFromSelectedItem);
  }
  get allRecipes() {
    return $(this.locators[platform()].allRecipes);
  }
  get searchIcon() {
    return $(this.locators[platform()].searchIcon);
  }
  get selectSearchField() {
    return $(this.locators[platform()].selectSearchField);
  }
  get searchRecipe() {
    return $(this.locators[platform()].searchRecipe);
  }

  async verifySearchIconsSubTabs() {
    await this.searchIcon.click();
    await browser.pause(1000);
    expect(await this.checkInspiredText).toBeExisting();
    expect(await this.checkByCourseText).toBeExisting();
    await this.selectMyRecipes.click();
    expect(await this.checkMyCourseTextInMyRecipe).toBeExisting();
    await this.selectCooks.click();
    expect(await this.checkTopBloggersText).toBeExisting();
  }
  async addReciepeTofav(recipeName) {
    await this.allRecipes.click();
    await this.selectSearchField.click();
    await this.searchRecipe.setValue(recipeName);
    await browser.keys("Enter");
    await this.selectedItem.click();
    await this.clickForAddToFavorites.click();
    await browser.pause(3000);
    await this.navigateToHomeFromSelectedItem.click();
    await this.navigateToHomeFromSeachField.click();
    await this.selectMyRecipes.click();
    await this.selectFavorites.click();
    await this.selectedItem.click();
    await this.clickToRemoveFromFavorites.click();
    await browser.pause(3000);
  }
  async removeFromFav() {
    await this.navigateToHomeFromSelectedItem.click();
    await this.navigateToHomeFromFavorites.click();
    await this.clickOnGetIdeas.click();
    await browser.pause(1000);
  }

  async addReceipeFromWebsites(receipesPage) {
    await this.selectMyRecipes.click();
    await this.clickOnPlusSymbol.click();
    await this.clickOnReceipeClipper.click();
    await browser.pause(3000);
    await this.clickOnEnterWebsite.click();
    for (const key in receipesPage) {
      await this.clickOnEnterWebsite.setValue(receipesPage[key]);
      await this.clickOnSaveReceipe.click();
      await browser.pause(1000);
      await this.clickOnPreparation.click();
      await this.clickOnNutrition.click();
      await this.navigateToHomeFromSeachField.click();
    }
    await this.navigateToHomeFromSeachField.click();
  }

  async verifyReceipesAreAdded(allText) {
    await this.addType.click();
    for (let cProperity in allText) {
      assert.isTrue(await this.dynamicAddedReceipes(allText[cProperity]).isDisplayed(), allText[cProperity] + " this recepie is not found");
      await browser.pause(5000);
    }
    await this.navigateToHomeFromSeachField.click();
    await this.remaindMeLater.click();
  }

  async removeReceipesFromAll() {
    await browser.pause(5000);
    await this.selectAll.click();
    await this.clickOnEditTheAddedIems.click();
    await browser.pause(3000);
    for (let i = 0; i < (await this.selectTheIemsToEdit.length); i++) {
      await this.selectTheIemsToEdit[i].click();
    }
    await this.clickOnDeleteIcon.click();
    await browser.pause(5000);
    await this.clickOnRemove.click();
    await this.navigateToHomeFromSeachField.click();
    await browser.pause(5000);
  }
  

  async myRecipe() {
    await this.clickOnMyRecipe.click();
    await browser.pause(1000);
  }

  async plusIcon() {
    await this.clickOnPlusIcon.click();
    await browser.pause(1000);
  }

  async recipeScan() {
    await this.clickOnRecipeScan.click();
    await browser.pause(1000);
  }
  async accessPopUp() {
    await this.clickOnAccessPopUp.click();
    await browser.pause(1000);
  }
  async addImageIcon() {
    await this.clickOnAddImageIcon.click();
    await browser.pause(2000);
  }
  async validatePremiumRecipe() {
    assert.isTrue(await this.addImageIcon.isDisplayed());
    await browser.pause(4000);
  }
  async buyRecipeScan() {

    await this.clickOnBuyRecipeScan.click();
    await browser.pause(4000);
  }
  async crossIcon() {
    await this.clickOnCrossIcon.click();
    await browser.pause(2000);
  }
  async backIcon() {
    await this.clickOnBackIcon.click();
    await browser.pause(1000);
  }

  // Adding new Recipes

  async addingNewRecipes(titleOfRecipe, addingIngradients, addingPreparations) {
    await this.selectMyRecipes.click();
    await browser.pause(3000);
    await this.clickOnPlusButton.click();
    await this.clickOnTypeInRecipe.click();
    await browser.pause(10000);
    await this.clickOnAddTitle.click();
    await expect(await this.checkingTitleText).toBeExisting();
    await expect(await this.checkingIngradientsText).toBeExisting();
    await expect(await this.checkingInstructionText).toBeExisting();
    await this.clickOnAddTitle.setValue(titleOfRecipe);
    await this.clickOnIngradients.setValue(addingIngradients);
    await this.clickOnPreparation1.setValue(addingPreparations);
    await browser.pause(3000);
    await browser.keys("Enter");
    await browser.pause(3000);
    const contentDescText = await this.comparingTextValue.getText();
    assert.isTrue(await contentDescText.includes(titleOfRecipe));
    await browser.pause(5000);
  }
  //CHECKING THE PRESENCE OF NEW RECIPE

  async checkingThePresenceOfNewRecipe(titleOfRecipe) {
    await this.navigateToHomeFromSelectedItem.click();
    await this.allRecipes.click();
    await this.searchIcon.click();
    await browser.pause(5000);
    await this.selectSearchField.click();
    await this.searchRecipe.setValue(titleOfRecipe);
    await browser.pause(5000);
    await browser.keys("Enter");
    const actualText = await this.checkingRecipePresence.getText();
    assert.include(actualText, titleOfRecipe, "not found text");
    await browser.pause(1000);
    await this.navigateToHomeFromSeachField.click();
  }
}
module.exports = new BigOvenPage();
