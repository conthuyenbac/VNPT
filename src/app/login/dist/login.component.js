"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': '-'
    })
};
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http, userService, authService) {
        this.router = router;
        this.http = http;
        this.userService = userService;
        this.authService = authService;
        this.userId = "";
        this.password = "";
        this.message = "";
        this.isLogged = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Sigin = function () {
        var _this = this;
        var result;
        var param = {
            username: this.userId,
            password: this.password
        };
        this.authService.login(param).subscribe(function (res) {
            result = res;
        }, function (err) {
            _this.message = err.error.message;
        }, function () {
            _this.authService.setToken(result.object.accessToken);
            _this.authService.setLogin(1);
            _this.authService.setACC(result.object.userName);
            if (_this.userId !== 'namnguyenthanh') {
                _this.router.navigateByUrl('/dashboard');
            }
            else {
                _this.router.navigateByUrl('/admin');
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
