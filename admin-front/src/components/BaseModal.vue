<template>
  <div>
    <q-modal v-model="opendComputed" :content-css="{minWidth: '50vw', minHeight: '30vh'}" @hide="fecharModal">
      <q-modal-layout>
        <q-toolbar>
          <q-toolbar-title>
            <slot name="header"></slot>
          </q-toolbar-title>
        </q-toolbar>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>

        <q-toolbar color="white">
            <slot name="footer"></slot>
        </q-toolbar>

      </q-modal-layout>
    </q-modal>
  </div>
</template>

<script>
export default {
  name: 'BaseModalComponent',
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    opendComputed: {
      get: function () {
        return this.opened
      },
      set: function (opened) {
        return this.opened
      }
    }
  }
}
</script>

<style scoped>

</style>
