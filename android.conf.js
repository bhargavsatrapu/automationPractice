const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');

const appium = {
    "platformName": process.env.platformName,
    "appium:deviceName": process.env.appium_deviceName,
    "appium:platformVersion": process.env.appium_platformVersion,
    "appium:automationName": process.env.appium_automationName,
    "appium:app":process.cwd()+process.env.appium_app,
    "appium:appPackage": process.env.appium_appPackage,
    "appium:appActivity": process.env.appium_appActivity,
    "appium:autoAcceptAlerts": process.env.appium_autoAcceptAlerts,
    "appium:noReset": process.env.appium_noReset,
    //"appium:disableIdLocatorAutocompletion": "true",
    //"appium:fullReset":"true"
    
};
exports.config = merge(
    wdioConf.config,
    {
        capabilities: [appium],
    },
    { clone: false },
);
