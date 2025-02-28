const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherbox = document.querySelector('.weather-box');
const weatherdetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click',() => {

  const APIKey = '7cca8df8825bb9e566aa439afe4f21ec'
  const city = document.querySelector('.search-box input').value;
      
    if(city ==='')
      return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then
    (json => {
          
          
          if(json.cod === '404') {
            container.computedStyleMap.height = '400px';
            weatherbox.computedStyleMap.display = 'none';
            weatherdetails.computedStyleMap.display = 'none';
            error404.Style.display = 'block';
            error404.classList.add('fadeIn');
            return;
          }

          error404.Style.display = 'none';
          error404.classList.remove('fadeIn');

          const image = document.querySelector('weather-box img');
          const temperature = document.querySelector('.weather-box .temperature');
          const description = document.querySelector('.weather-box .description');
          const humidity =document.querySelector('.weather-deatils .humidity');
          const wind = document.querySelector('.weather-details .wind span');


          switch(json.weather[0].main) {
            case 'Clear':
              image.src = 'clear.png';
              break;

            case 'Rain':
              image.src = 'rain.png';
              break;

            case 'Snow':
              image.src = 'snow.png';
              break;

            case 'Clouds':
              image.src = 'clouds.png';
              break;

            case 'Haze':
              image.src = 'haze.png';
              break;

            default:
              image.src ='';
          }

          temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C </span>`;
          description.innerHTML =`${json.weather[0].description}`;
          humidity.innerHTML = `${json.main.humidity}%`;
          wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

          weatherbox.style.display = '';
          weatherdetails.style.display = '';
          weatherbox.classList.add('fadeIn');
          weatherdetails.classList.add('fadeIn');
          container.style.height = '590px';


    });



});
