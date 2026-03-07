// City to coordinates mapping
const cityCoords = {
    Berlin: { lat: 52.52, lon: 13.405 },
    Oslo: { lat: 59.9139, lon: 10.7522 },
    Yakutsk: { lat: 62.0355, lon: 129.6755 }
};

let getWeather = function(location, info) {
    const cities = Array.isArray(location) ? location : [location];
    const maxWindSpeed = 15;
    const minTemp = -20;

    // Show wind information
    const showWindInfo = function(weather) {
        const { windspeed, winddirection } = weather || {};
        if (windspeed !== undefined && winddirection !== undefined) {
            console.log(`WIND: ${windspeed} m/s, ${winddirection} deg`);
            if (windspeed > maxWindSpeed) {
                console.log(`WARNING! Wind speed over ${maxWindSpeed} m/s`);
            }
        }
    };

    // Show other weather info (temperature only, can extend later)
    const showInfo = function(weather, type) {
        if (weather[type] !== undefined) {
            console.log(`${type.toUpperCase()}: ${weather[type]} ${type === 'temperature' ? 'C' : '%'}`);
            if (type === 'temperature' && Number(weather.temperature) < minTemp) {
                console.log(`WARNING! Temperature below ${minTemp} degrees`);
            }
        }
    };

    // Fetch weather for all cities
    const promises = cities.map(city => {
        const coords = cityCoords[city];
        if (!coords) return Promise.reject(new Error(`Coordinates for ${city} not found`));
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

        return fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to fetch weather for ${city}`);
                return response.json();
            })
            .then(data => ({ city, weather: data.current_weather }));
    });

    Promise.all(promises)
        .then(dataArray => {
            dataArray.forEach(cityData => {
                console.log('');
                console.log(`CITY: ${cityData.city}`);

                // Show wind info
                showWindInfo(cityData.weather);

                // Show temperature info (you can extend to clouds, precipitation if available)
                showInfo(cityData.weather, 'temperature');
            });
        })
        .catch(e => console.log(e.message));
};

// Example usage
getWeather('Berlin', 'wind');
// Example output:
// CITY: Berlin
// WIND: 5.1 m/s, 120 deg
// TEMP: 12 C

getWeather(['Oslo', 'Yakutsk'], 'all');
// Example output:
// CITY: Oslo
// WIND: 3.2 m/s, 180 deg
// TEMP: -5 C
//
// CITY: Yakutsk
// WIND: 0 m/s, 0 deg
// TEMP: -40 C
// WARNING! Temperature below -20 degrees