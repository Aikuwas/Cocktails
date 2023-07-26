import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {letters} from  "../../config";
import {getCocktailsAlph} from '../../redux/actions/asyncActions';
import Item from '../Item/Item';
import Button from '@mui/material/Button';


const Alphabet = () => {
  
    const { symbol } = useParams()
    const {data} = useSelector(state => state.alphabet)
    const dispatch = useDispatch()
    const navigate = useNavigate()

   
    useEffect(() => {
        dispatch(getCocktailsAlph(symbol))
      
    }, [symbol, dispatch])
    console.log(data)
    const alph = letters?.map(el=>{
    return  <Button variant={el ===symbol? 'contained' : 'text'} onClick={()=>navigate(`/pagination/${el}`)} >{el}</Button>} )
    const items = data?.map(item => (
    <Item key={item.idDrink} item={item} />
   
    ))

    return (
       <div style={{paddingTop:'50px'}} className="container">
        {alph}
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
        {items}
        </div>
       </div>
    );
};

export default Alphabet;