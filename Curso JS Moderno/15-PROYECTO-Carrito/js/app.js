//variable

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
//creo un ARRAY vacio porque cuando se entra en la tienda el carrito está vacio y es let porque es dinamico, se va rellenando
let articulosCarrito = []

cargarEventListeners();
function cargarEventListeners(){
    //Cuando agregas un grupo presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
    //Elimina curso del carrito
    carrito.addEventListener('click', eliminarCurso);
    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //reseteamos el  array
        
        limpiarHTML();
    });
}

//funciones

function agregarCurso(e)
{
    //console.log(e.target.classList);
    e.preventDefault();
    //Si no ponermos el prevent en el src del a tenemos # y esto al no ser una direcccion te lleva la pagina hacia arriba por defecto
    
    if(e.target.classList.contains('agregar-carrito'))
    {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Elimina el cuirso del carrito
function eliminarCurso(e)
{
    //console.log(e.target.classList);
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        //console.log(e.target.getAttribute('data-id'));
        const cursoId = e.target.getAttribute('data-id');
        //Elimina del array articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId );
        //limpiamos los elementos del html
        carritoHTML();
        
    }
}

//Lee el contenido del HTML que hicimos click y haz transversing y trae toda la info del curso

function leerDatosCurso(curso)
{
    console.log(curso);
    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1

    }
    //Revisa si existe en el carrito devuelve true o false
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //retorna el objeto actualizado

            }else{
                return curso; //retorna el objeto original
            }
        });

        articulosCarrito = [...cursos];

    }else{
        //Agregamos el curso al carrito

         //console.log(infoCurso);

        //Agrega elementos al array del carrito
        //https://medium.com/@anamartinezaguilar/spread-operator-1e6667da2830
        //Los ... es como decir copia este objeto como este. Convierte un array o un objeto en el conjunto de valores que contiene
        //En este caso toma una copia del array articulos a cero y a partir de ahi incorpora todos los que se clicken
        //y quedaria
        //(2) [{…}, {…}]0: {imagen: "http://127.0.0.1:5500/Curso%20JS%20Moderno/15-PROYECTO-Carrito/img/curso1.jpg", titulo: "HTML5, CSS3, JavaScript para Principiantes", precio: "$15", id: "1", cantidad: 1}1: {imagen: "http://127.0.0.1:5500/Curso%20JS%20Moderno/15-PROYECTO-Carrito/img/curso4.jpg", titulo: "Huerto en tu casa", precio: "$15", id: "4", cantidad: 1}length: 2__proto__: Array(0)
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
   

   
    console.log(articulosCarrito);

    carritoHTML();

}
//Muestra el HTML en el array deñ carrito

function carritoHTML(){
    //Limpiar el html 
limpiarHTML();

//Recorre el carrito y agrega el HTMLL
    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id } = curso;
        //para no ir poniendo ${curso.titulo... me ahorro el curso. en la tabla}
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width="100" ></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

//Elimina los curos repetidos en cada iteracion en el tbody

function limpiarHTML()
{
    //forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

    // Imagina un contenedor 
    // <div>
    //     <div>1</div>
    //     <div>2</div>
    //     <div>3</div>
    // </div>
    //mientras que el contenedorCarrito tenga un hijo -> pasa y borra 1, quedan 2, pasa y borra onstorage, queda 1 
    //pasa y lo borra. la condicion no se cumple y sale
}
