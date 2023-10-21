import BotaoConclui from './assets/js/components/concluiTarefa.js'
import BotaoDeleta from './assets/js/components/deletaTarefa.js'
 
const handleNovoItem = (evento) => {
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const dataFormatada = data.format('DD/MM/YYYY')

    const initDate = document.querySelector('[data-form-initDate]').value
    const endDate = document.querySelector('[data-form-endDate]').value

    const dados = {
        valor,
        dataFormatada,
        initDate,
        endDate
    }

    const criaTarefa = criarTarefa(dados);

    lista.appendChild(criaTarefa)
    input.value = " "

}

const criarTarefa = ({ valor, dataFormatada, initDate, endDate}) => {

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataFormatada} <br> inicio: ${initDate}h fim: ${endDate}h <br> ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa;
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem) 