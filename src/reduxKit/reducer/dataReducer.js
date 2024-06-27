// reducers/dataReducers.js

const initialState1 = {
    data: [],
    loading: false,
    error: null,
};

const initialState2 = {
    data: [],
    loading: false,
    error: null,
};

export const dataReducer1 = (state = initialState1, action) => {
    switch (action.type) {
        case 'FETCH_DATA1_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_DATA1_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_DATA1_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export const dataReducer2 = (state = initialState2, action) => {
    switch (action.type) {
        case 'FETCH_DATA2_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_DATA2_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_DATA2_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import {thunk} from 'redux-thunk';

// // Define initial state
// const initialState = {
//   api1Data: [],
//   api2Data: []
// };

// // Define action types
// const FETCH_API1_SUCCESS = 'FETCH_API1_SUCCESS';
// const FETCH_API2_SUCCESS = 'FETCH_API2_SUCCESS';

// // Define reducers
// const dataReducer1 = (state = initialState.api1Data, action) => {
//   switch (action.type) {
//     case FETCH_API1_SUCCESS:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const dataReducer2 = (state = initialState.api2Data, action) => {
//   switch (action.type) {
//     case FETCH_API2_SUCCESS:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// // Combine reducers
// const rootReducer = combineReducers({
//   api1Data: dataReducer1,
//   api2Data: dataReducer2
// });

