import { INGREDIENT } from "../actions/types"

const initialState = {
    data: {},
}

const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INGREDIENT:
            return { ...state, data: action.payload }
        default:
            return state
    }
}
export default detailsReducer