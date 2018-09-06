"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var of_1 = require("rxjs/observable/of");
var currencyActions = require("../actions");
var currency_service_1 = require("../services/currency.service");
var CurrencyEffects = (function () {
    function CurrencyEffects(actions$, currencyService) {
        var _this = this;
        this.actions$ = actions$;
        this.currencyService = currencyService;
        this.loadCurrencies = this.actions$
            .ofType(currencyActions.LOAD_CURRENCY)
            .pipe(operators_1.switchMap(function () {
            console.log("load_currency action catch in effect");
            return _this.currencyService.getCurrencyData();
        }), operators_1.map(function (currencies) { return new currencyActions.LoadCurrencySuccess(currencies); }), operators_1.catchError(function (error) { return of_1.of(new currencyActions.LoadCurrencyFail(error)); }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], CurrencyEffects.prototype, "loadCurrencies", void 0);
    CurrencyEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            currency_service_1.CurrencyService])
    ], CurrencyEffects);
    return CurrencyEffects;
}());
exports.CurrencyEffects = CurrencyEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1cnJlbmN5LmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MseUNBQWdEO0FBQ2hELDRDQUE0RDtBQUM1RCx5Q0FBd0M7QUFFeEMsNENBQThDO0FBQzlDLGlFQUErRDtBQUcvRDtJQUNFLHlCQUNVLFFBQWlCLEVBQ2pCLGVBQWdDO1FBRjFDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFJMUMsbUJBQWMsR0FBRyxJQUFJLENBQUMsUUFBUTthQUMzQixNQUFNLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQzthQUNyQyxJQUFJLENBQ0gscUJBQVMsQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNoRCxDQUFDLENBQUMsRUFDRixlQUFHLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxJQUFJLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsRUFBbkQsQ0FBbUQsQ0FBQyxFQUN0RSxzQkFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBRSxDQUFDLElBQUksZUFBZSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQS9DLENBQStDLENBQUMsQ0FDckUsQ0FBQztJQVpELENBQUM7SUFHSjtRQURDLGdCQUFNLEVBQUU7OzJEQVVMO0lBaEJPLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FHUyxpQkFBTztZQUNBLGtDQUFlO09BSC9CLGVBQWUsQ0FpQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcblxuaW1wb3J0ICogYXMgY3VycmVuY3lBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY3VycmVuY3kuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeUVmZmVjdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UsXG4gICkge31cblxuICBARWZmZWN0KClcbiAgbG9hZEN1cnJlbmNpZXMgPSB0aGlzLmFjdGlvbnMkXG4gICAgLm9mVHlwZShjdXJyZW5jeUFjdGlvbnMuTE9BRF9DVVJSRU5DWSlcbiAgICAucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZF9jdXJyZW5jeSBhY3Rpb24gY2F0Y2ggaW4gZWZmZWN0XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW5jeVNlcnZpY2UuZ2V0Q3VycmVuY3lEYXRhKCk7XG4gICAgICB9KSxcbiAgICAgIG1hcChjdXJyZW5jaWVzID0+IG5ldyBjdXJyZW5jeUFjdGlvbnMuTG9hZEN1cnJlbmN5U3VjY2VzcyhjdXJyZW5jaWVzKSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBjdXJyZW5jeUFjdGlvbnMuTG9hZEN1cnJlbmN5RmFpbChlcnJvcikpKSxcbiAgICApO1xufVxuIl19