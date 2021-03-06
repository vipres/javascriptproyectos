const producto = '           Monitor 20 pulgadas         ';

console.log(producto);
console.log(producto.length);


//Eliminar espacios del inicio

console.log(producto.trimStart());

//del final pero ojo no del inicio
console.log(producto.trimEnd());


//se pueden encadenar metodos 
console.log(producto.trimStart().trimEnd());
//lo hace todo
console.log(producto.trim());