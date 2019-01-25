<template>
  <div>
      <div class="row justify-center items-center content-center">
        <div class="col-4 dark">
            <q-field
              icon="place"
              :count="10"
              helper="Some helper"
            >
              <q-input dark color="blue" v-model="text" />
            </q-field>

            <q-field
              icon="place"
              :count="10"
              helper="Some helper"
            >
              <q-input dark color="blue" v-model="text" />
            </q-field>

        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      text: '',
      text2: '',
      email: '',
      select: 'bucharest',
      group: 'pineapple',
      group2: ['paris'],
      group3: 'london',
      chips: ['Jim'],
      color: null,
      date: null,
      rating: 0,
      error: true,
      warning: false
    }
  }
}
</script>

<style scoped>
.dark {
  background-color: #000 !important
}
</style>
