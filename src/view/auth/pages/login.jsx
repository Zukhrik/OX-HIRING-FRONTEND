import React from 'react'
import {AuthWrapper} from '../atoms'
import {Button, Col, Input, Row, Spin, Typography} from 'antd'
import {useLogin} from '../../../hooks/auth'
import {Controller} from 'react-hook-form'

export const LoginPage = () => {
  //Hooks
  const {onSubmit, form: {control, handleSubmit, formState: {isSubmitting}}} = useLogin()
  const {Title} = Typography
  
  return (
    <AuthWrapper onSubmit={handleSubmit(onSubmit)}>
      <Row gutter={[0, 16]} className='auth-form'>
        <Col span={24}>
          <Title level={2}>Sign up</Title>
        </Col>
        <Col span={24}>
          <Controller
            name='company'
            control={control}
            render={({field: {onChange, value}, formState: {errors}}) => (
              <Input
                value={value}
                size='large'
                onChange={onChange}
                placeholder='Enter company name'
                status={!!errors?.company && 'error'}
              />
            )}
          />
        </Col>
        <Col span={24}>
          <Controller
            name='username'
            control={control}
            render={({field: {value, onChange}, formState: {errors}}) => (
              <Input
                value={value}
                size='large'
                status={!!errors?.username && 'error'}
                onChange={onChange}
                placeholder='Enter username'
              />
            )}
          />
        </Col>
        <Col span={24}>
          <Controller
            name='password'
            control={control}
            render={({field: {onChange, value}, formState: {errors}}) => (
              <Input.Password
                size='large'
                value={value}
                status={!!errors?.password && 'error'}
                onChange={onChange}
                placeholder='Enter password'
              />
            )}
          />
        </Col>
        <Col span={24} className='buttons-wrapper'>
          <Button type='primary' htmlType='submit' size='large' icon={isSubmitting && <Spin size='small'/>} disabled={isSubmitting}>
            Save
          </Button>
        </Col>
      </Row>
    </AuthWrapper>
  )
}