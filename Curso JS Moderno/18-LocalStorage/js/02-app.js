const nombre = localStorage.getItem('nombre');
console.log(nombre);

let productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));
let mesesJSON = localStorage.getItem('meses');
console.log(JSON.parse(mesesJSON));