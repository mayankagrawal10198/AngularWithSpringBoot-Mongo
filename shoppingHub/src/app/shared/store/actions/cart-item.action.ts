import {cartItemInterface} from '../interfaces/cart-item.model';

export class AddProduct {
    static readonly type = '[ProductDetails] Add';
    constructor(public payload: cartItemInterface) {}
}

export class RemoveProduct {
    static readonly type = '[ProductDetails] Remove';
    constructor(public payload: string) {}
}

export class UpdateProduct {
    static readonly type = '[ProductDetails] Update';
    constructor(public payload: cartItemInterface[]) {}
}
