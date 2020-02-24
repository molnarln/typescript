class Station {
    get gasAmount() {
        return this._gasAmount;
    }
    set gasAmount(value) {
        this._gasAmount = value;
    }
    refill(car) {
        this._gasAmount -= car.capacity;
        car.gasAmount = car.capacity;
    }
}
//# sourceMappingURL=station.js.map