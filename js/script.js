window.addEventListener('DOMContentLoaded', () => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '27af6abcbfmshb18358048520597p18cc3ajsn4848468e1a72',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };
    
    fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=40.3777&lon=49.892', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    //tabs

    const tabs = document.querySelectorAll('.weather__tabs-tab'),
          tabsContent = document.querySelectorAll('.weather__content'),
          tabsParent = document.querySelector('.weather__tabs');

    function hideContent() {
        tabs.forEach(item => {
            item.classList.remove('weather__tabs-active');
        });

        tabsContent.forEach(item => {
            item.classList.remove('weather__content-active');
        });
    }

    function showContent(i=0) {
        tabs[i].classList.add('weather__tabs-active');
        tabsContent[i].classList.add('weather__content-active');
    }

    hideContent();
    showContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (e.target.classList.contains('weather__tabs-tab')) {
            tabs.forEach((item,i) => {
                if (item == target) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    });
    

});