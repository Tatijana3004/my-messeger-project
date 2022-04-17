import { SET_NAME, TOGGLE_CHECKBOX } from "./actions";

const initialState = {
    showName: false,
    name: "Tatiana_reducer",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX: {
            return {
                ...state,
                showName: !state.showName,
            };
        }
        case SET_NAME: {
            return {
                ...state,
                name: action.newName,
            };
        }
        default:
            return state;
    }
};