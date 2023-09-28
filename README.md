# BigOven_MobileAutomation
 <h2>Mobile Automation Using WebdriverIo with Mocha Framework and allure reports</h2>

<h3>Project Description:-</h3> This project is about automating native and web applications of BigOven using appium tool.It automates essential features such as login, recipe creation,adding recipes to favourites,adding recipes from external websites, search functionality and logout.

<h3>prerequisites:-</h3>
<ul>
           <li> Jdk installation</li>
           <li> Node installation</li>
           <li> visual studio code</li>
           <li> Android studio(sdk manager and virtual device)</li>
           <li> appium server(GUI,CLI)</li>
           <li> appium inspector</li>
 </ul>

<h3>Setup:-</h3>

<b>Follow the below steps.</b><br>
<ul>
<li> install webdriverIo with mocha framework</li>
<li> install appium in project </li>
<li> install all required dependencies and dev-dependencies</li>
<li> install reporter </li>
<li> setup all configurations in configuration files</li>
<li> define all required capabilities and env varaiables</li>
</ul>
<h3>Project Structure:-</h3>

 BIGOVEN_MOBILEAUTOMATION<br>
      |---allure-report<br>
      |---allure-results<br>
      |--- App<br>
      |    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   |---bigoven-recipes.apk<br>
      |---data<br>
      |    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   |---bigOvenTestData.json<br>
      |---node_modules<br>
      |--- test<br>
      |    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   |---pageobjects<br>
      |    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   |---specs<br>
      |--- utils<br>
      |---.env<br>
      |---android.conf.js<br>
      |---ios.conf.js<br>
      |---package-lock.json<br>
      |---package.json<br>
      |---wdio.conf.js<br>
      |---web.conf.js<br>

<h3>follow the below guidelines while writing automation scripts:-</h3>
<ul>
<li>Write testcases in test folder.</li>
<li>Keep test data in data file.</li>
<li>Keep reusable methods in utils folder.</li>
<li>Make sure test scripts should be independent of test data.</li>
<li>Use proper coding conventions and best practices.</li>
<ul>

<h3>Test Execution:-</h3>

To run tests, you can use the following commands:<br>
npm run android/npm run ios/npm run web

<h3>Reports:-</h3>

allure reports will be automatically open in browser immediate after test execution.

<h3>Clone the repository:-</h3>

git -c http.sslVerify=false clone https://10.10.90.151/ruchitha.devulapally/bigoven_mobileautomation.git