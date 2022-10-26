import { Weather } from "./weather"
export class WeatherDetailed extends Weather{
    
    _sunrise
    _sunset
    _date
    _humidity
    _text
    _pressure_mb

    constructor(imagePath: string, dayOfWeek : string, tempC : string, sunrise:string, sunset:string, date:number, humidity:string, text:string, pressure_mb:string) {
        super(imagePath, dayOfWeek, tempC)
        this._sunrise = sunrise
        this._sunset = sunset
        this._date = date
        this._humidity = humidity
        this._text = text
        this._pressure_mb = pressure_mb
    }
    get sunrise() {
        return this._sunrise
    }

    get sunset() {
        return this._sunset
    }

    get date() {
        return this._date
    }

    get humidity() {
        return this._humidity
    }

    get text() {
        return this._text
    }

    get pressure_mb() {
        return this._pressure_mb
    }
}