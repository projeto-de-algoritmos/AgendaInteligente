import BotaoConclui from './assets/js/components/concluiTarefa.js'
import BotaoDeleta from './assets/js/components/deletaTarefa.js'
 
const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const initDate = document.querySelector('[data-form-initDate]')
    const endDate = document.querySelector('[data-form-endDate]')

    const data = calendario.value

    console.log(data, initDate.value, endDate.value)

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " "

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)