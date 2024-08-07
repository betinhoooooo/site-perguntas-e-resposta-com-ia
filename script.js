const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " A IA pode aprender com dados?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: " IA pode aprender e melhorar seu desempenho com base em dados, como visto em sistemas de recomendação que ajustam suas sugestões com base no histórico de interações do usuário."
            },
            {
                texto: "não",
                afirmacao: " A IA não pode aprender sem dados; ela precisa de informações para treinar e melhorar seus algoritmos."
            }
        ]
    },
    {
        enunciado: " A IA pode sentir emoções?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: " A IA não pode sentir emoções da mesma forma que os humanos. Ela pode simular respostas emocionais com base em algoritmos, mas não experimenta emoções reais."
            },
            {
                texto: "não",
                afirmacao: " A IA não tem emoções, ela é apenas um 'robo' "
            }
        ]
    },   
    {
        enunciado: "A inteligência artificial pode aprender e se adaptar a novas informações sem intervenção humana?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "Alguns sistemas de IA, especialmente aqueles baseados em aprendizado de máquina, podem se adaptar a novas informações e melhorar seu desempenho de forma autônoma. Isso acontece porque eles são projetados para analisar grandes volumes de dados e ajustar seus algoritmos com base nos padrões que identificam. Por exemplo, um modelo de reconhecimento de imagem pode melhorar sua precisão ao processar novas imagens e ajustar seus parâmetros internos para refletir essas novas informações."
            },
            {
                texto: "não",
                afirmacao: "Nem toda inteligência artificial tem a capacidade de aprender e se adaptar sem intervenção humana. Muitos sistemas de IA funcionam de maneira bastante estática, realizando tarefas específicas com base em regras pré-definidas e não atualizam seu conhecimento ou comportamento sem a intervenção e a programação adicionais feitas por humanos. Esses sistemas não têm a capacidade de se modificar ou melhorar de forma independente."

            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
