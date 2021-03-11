localStorage.setItem('nombre', 'manolo');

const producto = {
    nombre: "monitor 24 pulgadas",
    precio: 300

}

localStorage.setItem('producto', JSON.stringify(producto));

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));