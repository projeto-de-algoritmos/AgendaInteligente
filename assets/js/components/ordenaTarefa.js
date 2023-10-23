const BotaoOrdena = () => { 
   const botaoOrdena = document.createElement('button')

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

const dialogTarefasPossiveis = (tarefas, dia) => {
   const dialog = document.querySelector(".l-dialog")

   const janelaDialog = document.createElement('div')

   janelaDialog.classList.add('dialog-content')
   janelaDialog.innerHTML =
   `
   <div class="dialog-title">
      <h3>Otimização de Tarefas - ${dia}</h3>
   </div>
   `
     
   for(let i = 0; i< tarefas.length;i++){
      let task = 
      `<div class="dialog-task">
        <p class="content text-center">${tarefas[i].descricao}</p> 
        <div class="dialog-times">
         <span class="horarioInicio">Início: ${converterHora(tarefas[i].horarioInicio) }</span>
         <span class="horarioFim">Fim: ${converterHora(tarefas[i].horarioFinal)}</span>
        </div>         
      </div> 
    `
    janelaDialog.innerHTML += task;

   }

   const botaoSair = document.createElement('button');

   botaoSair.innerText = 'FECHAR';
   botaoSair.classList.add('dialog-button')

   janelaDialog.appendChild(botaoSair);

   dialog.appendChild(janelaDialog)

   dialog.showModal();

   const modalBtn = document.querySelector(".dialog-button")

   modalBtn.addEventListener('click', () =>{
      dialog.close()
      dialog.innerHTML = ""
   })

}

function converterHora(str) {
   var horas = str.slice(0, 2);
   var minutos = str.slice(2);

   return horas + "h:" + minutos + "m";
}

export default BotaoOrdena