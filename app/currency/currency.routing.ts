import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CurrencyListComponent } from './containers/currency-list.component';
import { HomeComponent } from "./containers/home.component";

const routes: Routes = [{ path: 'home', component: HomeComponent },
    { path: 'home/list', component: CurrencyListComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class CurrencyRoutingModule {}
