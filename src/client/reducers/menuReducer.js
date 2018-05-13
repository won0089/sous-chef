import { menuActionTypes as types } from 'actions/actionTypes';
const initialState = {
    weekly: {
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: ''
    },
    isFetching: false
};

export default function menuReducer(state = initialState, action) {
    switch (action.type) {
        case types.fetchMenu:
            return {
                ...state,
                isFetching: true
            };
        case types.fetchMenuSuccess:
            return {
                ...state,
                weekly: action.weekly,
                isFetching: false,
            };
        case types.fetchMenuFail:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;
    }
}