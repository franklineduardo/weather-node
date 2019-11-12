const argv = require("./yargs").argv;
const latlon = require("./Place/place");
const weather = require("./weather/weather");

// latlon.getlatlon(argv.descripcion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// weather.getweather(40.750000, -74.000000)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log(err);
//     });


// const info = latlon.getlatlon(argv.descripcion);

// info.then((data) => {
//     return weather.getweather(data)
//         .then(resp => {
//             console.log(resp);
//         })
// }).catch(err => {
//     console.log(err);
// })

const info = async(direction) => {

    try {
        const getInfo = await latlon.getlatlon(direction)

        const getWeather = await weather.getweather(getInfo.lat, getInfo.lon)

        return `el clima de ${direction} es ${getWeather}.`


    } catch (error) {
        console.log(error);
    }


}

info(argv.descripcion)
    .then(resp => {
        console.log(resp);
    })