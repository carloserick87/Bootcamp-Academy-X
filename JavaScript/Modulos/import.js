import {validar} from './export.js'

   function handleLogin() {
    
       const{ result1, result2} = validar();

           if (result1 && result2) {
               console.log('Match Login');
               } else {
                 console.log('The email or password is incorrect');
                 }
    };

 

window.handleLogin = handleLogin;

    

   
