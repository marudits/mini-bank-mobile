var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { url } from '../config/app';
var RatingService = /** @class */ (function () {
    function RatingService(http) {
        this.http = http;
        this.apiUrl = url.api;
        this.modelUrl = this.apiUrl + 'Ratings';
        this.headers = new Headers({
            'Content-Type': 'application/json'
        });
    }
    RatingService.prototype.getList = function (params) {
        if (params === void 0) { params = null; }
        var url = params ? this.modelUrl + '?filter=' + JSON.stringify(params) : this.modelUrl;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RatingService.prototype.sendRating = function (rating) {
        return this.http
            .post(this.modelUrl, { headers: this.headers }, { params: rating })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RatingService.prototype.handleError = function (error) {
        console.error('An error occured. ', error);
        return Promise.reject(error.message || error);
    };
    RatingService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], RatingService);
    return RatingService;
}());
export { RatingService };
//# sourceMappingURL=rating.service.js.map