const axios = require('axios');


const getLugarLatLng = async (direccion)=>{

    let encodeURL = encodeURI( direccion )
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
        
    if (resp.data.status==='ZERO_RESULTS'){
        throw new Error(`No existe resultados para la ciudad ${direccion}`)
    }  
    //console.log(JSON.stringify(response.data,undefined,2));
        let location = resp.data.results[0];
        let cordenadas = location.geometry.location;
        // console.log(`Direccion: ${ location.formatted_address }`)
        // console.log(`lat ${cordenadas.lat}`)
        // console.log(`lng ${cordenadas.lng}`)
        
    return{
        direccion :  location.formatted_address,
        lat : cordenadas.lat,
        lng : cordenadas.lng
    }
}


module.exports = {
    getLugarLatLng
}
  