import { Observable } from "rxjs/Observable";

export abstract class AbstractServerCommunication {
    constructor() { }

    /**
     * 
     * @param res
     */
    protected extractData( res: Response ) {
        let body = res.json();
        return body;
    }

    /**
     * 
     * @param error
     */
    protected handleError( error: Response | any ) {
//        //TODO: use a remote logging infrastructure
        let errMsg: string;
//        if ( error instanceof Response ) {
//            const body = error.json() || '';
//            const err = body.error || JSON.stringify( body );
//            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//        } else {
//            errMsg = error.message ? error.message : error.toString();
//        }
        return Observable.throw( errMsg );
    }
}
