const { getFullName, productType} = require('./services/products'); // Importando a função getFullName e o objeto productType do arquivo products.js
const config = require('./services/config');
const database = require('./services/database');
async function main() {
    console.log('Carinho de compras');
    
    getFullName(1, 'Livro de JavaScript');
    

    console.log(config.client.device);
    database.connectToDatabase('MongoDB');
    database.disconnectFromDatabase('MongoDB');
}

main();