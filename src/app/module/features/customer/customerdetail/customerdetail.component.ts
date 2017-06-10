import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from "../../../../domain/customer";
import { DialogService } from "../../../core/utils/dialog.service";

@Component( {
    selector: 'app-customerdetail',
    templateUrl: './customerdetail.component.html',
    styleUrls: ['./customerdetail.component.css'],
} )
export class CustomerDetailComponent implements OnInit {

    @HostBinding( 'style.display' ) display = 'block';
    @HostBinding( 'style.position' ) position = 'absolute';
    
    customer: Customer;
    editName: string;

    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public dialogService: DialogService
    ) { }

    ngOnInit() {
        this.route.data
            .subscribe(( data: { customer: Customer } ) => {
                this.editName = data.customer.project_name;
                this.customer = data.customer;
            } );
    }

    cancel() {
        this.gotoCustomers();
    }

    save() {
        this.customer.project_name = this.editName;
        this.gotoCustomers();
    }

    canDeactivate(): Promise<boolean> | boolean {
        // Allow synchronous navigation (`true`) if no customer or the customer is unchanged
        if ( !this.customer || this.customer.project_name === this.editName ) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm( 'Discard changes?' );
    }

    gotoCustomers() {
        let customerId = this.customer ? this.customer.id : null;
        // Pass along the customer id if available
        // so that the CustomerListComponent can select that customer.
        // Add a totally useless `foo` parameter for kicks.
        // Relative navigation back to the customers
        this.router.navigate( ['../', { id: customerId, foo: 'foo' }], { relativeTo: this.route } );
    }


}
