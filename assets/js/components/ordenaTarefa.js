import { dialogTarefasPossiveis } from "./criaDialog.js"

const BotaoOrdena = (tipo) => { 
   const botaoOrdena = document.createElement('button')

   if(tipo == 1){
      botaoOrdena.classList.add('order-button')
      botaoOrdena.innerText = 'Otimizar Tarefas'
   
      botaoOrdena.addEventListener('click', ordenarTarefa, false)
   
      return botaoOrdena
   }
   else{
      botaoOrdena.classList.add('order-button')
      botaoOrdena.innerText = 'Minimizar Atraso'
   
      botaoOrdena.addEventListener('click', minimizaAtraso, false)
   
      return botaoOrdena
   }

}

const ordenarTarefa = (evento) => { 
   const botaoPressionado = evento.target
   const cabecalhoBotao = botaoPressionado.parentElement
   const listaTarefas = cabecalhoBotao.parentElement

   const diaAgenda = listaTarefas.querySelector((".content-data")).textContent;
   
   const tarefas = listaTarefas.querySelectorAll(("li"));

   const tarefaObjetos = new Array;
   const tarefasPossiveis = new Array;

   for(let i = 0; i < tarefas.length; i++){

      if(!tarefas[i].classList.contains("done")){

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
   
   dialogTarefasPossiveis(tarefasPossiveis, diaAgenda, 1);
}

export const minimizaAtraso = (evento) => {
   const botaoPressionado = evento.target
   const cabecalhoBotao = botaoPressionado.parentElement
   const listaTarefas = cabecalhoBotao.parentElement

   const diaAgenda = listaTarefas.querySelector((".content-data")).textContent;
   
   const tarefas = listaTarefas.querySelectorAll(("li"));

   const tarefaObjetos = new Array;
   const tarefasMinAtraso = new Array;

   for(let i = 0; i < tarefas.length; i++){

      if(!tarefas[i].classList.contains("done")){
         let descricaoTarefa = tarefas[i].querySelector((".content")).textContent;
         let inicioTarefa = tarefas[i].querySelector((".horarioInicio")).textContent;
         let fimTarefa = tarefas[i].querySelector((".horarioFim")).textContent;
   
         inicioTarefa = converterParaMinutos(inicioTarefa.slice(8))
         fimTarefa = converterParaMinutos(fimTarefa.slice(5))
   
         const objetoTarefa = {
            descricao: descricaoTarefa,
            horarioInicio: inicioTarefa,
            horarioFinal: fimTarefa,
            atraso: 0
         }
   
         tarefaObjetos.push(objetoTarefa);
      }
   }

   tarefaObjetos.sort(function(a, b){
      return a.horarioFinal - b.horarioFinal;
   });

   let time = 0;

   tarefasMinAtraso.push(0)

   for(let i = 0; i < tarefaObjetos.length; i++){
      let duracao = tarefaObjetos[i].horarioFinal - tarefaObjetos[i].horarioInicio

      let deadline = tarefaObjetos[i].horarioFinal

      tarefaObjetos[i].horarioInicio = time
      tarefaObjetos[i].horarioFinal = time + duracao;

      time += duracao;
      
      if(time > deadline && tarefasMinAtraso[0] < (time - deadline)){
         tarefasMinAtraso[0] = time - deadline

         tarefaObjetos[i].atraso = tarefasMinAtraso[0]
      }

      tarefasMinAtraso.push(tarefaObjetos[i]);
   }

   tarefasMinAtraso[0] = converterMinutosPara24Horas(tarefasMinAtraso[0])

   converterHorarioPara24Horas(tarefasMinAtraso)

   console.log(tarefasMinAtraso)
   
   dialogTarefasPossiveis(tarefasMinAtraso, diaAgenda, 2);
}

function converterParaMinutos(hora) {
   const [horas, minutos] = hora.split(':');
   return parseInt(horas) * 60 + parseInt(minutos);
}

function converterHorarioPara24Horas(listaHorarios) {
   for (let i = 1;i < listaHorarios.length;i++) {
      listaHorarios[i].horarioInicio = converterMinutosPara24Horas(listaHorarios[i].horarioInicio);
      listaHorarios[i].horarioFinal = converterMinutosPara24Horas(listaHorarios[i].horarioFinal);
   }
   return listaHorarios;
}

function converterMinutosPara24Horas(minutos) {
   const horas = Math.floor(minutos / 60);
   const minutosRestantes = minutos % 60;
   return `${String(horas).padStart(2, '0')}h:${String(minutosRestantes).padStart(2, '0')}m`;
}
 
export default BotaoOrdena