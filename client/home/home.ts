/// <reference path="../../typings/all.d.ts" />

import {Component, View} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'home'
})
@View({
    templateUrl: 'client/home/home.html',
    directives: [ROUTER_DIRECTIVES]
})
export class Home {

}
