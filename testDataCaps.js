var nouser_BS = {
  'browserstack.user': '', 
	'browserstack.key':'dummyqLAsuo2WwWdaaaa',
  'browserstack.geoLocation': 'us',
  device: 'Google Pixel 3a',
  platformName: "android", 
  'app': 'bs://dsds',
  vendor:'browserstack'
}




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
  app: "bs://sss",
  vendor: "browserstack",
};





module.exports = {
  fire_tab,
  android_mob,
  iphone_mob,
  apple_tv,
  nouser_BS
};
