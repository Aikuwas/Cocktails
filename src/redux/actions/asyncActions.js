import axios from "axios";
import { LIST_COCKTAILS, LIST_CATEGORIES, SEARCH_COCKTAILS, DETAILS_COCKTAIL , INGREDIENT, ALPHABET_COCKTAILS} from "./types";
import { GET_COCKTAILS_API, CATEGORIES_LIST_API, SEARCH_COCKTAILS_API,GET_BY_LETTER, GET_INGREDIENT_BY_NAME, GET_DETAILS_API } from "../../config";
import { LOADING_ACTION, FULLFILLED_ACTION, ERROR_ACTION } from "./actions";

export const getCocktailsAsync = (value = 'Ordinary_Drink') => {
    return async (dispatch) => {
        dispatch(LOADING_ACTION())
        try {
            const res = await axios.get(GET_COCKTAILS_API + value)
            dispatch(FULLFILLED_ACTION())
            dispatch({
                type: LIST_COCKTAILS,
                payload: {
                    data: res.data.drinks,
                    value
                }
            })
        } catch (e) {
            dispatch(ERROR_ACTION(e.message))
        }
    }
}



export const getCategoriesAsync = () => {
    return async (dispatch) => {
        dispatch(LOADING_ACTION())
        try {
            const res = await axios.get(CATEGORIES_LIST_API)
            dispatch(FULLFILLED_ACTION())
            dispatch({
                type: LIST_CATEGORIES,
                payload: res.data.drinks
            })
        } catch (e) {
            dispatch(ERROR_ACTION(e.message))
        }
    }
}


export const searchCocktailsAsync = (value = '') => {
    return async (dispatch) => {
        dispatch(LOADING_ACTION())
        try {
            const res = await axios.get(SEARCH_COCKTAILS_API + value)
            dispatch(FULLFILLED_ACTION())
            dispatch({
                type: SEARCH_COCKTAILS,
                payload: res.data.drinks
            })
        } catch (e) {
            dispatch(ERROR_ACTION(e.message))
        }
    }
}

export const getDetailsAsync = (id) => {
    return async (dispatch) => {
        dispatch(LOADING_ACTION())
        try {
            const res = await axios.get(GET_DETAILS_API + id)
            dispatch(FULLFILLED_ACTION())
            dispatch({
                type: DETAILS_COCKTAIL,
                payload: res.data.drinks[0]
            })
        } catch (e) {
            dispatch(ERROR_ACTION(e.message))
        }
    }
}


export const getIngredientsAsync = (id) => {
    return async (dispatch) => {
        dispatch(LOADING_ACTION())
        try {
            const res = await axios.get(GET_INGREDIENT_BY_NAME + id)
            dispatch(FULLFILLED_ACTION())
            dispatch({
                type: INGREDIENT,
                payload: res.data.ingredients[0]
            })
        } catch (e) {
            dispatch(ERROR_ACTION(e.message))
        }
    }
}


export const getCocktailsAlph = (symbol) =>{
    return async (dispatch) => {
        dispatch(LOADING_ACTION())
        try {
            const res = await axios.get(GET_BY_LETTER + symbol)
            dispatch(FULLFILLED_ACTION())
            dispatch({
                type: ALPHABET_COCKTAILS,
                payload: res.data.drinks
            })
        } catch (e) {
            dispatch(ERROR_ACTION(e.message))
        }
    }
}