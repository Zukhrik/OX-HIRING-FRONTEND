import {combine, createStore} from 'effector'
import {fetchProductList} from './effects'

const $productList = createStore({data: {}, error: false, loading: false})
  .on(fetchProductList.pending, (state, loading) => ({...state, loading}))
  .on(fetchProductList.fail, (state, {error}) => ({
    ...state, error, data: {}, loading: false
  }))
  .on(fetchProductList.done, (state, {result}) => ({
    ...state, data: result.data, error: false, loading: false
  }))

export const $productModel = combine({
  $productList
})