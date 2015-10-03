/// <reference path="../typings/all.d.ts" />

import {Loans} from 'collections/loans';

export function loadTestData() {
  if (Loans.find().count() === 0) {
    for (var i = 0; i < 10; i++) {
        Loans.insert({
            title: Fake.sentence(1),
            description: Fake.paragraph(10),
            amount: 1000 + Math.floor(Math.random() * 10000),
            period: 5 + Math.floor(Math.random() * 25),
            rate: 1 + (Math.random() * 3).toFixed(2)
          });
    }
  }
}
