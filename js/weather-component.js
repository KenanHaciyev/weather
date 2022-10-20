class WeatherComponent {
    renderer;
    list = [];
    constructor (rootElement, list, deleting, title) {
        this.renderer = new WeatherRender(rootElement);
        this.list = list;
        this.title = title;
        this.deleting = deleting;
        this.renderer.render(this.list, this.title);

        this.newRender()
    }

    newRender() {
        this.renderer.render(this.list, this.title)
        this.renderer.weatherElement.addEventListener('click', (event) => {
            const item = event.target.getAttribute('data-id')
            if (item) {
                this.deleteDay();
                document.querySelector(`.app__weather${item}`).remove()
            }
        })
    }

    addWeatherOfDay(day) {
        this.list = [...this.list, day]
        return this.renderer.render(this.list, this.title)
    }

    deleteDay() {
        this.list = ''
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
