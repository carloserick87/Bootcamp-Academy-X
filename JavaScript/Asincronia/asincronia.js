// Asynchrony

                        
        // Starting programm
             console.info('Iniciando solicitud a la API...');

                  const urlAddress = new Promise ((myResolve, myReject)=>{
                    setTimeout(()=>{
                      myResolve('Datos obtenidos de la API');
                    },5000);
                  });


                       async function asynchronous(){

                          try{

                            let result2 = await urlAddress;
                             console.log(result2);
                             
                             // Define the API endpoint here
                             const url = "https://jsonplaceholder.typicode.com/posts";
                             
                             let address = await fetch(url);

                             if(!address.ok){
                              throw new Error('Error en la solicitud')
                             }

                             const result1 = await address.json();
                             
                            console.log(result1);


                          } catch{

                            console.error('Error en el enlace!!');

                          }

                       }

                       asynchronous();







                 
