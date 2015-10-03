/// <reference path="../../typings/all.d.ts" />

import {Component, View} from 'angular2/angular2';
import {FORM_DIRECTIVES, Control, FormBuilder, ControlGroup, Validators} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Loans} from 'collections/loans'

@Component({
    selector: 'loan-form'
})
@View({
    templateUrl: 'client/loan-form/loan-form.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class LoanForm {
    loanForm: ControlGroup;

    constructor(){
        var fb = new FormBuilder();
        this.loanForm = fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            amount: ['', Validators.required],
            period: ['', Validators.required],
            rate: ['', Validators.required]
        });
    }

    add(event) {
        event.preventDefault();

        var loan: Loan = this.loanForm.value;

        if (this.loanForm.valid) {
            Loans.insert({
                title: loan.title,
                description: loan.description,
                amount: loan.amount,
                period: loan.period,
                rate: loan.rate
            });
            this.loanForm.controls['title'].updateValue('');
            this.loanForm.controls['description'].updateValue('');
            this.loanForm.controls['amount'].updateValue('');
            this.loanForm.controls['period'].updateValue('');
            this.loanForm.controls['rate'].updateValue('');
        }
    }
}
