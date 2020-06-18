cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-background-fetch/www/BackgroundFetch.js",
        "id": "cordova-plugin-background-fetch.BackgroundFetch",
        "pluginId": "cordova-plugin-background-fetch",
        "clobbers": [
            "window.BackgroundFetch"
        ]
    },
    {
        "file": "plugins/cordova-background-geolocation-lt/www/BackgroundGeolocation.js",
        "id": "cordova-background-geolocation-lt.BackgroundGeolocation",
        "pluginId": "cordova-background-geolocation-lt",
        "clobbers": [
            "window.BackgroundGeolocation"
        ]
    },
    {
        "file": "plugins/cordova-background-geolocation-lt/www/API.js",
        "id": "cordova-background-geolocation-lt.API",
        "pluginId": "cordova-background-geolocation-lt"
    },
    {
        "file": "plugins/cordova-background-geolocation-lt/www/DeviceSettings.js",
        "id": "cordova-background-geolocation-lt.DeviceSettings",
        "pluginId": "cordova-background-geolocation-lt"
    },
    {
        "file": "plugins/cordova-background-geolocation-lt/www/Logger.js",
        "id": "cordova-background-geolocation-lt.Logger",
        "pluginId": "cordova-background-geolocation-lt"
    },
    {
        "file": "plugins/cordova-background-geolocation-lt/www/TransistorAuthorizationToken.js",
        "id": "cordova-background-geolocation-lt.TransistorAuthorizationToken",
        "pluginId": "cordova-background-geolocation-lt"
    },
    {
        "file": "plugins/cordova-background-geolocation-lt/src/browser/BackgroundGeolocationMock.js",
        "id": "cordova-background-geolocation-lt.BackgroundGeolocationMock",
        "pluginId": "cordova-background-geolocation-lt",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-background-fetch": "6.0.8",
    "cordova-background-geolocation-lt": "3.7.0"
}
// BOTTOM OF METADATA
});