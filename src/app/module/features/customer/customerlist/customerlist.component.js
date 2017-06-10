"use strict";
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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var customer_service_1 = require("../../../../services/backendrepository/impl/restful/customer.service");
var CustomerListComponent = (function () {
    function CustomerListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.defaultItemPerPage = 25;
        this.deftaultPageIndex = 0;
    }
    CustomerListComponent.prototype.isSelected = function (customer) {
        return customer.id === this.selectedId;
    };
    CustomerListComponent.prototype.ngOnInit = function () {
        this.customers = this.service.getCustomers(this.defaultItemPerPage, this.deftaultPageIndex);
    };
    CustomerListComponent.prototype.onSelect = function (customer) {
        this.selectedId = customer.id;
        // Navigate with relative link
        this.router.navigate([customer.id], { relativeTo: this.route });
    };
    return CustomerListComponent;
}());
CustomerListComponent = __decorate([
    core_1.Component({
        selector: 'app-customerlist',
        templateUrl: './customerlist.component.html',
        styleUrls: ['./customerlist.component.css']
    }),
    __metadata("design:paramtypes", [customer_service_1.CustomerService,
        router_1.ActivatedRoute,
        router_1.Router])
], CustomerListComponent);
exports.CustomerListComponent = CustomerListComponent;
