import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from "./services/can-deactivate.guard";


const routes: Routes = [{
    path: 'order',
    loadChildren: 'app/module/features/order/order.module#OrderModule'
},
{
    path: 'customer',
    loadChildren: 'app/module/features/customer/customer.module#CustomerModule'
}
];

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule],
    providers :[CanDeactivateGuard]
    
} )
export class AppRoutingModule { }
