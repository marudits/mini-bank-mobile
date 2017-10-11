var Rating = /** @class */ (function () {
    function Rating(id, bankId, text, value, name, email, createdAt, bank, ratingService) {
        this.ratingService = ratingService;
        this.id = id;
        this.bankId = bankId;
        this.text = text;
        this.value = value;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
        this.bank = bank || [];
    }
    return Rating;
}());
export { Rating };
//# sourceMappingURL=rating.js.map