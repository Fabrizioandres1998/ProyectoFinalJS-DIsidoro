//HAMBURGUESAS TAMAÑO
const checkboxes = document.querySelectorAll('input[type="checkbox"]')

const burgerS = document.getElementById("burgerS")
const objetoBurgerS = {
    elemento: burgerS,
    precio: 1500
}

const burgerM = document.getElementById("burgerM")
let objetoBurgerM = {
    elemento: burgerM,
    precio: 1700
}

const burgerL = document.getElementById("burgerL")
let objetoBurgerL = {
    elemento: burgerL,
    precio: 1900
}

//SELECCION DE TAMAÑO DE HAMBURGUESA Y AGREGADO DEL PRECIO
const total = document.getElementById("total")
const tamaño = document.querySelectorAll(".tamaño")

let tamañoSeleccionado = ""

const S = document.getElementById("S")
S.addEventListener("click", function(){
    total.textContent = "TOTAL: $" + objetoBurgerS.precio.toString() 
    tamañoSeleccionado = objetoBurgerS.precio
})
const M = document.getElementById("M")
M.addEventListener("click", function(){
    total.textContent = "TOTAL: $" + objetoBurgerM.precio.toString() 
    tamañoSeleccionado = objetoBurgerM.precio 
})
const L = document.getElementById("L")
L.addEventListener("click", function(){
    total.textContent = "TOTAL: $" + objetoBurgerL.precio.toString();
    tamañoSeleccionado = objetoBurgerL.precio
})



//AGREGADOS
const tomate = document.getElementById("checkbox1");
const objetoTomate = {
    elemento: "tomate",
    precio: 200
}

const lechuga = document.getElementById("checkbox2");
const objetoLechuga = {
    elemento: "lechuga",
    precio: 200
};

const bacon = document.getElementById("checkbox3");
const objetoBacon = {
    elemento: "bacon",
    precio: 200
};

const huevo = document.getElementById("checkbox4");
const objetoHuevo = {
    elemento: "huevo",
    precio: 200
};

const cebolla = document.getElementById("checkbox5");
const objetoCebolla = {
    elemento: "cebolla",
    precio: 200
};

const cheddar = document.getElementById("checkbox6");
const objetoCheddar = {
    elemento: "cheddar",
    precio: 200
};


const checkboxArray = [objetoTomate, objetoLechuga, objetoBacon, objetoHuevo, objetoCebolla, objetoCheddar]
for(const agregados of checkboxArray) {
    console.log (agregados)
}

//SELECCION AGREGADOS Y PRECIO

checkbox1.addEventListener("change", function() {
    if (checkbox1.checked) {
        total.textContent = "TOTAL: $" + (tamañoSeleccionado + objetoTomate.precio).toString()
    } else {
        total.textContent = "TOTAL: $" + tamañoSeleccionado.toString();
    }
}) 

