import { Inject, Injectable } from '@angular/core';
import * as Redux from 'redux';
import { AppStore } from './app.store';
import { AppState } from './app.state';
import * as CounterActions from './counter.actions';

@Injectable()

export class RdxService {
  public counter: number;
  public publicStore: Redux.Store<AppState>;

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    this.publicStore = store;
  }

  public readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
    return state;
  }

  public increment(number: Number = 1): void {
    this.store.dispatch(CounterActions.increment(number));
  }

  public decrement(number: Number = 1): void {
    this.store.dispatch(CounterActions.decrement(number));
  }
}
