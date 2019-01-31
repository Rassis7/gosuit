<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'baseDataTable',
  data () {
    return {
      filter: '',
      loading: false,
      serverPagination: {
        page: 1,
        rowsNumber: 20 // specifying this determines pagination is server-side
      }
    }
  },
  methods: {
    updateRowsTable (data, pagination) {
      // updating pagination to reflect in the UI
      this.serverPagination = pagination

      // we also set (or update) rowsNumber
      this.serverPagination.rowsNumber = data.rowsNumber

      // then we update the rows with the fetched ones
      this.serverData = data.rows
    }
  },
  mounted () {
    // once mounted, we need to trigger the initial server data fetch
    this.request({
      pagination: this.serverPagination,
      filter: this.filter
    })
  }
}
</script>

<style scoped>

</style>
