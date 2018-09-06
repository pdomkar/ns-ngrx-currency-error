"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var CurrencyService = (function () {
    function CurrencyService(http) {
        this.http = http;
        this.ROOT_URL = "https://api.coinmarketcap.com/v1";
    }
    CurrencyService.prototype.getCurrencyData = function () {
        return Observable_1.Observable.throw('error');
        // return this.http.get<Currency[]>(`${this.ROOT_URL}/ticker`);
    };
    CurrencyService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CurrencyService);
    return CurrencyService;
}());
exports.CurrencyService = CurrencyService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1cnJlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBQ2xELDhDQUE2QztBQUs3QztJQUdFLHlCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRjVCLGFBQVEsR0FBRyxrQ0FBa0MsQ0FBQztJQUVmLENBQUM7SUFFeEMseUNBQWUsR0FBZjtRQUNFLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQywrREFBK0Q7SUFDakUsQ0FBQztJQVJVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FJZSxpQkFBVTtPQUh6QixlQUFlLENBUzNCO0lBQUQsc0JBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgQ3VycmVuY3kgfSBmcm9tICcuLi9tb2RlbHMvY3VycmVuY3kubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBST09UX1VSTCA9IGBodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS92MWA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldEN1cnJlbmN5RGF0YSgpOiBPYnNlcnZhYmxlPEN1cnJlbmN5W10+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdygnZXJyb3InKTtcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldDxDdXJyZW5jeVtdPihgJHt0aGlzLlJPT1RfVVJMfS90aWNrZXJgKTtcbiAgfVxufVxuIl19