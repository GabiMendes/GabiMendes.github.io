const promptElement = document.getElementById("prompt");
const commandInput = document.getElementById("commandInput");
const outputElement = document.getElementById("output");
const history = [];

const commands = {
    ajuda: "Comandos válidos: sobre mim, onde me encontrar?, projetos, ajuda",
    "sobre mim": `Atuo na área de tecnologia como Desenvolvedora Back-end, nos produtos Globo. Como desenvolvedora, aprimorei minhas habilidades em C, Java, Python, Go, Ruby e JavaScript, trabalhando em sistemas complexos e de alta performance. Também tenho obtido experiência em Typescript e Next.js. Além disso, tenho conhecimento básico de linguagens mobile, como Kotlin e Swift, e possuo, também, familiaridade no desenvolvimento front-end com JavaScript, CSS e HTML. Minha experiência anterior como Analista de Infraestrutura na Bradesco Seguros me proporcionou experiência em atualização de máquinas virtuais e práticas de segurança. Assim como proporcionou, também, contato com competências de nuvem, como a Azure. Também tenho experiência em modelagem de projetos, desde levantamentos de requisitos até o uso de linguagens de modelagem como UML e métodos ágeis, complementando minha habilidade em elaborar documentações técnicas detalhadas. Seja bem-vindo ao meu portfólio :) Lembre-se, é interativo, fique a vontade, viu?`,
    "onde me encontrar?": "https://www.linkedin.com/in/gabriela-marques-mendes/",
    projetos: "https://github.com/GabiMendes?tab=repositories",
};

function processCommand(command) {
    const output = commands[command.toLowerCase()] || "<span class='error'>CommandNotFoundException<br>Comando inválido. Digite 'ajuda' para ver os comandos disponíveis. </span>";
    history.push({ command, output });
    return output;
}

commandInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const command = commandInput.value.trim();
        const output = processCommand(command);
        outputElement.innerHTML += `<p>${promptElement.innerText} ${command}</p><p>${output}</p>`;
        commandInput.value = "";
    }
});