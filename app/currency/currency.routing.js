"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var currency_list_component_1 = require("./containers/currency-list.component");
var home_component_1 = require("./containers/home.component");
var routes = [{ path: 'home', component: home_component_1.HomeComponent },
    { path: 'home/list', component: currency_list_component_1.CurrencyListComponent }];
var CurrencyRoutingModule = (function () {
    function CurrencyRoutingModule() {
    }
    CurrencyRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule],
        })
    ], CurrencyRoutingModule);
    return CurrencyRoutingModule;
}());
exports.CurrencyRoutingModule = CurrencyRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kucm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1cnJlbmN5LnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFHekMsc0RBQXVFO0FBQ3ZFLGdGQUE2RTtBQUM3RSw4REFBNEQ7QUFFNUQsSUFBTSxNQUFNLEdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDOUQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBRSxDQUFDLENBQUM7QUFNN0Q7SUFBQTtJQUFvQyxDQUFDO0lBQXhCLHFCQUFxQjtRQUpqQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUNXLHFCQUFxQixDQUFHO0lBQUQsNEJBQUM7Q0FBQSxBQUFyQyxJQUFxQztBQUF4QixzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEN1cnJlbmN5TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVycy9jdXJyZW5jeS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFpbmVycy9ob21lLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFt7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnaG9tZS9saXN0JywgY29tcG9uZW50OiBDdXJyZW5jeUxpc3RDb21wb25lbnQgfV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVJvdXRpbmdNb2R1bGUge31cbiJdfQ==