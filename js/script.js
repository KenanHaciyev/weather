window.addEventListener('DOMContentLoaded', () => {

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '27af6abcbfmshb18358048520597p18cc3ajsn4848468e1a72',
    //         'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=40.3777&lon=49.892', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    // //tabs

    // const tabs = document.querySelectorAll('.weather__tabs-tab'),
    //       tabsContent = document.querySelectorAll('.weather__content'),
    //       tabsParent = document.querySelector('.weather__tabs');

    // function hideContent() {
    //     tabs.forEach(item => {
    //         item.classList.remove('weather__tabs-active');
    //     });

    //     tabsContent.forEach(item => {
    //         item.classList.remove('weather__content-active');
    //     });
    // }

    // function showContent(i=0) {
    //     tabs[i].classList.add('weather__tabs-active');
    //     tabsContent[i].classList.add('weather__content-active');
    // }

    // hideContent();
    // showContent();

    // tabsParent.addEventListener('click', (e) => {
    //     const target = e.target;

    //     if (e.target.classList.contains('weather__tabs-tab')) {
    //         tabs.forEach((item,i) => {
    //             if (item == target) {
    //                 hideContent();
    //                 showContent(i);
    //             }
    //         });
    //     }
    // });

        
    let view = [];
    let id = 0;
    class Weather {
        constructor(date, temp) {
            this.date = date;
            this.id = id;
            this.temp = temp;
            this.obj = {
                id: this.id,
                date: this.dateBinding(),
                day: this.dayBinding(),
                temp: this.temp,

            };
            view.push(this.obj);
            id++;
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
                        day.set(0,'Воскресение');
                        day.set(1,'Понедельник');
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

        deleteDay() {
            return view = view.filter(item => item.id !== this.id);
        }

        sortingbyTemp(a=1) {
            let res;
            if (a===0) {
                res =  view.sort((a,b) => +a.temp < +b.temp ? 1 : -1);
            }else {
                res =  view.sort((a,b) => +a.temp > +b.temp ? 1 : -1);
            }
            return res;
        }

        copyList(a='weekdays') {
            let res;
            if (a === 'weekend') {
                res = view.filter(item => item.day ==='Суббота' || item.day ==='Воскресение');
            }else {
                res = view.filter(item => item.day !=='Суббота' && item.day !=='Воскресение');
            }
            return console.log(res);
        }
    }

        const day1 = new Weather('2011-06-02', '-12');
        const day2 = new Weather('2011-06-03', '-15');
        const day3 = new Weather('2011-06-04', '-11');
        const day4 = new Weather('2011-06-05', '-18');
        const day5 = new Weather('2011-06-06', '+26');
        const day6 = new Weather('2011-06-07', '+4');
        const day7 = new Weather('2011-06-08', '+31');
    
    console.log(view);  // Полный список


    day3.deleteDay();   //Вызов метода deleteDay() того объекта класса, который вы хотите удалить
    console.log(view);


    //для сортировки от большей temp к меньшей введите аргумент 0
    day2.sortingbyTemp(); // Сортировка по температуре
    console.log(view);


    //для выведения копии списка выходных введите аргумент "weekend"
    day3.copyList();


    class WeatherToday extends Weather{
        constructor (date, temp) {
            super(date, temp);
        }

        dateBinding() {
            let dateNum = new Date(this.date);
            return dateNum.toDateString();         //вывод даты в другом формате
        }
    }

    let today = new WeatherToday( '2021-08-12','+13','http://path' );
    let today2 = new WeatherToday( '2021-08-19','+15','http://path' );

    console.log(view);

});





