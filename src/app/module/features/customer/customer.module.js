"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var customerdetail_component_1 = require("./customerdetail/customerdetail.component");
var customer_center_home_component_1 = require("./customer-center-home.component");
var customer_center_component_1 = require("./customer-center.component");
var custmer_routing_module_1 = require("./custmer-routing.module");
var customerlist_component_1 = require("./customerlist/customerlist.component");
var customer_service_1 = require("../../../services/backendrepository/impl/restful/customer.service");
var CustomerModule = (function () {
    function CustomerModule() {
    }
    return CustomerModule;
}());
CustomerModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            custmer_routing_module_1.CustmerRoutingModule
        ],
        declarations: [customerlist_component_1.CustomerListComponent, customerdetail_component_1.CustomerDetailComponent, customer_center_home_component_1.CustomerCenterHomeComponent, customer_center_component_1.CustomerCenterComponent],
        providers: [
            customer_service_1.CustomerService
        ]
    })
], CustomerModule);
exports.CustomerModule = CustomerModule;
