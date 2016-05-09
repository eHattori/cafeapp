System.register(['angular2/core', './services/data.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, data_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_dataService) {
                    var _this = this;
                    this._dataService = _dataService;
                    this.count = 0;
                    _dataService.getAll().subscribe(function (data) { return _this.getData = data; }, function (error) { return console.log(error); });
                }
                AppComponent.prototype.sendCoffee = function () {
                    var _this = this;
                    this._dataService.sendCoffe(this.getData.records[0]._id).subscribe(function (data) { return _this.countCoffe(); }, function (error) { return console.log(error); });
                };
                AppComponent.prototype.countCoffe = function () {
                    var _this = this;
                    _this.count = 0;
                    var ctn = function (data) {
                        data.records.forEach(function (item) {
                            _this.count += item.qtdCoffee;
                        });
                    };
                    this._dataService.getAll().subscribe(function (data) { return ctn(data); }, function (error) { return console.log(error); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'templates/gerenciador.tpl.html',
                        providers: [data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFLSSxzQkFBb0IsWUFBeUI7b0JBTGpELGlCQXVDQztvQkFsQ3VCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUY3QyxVQUFLLEdBQVksQ0FBQyxDQUFBO29CQUlkLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQzNCLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQW5CLENBQW1CLEVBQzNCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FFOUIsQ0FBQztnQkFFTixDQUFDO2dCQUVELGlDQUFVLEdBQVY7b0JBQUEsaUJBS0M7b0JBSkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUMxRCxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEVBQUUsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUNsQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsaUNBQVUsR0FBVjtvQkFFSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUVoQixJQUFJLEdBQUcsR0FBRyxVQUFTLElBQUk7d0JBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSTs0QkFDL0IsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUNsQyxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUM7b0JBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQzVCLFVBQUEsSUFBSSxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFULENBQVMsRUFDakIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUNsQyxDQUFDO2dCQUNOLENBQUM7Z0JBMUNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFdBQVcsRUFBQyxnQ0FBZ0M7d0JBQzVDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7cUJBQzNCLENBQUM7O2dDQUFBO2dCQXdDRixtQkFBQztZQUFELENBdkNBLEFBdUNDLElBQUE7WUF2Q0QsdUNBdUNDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOid0ZW1wbGF0ZXMvZ2VyZW5jaWFkb3IudHBsLmh0bWwnICxcbiAgICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAgIGdldERhdGEgOiBPYmplY3QsXG4gICAgY291bnQgOiBOdW1iZXIgPSAwLFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKXtcblxuICAgICAgICBfZGF0YVNlcnZpY2UuZ2V0QWxsKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLmdldERhdGEgPSBkYXRhLFxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHNlbmRDb2ZmZWUoKXtcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2Uuc2VuZENvZmZlKHRoaXMuZ2V0RGF0YS5yZWNvcmRzWzBdLl9pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5jb3VudENvZmZlKCksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY291bnRDb2ZmZSgpe1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF90aGlzLmNvdW50ID0gMDtcblxuICAgICAgICB2YXIgY3RuID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgZGF0YS5yZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb3VudCArPSBpdGVtLnF0ZENvZmZlZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmdldEFsbCgpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGN0bihkYXRhKVxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICApO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
