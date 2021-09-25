import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { PassingIdContext } from '../contexts/PassItemIdContext';
import './LoadedItemImages.css';


const LoadedItemImages = () => {
    const [itemImagesData, setItemImagesData] = useState([]);
    const [limit, setLimit] = useState(10);

    const passingItemIdCtx = useContext(PassingIdContext);
    const item_id = passingItemIdCtx.itemId;

    const max = 50;
    const imagesLimitIsOver = limit >= max; 

    const getItemIMagesData = () => {
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${item_id}`)
            .then(response => setItemImagesData(response.data))
            .catch(error => console.log(error.message));
    };

    useEffect(() => {
        getItemIMagesData();
    }, [limit, item_id]);

    const showMoreImagesHandler = () => {
        if (limit <= max) {
            setLimit(limit + 10);
        }
    };

    return (
        <div className="images-box">
            {
                itemImagesData.slice(0, limit).map((imageData) => {
                    return (
                        <div className="img-block" key={imageData.id}>
                            <img className="images" src={imageData.url} />
                        </div>
                    );
                })
            }
            <button
                type="button"
                className="menu-block__item-butn"
                disabled={ imagesLimitIsOver }
                onClick={ showMoreImagesHandler }
                variant="contained"
            >
                Load other images
            </button>
        </div>
    );
};

export default LoadedItemImages;

