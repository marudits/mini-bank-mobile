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
import { NavController } from 'ionic-angular';
import { RatingService } from '../../utils/services/rating.service';
//helpers
import { calculateDiffTime } from '../../utils/helpers/dateAndTime';
//pages
import { RatingFormPage } from '../../pages/rating/rating-form';
var RatingList = /** @class */ (function () {
    function RatingList(ratingService, navController) {
        this.ratingService = ratingService;
        this.navController = navController;
    }
    RatingList.prototype.ngOnInit = function () {
        this.getList();
    };
    RatingList.prototype.getList = function () {
        var _this = this;
        var params = { include: 'bank' };
        this.ratingService.getList(params)
            .then(function (items) {
            var newItems = [];
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                var newItem = Object.assign({}, item, { bank: item.bank });
                newItem.createdAt = calculateDiffTime(item.createdAt);
                newItems.push(newItem);
            }
            _this.listItem = newItems;
        });
    };
    RatingList.prototype.navPage = function (page) {
        switch (page) {
            case "rating-form":
                console.log('nav to rating-form');
                this.navController.push(RatingFormPage, { item: {} });
                break;
            default:
                // code...
                break;
        }
    };
    RatingList = __decorate([
        Component({
            selector: 'rating-list',
            templateUrl: 'rating-list.component.html'
        }),
        __metadata("design:paramtypes", [RatingService,
            NavController])
    ], RatingList);
    return RatingList;
}());
export { RatingList };
//# sourceMappingURL=rating-list.component.js.map