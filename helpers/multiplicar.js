const fs = require('fs');
const colors = require('colors');

//Crear un archivo. 

const crearArchivoMultiplicar = async(base=5, listar= false, hasta = 10)=>{
    

    try {

        let salida = '';
        let consola = '';
    
        for (let i = 1; i<= hasta; i++){
    
        salida += `${base} x ${i} = ${base * i}\n`; // Las variables se concatenan
        consola += `${base} ${'x'.green} ${i} ${'='.blue} ${base*i}\n`; // Las variables se concatenan
        }

        if(listar){
            console.log('===================='.rainbow);
            console.log('Tabla del', colors.blue(base) );
            console.log('===================='.rainbow);
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
    
    } catch (error) {
        throw error;
    }
   
}

module.exports = {
     crearArchivoMultiplicar
}