import WeatherService from "../weather/weatherService.js";
import getBarbecueRecommendation from "./getBarbecueRecommendation.js";

export default class BarbecueService {
    constructor() {
        this.weatherService = new WeatherService()
    }

    async getBarbecueRecomendation(city) {
        const { weatherService } = this

        try {
            const wheaterData = await weatherService.getWeatherData(city)

            const recomendation = this.getBarbecueRecomendationByCityWeather(wheaterData)
            return recomendation
        } catch (error) {
            console.log(error)
            return "Enjoy!"
        }
    }

    async getBarbecueRecomendationByCityWeather(cityWheater) {
        const code = cityWheater.weatherCode
        const recomendation = getBarbecueRecommendation(code)

        return recomendation
    }
}