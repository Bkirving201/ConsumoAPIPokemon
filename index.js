//Se crea una constante que guarde el contenedor hecho en HMTL para usalo en JS//
const DtsPokemon = document.querySelector('.container-poke') 

console.log("Hola si funciono")

// Petición de los datos de los pokemons conforme a su ID de dicho pokemon//
function TraerDatospkm (id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(respuesta =>respuesta.json())
    .then(datos => {
        CrarPkms(datos),
        console.log(datos);
    })
}

// De esta forma hacemos un bucle que permita traer todos los datos de los pokemon que pidamos //
function TraerPKMcantidad (number){
    for(let i = 1; i <= number; i++){
        TraerDatospkm(i);
    }
}

//Con esto creamos la lista de los pokemons, son la cración de HTML con la petición de JS
function CrarPkms (pokemon){




    


    // extrae los datos para crear los tipos de pkm que son 

    
        function creartypes (types){

            const typesContainer = document.createElement("div");
            typesContainer.classList.add("types-container");

                   

            for(let i = 0; i<1; i++){

                const tipo = types[i];


                const tiponame = document.createElement("p");
                tiponame.textContent = tipo.type.name;

                const tipoPKM = document.createElement('p')
                tipoPKM.textContent = "Type: ";

                
                //Codigo de colores acorde al pokemon 

                const colors = {
                    fire: '#FFA05D',
                    grass: '#8FD594',
                    electric: '#FFE43B',
                    water: '#3999FF',
                    ground: '#CAAC4D',
                    rock: '#90642D',
                    poison: '#9D5B9B',
                    bug: '#EAFD71',
                    dragon: '#97b3e6',
                    psychic: '#FF96B5',
                    flying: '#CDCDCD',
                    fighting: '#FF5D5D',
                    normal: '#FFFFFF',
                    ice: '#9DCFDD',
                    ghost: '#CCCCCC',
                    fairy: '#FFC0CB'

                }
                
                //Permite pintar cada carta del color dado acorde al tipo
                const tipocolor = pokemon.types[0].type.name;  
                const color = colors[tipocolor];
                carta.style.backgroundColor = color;

                // PONER IMG POR CADA TIPO 

                const icons = {
                    water: './img/types/water.png',
                    fire: '/img/types/fire.png',
                    grass: '/img/types/grass.png',
                    electric: '/img/types/electric.png',
                    ground: '/img/types/ground.png',
                    rock: '/img/types/rock.png',
                    poison: '/img/types/poison.png',
                    bug: '/img/types/bug.png',
                    dragon: '/img/types/dragon.png',
                    psychic: '/img/types/psychic.png',
                    flying: '/img/types/flying.png',
                    fighting: '/img/types/fight.png',
                    normal: '/img/types/normal.png',
                    ice: '/img/types/ice.png',
                    ghost: '/img/types/ghost.png',
                    fairy: '/img/types/fairy.png',
                }

                
                const pintaricon = document.createElement("img");
                pintaricon.classList.add("icon");
                pintaricon.src = icons[tipocolor];

                
                    
                //
                 
                typesContainer.appendChild(tipoPKM);
                typesContainer.appendChild(tiponame);
                typesContainer.appendChild(pintaricon);


                
                
                
    
            };

            return typesContainer;

        }



    // Aqui acaba traer los tipos de pokemons que son 


    //animaciones de la flip card, lados de cada carta

    const flipcarta = document.createElement('div');
    flipcarta.classList.add('flip-carta');

    const containercarta = document.createElement('div');
    containercarta.classList.add('container-carta');

    flipcarta.appendChild(containercarta); 

    // animacion de las flip card



    // Carta de la parte delantera los datos correpondientes 
    const carta = document.createElement('div');
    carta.classList.add('pokemon-block');


    //Integración de los cuerpos de la carta nueva 
    const cardheader = document.createElement("img");
    cardheader.classList.add("card-header");
    cardheader.src = "/img/4.webp";

    const cuerpo = document.createElement("div");
    cuerpo.classList.add("card-body");

    



    // PINTAR CADA POKEMON DE SU COLOR 

    const colorses = {
        fire: '#FFA05D',
        grass: '#8FD594',
        electric: '#FFE43B',
        water: '#3999FF',
        ground: '#CAAC4D',
        rock: '#90642D',
        poison: '#9D5B9B',
        bug: '#EAFD71',
        dragon: '#97b3e6',
        psychic: '#FF96B5',
        flying: '#CDCDCD',
        fighting: '#FF5D5D',
        normal: '#FFFFFF',
        ice: '#9DCFDD',
        ghost: '#CCCCCC',
        fairy: '#FFC0CB'

    }

    

    const contenersprite = document.createElement('div');
    contenersprite.classList.add('container-imagenpkm');

    const sprite = document.createElement('img');
    sprite.classList.add('imgtamaño')
    sprite.src = pokemon.sprites.front_default;


    //Este bloque pinta cada carta con un fondo del color correspondiente y un borde
    const fondocolor = pokemon.types[0].type.name;  
    const colorfondos = colorses[fondocolor];
    sprite.style.backgroundColor = colorfondos;
    sprite.style.border='solid'
    sprite.style.borderColor = colorfondos;
    sprite.style.borderWidth = '5px'
    
    //

    contenersprite.appendChild(sprite);



    const numero = document.createElement('p');
    numero.textContent = `#${pokemon.id.toString().padStart(3,0)}`;
    //Esto hace que los pokemons tengan digitos de 3 en sus ID

    const nombrePKM = document.createElement('p');
    nombrePKM.classList.add('name');
    nombrePKM.textContent = pokemon.name;




// Barra de Stats del pokemon


function progressBars(stats) {
    
    const statsContainer = document.createElement("div");
    statsContainer.classList.add("stats-container");
  
    for (let i = 0; i < 6; i++) {
      const stat = stats[i];
  
      const statPercent = stat.base_stat/2 + "%"; //Se divide para el tamaño de la barra
      const statContainer = document.createElement("stat-container");
      statContainer.classList.add("stat-container");
  
      const statName = document.createElement("p");
      statName.textContent = stat.stat.name;
  

      //Barra general de progreso
      const progress = document.createElement("div");
      progress.classList.add("progress");
  

      //Porcentaje de la barra de progreso
      const progressBar = document.createElement("div");
      progressBar.classList.add("nes-progress");
      progressBar.setAttribute("valor-actual", stat.base_stat);
      progressBar.setAttribute("valor-minimo", 0);
      progressBar.setAttribute("valor-maximo", 200);
      progressBar.style.width = statPercent;
  
      progressBar.textContent = stat.base_stat;
  
      progress.appendChild(progressBar);
      statContainer.appendChild(statName);
      statContainer.appendChild(progress);
      statsContainer.appendChild(statContainer);
    }
  
    
    return statsContainer;
  }

  //Mete dentro de un cuerpo general cada div
    cuerpo.appendChild(contenersprite);
    cuerpo.appendChild(numero);
    cuerpo.appendChild(nombrePKM);


  
    //Complementos de la carta deforma frontal, son los elementos que posee
    carta.appendChild(cardheader);
    carta.appendChild(cuerpo);
    carta.appendChild(creartypes(pokemon.types));

    //AQUI ACABA

    const cartatrasera = document.createElement('div');
    cartatrasera.classList.add('pokemon-block-back');
    cartatrasera.appendChild(progressBars(pokemon.stats));

    const imgfondo = document.createElement('img')
    imgfondo.classList.add('imagenfondo');
    cartatrasera.appendChild(imgfondo);


    // AQUI SE ARREGLA EL ORDEN DONDE SE MADAN A TRAER OS DATOS
    containercarta.appendChild(carta);
    containercarta.appendChild(cartatrasera);
    DtsPokemon.appendChild(flipcarta);


}

// Barra de progres con las estadisticas del pokemon 



TraerPKMcantidad(151) 
//Esto controla la cantidad de pokemons que queremos traer