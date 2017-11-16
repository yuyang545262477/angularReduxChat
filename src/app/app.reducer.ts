import {UsersState} from "./user/user.model";
import {ThreadsReducer, ThreadsState} from "./thread/threads.reducer";
import {combineReducers, Reducer} from "redux";
import {UsersReducer} from "./user/users.reducer";

export interface AppState {
  users: UsersState;
  threads: ThreadsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  users: UsersReducer,
  threads: ThreadsReducer
});

export default rootReducer;
