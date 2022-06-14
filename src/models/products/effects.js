import {createEffect} from 'effector'
import products from '../../services/products'

export const fetchProductList = createEffect({
  handler: products.getProducts
})