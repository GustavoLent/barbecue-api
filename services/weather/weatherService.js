import axios from "axios"
import WeatherModel from "./weatherModel.js"

export default class WeatherService {
    constructor() {
        this.weatherAPIKey = process.env.WEATHER_API_KEY
    }

    async getWeatherData(city) {
        const requestData = await this._requestWeatherData(city)

        const country = requestData.location.country
        const region = requestData.location.region
        const localtime = requestData.location.localtime
        const temperature = requestData.current.temperature
        const weatherCode = requestData.current.weather_code
        const weatherDescription = requestData.current.weather_descriptions[0]
        const iconUrl = requestData.current.weather_icons[0]

        const parsedData = new WeatherModel(country, region, localtime, temperature, weatherCode, weatherDescription, iconUrl)

        return parsedData
    }

    async _requestWeatherData(city) {
        const { weatherAPIKey } = this

        const url = `http://api.weatherstack.com/current?access_key=${weatherAPIKey}&query=${city}`
        console.log('will request the url: ' + url)

        const res = await axios.get(url)

        if (res.data) {
            return res.data
        }

        throw new Error('Error requesting weather data.');
    }
}