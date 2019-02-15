/**
 * É um padrão comumente visto para usar constantes para tipos de mutação em várias
 * implementações do Flux. Isso permite que o código aproveite as ferramentas como
 * os linters, e colocar todas as constantes em um único arquivo permite que seus
 * colaboradores tenham uma visão geral das mutações possíveis em todo o aplicativo
 */

// PRODUTOS
export const RESETAR_STATE_PRODUTOS = 'RESETAR_STATE_PRODUTOS'
export const SET_STATE_PRODUTO = 'SET_STATE_PRODUTO'

// MESA
export const RESETAR_STATE_MESA = 'RESETAR_STATE_MESA'
export const SET_STATE_MESA = 'SET_STATE_MESA'
