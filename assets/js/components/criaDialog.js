export const dialogTarefasPossiveis = (tarefas, dia) => {
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