import {productListMount} from '../../models/products'
import {useEffect, useMemo} from 'react'
import {useSearchParams} from 'react-router-dom'

export function useProductsList() {
  const [searchParams] = useSearchParams()
  const sizeParams = searchParams.get('size')
  const pageParams = searchParams.get('page')
  
  const params = useMemo(() => {
    return {
      size: (sizeParams && sizeParams !== 10) ? sizeParams : 10,
      page: pageParams ? pageParams : 1
    }
  }, [pageParams, sizeParams])
  
  useEffect(() => {
    productListMount({params})
  }, [params])
  
}