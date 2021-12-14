import { State, Action, StateContext, Selector } from '@ngxs/store';
import { cartItemInterface } from '../interfaces/cart-item.model';
import { AddProduct, RemoveProduct, UpdateProduct} from '../actions/cart-item.action';
import { Injectable } from '@angular/core';

export class ProductStateModel {
    products: cartItemInterface[] = [];
}

@State<ProductStateModel>({
    name: 'products',
    defaults: {
        products: [],
    },
})
@Injectable()
export class ProductState {

    @Selector()
    static getProducts(state: ProductStateModel) {
        return state.products;
    }

    @Action(AddProduct)
    add({getState, patchState }: StateContext<ProductStateModel>, { payload }:AddProduct) {
        const state = getState();
        patchState({
            products: [...state.products, payload]
        })
    }

    @Action(RemoveProduct)
    remove({getState, patchState }: StateContext<ProductStateModel>, { payload }:RemoveProduct) {
        patchState({
            products: getState().products.filter(product => product.productID != payload)
        })
    }

    @Action(UpdateProduct)
    addCount({getState, patchState }: StateContext<ProductStateModel>, { payload }: UpdateProduct) {
        const state = getState();
        patchState({
            products: payload,
        });
    }

}