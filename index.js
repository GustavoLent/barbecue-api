import dotenv from 'dotenv'
dotenv.config()

import WeatherService from "./services/weather/weatherService.js";
import BarbecueService from "./services/barbecue/barbecueService.js";

const weather = new WeatherService()
const barbecueService = new BarbecueService()

const moscowRec = await barbecueService.getBarbecueRecomendation('Moscow')
const jagRec = await barbecueService.getBarbecueRecomendation('Jaguariuna')

console.log(moscowRec)
console.log(jagRec)

