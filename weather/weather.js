const axios = require("axios");

const getweather = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=843fdb313a1bea547c733d25797c467b&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getweather
}