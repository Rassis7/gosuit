export default Vue => {
  // Deixar primeira letra maiuscula
  Vue.filter('capitalize', value => {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  })

  // Formatar para real
  Vue.filter('formatReal', (numero) => {
    numero = numero.toFixed(2).split('.')
    numero[0] = 'R$ ' + numero[0].split(/(?=(?:...)*$)/).join('.')
    return numero.join(',')
  })
}
