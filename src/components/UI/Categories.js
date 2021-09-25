import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Categories.css';
import CategoryItem from '../items/CategoryItem';


const Categories = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        axios.get('https://api.thecatapi.com/v1/categories')
            .then(response => setCategories(response.data))
            .catch(error => console.log(error.message));
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="menu-block">
            <ul className="menu-block__list">
                {
                    categories.map(item => {
                        return (
                            <CategoryItem 
                                key={ item.id } 
                                name={ item.name } 
                                id={ item.id } 
                            />
                        );
                   }) 
                }
            </ul>
        </div>
    );
};

export default Categories;

