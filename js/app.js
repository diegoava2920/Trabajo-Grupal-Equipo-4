const eventos = [ 
  { id: 1, nombre: "React Summit Alajuela", fecha: "2026-11-12", modalidad: 
"Presencial", cupos: 35 }, 
  { id: 2, nombre: "Web Dev Day San José", fecha: "2026-11-20", modalidad: "Virtual", 
cupos: 50 }, 
  { id: 3, nombre: "JS Cartago Meetup", fecha: "2026-12-03", modalidad: "Híbrida", 
cupos: 3 } 
]; 
 
const contenedor = document.querySelector("#eventos"); 
 
function crearTarjeta(evento) { 
  const tarjeta = document.createElement("article"); 
  tarjeta.classList.add("card"); 
  tarjeta.setAttribute("data-id", evento.id); 
 
  const titulo = document.createElement("h3"); 
  titulo.textContent = evento.nombre; 
 
  const detalle = document.createElement("p"); 
  detalle.textContent = `${evento.fecha} · ${evento.modalidad}`; 
 
  const cupos = document.createElement("p"); 
  cupos.classList.add("cupos"); 
  cupos.textContent = `Cupos disponibles: ${evento.cupos}`; 
 
  const boton = document.createElement("button"); 
  boton.classList.add("btn-inscribir"); 
  boton.textContent = "Inscribirme"; 
  tarjeta.appendChild(titulo); 
  tarjeta.appendChild(detalle); 
  tarjeta.appendChild(cupos); 
  tarjeta.appendChild(boton); 
  tarjeta.insertAdjacentHTML("afterbegin", `<span class="badge">${evento.modalidad}</span>`); 
  return tarjeta; 
} 
 
function renderEventos() { 
  contenedor.replaceChildren(); 
  eventos.forEach((evento) => contenedor.append(crearTarjeta(evento))); 
} 
 
renderEventos(); 

const subtitulo = document.createElement("h2"); 
subtitulo.textContent = "Próximos eventos"; 
contenedor.before(subtitulo); 

document.querySelector("#pie").insertAdjacentText("beforeend", ` · ${new Date().getFullYear()}`); 

const aviso = document.createElement("article"); 
aviso.classList.add("card"); 
aviso.textContent = "Inscripciones abiertas"; 
contenedor.prepend(aviso); 

console.log("Cantidad de hijos:", contenedor.children.length); 
console.log("Primer hijo:", contenedor.firstElementChild); 
console.log("Último hijo:", contenedor.lastElementChild); 
console.log("Hermano anterior del último hijo:", contenedor.lastElementChild.previousElementSibling); 