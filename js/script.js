'use strict';
   class WeatherWidget {
        renderer;
        list = [];
        date = ''
        title = 'Прогноз погоды на:'
        constructor (rootElement, list) {
            this.list = list;
            this.renderer = new WeatherRender(rootElement)
            this.renderer.render(this.list, this.title)
        }

        addWeatherOfDay(day) {
            this.list = [...this.list, day]
            return this.renderer.render(this.list, this.title)
        }

        deleteDay(day) {
            this.list = list.filter(item => item.id !== day.id);
            list = this.list;
            this.renderer.render(this.list, this.title)
        }

        sortingbyTemp(a=1) {
            let res;
            if (a===0) {
                res =  this.list.sort((a,b) => +a.temp < +b.temp ? 1 : -1);
            }else {
                res =  this.list.sort((a,b) => +a.temp > +b.temp ? 1 : -1);
            }
            return res;
        }

        copyList(a='weekdays') {
            let res;
            if (a === 'weekend') {
                res = list.filter(item => item.day ==='Суббота' || item.day ==='Воскр');
            }else {
                res = list.filter(item => item.day !=='Суббота' && item.day !=='Воскр');
            }
            return res;
        }
   }

    class Weather {
        constructor(id, date, temp) {
            this.id = id;
            this.date = date;
            this.temp = temp;
            this.day = this.dayBinding();
        }

        dateBinding () {
            return new Date(this.date).toLocaleDateString();
        }

        dayBinding() {
            let dateNum = new Date(this.date);
                let obj =  {
                    weekDay: (() => {
                        let dayId = dateNum.getDay();
                        let day = new Map();
                        day.set(0,'Воскр');
                        day.set(1,'Понед');
                        day.set(2,'Вторник');
                        day.set(3,'Среда');
                        day.set(4,'Четверг');
                        day.set(5,'Пятница');
                        day.set(6,'Суббота');
                        return day.get(dayId);
                    })(),
                };
            return obj.weekDay;
        }
        
    }
    class WeatherDetailed extends Weather{
        constructor(id, date, temp,windSpeed) {
            super(id, date, temp);
            this.windSpeed = windSpeed;         //добавление скорости ветра
        }
    }

    const day1 = new Weather(1,'2011-06-02', '-12');
    const day2 = new Weather(2,'2011-06-03', '-15');
    const day3 = new Weather(3,'2011-06-04', '-11');
    const day4 = new Weather(4,'2011-06-05', '-18');
    const day5 = new Weather(5,'2011-06-06', '+26');
    const day6 = new Weather(6,'2011-06-07', '+4');
    const day7 = new Weather(7,'2011-06-08', '+31');

    const day8 = new WeatherDetailed(8, '2011-08-09', '-2', 13);

    let list = [day1, day2, day3, day4, day5, day6, day7, day8];

class WeatherRender{
    rootElement;
    weatherElement;
    constructor(rootElement) {
        this.rootElement = rootElement
    }
    render(daysList, title) {
        this.rootElement.innerHTML = ''
        this.weatherElement = document.createElement('h3')
        this.weatherElement.classList.add('weather')
    
        this.weatherElement.appendChild(this.getWeatherTitleElement(title))
        this.weatherElement.appendChild(this.getWeatherList(daysList))
        this.rootElement.appendChild(this.weatherElement)
    }

    update() {
        return this.weatherElement.innerHTML = this.title;
    }

    getWeatherTitleElement(title) {
        return this.createElement('div', 'weather__title', title)
    }

    getWeatherList(daysList) {
        const weatherListElement = this.createElement('div', 'weather__list')
            weatherListElement.appendChild(this.getWeatherElement(`${daysList.id}) ${daysList.date}`))
            weatherListElement.appendChild(this.getWeatherElement(daysList.day))
            weatherListElement.appendChild(this.getWeatherElement(daysList.temp))
        return weatherListElement
    }

    getWeatherElement(day) {
        return this.createElement('div', 'weather__list-element', day)
    }

    createElement(tagName, classes, html) {
        const element = document.createElement(tagName)
        element.classList.add(classes)
        if (Boolean(html)) {
            element.innerHTML = html
        }
        return element
    }
}
    let i = 0
    function createNewElement(num) {
        i++
        parent = document.querySelector('.app')
        const elem = document.createElement('div')
        elem.classList.add(`app__weather${i}`)
        parent.appendChild(elem)
        const weatherWidget = new WeatherWidget(document.querySelector(`.app__weather${i}`), list[num])
        return weatherWidget;
    }
    
    function callElements() {
        for (let i = 0; i < list.length; i++) {
            createNewElement(i)
        }
    };

    const day9 = new Weather(9, '2011-06-10', '-10')
    
    setTimeout(() => {
        list.push(day9)
        createNewElement(i)
    }, 2000)

    callElements()


    
    
    




