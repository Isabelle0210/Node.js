
//todas as funções que lidam com o produto

const productType={
    version:"digital",
    type:"software",
    taxas:0.2,
}

async function getFullName(codeId, productName){
    
    console.log(`O produto ${productName} tem o código ${codeId}`);	
    await doBreakLine();
}

async function doBreakLine(){
    console.log("\n")
}

async function getProductsLabel(productName){
    console.log(`Esse produto é o/a ${productName}`);	 
}

//aqui estou falando para exportar a função getFullName para que ela possa ser usada em outros arquivos
module.exports = {
    getFullName,
    getProductsLabel,
    productType,
}