require ('colors');

const { inquirerMenu,
        pausa,
        leerInput 
} = require('./helpers/inquirer');

const main = async () =>{
    console.log('Hola mundo');

    let opt = '';
    
    do {
        opt = await inquirerMenu();
                    
        await pausa();
        
    } while (opt !== '0');

}
main();

