import {Message} from "../../models/Message";

export interface Thread {
  id: string;
  name: string;
  avatarSrc: string;
  messages: Message[];
}
