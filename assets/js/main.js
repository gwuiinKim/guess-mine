import { handleMessageNotif } from "./chat";
console.log("hi");
// eslint-disable-next-line no-undef
const socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", { message });
  console.log(`You: ${message}`);
}

setTimeout(() => socket.emit("helloGuys"), 4000);

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}

socket.on("messageNotif", handleMessageNotif);
