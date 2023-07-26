import { ALPHABET_COCKTAILS } from "../actions/types";

const initialState = {
    data: [],
}


const alphabetReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ALPHABET_COCKTAILS:
            return { ...state, data: payload }
        default:
            return state
    }
}
export default alphabetReducer