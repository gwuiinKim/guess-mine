(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = handleMessageNotif;

function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFBQSxNQUMvQkMsT0FEK0IsR0FDVEQsSUFEUyxDQUMvQkMsT0FEK0I7QUFBQSxNQUN0QkMsUUFEc0IsR0FDVEYsSUFEUyxDQUN0QkUsUUFEc0I7QUFFdkNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGVBQTRCRCxPQUE1QjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2VOb3RpZihkYXRhKSB7XG4gIGNvbnN0IHsgbWVzc2FnZSwgbmlja25hbWUgfSA9IGRhdGE7XG4gIGNvbnNvbGUubG9nKGAke25pY2tuYW1lfTogJHttZXNzYWdlfWApO1xufVxuIl19
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

console.log("hi"); // eslint-disable-next-line no-undef

var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You: ".concat(message));
}

setTimeout(function () {
  return socket.emit("helloGuys");
}, 4000);

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotif", _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfODMwMDI2NjYuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsInNvY2tldCIsImlvIiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwiZW1pdCIsInNldFRpbWVvdXQiLCJzZXROaWNrbmFtZSIsIm5pY2tuYW1lIiwib24iLCJoYW5kbGVNZXNzYWdlTm90aWYiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0FBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRSxDQUNBOztBQUNBLElBQU1DLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDNUJILEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLFlBQVosRUFBMEI7QUFBRUQsSUFBQUEsT0FBTyxFQUFQQTtBQUFGLEdBQTFCO0FBQ0FMLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBb0JJLE9BQXBCO0FBQ0Q7O0FBRURFLFVBQVUsQ0FBQztBQUFBLFNBQU1MLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLFdBQVosQ0FBTjtBQUFBLENBQUQsRUFBaUMsSUFBakMsQ0FBVjs7QUFFQSxTQUFTRSxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUM3QlAsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksYUFBWixFQUEyQjtBQUFFRyxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBM0I7QUFDRDs7QUFFRFAsTUFBTSxDQUFDUSxFQUFQLENBQVUsY0FBVixFQUEwQkMsd0JBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTWVzc2FnZU5vdGlmIH0gZnJvbSBcIi4vY2hhdFwiO1xuY29uc29sZS5sb2coXCJoaVwiKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xuXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XG4gIHNvY2tldC5lbWl0KFwibmV3TWVzc2FnZVwiLCB7IG1lc3NhZ2UgfSk7XG4gIGNvbnNvbGUubG9nKGBZb3U6ICR7bWVzc2FnZX1gKTtcbn1cblxuc2V0VGltZW91dCgoKSA9PiBzb2NrZXQuZW1pdChcImhlbGxvR3V5c1wiKSwgNDAwMCk7XG5cbmZ1bmN0aW9uIHNldE5pY2tuYW1lKG5pY2tuYW1lKSB7XG4gIHNvY2tldC5lbWl0KFwic2V0Tmlja25hbWVcIiwgeyBuaWNrbmFtZSB9KTtcbn1cblxuc29ja2V0Lm9uKFwibWVzc2FnZU5vdGlmXCIsIGhhbmRsZU1lc3NhZ2VOb3RpZik7XG4iXX0=
},{"./chat":1}]},{},[2])