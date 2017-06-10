import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Jsonp } from '@angular/http';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { GeneralService } from "./general.service";
import { Customer } from "../../../../domain/customer";
import { ICustomerService } from "../../api/customer-service";


@Injectable()
export class CustomerService extends GeneralService implements ICustomerService {
        getCustomer( id: any ): Observable<Customer> {
            throw new Error( 'Method not implemented.' );
        }

    addCustomer( customer: Customer ): Observable<Customer> {
        throw new Error( 'Method not implemented.' );
    }


    private endpointUrl = 'http://localhost:8080//worldbank/getalls';

    constructor( jsonp: Jsonp ) { super( jsonp ); }

    static nextCustomerId = 100;

    /**
     * 
     * @param itemPerPage
     * @param pageIndex
     */
    getCustomers( numItems: number, pageIndex: number ): Observable<Customer[]> {
        let action = '';
        return this.getRecords( this.endpointUrl, action, numItems, pageIndex );
    }




}
