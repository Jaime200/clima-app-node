const axios = require('axios');


const getClima = async(lat,lng)=>{
    
    let encodelat = encodeURI(lat);
    let encodelng = encodeURI(lng);
    
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`)

    if (resp.data.cod==="400")
    {
        throw new Error(`No se pudo obtener el clima para lat ${lat} y lng ${lng}`)
    }
    let resultado = resp.data.main;
    
    return resultado.temp
}


module.exports = {
    getClima
}