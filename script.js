class Tarefa {
    constructor(id, descricao, dataDeConclusao, prioridade) {
        this.id = id;
        this.descricao = descricao;
        this.dataDeConclusao = dataDeConclusao;
        this.prioridade = prioridade;
    }

    obterDetalhes() {
        return `O id da tarefa é ${this.id}, ela tem como descricao ${this.descricao}, tem uma prioridade de ${this.prioridade}`
    }
}

class ListaDeTarefas {
    constructor(){
        this.lista = [];
    }

    getVisualizacao() {
        return this.lista;
    }

    adicionarTarefa(tarefa) {
        this.lista.push(tarefa);
    }

    removerTarefa(id) {
        this.lista = this.lista.filter(tarefa => tarefa.id !== id);
    }


    editarTarefa(id, novaDescricao, novaData, novaPrioridade) {
        this.lista.forEach(tarefa => {
            if (tarefa.id === id) {
                tarefa.descricao = novaDescricao;
                tarefa.dataDeConclusao = novaData;
                tarefa.prioridade = novaPrioridade;
            }
        });
}}


let inputNovaTarefa = document.getElementById('novaTarefa');
let selectTarefas = document.getElementById('tarefas');
let prioridade = document.getElementById('prioridade');
let dataConclusao = document.getElementById('dataConclusao');
let data = new Date();
let dia = data.getDate();
let mes = (data.getMonth() + 1).toString().padStart(2, '0');
let ano = data.getFullYear();
let hoje = `${dia}/${mes}/${ano}`

let listaDeTarefas = new ListaDeTarefas();


function clicar(){
    let dataFinal = new Date(dataConclusao.value);
    let diaConclusao = dataFinal.getDate();
    let mesConclusao = (dataFinal.getMonth() + 1).toString().padStart(2, '0');
    let anoConclusao = dataFinal.getFullYear();
    let hojeFinal = `${diaConclusao}/${mesConclusao}/${anoConclusao}`
    console.log(hojeFinal)
    if(hojeFinal < hoje) {
        window.alert('Data inválida!')
    } else {
        let descricao = inputNovaTarefa.value;
        let novaTarefa = new Tarefa(listaDeTarefas.lista.length + 1, descricao, '', 'Baixa');
        listaDeTarefas.adicionarTarefa(novaTarefa); 
        atualizarListaTarefas();
}}


function atualizarListaTarefas() {
    selectTarefas.innerHTML = '';

    listaDeTarefas.lista.forEach(tarefa => {
    let option = document.createElement('option');
    option.value = tarefa.id;
    option.text = tarefa.descricao;
    selectTarefas.add(option);
    });
}

function removerItem() {
    let selecionada = selectTarefas.value;
    if (selecionada !== '') {
        listaDeTarefas.removerTarefa(Number(selecionada));
        atualizarListaTarefas();
    }
}

let minhaTarefa = new Tarefa(1, 'Exemplo de tarefa', '2023-10-20', 'Alta');
listaDeTarefas.adicionarTarefa(minhaTarefa);
atualizarListaTarefas();
