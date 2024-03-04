const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul'); 

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Actualizar el texto de los parrafos

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

// Actualizar color

function actuliazarColor(rojo, verde, azul){
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`
  document.body.style.backgroundColor = colorRGB;
}

//para actuailizar Red (Rojo)

inputRojo.addEventListener('change', (e) =>{
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  actuliazarColor(rojo, verde, azul);
})

inputVerde.addEventListener('change', (e) =>{
  verde = e.target.value;
  textoVerde.innerText = verde;
  actuliazarColor(rojo, verde, azul);
})

inputAzul.addEventListener('change', (e) =>{
  azul = e.target.value;
  textoAzul.innerText = azul;
  actuliazarColor(rojo, verde, azul);
})