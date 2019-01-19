import Vue from 'vue'

import handler from './Handler'

const MixinManager = Vue.extend({
  mixins: [
    handler
  ]
})

export default new MixinManager()
