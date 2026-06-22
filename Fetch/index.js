// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response=> {
//     if(!response.ok){
//         throw new Error("could not fetch resources");
//     }
//     return response.json();
// })
// .then(data=>console.log(data.name))
// .catch(error=>console.error(error));

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase().trim();
        
        if(!pokemonName){
            alert("Please enter a pokemon name");
            return;
        }
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        
        const data = await response.json();
        const pokemonSprite = data.sprites?.front_default;
        
        if(!pokemonSprite){
            throw new Error("No sprite available for this pokemon");
        }
        
        const imageElement = document.getElementById("pokemanSprite");
        
        // Extra safety check
        if(!imageElement){
            throw new Error("Image element not found in HTML");
        }
        
        imageElement.src = pokemonSprite;
        imageElement.style.display = "block";
        
    } catch(error){
        console.error(error);
        alert(error.message); // Show user-friendly error
    }
}