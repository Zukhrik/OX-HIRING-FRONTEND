import {combine, createStore} from 'effector'
import {saveToken} from './events'

const token = localStorage.getItem('token')

const $app = createStore({
  token: token
})
  .on(saveToken, (state, token) => ({...state, token}))

export const $appModel = combine({
  $app
})