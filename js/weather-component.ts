import { WeatherCreating } from "./weather-creating";
import { HTMLElements } from "./HTMLElements";

export class WeatherComponent {

    weatherRenderer = new WeatherCreating();

    constructor() {
        new HTMLElements('div', 'container', '.app').createHTMLElement()
        new HTMLElements('div', 'weather', '.container').createHTMLElement()
        new HTMLElements('div', 'weather__headerWrapper', '.weather').createHTMLElement()
        new HTMLElements('h1', 'weather__headerWrapper-title', '.weather__headerWrapper', 'Baku').createHTMLElement()
        new HTMLElements('div', 'weather__headerWrapper-temp', '.weather__headerWrapper').createHTMLElement()
        new HTMLElements('div', 'weather__content', '.weather').createHTMLElement()
        new HTMLElements('div', 'weather__leftWrapper', '.weather__content').createHTMLElement()
        new HTMLElements('div', 'weather__leftWrapper-day', '.weather__leftWrapper').createHTMLElement()
        new HTMLElements('div', 'weather__leftWrapper-date', '.weather__leftWrapper').createHTMLElement()
        new HTMLElements('div', 'weather__leftWrapper-time', '.weather__leftWrapper', `${new Date().toLocaleTimeString()}`).createHTMLElement()
        new HTMLElements('div', 'weather__leftWrapper-descr','.weather__leftWrapper').createHTMLElement()
        new HTMLElements('div', 'weather__leftWrapper-row1', '.weather__leftWrapper').createHTMLElement()
        new HTMLElements('img', 'weather__leftWrapper-row1-img', '.weather__leftWrapper-row1', '', './image/humidity.png').createHTMLElement()
        new HTMLElements('div', 'weather__leftWrapper-humidity', '.weather__leftWrapper-row1').createHTMLElement()
        new HTMLElements('div', 'weather__leftWrapper-row2', '.weather__leftWrapper').createHTMLElement()
        new HTMLElements('img', 'weather__leftWrapper-row2-img', '.weather__leftWrapper-row2', '', './image/tension.png').createHTMLElement()
        new HTMLElements('div', 'weather__leftWrapper-tension', '.weather__leftWrapper-row2').createHTMLElement()
        new HTMLElements('div', 'weather__leftWrapper-row3', '.weather__leftWrapper').createHTMLElement()
        new HTMLElements('img', 'weather__leftWrapper-row3-img', '.weather__leftWrapper-row3', '', './image/sunrise.png').createHTMLElement()
        new HTMLElements('div', 'weather__leftWrapper-sunrise', '.weather__leftWrapper-row3').createHTMLElement()
        new HTMLElements('div', 'weather__leftWrapper-row4', '.weather__leftWrapper').createHTMLElement()
        new HTMLElements('img', 'weather__leftWrapper-row4-img', '.weather__leftWrapper-row4', '', './image/sunset.png').createHTMLElement()
        new HTMLElements('div', 'weather__leftWrapper-sunset', '.weather__leftWrapper-row4').createHTMLElement()
        new HTMLElements('div', 'weather__rightWrapper', '.weather__content').createHTMLElement()
        new HTMLElements('img', 'weather__rightWrapper-img', '.weather__rightWrapper').createHTMLElement()
        new HTMLElements('div', 'weather__weekDays', '.weather').createHTMLElement();
    }

    timeUpdate = setInterval(() => {
        document.querySelector('.weather__leftWrapper-time').textContent = new Date().toLocaleTimeString()
    }, 1000)

    iffyPressBtn = (async() => {
        await this.weatherRenderer.pressBtn();
        const btnForFirstDayMakeActive: HTMLElement = document.querySelector('.weather__weekDays-0')
        btnForFirstDayMakeActive.click() 
    })()

}
