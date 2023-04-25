let baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
let i = 1;

let titulo = document.createElement("h1");//criando a tag h1
titulo.innerHTML = "Meus Pokemons";//inserindo conteúdo a tag 
titulo.style.textAlign = "center";//alinhando o texto ao centro
document.body.appendChild(titulo);//adicionando a tag h1 com nome titulo ao body do document

document.body.style.boxSizing = "borderbox";

//Frase "digite o numero do pokemon"
let frase = document.createElement("h2");
frase.innerHTML = 'Digite o numero do seu pokemon';
document.body.appendChild(frase);

let divPokemon = document.createElement("div");
divPokemon.classList.add("mostra_pokemon");

//input
let input = document.createElement("input");
document.body.appendChild(input);

//botao para mostrar o pokemon
let botao = document.createElement("button");
botao.innerText = 'Click';
document.body.appendChild(botao);

divPokemon.appendChild(frase);
divPokemon.appendChild(input);
divPokemon.appendChild(botao);

botao.addEventListener('click', ()=>{
    let mostraPokemon = document.createElement("div");
    mostraPokemon.classList.add("card");

    let pokemon = document.createElement("img");
    pokemon.src = baseURL + input.value + ".png";

    let numeroPokemon = document.createElement("span");
    numeroPokemon.innerHTML = "#" + input.value;

    if(input.value < 0 || input.value > 1008){
        let frase_erro = document.createElement("p");
        frase_erro.innerHTML = "Não existe ou não temos esse pokemon na lista";
        mostraPokemon.appendChild(frase_erro);
    }
    else if(input.value == ""){
        let frase_erro = document.createElement("p");
        frase_erro.innerHTML = "Por favor, insira um valor";
        mostraPokemon.appendChild(frase_erro);
    }
    else{
        mostraPokemon.appendChild(pokemon);
        mostraPokemon.appendChild(numeroPokemon);
    }
    document.body.appendChild(mostraPokemon);
    divPokemon.appendChild(mostraPokemon);
});

document.body.appendChild(divPokemon);

while(i <= 1008){
    let div = document.createElement("div");//cria a tag div
    div.classList.add('caixa_pokemon');//adiciona a classe caixa_pokemon a div criada
    

    let img = document.createElement("img");//cria a tag img
    img.src = baseURL+ i + ".png";//adiciona a imagem ao atributo src da tag img
    

    let idPokemon = document.createElement("p");//cria a tag p
    idPokemon.innerHTML = "#"+ i;//adiciona o numero do pokemon a tag p

    div.appendChild(img);//adiciona o img a div
    div.appendChild(idPokemon);//adiciona a tag p de nome idPokemon à tag div de nome div
    document.body.appendChild(div);//adiciona a div ao body

    i++;
}