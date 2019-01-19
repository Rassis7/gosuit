<template>

  <q-modal
   v-model="opened"
   @hide="$emit('resetarPropModalListar')"
   @show="preencherModal()"
   position="bottom"
  >

    <!-- conteudo -->
    <div class="modal-body">
      <q-card inline class="full-width">
        <q-card-media>
          <img :src="valorModal.img" :alt="valorModal.nome">
        </q-card-media>
        <q-card-title>
          <p class="q-title text-weight-bold">{{valorModal.nome | uppercase}}</p>
        </q-card-title>
        <q-card-main>
          <p class="q-headline text-warning">{{valorModal.valor | formatarReal}}</p>
          <p class="q-body-2 text-weight-light">{{valorModal.descricao | uppercase}}</p>
        </q-card-main>
      </q-card>
    </div>

  </q-modal>

</template>

<script>

export default {
  name: 'modalItemComponent',
  props: {
    toggleModal: {
      type: Boolean,
      default: false
    },
    itemEscolhido: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      valorModal: {
        id: null,
        nome: null,
        descricao: null,
        valor: 0,
        img: null
      }
    }
  },
  computed: {
    opened: {
      get: function () {
        return this.toggleModal
      },
      set: function () {
        this.$emit('opened')
      }
    },
    itemComputed: function () {
      return this.itemEscolhido
    }
  },
  methods: {
    // Método para fechar modal
    toggleModalClick () {
      this.$emit('resetarPropModalListar')
    },
    // preencher modal quando ele aparecer na tela
    preencherModal () {
      const {id, nome, valor, descricao, img} = this.itemComputed

      this.valorModal.id = id
      this.valorModal.nome = nome
      this.valorModal.descricao = descricao
      this.valorModal.valor = valor || 0
      this.valorModal.img = `${img}/355/150/?image=15`
    },
    // ir para o cardápio
    gotoCardapio () {
      // fazer a ação de adicionar ao carrinho
      this.valorModal.quantidade = 0
      this.valorModal.valorTotal = 0
      this.valorModal.observacao = null

      return this.toggleModalClick()
    }
  }
}
</script>

<style>
.btnActions{
  margin-bottom: 5px;
}
</style>
