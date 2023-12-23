import React from 'react'
import Product from './Product'

const Products = () => {
  return (
    <div className='container mx-auto py-14'>
      <div className="premuim mb-16">
        <h2 className="products__title text-secondaryColor text-2xl font-bold mb-5">Премиум</h2>
        <div className="product__inner grid grid-cols-3 gap-8">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <div className="junior-suite mb-16">
        <h2 className="products__title text-secondaryColor text-2xl font-bold mb-5">Полулюкс</h2>
        <div className="product__inner grid grid-cols-3 gap-8">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <div className="standart mb-16">
        <h2 className="products__title text-secondaryColor text-2xl font-bold mb-5">Стандарт</h2>
        <div className="product__inner grid grid-cols-3 gap-8">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  )
}

export default Products