import {Component} from "angular2/core";
import {Observable} from "rxjs/Rx";
import {DataService} from "./services/data.service";

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

        if(this.count == 0){
            setInterval(() => {
                 this.countCoffe();
            }, 1000);
        }

        this._dataService.sendCoffe(this.getData.records[0]._id).subscribe(
                data => this.countCoffe(),
                error => console.log(error)
        );
    }

    countCoffe(){

        var _this = this;
        var ct = 0;

        var ctn = function(data) {
            data.records.forEach(function (item) {
                ct += item.qtdCoffee;
            });
            _this.count = ct;
            ct = 0;
        };

        this._dataService.getAll().subscribe(
                data => ctn(data)
                error => console.log(error)
        );
    }

}