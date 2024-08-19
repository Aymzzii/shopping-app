import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../components/Card';
import Loader from '../components/Loader';
import SearchBox from '../components/SearchBox';
import SideBar from '../components/SideBar';

import styles from './ProductsPage.module.css';

import { searchProducts } from '../helpers/helper';
import { categoryProducts } from '../helpers/helper';

// import { useProducts } from '../context/ProductContext';
import { fetchProducts } from '../features/product/productSlice';

import { getInitialQuery } from '../helpers/helper';

function ProductsPage() {

    // const products = useProducts();
    const dispatch = useDispatch();
    const {products, loading} = useSelector((store) => store.product);
    const store = useSelector((store) => store.product);
    console.log(store);
    console.log(products);
    // const products = [];

    const [displayed, setDisplayed] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    useEffect(() => {
        setDisplayed(products);
        getInitialQuery(searchParams)
    }, [products]);

    useEffect(() => {
        setSearchParams(query);
        let finalProducts = searchProducts(products, query.search);
        finalProducts = categoryProducts(finalProducts, query.category);
        setDisplayed(finalProducts);
    }, [query]);    

    return (
        <div>
        <SearchBox 
        search={search} 
        setSearch={setSearch}  
        setQuery={setQuery}
        />
        <div className={styles.container}>
            <div className={styles.products}>
                {loading && <Loader />}
                {displayed.map((p) => (
                    <Card key={p.id} data={p}/>
                ))}
            </div>
            <SideBar 
            setQuery={setQuery} 
            query={query}/>
        </div>
        </div>
    )
}

export default ProductsPage
