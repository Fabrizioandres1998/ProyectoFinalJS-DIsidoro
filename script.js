//GET
const burgers = document.querySelectorAll(".burgers button")
const armadoAgregados = document.querySelectorAll('.armado__agregados input[type="checkbox"]')
const armadoAderezos = document.querySelectorAll('.armado__aderezos input[type="checkbox"]')
const armadoBebidas = document.querySelectorAll('.armado__bebida input[type="checkbox"]')
const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const formulario = document.querySelectorAll('.formulario input')
const total = document.querySelector("#total")
const completar = document.querySelector("#completarPedido")

//PRECIO TOTAL
let precioTotal = 0

//TAMAÑO SELECCIONADO
let tamañoSeleccionado = ""
let objetoTamaño = {}

burgers.forEach(burger => {
    burger.addEventListener("click", function () {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false
        })
        tamañoSeleccionado = burger.name
        objetoTamaño.tamaño = tamañoSeleccionado
        precioTotal = parseInt(burger.value)
        total.innerHTML = "TOTAL: $ " + precioTotal
    })
})

//ARMADO AGREGADOS
let elementosAgregados = [];
let objetoAgregados = { elementosAgregados: elementosAgregados }

armadoAgregados.forEach(agregado => {
    agregado.addEventListener("change", function () {
        if (agregado.checked) {
            if (!elementosAgregados.includes(agregado.name)) {
                elementosAgregados.push(agregado.name)
                precioTotal += parseInt(agregado.value)
                total.innerHTML = "TOTAL: $ " + precioTotal
            }
        } else {
            const index = elementosAgregados.indexOf(agregado.name)
            if (index !== -1) {
                elementosAgregados.splice(index, 1)
                precioTotal -= parseInt(agregado.value)
                total.innerHTML = "TOTAL: $ " + precioTotal
            }
        }
    })
})

//ARMADO ADEREZOS
let elementosAderezos = []
let objetoAderezos = { aderezos: elementosAderezos }

armadoAderezos.forEach(aderezo => {
    aderezo.addEventListener("change", function () {
        if (!elementosAderezos.includes(aderezo.name)) {
            elementosAderezos.push(aderezo.name)
            total.innerHTML = "TOTAL: $ " + precioTotal
        } else {
            const index = elementosAderezos.indexOf(aderezo.name)
            if (index !== -1) {
                elementosAderezos.splice(index, 1)
            }
        }
    })
})

//ARMADO BEBIDA
let elementosBebidas = []
let objetoBebidas = { bebidas: elementosBebidas }

armadoBebidas.forEach(bebida => {
    bebida.addEventListener("change", function () {
        if (bebida.checked) {
            if (!elementosBebidas.includes(bebida.name)) {
                elementosBebidas.push(bebida.name)
                precioTotal += parseInt(bebida.value)
                total.innerHTML = "TOTAL : $ " + precioTotal
            }
        } else {
            const index = elementosBebidas.indexOf(bebida.name)
            if (index !== -1) {
                elementosBebidas.splice(index, 1)
                precioTotal -= parseInt(bebida.value)
                total.innerHTML = "TOTAL : $ " + precioTotal
            }
        }
    })
})

//DATOS CLIENTE
let objetoCliente = {}

formulario.forEach(dato => {
    dato.addEventListener("input", function () {
        if (dato.name === "nombre") {
            objetoCliente.nombre = dato.value
        }
        if (dato.name === "direccion") {
            objetoCliente.direccion = dato.value
        }
        if (dato.name === "telefono") {
            objetoCliente.telefono = dato.value
        }
    })
})

let arrayCompletar = []

completar.addEventListener("click", function () {
    arrayCompletar.push(objetoTamaño)
    arrayCompletar.push(objetoAgregados)
    arrayCompletar.push(objetoAderezos)
    arrayCompletar.push(objetoBebidas)
    arrayCompletar.push("total: $" + precioTotal)
    arrayCompletar.push(objetoCliente)
    alert("Pedido exitoso")
    localStorage.setItem("pedido", JSON.stringify(arrayCompletar))
    console.log(JSON.parse(localStorage.getItem("pedido")))
})

