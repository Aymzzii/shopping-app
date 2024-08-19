import { React } from 'react';

import { Link } from 'react-router-dom';
import { TbListDetails, TbShoppingBag } from 'react-icons/tb';
import { MdDeleteOutline } from 'react-icons/md';
import styles from './Card.module.css';

import { productQuantity, shortenText } from "../helpers/helper";
import { useDispatch, useSelector } from 'react-redux';

import { addItem, decrease, increase, removeItem } from '../features/cart/cardSlice';
// import { useCard } from '../context/CardContext';

function Card({data}) {

    const {id, title, image, price} = data;

    // const [state, dispatch] = useCard();

    const state = useSelector((store) => store.card); 
    const dispatch = useDispatch();

    // const clickHandler = (type) => {
    //     dispatch({type, payload: data})
    // }

    const quantity = productQuantity(state, id);

    return (
    <div className={styles.card}>
        <img src={image} alt={title}/>
        <h3>{shortenText(title)}</h3>
        <p>{price} $</p>
        <div className={styles.actions}>
        <div>
            <Link to={`/products/${id}`}>
                <TbListDetails />
            </Link>
        </div>
        <div>
            {quantity > 1 && (
                <button onClick={() => dispatch(decrease(data))}>
                    -
                </button>
            )}
            {quantity === 1 && (
                <button onClick={() => dispatch(removeItem(data))}>
                    <MdDeleteOutline />
                </button>
            )}
            {!!quantity && <span>{quantity}</span>}
            {quantity === 0 ? (
                <button onClick={() => dispatch(addItem(data))}>
                    <TbShoppingBag />
                </button> 
            ) : (
                <button onClick={() => dispatch(increase(data))}>
                    +
                </button>
            )}
            </div>
        </div>
    </div>
    )
}

export default Card;
