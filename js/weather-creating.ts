'use strict'

import { Weatherdataservices } from "./weather.data.service";

export class WeatherCreating{

    div:any;
    
    async create (i:number): Promise<any> {
        const res = await new Weatherdataservices().getData()
        return await Promise.resolve(res)
    }

    async initializationOfDays(i:number) : Promise<any> {
        const response = await this.create(i)
        this.div = this.createElement('div', `weather__weekDays-${i}`,'.weather__weekDays')
        this.div.classList.add('item')
        this.div.setAttribute('data-id', i)
        const img = await this.createElement('img', `weather__weekDays-${i}-img`,`.weather__weekDays-${i}`, '', `https:${response[i].imagePath}`)
        const weekDay = await this.createElement('div', `weather__weekDays-day`,`.weather__weekDays-${i}`, response[i].dayOfWeek.slice(0,3))
        const temp = await this.createElement('div', `weather__weekDays-temp`,`.weather__weekDays-${i}`, (response[i].tempC > 0? `+${Math.round(response[i].tempC)}°C` : `${Math.round(response[i].tempC)}°С`))
        return Promise.resolve([this.div, response[i].dayOfWeek, response[i].imagePath, response[i].tempC, response[i].sunrise, response[i].sunset, response[i].date, response[i].text, response[i].humidity, response[i].pressure_mb])
    }

    setDayOfWeek(date:number):string {
        const newDate = new Date(date).getDay()
        const day = new Map()
        day.set(0, 'Sunday')
        day.set(1, 'Monday')
        day.set(2, 'Tuesday')
        day.set(3, 'Wednesday')
        day.set(4, 'Thursday')
        day.set(5, 'Friday')
        day.set(6, 'Saturday')
        return day.get(newDate)
    }

    createElement(tag:string, className:string, parent:string, inner?:string, path?:string):any {
        const elem = document.createElement(tag);
        elem.classList.add(className);
        const parentNode = document.querySelector(parent);
        if (inner) {
            elem.innerHTML = inner
        }

        if (path) {
            elem.setAttribute('src', path)
        }
        parentNode.appendChild(elem)
        return elem
    }

    async asyncCreatingOfDays () : Promise<any> {
        const daysDataInformation  = []
        for (let i = 0; i < 7; i++) {
           const oneDay = await this.initializationOfDays(i)
           daysDataInformation.push(oneDay)
        }
        return daysDataInformation
    }

    async pressBtn(): Promise<void> {
        const response = await this.asyncCreatingOfDays()
            response.map((item:any, i:number) => {
                item[0].addEventListener('click', () => {
                    response.map((itemDeleteActive:any) => itemDeleteActive[0].classList.remove('active'))
                    response[i][0].classList.add('active')
                    document.querySelector('.weather__leftWrapper-day').textContent = item[1]
                    document.querySelector('.weather__rightWrapper-img').setAttribute('src', `https:${item[2]}`)
                    document.querySelector('.weather__headerWrapper-temp').textContent = item[3] > 0 ?  `+${Math.round(item[3])}°C` : `${Math.round(item[3])}°C`
                    document.querySelector('.weather__leftWrapper-sunrise').textContent = item[4]
                    document.querySelector('.weather__leftWrapper-sunset').textContent = item[5]
                    document.querySelector('.weather__leftWrapper-date').textContent = new Date(item[6]).toLocaleDateString()
                    document.querySelector('.weather__leftWrapper-descr').textContent = item[7]
                    document.querySelector('.weather__leftWrapper-humidity').textContent = `${item[8]} %`
                    document.querySelector('.weather__leftWrapper-tension').textContent = `${item[9]} hPa`
                })
            })
    }
}








