(() => {
    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            console.log(`Outer this: ${this}`);
            return function () {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
                console.log(`Inner this: ${this}`);
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };

            }
        }
    }

    let cardPicker = deck.createCardPicker;
    let pickedCard = cardPicker().bind(deck)();

    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
})()

