import { dialogTarefasPossiveis } from "./criaDialog.js"

const BotaoOrdena = () => { 
   const botaoOrdena = document.createElement('button')

   botaoOrdena.classList.add('order-button')
   botaoOrdena.innerText = 'Ordenar Tarefas'

   botaoOrdena.addEventListener('click', ordenarTarefa, false)

   return botaoOrdena
}

const ordenarTarefa = (evento) => { 
   const botaoPressionado = evento.target

   const listaTarefas = botaoPressionado.parentElement

   const diaAgenda = listaTarefas.querySelector((".content-data")).textContent;
   const tarefas = listaTarefas.querySelectorAll(("li"));
   const tarefaObjetos = new Array;
   const tarefasPossiveis = new Array;

   for(let i = 0; i < tarefas.length; i++){
      let descricaoTarefa = tarefas[i].querySelector((".content")).textContent;
      let inicioTarefa = tarefas[i].querySelector((".horarioInicio")).textContent;
      let fimTarefa = tarefas[i].querySelector((".horarioFim")).textContent;

      inicioTarefa = inicioTarefa.slice(8).replaceAll(':', '');
      fimTarefa = fimTarefa.slice(5).replaceAll(':', '');

      const objetoTarefa = {
         descricao: descricaoTarefa,
         horarioInicio: inicioTarefa,
         horarioFinal: fimTarefa
      }

      tarefaObjetos.push(objetoTarefa);
      
   }

   tarefaObjetos.sort(function(a, b){
      return a.horarioFinal - b.horarioFinal;
   });

   tarefasPossiveis.push(tarefaObjetos[0]);

   for(let i = 1; i < tarefaObjetos.length; i++){
      if(tarefaObjetos[i].horarioInicio >= tarefasPossiveis[tarefasPossiveis.length-1].horarioFinal){
         tarefasPossiveis.push(tarefaObjetos[i]);
      }
   }

   dialogTarefasPossiveis(tarefasPossiveis, diaAgenda);
}

export default BotaoOrdena