/// <reference path="../../typings/toastr.d.ts" />

"use strict";
import ds = require("./dataservice");

declare var toastr: Toastr;
declare var $: JQueryStatic;
var dataservice = new ds.DataService();
interface IAlerter {
    name: string;
    showMessage():void;
}

export class Alerter implements IAlerter {
    name: "Ghorky";
    showMessage(): void {
        var msg = dataservice.getMessage();
        //alert(msg + ',' + this.name);
        $('#messagebox').text(msg + ', ' + this.name);
        toastr.info(msg + ',' + this.name);
    };

    
}