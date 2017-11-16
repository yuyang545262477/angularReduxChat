import {User, UsersState} from "./user.model";
import {Action} from "redux";
import * as UserActions from './user.action'

const initialState: UsersState = {
  currentUser: null
};


export const UsersReducer = (state: UsersState = initialState, action: Action): UsersState => {
  switch (action.type) {
    case  UserActions.SET_CURRENT_USER:
      const user: User = (<UserActions.SetCurrentUserAction>action).user;
      return {
        currentUser: user
      };
    default:
      return state;
  }
};
