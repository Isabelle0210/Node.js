const player1 = { //Aqui estamos criando um objeto chamado player1 com 3 propriedades (NOME, VELOCIDADE e MANOBRABILIDADE) e seus respectivos valores (Mario, 4 e 3).
    NOME :"Mario",
    VELOCIDADE :4,
    MANOBRABILIDADE :3,
    PODER :3,
    PONTOS :0
};

const player2 ={
    NOME :"Luigi",
    VELOCIDADE :3,
    MANOBRABILIDADE :4,
    PODER :4,
    PONTOS :0
}

//async estou pedindo para o JavaScript esperar a função rollDice() terminar de ser executada para depois continuar com o código.
async function rollDice(){ //Aqui estamos criando uma função chamada rollDice que retorna um número aleatório entre 1 e 6.
    return Math.floor(Math.random() * 6) + 1; //Math.floor arredonda o número para baixo e Math.random() * 6 gera um número aleatório entre 0 e 5.
}

async function getRandomBlock (){
    let random = Math.random()//sorteia um valor aleatoria de 0 a 1
    let result 

    switch (true) {
        case random < 0.33://caso o valor que esteja dentro do random for menor que 0.33
            result = 'RETA'//a variável result vai receber o valor 'RETA'
            break;
        case random < 0.66:
            result = 'CURVA'
            break;
        default:
            result ='CONFRONTO'
    }
    return result 
}

///parte do desafio
async function powerHability(){ 
    let randomPower = Math.random() 
    let resultPower 

    switch (true) {
        case randomPower < 0.53:
            resultPower = "CASCO"
            break;
        default:
            resultPower = "BOMBA"
    }
    return resultPower
}

async function  logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        let block = await getRandomBlock();
        console.log(`Bloco sorteado: ${block}`);

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let TotalTestSkill1 = 0;
        let TotalTestSkill2 = 0;

        if (block === 'RETA') {
            TotalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            TotalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
        } else if (block === 'CURVA') {
            TotalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            TotalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
        } else if (block === 'CONFRONTO') {
            let dicePower1 = await rollDice();
            let dicePower2 = await rollDice();

            let powerHability1 = await powerHability();
            let powerHability2 = await powerHability();

            let powerResult1 = dicePower1 + character1.PODER;
            let powerResult2 = dicePower2 + character2.PODER;

            console.log(`${character1.NOME} confrontou ${character2.NOME} com ${powerHability1} vs ${powerHability2}! 🥊`);

            await logRollResult(character1.NOME, "poder", dicePower1, character1.PODER);
            await logRollResult(character2.NOME, "poder", dicePower2, character2.PODER);

            // Aplicar efeitos dos poderes usados no confronto
            if (powerHability1 === "CASCO") {
                console.log(`${character1.NOME} usou Casco! ${character2.NOME} perdeu 1 ponto!`);
                character2.PONTOS = Math.max(0, character2.PONTOS - 1);
            } else if (powerHability1 === "BOMBA") {
                console.log(`${character1.NOME} usou Bomba! ${character2.NOME} perdeu 2 pontos!`);
                character2.PONTOS = Math.max(0, character2.PONTOS - 2);
            }

            if (powerResult1 > powerResult2) {
                console.log(`${character1.NOME} venceu o confronto!`);
            } else if (powerResult2 > powerResult1) {
                console.log(`${character2.NOME} venceu o confronto!`);
            } else {
                console.log(`Empate! Ninguém perdeu pontos!`);
            }
        }

        if (TotalTestSkill1 > TotalTestSkill2) {
            character1.PONTOS++;
            console.log(`🏆 ${character1.NOME} venceu a rodada e marcou 1 ponto!`);
        } else if (TotalTestSkill2 > TotalTestSkill1) {
            character2.PONTOS++;
        }

        console.log(`___________________________________________________`);
    }
}



async function declareWinner(character1, character2) {
    console.log(`🏆🎉 O grande vencedor é... 🎉🏆`);
    if (character1.PONTOS > character2.PONTOS) {
        console.log(`\n ${character1.NOME}! 🥇🏆🎉 Parabéns! 🎉🏆🥇`);
    } else if (character2.PONTOS > character1.PONTOS) {
        console.log(`\n ${character2.NOME}! 🥇🏆🎉 Parabéns! 🎉🏆🥇`);
    } else {
        console.log(`Empate! 🤝🏁🎉 Parabéns para os dois! 🎉🏁🤝`);
    }
    console.log(`${character1.NOME}: ${character1.PONTOS} pontos`);
    console.log(`${character2.NOME}: ${character2.PONTOS} pontos\n`);
    console.log(`🏁🏆 Fim de corrida! 🏆🏁\n`);
}

(async function main(){
    console.log(
        `🏁🚨Corida entre ${player1.NOME} e ${player2.NOME}...\n`
    );

    await playRaceEngine(player1, player2);//essa função vai esperar a função playRaceEngine() terminar de ser executada para depois continuar com o código.
    await declareWinner(player1, player2);
})() //aqui estamos fazendo uma função auto-executável, ou seja, a função main() será executada assim que o código for carregado.(auto Invoke Function)

//funções podem chamar outras funcões, e assim por diante. Isso é chamado de chamada de função aninhada.

