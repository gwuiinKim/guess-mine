# Guess Mine

Realtime drawing game built with SocketIO, Gulp and Node

## To Do:

- [ ] Server
- [ ] Pug
- [ ] Static
- [ ] SocketIO

### yarn init

### ES Lint

.eslintrc.js 파일을 복사하고

- yarn add eslint-plugin-prettier -D
- yarn add eslint-config-prettier -D
- yarn add prettier -D

## WebSocket

### http

http는 get/post 등으로 연결이 되는데 stateless방식이다
-> request에 응답하여 render 하면 서버는 누가 연결이 되어 있는지를 기억하지 않고, 연결이 끊긴다.
서버에 request를 보낼 때에만 서버랑 연결이 되고, 그 다음에
render을 한 후에는 서버랑 연결이 끊긴다.
cookie를 서버에 보내야만 서버가 기억을 한다.

### WebSocket

WS는 stateful이다. 서버랑 계속연결이 되어있다.
누가 연결이 되어있는지를 기억한다.
여기에는 cookie가 없다.
새로운 connection같은 것을 만들 필요가 없다.
이미 연결이 되어 있기 때문에.
하지만 이 방식은 server에 더 많은 memory를 요구한다.
