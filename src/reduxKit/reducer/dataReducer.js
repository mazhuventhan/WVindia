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

// Add more reducers as needed...
