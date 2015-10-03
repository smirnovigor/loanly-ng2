/// <reference path="../typings/all.d.ts" />

export var Loans = new Mongo.Collection<Loan>('loans');

Loans.allow({
    insert: function(userId, party) {
        return true;
    },
    update: function(userId, party, fields, modifier) {
        return true;
    },
    remove: function(userId, party) {
        return true;
    }
});