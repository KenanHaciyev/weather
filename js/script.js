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



    //HOMEWORK OBJECTS______________________________________________________________________________________
    
    //1)

    let i = 0;
    const weather = [
        {
            id: i++,
            weekDay: 'Четверг',
            date: '2022-09-29',
            temp: '+12'
        },
    ];

    
    //2)

    function newDay(date, temperature) {
        let dateNum = new Date(date);
        let obj =  {
            id: i++,
            weekDay: (() => {
                let dayId = dateNum.getDay();
                let day;
                switch (dayId) {
                    case 0:
                        day = 'Воскресение';
                        break;
                    case 1:
                        day = 'Понедельник';
                        break;
                    case 2:
                        day = 'Вторник';
                        break;
                    case 3:
                        day = 'Среда';
                        break;
                    case 4:
                        day = 'Четверг';
                        break;
                    case 5:
                        day = 'Пятница';
                        break;
                    case 6:
                        day = 'Суббота';
                        break;
                }
                return day;
            })(),
            date: dateNum.toISOString().slice(0,10),
            temp: temperature
        };
        return weather.push(obj);
    }

    newDay('2022-09-30', '+14');
    newDay('2024-02-10', '+4');
    newDay('2002-11-03', '-2');
    console.log(weather);


    //3)

    function deleteDay(id) {
        for (let key in weather) {
            if (weather[key].id==id){
                weather.splice(id,1);
                weather.map(item => {
                    if (item.id>id) {
                        item.id--;      //Изменение iD элементов массива (обЪектов) после удаления элемента массива
                    }
                });
                return weather;
            }
        }
    }
    console.log(deleteDay(1));

    
    //4)

    function sortingbyTemp(a=1) {
        let res;
        if (a==0) {
            res =  weather.sort((a,b) => +a.temp < +b.temp ? 1 : -1);
        }else {
            res =  weather.sort((a,b) => +a.temp > +b.temp ? 1 : -1);
        }

        i=0;
        weather.map(item =>item.id = i++);    // Установление новых id в связи с переменой последовательности элементов после сортировки
        return res;
    }

    //для сортировки от большей temp к меньшей введите аргумент 0
    sortingbyTemp();
    console.log(weather);


    //5)

    function copyList(a='weekdays') {
        let res;
        if (a == 'weekend') {
            res = weather.filter(item => item.weekDay=='Суббота' || item.weekDay=='Воскресение');
        }else {
            res = weather.filter(item => item.weekDay =='Четверг' || item.weekDay =='Пятница');
        }
        i = 0;
        res.map(item => item.id = i++);
        return res;
    }
    //для выведения копии списка выходных введите аргумент "weekend"
    console.log(copyList(/* 'weekend' */));

});