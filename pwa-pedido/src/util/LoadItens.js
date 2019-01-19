import FBSignInButton from 'vue-facebook-signin-button'
import GSignInButton from 'vue-google-signin-button'
import filters from '../util/Filters'
import VueLazyload from 'vue-lazyload'

export default Vue => {
  Vue.use(GSignInButton)
  Vue.use(FBSignInButton)

  Vue.use(VueLazyload, {
    preLoad: 2,
    error: '../assets/error-item.svg',
    loading: '../assets/error-item.svg',
    attempt: 1
  })

  filters(Vue)
}
