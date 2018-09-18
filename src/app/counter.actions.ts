import {
  Action,
  ActionCreator
} from 'redux';

export const INCREMENT = 'INCREMENT';
export const increment: ActionCreator<Action> = (number: Number = 1) => ({
  type: {
    type: INCREMENT,
    amount: number
  }
});

export const DECREMENT = 'DECREMENT';
export const decrement: ActionCreator<Action> = (number: Number = 1) => ({
  type: {
    type: DECREMENT,
    amount: number
  }
});
