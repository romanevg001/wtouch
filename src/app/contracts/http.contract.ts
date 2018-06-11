import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { AppConfig } from '../app.config';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpContract {

    constructor(private _config: AppConfig ){}

    public  setBaseApiUrl(url?: string): string {
        return this._config.getConfig('api') + (url?url:'');
    }

    public  commonHeaders(): Headers {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Credentials", "true");
        return headers;
    }


    public  formEncodedHeaders(): Headers {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return headers;
    }

    public setParams(obj: any): URLSearchParams {
        let params = new URLSearchParams();
        if (obj === null) return params;
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                params.set(key, obj[key]);
        }
        return params;
    }

}