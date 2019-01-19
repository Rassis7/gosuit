<template>
  <div>
      <q-item multiline v-for="(item, index) in produtos" v-bind:key="index">

       <!-- Imagem -->
        <q-item-side @click.native="itemModalListar(item)">
          <q-item-tile icon>
            <img v-lazy="`${item.img}/50/50/?image=${(index + parseInt(item.valor))}`" :alt="item.nome" style="{width: 50px}">
          </q-item-tile>
        </q-item-side>


        <!-- Conteúdo -->
        <q-item-main @click.native="itemModalListar(item)">
          <q-item-tile label>
            <span class="text-weight-medium">{{item.nome | uppercase}}</span>
          </q-item-tile>
          <q-item-tile v-if="item.descricao" sublabel lines="2">{{item.descricao | uppercase | limitarCaracteres(20)}}</q-item-tile>
        </q-item-main>

        <!-- Preço -->
        <q-item-side right @click.native="itemModalListar(item)">
            <q-item-tile stamp>
              <span class="text-weight-bold q-subheading" color="primary">{{item.valor | formatarReal}}</span>
              <span class="text-weight-light" v-if="telaCarrinho"> X {{item.quantidade}}</span>
            </q-item-tile>
        </q-item-side>

        <!-- opções menu -->
        <q-item-side v-if="telaCarrinho">
            <q-btn flat round dense icon="delete" size="lg" @click.native="deletarItem(item)"/>
        </q-item-side>
      </q-item>

    <modal-item :toggle-modal="opened" :item-escolhido="itemSelecionadoDaLista" @resetarPropModalListar="opened = false"></modal-item>
  </div>
</template>

<script>
import modalItem from '../components/ModalItem'
import {mapActions} from 'vuex'

export default {
  name: 'ItemListaProdutosComponent',
  props: ['ocultarInfos', 'itensProdutos', 'telaCarrinho'],
  components: {modalItem},
  data () {
    return {
      opened: false,
      itemSelecionadoDaLista: {}
    }
  },
  computed: {
    produtos () {
      return this.itensProdutos
    }
  },
  methods: {
    ...mapActions(['removerItemAction']),
    itemModalListar (itemPayload) {
      this.itemSelecionadoDaLista = itemPayload
      this.opened = !this.opened
    },
    // deleta item da lista
    async deletarItem (itemPedido) {
      await this.$q.dialog({
        title: 'Atenção',
        message: `Deseja remover o item ${itemPedido.nome}?`,
        ok: 'SIM',
        cancel: 'NÃO'
      })
        .then(() => {
          // Não tenho "removerItemAction" especificado aqui (no vuex), pq self representa o this do componente filho
          this.removerItemAction(itemPedido)
            .then(() => {
              return this.$emit('updateViewPai')
            })
          this.$q.notify('Item removido!')
        })
    }
  }
}
</script>

<style>
</style>
