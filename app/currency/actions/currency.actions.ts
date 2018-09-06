import { Action } from '@ngrx/store';
import { Currency } from '../models/currency.model';

export const LOAD_CURRENCY = '[Currency] Load Currency';
export const LOAD_CURRENCY_FAIL = '[Currency] Load Currency Failure';
export const LOAD_CURRENCY_SUCCESS = '[Currency] Load Currency Success';

export class LoadCurrency implements Action {
  readonly type = LOAD_CURRENCY;
  constructor() {
      console.log('LoadCurrencyAction was called');
  }
}

export class LoadCurrencyFail implements Action {
    readonly type = LOAD_CURRENCY_FAIL;
    constructor(public payload: any) {
        console.log('LoadCurrencyFailAction was called');
    }
}

export class LoadCurrencySuccess implements Action {
    readonly type = LOAD_CURRENCY_SUCCESS;

    constructor(public payload: Currency[]) {
        console.log('LoadCurrencySuccessAction was called');
    }
}

export type Actions = LoadCurrency | LoadCurrencyFail | LoadCurrencySuccess;
