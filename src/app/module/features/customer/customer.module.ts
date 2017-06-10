import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CustomerDetailComponent } from './customerdetail/customerdetail.component';
import { CustomerCenterHomeComponent } from './customer-center-home.component';
import { CustomerCenterComponent } from './customer-center.component';
import { CustmerRoutingModule } from "./custmer-routing.module";
import { CustomerListComponent } from "./customerlist/customerlist.component";
import { CustomerService } from "../../../services/backendrepository/impl/restful/customer.service";

@NgModule( {
    imports: [
        CommonModule,
        FormsModule,
        CustmerRoutingModule
    ],
    declarations: [CustomerListComponent, CustomerDetailComponent, CustomerCenterHomeComponent, CustomerCenterComponent],

    providers: [
        CustomerService
    ]
} )
export class CustomerModule { }
