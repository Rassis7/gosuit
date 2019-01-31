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
