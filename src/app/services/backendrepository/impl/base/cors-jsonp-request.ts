import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { AbstractServerCommunication } from "./abstract-server-communication";

@Injectable()
export class CorsJsonpRequest extends AbstractServerCommunication {

    static instanceNum = 0;
    constructor( private jsonp: Jsonp ) {
        super();
        console.log( 'CorsJsonpRequest instance: ', ++CorsJsonpRequest.instanceNum );
    }

    /**
     * 
     * @param endpointUrl
     * @param numItems
     * @param pageIndex
     */
    getRecords( endpointUrl: string, action: string, numItems: number, pageIndex: number ): Observable<any[]> {

        let params = new URLSearchParams();
        params.append( "numItems", numItems.toString());
        params.append( "pageIndex", pageIndex.toString());
        params.set( 'action', action );
        params.set( 'format', 'json' );
        params.set( 'callback', 'JSONP_CALLBACK' );

        return this.jsonp
            .get( endpointUrl, { search: params } )
            .map( response => <string[]>response.json() );
            
    }
}
