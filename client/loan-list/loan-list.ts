/// <reference path="../../typings/all.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {MeteorComponent} from 'angular2-meteor';

import {Loans} from 'collections/loans'


@Component({
    selector: 'loan-list'
})
@View({
    templateUrl: 'client/loan-list/loan-list.html',
    directives: [ROUTER_DIRECTIVES, NgFor]
})
export class LoanList extends MeteorComponent{
    loans: Mongo.Cursor<Loan>;

    constructor(){
        super();
        this.subscribe('loans');
        this.loans = Loans.find();
    }
}
