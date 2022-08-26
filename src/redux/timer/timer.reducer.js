import {
    START,
    STOP,
    RESET
} from './timer.type';


const INITIAL_STATE = {
    min: 3,
    sec: 0,
};

const timerReducer = (state = INITIAL_STATE, action) => {
    console.log(action.type)
    switch (action.type) {
        case STOP:
            return {
                ...state, min: state.min, sec: state.sec

            };

        case START:
            return {
                ...state, min: state.min > 0 ? (state.sec === 0 ? state.min - 1 : state.min) : 0,
                sec: state.sec === 0 ? state.min === 0 ? state.sec = 0 : state.sec = 59 : state.sec - 1
            };
        case RESET:
            return {
                ...state, min: 3, sec: 0
            };

        default:
            return state;

    }

};

export default timerReducer;