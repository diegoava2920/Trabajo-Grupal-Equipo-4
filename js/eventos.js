contenedor.addEventListener("click", (event) => {
    const boton = event.target;

    if (!boton.classList.contains("btn-inscribir")) return;

    const tarjeta = boton.parentElement;
    const id = Number(tarjeta.getAttribute("data-id"));
    const evento = eventos.find((e) => e.id === id);

    if (evento.cupos > 0) {
        evento.cupos--;
        tarjeta.querySelector(".cupos").textContent = `Cupos disponibles:
        ${evento.cupos}`;
    }

    //Deshabilitar el boton y setear agotado
    if(evento.cupos === 0){
        boton.disable = true;
        boton.textContent = "Agotado";
    }

    console.log(event.type, event.target, event.clientX, event.clientY);

    
});

//Evento en las tarjetas utilizando el mouseover y el mouseout
const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("mouseover", () => {
        tarjeta.classList.toggle("resaltada");
    });

    tarjeta.addEventListener("mouseout", () => {
        tarjeta.classList.toggle("resaltada");
    });
});

//Listener del h1 para generar texto adyacente
const titulo = document.querySelector("h1");

titulo.addEventListener("click", () => {
    const parrafo = document.createElement("p");
    parrafo.textContent = "¡Gracias por visitar TechEvents CR!";

    titulo.insertAdjacentElement("afterend", parrafo);
}, { once: true });


//Funcion de event para revisar el once:true
titulo.addEventListener("click", (event) => {
    console.log(event.type, event.target);
});

//onclick es una propiedad mientras que addEventListener es un metodo, el primero sobreescribe 
// las funciones segun el orden donde este mientras que el segundo puede correr varias al mismo tiempo

