(function () {
    var deck2 = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker2 = deck2.createCardPicker();
    var pickedCard2 = cardPicker2();
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
})();
//# sourceMappingURL=this_arrow.js.map