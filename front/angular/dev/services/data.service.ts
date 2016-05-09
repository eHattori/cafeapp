import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from 'angular2/http';




@Injectable()
export class DataService {


    constructor(private _http: Http){ }

    getAll(){
        return this._http.get("http://localhost:8000/api/consumers")
        .map(res => res.json());
    }


    sendCoffe(id){

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.put("http://localhost:8000/api/consumer/"+ id +"/incrementcoffee",
            "",
            { headers : headers})
            .map(res => res);
    }





}