const fruits = () => {
    var fruit = 'manzana';
    console.log(fruit);
}

fruits();
console.log(fruit);//me sale error xq no se puede acceder a 'fruit' x ser local

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    let y = 2;

    console.log(x);
    console.log(y);
}
//una variable con la palabra reservada 'var' puede ser redeclarada
//una variable con la palabra reservada 'let' y 'const' no puede ser redeclarada