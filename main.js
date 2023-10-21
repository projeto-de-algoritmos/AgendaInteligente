import { handleNovoItem } from './assets/js/components/criaTarefa.js'
import { carregaTarefa } from './assets/js/components/carregaTarefa.js'

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem) 

carregaTarefa()