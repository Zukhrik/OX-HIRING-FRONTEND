import {httpGet} from './index'

export default {
  getProducts: ({params}) => httpGet({url: '/variations', params})
}