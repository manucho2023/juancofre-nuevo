//Funcion

function solicitarApellido() {
    let apellido = prompt("Ingresar su apellido")
    console.log(`Su apellido es: ${apellido}`)
}

solicitarApellido()

function elegirProducto() {
    let producto = prompt("ingrese producto 1:guitarra 2:bajo 3:bateria")

    if (producto === "1") {
        alert("guitarra")
    } else if (producto === "2") { 
        alert("bajo")
    } else if (producto === "3"){
        alert("bateria")
    }
}

elegirProducto()

let instrumento = prompt(`
1: guitarra
2: bajo
3: bateria
`)

switch (instrumento) {
    case "1":
        console.log("opcion 1 precio, $25000")
        break;
    case "2":
        console.log("opcion 2 precio, $30000")
        break;
    case "3":
        console.log("opcion 3 precio, $50000")
        break;
    default:
        console.log("La opcion no esta entre estos instrumentos")
        break;
}