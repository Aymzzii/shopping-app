import React from 'react'

// import { useCard } from '../context/CardContext'
import { useSelector, useDispatch } from 'react-redux';

import BasketCard from '../components/BasketCard';
import BasketSideBar from '../components/BasketSideBar';
import styles from "./CheckOutPage.module.css"

function CheckOutPage() {

    // const [state, dispatch] = useCard();

    const state = useSelector((store) => store.card); 
    const dispatch = useDispatch();

    // const clickHandler = (type, payload) => {
    //     dispatch({type, payload})
    // }

    if(!state.itemsCounter) {
        return <div className={styles.container}><p>Empty</p></div>
    }

    return (
        <div className={styles.container}>
            <BasketSideBar state={state} dispatch={dispatch}/>
            <div className={styles.products}>
                {state.selectedItems.map((product) => (
                   <BasketCard 
                   data={product}
                   dispatch={dispatch} 
                   key={product.id}
                   />
                ))}
            </div>
        </div>
    )
}

export default CheckOutPage
