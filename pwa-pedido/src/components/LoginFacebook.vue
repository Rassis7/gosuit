<template>
  <div>
    <fb-signin-button class="fb-signin-button" :params="fbSignInParams" @success="onSignInSuccessfb" @error="onSignInErrorfb">
      <q-btn size="md"  class="full-width" color="blue-10">
          Facebook
      </q-btn>
    </fb-signin-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'loginFacebookComponent',
  data () {
    return {
      fbSignInParams: {
        scope: 'email,user_likes',
        return_scopes: false
      }
    }
  },
  computed: {
    ...mapGetters(['getUserFB'])
  },
  methods: {
    ...mapActions(['signSuccesFB']),
    async onSignInSuccessfb (response) {
      const self = this
      this.signSuccesFB(response)
        .then(e => {
          self.$emit('atualizarUsuario', self.getUserFB, 'facebook')
        })
    },
    onSignInErrorfb (error) {
      this.$toast.bottom('Erro ao logar no facebook')
      console.error(error)
    }
  }
}
</script>

<style scoped>

</style>
