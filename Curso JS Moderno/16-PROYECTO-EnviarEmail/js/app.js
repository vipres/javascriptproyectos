//variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


//Listeners
eventListeners();
function eventListeners(){
    //Cuando la app arranca y el DOM está cargado
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //campos del formulario
    //blur es cuando pinchas y luego sales del campo
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}



//funciones
function iniciarApp(){
    btnEnviar.disabled = false;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e){
    //console.log(e.target.value);
    if(e.target.value.length > 0 ){
        console.log('HAy');
    }else{
        //e.target.style.borderBottomColor = 'red';
        e.target.classList.add('border', 'border-red-500','text-centered', 'background-red-100', 'text-red-500', 'p-3', 'mt-5');
        mostrarError()
    }
}

function mostrarError(){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('border', 'border-red-500');
    formulario.appendChild(mensajeError);
}
