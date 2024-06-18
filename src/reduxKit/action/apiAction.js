// actions/apiActions.js

import apiFunctions from "../../apiKit/api"

// Fetch data for the first API
export const fetchData1 = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_DATA1_REQUEST' });
        try {
            const response = await apiFunctions.dataApi();
            if (response.status === 200) {
                dispatch({ type: 'FETCH_DATA1_SUCCESS', payload: response.data });
            } else {
                dispatch({ type: 'FETCH_DATA1_FAILURE', payload: response.message });
            }
        } catch (error) {
            dispatch({ type: 'FETCH_DATA1_FAILURE', payload: error.message });
        }
    };
};

// Fetch data for the second API
export const fetchData2 = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_DATA2_REQUEST' });
        try {
            const response = await apiFunctions.dataApi();
            if (response.status === 200) {
                dispatch({ type: 'FETCH_DATA2_SUCCESS', payload: response.data });
            } else {
                dispatch({ type: 'FETCH_DATA2_FAILURE', payload: response.message });
            }
        } catch (error) {
            dispatch({ type: 'FETCH_DATA2_FAILURE', payload: error.message });
        }
    };
};

// Add more API actions as needed...
