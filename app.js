'use strict'

import { getDadosEstados } from './estados_cidades.js'
 


const mapa = document.querySelector('svg')

// Evento do click no estado
const getEstados = (event) => {
const estado = event.target.id.replace('BR-','');
preencherDados(estado)

}
mapa.addEventListener('click',getEstados)
