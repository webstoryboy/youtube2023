import React from 'react'

import { categories, searchCate, snsCate } from "../../data/category";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href="/">
                    <em></em>  
                    <span>webs<br />youtube</span>
                </a>
            </h1>
            <div className='header__cate'>
                <ul>
                    {categories.map((cate, key) => (
                        <li key={key}>
                            <Link to={cate.src}>
                                {cate.icon}{cate.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className='keyword'>
                    {searchCate.map((cate, key) => (
                        <li key={key}>
                            <Link to={cate.src}>
                                {cate.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='header__sns'>
                <ul>
                    {snsCate.map((sns, key) => (
                        <li key={key}>
                            <a href={sns.url} target="_blank" rel="noopener noreferrer" aria-label={sns.title}>
                                <span>{sns.icon}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header