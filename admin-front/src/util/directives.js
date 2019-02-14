
export default Vue => {
  Vue.directive('money', {
    twoWay: true,
    bind: function (el, binding) {
      let value = binding.value || 0

      let numero = value.toFixed(2).split('.')
      numero[0] = 'R$ ' + numero[0].split(/(?=(?:...)*$)/).join('.')

      return numero.join(',')
    }
  })
}
