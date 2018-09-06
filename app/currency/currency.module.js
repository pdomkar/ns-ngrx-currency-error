"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var home_component_1 = require("./containers/home.component");
var reducers_1 = require("./reducers");
var effects_2 = require("./effects");
var currency_routing_1 = require("./currency.routing");
var currency_list_component_1 = require("./containers/currency-list.component");
var currency_item_component_1 = require("./components/currency-item.component");
var CurrencyModule = (function () {
    function CurrencyModule() {
    }
    CurrencyModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                currency_routing_1.CurrencyRoutingModule,
                store_1.StoreModule.forFeature('currency', reducers_1.reducers),
                effects_1.EffectsModule.forFeature([effects_2.CurrencyEffects]),
            ],
            declarations: [currency_list_component_1.CurrencyListComponent, currency_item_component_1.CurrencyItemComponent, home_component_1.HomeComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], CurrencyModule);
    return CurrencyModule;
}());
exports.CurrencyModule = CurrencyModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VycmVuY3kubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxxQ0FBMEM7QUFDMUMseUNBQThDO0FBQzlDLDhEQUE0RDtBQUU1RCx1Q0FBc0M7QUFDdEMscUNBQTRDO0FBRTVDLHVEQUEyRDtBQUMzRCxnRkFBNkU7QUFDN0UsZ0ZBQTZFO0FBWTdFO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixjQUFjO1FBVjFCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0I7Z0JBQ3hCLHdDQUFxQjtnQkFDckIsbUJBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLG1CQUFRLENBQUM7Z0JBQzVDLHVCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMseUJBQWUsQ0FBQyxDQUFDO2FBQzVDO1lBQ0QsWUFBWSxFQUFFLENBQUMsK0NBQXFCLEVBQUUsK0NBQXFCLEVBQUUsOEJBQWEsQ0FBQztZQUMzRSxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9jb250YWluZXJzL2hvbWUuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IHJlZHVjZXJzIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBDdXJyZW5jeUVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBDdXJyZW5jeVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2N1cnJlbmN5LnJvdXRpbmcnO1xuaW1wb3J0IHsgQ3VycmVuY3lMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXJzL2N1cnJlbmN5LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEN1cnJlbmN5SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jdXJyZW5jeS1pdGVtLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgQ3VycmVuY3lSb3V0aW5nTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ2N1cnJlbmN5JywgcmVkdWNlcnMpLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbQ3VycmVuY3lFZmZlY3RzXSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0N1cnJlbmN5TGlzdENvbXBvbmVudCwgQ3VycmVuY3lJdGVtQ29tcG9uZW50LCBIb21lQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeU1vZHVsZSB7fVxuIl19