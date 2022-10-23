
// My Api for generation new key https://www.weatherapi.com/
'use strict';
    const weatherRenderer = new WeatherRender
    
    const appContainer = new HTMLElement('div', 'container', '.app').createHTMLElement()
    const weather = new HTMLElement('div', 'weather', '.container').createHTMLElement()
    const weatherHeader = new HTMLElement('div', 'weather__headerWrapper', '.weather').createHTMLElement()
    const weatherTitle = new HTMLElement('h1', 'weather__headerWrapper-title', '.weather__headerWrapper', 'Baku').createHTMLElement()
    const weatherTemp = new HTMLElement('div', 'weather__headerWrapper-temp', '.weather__headerWrapper').createHTMLElement()
    const weatherContent = new HTMLElement ('div', 'weather__content', '.weather').createHTMLElement()
    const weatherLeft = new HTMLElement('div', 'weather__leftWrapper', '.weather__content').createHTMLElement()
    const weatherDay = new HTMLElement('div', 'weather__leftWrapper-day', '.weather__leftWrapper').createHTMLElement()
    const weatherDate = new HTMLElement('div', 'weather__leftWrapper-date', '.weather__leftWrapper').createHTMLElement()
    const weatherTime = new HTMLElement('div', 'weather__leftWrapper-time', '.weather__leftWrapper', `${new Date().toLocaleTimeString()}`).createHTMLElement()
    const weatherDescription = new HTMLElement('div', 'weather__leftWrapper-descr','.weather__leftWrapper').createHTMLElement()
    const weatherRowWrapper1 = new HTMLElement('div', 'weather__leftWrapper-row1', '.weather__leftWrapper').createHTMLElement()
    const weatherHumidityImg = new HTMLElement('img', 'weather__leftWrapper-row1-img', '.weather__leftWrapper-row1', '', './image/humidity.png').createHTMLElement()
    const weatherHumidity = new HTMLElement('div', 'weather__leftWrapper-humidity', '.weather__leftWrapper-row1').createHTMLElement()
    const weatherRowWrapper2 = new HTMLElement('div', 'weather__leftWrapper-row2', '.weather__leftWrapper').createHTMLElement()
    const weatherTensionImg = new HTMLElement('img', 'weather__leftWrapper-row2-img', '.weather__leftWrapper-row2', '', './image/tension.png').createHTMLElement()
    const weatherTension = new HTMLElement('div', 'weather__leftWrapper-tension', '.weather__leftWrapper-row2').createHTMLElement()
    const weatherRowWrapper3 = new HTMLElement('div', 'weather__leftWrapper-row3', '.weather__leftWrapper').createHTMLElement()
    const weatherSunriseImg = new HTMLElement('img', 'weather__leftWrapper-row3-img', '.weather__leftWrapper-row3', '', './image/sunrise.png').createHTMLElement()
    const weatherSunrise = new HTMLElement('div', 'weather__leftWrapper-sunrise', '.weather__leftWrapper-row3').createHTMLElement()
    const weatherRowWrapper4 = new HTMLElement('div', 'weather__leftWrapper-row4', '.weather__leftWrapper').createHTMLElement()
    const weatherSunsetImg = new HTMLElement('img', 'weather__leftWrapper-row4-img', '.weather__leftWrapper-row4', '', './image/sunset.png').createHTMLElement()
    const weatherSunset =new HTMLElement('div', 'weather__leftWrapper-sunset', '.weather__leftWrapper-row4').createHTMLElement()
    const weatherRight = new HTMLElement('div', 'weather__rightWrapper', '.weather__content').createHTMLElement()
    const weatherImg = new HTMLElement('img', 'weather__rightWrapper-img', '.weather__rightWrapper').createHTMLElement()
    const weatherWeek = new HTMLElement('div', 'weather__weekDays', '.weather').createHTMLElement();
    
    (async() => {
       await weatherRenderer.pressBtn();
       document.querySelector('.weather__weekDays-0').click()
    })()
    
    setInterval(() => {
        document.querySelector('.weather__leftWrapper-time').textContent = new Date().toLocaleTimeString()
    }, 1000)
    
    






   


