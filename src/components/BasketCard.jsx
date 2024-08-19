import React from 'react'
import { shortenText } from '../helpers/helper'
import { MdDeleteOutline } from 'react-icons/md'

import styles from "./BasketCard.module.css"

import { decrease, increase, removeItem } from '../features/cart/cardSlice';

function BasketCard({data, dispatch}) {

    const {image, title, quantity} = data

    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <p>{shortenText(title)}</p>
            <div className={styles.actions}>
                {quantity === 1 && (
                    <button onClick={() => dispatch(removeItem(data))}>
                        <MdDeleteOutline />
                    </button>
                )}
                {quantity > 1 && (
                    <button onClick={() => dispatch(decrease(data))}>
                        -
                    </button>
                )}
                <span>{quantity}</span>
                <button onClick={() => dispatch(increase(data))}>
                    +
                </button>
            </div>
        </div>
    )
}

export default BasketCard
