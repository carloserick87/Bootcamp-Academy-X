const fields = document.querySelectorAll(".validate");

const btn = document.querySelector("#btnSubmit");

btn.addEventListener("click",(event)=>{
event.preventDefault()
   
   fields.forEach((field)=>{

    if(field.value == ""){
    field.classList.add("errorField");
  }
   })

fields.forEach((field)=>{
   
   if(field.value == "carlos"){
    console.log("¡Formulario enviado con éxito");
   }else{
    console.log("No se encontro nombre de usuario");
   }
})

})

fields.forEach((field)=>{
    field.addEventListener("keyup",()=>{
    field.classList.remove("errorField");
  })

})




