import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from "rxjs/Observable";
import { Customer } from "../../../../domain/customer";
import { CustomerService } from "../../../../services/backendrepository/impl/restful/customer.service";

@Injectable()
export class CustomerDetailResolver implements Resolve<Customer>{
        resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Customer | Observable<Customer> | Promise<Customer> {
            throw new Error( 'Method not implemented.' );
        }

    constructor( private customerService: CustomerService, private router: Router ) { }
    //    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Customer | Observable<Customer> | Promise<Customer> {
    //        let id = route.params['id'];
    //
    ////        return this.customerService.getCustomer( id ).subscribe(customer => {
    ////            if ( customer ) {
    ////                return customer;
    ////            } else { // id not found
    ////                this.router.navigate( ['/customer-center'] );
    ////                return null;
    ////            }
    ////        } );
    //    }

}


