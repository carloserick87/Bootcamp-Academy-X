  const email = document.getElementById("email");
  const password = document.getElementById("password");

      export function validar() {

          const userEmail = /[a-zA-Z0-9\.]+@+(gmail)+\.+[a-zA-Z]{2,4}/gm;
          const userPassword = /^Good2go$/;

               const emailValue = email.value;
               const passwordValue = password.value;

                    const result1 = userEmail.test(emailValue);
                    const result2 = userPassword.test(passwordValue);

                      return { result1, result2 };
      };
      
      export default validar();
