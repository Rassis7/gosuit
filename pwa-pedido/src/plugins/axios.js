import axios from '../util/HttpAxios'

export default ({ Vue }) => {
  Vue.prototype.$axios = axios
}
