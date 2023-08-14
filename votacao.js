const prompt = require('prompt-sync')();

var candidato_X,candidato_Y,candidato_Z,branco,nulo,encerrarVotacao;

candidato_X = 0;
candidato_Y = 0;
candidato_Z = 0;
branco = 0;
nulo = 0;

while(true){

    let voto = prompt("Escolha o seu Candidato: (X = 889, Y = 847, Z = 515) ou 0 para Branco: ");

    if(isNaN(voto) || voto ===""){
        console.log("Digite um numero, vote novamente")
        continue;

    }

    encerrarVotacao = prompt("Deseja encerrar a votação: s/n? ")

    

    voto = parseInt(voto);

    switch (voto){
    case 889:
        candidato_X++;
        break;
    case 847:
        candidato_Y++;
        break;
    case 515:
        candidato_Z++;
        break;
    case 0:
        branco++;
        break;
    default:
        nulo++;
        break;  
    }
    
    if(encerrarVotacao == "s"){
        break
    }
}

let vencedor = "";
let maiorVotos = Math.max(candidato_X,candidato_Y,candidato_Z,nulo);

if(candidato_X == candidato_Y || candidato_X == candidato_Z || candidato_Y == candidato_Z ){
    vencedor = "Empate"
}else if(maiorVotos === candidato_X){
    vencedor = "candidato X";
}else if(maiorVotos === candidato_Y){
    vencedor = "candidato Y";
}else if(maiorVotos === candidato_Z){
    vencedor = "candidato Z";
}else{
    vencedor = "nenhum vencedor, tem mais votos nulos"
}

console.log("Resultado das eleições");
console.log("candidato X: " + candidato_X + " votos");
console.log("candidato Y: " + candidato_Y + " votos");
console.log("candidato Z: " + candidato_Z + " votos");
console.log("votos em branco: " +  branco);
console.log("votos em nulos: " +  nulo);

console.log("Vencedor: " + vencedor);