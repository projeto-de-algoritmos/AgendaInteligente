import BotaoOrdena from './ordenaTarefa.js'
import {Tarefa} from './criaTarefa.js'

export const criaData = (data) => {
   const tarefas = JSON.parse(localStorage.getItem('tarefas'))||[]
   const dataMoment = moment(data, 'DD/MM/YYYY')

   const dataTopo = document.createElement('li')

   const cabecalho = document.createElement('div')
   cabecalho.classList.add('header-content')

   cabecalho.innerHTML =  `<p class="content-data">${dataMoment.format('DD/MM/YYYY')}</p>`
   
   cabecalho.appendChild(BotaoOrdena(1))
   cabecalho.appendChild(BotaoOrdena(2))
   dataTopo.appendChild(cabecalho)

   tarefas.forEach(((tarefa, id) => { 
       const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY')

       const diff = dataMoment.diff(dia)
       if(diff === 0){
           dataTopo.appendChild(Tarefa(tarefa, id))
       }
       
   }))

   return dataTopo
}