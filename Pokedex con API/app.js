
// Div contenedor donde se colocarán todos los pokemons 
const listaPokemon = document.querySelector('#listaPokemon');
// Variable donde se almacenara la infor de los pokemons
let URL = "https://pokeapi.co/api/v2/pokemon/";

//Para conectar la información obtenida en el search bar y filtrar a través del mismo.
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', function(){
    const buscarPokemon = this.value.toLowerCase();
    const pokemons = document.querySelectorAll('.pokemon');

    pokemons.forEach(pokemon => {
        const pokemonName = pokemon.querySelector('.nombre-pokemon').textContent.toLowerCase();
        const pokemonType = pokemon.querySelector('.pokemon-tipos').textContent.toLocaleLowerCase();
        if (pokemonName.includes(buscarPokemon)) {
            pokemon.style.display = 'block';

        } if(pokemonType.includes(buscarPokemon)){
            pokemon.style.display = 'block';

        }else {pokemon.style.display = 'none';}
        
    });
}
)

for (let i = 252; i <= 386; i++) {
    fetch(URL + i)
        .then ((Res) => Res.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke) {

    let tipos = poke.types.map((type) => 
    `<p class=" ${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');
   

const div = document.createElement('div');
    div.classList.add("pokemon");
    div.innerHTML = `
    
    <img src="/img/pokeball background-opaque.png" alt="" class="bg-pokemon">

      <div class="pokemon-imagen">
        <Img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
      </div>
      <div class="info-pokemon">
        <div class="contenedor-nombre">
          <p class="id-pokemon"> #${poke.id}</p>
          <h2 class="nombre-pokemon"> ${poke.name}</h2>
        </div>
        <div class="pokemon-tipos">
          ${tipos}
        </div>
        <div class="pokemon-stats">
          <p class="stats">${poke.height + "M "}</p>
          <p class="stats">${poke.weight + "KG"} </p>
        </div>
      </div>`;
    
    listaPokemon.append(div);
}