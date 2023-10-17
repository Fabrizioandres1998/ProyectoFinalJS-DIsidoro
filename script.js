//GET
const burgers = document.querySelectorAll('.burgers .burgers__tamaño')
const armadoAgregados = document.querySelectorAll('.armado__agregados input[type="checkbox"]')
const armadoAderezos = document.querySelectorAll('.armado__aderezos input[type="checkbox"]')
const armadoBebidas = document.querySelectorAll('.armado__bebida input[type="checkbox"]')
//PRECIO TOTAL
let precioTotal = 0
//TAMAÑO SELECCIONADO
let tamañoSeleccionado = 0

burgers.forEach(burger => {
    burger.addEventListener("click", function () {
        tamañoSeleccionado = burger.id
        console.log(tamañoSeleccionado)
        precioBurger()
    })
})

function precioBurger() {
    if (tamañoSeleccionado === "burgerS") {
        precioTotal += 1500
    }
    if (tamañoSeleccionado === "burgerM") {
        precioTotal += 1800
    }
    if (tamañoSeleccionado === "burgerL") {
        precioTotal += 2100
    }
    console.log(precioTotal)
}
//ARMADO AGREGADOS
let elementos = [{
    nombre: "tomate",
    precio: 200
},
{
    nombre: "lechuga",
    precio: 200
},
{
    nombre: "bacon",
    precio: 250
},
{
    nombre: "huevo",
    precio: 250
},
{
    nombre: "cebolla",
    precio: 200
},
{
    nombre: "cheddar",
    precio: 250
}
]

let elementosAgregados = []

armadoAgregados.forEach(agregado => {
    agregado.addEventListener("change", function () {
        if (agregado.checked) {
            if (!elementosAgregados.includes(agregado.id)) {
                elementosAgregados.push(agregado.id)
                console.log(elementosAgregados)
            }
        } else {
            const index = elementosAgregados.indexOf(agregado.id)
            if (index !== -1) {
                elementosAgregados.splice(index, 1)
                console.log(elementosAgregados)
            }
        }
    })
})

