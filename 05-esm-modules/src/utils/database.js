async function connectToDatabase(dataName) {
    //logica de conexao
    console.log(`Conectado ao banco de dados ${dataName}`);
}
async function disconnectToDatabase(dataName) {
    //logica de conexao
    console.log(`Desconectado ao banco de dados ${dataName}`);
}

export default connectToDatabase;