import {
    START,
    STOP,
    RESET
} from './timer.type';

export const stopTimer = () => {
    return {
        type: STOP,

    };

};

export const startTimer = () => {
    return {
        type: START,
    };

};

export const resetTimer = () => {
    return {
        type: RESET,
    };

};