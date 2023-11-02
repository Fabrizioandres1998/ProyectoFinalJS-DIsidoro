//GET
const burgers = document.querySelectorAll(".burgers button")
const armadoAgregados = document.querySelectorAll('.armado__agregados input[type="checkbox"]')
const armadoAderezos = document.querySelectorAll('.armado__aderezos input[type="checkbox"]')
const armadoBebidas = document.querySelectorAll('.armado__bebida input[type="checkbox"]')
const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const formulario = document.querySelectorAll('.formulario input')
const total = document.querySelector("#total")
const completar = document.querySelector("#completarPedido")
const pedidoCompletoLista = document.querySelector(".pedidoCompleto ul")

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
        objetoTamaño.Tamaño = tamañoSeleccionado
        precioTotal = parseInt(burger.value)
        total.innerHTML = "TOTAL: $ " + precioTotal
    })
})

//ARMADO AGREGADOS
let elementosAgregados = []
let objetoAgregados = { Agregados: elementosAgregados }

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
let objetoAderezos = { Aderezos: elementosAderezos }

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
let objetoBebidas = { Bebidas: elementosBebidas }

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
        if (dato.name === "Nombre") {
            objetoCliente.Nombre = dato.value + ", "
        }
        if (dato.name === "Direccion") {
            objetoCliente.Direccion = dato.value + ", "
        }
        if (dato.name === "Telefono") {
            objetoCliente.Telefono = dato.value + ", "
        }        
    })
})

let arrayCompletar = []

function mostrarPedido() {
    pedidoCompletoLista.innerHTML = ""

    let pedidoEnStorage = JSON.parse(localStorage.getItem("pedido"))

    pedidoEnStorage.forEach(item => {
        let nuevoLi = document.createElement("li")
        if (typeof item === "object") {
            // Si el elemento es un objeto, iterar sobre sus propiedades y mostrarlas
            Object.keys(item).forEach(key => {
                let texto = key + ": " + item[key]
                nuevoLi.appendChild(document.createTextNode(texto))
            })
        } else {
            // Si el elemento no es un objeto, mostrarlo directamente
            nuevoLi.textContent = item
        }
        pedidoCompletoLista.appendChild(nuevoLi)
    })
}

completar.addEventListener("click", () => {
    arrayCompletar.push(objetoTamaño)
    arrayCompletar.push(objetoAgregados)
    arrayCompletar.push(objetoAderezos)
    arrayCompletar.push(objetoBebidas)
    arrayCompletar.push(objetoCliente)
    arrayCompletar.push("Total: $" + precioTotal)

    localStorage.setItem("pedido", JSON.stringify(arrayCompletar))
    checkboxes.forEach(checkbox => {
        checkbox.checked = false
    })
    formulario.forEach(form => {
        form.value = ""
    })
    mostrarPedido() // Llamar a la función para mostrar el pedido en la lista
})
