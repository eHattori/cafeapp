System.register(["angular2/core", "./services/data.service"], function(exports_1, context_1) {
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
                    if (this.count == 0) {
                        setInterval(function () {
                            console.log("oi");
                            _this.countCoffe();
                        }, 1000);
                    }
                    this._dataService.sendCoffe(this.getData.records[0]._id).subscribe(function (data) { return _this.countCoffe(); }, function (error) { return console.log(error); });
                };
                AppComponent.prototype.countCoffe = function () {
                    var _this = this;
                    var ct = 0;
                    var ctn = function (data) {
                        data.records.forEach(function (item) {
                            ct += item.qtdCoffee;
                        });
                        _this.count = ct;
                        ct = 0;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFLSSxzQkFBb0IsWUFBeUI7b0JBTGpELGlCQW1EQztvQkE5Q3VCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUY3QyxVQUFLLEdBQVksQ0FBQyxDQUFBO29CQUlkLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQzNCLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQW5CLENBQW1CLEVBQzNCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FFOUIsQ0FBQztnQkFDTixDQUFDO2dCQUVELGlDQUFVLEdBQVY7b0JBQUEsaUJBYUM7b0JBWEcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUNoQixXQUFXLENBQUM7NEJBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDakIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ2IsQ0FBQztvQkFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQzFELFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsRUFBRSxFQUFqQixDQUFpQixFQUN6QixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQ2xDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxpQ0FBVSxHQUFWO29CQUVJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUdYLElBQUksR0FBRyxHQUFHLFVBQVMsSUFBSTt3QkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJOzRCQUMvQixFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDekIsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7d0JBQ2pCLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ1gsQ0FBQyxDQUFDO29CQUlGLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUM1QixVQUFBLElBQUksSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBVCxDQUFTLEVBQ2pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDbEMsQ0FBQztnQkFDTixDQUFDO2dCQXRETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUMsZ0NBQWdDO3dCQUM1QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUMzQixDQUFDOztnQ0FBQTtnQkFvREYsbUJBQUM7WUFBRCxDQW5EQSxBQW1EQyxJQUFBO1lBbkRELHVDQW1EQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2RhdGEuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6J3RlbXBsYXRlcy9nZXJlbmNpYWRvci50cGwuaHRtbCcgLFxuICAgIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgZ2V0RGF0YSA6IE9iamVjdCxcbiAgICBjb3VudCA6IE51bWJlciA9IDAsXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2Upe1xuXG4gICAgICAgIF9kYXRhU2VydmljZS5nZXRBbGwoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMuZ2V0RGF0YSA9IGRhdGEsXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcblxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNlbmRDb2ZmZWUoKXtcblxuICAgICAgICBpZih0aGlzLmNvdW50ID09IDApe1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2lcIik7XG4gICAgICAgICAgICAgICAgIHRoaXMuY291bnRDb2ZmZSgpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5zZW5kQ29mZmUodGhpcy5nZXREYXRhLnJlY29yZHNbMF0uX2lkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB0aGlzLmNvdW50Q29mZmUoKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb3VudENvZmZlKCl7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGN0ID0gMDtcblxuXG4gICAgICAgIHZhciBjdG4gPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBkYXRhLnJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGN0ICs9IGl0ZW0ucXRkQ29mZmVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5jb3VudCA9IGN0O1xuICAgICAgICAgICAgY3QgPSAwO1xuICAgICAgICB9O1xuXG5cblxuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5nZXRBbGwoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjdG4oZGF0YSlcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
