import { cartItemInterface } from "../interfaces/cart-item.model";


export class AddFavorite {
    static readonly type = '[FavoriteDetails] AddWish';
    constructor(public payload: cartItemInterface) {}
}

export class RemoveFavorite {
    static readonly type = '[FavoriteDetails] RemoveWish';
    constructor(public payload: string) {}
}

export class UpdateFavorite {
    static readonly type = '[FavoriteDetails] UpdateWish';
    constructor(public payload: cartItemInterface[]) {}
}