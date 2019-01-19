import moment from 'moment'

export default Vue => {
  Vue.filter('uppercase', (value) => {
    if (!value) return ''
    return value.toUpperCase()
  })

  Vue.filter('formatarReal', (value) => {
    if (!value) return 0
    if (value === 0) return 0

    if (Number(value) === value && value % 1 !== 0) {
      value = parseFloat(value)
    }

    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  })

  Vue.filter('formatarDataHoraParaTexto', (value) => {
    if (!value || Object.keys(value).length === 0) return ''
    return moment(value).locale('pt-br').format('llll')
  })
}
