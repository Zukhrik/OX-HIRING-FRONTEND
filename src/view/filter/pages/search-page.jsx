import React, {useCallback, useState} from 'react'
import {Col, Input, Row, Table, Typography} from 'antd'
import {FilterPageWrapper, SearchForm} from '../atoms'
import {useSearchParams} from 'react-router-dom'

export const SearchPage = () => {
  const {Title} = Typography
  const [searchParams, setSearchParams] = useSearchParams()
  const [text, setText] = useState('')
  
  const handleChange = useCallback((value) => {
    setText(value)
  }, [setText])
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if (text.trim().length >= 2) {
      searchParams.set('search', text)
    }
    setSearchParams(searchParams)
  }, [text, setSearchParams, searchParams])
  
  return (
    <FilterPageWrapper>
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <Title level={3}>Search page</Title>
        </Col>
        <Col span={24}>
          <SearchForm onSubmit={handleSubmit}>
            <Input.Search
              value={text}
              onChange={(e) => handleChange(e.target.value)}
            />
          </SearchForm>
        </Col>
        <Col span={24}>
          <Table/>
        </Col>
      </Row>
    </FilterPageWrapper>
  )
}