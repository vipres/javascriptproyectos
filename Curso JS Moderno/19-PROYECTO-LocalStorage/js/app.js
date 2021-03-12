//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


//Events Listeners
eventListeners();
function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
}


//Funciones

function agregarTweet(e){
    e.preventDefault();
    //Textarea

    const tweet = document.querySelector('#tweet').value;
    
    //validación
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacío');
        return; //evista que se ejecuten mas lineas si entra en este if
    }

    const tweetObj = {
        id: Date.now(),
        tweet //Es lo mismo que decir tweet:tweet se puede simplificar
    }


   //añadiendo tweets al array vacio
   //copia lo que hay en tweet ...tweet y agregale el nuevo tweet
   tweets =[...tweet, tweetObj];
   

   //una vez agregado creamos el html
    crearHTML();

    //reiniciar el formulario
    formulario.reset();

   
}

//mostrar mensaje de error

function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //insertarlo en el id contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    //elimina el mensaje tras 3 segundos
    setTimeout(() => {mensajeError.remove()}, 3000);

}


//muestra un listado de los tweets
function crearHTML(){
    limpiarHTML();
    if(tweets.length > 0){
        tweets.forEach(tweet => {
            //crear el html
            const li = document.createElement('li');
            //añadir el rexto
            
            li.innerHTML = tweet.tweet
            //insertar en el div listaTweets
            listaTweets.appendChild(li);
        });
    }
}

//limpiar html
function limpiarHTML(){
    
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}