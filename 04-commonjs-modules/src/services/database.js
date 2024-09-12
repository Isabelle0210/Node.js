// exports default quer dizer que por padrão, o arquivo exporta apenas uma coisa.

exports.connectToDatabase = async (dataName) => {
    console.log(`Conectando ao banco de dados ${dataName}`)
};

exports.disconnectFromDatabase = async (dataName) => {
    // logica para desconectar do banco de dados
    console.log(`Desconectando do banco de dados ${dataName}`);
}


