const { argv } = require('./config/yargs')
const { getLugarLatLng } = require('./lugar/lugar.js');
const { getClima } = require('./clima/clima.js')

let getInfo = async(direccion)=>{
try {

    let coors = await getLugarLatLng(direccion);
    let temp = await getClima(coors.lat,coors.lng);

    return `EL clima en ${coors.direccion} es de ${temp}`
}
catch (e){
    return `No se pudo determinar el clima en ${direccion}`
}
    

}

getInfo(argv.direccion)
.then(resp=> console.log(resp))
.catch(e=> console.log(e))

// getLugarLatLng(argv.direccion)
// .then(resp=>{
//    console.log(resp)
//     } )
// .catch(e=> console.log(e))


// getClima(14.9489984,-89.7767063)
//     .then(temp=> console.log(temp))
//     .catch(e=> console.log(e))


