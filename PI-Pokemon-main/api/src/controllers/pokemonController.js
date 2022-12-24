const axios = require('axios');
const { Pokemon, Type } = require("../db");

const getApiInfo = async () => {
    const apiUrl = (await axios('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40')).data.results;
    const apiInfo = [];

    for (let pokemonInfo of apiUrl) {
        let { id, name, stats, height, weight, sprites, types } = (await axios(pokemonInfo.url)).data;

        types = types.map(e => e.type.name);
        const hp = stats.find(e => e.stat.name === "hp").base_stat;
        const attack  = stats.find(e => e.stat.name === "attack").base_stat;
        const defense  = stats.find(e => e.stat.name === "defense").base_stat;
        const speed  = stats.find(e => e.stat.name === "speed").base_stat;

        apiInfo.push({
            id,
            name,
            hp,
            attack,
            defense,
            speed, 
            height, 
            weight,
            "image": {
                "default": sprites.front_default,
                "animated": sprites.versions["generation-v"]["black-white"].animated.front_default,
            },
            types,
        });
    }
    return apiInfo;
}

const getDbInfo = async () => {
    return await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
}

const getAllPokemons = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

module.exports = {
    getAllPokemons,
}