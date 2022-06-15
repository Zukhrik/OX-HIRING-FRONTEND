import React, {useState} from 'react'
import {Col, Input, Row, Table, Typography} from 'antd'
import {FilterPageWrapper} from '../atoms'
import {fruitsColumn, fruitsData} from '../data/fruits'

export const FilterPage = () => {
  const {Title} = Typography
  const [text, setText] = useState('')
  
  function filterByValue(array, value) {
    return array.filter((item) => JSON.stringify(item).toLowerCase().indexOf(value.toLowerCase()) !== -1)
  }
  
  return (
    <FilterPageWrapper>
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <Title level={3}>Filter page</Title>
        </Col>
        <Col span={24}>
          <Input.Search
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Col>
        <Col span={24}>
          <Table
            columns={fruitsColumn}
            dataSource={filterByValue(fruitsData, text).map(item => ({...item, key: item.id}))}
          />
        </Col>
      </Row>
    </FilterPageWrapper>
  )
}