import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from "rxjs/observable/of";

import * as currencyActions from '../actions';
import { CurrencyService } from '../services/currency.service';

@Injectable()
export class CurrencyEffects {
  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService,
  ) {}

  @Effect()
  loadCurrencies = this.actions$
    .ofType(currencyActions.LOAD_CURRENCY)
    .pipe(
      switchMap(() => {
        console.log("load_currency action catch in effect");
        return this.currencyService.getCurrencyData();
      }),
      map(currencies => new currencyActions.LoadCurrencySuccess(currencies)),
      catchError(error => of(new currencyActions.LoadCurrencyFail(error))),
    );
}
