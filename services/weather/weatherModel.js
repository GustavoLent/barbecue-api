export default class WeatherModel {
    constructor(country, region, localtime, temperature, weatherCode, weatherDescription, iconUrl) {
        if (country && region && localtime && temperature && weatherCode && weatherDescription && iconUrl) {
            this.country = country
            this.region = region
            this.localtime = localtime
            this.temperature = temperature
            this.weatherCode = weatherCode
            this.weatherDescription = weatherDescription
            this.iconUrl = iconUrl
        }
        else {
            throw Error(`
            Missing wheater data. 
            country: ${country} 
            region: ${region} 
            localtime: ${localtime} 
            temperature: ${temperature} 
            weatherCode: ${weatherCode} 
            weatherDescription: ${weatherDescription} 
            iconUrl: ${iconUrl}
            `)
        }
    }
}