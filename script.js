let lista = [];

function adicionarTarefa(nomeTarefa, prioridade, tempoLevado) {
    let id = lista.length + 1;
    lista.push({
        id: id,
        nomeTarefa: nomeTarefa,
        prioridade: prioridade,
        tempoLevado: tempoLevado
    });

    return id;
}

function salvarEdicao() {
    let tarefa = document.getElementById('edicaoDescricao').value;
    let prior = document.getElementById('edicaoPrioridade').value;
    let tempo = document.getElementById('edicaoTempoLevado').value;

    adicionarTarefa(tarefa, prior, tempo);

    atualizarListaTarefas();
}

function atualizarListaTarefas(id) {
    let listaTarefasElement = document.getElementById('listaTarefas');
    listaTarefasElement.innerHTML = ' ';
    console.log(listaTarefasElement)
    lista.forEach(tarefa => {
        let listItem = document.createElement('li');
        listItem.textContent = `Número: ${tarefa.id}, Tarefa: ${tarefa.nomeTarefa}, Tempo Levado: ${tarefa.tempoLevado}, Prioridade: ${tarefa.prioridade}`;

        let editarButton = document.createElement('button');
        editarButton.textContent = 'Editar';
        editarButton.id = tarefa.id;

        listItem.appendChild(editarButton);
        listaTarefasElement.appendChild(listItem);

        editarButton.addEventListener('click', function() {
            abrirModalEdicao(tarefa.id);
            
        });        
            
    });
    // Classificar o elemento com o ID passado
    if (id) {
        let elementoClassificado = document.getElementById(id);
        if (elementoClassificado) {
            elementoClassificado.classList.add(tarefa.id);
        }
    }
}


function editarTarefa(id) {
    console.log("Função editarTarefa foi chamada.");
    let tarefaEditada = lista.find(tarefa => tarefa.id == id);

    if (tarefaEditada) {
        let tarefaAlt = document.getElementById('tarefaAlteracao').value;
        let prioridadeAlt = document.getElementById('prioridadeAlteracao').value;
        let tempoAlt = document.getElementById('tempoAlteracao').value;

        tarefaEditada.nomeTarefa = tarefaAlt;
        tarefaEditada.prioridade = prioridadeAlt;
        tarefaEditada.tempoLevado = tempoAlt;
    }
    atualizarListaTarefas(id);
}



function preencherFormularioEdicao(tarefa) {
    document.getElementById('edicaoDescricao').value = tarefa.nomeTarefa;
    document.getElementById('edicaoPrioridade').value = tarefa.prioridade;
    document.getElementById('edicaoTempoLevado').value = tarefa.tempoLevado;
}

function preencherFomularioAlteracao(tarefa) {
    document.getElementById('tarefaAlteracao').value = tarefa.nomeTarefa;
    document.getElementById('prioridadeAlteracao').value = tarefa.prioridade;
    document.getElementById('tempoAlteracao').value = tarefa.tempoLevado;
}

function abrirModalEdicao(id) {
    let form = document.getElementById('modalEdicao');
    form.style.display = 'block';

    let tarefa = lista.find(item => item.id === id);

    if (tarefa) {
        preencherFomularioAlteracao(tarefa);
    }
}

function fecharModalEdicao(){
    let form = document.getElementById('modalEdicao');
    form.style.display = 'none';
}


document.getElementById('formularioEdicao').addEventListener('submit', function(event) {
    event.preventDefault();
    salvarEdicao();
});
