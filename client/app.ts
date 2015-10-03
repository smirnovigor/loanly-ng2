/// <reference path="../typings/all.d.ts" />

import {Component, View, bind} from 'angular2/angular2';

import {Router, ROUTER_BINDINGS, RouterOutlet, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {LocationStrategy, Location, HashLocationStrategy} from 'angular2/router';

import {Home} from './home/home';
import {LoanList} from './loan-list/loan-list';
import {LoanForm} from './loan-form/loan-form';
import {LoanDetails} from './loan-details/loan-details';

import {bootstrap} from 'angular2-meteor';

@Component({
  selector: 'loanly',
  bindings: [ROUTER_BINDINGS, bind(LocationStrategy).toClass(HashLocationStrategy)]
})
@View({
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES, Home, LoanList, LoanForm, LoanDetails]
})
@RouteConfig([
  {path: '/', as: 'home',  component: Home},
  {path: '/loan/list', as: 'loan-list', component: LoanList},
  {path: '/loan/form', as: 'loan-form', component: LoanForm},
  {path: '/loan/:loanId', as: 'loan-details', component: LoanDetails}
])
class Loanly {}

bootstrap(Loanly);
