import { WeatherCreating } from "./weather-creating"
import { WeatherDetailed } from "./model/weather-detailed"

export class Weatherdataservices {

    async getData(): Promise<any> {
       try {
        const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=837dc5367c9d41c181695625221910&q=Baku&days=7&aqi=no&alerts=no")
        const response_1 = await response.json()
        const weatherByDay = response_1.forecast.forecastday.map((item:any) => {
            return new WeatherDetailed(
                item.day.condition.icon,
                new WeatherCreating().setDayOfWeek(item.date_epoch * 1000),
                item.day.avgtemp_c,
                item.astro.sunrise,
                item.astro.sunset,
                item.date_epoch * 1000,
                item.day.avghumidity,
                item.day.condition.text,
                item.hour[13].pressure_mb
            )
        })
        console.log(weatherByDay);
        return await Promise.resolve(weatherByDay)
       } catch (error) {
        console.log(error);
       }
    }
}

