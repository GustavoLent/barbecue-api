import BarbecueService from "../services/barbecue/barbecueService";
import WeatherService from "../services/weather/weatherService";
import jest from 'jest-mock';
import testsData from "./testsData";

const weather = new WeatherService()
const barbecueService = new BarbecueService()

const mockedCity = testsData.mockedCity
const weatherData = testsData.parsedRequestResponse
const recommendation = testsData.barbecueRecommendation

test('validate barbecue recommendation', async () => {
    const mockWeatherData = jest.fn();
    WeatherService.prototype.getWeatherData = mockWeatherData;
    mockWeatherData.mockReturnValue(Promise.resolve(weatherData));

    const res = await barbecueService.getBarbecueRecomendation(mockedCity)

    expect(res).toEqual(recommendation);

    mockWeatherData.mockRestore()
});
