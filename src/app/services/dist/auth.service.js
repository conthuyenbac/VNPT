"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService(router, api) {
        this.router = router;
        this.api = api;
        this.isLogged = 0;
    }
    AuthService.prototype.login = function (data) {
        return this.api.post('/api/Account/login', data);
    };
    AuthService.prototype.setLogin = function (token) {
        return localStorage.setItem('isLogged', token);
    };
    AuthService.prototype.setACC = function (acc) {
        return localStorage.setItem('UserName', acc);
    };
    AuthService.prototype.setToken = function (token) {
        return localStorage.setItem('token', token);
    };
    AuthService.prototype.getLogin = function () {
        return localStorage.getItem('isLogged') ? localStorage.getItem('isLogged') : sessionStorage.getItem('isLogged');
    };
    AuthService.prototype.getAcc = function () {
        return localStorage.getItem('UserName') ? localStorage.getItem('UserName') : sessionStorage.getItem('UserName');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token');
    };
    AuthService.prototype.clearLocalStorage = function () {
        localStorage.removeItem('token');
        localStorage.setItem("isLogged", "0");
        localStorage.setItem('UserName', "");
        location.reload(true);
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.api.get('/api/Account//api/Account/get-current');
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
