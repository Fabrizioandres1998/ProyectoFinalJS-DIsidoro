const checkboxes = document.querySelectorAll('input[type="checkbox"]')

//HAMBURGUESAS TAMAÑO

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
S.addEventListener("click", function () {
    total.textContent = "TOTAL: $" + objetoBurgerS.precio.toString()
    tamañoSeleccionado = objetoBurgerS.precio
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false
    })
})
const M = document.getElementById("M")
M.addEventListener("click", function () {
    total.textContent = "TOTAL: $" + objetoBurgerM.precio.toString()
    tamañoSeleccionado = objetoBurgerM.precio
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false
    })
})
const L = document.getElementById("L")
L.addEventListener("click", function () {
    total.textContent = "TOTAL: $" + objetoBurgerL.precio.toString()
    tamañoSeleccionado = objetoBurgerL.precio
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false
    })
})

//AGREGADOS
const agregados = [
    {
        checkbox: document.getElementById("checkbox1"),
        objeto: {
            elemento: "tomate",
            precio: 200
        }
    },
    {
        checkbox: document.getElementById("checkbox2"),
        objeto: {
            elemento: "lechuga",
            precio: 200
        }
    },
    {
        checkbox: document.getElementById("checkbox3"),
        objeto: {
            elemento: "bacon",
            precio: 200
        }
    },
    {
        checkbox: document.getElementById("checkbox4"),
        objeto: {
            elemento: "huevo",
            precio: 200
        }
    },
    {
        checkbox: document.getElementById("checkbox5"),
        objeto: {
            elemento: "cebolla",
            precio: 200
        }
    },
    {
        checkbox: document.getElementById("checkbox6"),
        objeto: {
            elemento: "cheddar",
            precio: 200
        }
    }
];

//SELECCION AGREGADOS Y PRECIO

checkbox1.addEventListener("change", function () {
    if (checkbox1.checked) {
        total.textContent =
            "TOTAL: $" + (tamañoSeleccionado += agregados[0].objeto.precio)
    } else {
        total.textContent = 
            "TOTAL: $" + (tamañoSeleccionado -= agregados[0].objeto.precio)
    }
})

checkbox2.addEventListener("change", function () {
    if (checkbox2.checked) {
        total.textContent =
            "TOTAL: $" + (tamañoSeleccionado += objetoLechuga.precio)
    } else {
        total.textContent = tamañoSeleccionado
    }
})

checkbox3.addEventListener("change", function () {
    if (checkbox3.checked) {
        total.textContent =
            "TOTAL: $" + (tamañoSeleccionado += objetoBacon.precio)
    } else {
        total.textContent = tamañoSeleccionado
    }
})

checkbox4.addEventListener("change", function () {
    if (checkbox4.checked) {
        total.textContent =
            "TOTAL: $" + (tamañoSeleccionado += objetoHuevo.precio)
    } else {
        total.textContent = tamañoSeleccionado
    }
})

checkbox5.addEventListener("change", function () {
    if (checkbox5.checked) {
        total.textContent =
            "TOTAL: $" + (tamañoSeleccionado += objetoCebolla.precio)
    } else {
        total.textContent = tamañoSeleccionado
    }
})

checkbox6.addEventListener("change", function () {
    if (checkbox6.checked) {
        total.textContent =
            "TOTAL: $" + (tamañoSeleccionado += objetoCheddar.precio)
    } else {
        total.textContent = tamañoSeleccionado
    }
})
