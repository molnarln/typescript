import {Car} from './car'

class Station {
    private _gasAmount: number;

    public get gasAmount(): number {
        return this._gasAmount;
    }

    public set gasAmount(value: number) {
        this._gasAmount = value;
    }

    refill(car: Car): void {
        this._gasAmount -= car.capacity;
        car.gasAmount = car.capacity;
    }
}
