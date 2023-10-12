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
const S = document.getElementById("S")
S.addEventListener("click", function(event){
    total.innerHTML = "TOTAL: $" + objetoBurgerS.precio.toString()  
})
const M = document.getElementById("M")
M.addEventListener("click", function(event){
    total.innerHTML = "TOTAL: $" + objetoBurgerM.precio.toString()  
})

// let total = document.getElementById("total")
// total.innerHTML = "TOTAL: $" + objetoBurgerS.precio.toString() 