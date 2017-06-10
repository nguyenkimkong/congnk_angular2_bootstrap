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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialog_service_1 = require("../../../core/utils/dialog.service");
var CustomerDetailComponent = (function () {
    function CustomerDetailComponent(route, router, dialogService) {
        this.route = route;
        this.router = router;
        this.dialogService = dialogService;
        this.display = 'block';
        this.position = 'absolute';
    }
    CustomerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.editName = data.customer.project_name;
            _this.customer = data.customer;
        });
    };
    CustomerDetailComponent.prototype.cancel = function () {
        this.gotoCustomers();
    };
    CustomerDetailComponent.prototype.save = function () {
        this.customer.project_name = this.editName;
        this.gotoCustomers();
    };
    CustomerDetailComponent.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`) if no customer or the customer is unchanged
        if (!this.customer || this.customer.project_name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    };
    CustomerDetailComponent.prototype.gotoCustomers = function () {
        var customerId = this.customer ? this.customer.id : null;
        // Pass along the customer id if available
        // so that the CustomerListComponent can select that customer.
        // Add a totally useless `foo` parameter for kicks.
        // Relative navigation back to the customers
        this.router.navigate(['../', { id: customerId, foo: 'foo' }], { relativeTo: this.route });
    };
    return CustomerDetailComponent;
}());
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object)
], CustomerDetailComponent.prototype, "display", void 0);
__decorate([
    core_1.HostBinding('style.position'),
    __metadata("design:type", Object)
], CustomerDetailComponent.prototype, "position", void 0);
CustomerDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-customerdetail',
        templateUrl: './customerdetail.component.html',
        styleUrls: ['./customerdetail.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        dialog_service_1.DialogService])
], CustomerDetailComponent);
exports.CustomerDetailComponent = CustomerDetailComponent;
