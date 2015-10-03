/// <reference path="../../typings/all.d.ts" />

import {Component, View, Inject} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import {MeteorComponent} from 'angular2-meteor';

import {Loans} from 'collections/loans';

@Component({
    selector: 'loan-details'
})
@View({
    templateUrl: 'client/loan-details/loan-details.html',
    directives: [ROUTER_DIRECTIVES]
})
export class LoanDetails extends MeteorComponent {
    loan: Loan;

    constructor(@Inject(RouteParams) routeParams: RouteParams) {
        super();
        var loanId = routeParams.params['loanId'];
        this.subscribe('loan', loanId, () => {
            this.loan = Loans.findOne(loanId);
        }, true);
    }
}
