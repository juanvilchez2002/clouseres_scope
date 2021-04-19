var hello='Hola';
let wolrd='Hola mundo';
const hellowolrd = 'Hola Mundo¡¡¡¡';

//console.log(hello);
//console.log(wolrd);

const anotherFunction = ()=>{
    console.log(hello);
    console.log(wolrd);
    console.log(hellowolrd);
}

anotherFunction();


const helloWolrd = () =>{
    globalVar = 'soy global';
}

helloWolrd();
console.log(globalVar);

const anotherFunction1 = () =>{
    var localVar = globalVar = 'soy un texto'
}

anotherFunction1();
console.log(globalVar);

