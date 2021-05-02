//un 'closure' es una función o un objeto con funciones que recuerda el estado de las variables al momento
//de ser invocada, y conserva este estado a través de reiteradas ejecuciones
//closure es una función que guarda referencias del estado adyacente (ámbito léxico)

//sin closure
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins+=coins;
    console.log(`MoneyBox: ${saveCoins}`)
}

moneyBox(3);
moneyBox(10);

//con closure
const moneyBox = () => {
    var saveCoins = 0;
    //función que guardara la referencia
    const countCoin = (coins) => {
        saveCoins+=coins;
        console.log(`MoneyBox: ${saveCoins}`)
    }    

    return countCoin
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
