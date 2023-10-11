//INDEX
let burgerS = document.getElementById("burgerS")
let objetoBurgerS = {
    elemento: burgerS,
    precio: 1500
}

let burgerM = document.getElementById("burgerM")
let objetoBurgerM = {
    elemento: burgerM,
    precio: 1700
}

let burgerL = document.getElementById("burgerL")
let objetoBurgerL = {
    elemento: burgerL,
    precio: 1900
}

//PREPARACION
let total = document.getElementById("total")
total.innerHTML = "TOTAL: $" + objetoBurgerL.precio.toString() 