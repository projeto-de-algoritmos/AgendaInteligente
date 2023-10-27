export const dialogTarefasPossiveis = (tarefas, dia, tipo) => {
    const dialog = document.querySelector(".l-dialog")
 
    const janelaDialog = document.createElement('div')
 
    janelaDialog.classList.add('dialog-content')

    if(tipo == 1){
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
    }
    else{
      janelaDialog.innerHTML =
      `
      <div class="dialog-title">
         <h3>Atraso mínimo de Tarefas - ${dia}</h3>
         <h3>Total de atraso - ${tarefas[0]}</h3>
      </div>
      `

      for(let i = 1; i< tarefas.length;i++){
         let task = 
         `<div class="dialog-task">
           <p class="content text-center">${tarefas[i].descricao}</p> 
           <div class="dialog-times">
            <span class="horarioInicio">Início: ${tarefas[i].horarioInicio}</span>
            <span class="horarioFim">Fim: ${tarefas[i].horarioFinal}</span>
           </div>         
         </div> 
       `
       janelaDialog.innerHTML += task;
      }
    }

    const botaoSair = document.createElement('button');

    botaoSair.innerText = 'FECHAR';
    botaoSair.classList.add('dialog-button')
 
    janelaDialog.appendChild(botaoSair);
 
    dialog.appendChild(janelaDialog)
 
    dialog.showModal();
 
    const botaoSairDialogo = document.querySelector(".dialog-button")
 
    botaoSairDialogo.addEventListener('click', () =>{
       dialog.close()
       dialog.innerHTML = ""
      })
   
 }
 
 function converterHora(str) {
    var horas = str.slice(0, 2);
    var minutos = str.slice(2);
 
    return horas + "h:" + minutos + "m";
 }