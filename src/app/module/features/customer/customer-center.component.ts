import { Component, OnInit } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

@Component( {
    selector: 'app-customer-center',
    template: `
     <h2>CUSTOMERS CENTER</h2>
    <router-outlet></router-outlet>
  `,
    styles: []
} )
export class CustomerCenterComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
