import { SocketHandler } from "../utils/SocketHandler.js";

let chatMessages = [];

export class ChatHandler extends SocketHandler {

  constructor(io, socket) {
    super(io, socket);

    this
      .on('GET_CHAT_MESSAGES', this.getChatMessages)
      .on('SEND_CHAT_MESSAGE', this.sendChatMessage);
  }

  getChatMessages() {
    this.socket.emit('CHAT_MESSAGES', chatMessages);
  }

  sendChatMessage(message) {
    chatMessages.push(message);
    this.io.emit('NEW_CHAT_MESSAGE', message);
  }
}