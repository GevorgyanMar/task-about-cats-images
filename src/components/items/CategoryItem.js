import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PassingIdContext } from '../contexts/PassItemIdContext';
import './CategoryItem.css';

const CategoryItem = ({ name, id }) => {
    const history = useHistory();

    const passingItemIdCtx = useContext(PassingIdContext);

    const redirectAndGetItemById = (name, id) => {
        history.push(`/${name}`);
        passingItemIdCtx.passItemIdHandler(id);
    };

    return (
        <li>
            <button
                type="button"
                className="menu-block__item-butn"
                onClick={ () => redirectAndGetItemById(name, id) }
            >
                { name }
            </button>
        </li>
    );
};

export default CategoryItem;
