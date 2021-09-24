const argv = require('yargs')
                .options('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe:'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    // boolean:true,
                    default:false,
                    describe:'Muestra la tabla en consola'

                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    default:10,
                    describe:'Hasta que numero queremos realizar la multiplicacion',
                })
                .check( (argv, option) => {
                    if( isNaN(argv.b) ){
                        throw'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;


module.exports = argv;