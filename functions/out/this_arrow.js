(() => {
    let deck2 = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    let cardPicker2 = deck2.createCardPicker();
    let pickedCard2 = cardPicker2();
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
})();
//# sourceMappingURL=this_arrow.js.map