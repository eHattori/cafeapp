import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {DataService} from './services/data.service';


@Component({
    selector: 'my-app',
    templateUrl:'templates/gerenciador.tpl.html' ,
    providers: [DataService]
})
export class AppComponent {

    getData : Object,
    count : Number = 0,

    constructor(private _dataService: DataService){

        _dataService.getAll().subscribe(
            data => this.getData = data,
            error => console.log(error)

        );

    }

    sendCoffee(){
        this._dataService.sendCoffe(this.getData.records[0]._id).subscribe(
                data => this.countCoffe(),
                error => console.log(error)
        );
    }

    countCoffe(){

        var _this = this;
        _this.count = 0;

        var ctn = function(data) {
            data.records.forEach(function (item) {
                _this.count += item.qtdCoffee;
            });
        };

        this._dataService.getAll().subscribe(
                data => ctn(data)
                error => console.log(error)
        );
    }

}