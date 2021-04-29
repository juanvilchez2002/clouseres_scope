const helloWolrd = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWolrd();

//console.log(hello); // aqui no se puede acceder a hello x ser local

//creamos una variable global
var scope = 'soy global';

const functionScope = () => {
    //creamos una variable con el mismo nombre de la variable local
    //pero en este caso se crea una variable local pues esta no esta redeclarada
    var scope = 'soy local'
    const func = () => {
        return scope
    }

    console.log(func());
}

functionScope();//imprime el valor de la variable local
console.log(scope);//imprime el valor de la variable global

