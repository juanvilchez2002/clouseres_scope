//hoisting -> Eleva las declaraciones, esto pasa en el momento en que se compila nuestro código 
//antes de ser interpretado por el navegador.
//De esta forma podemos asignar nuestros valores o acceder a un valor que previamente no ha 
//sido declarado dentro de esta estructura.


//aqui lee la asignación de la variable a, y no genera error
a = 2;
var a;

console.log(a);

//aquí si se genera el error y nos muestra undefined en la variable 'a'

console.log(a);
var a = 2;

//en el caso de las funciones, primero se lee las funciones antes de las llamadas de estas
nameOfDog('Misky')

function nameOfDog(name){
    console.log(name);
}

