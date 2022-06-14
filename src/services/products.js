import {httpGet} from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProducts: ({params}) => httpGet({url: '/variations', params})
}