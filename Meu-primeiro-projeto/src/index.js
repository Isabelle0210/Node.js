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

async function  logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function playRaceEngine (character1, character2) {
    for( let round = 1 ; round <=5; round++){ //Aqui estamos criando um loop que vai rodar 5 vezes. 
        console.log(`🏁 Rodada ${round}`)

        // sortear bloco
        let block = await getRandomBlock()//aqui estamos chamando a função getRandomBlock() e armazenando o valor retornado em block. 
        console.log(`Bloco sorteado: ${block}`)

        // rolar os dado
    //await serve para a função esperar a função rollDice() terminar de ser executada para depois continuar com o código.
    let diceResult1 = await rollDice () //aqui estamos chamando a função rollDice() e armazenando o valor retornado em diceResult1.
    let diceResult2 = await rollDice ()
    
    //teste de habilidades
    let TotalTestSkill1 = 0
    let TotalTestSkill2 = 0

    if (block === 'RETA'){
        TotalTestSkill1 = diceResult1 + character1.VELOCIDADE
        TotalTestSkill2 = diceResult2 + character2.VELOCIDADE //vai ser o resultado do dado aleatório + a velocidade do personagem

        await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE)
        await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE)
    }else if (block === 'CURVA'){
        TotalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
        TotalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE

        await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE)
        await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE)

    } else if (block === 'CONFRONTO') {
        let powerResult1 = await rollDice() + character1.PODER;
        let powerResult2 = await rollDice() + character2.PODER;
    
        console.log(`${character1.NOME} confrontou ${character2.NOME}!🥊`);
    
        await logRollResult(character1.NOME, "poder", powerResult1 - character1.PODER, character1.PODER);
        await logRollResult(character2.NOME, "poder", powerResult2 - character2.PODER, character2.PODER);

    
        if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
            console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto!`);
            character2.PONTOS--;
        }
    
        if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
            console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto!`);
            character1.PONTOS--;
        }
    
        console.log(powerResult1 === powerResult2 ? `Empate! Ninguém perdeu pontos!` : "");
    }
    

    //verificar quem ganhou a rodada

    if (TotalTestSkill1 > TotalTestSkill2){ //se o personagem 1 tiver mais pontos que o personagem 2 ele ganha a rodada
        character1.PONTOS ++
        console.log(`🏆 ${character1.NOME} venceu a rodada e marcou 1 ponto!`)
    }else if(TotalTestSkill2> TotalTestSkill1){//se não o personagem 2 ganha a rodada
        character2.PONTOS ++
        
    }
    console.log(`___________________________________________________`)
    
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

