"use strict";

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;

    console.log(`a new subscription for ${socket.topic} topic`);
  }

  onGetData(message) {
    const data = message;
    // let i = 1;
    setInterval(() => {
      const random = Math.floor(Math.random() * Math.floor(100));
      const id = Math.floor(Math.random() * Math.floor(5));
      try {
        this.socket.emit("getData", {
          id: `${id}`,
          step: `data id ${id}`,
          result: random,
        });
        i++;
      } catch (error) {}
    }, 1000);
  }
}

module.exports = ChatController;
