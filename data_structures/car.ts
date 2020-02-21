export class Car {
    private _gasAmount: number;
    capacity: number;

    public get gasAmount(): number {
        return this._gasAmount;
    }

    public set gasAmount(value: number) {
        this._gasAmount = value;
    }
    constructor() {
        this._gasAmount = 0;
        this.capacity = 100;
    }
}