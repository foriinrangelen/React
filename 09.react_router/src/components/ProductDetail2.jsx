import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductDetail2 = () => {
  const [query, setQuery] = useSearchParams()

  // 쿼리스트링으로 넘겨받은 데이터를 가져오는 함수 : query.get('name')
  // ex) http://localhost:300/product?cate=shirt
  //    cate에 연결된 값 접근방법 => query.get('cate') => shirt
  console.log('product에서 전달받은 값', query.get('cate'))
  const all = query.get('cate')
  console.log(all)
  return <div>ProductDetail2</div>
}

export default ProductDetail2
