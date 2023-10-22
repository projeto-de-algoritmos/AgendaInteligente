const BotaoOrdena = () => { 
   const botaoOrdena = document.createElement('button')

   botaoOrdena.innerText = 'Ordenar Tarefas'

   botaoOrdena.addEventListener('click', ordenarTarefa, false)

   return botaoOrdena
}

const ordenarTarefa = (evento) => { 
   const botaoPressionado = evento.target

   const listaTarefas = botaoPressionado.parentElement

   const tarefas = listaTarefas.querySelectorAll(("li"));
   const modal = document.querySelector(".l-pTasks")
   const tarefaObjetos = new Array;
   const tarefasPossiveis = new Array;

   for(let i = 0; i < tarefas.length; i++){
      let descricaoTarefa = tarefas[i].querySelector((".descricaoTarefa")).textContent;
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

   const tarefa = document.createElement('ul')
   tarefa.classList.add('task-ordered')
   tarefa.innerHTML = `
   <div class="task-modal-title">
      <h3>Maior numero de tarefas possiveis</h3>
      <button class="dialog-btn">X</button>
   </div>
      <p>Tarefas</p>`
  
   for(let i = 0; i< tarefasPossiveis.length;i++){
      var task = 
      `<div class="task-ordenada-info">
        <p class="content descricaoTarefa">${tarefasPossiveis[i].descricao}</p>          
        <span class="horarioInicio">Início: ${converterHora(tarefasPossiveis[i].horarioInicio) }</span>
        <span class="horarioFim">Fim: ${converterHora(tarefasPossiveis[i].horarioFinal)}</span>
    </div> 
    `
    tarefa.innerHTML += task;
   }
   modal.appendChild(tarefa)
   modal.showModal();

   const modalBtn = document.querySelector(".dialog-btn")

   modalBtn.addEventListener('click', () =>{
      modal.close()
      modal.innerHTML = ""
   })

   return botaoPressionado
}

function converterHora(str) {
   var horas = str.slice(0, 2);
   var minutos = str.slice(2);

   return horas + ":" + minutos + "h";
}

export default BotaoOrdena