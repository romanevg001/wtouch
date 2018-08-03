import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { HttpContract } from '../../contracts/http.contract';
import { AppConfig } from '../../app.config';

@Injectable()
export class MovieService {
    
    constructor(private _http: Http, private _config: AppConfig, private _httpContract:HttpContract) { }

    public getMovieList(text:string): Observable<any> {
        let url = this._httpContract.setBaseApiUrl(this._config.get('posts'));
        let headers = this._httpContract.commonHeaders();
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url, options)
            .map((response: Response) => response.json());
    } 

    public addMovie(data): Observable<any> {
        let url = this._httpContract.setBaseApiUrl(this._config.get('posts'));
        let headers = this._httpContract.commonHeaders();
        let body =JSON.stringify(data);
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, options)
            .map((response: Response) => response.json());
    } 

    public deleteMovie(id): Observable<any> {
        let url = this._httpContract.setBaseApiUrl(this._config.get('post').replace('{id}',id));
        let headers = this._httpContract.commonHeaders();
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url, options)
            .map((response: Response) => response.json());
    } 
    


    public editMovie(id:string): Observable<any> {
        let url = this._httpContract.setBaseApiUrl(this._config.get('post').replace('{id}',id));
        let headers = this._httpContract.commonHeaders();
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url, options)
            .map((response: Response) => response.json());
    } 
}