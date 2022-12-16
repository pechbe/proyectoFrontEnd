const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	nrodoc: /^[Z0-9]{1,16}$/, // 1 a 16 digitos.
    card: /^[Z0-9\-]{1,19}$/, // 1 a 19 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const campos = {
    usuario: false,
    nombre: false,
    nrodoc: false,
    card: false,
    email: false
}

const validarCreditCard = (e) =>{
    switch (e.target.name){
        case "nrodoc":
            if(expresiones.nrodoc.test(e.target.value)){
                document.getElementById('nrodoc_error').classList.remove('formulario__validacion-estado-activo');
                campos.nrodoc = true;
            } else{
                document.getElementById('nrodoc_error').classList.add('formulario__validacion-estado-activo');
                campos.nrodoc = false;
            }
        break;
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('nombre_error').classList.remove('formulario__validacion-estado-activo');
                campos.nombre = true;
            } else{
                document.getElementById('nombre_error').classList.add('formulario__validacion-estado-activo');
                campos.nombre = false;
            }
        break;
        case "card":
            if(expresiones.card.test(e.target.value)){
                document.getElementById('card_error').classList.remove('formulario__validacion-estado-activo');
                campos.card = true;
            } else{
                document.getElementById('card_error').classList.add('formulario__validacion-estado-activo');
                campos.card = false;
            }
        break;
        case "email":
            if(expresiones.email.test(e.target.value)){
                document.getElementById('email_error').classList.remove('formulario__validacion-estado-activo');
                campos.email = true;
            } else{
                document.getElementById('email_error').classList.add('formulario__validacion-estado-activo');
                campos.email = false;
            }
        break;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarCreditCard);
});

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    const terminos = document.getElementById('terminos');

    //console.log(terminos.checked);
    //&& campos.email
    if(campos.nrodoc && campos.nombre && campos.card && terminos.checked && campos.email) {
        formulario.reset();
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
        setTimeout(() =>{
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
        }, 5000)
    }
    else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
        document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
        setTimeout(() =>{
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
        }, 5000)
    }

})