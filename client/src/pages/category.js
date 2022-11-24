import '../styles/category.css';

import React, { useEffect } from 'react';
import { setProducts, setProductsWithCategories } from '../redux/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

import ItemCard from '../components/category/itemCard';
import { LOAD_ALl } from '../services/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

function Category() {
  const dispatch = useDispatch()
  const { loading, data } = useQuery(LOAD_ALl)
  const params = useParams();
  const productsWithCategories = useSelector((state) => state.product.productsWithCategories);
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    if (data && data.categories) {
      dispatch(setProductsWithCategories(data.categories))
      dispatch(setProducts(data.categories[0].products))
    }
  }, [data, dispatch])

  useEffect(() => {
    if (params.categoryName && productsWithCategories) {
      const categoryProducts = productsWithCategories.find(_productCategory => _productCategory.name === params.categoryName);
      if (categoryProducts) {
        dispatch(setProducts(categoryProducts.products))
      }
    }
  }, [params.categoryName, dispatch, productsWithCategories])


  return (
    <div className='items__container'>
      <span className='items__header'>
        Category name
      </span>
      {
        loading && <>
          <span>
            Loading...
          </span>
        </>
      }
      <div className='items__list'>
        {products && products.map((_product, index) => (
          <ItemCard key={index} data={_product} isDisabled={!_product.inStock} />
        ))
        }
      </div>
    </div>
  )
}

export default Category