const prompt = require('prompt-sync')(); 


let nomeHeroi = " "
let quantidadeXPExperiencia = 0
let nivelExperiencia = " "
let continuarJogo = "s"

const mensagemEntrada = "Digite a quantidade de XP de experiência do seu herói: "



console.log("Bem-vindo ao jogo de RPG!")

do{
    nomeHeroi = prompt("\n\nDigite o nome do seu herói: ")
    quantidadeXPExperiencia = parseInt(prompt(mensagemEntrada))

    while(quantidadeXPExperiencia<0){

        console.log("A quantidade de XP de experiência não pode ser negativa. Por favor, digite um valor válido.")
        quantidadeXPExperiencia = parseInt(prompt(mensagemEntrada))
    }
    
    if(quantidadeXPExperiencia < 1000){
        nivelExperiencia = "Ferro"
    } else if(quantidadeXPExperiencia >= 1001 && quantidadeXPExperiencia <= 2000){
        nivelExperiencia = "Bronze"
    } else if(quantidadeXPExperiencia >= 2001 && quantidadeXPExperiencia <= 5000){
        nivelExperiencia = "Prata"
    } else if(quantidadeXPExperiencia >= 5001 && quantidadeXPExperiencia <= 7000){
        nivelExperiencia = "Ouro"
    } else if(quantidadeXPExperiencia >= 7001 && quantidadeXPExperiencia <= 8000){
        nivelExperiencia = "Platina"   
    } else if(quantidadeXPExperiencia >= 8001 && quantidadeXPExperiencia <= 9000){
        nivelExperiencia = "Ascendente"
    } else if(quantidadeXPExperiencia >= 9001 && quantidadeXPExperiencia <= 10000){
        nivelExperiencia = "Imortal"
    } else {
        nivelExperiencia = "Radiante"
    }

    console.log("\nO Herói de nome " + nomeHeroi + " está no nível de " +nivelExperiencia)
    continuarJogo = prompt("\nDeseja continuar jogando? (s/n)").toLowerCase()

    while(continuarJogo !== "s" && continuarJogo !== "n"){
        continuarJogo = prompt("\n\nEntrada inválida. Por favor, digite 's' para sim ou 'n' para não: ").toLowerCase()
    }

}while(continuarJogo === "s")




console.log("Fim de jogo")
