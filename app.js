
const {crearArchivoMultiplicar} = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');



console.clear();

crearArchivoMultiplicar(argv.b, argv.l, argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo.green, 'creado'))
    .catch(err=>console.log(err) );






// const base = 3;
    
// fs.writeFileSync(  `tabla-${base}.txt`, salida, (err)=>{
//     if(err) throw err;

//     console.log(`tabla-${base}.txt creado`);
// }  )

// const [,,arg3 = 'base=5'] = process.argv;    //Desestructuracion y utilizacion del elemento 3 del array
// const [, base = 5] = arg3.split('=');
// console.log(base);