import React, {useCallback} from 'react'
import {useProductsList} from '../../../hooks/products'
import {useStore} from 'effector-react'
import {$productModel} from '../../../models/products'
import {HomePageWrapper} from '../atoms'
import {Table, Typography} from 'antd'
import {useSearchParams} from 'react-router-dom'

export const HomePage = () => {
  useProductsList()
  const {$productList: {data, loading}} = useStore($productModel)
  const {Title} = Typography
  const [searchParams, setSearchParams] = useSearchParams()
  
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      width: 65
    },
    {
      title: 'Name',
      dataIndex: 'productName',
      key: 'productName'
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
      key: 'sku'
    },
    {
      title: 'SUPPLIER',
      dataIndex: 'supplier',
      key: 'supplier'
    },
    {
      title: 'BARCODE',
      dataIndex: 'barcode',
      key: 'barcode'
    },
    {
      title: 'Time',
      dataIndex: 'lastUpdateTime',
      key: 'lastUpdateTime'
    }
  ]
  
  const handleChangePage = useCallback((e) => {
    const current = e.current
    const size = e.pageSize
    searchParams.set('page', String(current))
    searchParams.set('size', String(size))
    setSearchParams(searchParams)
    
  }, [searchParams, setSearchParams])
  
  return (
    <HomePageWrapper>
      <Title level={3}>Product List</Title>
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