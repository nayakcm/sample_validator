var nouser_BS = {
  'browserstack.user': '', 
	'browserstack.key':'dummyqLAsuo2WwWdaaaa',
  'browserstack.geoLocation': 'us',
  device: 'Google Pixel 3a',
  platformName: "android", 
  'app': 'bs://2240aea0294284920480965954836d17dd882430',
  vendor:'browserstack'
}

var fire_tab = {
  deviceName: "Fire Tab",
  automationName: "Appium",
  platformName: "Android",
  appPackage: "com.android.settings",
  appActivity: "com.android.settings.Settings",
  app: 'a217bd79-df79-49f9-9f42-369708af0e41',
  newCommandTimeout: 130,
  autoAcceptAlerts: false,
  "headspin:selector": 'device_skus:"Fire HD Tab"',
  "headspin:capture.video": true,
  "headspin:network.regionalRouting": "us-nyc",
  vendor: "headspin",
  headspinToken: "***********************"
};

var apple_tv = {
  deviceName: "Apple TV 4K",
  automationName: "Appium",
  platformVersion: "16.1",
  platformName: "tvos",
  autoAcceptAlerts: false,
  app: 'a217bd79-df79-49f9-9f42-369708af0e41',
  bundleId: "com.discovery.mobile.enterprise.discoveryplus",
  "headspin:selector": 'device_skus:"Apple TV 4K"',
  "headspin:waitForDeviceOnlineTimeout": "600",
  "headspin:capture.video": "true",
  "headspin:network.regionalRouting": "us-nyc",
  "headspin:app.id": "6df4d181-76ce-4088-8642-dac68f2e0331",
  "headspin:app.resign": "true",
  "headspin:appiumVersion": "1.22.3",
  vendor: "headspin",
  headspinToken: "***********************",
};

var android_mob = {
  "browserstack.user": 'demouser',
  "browserstack.key": "dummyqLAsuo2WwWdaaaa",
  "browserstack.debug": "true",
  "browserstack.geoLocation": "us",
  "browserstack.timezone": "New_York",
  "browserstack.networkLogs": true,
  "browserstack.acceptInsecureCerts": false,
  acceptSslCert: true,
  "browserstack.idleTimeout": 300,
  autoAcceptAlerts: false,
  project: "Android",
  build: "Android mobile",
  name: "Android US",
  device: "Google Pixel 3a",
  os_version: "9.0",
  app: "bs://2240aea0294284920480965954836d17dd882430",
  vendor: "browserstack",
};

var iphone_mob = {
  "browserstack.user": "***********************",
  "browserstack.key": "***********************",
  device: "iPhone 12",
  os_version: "14.1",
  platformName: "IOS",
  automationName: "XCUITest",
  locale: "en_US",
  app: "bs://09faf7a57471a397c331e46b45bd9399ee5ae08b",
  name: "IPhone US",
  build: "iOS testing",
  project: "iOS Project",
  chromeOptions: { w3c: false },
  allowInvisibleElements: "true",
  "browserstack.debug": "true",
  "browserstack.appium_version": "1.21.0",
  "browserstack.networkLogs": "true",
  "browserstack.appProfiling": "true",
  "browserstack.resignApp": "false",
  "browserstack.geoLocation": "us",
  "browserstack.deviceLogs": true,
  autoAcceptAlerts: false,
  "browserstack.console": "verbose",
  "browserstack.acceptInsecureCerts": "false",
  acceptSslCert: "true",
  "browserstack.idleTimeout": "180",
  "browserstack.local": false,
  language: "en",
  fullReset: true,
  usePrebuiltWDA: true,
  vendor: "browserstack",
};

var wbdCapabilities = {
  platformName: "android",
  "appium:platformVersion": "9.0",
  "appium:deviceName": "Google Pixel 4", //need to create table for device name
  language: "en",
  geoLocation: "US",
  "appium:app": "bs://79bf767e5c4df18d3cf33be3f2fe381c71b1dac1",
  browserstack: {
    projectName: "discovery one",
    networkLogs: "true",
    userName: "sharathnayakcm_6KxtEs",
    accessKey: "*********************",
  },
  headspin: {
    appPackage: "com.android.settings",
    appActivity: "com.android.settings.Settings",
    "headspin:capture.video": true,
    deviceName: "Fire Tab",
    "headspin:selector": 'device_skus:"Fire HD Tab"',
    headspinToken: "*********************",
  },
};

const BSwbdCapabilities = {
  "browserstack.user": "*********************",
  "browserstack.key":"*********************",
  "browserstack.debug": "true",
  "browserstack.geoLocation": "us",
  "browserstack.timezone": "New_York",
  "browserstack.networkLogs": true,
  "browserstack.acceptInsecureCerts": false,
  acceptSslCert: true,
  "browserstack.idleTimeout": 300,
  autoAcceptAlerts: false,
  project: "Android Project",
  build: "Android Exec",
  name: "AndroidTV US",
  device: "Google Pixel 3a",
  os_version: "9.0",
  app: "bs://2240aea0294284920480965954836d17dd882430",
  vendor: "browserstack",
};

module.exports = {
  fire_tab,
  android_mob,
  iphone_mob,
  apple_tv,
  nouser_BS
};
