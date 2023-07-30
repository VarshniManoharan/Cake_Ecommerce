import React, {useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'


import {GlobalState} from '../../GlobalState'


const Pages= () =>{
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <div>
           <Routes>
            <Route path="/" exact element={<Products/>}/>
            <Route path="/detail/:id" exact element={<DetailProduct/>}/>

            <Route path="/login" exact element={isLogged? NotFound :<Login/>}/>
            <Route path="/register" exact element={isLogged? NotFound : <Register/>}/>

            <Route path="/category" exact element={isAdmin?<Categories/> : NotFound}/>
            <Route path="/create_product" exact element={isAdmin?<CreateProduct /> : NotFound}/>
            <Route path="/edit_product/:id" exact element={isAdmin?<CreateProduct /> : NotFound}/>

            <Route path="/cart" exact element={<Cart/>}/>

            <Route path="*" exact element={<NotFound/>}/>
           </Routes>
        </div>
    )
}

export default Pages