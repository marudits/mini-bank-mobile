var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
//Component
import { Rating } from './rating';
//Services
import { RatingService } from '../../utils/services/rating.service';
import { BankService } from '../../utils/services/bank.service';
var RatingForm = /** @class */ (function () {
    function RatingForm(item, ratingService, bankService) {
        this.item = item;
        this.ratingService = ratingService;
        this.bankService = bankService;
        var rating = {
            id: -1,
            bankId: -1,
            name: '',
            email: '',
            text: '',
            value: 0,
            createdAt: (new Date()).toString(),
            bank: []
        };
        // if(item.id && item.id !== -1){
        // 	rating = item;
        // }
        this.rating = rating;
    }
    // private validateForm(){
    // 	//check value
    // 	if(this.rating.value < 0 || this.rating.value > 5){
    // 		return false;
    // 	}
    // 	return true;
    // }
    RatingForm.prototype.ngOnInit = function () {
        this.getBankList();
    };
    RatingForm.prototype.getBankList = function () {
        var _this = this;
        this.bankService.getList()
            .then(function (items) { return _this.bankList = items; })
            .catch(this.handleError);
    };
    RatingForm.prototype.sendRating = function () {
        // this.ratingService.sendRating(this.rating)
        // 	.then((item) => console.log('Rating was sent. ', item))
        // 	.catch(this.handleError);
        console.log('sendRating: ', this.rating);
    };
    RatingForm.prototype.handleError = function (error) {
        console.error('An error occured.', error);
    };
    RatingForm = __decorate([
        Component({
            selector: 'rating-form',
            templateUrl: 'rating-form.component.html'
        }),
        __metadata("design:paramtypes", [Rating,
            RatingService,
            BankService])
    ], RatingForm);
    return RatingForm;
}());
export { RatingForm };
//# sourceMappingURL=rating-form.component.js.map