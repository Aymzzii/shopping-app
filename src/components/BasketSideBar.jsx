import React from 'react'
import { BsPatchCheck } from 'react-icons/bs'
import { FaHashtag } from 'react-icons/fa'
import {TbChecklist} from 'react-icons/tb'

import styles from "./BasketSideBar.module.css"

import { checkout } from '../features/cart/cardSlice'

function BasketSideBar({state, dispatch, data}) {

    console.log(state)
    return (
        <div className={styles.sidebar}> 
            <div>
                <TbChecklist />
                <p>Total:</p>
                <span>{state.total}</span>
            </div>
            <div>
                <FaHashtag />
                <p>Quantity:</p>
                <span>{state.itemsCounter}</span>
            </div>
            <div>
                <BsPatchCheck />
                <p>Status:</p>
                <span>{!state.checkout && "Pending..."}</span>
            </div>
            <button onClick={() => dispatch(checkout())}>Checkout</button>
        </div>
    )
}

export default BasketSideBar
