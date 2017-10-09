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
//Service
import { BankService } from '../../utils/services/bank.service';
var BankList = /** @class */ (function () {
    //private selectedBank: Bank;
    function BankList(
        //private router: Router,
        bankService) {
        this.bankService = bankService;
    }
    BankList.prototype.ngOnInit = function () {
        this.getList();
    };
    BankList.prototype.action = function (type, item) {
        switch (type) {
            case 'nav':
                console.log("Navigate to " + item.location.lat + "," + item.location.lng);
                break;
            case 'call':
                console.log("Call to phone number " + item.phone);
                break;
            case 'fav':
                console.log("Favourite " + item.name);
                break;
            case 'rev':
                console.log("Make a review of " + item.name);
                break;
        }
    };
    BankList.prototype.getList = function () {
        var _this = this;
        this.bankService.getList().then(function (items) {
            _this.listItem = items;
        });
    };
    BankList = __decorate([
        Component({
            selector: 'bank-list',
            templateUrl: 'bank-list.component.html'
        }),
        __metadata("design:paramtypes", [BankService])
    ], BankList);
    return BankList;
}());
export { BankList };
//# sourceMappingURL=bank-list.component.js.map