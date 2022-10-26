var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
System.register("HTMLElements", [], function (exports_1, context_1) {
    "use strict";
    var HTMLElements;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            HTMLElements = class HTMLElements {
                constructor(tag, className, parent, inner, path) {
                    this.tag = tag;
                    this.className = className;
                    this.parent = parent;
                    this.inner = inner;
                    this.path = path;
                }
                createHTMLElement() {
                    const elem = document.createElement(this.tag);
                    elem.classList.add(this.className);
                    const parentNode = document.querySelector(this.parent);
                    if (this.inner) {
                        elem.innerHTML = this.inner;
                    }
                    if (this.path) {
                        elem.setAttribute('src', this.path);
                    }
                    parentNode.appendChild(elem);
                    return elem;
                }
            };
            exports_1("HTMLElements", HTMLElements);
        }
    };
});
System.register("model/weather", [], function (exports_2, context_2) {
    "use strict";
    var Weather;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            Weather = class Weather {
                constructor(imagePath, dayOfWeek, tempC) {
                    this.imagePath = imagePath;
                    this._dayOfWeek = dayOfWeek;
                    this._tempC = tempC;
                }
                get dayOfWeek() {
                    return this._dayOfWeek;
                }
                get tempC() {
                    return this._tempC;
                }
            };
            exports_2("Weather", Weather);
        }
    };
});
System.register("model/weather-detailed", ["model/weather"], function (exports_3, context_3) {
    "use strict";
    var weather_1, WeatherDetailed;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (weather_1_1) {
                weather_1 = weather_1_1;
            }
        ],
        execute: function () {
            WeatherDetailed = class WeatherDetailed extends weather_1.Weather {
                constructor(imagePath, dayOfWeek, tempC, sunrise, sunset, date, humidity, text, pressure_mb) {
                    super(imagePath, dayOfWeek, tempC);
                    this._sunrise = sunrise;
                    this._sunset = sunset;
                    this._date = date;
                    this._humidity = humidity;
                    this._text = text;
                    this._pressure_mb = pressure_mb;
                }
                get sunrise() {
                    return this._sunrise;
                }
                get sunset() {
                    return this._sunset;
                }
                get date() {
                    return this._date;
                }
                get humidity() {
                    return this._humidity;
                }
                get text() {
                    return this._text;
                }
                get pressure_mb() {
                    return this._pressure_mb;
                }
            };
            exports_3("WeatherDetailed", WeatherDetailed);
        }
    };
});
System.register("weather.data.service", ["weather-creating", "model/weather-detailed"], function (exports_4, context_4) {
    "use strict";
    var weather_creating_1, weather_detailed_1, Weatherdataservices;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (weather_creating_1_1) {
                weather_creating_1 = weather_creating_1_1;
            },
            function (weather_detailed_1_1) {
                weather_detailed_1 = weather_detailed_1_1;
            }
        ],
        execute: function () {
            Weatherdataservices = class Weatherdataservices {
                getData() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const response = yield fetch("https://api.weatherapi.com/v1/forecast.json?key=837dc5367c9d41c181695625221910&q=Baku&days=7&aqi=no&alerts=no");
                            const response_1 = yield response.json();
                            const weatherByDay = response_1.forecast.forecastday.map((item) => {
                                return new weather_detailed_1.WeatherDetailed(item.day.condition.icon, new weather_creating_1.WeatherCreating().setDayOfWeek(item.date_epoch * 1000), item.day.avgtemp_c, item.astro.sunrise, item.astro.sunset, item.date_epoch * 1000, item.day.avghumidity, item.day.condition.text, item.hour[13].pressure_mb);
                            });
                            console.log(weatherByDay);
                            return yield Promise.resolve(weatherByDay);
                        }
                        catch (error) {
                            console.log(error);
                        }
                    });
                }
            };
            exports_4("Weatherdataservices", Weatherdataservices);
        }
    };
});
System.register("weather-creating", ["weather.data.service"], function (exports_5, context_5) {
    'use strict';
    var weather_data_service_1, WeatherCreating;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (weather_data_service_1_1) {
                weather_data_service_1 = weather_data_service_1_1;
            }
        ],
        execute: function () {
            WeatherCreating = class WeatherCreating {
                create(i) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const res = yield new weather_data_service_1.Weatherdataservices().getData();
                        return yield Promise.resolve(res);
                    });
                }
                initializationOfDays(i) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const response = yield this.create(i);
                        this.div = this.createElement('div', `weather__weekDays-${i}`, '.weather__weekDays');
                        this.div.classList.add('item');
                        this.div.setAttribute('data-id', i);
                        const img = yield this.createElement('img', `weather__weekDays-${i}-img`, `.weather__weekDays-${i}`, '', `https:${response[i].imagePath}`);
                        const weekDay = yield this.createElement('div', `weather__weekDays-day`, `.weather__weekDays-${i}`, response[i].dayOfWeek.slice(0, 3));
                        const temp = yield this.createElement('div', `weather__weekDays-temp`, `.weather__weekDays-${i}`, (response[i].tempC > 0 ? `+${Math.round(response[i].tempC)}°C` : `${Math.round(response[i].tempC)}°С`));
                        return Promise.resolve([this.div, response[i].dayOfWeek, response[i].imagePath, response[i].tempC, response[i].sunrise, response[i].sunset, response[i].date, response[i].text, response[i].humidity, response[i].pressure_mb]);
                    });
                }
                setDayOfWeek(date) {
                    const newDate = new Date(date).getDay();
                    const day = new Map();
                    day.set(0, 'Sunday');
                    day.set(1, 'Monday');
                    day.set(2, 'Tuesday');
                    day.set(3, 'Wednesday');
                    day.set(4, 'Thursday');
                    day.set(5, 'Friday');
                    day.set(6, 'Saturday');
                    return day.get(newDate);
                }
                createElement(tag, className, parent, inner, path) {
                    const elem = document.createElement(tag);
                    elem.classList.add(className);
                    const parentNode = document.querySelector(parent);
                    if (inner) {
                        elem.innerHTML = inner;
                    }
                    if (path) {
                        elem.setAttribute('src', path);
                    }
                    parentNode.appendChild(elem);
                    return elem;
                }
                asyncCreatingOfDays() {
                    return __awaiter(this, void 0, void 0, function* () {
                        const daysDataInformation = [];
                        for (let i = 0; i < 7; i++) {
                            const oneDay = yield this.initializationOfDays(i);
                            daysDataInformation.push(oneDay);
                        }
                        return daysDataInformation;
                    });
                }
                pressBtn() {
                    return __awaiter(this, void 0, void 0, function* () {
                        const response = yield this.asyncCreatingOfDays();
                        response.map((item, i) => {
                            item[0].addEventListener('click', () => {
                                response.map((itemDeleteActive) => itemDeleteActive[0].classList.remove('active'));
                                response[i][0].classList.add('active');
                                document.querySelector('.weather__leftWrapper-day').textContent = item[1];
                                document.querySelector('.weather__rightWrapper-img').setAttribute('src', `https:${item[2]}`);
                                document.querySelector('.weather__headerWrapper-temp').textContent = item[3] > 0 ? `+${Math.round(item[3])}°C` : `${Math.round(item[3])}°C`;
                                document.querySelector('.weather__leftWrapper-sunrise').textContent = item[4];
                                document.querySelector('.weather__leftWrapper-sunset').textContent = item[5];
                                document.querySelector('.weather__leftWrapper-date').textContent = new Date(item[6]).toLocaleDateString();
                                document.querySelector('.weather__leftWrapper-descr').textContent = item[7];
                                document.querySelector('.weather__leftWrapper-humidity').textContent = `${item[8]} %`;
                                document.querySelector('.weather__leftWrapper-tension').textContent = `${item[9]} hPa`;
                            });
                        });
                    });
                }
            };
            exports_5("WeatherCreating", WeatherCreating);
        }
    };
});
System.register("weather-component", ["weather-creating", "HTMLElements"], function (exports_6, context_6) {
    "use strict";
    var weather_creating_2, HTMLElements_1, WeatherComponent;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (weather_creating_2_1) {
                weather_creating_2 = weather_creating_2_1;
            },
            function (HTMLElements_1_1) {
                HTMLElements_1 = HTMLElements_1_1;
            }
        ],
        execute: function () {
            WeatherComponent = class WeatherComponent {
                constructor() {
                    this.weatherRenderer = new weather_creating_2.WeatherCreating();
                    this.timeUpdate = setInterval(() => {
                        document.querySelector('.weather__leftWrapper-time').textContent = new Date().toLocaleTimeString();
                    }, 1000);
                    this.iffyPressBtn = (() => __awaiter(this, void 0, void 0, function* () {
                        yield this.weatherRenderer.pressBtn();
                        const btnForFirstDayMakeActive = document.querySelector('.weather__weekDays-0');
                        btnForFirstDayMakeActive.click();
                    }))();
                    new HTMLElements_1.HTMLElements('div', 'container', '.app').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather', '.container').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__headerWrapper', '.weather').createHTMLElement();
                    new HTMLElements_1.HTMLElements('h1', 'weather__headerWrapper-title', '.weather__headerWrapper', 'Baku').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__headerWrapper-temp', '.weather__headerWrapper').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__content', '.weather').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__leftWrapper', '.weather__content').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__leftWrapper-day', '.weather__leftWrapper').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__leftWrapper-date', '.weather__leftWrapper').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__leftWrapper-time', '.weather__leftWrapper', `${new Date().toLocaleTimeString()}`).createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__leftWrapper-descr', '.weather__leftWrapper').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__leftWrapper-row1', '.weather__leftWrapper').createHTMLElement();
                    new HTMLElements_1.HTMLElements('img', 'weather__leftWrapper-row1-img', '.weather__leftWrapper-row1', '', './image/humidity.png').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__leftWrapper-humidity', '.weather__leftWrapper-row1').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__leftWrapper-row2', '.weather__leftWrapper').createHTMLElement();
                    new HTMLElements_1.HTMLElements('img', 'weather__leftWrapper-row2-img', '.weather__leftWrapper-row2', '', './image/tension.png').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__leftWrapper-tension', '.weather__leftWrapper-row2').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__leftWrapper-row3', '.weather__leftWrapper').createHTMLElement();
                    new HTMLElements_1.HTMLElements('img', 'weather__leftWrapper-row3-img', '.weather__leftWrapper-row3', '', './image/sunrise.png').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__leftWrapper-sunrise', '.weather__leftWrapper-row3').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__leftWrapper-row4', '.weather__leftWrapper').createHTMLElement();
                    new HTMLElements_1.HTMLElements('img', 'weather__leftWrapper-row4-img', '.weather__leftWrapper-row4', '', './image/sunset.png').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__leftWrapper-sunset', '.weather__leftWrapper-row4').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__rightWrapper', '.weather__content').createHTMLElement();
                    new HTMLElements_1.HTMLElements('img', 'weather__rightWrapper-img', '.weather__rightWrapper').createHTMLElement();
                    new HTMLElements_1.HTMLElements('div', 'weather__weekDays', '.weather').createHTMLElement();
                }
            };
            exports_6("WeatherComponent", WeatherComponent);
        }
    };
});
System.register("script", ["weather-component"], function (exports_7, context_7) {
    "use strict";
    var weather_component_1, buildProject;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (weather_component_1_1) {
                weather_component_1 = weather_component_1_1;
            }
        ],
        execute: function () {
            exports_7("buildProject", buildProject = new weather_component_1.WeatherComponent());
        }
    };
});
//# sourceMappingURL=index.js.map