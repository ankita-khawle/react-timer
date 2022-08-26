import { combineReducers } from 'redux';


import timerReducer from './timer/timer.reducer';


const appReducer = combineReducers({

    timerReducer: timerReducer,

});

const rootReducer = (state,action) => {
    return appReducer(state,action)
}
export default rootReducer;