<template>
  <div>
    <g-signin-button :params="googleSignInParams" @success="onSignInSuccessg" @error="onSignInErrorg">
      <q-btn size="md" class="full-width" color="red-10">
          Google
      </q-btn>
    </g-signin-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'loginGoogleComponent',
  data () {
    return {
      googleSignInParams: {
        client_id: '811980763298-rmicblor7hkpqiiqu7u1iq3jb8bi3dnj.apps.googleusercontent.com'
      }
    }
  },
  computed: {
    ...mapGetters(['getUserG'])
  },
  methods: {
    ...mapActions(['signSuccesG']),
    onSignInSuccessg (googleUser) {
      const self = this

      this.signSuccesG(googleUser)
        .then(e => {
          self.$emit('atualizarUsuario', this.getUserG, 'google')
        })
    },
    onSignInErrorg (error) {
      this.$toast.bottom('Erro ao logar no google')
      console.error(error)
    }
  }
}
</script>

<style scoped>

</style>
