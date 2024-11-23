document.addEventListener("DOMContentLoaded", function() {
    // Função para atualizar a visibilidade dos campos de documentos
    const tipoServicoSelect = document.getElementById("tipo-servico");

    // Função para verificar o valor selecionado
    function atualizarCampos() {
        const tipoServico = tipoServicoSelect.value;

        // Mostrar ou esconder campos com base no tipo de serviço
        const campoPJ = document.getElementById("campo-pj");
        const campoMEI = document.getElementById("campo-mei");
        const campoCNPJ = document.getElementById("campo-cnpj");

        if (tipoServico === "pj") {
            campoPJ.style.display = "block";
            campoMEI.style.display = "none";
            campoCNPJ.style.display = "none";
        } else if (tipoServico === "mei") {
            campoMEI.style.display = "block";
            campoPJ.style.display = "none";
            campoCNPJ.style.display = "none";
        } else if (tipoServico === "empresa" || tipoServico === "outros") {
            campoCNPJ.style.display = "block";
            campoMEI.style.display = "none";
            campoPJ.style.display = "none";
        } else {
            campoPJ.style.display = "none";
            campoMEI.style.display = "none";
            campoCNPJ.style.display = "none";
        }
    }

    // Chamando a função ao carregar a página para garantir que o estado inicial seja adequado
    atualizarCampos();

    // Adicionando o evento de mudança ao campo "tipo-servico"
    tipoServicoSelect.addEventListener("change", atualizarCampos);
});

// Selecionar todos os cards
const cards = document.querySelectorAll('.card');

// Adicionar um evento de clique a cada card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Alternar a classe 'selected' para indicar a seleção
        card.classList.toggle('selected');
        
        // Simular o estado do checkbox
        const checkbox = card.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked; // Alterna o estado do checkbox
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tipoServico = document.getElementById('tipo-servico');
    const campoPJ = document.getElementById('campo-pj');
    const campoMEI = document.getElementById('campo-mei');
    const campoCNPJ = document.getElementById('campo-cnpj');

    // Atualiza os campos quando o tipo de contratante muda
    tipoServico.addEventListener('change', function () {
        const valorSelecionado = tipoServico.value;

        // Ocultar campos por padrão
        campoPJ.style.display = 'none';
        campoMEI.style.display = 'none';
        campoCNPJ.style.display = 'none';

        // Mostrar campos baseados no tipo de contratante
        if (valorSelecionado === 'pj') {
            campoPJ.style.display = 'block';
            campoCNPJ.style.display = 'block'; // Exibe CNPJ para PJ
        } else if (valorSelecionado === 'mei') {
            campoMEI.style.display = 'block';
            campoCNPJ.style.display = 'block'; // Exibe CNPJ para MEI
        }
    });
});

