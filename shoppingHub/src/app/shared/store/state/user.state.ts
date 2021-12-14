import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from '../interfaces/user.model';
import { AddUser } from '../actions/user.action';
import { Injectable } from '@angular/core';

export class UserStateModel {
    users: User[] = [];
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: [],
    },
})
@Injectable()
export class UserState {

    @Selector()
    static getUsers(state: UserStateModel) {
        return state.users;
    }

    @Action(AddUser)
    add({getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser) {
        const state = getState();
        patchState({
            users: [...state.users, payload]
        });
    }
}