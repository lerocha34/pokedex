let pokemonName = document.getElementById("nomepokemon");
let pokemonImage = document.getElementById("imagepokemon");
let pokeId = document.getElementById('poke-id');
let findPoke = document.getElementById('get-id');
let pokeDescription = document.getElementById('description');


//pegar nome e imagem
function getPokemonData(){
const pokemon = fetch(`${"https://pokeapi.co/api/v2/pokemon/" + pokeId.value}`).then(response => response.json())
.then((data => {
return data}))

return pokemon
}

function getPokemonName(){
    getPokemonData().then(data =>{
        const name = data.name
        pokemonName.innerText = name
    })
    return
}

function getPokemonImage() {
    getPokemonData().then(data => {
        const src = data.sprites.front_default;
        pokemonImage.src = src
    });
}


//pegar descrição
function pokemonChar() {
    return fetch(`https://pokeapi.co/api/v2/characteristic/${pokeId.value}`)
        .then(response => {
            return response.json();
        });
}

function getPokemonDesc() {
    pokemonChar().then(data => {
        
            const char = data.descriptions[7].description;
            pokeDescription.innerText = char;
    }).catch(error => {
        pokeDescription.innerText = "Nenhuma descrição encontrada"
    })
}


function selectedPokemon() {
    getPokemonData()
        .then(() => {
            getPokemonName();
            getPokemonImage();
            getPokemonDesc();
        });
}


findPoke.addEventListener('click', selectedPokemon)