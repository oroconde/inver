require ('colors');
const inquirer = require("inquirer");

const preguntas = [
    {
        type: 'list',
        name:'Login',
        choices: [
            {
            name: 'Username:',
            type: 'input',
            message: 'Ingresar',
            },
            {   
            name: 'Password:',
            type: 'input',
            message: 'Ingresar',
            }    
        ]
    }
]

const inquirerMenu = async ()=>{
    console.clear();
    console.log('\n');
    console.log('                    LOGIN DE USUARIO    '.cyan);
    console.log('======================================================\n'.cyan);
    
    const option = await inquirer.prompt(preguntas);
    return option;
};

const pausa = async () => {
    console.log("\n");
  
    const question = [
      {
        type: 'input',
        name: 'enter',
        message: 'Ingresar',
      },
    ];
    await inquirer.prompt(question);
};

const leerInput = (message) =>{

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if (this.value.length === 0){
                    return 'Usuario incorrecto';
                }
                return true; 
            }
        }
    ];
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
};