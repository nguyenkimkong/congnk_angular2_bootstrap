
import { Customer } from "../../../domain/customer";
import { Observable } from "rxjs/Observable";

export interface ICustomerService {
    getCustomers(itemPerPage: number, pageIndex: number ) : Observable<Customer[]>;
    
    addCustomer(customer : Customer) : Observable<Customer>;
    
    getCustomer(id : any) : Observable<Customer>;
}