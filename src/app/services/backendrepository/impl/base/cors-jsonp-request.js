"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var abstract_server_communication_1 = require("./abstract-server-communication");
var CorsJsonpRequest = CorsJsonpRequest_1 = (function (_super) {
    __extends(CorsJsonpRequest, _super);
    function CorsJsonpRequest(jsonp) {
        var _this = _super.call(this) || this;
        _this.jsonp = jsonp;
        console.log('CorsJsonpRequest instance: ', ++CorsJsonpRequest_1.instanceNum);
        return _this;
    }
    /**
     *
     * @param endpointUrl
     * @param numItems
     * @param pageIndex
     */
    CorsJsonpRequest.prototype.getRecords = function (endpointUrl, action, numItems, pageIndex) {
        var params = new http_1.URLSearchParams();
        params.append("numItems", numItems.toString());
        params.append("pageIndex", pageIndex.toString());
        params.set('action', action);
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(endpointUrl, { search: params })
            .map(function (response) { return response.json(); });
    };
    return CorsJsonpRequest;
}(abstract_server_communication_1.AbstractServerCommunication));
CorsJsonpRequest.instanceNum = 0;
CorsJsonpRequest = CorsJsonpRequest_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Jsonp])
], CorsJsonpRequest);
exports.CorsJsonpRequest = CorsJsonpRequest;
var CorsJsonpRequest_1;
