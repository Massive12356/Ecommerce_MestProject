import React from 'react'
import { useParams, useSearchParams } from 'react-router'

const ProductDetails = () => {
    const {id} =useParams()
    const [searchParams] =useSearchParams()


  return (
    <div>
      <h1>Product Detail</h1>
      <p>We have the Products with id of {id} using path Params</p>
      <p>We have the Products with id of {searchParams.get('id')} using query Params</p>

    </div>
  )
}

export default ProductDetails
