//Variables privadas con Closures: JS por su naturaleza no 
//fomenta el uso de datos privados pero por medio de los Closures 
//podemos crear valores que solo puedan ser accedidos por medio 
//de métodos, que no van a estar disponibles fuera de esta función.

const person = () => {
    var saveName = 'Name';

    //devolvemos metodos
    return{
        getName: () =>{
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    }
}

//creamos una variable
const newPerson = person();

console.log(newPerson.getName());newPerson.setName('Juan');
console.log(newPerson.getName());