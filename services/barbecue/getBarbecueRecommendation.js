export default function getBarbecueRecommendation(code) {

    const recommendations = [
        {
            "code": 395,
            "description": "Moderate or heavy snow in area with thunder",
            "recommendation": "Stay away from thunder and get a lot of coal and vodka to keep warm"
        },
        {
            "code": 392,
            "description": "Patchy light snow in area with thunder",
            "recommendation": "Stay away from thunder and get a lot of coal"
        },
        {
            "code": 389,
            "description": "Moderate or heavy rain in area with thunder",
            "recommendation": "Stay away from thunder and get a strong umbrella"
        },
        {
            "code": 386,
            "description": "Patchy light rain in area with thunder",
            "recommendation": "Stay away from thunder and get a umbrella"
        },
        {
            "code": 377,
            "description": "Moderate or heavy showers of ice pellets",
            "recommendation": "Stay in a secure place"
        },
        {
            "code": 374,
            "description": "Light showers of ice pellets",
            "recommendation": "Get your strongest umbrella"
        },
        {
            "code": 371,
            "description": "Moderate or heavy snow showers",
            "recommendation": "Get a lot of coal and vodka to keep warm. Don't try to do your barbecue in a snowboard"
        },
        {
            "code": 368,
            "description": "Light snow showers",
            "recommendation": "Get a lot of coal and vodka to keep warm"
        },
        {
            "code": 365,
            "description": "Moderate or heavy sleet showers",
            "recommendation": "Get your strongest umbrella"
        },
        {
            "code": 362,
            "description": "Light sleet showers",
            "recommendation": "Don't care, just take your headache remedy"
        },
        {
            "code": 359,
            "description": "Torrential rain shower",
            "recommendation": "Some rain is good, enjoy with a barbecue in a secure place"
        },
        {
            "code": 356,
            "description": "Moderate or heavy rain showers",
            "recommendation": "Some rain is good, enjoy with a barbecue in a secure place"
        },
        {
            "code": 353,
            "description": "Light rain shower",
            "recommendation": "Just get your umbrella"
        },
        {
            "code": 350,
            "description": "Ice pellets",
            "recommendation": "Use them to tenderize the meat"
        },
        {
            "code": 338,
            "description": "Heavy snow",
            "recommendation": "Get a lot of coal and vodka to keep warm. Don't try to do your barbecue in a snowboard"
        },
        {
            "code": 335,
            "description": "Patchy heavy snow",
            "recommendation": "Don't do a snow man near the barbecue"
        },
        {
            "code": 332,
            "description": "Moderate snow",
            "recommendation": "Enjoy the barbecue to keep yourself warm"
        },
        {
            "code": 329,
            "description": "Patchy moderate snow",
            "recommendation": "Enjoy the barbecue to keep yourself warm"
        },
        {
            "code": 326,
            "description": "Light snow",
            "recommendation": "Enjoy the barbecue to keep yourself warm"
        },
        {
            "code": 323,
            "description": "Patchy light snow",
            "recommendation": "Enjoy the barbecue to keep yourself warm"
        },
        {
            "code": 320,
            "description": "Moderate or heavy sleet",
            "recommendation": "Use them to tenderize the meat. Protect yourself with a helmet"
        },
        {
            "code": 317,
            "description": "Light sleet",
            "recommendation": "Use them to tenderize the meat"
        },
        {
            "code": 314,
            "description": "Moderate or heavy freezing rain",
            "recommendation": "Get a lot of coal and vodka to keep warm"
        },
        {
            "code": 311,
            "description": "Light freezing rain",
            "recommendation": "Enjoy the barbecue to keep yourself warm"
        },
        {
            "code": 308,
            "description": "Heavy rain",
            "recommendation": "Get your strongest umbrella"
        },
        {
            "code": 305,
            "description": "Heavy rain at times",
            "recommendation": "When its rainning, get your strongest umbrella"
        },
        {
            "code": 302,
            "description": "Moderate rain",
            "recommendation": "Don't care, just get any umbrella"
        },
        {
            "code": 299,
            "description": "Moderate rain at times",
            "recommendation": "When its rainning, get a umbrella"
        },
        {
            "code": 296,
            "description": "Light rain",
            "recommendation": "Don't dance in the rain with the barbecue"
        },
        {
            "code": 293,
            "description": "Patchy light rain",
            "recommendation": "Don't care, enjoy the rainny day"
        },
        {
            "code": 284,
            "description": "Heavy freezing drizzle",
            "recommendation": "Get a lot of coal and vodka to keep warm"
        },
        {
            "code": 281,
            "description": "Freezing drizzle",
            "recommendation": "Get more coal and a coat"
        },
        {
            "code": 266,
            "description": "Light drizzle",
            "recommendation": "Don't care, enjoy the rainny day"
        },
        {
            "code": 263,
            "description": "Patchy light drizzle",
            "recommendation": "Don't care, enjoy the rainny day"
        },
        {
            "code": 260,
            "description": "Freezing fog",
            "recommendation": "Get a lot of coal and vodka to keep warm"
        },
        {
            "code": 248,
            "description": "Fog",
            "recommendation": "Don't care, the light that you needs will come from the barbecue's fire"
        },
        {
            "code": 230,
            "description": "Blizzard",
            "recommendation": "Keep safe to enjoy the barbecue"
        },
        {
            "code": 227,
            "description": "Blowing snow",
            "recommendation": "Get more coal and a coat"
        },
        {
            "code": 200,
            "description": "Thundery outbreaks nearby",
            "recommendation": "Stay away from the thunder"
        },
        {
            "code": 185,
            "description": "Patchy freezing drizzle nearby",
            "recommendation": "Get more coal and a coat"
        },
        {
            "code": 182,
            "description": "Patchy sleet nearby",
            "recommendation": "Get a strong umbrella"
        },
        {
            "code": 179,
            "description": "Patchy snow nearby",
            "recommendation": "Stay away from the snow"
        },
        {
            "code": 176,
            "description": "Patchy rain nearby",
            "recommendation": "Don't care, get any umbrella"
        },
        {
            "code": 143,
            "description": "Mist",
            "recommendation": "The barbecue will show you the way"
        },
        {
            "code": 122,
            "description": "Overcast",
            "recommendation": "Just enjoy your barbecue"
        },
        {
            "code": 119,
            "description": "Cloudy",
            "recommendation": "Just enjoy your barbecue"
        },
        {
            "code": 116,
            "description": "Partly Cloudy",
            "recommendation": "Just enjoy your barbecue"
        },
        {
            "code": 113,
            "description": "Clear/Sunny",
            "recommendation": "Buy more meat and beers, this is a good day to do a barbecue"
        }
    ]

    const recommendation = recommendations.find(el => el.code == code)

    if (recommendation) {
        return recommendation.recommendation
    }

    throw new Error('No recommendation  found!')
}
