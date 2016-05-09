System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            DataService = (function () {
                function DataService(_http) {
                    this._http = _http;
                }
                DataService.prototype.getAll = function () {
                    return this._http.get("http://localhost:8000/api/consumers")
                        .map(function (res) { return res.json(); });
                };
                DataService.prototype.sendCoffe = function (id) {
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.put("http://localhost:8000/api/consumer/" + id + "/incrementcoffee", "", { headers: headers })
                        .map(function (res) { return res; });
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBR0kscUJBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtnQkFBRyxDQUFDO2dCQUVuQyw0QkFBTSxHQUFOO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQzt5QkFDM0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUdELCtCQUFTLEdBQVQsVUFBVSxFQUFFO29CQUVSLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBRSxFQUFFLEdBQUUsa0JBQWtCLEVBQy9FLEVBQUUsRUFDRixFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUMsQ0FBQzt5QkFDcEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQXJCTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkEyQmIsa0JBQUM7WUFBRCxDQTFCQSxBQTBCQyxJQUFBO1lBMUJELHFDQTBCQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2RhdGEuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCl7IH1cblxuICAgIGdldEFsbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2NvbnN1bWVyc1wiKVxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cblxuICAgIHNlbmRDb2ZmZShpZCl7XG5cbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2NvbnN1bWVyL1wiKyBpZCArXCIvaW5jcmVtZW50Y29mZmVlXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgeyBoZWFkZXJzIDogaGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMpO1xuICAgIH1cblxuXG5cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
