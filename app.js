async function fetchAllPokemons() {
    const totalPokemons = 50; 
    const gridContainer = document.getElementById("pokemonGrid");
    gridContainer.innerHTML = ''; 

    for (let i = 1; i <= totalPokemons; i++) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await response.json();

            const imgDiv = document.createElement('div');
            const imgElement = document.createElement('img');
            imgElement.src = data.sprites.front_default;
            imgElement.alt = data.name;

            const nameElement = document.createElement('p');
            const a = document.createElement('a');

            a.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            a.href = `index1.html?id=${i}`;
            a.target = "_blank"; 
            nameElement.appendChild(a)
            imgDiv.appendChild(imgElement);
            imgDiv.appendChild(nameElement);
            gridContainer.appendChild(imgDiv);
        } catch (error) {
            console.error(`Error fetching Pokémon ${i}:`, error);
        }
    }
}

window.onload = fetchAllPokemons;