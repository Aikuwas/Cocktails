import { combineReducers } from "redux";
import mainReducer from './reducers/mainReducer'
import loaderReducer from "./reducers/loaderReducer";
import searchReducer from "./reducers/searchReducer";
import detailsReducer from "./reducers/detailsReducer";
import ingredientsReducer from './reducers/ingredientsReducer'
import alphabetReducer from "./reducers/alphabetReducer";

const rootReducer = combineReducers({
    main: mainReducer,
    loader: loaderReducer,
    search: searchReducer,
    details: detailsReducer,
    ingredients: ingredientsReducer,
    alphabet: alphabetReducer

})
export default rootReducer