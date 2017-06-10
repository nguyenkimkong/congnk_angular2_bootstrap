import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Response, Http, RequestOptions, Jsonp } from '@angular/http';
import { CorsJsonpRequest } from "../base/cors-jsonp-request";

/**
 * 
 */
export abstract class GeneralService {

    constructor( private jsonp: Jsonp ) { }

    /**
     * 
     * @param url
     */
    protected getRecords( endpointUrl: string, action: string, numItems: number, pageIndex: number ): Observable<any[]> {
        let corsJsonpRequest = new CorsJsonpRequest( this.jsonp );
        return corsJsonpRequest.getRecords( endpointUrl, action, numItems, pageIndex );
    }

    
}
