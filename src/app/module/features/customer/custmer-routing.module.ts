import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customerlist/customerlist.component';
import { CustomerDetailComponent } from './customerdetail/customerdetail.component';
import { CustomerCenterComponent } from './customer-center.component';
import { CanDeactivateGuard } from "../../../services/can-deactivate.guard";
import { CustomerDetailResolver } from "./customerdetail/customer-detail-resolver.service";
import { CustomerCenterHomeComponent } from "./customer-center-home.component";


const routes:
    Routes = [{
    path: '',
    component: CustomerCenterComponent,
    children: [
        {
            path: '',
            component: CustomerListComponent,
            children: [
                {
                    path: ':id',
                    component: CustomerDetailComponent,
                    canDeactivate: [CanDeactivateGuard],
                    resolve: {
                        customer: CustomerDetailResolver
                    }
                },
                {
                    path: '',
                    component: CustomerCenterHomeComponent
                }
            ]
        }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], 
  providers: [
              CustomerDetailResolver
          ]
})
export class CustmerRoutingModule { }
