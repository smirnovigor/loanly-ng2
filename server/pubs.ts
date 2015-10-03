/// <reference path="../typings/all.d.ts" />

import {Loans} from 'collections/loans';

Meteor.publish('loans', function() {
  return Loans.find();
});

Meteor.publish('loan', function(loanId: string) {
  return Loans.find(loanId);
});
