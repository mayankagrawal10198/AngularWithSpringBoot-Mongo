import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserDetails } from '../interfaces/user.model';
import { AddUserDetails } from '../actions/user.action';
import { Injectable } from '@angular/core';

export class UserStateModel {
  details: UserDetails = { name: '', email: '' };
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    details: { name: '', email: '' },
  },
})
@Injectable()
export class UserState {
  @Selector()
  static getUsers(state: UserStateModel) {
    return state.details;
  }

  @Action(AddUserDetails)
  addUserDetails(
    { getState, patchState }: StateContext<UserStateModel>,
    { payload }: AddUserDetails
  ) {
    console.log(payload);
    patchState({
      details: Object.assign({}, payload),
    });
    const state = getState();
    console.log(state.details);
  }
}
