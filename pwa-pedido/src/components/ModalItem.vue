<template>

  <q-modal v-model="opened" @hide="$emit('resetarPropModalListar')" @show="preencherModal()">
  <q-layout view="LHh lpR fff" container style="min-height: 60vh; min-width: 60vw;">

    <!-- cabeçalho -->
    <q-layout-header reveal>
      <q-toolbar>
        <q-btn flat @click="gotoCardapio()" round dense icon="close" />
        <q-toolbar-title v-if="!telaCarrinho">PREPARE SEU ITEM</q-toolbar-title>
        <q-toolbar-title v-else>EDITE SEU ITEM</q-toolbar-title>
        <q-btn flat v-if="telaCarrinho" size="lg" round dense icon="delete" />
      </q-toolbar>
    </q-layout-header>

    <!-- conteudo -->
    <q-page-container>
      <q-page style="padding-top: 2vh">
        <div class="modal-body row gutter-md">

          <div class="col-12 text-center text-weight-medium q-headline">
            {{valorModal.nome | uppercase}}
          </div>

          <div class="col-12 text-center q-body-1 text-weight-medium">
              {{valorModal.descricao | uppercase}}
          </div>

          <div class="col-12 text-center q-title text-weight-bold">
              {{valorModal.valor | formatarReal}}
          </div>

          <div class="col-12 text-center">
              QUANTIDADE
          </div>

          <div class="col-5">
            <q-btn
            v-if="valorModal.quantidade > 1"
            round
            :outline="true"
            color="negative"
            class="float-right"
            icon="remove"
            @click="adicionarRemoverQuantidadeItem(-1)"/>
          </div>

          <div class="col-2 text-center">
            <span class=" q-headline">{{valorModal.quantidade}}</span>
          </div>

          <div class="col-5">
            <q-btn
            round
            :outline="true"
            color="positive"
            class="float-left"
            icon="add"
            @click="adicionarRemoverQuantidadeItem(1)"/>
          </div>

          <div class="col-12 text-center q-headline text-weight-bold text-positive">
              {{valorModal.valor * valorModal.quantidade | formatarReal}}
          </div>

          <div class="col-12 text-center">
            <q-field
            label="OBSERVAÇÕES"
            :count="100">
              <q-input
              placeholder="EX: Sem salada, sem celola, etc"
              rows="2"
              type="textarea"
              v-model="valorModal.observacao"
              :clearable="true"
              :upper-case="true"
              max-length="100"/>
            </q-field>
          </div>

        </div>
      </q-page>
    </q-page-container>

    <!-- rodape -->
    <q-layout-footer class="row">
      <q-toolbar color="positive" class="col-6" v-if="!telaCarrinho">
        <q-btn flat class="full-width" label="ENVIAR PEDIDO" @click="finalizarPedido()"/>
      </q-toolbar>
      <q-toolbar color="secondary" class="col-6" v-if="!telaCarrinho">
        <q-btn flat class="full-width" label="ADICIONAR AO CARRINHO" @click="adicionarCarrinho()"/>
      </q-toolbar>
      <q-toolbar color="positive" class="col-12" v-else>
        <q-btn flat class="full-width" label="SALVAR EDIÇÃO" @click="editarItem(valorModal)"/>
      </q-toolbar>
    </q-layout-footer>

  </q-layout>
</q-modal>

</template>

<script>
import { mapActions, mapMutations } from 'vuex'

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
    },
    telaCarrinho: {
      type: Boolean
    }
  },
  data () {
    return {
      valorModal: {
        id: null,
        nome: null,
        descricao: null,
        valor: 0,
        quantidade: 1,
        observacao: null
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
    ...mapActions(['addItemCarrinhoAction']),
    ...mapMutations(['LOAD_CARRINHO']),
    // Método para fechar modal
    toggleModalClick () {
      this.$emit('resetarPropModalListar')
    },
    // preencher modal quando ele aparecer na tela
    preencherModal () {
      const {id, nome, valor, descricao, quantidade, observacao} = this.itemComputed

      this.valorModal.id = id
      this.valorModal.nome = nome
      this.valorModal.descricao = descricao
      this.valorModal.valor = valor || 0

      // se for carrinho
      this.valorModal.quantidade = quantidade || 1
      this.valorModal.observacao = observacao || null
    },
    // ir para o cardápio
    gotoCardapio () {
      // fazer a ação de adicionar ao carrinho
      this.valorModal.quantidade = 0
      this.valorModal.valorTotal = 0
      this.valorModal.observacao = null

      return this.toggleModalClick()
    },
    // Finalizar o pedido (envia os dados para o back)
    finalizarPedido () {
      this.$router.push('/pedidoFinalizado')
      return this.toggleModalClick()
    },
    // adicionar o item no modal, par ao carrinho
    adicionarCarrinho () {
      // this.valorModal.item = this.itemEscolhido
      this.addItemCarrinhoAction(this.valorModal)
      return this.toggleModalClick()
    },
    // adiciona ou remove a quantidade desejada do item
    adicionarRemoverQuantidadeItem (addOrRemove) {
      this.valorModal.quantidade += addOrRemove

      if (this.valorModal.quantidade <= 0) {
        this.valorModal.quantidade = 1
        return false
      }
    },
    editarItem (valorModal) {
      let carrinho = this.$q.localStorage.get.item('carrinho')
      // varro o carrinho e já altero o que tem que ser alterado
      carrinho.map(itm => {
        if (parseInt(itm.id) === parseInt(valorModal.id)) {
          itm.observacao = valorModal.observacao
          itm.quantidade = valorModal.quantidade
        }
      })
      // limpo o carrinho
      this.$q.localStorage.remove('carrinho')
      // e seto atualizado
      this.$q.localStorage.set('carrinho', carrinho)
      // atualizar o carrinho
      this.LOAD_CARRINHO()
      // atualizar a tela de carrinho (é gambiarra o $parent, mas ok)
      this.$parent.$emit('updateViewPai', carrinho)
      // fechar modal
      this.toggleModalClick()
    }
  }
}
</script>

<style>
.btnActions{
  margin-bottom: 5px;
}
</style>
