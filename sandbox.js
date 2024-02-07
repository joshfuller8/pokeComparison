<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pokémon Comparison</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .pokemon-container { display: flex; justify-content: space-around; margin-top: 20px; }
        .pokemon { text-align: center; }
        .stat-higher { color: green; }
        .stat-lower { color: red; }
        img { width: 150px; height: auto; }
        .total-stats { font-weight: bold; } /* Style for total stats */
    </style>
</head>
<body>
    <h1>Comparison Results</h1>
    <div class="pokemon-container">
        <% let totalStats1 = 0; let totalStats2 = 0; %>
        <% poke1.stats.forEach(stat => totalStats1 += stat.base_stat); %>
        <% poke2.stats.forEach(stat => totalStats2 += stat.base_stat); %>
        
        <div class="pokemon">
            <h2><%= poke1.name %></h2>
            <img src="<%= poke1.sprites.front_default %>" alt="Image of <%= poke1.name %>">
            <% poke1.stats.forEach((stat, index) => { %>
                <p class="<%= stat.base_stat > poke2.stats[index].base_stat ? 'stat-higher' : 'stat-lower' %>">
                    <%= stat.stat.name %>: <%= stat.base_stat %>
                </p>
            <% }); %>
            <p class="total-stats <%= totalStats1 > totalStats2 ? 'stat-higher' : 'stat-lower' %>">Total Stats: <%= totalStats1 %></p>
        </div>

        <div class="pokemon">
            <h2><%= poke2.name %></h2>
            <img src="<%= poke2.sprites.front_default %>" alt="Image of <%= poke2.name %>">
            <% poke2.stats.forEach((stat, index) => { %>
                <p class="<%= stat.base_stat > poke1.stats[index].base_stat ? 'stat-higher' : 'stat-lower' %>">
                    <%= stat.stat.name %>: <%= stat.base_stat %>
                </p>
            <% }); %>
            <p class="total-stats <%= totalStats2 > totalStats1 ? 'stat-higher' : 'stat-lower' %>">Total Stats: <%= totalStats2 %></p>
        </div>
    </div>

</body>
</html>
