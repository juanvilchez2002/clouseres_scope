//un bloque es código escrito entre llaves
const fruits = () => {
    if(true){
        var fruits1 = 'apple';
        let fruits2 = 'banana';//lo declara como una variable de ambito de bloque
        const fruits3 = 'kiwi';//lo declara como una variable de ambito de bloque
        console.log(fruits2); 
        console.log(fruits3);
    }

    console.log(fruits1);
    console.log(fruits2); //no imprimira xq la varieble fue declarado en un ambito de bloque
    console.log(fruits3); //no imprimira xq la varieble fue declarado en un ambito de bloque
}

fruits();

//variable global
let x = 1;
{
    //variable de bloque,'let' aquí permite declarar una variable con el mismo nombre
    //pero el valor no sera el mismo
    let x = 2;
    console.log(x);
}
console.log(x);

//variable global
var x = 1;
{
    //variable de bloque, 'var' permite una redeclaración
    var x = 2;
    console.log(x);
}
console.log(x);


//for con 'var'; aquí se 
const anotherFunction = () => {
    var i;
    for(i = 0; i<10; i++)
    setTimeout(() =>{
        console.log(i);
    }, 1000) 
}

anotherFunction();


//for con 'let', imprime el número creciente de 0-9
const anotherFunction = () => {
    for(let i = 0; i<10; i++)
    setTimeout(() =>{
        console.log(i);
    }, 1000) 
}

anotherFunction();