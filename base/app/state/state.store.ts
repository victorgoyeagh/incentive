import { combineReducers, Reducer, createStore } from 'redux';
import { DefaultActions } from './state.actions';

/*** interfaces ***/

export interface IDefaultReducer {
    information_1: any,
    information_2: string
}

/*** init states ***/

export const defaultReducerInitState = {
    information_1: undefined,
    information_2: undefined
}

export const appInitialState = {
    defaultReducerInitState
}

export function defaultReducer(state: IDefaultReducer = defaultReducerInitState, action) {
    switch (action.type) {
        case DefaultActions.DEFAULT_ACTION:
            return {
                information_1: action.payload[0],
                information_2: action.payload[1]
            }
        default:
            return state;
    }
}

export const RootReducer = combineReducers({
    default: defaultReducer
});
