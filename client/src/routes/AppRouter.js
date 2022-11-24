import { Navigate, Route, Routes } from "react-router-dom";

import Cart from "../components/cart/Cart";
import Category from '../pages/category';
import Product from "../pages/product";
import React from 'react'

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Category />} />
                <Route path="/:categoryName" element={<Category />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes></>
    )
}

export default AppRouter