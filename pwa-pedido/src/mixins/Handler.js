import { Notify } from 'quasar'

export default {
  methods: {
    response: (statusCode, msg) => {
      let type, msgAux, icon
      switch (statusCode) {
        case 200:
          msgAux = 'Ação realizada com sucesso'
          icon = 'check_circle_outline'
          type = 'secondary'
          break
        case 201:
          msgAux = 'Item criado com sucesso'
          icon = 'check_circle_outline'
          type = 'secondary'
          break
        case 204:
          break
        case 400:
          msgAux = 'Erro ao executar a ação'
          icon = 'error_outline'
          type = 'negative'
          break
        case 401:
          msgAux = 'Não autorizado'
          type = 'negative'
          icon = 'lock'
          break
        case 500:
          msgAux = 'Erro interno do servidor'
          icon = 'mood_bad'
          type = 'negative'
          break
        default:
          msgAux = 'Ação não identificada'
          type = 'dark'
          break
      }

      const message = msg || msgAux
      return Notify.create({message, type, icon})
    }
  }
}
