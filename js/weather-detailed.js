class WeatherDetailed extends Weather{
    constructor(id = Weather.defaultId, date, temp, windSpeed) {
        super(id, date, temp);
        this.windSpeed = windSpeed;       
    }
}