// reducers/index.js

import { combineReducers } from 'redux';
import { dataReducer1, dataReducer2 } from './dataReducer'

const rootReducer = combineReducers({
    data1: dataReducer1,
    data2: dataReducer2,
    // Add more reducers as needed...
});

export default rootReducer;
