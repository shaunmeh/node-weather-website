const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8ebc04a3d607d71f5a98d2830a3e9d85/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body}) => {
        if (error) {
            callback('Unable to Connect to Weather Service!', undefined)
        } else if (body.error) {
            callback('Unable to Find Location, Please Try Again', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' degrees, with a ' + body.currently.precipProbability + ' percent chance of rain')
        }
    })
}

module.exports = forecast