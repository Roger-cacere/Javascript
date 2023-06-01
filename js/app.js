//getItem recupera los datos del localStorage, si no hay nada guardado carrito es un array vacio
let carrito = JSON.parse(localStorage.getItem("carritoJson")) || []

const productContainer = document.getElementById("product-container")

const verCarrito = document.getElementById("verCarrito")

const modalContainer = document.getElementById("modal-container")

const cantidadCarrito = document.getElementById("cantidadCarrito")


const getProducts = async () => {
    const response = await fetch('stock.json')
    const data = await response.json()
    data.forEach((product) => {
        let content = document.createElement("div")
        content.className = "product-item"
        content.innerHTML = `
                <img src="${product.img}">
                <h3>${product.nombre}</h3>
                <p>${product.desc}</p>
                <span class="price">$${product.precio}</span>
            `
        productContainer.append(content)

        //creacion de boton comprar
        let comprar = document.createElement("button")
        comprar.innerText = "Comprar"
        comprar.className = "comprar"

        content.append(comprar)

        //detecta click sobre el boton comprar y agrega el elemento al carrito
        comprar.addEventListener("click", () => {
            //validar cantidad de productos y si el producto existe en el carrito
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id)
            //suma un producto repetido al carrito
            repeat ? carrito.find((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++
                }
            }) : carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad
            })
            Toastify({
                text: 'Producto agregado al carrito!',
                duration: 3000,
                gravity: "bottom",
                style: {
                    background: '#333'
                }
            }).showToast()
            console.log(carrito)
            contadorCarrito()
            carritoStorage()
        })
    })
}

getProducts()

//localStorage del carrito
const carritoStorage = () => {
    let carritoJson = JSON.stringify(carrito)
    localStorage.setItem("carritoJson", carritoJson)
}

/* Trabajo */
let fecha = new Date();

class Datos {

    constructor(nombre, apellido, correo, telefono) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
    }

    toString() {

        return this.nombre;

    }

}

let formDatos = document.querySelector("#formDatos");
let nombreDatos = document.querySelector("#nombreDatos");
let apellidoDatos = document.querySelector("#apellidoDatos");
let correoDatos = document.querySelector("#correoDatos");
let telefonoDatos = document.querySelector("#telefonoDatos");
let resumenDatos = document.querySelector("#resumenDatos");

// Guardando datos de formulario en el LocalStorage

let postulante = JSON.parse(localStorage.getItem("Usuario")) ?? [];

if (postulante.length > 0) {

    resumenDatos.innerText = ("\nMuchas gracias por contactarnos. Si tu perfil encaja con nuestra búsqueda, te estaremos contactando." + "\n\n" + "Fecha: " + now.toLocaleString(DateTime.DATETIME_MED) + "\n" + "Nombre: " + (postulante.nombre).toUpperCase() + "\n" + "Apellido: " + (postulante.apellido).toUpperCase() + "\n" + "Correo Electrónico: " + (postulante.correo).toUpperCase() + "\n" + "Número de Teléfono: " + (postulante.telefono));
}

formDatos.addEventListener("submit", (event) => {

    event.preventDefault();

    if ((nombreDatos.value !== "") && (apellidoDatos.value !== "") && (correoDatos.value !== "") && (telefonoDatos.value !== "")) {

        resumenDatos.innerText = ("\nMuchas gracias por contactarnos. Si tu perfil encaja con nuestra búsqueda, te estaremos contactando." + "\n\n" + "Fecha: " + now.toLocaleString(DateTime.DATETIME_MED) + "\n" + "Nombre: " + (nombreDatos.value).toUpperCase() + "\n" + "Apellido: " + (apellidoDatos.value).toUpperCase() + "\n" + "Correo Electrónico: " + (correoDatos.value).toUpperCase() + "\n" + "Número de Teléfono: " + (telefonoDatos.value));

        let postulante = new Datos(nombreDatos.value, apellidoDatos.value, correoDatos.value, telefonoDatos.value);

        // Agregando Alerta de SweetAlert

        Swal.fire({

            position: 'top-end',
            icon: 'success',
            title: 'Datos enviados correctamente.',
            showConfirmButton: false,
            timer: 2500

        })

        // Guardando datos de formulario en el LocalStorage

        localStorage.setItem('Usuario', JSON.stringify(postulante));

        nombreDatos.focus();
        formDatos.reset();

    } else {

        resumenDatos.innerText = ("\nDebes introducir todos los datos correctamente.");

        // Agregando SetTimeOut

        setTimeout(() => {

            resumenDatos.innerText = "";

        }, 5000);

        // Agregando Alerta de SweetAlert

        Swal.fire({

            icon: 'error',
            title: 'Error!',
            text: 'Debes introducir todos los datos correctamente.',
            timer: 2500

        })

        nombreDatos.focus();
        formDatos.reset();

    }

})
