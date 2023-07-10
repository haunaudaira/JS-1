
/* Inicio declarando dos Arrays donde en el primero guardo y defino con una constante
    los datos de mis productos y el segundo irá alojando los productos que el cliente elija: */ 

const productos = [
    {nombre: "balanceado", precio: 1500},
    {nombre: "pipeta", precio: 500},
    {nombre: "collar", precio: 150},
    {nombre: "juguete", precio: 80},
    {nombre: "analgésico", precio: 100}
]

let carrito = []

/* Declaro la variable selección de productos */

let seleccion = prompt("Bienvenido a VetCare, ¿desea comprar algún producto? SI/NO " )

//Inicio un Bucle para darle dos opciones al usuario SI Y NO

while (seleccion !="si" && seleccion !="no"){
    alert("¿Deseas continuar a la compra? Ingresa solo SI/NO")
    seleccion = prompt("Bienvenido a VetCare, ¿desea comprar algún producto? SI/NO " ) // Al seleccion haberla declarado con LET y a su vez ser una var global, puedo modificar su valor acá dentro
}
if (seleccion === "si"){
    alert("A continuación te enseñamos la lista de productos -> ")
}
else if (seleccion === "no"){
    alert("¡Te esperamos pronto!")
}

//2do bucle 

while (seleccion !="no"){
    let producto  = prompt("Elige un producto:  balanceado $1500 - pipeta $500 - collar $150 - juguete $80 - analgésico $100")
    let precio = 0 //declaro variable local precio para poder ir modificandola en cada caso a continuación 

    if (producto == "balanceado" || producto == "pipeta" || producto == "collar" || producto == "juguete" || producto == "analgésico" ) {
        switch(producto){
            case "balanceado":
                precio = 1500;
                break;
            case "pipeta":
                precio = 500;
                break;
            
            case "collar":
                precio = 150;
                break;
            
            case "juguete":
                precio = 80;
                break;
            
            case "analgésico":
                precio = 100;
                break;

            default:
                break;
        }

    let unidades = parseInt(prompt("¿Cuantas unidades desea agregar?")) //a partir0 de acá comienzo a meter la información que quiero dentro del carrito

    carrito.push ({producto, unidades, precio})
    console.log(carrito)
    } 
    else{
        alert("Ingrese un producto dentro de los mencionados")}

    seleccion = prompt("¿Desea seguir comprando?")

    while (seleccion === "no"){
        alert("¡Gracias por tu compra! Apretá F12 para ver tu carrito")
        carrito.forEach((carritoFinal) => {
            console.log(`PRODUCTO: ${carritoFinal.producto} UNIDADES: ${carritoFinal.unidades} TOTAL ${carritoFinal.unidades * carritoFinal.precio}`)
        }) //utilizo forEach para recorrer el carrito
        break;
    }
}

//declaro la suma del total del carrito utilizando el método reduce para que me traiga los datos que le solicito utilizando los parámetros acumulador y elementos declarados en carrito y realizo los cálculos
const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar es de: ${total}`)