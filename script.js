//GET
const burgers = document.querySelectorAll(".burgers button")
const armadoAgregados = document.querySelectorAll('.armado__agregados input[type="checkbox"]')
const armadoAderezos = document.querySelectorAll('.armado__aderezos input[type="checkbox"]')
const armadoBebidas = document.querySelectorAll('.armado__bebida input[type="checkbox"]')
//PRECIO TOTAL
let precioTotal = 0
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
