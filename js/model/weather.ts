export class Weather {
    imagePath
    _dayOfWeek
    _tempC
    constructor(imagePath:string, dayOfWeek:any, tempC:string) {
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