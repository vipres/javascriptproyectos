localStorage.removeItem('nombre');

//Actualizar un registro

let mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Abril');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

localStorage.clear();