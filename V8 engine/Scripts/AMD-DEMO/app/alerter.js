/// <reference path="../../typings/toastr.d.ts" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ds = require("./dataservice");
var dataservice = new ds.DataService();
var Alerter = (function () {
    function Alerter() {
    }
    Alerter.prototype.showMessage = function () {
        var msg = dataservice.getMessage();
        //alert(msg + ',' + this.name);
        $('#messagebox').text(msg + ', ' + this.name);
        toastr.info(msg + ',' + this.name);
    };
    ;
    return Alerter;
}());
exports.Alerter = Alerter;
//# sourceMappingURL=alerter.js.map