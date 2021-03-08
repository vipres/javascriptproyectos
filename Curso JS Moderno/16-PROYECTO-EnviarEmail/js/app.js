//variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');
const errorClasses = ['border','border-red-500','text-center', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'error'];
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//ver la pagina emailregex.com
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

    //Reinicio  formulario

    btnReset.addEventListener('click', resetearFormulario);
    //enviar email
    formulario.addEventListener('submit', enviarEmail);
}



//funciones
function iniciarApp(){
    btnEnviar.disabled = false;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e){
    //console.log(e.target.value);
    //console.log(e.target.type);
    if(e.target.value.length > 0 ){
        //elimina los errores
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }else{
        //e.target.style.borderBottomColor = 'red';
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos están vacios');
        
    }

    if(e.target.type === 'email'){

        if(er.test(e.target.value))
        {
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        }else{
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('email no valido');
        }
    }

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !==''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add(...errorClasses);

    const errores = document.querySelectorAll('.error');
    if( errores.length === 0){
        //formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));
        //inserta al final del formulario pero para ponerlo antes lo de arriba
        formulario.appendChild(mensajeError); 
    }

    
}


//Enviar email

function enviarEmail(e) {
    //console.log(e.target.value);
    e.preventDefault();
   //mostrar spinner
   const spinner = document.querySelector('#spinner');
   spinner.style.display = 'flex';

   //despues de 3 seg ocultar el spinner
   setTimeout( () => {
    spinner.style.display = 'none';

    //Mensaje de enviado correctamente
    const parrafo = document.createElement('p');
    parrafo.textContent = 'El mensaje se envió correctamente';
    parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');
    //En el formulario = #enviar-email que es el padre, inserta el parrafo antes del spinner
    formulario.insertBefore(parrafo, spinner);
    setTimeout(() => {
        parrafo.remove(); //elimina mensaje de exito
        resetearFormulario();

        iniciarApp();
    }, 5000)
   }, 3000);
}

//Resetea el formulario

function resetearFormulario(){
    formulario.reset();
}
