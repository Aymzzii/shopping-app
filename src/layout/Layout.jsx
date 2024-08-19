import React from 'react'

import { PiShoppingCartSimpleBold } from 'react-icons/pi'

import { Link } from 'react-router-dom'
// import { useCard } from '../context/CardContext'

import styles from "./Layout.module.css"
import { useSelector } from 'react-redux'

function Layout({ children }) {

    // const [state] = useCard();
    // console.log(state.itemsCounter);

    const state = useSelector((store) => store.card);

    return (
        <>
        <header className={styles.header}>
            <Link to="/products">BotoShop</Link>
            <Link to="checkout">
                <div>
                <PiShoppingCartSimpleBold />
                {!!state.itemsCounter && <span>{state.itemsCounter}</span>} 
                </div>
            </Link>
        </header>
        {children}
        <footer className={styles.footer}>Developed By Aynaz</footer>
        </>
    )
}

export default Layout
