/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { AppState } from './app.state';
import {
  INCREMENT,
  DECREMENT
} from './counter.actions';

const initialState: AppState = { counter: 0 };

// Create our reducer that will handle changes to the state
export const counterReducer: Reducer<AppState> =
  (state: AppState = initialState, action: Action): AppState => {
    const TYPE = action.type.type;  // Until I find how to extend all - Reducer, Action, Store... AM 18.09.2018
    const AMOUNT = action.type.amount;   // Until I find how to extend all - Reducer, Action, Store... AM 18.09.2018
    switch (TYPE) {
    case INCREMENT:
      return Object.assign({}, state, { counter: state.counter + AMOUNT });
    case DECREMENT:
      return Object.assign({}, state, { counter: state.counter - AMOUNT });
    default:
      return state;
    }
  };
