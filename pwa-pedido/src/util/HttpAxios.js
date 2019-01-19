import axios from 'axios'
import { LocalStorage } from 'quasar'

const token = (LocalStorage.get.item('token') != null) ? `Bearer :${LocalStorage.get.item('token')}` : ''

const paramAxios = {
  baseURL: 'http://localhost:3000',
  timeout: 20000,
  headers: {
    'token': token
  }
}

export default axios.create(paramAxios)
