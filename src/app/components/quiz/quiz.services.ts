import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs/Rx';
import 'rxjs/Rx';
import { HttpContract } from '../../contracts/http.contract';
import { AppConfig } from '../../app.config';

@Injectable()
export class QuizService {
    
    constructor(private _http: Http, private _config: AppConfig, private _httpContract:HttpContract) { }

    public getList(text:string): Observable<any> {
        return Observable.create({
            question: 'Is it question 1 ?',
            answers: [
              {answer:'answer 1', id:0, valid: false},
              {answer:'answer 2', id:1, valid: true},
              {answer:'answer 3', id:2, valid: false}
            ],
            historyAnswers:[],
            waytosave:1,
            fieldType: 1,
            evaluateType: 2,
            evaluateMark: null
          },{
            question: 'Is it question 2 ?',
            answers: [{answer:'', id:0, valid: false, rightAnswer: 'bom'}],
            historyAnswers:[],
            waytosave:2,
            fieldType: 2,
            evaluateType: 1,
            evaluateMark: null
          },
          {
            question: 'Is it question 3 ?',
            answers: [
              {answer:'answer 1', id:0, valid: false},
              {answer:'answer 2', id:1, valid: false},
              {answer:'answer 3', id:2, valid: true}
            ],
            historyAnswers:[],
            waytosave:2,
            fieldType: 1,
            evaluateType: 1,
            evaluateMark: null
          },{
            question: 'Is it question 4 ?',
            answers: [{answer:'', id:0, valid: false, rightAnswer: 'z'}],
            historyAnswers:[],
            waytosave:2,
            fieldType: 2,
            evaluateType: 2,
            evaluateMark: null
          })
     /*    let url = this._httpContract.setBaseApiUrl(this._config.getConfig('users'));
        let headers = this._httpContract.commonHeaders();
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url, options)
            .map((response: Response) => response.json()); */
    } 

 
  
}