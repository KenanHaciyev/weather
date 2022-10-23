class Weather {

    constructor(imagePath, dayOfWeek, tempC) {
        this.imagePath = imagePath
        this._dayOfWeek = dayOfWeek
        this._tempC = tempC
    }

    get dayOfWeek() {
        return this._dayOfWeek
    }

    get tempC() {
        return this._tempC
    }
}