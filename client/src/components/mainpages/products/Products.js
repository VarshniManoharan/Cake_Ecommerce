import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productitem/Productitem'
import Filters from './Filters'
import LoadMore from './LoadMore'


function Products(){
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin

   
 

    return (
        <>
        <Filters />
        <div className="products">
           {
            products.map(product =>{
                return <ProductItem key={product._id} product={product}
                isAdmin={isAdmin}/>
            })
           }
        </div>
        
        <LoadMore />
        </>
    )

}

export default Products