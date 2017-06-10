"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cors_jsonp_request_1 = require("../base/cors-jsonp-request");
/**
 *
 */
var GeneralService = (function () {
    function GeneralService(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     *
     * @param url
     */
    GeneralService.prototype.getRecords = function (endpointUrl, action, numItems, pageIndex) {
        var corsJsonpRequest = new cors_jsonp_request_1.CorsJsonpRequest(this.jsonp);
        return corsJsonpRequest.getRecords(endpointUrl, action, numItems, pageIndex);
    };
    return GeneralService;
}());
exports.GeneralService = GeneralService;
