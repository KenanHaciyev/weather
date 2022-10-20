
'use strict';
    const deleting = 'Удалить'
    const day1 = new Weather(1,'2011-06-02', '-12');
    const day2 = new Weather(2,'2011-06-03', '-15');
    // const day3 = new Weather(3,'2011-06-04', '-11');
    // const day4 = new Weather(4,'2011-06-05', '-18');
    
    let title = 'Прогноз погоды на:'
    let index = 2
    function create(id, date, temp) {
        index++
        parent = document.querySelector('.app')
        const day = new Weather(id, date, temp)
        let list = [day]
        const HTMLElement = document.createElement('div')
        HTMLElement.classList.add(`app__weather${index}`)
        parent.appendChild(HTMLElement)
        let listWidget = new WeatherComponent(document.querySelector(`.app__weather${index}`), list, title)
        return listWidget
    }
    create(3, '2020-02-31', '+44')

    let list = [day1];
    let list2 = [day2];

    const list1Root = document.querySelector('.app__weather1')
    const list2Root = document.querySelector('.app__weather2')

    const list1Widget = new WeatherComponent(list1Root, list, title)
    const list2Widget = new WeatherComponent(list2Root, list2, title)

    const day9 = new Weather(5, '2011-06-10', '-10')








   


