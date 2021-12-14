import { User } from '../interfaces/user.model';

export class AddUser {
    static readonly type = '[User] Add';

    constructor(public payload: User) {}
}