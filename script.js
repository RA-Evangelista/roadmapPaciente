document.addEventListener('DOMContentLoaded', () => {

    // --- O "CÉREBRO": ESTRUTURA DE DADOS DO MAPA ---
    const mapaFluxo = {
        'recepcao': {
            titulo: 'Recepção', icone: 'fa-clipboard-list', top: '2%', left: '50%',
            imagem: 'https://placehold.co/600x400/007bff/white?text=Balcão+de+Atendimento',
            descricao: 'Bem-vindo! Na recepção, faremos seu registro (BAM). Após o cadastro, você será direcionado para o próximo passo.',
            proximasEtapas: [
                { texto: 'Paciente Grave (Emergência)', proximaEtapa: 'sala-vermelha' },
                { texto: 'Ir para Classificação de Risco', proximaEtapa: 'classificacao' },
                { texto: 'Ir para Serviço Social', proximaEtapa: 'servico-social' }
            ]
        },
        'classificacao': {
            titulo: 'Classificação', icone: 'fa-heart-pulse', top: '15%', left: '50%',
            imagem: 'https://placehold.co/600x400/ffc107/white?text=Aferindo+Pressão',
            descricao: 'Um enfermeiro irá aferir seus sinais vitais para definir a prioridade do seu atendimento (Vermelho, Laranja, Amarelo, Verde ou Azul).',
            proximasEtapas: [
                { texto: 'Ir para Clínica Médica', proximaEtapa: 'clinica-medica' },
                { texto: 'Ir para Pediatria', proximaEtapa: 'clinica-pediatrica' },
                { texto: 'Ir para Odontologia', proximaEtapa: 'odontologia' }
            ]
        },
        'servico-social': {
            titulo: 'Serviço Social', icone: 'fa-users', top: '15%', left: '15%',
            imagem: 'https://placehold.co/600x400/17a2b8/white?text=Conversa+e+Apoio',
            descricao: 'A assistência social oferece suporte e orientação. Caso precise de avaliação médica, você será orientado a retornar à recepção.',
            proximasEtapas: [
                { texto: 'Receber Alta Administrativa', proximaEtapa: 'alta' },
                { texto: 'Retornar à Recepção', proximaEtapa: 'recepcao' }
            ]
        },
        'sala-vermelha': {
            titulo: 'Sala Vermelha', icone: 'fa-kit-medical', top: '15%', left: '85%',
            imagem: 'https://placehold.co/600x400/dc3545/white?text=Atendimento+de+Emergência',
            descricao: 'Você está na sala de emergência. A equipe está focada na sua estabilização até a melhora do quadro ou transferência.',
            proximasEtapas: [
                { texto: 'Transferir para Observação', proximaEtapa: 'sala-amarela' }
            ]
        },
        'clinica-medica': {
            titulo: 'Clínica Médica', icone: 'fa-stethoscope', top: '30%', left: '20%',
            imagem: 'https://placehold.co/600x400/28a745/white?text=Consulta+Médica',
            descricao: 'O médico irá avaliar seu caso e definir a melhor conduta.',
            proximasEtapas: [
                { texto: 'Retirar Medicação na Farmácia', proximaEtapa: 'farmacia' },
                { texto: 'Ir para Medicação / Coleta', proximaEtapa: 'medicacao-coleta' },
                { texto: 'Realizar Raio-X', proximaEtapa: 'raio-x' },
                { texto: 'Alta com Encaminhamento', proximaEtapa: 'alta-referenciada' }
            ]
        },
        'clinica-pediatrica': {
            titulo: 'Pediatria', icone: 'fa-child', top: '30%', left: '50%',
            imagem: 'https://placehold.co/600x400/fd7e14/white?text=Consulta+Pediátrica',
            descricao: 'O pediatra irá avaliar o caso da criança e definir a melhor conduta.',
            proximasEtapas: [
                { texto: 'Retirar Medicação na Farmácia', proximaEtapa: 'farmacia' },
                { texto: 'Ir para Medicação / Coleta', proximaEtapa: 'medicacao-coleta' },
                { texto: 'Realizar Raio-X', proximaEtapa: 'raio-x' },
                { texto: 'Alta com Encaminhamento', proximaEtapa: 'alta-referenciada' }
            ]
        },
        'odontologia': {
            titulo: 'Odontologia', icone: 'fa-tooth', top: '30%', left: '80%',
            imagem: 'https://placehold.co/600x400/6610f2/white?text=Consulta+Odontológica',
            descricao: 'O dentista irá avaliar seu caso e definir a melhor conduta.',
            proximasEtapas: [
                { texto: 'Retirar Medicação na Farmácia', proximaEtapa: 'farmacia' },
                { texto: 'Ir para Medicação na UPA', proximaEtapa: 'medicacao-coleta' },
                { texto: 'Alta com Encaminhamento', proximaEtapa: 'alta-referenciada' }
            ]
        },
        'medicacao-coleta': {
            titulo: 'Medicação', icone: 'fa-syringe', top: '45%', left: '30%',
            imagem: 'https://placehold.co/600x400/20c997/white?text=Aplicação+de+Medicação',
            descricao: 'A equipe de enfermagem irá administrar sua medicação e/ou coletar exames, se solicitado.',
            proximasEtapas: [
                { texto: 'Aguardar Reavaliação', proximaEtapa: 'retorno' }
            ]
        },
         'raio-x': {
            titulo: 'Raio-X', icone: 'fa-x-ray', top: '45%', left: '70%',
            imagem: 'https://placehold.co/600x400/343a40/white?text=Exame+de+Raio-X',
            descricao: 'Um técnico irá realizar o exame de imagem. Após, aguarde o resultado para retornar ao médico.',
            proximasEtapas: [
                { texto: 'Aguardar Reavaliação', proximaEtapa: 'retorno' }
            ]
        },
        'retorno': {
            titulo: 'Retorno', icone: 'fa-clock-rotate-left', top: '60%', left: '50%',
            imagem: 'https://placehold.co/600x400/007bff/white?text=Reavaliação+Médica',
            descricao: 'Após medicação ou exames, o profissional irá reavaliar seu quadro clínico.',
            proximasEtapas: [
                { texto: 'Receber Alta', proximaEtapa: 'alta' },
                { texto: 'Alta com Encaminhamento', proximaEtapa: 'alta-referenciada' },
                { texto: 'Ir para Observação (Sala Amarela)', proximaEtapa: 'sala-amarela' }
            ]
        },
        'sala-amarela': {
            titulo: 'Sala Amarela', icone: 'fa-bed-pulse', top: '75%', left: '25%',
            imagem: 'https://placehold.co/600x400/ffc107/white?text=Paciente+em+Observação',
            descricao: 'Você ficará em observação para acompanhamento contínuo do seu quadro clínico.',
             proximasEtapas: [
                { texto: 'Aguardar Reavaliação', proximaEtapa: 'retorno' },
                { texto: 'Receber Alta', proximaEtapa: 'alta' },
                { texto: 'Alta com Encaminhamento', proximaEtapa: 'alta-referenciada' }
            ]
        },
        'farmacia': {
            titulo: 'Farmácia', icone: 'fa-pills', top: '75%', left: '75%',
            imagem: 'https://placehold.co/600x400/6f42c1/white?text=Retirada+de+Medicamentos',
            descricao: 'Apresente sua receita no balcão. Uma via ficará retida e a outra será sua. Caso algum item não esteja disponível, você será orientado sobre como proceder.',
            proximasEtapas: [
                { texto: 'Receber Alta', proximaEtapa: 'alta' }
            ]
        },
        'alta': {
            titulo: 'Alta', icone: 'fa-hospital-user', top: '90%', left: '30%',
            imagem: 'https://placehold.co/600x400/28a745/white?text=Saída+da+UPA',
            descricao: 'Seu atendimento foi finalizado. Desejamos uma boa recuperação!',
            proximasEtapas: [
                { texto: 'Iniciar Nova Jornada', proximaEtapa: 'recepcao' }
            ]
        },
        'alta-referenciada': {
            titulo: 'Alta Referenciada', icone: 'fa-route', top: '90%', left: '70%',
            imagem: 'https://placehold.co/600x400/17a2b8/white?text=Encaminhamento',
            descricao: 'Você recebeu alta e foi encaminhado para um serviço de referência para dar continuidade ao seu tratamento.',
            proximasEtapas: [
                { texto: 'Iniciar Nova Jornada', proximaEtapa: 'recepcao' }
            ]
        },
        'ouvidoria': {
            titulo: 'Ouvidoria / Administração', icone: 'fa-headset',
            imagem: 'https://placehold.co/600x400/6c757d/white?text=Fale+Conosco',
            descricao: 'Este é o canal para dúvidas, sugestões ou reclamações. Se precisar falar com a administração ou registrar uma ocorrência na ouvidoria, por favor, dirija-se ao balcão indicado.',
            // Sem "proximasEtapas" para não avançar no fluxo
        }
    };

    // --- VARIÁVEIS DE ESTADO ---
    let etapaAtualId = 'recepcao';
    let etapasConcluidas = [];

    // --- ELEMENTOS DA PÁGINA (DOM) ---
    const mapaContainer = document.getElementById('mapa-container');
    const cardModal = document.getElementById('card-modal');
    const cardTitulo = document.getElementById('card-titulo');
    const cardDescricao = document.getElementById('card-descricao');
    const cardOpcoes = document.getElementById('card-opcoes');
    const cardImagemPrincipal = document.getElementById('card-imagem-principal');
    const btnFecharCard = document.getElementById('btn-fechar-card');
    const btnOuvidoria = document.getElementById('btn-ouvidoria');

    // --- FUNÇÕES PRINCIPAIS ---

    function renderizarMapa() {
        mapaContainer.innerHTML = '';
        for (const etapaId in mapaFluxo) {
            // Não renderiza a ouvidoria no mapa principal
            if (etapaId === 'ouvidoria') continue;

            const etapa = mapaFluxo[etapaId];
            const el = document.createElement('div');
            el.className = 'etapa';
            el.id = etapaId;
            el.style.top = etapa.top;
            el.style.left = `calc(${etapa.left} - 40px)`;
            el.innerHTML = `<i class="fa-solid ${etapa.icone}"></i><span>${etapa.titulo}</span>`;

            if (etapaId === etapaAtualId) {
                el.classList.add('etapa-atual');
            } else if (etapasConcluidas.includes(etapaId)) {
                el.classList.add('etapa-concluida');
                el.innerHTML = `<i class="fa-solid fa-check"></i><span>${etapa.titulo}</span>`;
            } else {
                el.classList.add('etapa-bloqueada');
            }

            if (etapaId === 'sala-vermelha') el.classList.add('etapa-vermelha');
            if (etapaId === 'sala-amarela') el.classList.add('etapa-amarela');

            el.addEventListener('click', () => mostrarCard(etapaId));
            mapaContainer.appendChild(el);
        }
    }

    function mostrarCard(etapaId) {
        const etapa = mapaFluxo[etapaId];
        if (!etapa) return;

        cardTitulo.textContent = etapa.titulo;
        cardDescricao.innerHTML = etapa.descricao;
        cardOpcoes.innerHTML = '';
        
        cardImagemPrincipal.src = etapa.imagem || 'https://placehold.co/600x400/eeeeee/cccccc?text=Sem+Imagem';

        // Mostra os botões de avançar APENAS se a etapa clicada for a atual e não for a ouvidoria
        if (etapaId === etapaAtualId && etapa.proximasEtapas) {
            etapa.proximasEtapas.forEach(opcao => {
                const botao = document.createElement('button');
                botao.textContent = opcao.texto;
                botao.className = 'botao-proximo';
                botao.onclick = () => avancarFluxo(opcao.proximaEtapa);
                cardOpcoes.appendChild(botao);
            });
        }
        cardModal.classList.remove('escondido');
    }

    function avancarFluxo(proximaEtapaId) {
        cardModal.classList.add('escondido');

        if (etapaAtualId.startsWith('alta') && proximaEtapaId === 'recepcao') {
            etapasConcluidas = [];
        } else if (!etapasConcluidas.includes(etapaAtualId)) {
            etapasConcluidas.push(etapaAtualId);
        }
        
        etapaAtualId = proximaEtapaId;
        renderizarMapa();
        rolarParaEtapaAtual();
    }

    function rolarParaEtapaAtual() {
        const etapaAtivaEl = document.getElementById(etapaAtualId);
        if (etapaAtivaEl && mapaContainer) {
            const containerHeight = mapaContainer.clientHeight;
            const elementTop = etapaAtivaEl.offsetTop;
            const elementHeight = etapaAtivaEl.clientHeight;
            const scrollTop = elementTop - (containerHeight / 2) + (elementHeight / 2);
            mapaContainer.scrollTo({ top: scrollTop });
        }
    }

    // --- INICIALIZAÇÃO E EVENTOS ---
    btnFecharCard.addEventListener('click', () => cardModal.classList.add('escondido'));
    cardModal.addEventListener('click', (e) => {
        if (e.target === cardModal) {
            cardModal.classList.add('escondido');
        }
    });
    btnOuvidoria.addEventListener('click', () => mostrarCard('ouvidoria'));
    window.addEventListener('resize', rolarParaEtapaAtual);

    renderizarMapa();
    rolarParaEtapaAtual();
});
