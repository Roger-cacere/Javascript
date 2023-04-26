// Declarando Variable de LUXON

const DateTime = luxon.DateTime;
const now = DateTime.now();

//    LIGAS
// Creación del Constructor del Objeto DIVISA

class Equipos {

    constructor(escudo, nombre, puntos, goleador) {
        this.escudo = escudo;
        this.nombre = nombre;
        this.puntos = puntos;
        this.goleador = goleador;
    }
    toString() {

        return this.nombre;

    }

}

// Declaración del Vector de las diferentes Divisas

let listaEquipos = [];

// Creación de Objetos con el Constructor DIVISA dentro del Vector listaEquipos []

listaEquipos.push(new Equipos("Barcelona.png", "Barcelona", 77, "Robert Lewandowski"));
listaEquipos.push(new Equipos("Arsenal.png", "Arsenal", 75, "Gabriel Martinelli"));
listaEquipos.push(new Equipos("PSG.png", "PSG", 75, "Kylian Mbappé"));
listaEquipos.push(new Equipos("River.png", "River", 33, "Beltrán"));
listaEquipos.push(new Equipos("Fluminense.png", "Fluminense", 6, "German Cano"));
listaEquipos.push(new Equipos("Napoli.png", "Napoli", 78, "Victor Osimhen"));
listaEquipos.push(new Equipos("Dortmund.jpg", "Borussia Dortmund", 60, "Jude Bellingham"));

//Creación de variables para los nodos del DOM

let primerDivisa = document.querySelectorAll(".primerDivisa");
let segundaDivisa = document.querySelectorAll(".segundaDivisa");
let tercerDivisa = document.querySelectorAll(".tercerDivisa");
let cuartaDivisa = document.querySelectorAll(".cuartaDivisa");
let quintaDivisa = document.querySelectorAll(".quintaDivisa");
let sextaDivisa = document.querySelectorAll(".sextaDivisa");
let septimaDivisa = document.querySelectorAll(".septimaDivisa");

// Asignación de elementos del Objeto 

primerDivisa[0].innerText = listaEquipos[0].escudo;
primerDivisa[1].innerText = listaEquipos[0].nombre;
primerDivisa[2].innerText = listaEquipos[0].puntos;
primerDivisa[3].innerText = listaEquipos[0].goleador;

segundaDivisa[0].innerText = listaEquipos[1].escudo;
segundaDivisa[1].innerText = listaEquipos[1].nombre;
segundaDivisa[2].innerText = listaEquipos[1].puntos;
segundaDivisa[3].innerText = listaEquipos[1].goleador;

tercerDivisa[0].innerText = listaEquipos[2].escudo;
tercerDivisa[1].innerText = listaEquipos[2].nombre;
tercerDivisa[2].innerText = listaEquipos[2].puntos;
tercerDivisa[3].innerText = listaEquipos[2].goleador;

cuartaDivisa[0].innerText = listaEquipos[3].escudo;
cuartaDivisa[1].innerText = listaEquipos[3].nombre;
cuartaDivisa[2].innerText = listaEquipos[3].puntos;
cuartaDivisa[3].innerText = listaEquipos[3].goleador;

quintaDivisa[0].innerText = listaEquipos[4].escudo;
quintaDivisa[1].innerText = listaEquipos[4].nombre;
quintaDivisa[2].innerText = listaEquipos[4].puntos;
quintaDivisa[3].innerText = listaEquipos[4].goleador;

sextaDivisa[0].innerText = listaEquipos[5].escudo;
sextaDivisa[1].innerText = listaEquipos[5].nombre;
sextaDivisa[2].innerText = listaEquipos[5].puntos;
sextaDivisa[3].innerText = listaEquipos[5].goleador;

septimaDivisa[0].innerText = listaEquipos[6].escudo;
septimaDivisa[1].innerText = listaEquipos[6].nombre;
septimaDivisa[2].innerText = listaEquipos[6].puntos;
septimaDivisa[3].innerText = listaEquipos[6].goleador;

// TRABAJO - INICIO

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


// CONTÁCTANOS - INICIO

class Contacto {

    constructor(nombre, apellido, correo, mensaje) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.mensaje = mensaje;

    }
    toString() {

        return this.nombre;

    }
}

let formContacto = document.querySelector("#formContacto");
let nombreContacto = document.querySelector("#nombreContacto");
let apellidoContacto = document.querySelector("#apellidoContacto");
let correoContacto = document.querySelector("#correoContacto");
let exampleFormControlTextarea1 = document.querySelector("#exampleFormControlTextarea1");
let resumenContacto = document.querySelector("#resumenContacto");

// Guardando datos de formulario en el LocalStorage

let usuarioContacto = JSON.parse(localStorage.getItem("UsuarioContacto")) ?? [];

if (usuarioContacto.length > 0) {

    resumenContacto.innerText = ("\nMuchas gracias por contactarnos. Si tu perfil encaja con nuestra búsqueda, te estaremos contactando." + "\n\n" + "Fecha: " + now.toLocaleString(DateTime.DATETIME_MED) + "\n" + "Nombre: " + (usuarioContacto.nombre).toUpperCase() + "\n" + "Apellido: " + (usuarioContacto.apellido).toUpperCase() + "\n" + "Correo Electrónico: " + (usuarioContacto.correo).toUpperCase() + "\n" + "Número de Teléfono: " + (usuarioContacto.mensaje));

}

formContacto.addEventListener("submit", (event) => {

    event.preventDefault();

    if ((nombreContacto.value !== "") && (apellidoContacto.value !== "") && (correoContacto.value !== "") && (exampleFormControlTextarea1.value !== "")) {

        resumenContacto.innerText = ("\nMuchas gracias por escribirnos. Estaremos en contacto a la brevedad.");

        let usuarioContacto = new DatosCareers(nombreContacto.value, apellidoContacto.value, correoContacto.value, exampleFormControlTextarea1.value);

        setTimeout(() => {

            resumenContacto.innerText = "";

        }, 5000);

        // Agregando Alerta de SweetAlert

        Swal.fire({

            position: 'top-end',
            icon: 'success',
            title: 'Datos enviados correctamente.',
            showConfirmButton: false,
            timer: 2500

        })

        // Guardando datos de formulario en el LocalStorage

        localStorage.setItem('UsuarioContacto', JSON.stringify(usuarioContacto));

        nombreContacto.focus();
        formContacto.reset();

    } else {

        resumenContacto.innerText = ("\nDebes introducir todos los datos correctamente.");

        setTimeout(() => {

            resumenContacto.innerText = "";

        }, 5000);

        // Agregando Alerta de SweetAlert

        Swal.fire({

            icon: 'error',
            title: 'Error!',
            text: 'Debes introducir todos los datos correctamente.',
            timer: 2500

        })

        nombreContacto.focus();
        formContacto.reset();

    }

})

// INGRESAR - INICIO


class Miembro {

    constructor(nombre, correo, contrasenia) {

        this.nombre = nombre;
        this.correo = correo;
        this.contrasenia = contrasenia;

    }
    toString() {

        return this.nombre;

    }
}

let formLogIn = document.querySelector("#formLogIn");
let nombreLogIn = document.querySelector("#nombreLogIn");
let correoLogIn = document.querySelector("#correoLogIn");
let contraseniaLogIn = document.querySelector("#contraseniaLogIn");
let resumenLogIn = document.querySelector("#resumenLogIn");

// Guardando datos de formulario en el LocalStorage

let usuarioIngresar = JSON.parse(sessionStorage.getItem("UsuarioMiembro")) ?? [];

if (usuarioIngresar.length > 0) {

    resumenLogIn.innerText = ("\nBienvenido." + "\n\n" + "Fecha: " + now.toLocaleString(DateTime.DATETIME_MED) + "\n" + "Nombre: " + (usuarioIngresar.nombre).toUpperCase() + "\n" + "Apellido: " + (usuarioIngresar.correo).toUpperCase() + "\n" + "Correo Electrónico: ");

}

formLogIn.addEventListener("submit", (event) => {

    event.preventDefault();

    if ((nombreLogIn.value !== "") && (correoLogIn.value !== "") && (contraseniaLogIn.value !== "")) {


        resumenLogIn.innerText = ("\nBIENVENIDO");

        let usuarioIngresar = new Miembro(nombreLogIn.value, correoLogIn.value, contraseniaLogIn.value);

        setTimeout(() => {
            resumenLogIn.innerText = "";
        }, 5000);

        // Agregando Alerta de SweetAlert

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Datos enviados correctamente.',
            showConfirmButton: false,
            timer: 2500
        })

        // Guardando datos de formulario en el SessionStorage

        sessionStorage.setItem('UsuarioMiembro', JSON.stringify(usuarioIngresar));
        nombreLogIn.focus();
        formLogIn.reset();

    } else {

        resumenLogIn.innerText = ("\nDebes introducir todos los datos correctamente.");

        setTimeout(() => {
            resumenLogIn.innerText = "";
        }, 5000);

        // Agregando Alerta de SweetAlert

        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Debes introducir todos los datos correctamente.',
            timer: 2500
        })
        nombreLogIn.focus();
        formLogIn.reset();
    }

})
