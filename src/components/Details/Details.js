import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsAsync } from '../../redux/actions/asyncActions';
import { useNavigate, useParams } from 'react-router-dom';
import { CLEAR_STATE_ACTION } from '../../redux/actions/actions';
import Slider from '../Slider/Slider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const Details = () => {
    const { data } = useSelector(state => state.details)
    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()
   

    useEffect(() => {
        dispatch(getDetailsAsync(id))
        return () => {
            dispatch(CLEAR_STATE_ACTION())
        }
    }, [id, dispatch])



    const generateIngredients = () => {
        return Object.entries(data)
            .filter(([key, value]) => key.startsWith('strIngredient') && value)
            .map(([_, value]) => value)
    }
    const ingredients = generateIngredients()

    console.log(data)

      return (
        <section>
            <div className="container">
                <h2>Details</h2>
           
                <Stack spacing={2} direction="row">
                <Button onClick={() => navigate(-1)} variant="contained">Go back</Button>
                </Stack>
  
                <div className="gy-5 row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                    <div className="col">
                        <div className="details__box">
                            <img src={data.strDrinkThumb} alt="" />
                            <p>{data.strDrink}</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="details__box">
                            <Slider ingredients={ingredients} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Details;