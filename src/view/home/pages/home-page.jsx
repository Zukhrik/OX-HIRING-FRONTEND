import React, {useCallback} from 'react'
import {useProductsList} from '../../../hooks/products'
import {useStore} from 'effector-react'
import {$productModel} from '../../../models/products'
import {HomePageWrapper} from '../atoms'
import {Button, Col, Row, Table, Typography} from 'antd'
import {useSearchParams} from 'react-router-dom'
import {useNavigate} from 'react-router'
import {columns} from '../data/columns'

export const HomePage = () => {
  useProductsList()
  const {Title} = Typography
  const navigate = useNavigate()
  const {$productList: {data, loading}} = useStore($productModel)
  const [searchParams, setSearchParams] = useSearchParams()
  
  const handleChangePage = useCallback((e) => {
    const current = e.current
    const size = e.pageSize
    searchParams.set('page', String(current))
    searchParams.set('size', String(size))
    setSearchParams(searchParams)
    
  }, [searchParams, setSearchParams])
  
  return (
    <HomePageWrapper>
      <Row wrap={false} justify='space-between' className='header'>
        <Col>
          <Title level={3}>Product List</Title>
        </Col>
        <Col>
          <Button onClick={() => navigate('/filter')} size='large' color='primary' type='link'>
            Filter page
          </Button>
        </Col>
      </Row>
      <Table
        dataSource={data ? data?.items?.map(item => ({...item, key: item.id})) : []}
        columns={columns}
        loading={loading}
        onChange={(e) => handleChangePage(e)}
        pagination={{
          current: data?.page,
          total: data?.total_count,
          showLessItems: true,
          hideOnSinglePage: true,
          showTotal: false
        }}
      />
    </HomePageWrapper>
  )
}