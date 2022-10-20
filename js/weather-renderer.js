'use strict'
class WeatherRender{
    rootElement;
    weatherElement;
    constructor(rootElement) {
        this.rootElement = rootElement
    }
    render(daysList, title) {
        this.rootElement.innerHTML = ''
        if (daysList.length < 1) {
            return
        }
        this.weatherElement = document.createElement('h3')
        this.weatherElement.classList.add('weather')
    
        this.weatherElement.appendChild(this.getWeatherTitleElement(title))
        this.weatherElement.appendChild(this.getWeatherList(daysList))
        this.rootElement.appendChild(this.weatherElement)


        // this.creatingElems('div', 'weather', '.app')
    }

    update() {
        return this.weatherElement.innerHTML = this.title;
    }

    getWeatherTitleElement(title) {
        return this.createElement('div', 'weather__title', title)
    }

    getWeatherList(daysList) {
        const weatherListElement = this.createElement('div', 'weather__list')
            daysList.forEach(item => {
                weatherListElement.appendChild(this.getWeatherElement(`${item.id}) ${item.date}`))
                weatherListElement.appendChild(this.getWeatherElement(item.day))
                weatherListElement.appendChild(this.getWeatherElement(item.temp))
                weatherListElement.appendChild(this.getWeatherElement(deleting, item.id))
            })
        return weatherListElement
    }

    getWeatherElement(day, id) {
        const elem =  this.createElement('div', 'weather__list-element', day)
            elem.setAttribute('data-id', id)
        return elem
    }

    createElement(tagName, classes, html) {
        const element = document.createElement(tagName)
        element.classList.add(classes)
        if (Boolean(html)) {
            if (html === deleting) {
                element.classList.add('forDelete')
            }
            element.innerHTML = html
        }
        return element
    }
    
    creatingElems(tagName, classname, placeName) {
        const elem = document.createElement(tagName)
        elem.classList.add(classname)
        const parent = document.querySelector(placeName)
        parent.appendChild(elem)
        return elem
    }

    

}
