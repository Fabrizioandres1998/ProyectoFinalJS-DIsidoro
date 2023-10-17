//GET
const burgers = document.querySelectorAll(".burgers button")
const armadoAgregados = document.querySelectorAll('.armado__agregados input[type="checkbox"]')
const armadoAderezos = document.querySelectorAll('.armado__aderezos input[type="checkbox"]')
const armadoBebidas = document.querySelectorAll('.armado__bebida input[type="checkbox"]')
const total = document.querySelector("#total")

//PRECIO TOTAL
let precioTotal = 0
total.innerHTML = "TOTAL : $ " + PRECIO

//TAMAÑO SELECCIONADO
let tamañoSeleccionado = ""

burgers.forEach(burger => {
    burger.addEventListener("click", function () {
        tamañoSeleccionado = burger.name
        precioTotal = parseInt(burger.value)
        console.log(tamañoSeleccionado + precioTotal)
    })
})

//ARMADO AGREGADOS
let elementosAgregados = []

armadoAgregados.forEach(agregado => {
    agregado.addEventListener("change", function () {
        if (agregado.checked) {
            if (!elementosAgregados.includes(agregado.name)) {
                elementosAgregados.push(agregado.name)
                precioTotal += parseInt(agregado.value)
                console.log(elementosAgregados)
                console.log(precioTotal)
            }
        } else {
            const index = elementosAgregados.indexOf(agregado.name)
            if (index !== -1) {
                elementosAgregados.splice(index, 1)
                console.log(elementosAgregados)
            }
        }
    })
})

//ARMADO ADEREZOS
let elementosAderezos = []

armadoAderezos.forEach(aderezo => {
    aderezo.addEventListener("change", function () {
        if (!elementosAderezos.includes(aderezo.name)) {
            elementosAderezos.push(aderezo.name)
            console.log(elementosAderezos)
        } else {
            const index = elementosAderezos.indexOf(aderezo.name)
            if (index !== -1) {
                elementosAderezos.splice(index, 1)
                console.log(elementosAderezos)
            }
        }
    })
})

//ARMADO BEBIDA
let elementosBebidas = []

armadoBebidas.forEach(bebida => {
    bebida.addEventListener("change", function () {
        if (bebida.checked) {
            if (!elementosBebidas.includes(bebida.name)) {
                elementosBebidas.push(bebida.name)
                precioTotal += parseInt(bebida.value)
                console.log(elementosBebidas)
                console.log(precioTotal)
            }
        } else {
            const index = elementosBebidas.indexOf(bebida.name)
            if (index !== -1) {
                elementosBebidas.splice(index, 1)
                console.log(elementosBebidas)
            }
        }
    })
})

