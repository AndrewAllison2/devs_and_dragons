import { SocketHandler } from "../utils/SocketHandler.js";


class ChatHandler extends SocketHandler {
  constructor() {
    super()
    this.on('GET_CHAT_MESSAGES')
  }



}

export const chatHandler = new ChatHandler()