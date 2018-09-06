import { Currency } from '../models/currency.model';
import * as currencyActions from '../actions';

export interface State {
  loading: boolean;
  data: Currency[];
}

const initialState: State = {
  loading: false,
  data: [  ],
};

export function reducer(
  state = initialState,
  action: currencyActions.Actions,
): State {
  switch (action.type) {
    case currencyActions.LOAD_CURRENCY: {
      return {
        loading: true,
        ...state,
      };
    }

    case currencyActions.LOAD_CURRENCY_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case currencyActions.LOAD_CURRENCY_FAIL: {
      return {
        loading: false,
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}

export const getCurrencies = (state: State) => state.data;
export const getCurrenciesLoading = (state: State) => state.loading;
