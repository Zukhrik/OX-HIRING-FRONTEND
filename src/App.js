import React from 'react'
import {HomePage} from './view/home'
import {Route} from 'react-router-dom'
import {Routes} from 'react-router'
import {NotFoundPage} from './view/not-found-page'
import {useStore} from 'effector-react'
import {$appModel} from './models/app'
import {LoginPage} from './view/auth'
import {FilterPage} from './view/filter'

function App() {
  const {$app: {token}} = useStore($appModel)
  
  return (
    <Routes>
      <Route path='/' element={!!token ? <HomePage/> : <LoginPage/>}/>
      <Route path='/filter' element={<FilterPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default App
