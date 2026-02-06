🛡️ Classificador de Nível de Herói - RPG

Este projeto é um desafio prático desenvolvido em JavaScript para classificar o nível de um herói de RPG com base na sua quantidade de Experiência (XP).
🚀 Tecnologias Utilizadas
VsCode, Node.js: Ambiente de execução.
Prompt-sync: Biblioteca para captura de entradas no terminal. Documentação do npm.
🧠 Conceitos Aplicados
1. Variáveis e Constantes
O projeto utiliza variáveis de diferentes tipos para gerenciar o estado do jogo:
nomeHeroi: Armazena o nome do personagem (String).
quantidadeXPExperiencia: Armazena os pontos de experiência (Number).
nivelExperiencia: Define a patente do herói após a validação.
mensagemEntrada: Uma constante que padroniza o texto de solicitação de dados.
2. Estruturas de Decisão
Para determinar o nível do herói (de Ferro até Radiante), utilizei uma estrutura robusta de if / else if / else baseada em operadores lógicos de comparação (>=, <=, <).
3. Laços de Repetição (Loops)
O código demonstra o uso de diferentes tipos de loops:
do...while: Garante que o jogo execute pelo menos uma vez e permite que o usuário decida se quer continuar jogando ao final.
while: Utilizado para validação de dados, impedindo que o programa aceite valores de XP negativos ou entradas inválidas na confirmação de saída.
