const urlUsuarios = "https://jsonplaceholder.typicode.com/users";  

const listaUsuarios = document.querySelector ("#lista-usuarios");

fetch(urlUsuarios)

    .then( (response) => response.json() )
    .then( (data) => {

        data.forEach(usuario => {
            
            console.log(usuario);
            let li = document.createElement("li");
            li.innerHTML = "<br>Nombre: " + usuario.name + "<br>Teléfono: " + usuario.phone + "<br>Corre: " + usuario.email;
            listaUsuarios.append(li);

        });

    })