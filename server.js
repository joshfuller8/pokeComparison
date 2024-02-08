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
    try {
        const { pokemon1, pokemon2 } = req.body;
        const poke1 = await getPokemonData(pokemon1);
        const poke2 = await getPokemonData(pokemon2);

        // Check if either Pokémon data is null and render an error message if so
        if (!poke1 || !poke2) {
            const errorMessage = `Could not find data for ${!poke1 ? pokemon1 : ''} ${!poke2 ? pokemon2 : ''}. Please check the spelling and try again.`;
            console.error(errorMessage);
            res.render('error', { message: errorMessage });
            return;
        }

        res.render('compare', { poke1, poke2 });
    } catch (error) {
        // Log the error
        console.error('An error occurred during comparison:', error);
        // Render an error page or send a response with the error message
        res.render('error', { message: 'An unexpected error occurred. Please try again.' });
    }
});




async function getPokemonData(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            // Instead of throwing an error, return null or a custom error object
            return null; // Indicates that the Pokémon was not found
        }
        return response.json();
    } catch (error) {
        // Log the error for server-side debugging
        console.error(`An error occurred while fetching data for ${pokemonName}:`, error);
        return null; // Return null to indicate an error occurred
    }
}


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
