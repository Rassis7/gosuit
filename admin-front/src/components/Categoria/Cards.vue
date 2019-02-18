<template>
  <div>
      <div v-if="categorias.length == 0">
        <q-alert
          class="full-width"
          color="orange"
          icon="warning"
          message="OPSSS...Parece que você não possui nenhuma categoria cadastrada!"
          detail="Para cadastrar produtos, você precisa definir as categorias antes. Para isso, basta clicar no botão que se encontra no final da tela e posteriormente clicar em 'Cadastrar categorias'!"
        />
      </div>
      <q-card v-for="c in categorias" :key="c.id" inline class="text-center q-ma-sm">
        <q-card-title>
          {{c.nome | capitalize}}
        </q-card-title>

        <q-card-separator />

        <q-card-actions>
          <q-btn flat color="warning" label="editar" class="q-mr-sm" @click="editar(c)"/>
          <q-btn flat color="primary" label="remover" class="q-mr-sm" @click="remover(c)"/>
        </q-card-actions>
      </q-card>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'cardsCategoriaComponent',
  data () {
    return {
      categorias: []
    }
  },
  methods: {
    ...mapMutations(['SET_STATE_CATEGORIA']),
    editar (e) {
      this.SET_STATE_CATEGORIA(e)
      this.$emit('openModalCadastroPai')
    },
    remover (c) {
      this.$q.dialog({
        title: 'Atenção!',
        message: `Deseja excluir a categoria ${c.nome}?`,
        color: 'primary',
        ok: 'Salvar',
        cancel: 'Cancelar'
      }).then(nome => {
        // Excluir
      }).catch(() => {
        return true // para não da erro no console
      })
    }
  },
  created: function () {
    // fazer algum ajax aqui para pegar do BD
    var categoriaFake = [
      {
        id: 1,
        nome: 'refrigerantes'
      },
      {
        id: 2,
        nome: 'lanches'
      },
      {
        id: 3,
        nome: 'pizzas'
      },
      {
        id: 4,
        nome: 'drinks'
      },
      {
        id: 5,
        nome: 'cervejas'
      }
    ]

    this.categorias = categoriaFake
  }
}
</script>

<style scoped>

</style>
