import React from 'react'
import ProductPage from './pp2'
import Products from './Products'
import ProductDetail from './ProductDetailPage/ProductDetailPage'

const main = () => {
  return (
    <div>
        <Products/>
        <ProductPage/>
        <ProductDetail/>
    </div>
  )
}

export default main