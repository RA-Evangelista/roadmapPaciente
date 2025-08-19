document.addEventListener('DOMContentLoaded', () => {

    const mapaFluxo = {
        'bem-vindo': {
            titulo: 'Bem-Vindo(a)!', icone: 'fa-hands-holding-heart', top: '2%', left: '50%',
            imagem: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'Olá! Este é um guia interativo para te ajudar a entender o fluxo de atendimento em nossa UPA. Toque em "Iniciar Jornada" para começar.',
            proximasEtapas: [ { texto: 'Iniciar Jornada', proximaEtapa: 'recepcao' } ]
        },
        'recepcao': {
            titulo: 'Recepção', icone: 'fa-clipboard-list', top: '15%', left: '50%',
            tempoEstimado: '5 - 15 min',
            imagem: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'Na recepção, faremos seu registro (BAM). Após o cadastro, você será direcionado para o próximo passo.',
            proximasEtapas: [
                { texto: 'Ir para Classificação de Risco', proximaEtapa: 'classificacao' },
                { texto: 'Ir para Serviço Social', proximaEtapa: 'servico-social' },
                { texto: 'Paciente Grave (URGÊNCIA)', proximaEtapa: 'sala-vermelha', classe: 'botao-urgente' }
            ]
        },
        'classificacao': {
            titulo: 'Classificação', icone: 'fa-heart-pulse', top: '28%', left: '50%',
            tempoEstimado: '10 - 20 min',
            imagem: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'Um enfermeiro irá aferir seus sinais vitais para definir a prioridade do seu atendimento, seguindo o padrão de cores:<br><br><strong>🔴 Vermelho (Emergência):</strong> Atendimento imediato.<br><strong>🟠 Laranja (Muito Urgente):</strong> Atendimento em até 10 minutos.<br><strong>🟡 Amarelo (Urgente):</strong> Atendimento em até 60 minutos.<br><strong>🟢 Verde (Pouco Urgente):</strong> Atendimento em até 120 minutos.<br><strong>🔵 Azul (Não Urgente):</strong> Atendimento em até 240 minutos.',
            proximasEtapas: [ { texto: 'Ir para Clínica Médica', proximaEtapa: 'clinica-medica' }, { texto: 'Ir para Pediatria', proximaEtapa: 'clinica-pediatrica' }, { texto: 'Ir para Odontologia', proximaEtapa: 'odontologia' } ]
        },
        'servico-social': {
            titulo: 'Serviço Social', icone: 'fa-users', top: '28%', left: '15%',
            tempoEstimado: 'Variável',
            imagem: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'A assistência social oferece suporte e orientação. Caso precise de avaliação médica, você será orientado a retornar à recepção.',
            proximasEtapas: [ { texto: 'Finalizar Atendimento', proximaEtapa: 'alta' }, { texto: 'Retornar à Recepção', proximaEtapa: 'recepcao' } ]
        },
        'sala-vermelha': {
            titulo: 'Sala Vermelha', icone: 'fa-kit-medical', top: '28%', left: '85%',
            tempoEstimado: 'Atendimento Imediato',
            imagem: 'https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'Você está na sala de emergência. A equipe está focada na sua estabilização até a melhora do quadro ou transferência.',
            proximasEtapas: [ { texto: 'Transferir para Observação', proximaEtapa: 'sala-amarela' }, { texto: 'Receber Alta / Encaminhamento', proximaEtapa: 'alta' } ]
        },
        'clinica-medica': {
            titulo: 'Clínica Médica', icone: 'fa-stethoscope', top: '42%', left: '20%',
            tempoEstimado: '20 - 40 min',
            imagem: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'Nesta etapa, o clínico geral irá conversar com você para entender seus sintomas e histórico de saúde (anamnese). Em seguida, fará um exame físico para avaliar sua condição. Com base nisso, ele poderá solicitar exames, prescrever medicamentos ou indicar o melhor tratamento.',
            proximasEtapas: [ { texto: 'Ir para Medicação / Coleta', proximaEtapa: 'medicacao-coleta' }, { texto: 'Realizar Raio-X', proximaEtapa: 'raio-x' }, { texto: 'Internar na Sala Amarela', proximaEtapa: 'sala-amarela' }, { texto: 'Retirar Medicação na Farmácia', proximaEtapa: 'farmacia'}, { texto: 'Receber Alta / Encaminhamento', proximaEtapa: 'alta' } ]
        },
        'clinica-pediatrica': {
            titulo: 'Pediatria', icone: 'fa-child', top: '42%', left: '50%',
            tempoEstimado: '25 - 45 min',
            imagem: 'https://images.pexels.com/photos/6749779/pexels-photo-6749779.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'O pediatra irá conversar com os responsáveis, entender as queixas e realizar um exame físico cuidadoso e adequado para a idade da criança. A partir da avaliação, definirá o diagnóstico e o tratamento, que pode incluir medicação, exames ou outras orientações.',
            proximasEtapas: [ { texto: 'Ir para Medicação / Coleta', proximaEtapa: 'medicacao-coleta' }, { texto: 'Realizar Raio-X', proximaEtapa: 'raio-x' }, { texto: 'Internar na Sala Amarela', proximaEtapa: 'sala-amarela' }, { texto: 'Retirar Medicação na Farmácia', proximaEtapa: 'farmacia'}, { texto: 'Receber Alta / Encaminhamento', proximaEtapa: 'alta' } ]
        },
        'odontologia': {
            titulo: 'Odontologia', icone: 'fa-tooth', top: '42%', left: '80%',
            tempoEstimado: '30 - 50 min',
            imagem: 'https://images.pexels.com/photos/6528862/pexels-photo-6528862.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'O atendimento odontológico na UPA é focado em urgências como dor intensa, infecções (abscessos) ou traumas. O dentista irá examinar o local afetado e poderá realizar procedimentos para alívio da dor, além de prescrever a medicação necessária.',
            proximasEtapas: [ { texto: 'Ir para Medicação na UPA', proximaEtapa: 'medicacao-coleta' }, { texto: 'Internar na Sala Amarela', proximaEtapa: 'sala-amarela' }, { texto: 'Retirar Medicação na Farmácia', proximaEtapa: 'farmacia'}, { texto: 'Receber Alta / Encaminhamento', proximaEtapa: 'alta' } ]
        },
        'medicacao-coleta': {
            titulo: 'Medicação', icone: 'fa-syringe', top: '58%', left: '30%',
            tempoEstimado: '15 - 30 min',
            imagem: 'https://images.pexels.com/photos/33506259/pexels-photo-33506259.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'Nesta etapa, a equipe de enfermagem irá administrar os medicamentos prescritos (como injeções, soro ou comprimidos) e/ou coletar amostras para exames de laboratório.<br><br><strong>Importante:</strong> Você tem o direito de recusar qualquer procedimento. No entanto, recomendamos seguir as orientações médicas para a sua completa recuperação.',
            proximasEtapas: [ { texto: 'Aguardar Reavaliação', proximaEtapa: 'retorno' } ]
        },
         'raio-x': {
            titulo: 'Raio-X', icone: 'fa-x-ray', top: '58%', left: '70%',
            tempoEstimado: '20 - 40 min',
            imagem: 'https://images.pexels.com/photos/33216670/pexels-photo-33216670.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'Você será chamado para a sala de exames, onde um técnico em radiologia irá te posicionar corretamente. Pode ser necessário remover objetos de metal e usar um colete de chumbo para sua proteção. É muito importante permanecer imóvel durante o rápido momento do disparo do raio-x.',
            proximasEtapas: [ { texto: 'Aguardar Reavaliação', proximaEtapa: 'retorno' } ]
        },
        'retorno': {
            titulo: 'Retorno', icone: 'fa-clock-rotate-left', top: '72%', left: '50%',
            tempoEstimado: '10 - 20 min',
            imagem: 'https://images.pexels.com/photos/19921278/pexels-photo-19921278.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'Após medicação ou exames, o profissional irá reavaliar seu quadro clínico.',
            proximasEtapas: [ { texto: 'Receber Alta / Encaminhamento', proximaEtapa: 'alta' }, { texto: 'Ir para Observação (Sala Amarela)', proximaEtapa: 'sala-amarela' } ]
        },
        'sala-amarela': {
            titulo: 'Sala Amarela', icone: 'fa-bed-pulse', top: '85%', left: '25%',
            tempoEstimado: 'Variável',
            imagem: 'https://images.pexels.com/photos/4586987/pexels-photo-4586987.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'A Sala Amarela é uma área de observação para pacientes que precisam de monitoramento mais próximo. Aqui, a equipe de enfermagem irá verificar seus sinais vitais periodicamente e administrar medicamentos conforme necessário, enquanto aguarda a evolução do seu quadro clínico.',
             proximasEtapas: [ { texto: 'Aguardar Reavaliação', proximaEtapa: 'retorno' }, { texto: 'Receber Alta / Encaminhamento', proximaEtapa: 'alta' } ]
        },
        'farmacia': {
            titulo: 'Farmácia', icone: 'fa-pills', top: '85%', left: '75%',
            tempoEstimado: '5 - 10 min',
            imagem: 'https://images.pexels.com/photos/19471013/pexels-photo-19471013.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'Apresente sua receita no balcão. Uma via ficará retida e a outra será sua. Caso algum item não esteja disponível, você será orientado sobre como proceder.',
            proximasEtapas: [ { texto: 'Finalizar Atendimento', proximaEtapa: 'alta' } ]
        },
        'alta': {
            titulo: 'Alta', icone: 'fa-hospital-user', top: '98%', left: '50%',
            tempoEstimado: 'Processo Finalizado',
            imagem: 'https://images.pexels.com/photos/5207117/pexels-photo-5207117.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'Seu atendimento na UPA foi concluído. A finalização pode ocorrer de diferentes formas:<br><br><strong>Alta Médica:</strong> Você está liberado para ir para casa com as orientações necessárias.<br><strong>Alta Referenciada:</strong> Você será encaminhado para outro serviço de saúde (hospital, especialista) para dar continuidade ao tratamento.<br><strong>Alta a Pedido/Revelia:</strong> Quando o paciente decide interromper o tratamento contra a orientação médica, assinando um termo de responsabilidade.',
            proximasEtapas: [ { texto: 'Iniciar Nova Jornada', proximaEtapa: 'bem-vindo' } ]
        },
        'ouvidoria': {
            titulo: 'Ouvidoria / Administração', icone: 'fa-headset',
            imagem: 'https://images.pexels.com/photos/221164/pexels-photo-221164.jpeg?auto=compress&cs=tinysrgb&w=600',
            descricao: 'Este é o canal para dúvidas, sugestões ou reclamações. Se precisar falar com a administração ou registrar uma ocorrência na ouvidoria, por favor, dirija-se ao balcão indicado.',
        }
    };

    // --- O restante do código permanece o mesmo ---

    let etapaAtualId = 'bem-vindo';
    let etapasConcluidas = [];

    const mapaContainer = document.getElementById('mapa-container');
    const svgConexoes = document.getElementById('mapa-conexoes');
    const cardModal = document.getElementById('card-modal');
    const cardTitulo = document.getElementById('card-titulo');
    const cardTempoEstimado = document.getElementById('card-tempo-estimado');
    const cardDescricao = document.getElementById('card-descricao');
    const cardOpcoes = document.getElementById('card-opcoes');
    const cardImagemPrincipal = document.getElementById('card-imagem-principal');
    const btnFecharCard = document.getElementById('btn-fechar-card');
    const btnOuvidoria = document.getElementById('btn-ouvidoria');

    function desenharConexoes() {
        svgConexoes.innerHTML = '';
        for (const etapaId in mapaFluxo) {
            const etapaOrigem = mapaFluxo[etapaId];
            if (!etapaOrigem.proximasEtapas || etapaId === 'ouvidoria') continue;
            const origemEl = document.getElementById(etapaId);
            if (!origemEl) continue;
            etapaOrigem.proximasEtapas.forEach(opcao => {
                const etapaDestinoId = opcao.proximaEtapa;
                const destinoEl = document.getElementById(etapaDestinoId);
                if (!destinoEl) return;
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                const x1 = origemEl.offsetLeft + origemEl.offsetWidth / 2;
                const y1 = origemEl.offsetTop + origemEl.offsetHeight / 2;
                const x2 = destinoEl.offsetLeft + destinoEl.offsetWidth / 2;
                const y2 = destinoEl.offsetTop + destinoEl.offsetHeight / 2;
                line.setAttribute('x1', x1);
                line.setAttribute('y1', y1);
                line.setAttribute('x2', x2);
                line.setAttribute('y2', y2);
                line.dataset.origem = etapaId;
                line.dataset.destino = etapaDestinoId;
                let classeLinha = 'conexao ';
                if (etapasConcluidas.includes(etapaId)) {
                    classeLinha += 'conexao-concluida';
                } else if (etapaId === etapaAtualId) {
                    classeLinha += 'conexao-ativa';
                } else {
                    classeLinha += 'conexao-bloqueada';
                }
                line.setAttribute('class', classeLinha);
                svgConexoes.appendChild(line);
            });
        }
    }

    function renderizarMapa() {
        const etapasAntigas = mapaContainer.querySelectorAll('.etapa');
        etapasAntigas.forEach(e => e.remove());
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
        desenharConexoes();
    }

    function mostrarCard(etapaId) {
        const etapa = mapaFluxo[etapaId];
        if (!etapa) return;
        cardTitulo.textContent = etapa.titulo;
        cardDescricao.innerHTML = etapa.descricao;
        cardOpcoes.innerHTML = '';
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
                if (opcao.classe) {
                    botao.classList.add(opcao.classe);
                }
                botao.onclick = () => avancarFluxo(opcao.proximaEtapa);
                cardOpcoes.appendChild(botao);
            });
        }
        cardModal.classList.remove('escondido');
    }

    function avancarFluxo(proximaEtapaId) {
        cardModal.classList.add('escondido');
        const linhaAnimar = svgConexoes.querySelector(`line[data-origem="${etapaAtualId}"][data-destino="${proximaEtapaId}"]`);
        if (linhaAnimar) {
            const length = Math.sqrt(Math.pow(linhaAnimar.x2.baseVal.value - linhaAnimar.x1.baseVal.value, 2) + Math.pow(linhaAnimar.y2.baseVal.value - linhaAnimar.y1.baseVal.value, 2));
            linhaAnimar.style.strokeDasharray = length;
            linhaAnimar.style.strokeDashoffset = length;
            linhaAnimar.classList.add('conexao-animando');
            setTimeout(() => {
                atualizarEstadoEVisao(proximaEtapaId);
            }, 700);
        } else {
            atualizarEstadoEVisao(proximaEtapaId);
        }
    }

    function atualizarEstadoEVisao(proximaEtapaId) {
        if (etapaAtualId === 'alta' && proximaEtapaId === 'bem-vindo') {
            etapasConcluidas = [];
        } else if (!etapasConcluidas.includes(etapaAtualId)) {
            etapasConcluidas.push(etapaAtualId);
        }
        etapaAtualId = proximaEtapaId;
        renderizarMapa();
        rolarParaEtapaAtual();
        setTimeout(() => {
            mostrarCard(proximaEtapaId);
        }, 400);
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

    btnFecharCard.addEventListener('click', () => cardModal.classList.add('escondido'));
    cardModal.addEventListener('click', (e) => {
        if (e.target === cardModal) {
            cardModal.classList.add('escondido');
        }
    });
    btnOuvidoria.addEventListener('click', () => mostrarCard('ouvidoria'));
    window.addEventListener('resize', () => {
        desenharConexoes();
        rolarParaEtapaAtual();
    });

    renderizarMapa();
    setTimeout(() => {
        mostrarCard(etapaAtualId);
    }, 500);
});