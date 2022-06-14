import {createEvent} from 'effector'
import {fetchProductList} from './effects'

export const productListMount = createEvent()

productListMount.watch(fetchProductList)