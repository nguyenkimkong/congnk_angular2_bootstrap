import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { Customer } from "../../../../domain/customer";
import { CustomerService } from "../../../../services/backendrepository/impl/restful/customer.service";

@Component( {
    selector: 'app-customerlist',
    templateUrl: './customerlist.component.html',
    styleUrls: ['./customerlist.component.css']
} )
export class CustomerListComponent implements OnInit {
    errorMessage: any;

    customers: Observable<Customer[]>;
    selectedId: number;
    defaultItemPerPage : number =  25;
    deftaultPageIndex : number = 0;

    constructor(
        private service: CustomerService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    isSelected( customer: Customer ) {
        return customer.id === this.selectedId;
    }

    ngOnInit() {
      this.customers=   this.service.getCustomers( this.defaultItemPerPage, this.deftaultPageIndex );
      
    }

    onSelect( customer: Customer ) {
        this.selectedId = customer.id;

        // Navigate with relative link
        this.router.navigate( [customer.id], { relativeTo: this.route } );
    }

}
