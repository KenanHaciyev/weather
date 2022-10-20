class Weather {
    static defaultId = 0

    constructor(id = Weather.defaultId, date, temp) {
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

    getFullName() {
        return `${this.id} ${this.date}`;
    }
}