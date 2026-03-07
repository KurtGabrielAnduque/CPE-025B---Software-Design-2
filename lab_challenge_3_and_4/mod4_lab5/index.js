const cityCoords = {
    Berlin: { lat: 52.52, lon: 13.405 },
    Oslo: { lat: 59.9139, lon: 10.7522 },
    Yakutsk: { lat: 62.0355, lon: 129.6755 }
};

let getWeather = async function(location, info) {

    const cities = Array.isArray(location) ? location : [location];
    const maxWindSpeed = 15;
    const minTemp = -20;

    const showWindInfo = function(weather) {

        if (weather.windspeed !== undefined) {

            const speed = weather.windspeed;
            const deg = weather.winddirection;

            console.log(`WIND: ${speed} m/s, ${deg} deg`);

            if (speed > maxWindSpeed) {
                console.log(`WARNING! Wind speed over ${maxWindSpeed} m/s`);
            }
        }
    };

    const showInfo = function(weather) {

        if (weather.temperature !== undefined) {

            console.log(`TEMP: ${weather.temperature} C`);

            if (weather.temperature < minTemp) {
                console.log(`WARNING! Temperature below ${minTemp} degrees`);
            }
        }
    };

    try {

        const promises = cities.map(city => {

            const coords = cityCoords[city];

            if (!coords) {
                return Promise.reject(new Error(`Coordinates for ${city} not found`));
            }

            const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

            return fetch(url)
                .then(res => {
                    if (!res.ok) throw new Error(`Failed to fetch weather for ${city}`);
                    return res.json();
                })
                .then(data => ({ city, weather: data.current_weather }));
        });

        const results = await Promise.all(promises);

        results.forEach(cityData => {

            console.log(`\nCITY: ${cityData.city}`);

            if (info === "wind" || info === "all") {
                showWindInfo(cityData.weather);
            }

            if (info === "temp" || info === "all") {
                showInfo(cityData.weather);
            }

        });

    } catch (e) {
        console.log(e.message);
    }
};

getWeather('Berlin', 'wind');
getWeather(['Oslo', 'Yakutsk'], 'all');