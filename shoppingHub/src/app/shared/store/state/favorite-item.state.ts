import { State, Action, StateContext, Selector } from '@ngxs/store';
import { cartItemInterface} from '../interfaces/cart-item.model';
import { AddFavorite, RemoveFavorite, UpdateFavorite } from '../actions/favorite-item.action';
import { Injectable } from '@angular/core';

export class FavoriteStateModel {
    favorites: cartItemInterface[] = [];
}

@State<FavoriteStateModel>({
    name: 'favorites',
    defaults: {
        favorites: [],
    },
})
@Injectable()
export class FavoriteState {

    @Selector()
    static getProducts(state: FavoriteStateModel) {
        return state.favorites;
    }

    @Action(AddFavorite)
    add({getState, patchState }: StateContext<FavoriteStateModel>, { payload }:AddFavorite) {
        const state = getState();
        patchState({
            favorites: [...state.favorites, payload]
        })
    }

    @Action(RemoveFavorite)
    remove({getState, patchState }: StateContext<FavoriteStateModel>, { payload }:RemoveFavorite) {
        patchState({
            favorites: getState().favorites.filter(favorite => favorite.productID != payload)
        })
    }

    @Action(UpdateFavorite)
    addCount({getState, patchState }: StateContext<FavoriteStateModel>, { payload }: UpdateFavorite) {
        const state = getState();
        patchState({
            favorites: payload,
        });
    }


}
