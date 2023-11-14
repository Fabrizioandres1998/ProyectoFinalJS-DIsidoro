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

//ARMADO AGREGADOS
let elementosAgregados = []
let objetoAgregados = { Agregados: elementosAgregados }

//ARMADO BEBIDA
let elementosBebidas = []
let objetoBebidas = { Bebidas: elementosBebidas }

//ARMADO ADEREZOS
let elementosAderezos = []
let objetoAderezos = { Aderezos: elementosAderezos }

const obtenerDatosJSON = async () => {
    try {
        const resp = await fetch('data.json')
        const data = await resp.json()
        return data
    } catch {
        console.error("Error: ", error)
    }
}
obtenerDatosJSON()
    //HAMBURGUESAS
    .then(data => {
        const Hamburguesas = data.hamburguesas

        burgers.forEach((burger, index) => {
            burger.addEventListener("click", function () {
                checkboxes.forEach(checkbox => {
                    checkbox.checked = false
                })
                tamañoSeleccionado = Hamburguesas[index].tamaño
                objetoTamaño.Tamaño = tamañoSeleccionado
                precioTotal = Hamburguesas[index].precio
                total.textContent = "TOTAL: $ " + precioTotal
                pedidoCompletoLista.textContent = ""
            })
        })
        return data
    })
    //AGREGADOS
    .then(data => {
        const Agregados = data.agregados

        armadoAgregados.forEach((agregado, index) => {
            agregado.addEventListener("change", function () {
                const nombreAgregado = Agregados[index].nombre

                if (agregado.checked) {
                    if (!elementosAgregados.includes(nombreAgregado)) {
                        elementosAgregados.push(nombreAgregado)
                        precioTotal += Agregados[index].precio
                        total.textContent = "TOTAL: $ " + precioTotal
                    }
                } else {
                    const indexAgregados = elementosAgregados.indexOf(Agregados[index].nombre)
                    if (indexAgregados !== -1) {
                        elementosAgregados.splice(indexAgregados, 1)
                        precioTotal -= Agregados[index].precio
                        total.textContent = "TOTAL: $ " + precioTotal
                    }
                }
            })
        })
        return data
    })
    //ADEREZOS
    .then(data => {
        const Aderezos = data.aderezos

        armadoAderezos.forEach((aderezo, index) => {
            aderezo.addEventListener("change", function () {
                const nombreAderezo = Aderezos[index].nombre

                if (!elementosAderezos.includes(nombreAderezo)) {
                    elementosAderezos.push(nombreAderezo)
                    total.textContent = "TOTAL: $ " + precioTotal
                } else {
                    const indexAderezos = elementosAderezos.indexOf(nombreAderezo)
                    if (indexAderezos !== -1) {
                        elementosAderezos.splice(indexAderezos, 1)
                        total.textContent = "TOTAL: $ " + precioTotal
                    }
                }
            })
        })
        return data
    })

    //BEBIDAS
    .then(data => {
        const Bebidas = data.bebidas

        armadoBebidas.forEach((bebida, index) => {
            bebida.addEventListener("change", function () {
                const nombreBebida = Bebidas[index].nombre

                if (bebida.checked) {
                    if (!elementosBebidas.includes(bebida.name)) {
                        elementosBebidas.push(nombreBebida)
                        precioTotal += Bebidas[index].precio
                        total.textContent = "TOTAL: $ " + precioTotal
                    }
                } else {
                    const indexBebidas = elementosBebidas.indexOf(nombreBebida)
                    if (indexBebidas !== -1) {
                        elementosBebidas.splice(indexBebidas, 1)
                        precioTotal -= Bebidas[index].precio
                        total.textContent = "TOTAL: $ " + precioTotal
                    }
                }
            })
        })
    })
    .catch(error => {
        console.error("Error externo: ", error)
    })

//DATOS CLIENTE
let objetoCliente = {}

formulario.forEach(dato => {
    dato.addEventListener("input", function () {
        if (dato.name === "Nombre") {
            objetoCliente.Nombre = dato.value
        }
        if (dato.name === "Direccion") {
            objetoCliente.Direccion = dato.value
        }
        if (dato.name === "Telefono") {
            objetoCliente.Telefono = dato.value
        }
    })
})

let arrayCompletar = []

function mostrarPedido() {
    let textoCompletar = ""
    pedidoCompletoLista.textContent = ""
    let pedidoEnStorage = JSON.parse(localStorage.getItem("pedido"))

    pedidoEnStorage.forEach(item => {
        let nuevoLi = document.createElement("li")
        if (typeof item === "object") {
            Object.keys(item).forEach(key => {
                let texto = key + ": " + item[key]
                nuevoLi.textContent = texto        
                textoCompletar += texto + "\n"
            })
        } else {
            nuevoLi.textContent = item
            textoCompletar += item + "\n"
        }
    })
    return textoCompletar
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

    let textoCompletar = mostrarPedido()

    Swal.fire({
        title: "¡Pedido exitoso!",
        text: textoCompletar,
        icon: "success",
        html: `<pre style="white-space: pre-line;">${textoCompletar}</pre>`
    })
})
