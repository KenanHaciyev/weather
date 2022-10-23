class WeatherComponent {

    weatherRenderer = new WeatherCreating();

    constructor() {
        new HTMLElement('div', 'container', '.app').createHTMLElement()
        new HTMLElement('div', 'weather', '.container').createHTMLElement()
        new HTMLElement('div', 'weather__headerWrapper', '.weather').createHTMLElement()
        new HTMLElement('h1', 'weather__headerWrapper-title', '.weather__headerWrapper', 'Baku').createHTMLElement()
        new HTMLElement('div', 'weather__headerWrapper-temp', '.weather__headerWrapper').createHTMLElement()
        new HTMLElement ('div', 'weather__content', '.weather').createHTMLElement()
        new HTMLElement('div', 'weather__leftWrapper', '.weather__content').createHTMLElement()
        new HTMLElement('div', 'weather__leftWrapper-day', '.weather__leftWrapper').createHTMLElement()
        new HTMLElement('div', 'weather__leftWrapper-date', '.weather__leftWrapper').createHTMLElement()
        new HTMLElement('div', 'weather__leftWrapper-time', '.weather__leftWrapper', `${new Date().toLocaleTimeString()}`).createHTMLElement()
        new HTMLElement('div', 'weather__leftWrapper-descr','.weather__leftWrapper').createHTMLElement()
        new HTMLElement('div', 'weather__leftWrapper-row1', '.weather__leftWrapper').createHTMLElement()
        new HTMLElement('img', 'weather__leftWrapper-row1-img', '.weather__leftWrapper-row1', '', './image/humidity.png').createHTMLElement()
        new HTMLElement('div', 'weather__leftWrapper-humidity', '.weather__leftWrapper-row1').createHTMLElement()
        new HTMLElement('div', 'weather__leftWrapper-row2', '.weather__leftWrapper').createHTMLElement()
        new HTMLElement('img', 'weather__leftWrapper-row2-img', '.weather__leftWrapper-row2', '', './image/tension.png').createHTMLElement()
        new HTMLElement('div', 'weather__leftWrapper-tension', '.weather__leftWrapper-row2').createHTMLElement()
        new HTMLElement('div', 'weather__leftWrapper-row3', '.weather__leftWrapper').createHTMLElement()
        new HTMLElement('img', 'weather__leftWrapper-row3-img', '.weather__leftWrapper-row3', '', './image/sunrise.png').createHTMLElement()
        new HTMLElement('div', 'weather__leftWrapper-sunrise', '.weather__leftWrapper-row3').createHTMLElement()
        new HTMLElement('div', 'weather__leftWrapper-row4', '.weather__leftWrapper').createHTMLElement()
        new HTMLElement('img', 'weather__leftWrapper-row4-img', '.weather__leftWrapper-row4', '', './image/sunset.png').createHTMLElement()
        new HTMLElement('div', 'weather__leftWrapper-sunset', '.weather__leftWrapper-row4').createHTMLElement()
        new HTMLElement('div', 'weather__rightWrapper', '.weather__content').createHTMLElement()
        new HTMLElement('img', 'weather__rightWrapper-img', '.weather__rightWrapper').createHTMLElement()
        new HTMLElement('div', 'weather__weekDays', '.weather').createHTMLElement();
    }

    sett = setInterval(() => {
        document.querySelector('.weather__leftWrapper-time').textContent = new Date().toLocaleTimeString()
    }, 1000)

    pett = (async() => {
        await this.weatherRenderer.pressBtn();
        document.querySelector('.weather__weekDays-0').click()
    })()

}
