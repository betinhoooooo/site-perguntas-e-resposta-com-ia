# 2º Trimestre
### **Funções: criando uma missão sobre Inteligência Artificial**

-   Crie uma lista de objetos usando JavaScript
-   Use funções para dividir problemas grandes em problemas menores
-   Aplique métodos de JavaScript para manipular o DOM
-   Reflita sobre o uso de Inteligência Artificial em suas tarefas diárias

∙ Na **primeira etapa**, vamos pensar em todos os tópicos que nos interessam dentro do tema escolhido.
Aqui não é a hora de filtrar ideias. Todos os tópicos que vierem à cabeça são bem-vindos e devem ser adicionados ao brainstorm, sem necessidade de descrevê-lo em profundidade. Basta um post-it ou uma caixinha de texto com uma breve notação da ideia.
Uma vez que tivemos exaurido nossa criatividade e colocado no brainstorm todas as ideias sobre o tema escolhido, votaremos, nas melhores ideias.

∙ Na **segunda etapa**, em uma folha ou página separada da nossa ferramenta digital, vamos aprofundar os tópicos mais votados na etapa anterior.
Agora, sim, pensaremos nas breves descrições que fizemos de cada tópico, detalhando-os. Podemos pensar em mais informações que conhecemos sobre o assunto, fazer pesquisas rápidas sobre curiosidades daquele tema, colocar detalhes do porquê seria interessante trabalhar com aquele tópico. 
Feito isso, votaremos novamente nas ideias de que mais gostarmos, escolhendo um ou dois temas para levar para a próxima etapa.

∙ Na **terceira etapa**, vamos elaborar perguntas.
Tendo uma descrição um pouco mais aprofundada das nossas possibilidades de tópicos e ideias, elaboraremos perguntas sobre nosso tema.
Para não estender demais e deixar o brainstorm confuso, elaboraremos três perguntas sobre os temas.
Caso você tenha selecionado apenas um tema para essa terceira etapa, já podemos seguir para o próximo passo. 
Se ainda estiver com dois temas, essa é a hora de decidir qual será a opção final para nossa missão.

**Por último**, com o tema escolhido e as três perguntas elaboradas, o desafio agora é criar alternativas para nossas perguntas. 
Cada uma das três perguntas deve ter, no mínimo, duas alternativas que representam ações a serem tomadas em nossa missão.
Cada uma dessas ações deve estar relacionada a uma afirmação, que aparecerá no fim da nossa missão, depois que todas as decisões forem tomadas.

Assim, concluímos nosso brainstorm.

### Agora com tudo definido você vai preencher no arquivo script.js dentro da const perguntas os dados levantados no seu brainstorm dentro dele tem uma estrutura pronta como o exemplo abaixo.

    const caixaPrincipal = document.querySelector(".caixa-principal");
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");
    
    const perguntas = [
        {
            enunciado: "Enunciado principal",
            alternativas: [
                {
                    texto: "Texto 1",
                    afirmacao: "Afirmação 1 "
                },
                {
                    texto: "Texto 2",
                    afirmacao: "Afirmação 2"
                }
            ]
        },
        {
            enunciado: "Enunciado 2",
            alternativas: [
                {
                    texto: "texto botão 1",
                    afirmacao: "Afirmação do texto botão 2"
                },
                {
                    texto: "texto botão 2",
                    afirmacao: "Afirmação do texto botão 2"
                }
            ]
        },
        {
            enunciado: "Enunciado 3",
            alternativas: [
                {
                    texto: "texto botão 1",
                    afirmacao: "Afirmação do texto botão 1"
                },
                {
                    texto: "texto botão 2",
                    afirmacao: "Afirmação do texto botão 2"
                }
            ]
        },
        {
            enunciado: "Enunciado 4",
            alternativas: [
                {
                    texto: "texto botão 1",
                    afirmacao: "Afirmação do texto botão 1"
                },
                {
                    texto: "texto botão 2",
                    afirmacao: "Afirmação do texto botão 2"
                }
            ]
        },
        {
            enunciado: "Enunciado 5",
            alternativas: [
                {
                    texto: "texto botão 1",
                    afirmacao: "Afirmação do texto botão 1"
                },
                {
                    texto: "texto botão 2",
                    afirmacao: "Afirmação do texto botão 2"
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







**Exemplo de "enunciado, texto, afirmação"**


            enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
            alternativas: 
                
                    texto: "Isso é assustador!",
                    afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "

                    texto: "Isso é maravilhoso!",
                    afirmacao: "Quis saber como usar IA no seu dia a dia."

            enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
            alternativas: 
                
                    texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                    afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."

                    texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                    afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."

            enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
            alternativas: 
                
                    texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                    afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."

                    texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                    afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."

            enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
            alternativas: 
                
                    texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                    afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."

                    texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                    afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"

            enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
            alternativas: 
                
                    texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                    afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."

                    texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                    afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "


