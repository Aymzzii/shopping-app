import React from 'react'

import { ImSearch } from 'react-icons/im';

import { createQueryObject } from '../helpers/helper';

import styles from './SearchBox.module.css'

function SearchBox({search, setSearch, setQuery}) {
    const searchHandler = () => {
        setQuery((query) => createQueryObject(query, { search }));
    }
    return (
        <div className={styles.search}>
            <input 
            value={search} 
            onChange={e => setSearch(e.target.value.toLowerCase().trim())} 
            placeholder='Search ...'/>
            <button onClick={searchHandler}>
                <ImSearch />
            </button> 
        </div>
    )
}

export default SearchBox
