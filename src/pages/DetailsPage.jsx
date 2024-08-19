import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import { SiOpenproject } from 'react-icons/si';
import { IoMdPricetag } from 'react-icons/io';
import { FaArrowLeft } from 'react-icons/fa';

import Loader from "../components/Loader";
import store from '../app/store';
// import { useProductDetails } from '../context/ProductContext';
import { fetchProducts } from '../features/product/productSlice';

import styles from "./DetailsPage.module.css";

function Detailspage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    // const productDetails = useProductDetails(+id)
    const productDetails = useSelector(store => 
        store.product.products.find(item => item.id === +id))
    console.log(productDetails)

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    if(!productDetails) return <Loader />
    return (
    <div className={styles.container}>
        <img src={productDetails.image} alt={productDetails.title}/>
        <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}><SiOpenproject />{productDetails.category}</p>
        <div>
            <span className={styles.price}>
                <IoMdPricetag /> 
                {productDetails.price} $
            </span>
            <Link to="/products">
            <FaArrowLeft />
                <span>Back to shop</span>
            </Link>
        </div>
        </div>
    </div>
    )
}

export default Detailspage
