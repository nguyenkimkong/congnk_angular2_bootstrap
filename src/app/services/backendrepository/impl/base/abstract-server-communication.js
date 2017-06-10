"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var AbstractServerCommunication = (function () {
    function AbstractServerCommunication() {
    }
    /**
     *
     * @param res
     */
    AbstractServerCommunication.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    /**
     *
     * @param error
     */
    AbstractServerCommunication.prototype.handleError = function (error) {
        //        //TODO: use a remote logging infrastructure
        var errMsg;
        //        if ( error instanceof Response ) {
        //            const body = error.json() || '';
        //            const err = body.error || JSON.stringify( body );
        //            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        //        } else {
        //            errMsg = error.message ? error.message : error.toString();
        //        }
        return Observable_1.Observable.throw(errMsg);
    };
    return AbstractServerCommunication;
}());
exports.AbstractServerCommunication = AbstractServerCommunication;
