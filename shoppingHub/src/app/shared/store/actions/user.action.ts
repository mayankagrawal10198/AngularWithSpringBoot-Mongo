import { UserDetails } from '../interfaces/user.model';

export class AddUserDetails {
  static readonly type = '[UserDetails] Add';

  constructor(public payload: UserDetails) {}
}
