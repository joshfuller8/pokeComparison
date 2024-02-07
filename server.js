const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('getPokemon');
});

app.post('/compare', async (req, res) => {
    const { pokemon1, pokemon2 } = req.body;
    const poke1 = await getPokemonData(pokemon1);
    const poke2 = await getPokemonData(pokemon2);
    res.render('compare', { poke1, poke2 });
});


async function getPokemonData(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch data for ${pokemonName}, check your spelling`);
    }
    return response.json();
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
