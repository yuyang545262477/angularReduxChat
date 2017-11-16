import {Action, ActionCreator} from "redux";
import {Thread} from "./thread.model";
import {Message} from "../../models/Message";
import {uuid} from "../util/uuid";

/**@des 增加新会话*/
export const ADD_THREAD = '[Thread] ADD';

export interface AddThreadAction extends Action {
  thread: Thread;
}

export const addThread: ActionCreator<AddThreadAction> = (thread) => ({
  type: ADD_THREAD,
  thread: thread
});

/**@des 增加新消息*/
export const ADD_MESSAGE = '[thread] Add Message';

export interface AddMessageAction extends Action {
  thread: Thread;
  message: Message
}

export const addMessage: ActionCreator<AddMessageAction> = (thread: Thread, messageArgs: Message): AddMessageAction => {
  const defaults = {
    id: uuid(),
    sentAt: new Date(),
    isRead: false,
    thread: thread
  };

  const message: Message = Object.assign({}, defaults, messageArgs);
  return {
    type: ADD_MESSAGE,
    thread: thread,
    message: message
  }
};

export const SELECT_THREAD = '[Thread] Select';

export interface SelectThreadAction extends Action {
  thread: Thread
}

export const selectThread: ActionCreator<SelectThreadAction> = (thread) => ({
  type: SELECT_THREAD,
  thread
});




