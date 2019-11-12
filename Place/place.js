const axios = require("axios");

const getlatlon = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '589a2c28d1msh37fa4b0b1703302p1b1f9ejsn4c716f786757' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error("No hay ningun resultado")
    }

    const data = resp.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        address,
        lat,
        lon
    }


}

module.exports = {
    getlatlon
}