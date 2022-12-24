const axios = require('axios');
const { Type } = require("../db");

const getAllTypes = async() => {
    let allTypes = (await axios('https://pokeapi.co/api/v2/type')).data.results;
    allTypes = allTypes.map(e => e.name);
    
    allTypes.forEach( type => {
        Type.findOrCreate({
            where: { name: type }
        })
    })

    console.log("Types loaded into DB succesfully!")
    return await Type.findAll();
}

module.exports = {
    getAllTypes
}