import {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import httpClient from '../../services'

export function useLogin() {
  
  const scheme = Yup.object().shape({
    company: Yup.string().required('required_field'),
    username: Yup.string().required('required_field'),
    password: Yup.string().required('required_field')
  })
  
  const onSubmit = useCallback(async (value) => {
    const params = new FormData()
    params.append('_username', value.username)
    params.append('_password', value.password)
    params.append('_subdomain', value.company)
    
    try {
      if (params) {
        const res = await httpClient.post('/security/auth_check', params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          }
        })
        
        if (res) {
          localStorage.setItem('token', res.data.token)
          window.location.reload(true)
        }
      }
    } catch (e) {
      console.error(e)
    }
    
  }, [])
  
  const form = useForm({
    defaultValues: {
      company: '',
      username: '',
      password: ''
    },
    resolver: yupResolver(scheme)
  })
  
  return {onSubmit, form}
}