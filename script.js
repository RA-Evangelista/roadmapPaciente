document.addEventListener('DOMContentLoaded', () => {

    // --- O "CÉREBRO": ESTRUTURA DE DADOS DO MAPA ---
    const mapaFluxo = {
        'recepcao': {
            titulo: 'Recepção', icone: 'fa-clipboard-list', top: '2%', left: '50%',
            tempoEstimado: '5 - 15 min',
            imagem: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cmVjZXB0aW9uLWhvc3BpdGFsfHx8fHx8MTcyNDA5ODQ4NA&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'Bem-vindo! Na recepção, faremos seu registro (BAM). Após o cadastro, você será direcionado para o próximo passo.',
            proximasEtapas: [
                { texto: 'Paciente Grave (Emergência)', proximaEtapa: 'sala-vermelha' },
                { texto: 'Ir para Classificação de Risco', proximaEtapa: 'classificacao' },
                { texto: 'Ir para Serviço Social', proximaEtapa: 'servico-social' }
            ]
        },
        'classificacao': {
            titulo: 'Classificação', icone: 'fa-heart-pulse', top: '15%', left: '50%',
            tempoEstimado: '10 - 20 min',
            imagem: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bnVyc2UtY2hlY2t1cHx8fHx8fDE3MjQwOTg1MTM&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'Um enfermeiro irá aferir seus sinais vitais para definir a prioridade do seu atendimento (Vermelho, Laranja, Amarelo, Verde ou Azul).',
            proximasEtapas: [
                { texto: 'Ir para Clínica Médica', proximaEtapa: 'clinica-medica' },
                { texto: 'Ir para Pediatria', proximaEtapa: 'clinica-pediatrica' },
                { texto: 'Ir para Odontologia', proximaEtapa: 'odontologia' }
            ]
        },
        'servico-social': {
            titulo: 'Serviço Social', icone: 'fa-users', top: '15%', left: '15%',
            tempoEstimado: 'Variável',
            imagem: 'https://images.unsplash.com/photo-1628622872365-a169b5a83b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c29jaWFsLXN1cHBvcnR8fHx8fHwxNzI0MDk4NTQy&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'A assistência social oferece suporte e orientação. Caso precise de avaliação médica, você será orientado a retornar à recepção.',
            proximasEtapas: [ { texto: 'Receber Alta Administrativa', proximaEtapa: 'alta' }, { texto: 'Retornar à Recepção', proximaEtapa: 'recepcao' } ]
        },
        'sala-vermelha': {
            titulo: 'Sala Vermelha', icone: 'fa-kit-medical', top: '15%', left: '85%',
            tempoEstimado: 'Atendimento Imediato',
            imagem: 'https://images.unsplash.com/photo-1581092580433-c2c151474a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZW1lcmdlbmN5LXJvb218fHx8fHwxNzI0MDk4NTY4&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'Você está na sala de emergência. A equipe está focada na sua estabilização até a melhora do quadro ou transferência.',
            proximasEtapas: [ { texto: 'Transferir para Observação', proximaEtapa: 'sala-amarela' } ]
        },
        'clinica-medica': {
            titulo: 'Clínica Médica', icone: 'fa-stethoscope', top: '30%', left: '20%',
            tempoEstimado: '20 - 40 min',
            imagem: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9jdG9yLWNvbnN1bHR8fHx8fHwxNzI0MDk4NjAw&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'O médico irá avaliar seu caso e definir a melhor conduta.',
            proximasEtapas: [ { texto: 'Retirar Medicação na Farmácia', proximaEtapa: 'farmacia' }, { texto: 'Ir para Medicação / Coleta', proximaEtapa: 'medicacao-coleta' }, { texto: 'Realizar Raio-X', proximaEtapa: 'raio-x' }, { texto: 'Alta com Encaminhamento', proximaEtapa: 'alta-referenciada' } ]
        },
        'clinica-pediatrica': {
            titulo: 'Pediatria', icone: 'fa-child', top: '30%', left: '50%',
            tempoEstimado: '25 - 45 min',
            imagem: 'https://images.unsplash.com/photo-1605338292415-a7b3c2e15775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVkaWF0cmljaWFufHx8fHx8MTcyNDA5ODYyNw&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'O pediatra irá avaliar o caso da criança e definir a melhor conduta.',
            proximasEtapas: [ { texto: 'Retirar Medicação na Farmácia', proximaEtapa: 'farmacia' }, { texto: 'Ir para Medicação / Coleta', proximaEtapa: 'medicacao-coleta' }, { texto: 'Realizar Raio-X', proximaEtapa: 'raio-x' }, { texto: 'Alta com Encaminhamento', proximaEtapa: 'alta-referenciada' } ]
        },
        'odontologia': {
            titulo: 'Odontologia', icone: 'fa-tooth', top: '30%', left: '80%',
            tempoEstimado: '30 - 50 min',
            imagem: 'https://images.unsplash.com/photo-1588776239932-d68db2357d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVudGlzdHx8fHx8fDE3MjQwOTg2NTM&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'O dentista irá avaliar seu caso e definir a melhor conduta.',
            proximasEtapas: [ { texto: 'Retirar Medicação na Farmácia', proximaEtapa: 'farmacia' }, { texto: 'Ir para Medicação na UPA', proximaEtapa: 'medicacao-coleta' }, { texto: 'Alta com Encaminhamento', proximaEtapa: 'alta-referenciada' } ]
        },
        'medicacao-coleta': {
            titulo: 'Medicação', icone: 'fa-syringe', top: '45%', left: '30%',
            tempoEstimado: '15 - 30 min',
            imagem: 'https://images.unsplash.com/photo-1608828842398-755c48b7b41e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVkaWNhdGlvbnx8fHx8fDE3MjQwOTg2Nzk&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'A equipe de enfermagem irá administrar sua medicação e/ou coletar exames, se solicitado.',
            proximasEtapas: [ { texto: 'Aguardar Reavaliação', proximaEtapa: 'retorno' } ]
        },
         'raio-x': {
            titulo: 'Raio-X', icone: 'fa-x-ray', top: '45%', left: '70%',
            tempoEstimado: '20 - 40 min',
            imagem: 'https://images.unsplash.com/photo-1530497610245-98236c53c178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8eC1yYXl8fHx8fHwxNzI0MDk4NzAx&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'Um técnico irá realizar o exame de imagem. Após, aguarde o resultado para retornar ao médico.',
            proximasEtapas: [ { texto: 'Aguardar Reavaliação', proximaEtapa: 'retorno' } ]
        },
        'retorno': {
            titulo: 'Retorno', icone: 'fa-clock-rotate-left', top: '60%', left: '50%',
            tempoEstimado: '10 - 20 min',
            imagem: 'https://images.unsplash.com/photo-1618932260643-4c72a8157e87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9jdG9yLXJldHVybnx8fHx8fDE3MjQwOTg3MjQ&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'Após medicação ou exames, o profissional irá reavaliar seu quadro clínico.',
            proximasEtapas: [ { texto: 'Receber Alta', proximaEtapa: 'alta' }, { texto: 'Alta com Encaminhamento', proximaEtapa: 'alta-referenciada' }, { texto: 'Ir para Observação (Sala Amarela)', proximaEtapa: 'sala-amarela' } ]
        },
        'sala-amarela': {
            titulo: 'Sala Amarela', icone: 'fa-bed-pulse', top: '75%', left: '25%',
            tempoEstimado: 'Variável',
            imagem: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG9zcGl0YWwtYmVkfHx8fHx8MTcyNDA5ODc0OA&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'Você ficará em observação para acompanhamento contínuo do seu quadro clínico.',
             proximasEtapas: [ { texto: 'Aguardar Reavaliação', proximaEtapa: 'retorno' }, { texto: 'Receber Alta', proximaEtapa: 'alta' }, { texto: 'Alta com Encaminhamento', proximaEtapa: 'alta-referenciada' } ]
        },
        'farmacia': {
            titulo: 'Farmácia', icone: 'fa-pills', top: '75%', left: '75%',
            tempoEstimado: '5 - 10 min',
            imagem: 'https://images.unsplash.com/photo-1584515933487-779824d29409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhhcm1hY3l8fHx8fHwxNzI0MDk4Nzc1&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'Apresente sua receita no balcão. Uma via ficará retida e a outra será sua. Caso algum item não esteja disponível, você será orientado sobre como proceder.',
            proximasEtapas: [ { texto: 'Receber Alta', proximaEtapa: 'alta' } ]
        },
        'alta': {
            titulo: 'Alta', icone: 'fa-hospital-user', top: '90%', left: '30%',
            tempoEstimado: 'Processo Finalizado',
            imagem: 'https://images.unsplash.com/photo-1629904853716-f0bc64219b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG9zcGl0YWwtZXhpdHx8fHx8fDE3MjQwOTg3OTk&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'Seu atendimento foi finalizado. Desejamos uma boa recuperação!',
            proximasEtapas: [ { texto: 'Iniciar Nova Jornada', proximaEtapa: 'recepcao' } ]
        },
        'alta-referenciada': {
            titulo: 'Alta Referenciada', icone: 'fa-route', top: '90%', left: '70%',
            tempoEstimado: 'Processo Finalizado',
            imagem: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9hZHx8fHx8fDE3MjQwOTg4MjI&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'Você recebeu alta e foi encaminhado para um serviço de referência para dar continuidade ao seu tratamento.',
            proximasEtapas: [ { texto: 'Iniciar Nova Jornada', proximaEtapa: 'recepcao' } ]
        },
        'ouvidoria': {
            titulo: 'Ouvidoria / Administração', icone: 'fa-headset',
            imagem: 'https://images.unsplash.com/photo-1586445580621-01b43d343460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3VzdG9tZXItc2VydmljZXx8fHx8fDE3MjQwOTg4NDQ&ixlib=rb-4.0.3&q=80&w=600',
            descricao: 'Este é o canal para dúvidas, sugestões ou reclamações. Se precisar falar com a administração ou registrar uma ocorrência na ouvidoria, por favor, dirija-se ao balcão indicado.',
        }
    };

    // --- VARIÁVEIS DE ESTADO ---
    let etapaAtualId = 'recepcao';
    let etapasConcluidas = [];

    // --- ELEMENTOS DA PÁGINA (DOM) ---
    const mapaContainer = document.getElementById('mapa-container');
    const cardModal = document.getElementById('card-modal');
    const cardTitulo = document.getElementById('card-titulo');
    const cardTempoEstimado = document.getElementById('card-tempo-estimado'); // NOVO
    const cardDescricao = document.getElementById('card-descricao');
    const cardOpcoes = document.getElementById('card-opcoes');
    const cardImagemPrincipal = document.getElementById('card-imagem-principal');
    const btnFecharCard = document.getElementById('btn-fechar-card');
    const btnOuvidoria = document.getElementById('btn-ouvidoria');

    // --- FUNÇÕES PRINCIPAIS ---

    function renderizarMapa() {
        mapaContainer.innerHTML = '';
        for (const etapaId in mapaFluxo) {
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
        
        // NOVO: Popula o campo de tempo
        if (etapa.tempoEstimado) {
            cardTempoEstimado.textContent = etapa.tempoEstimado;
            cardTempoEstimado.style.display = 'inline-block';
        } else {
            cardTempoEstimado.style.display = 'none';
        }
        
        cardImagemPrincipal.src = etapa.imagem || 'https://placehold.co/600x400/eeeeee/cccccc?text=Sem+Imagem';

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