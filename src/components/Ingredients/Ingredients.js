import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIngredientsAsync } from '../../redux/actions/asyncActions';
import { IMG_URL } from '../../config';


const Ingredients = () => {
    const dispatch = useDispatch()
    const {name} = useParams()
    const {data} = useSelector(state => state.ingredients)

console.log(data)
    useEffect(() => {
        dispatch(getIngredientsAsync(name))
    }, [dispatch,name])


    return (
        <div>
            <h1>{data.strIngredient}</h1>
           <p>{data.strDescription}</p>
           <img src={`${IMG_URL}${name}.png`} alt="" />
        </div>
    );
};

export default Ingredients;