import React, { useState } from 'react';

import { FaListUl } from 'react-icons/fa';

import { createQueryObject } from '../helpers/helper';
import { categories } from '../constants/list';

import styles from "./SideBar.module.css";

function SideBar({setQuery, query}) {
    const categoryHandler = (event) => {
        const {tagName} = event.target;
        const category = event.target.innerText.toLowerCase();
        if (tagName !== "LI") return;
        setQuery((query) => createQueryObject(query, { category }));
    }
    return (
        <div className={styles.sidebar}>
            <div>
                <FaListUl />
                <p>Categories</p>
            </div>
            <ul onClick={categoryHandler}>
                {categories.map((i) => 
                <li 
                key={i.id} 
                className={
                    i.type.toLowerCase() === query.category 
                    ? styles.selected 
                    : null}>
                    {i.type}
                </li>)}
            </ul>
        </div>
    )
}

export default SideBar
