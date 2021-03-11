# Overview

## WebSockets

For this app, we'll be using Socket.io to create a websocket connection between ReactJS (Client) and our server.
### What Is a WebSocket?

A WebSocket is a **bidirectional** communication protocol.

HTTP Protocol is **unidirectional**.

- Client -> Sends Request (in the form of HTTP or HTTPS) -> 
- Server recieves the request -> the request has corresponding response -> 
- Server sends response to Client -> the connection is closed


Websockets on the other hand, keep that connection alive.

- Client and Server make a connection (handshake)
- This connection is kept alive until either of them terminated the connection
- This connection is called a **WebSocket**

![Websocket vs HTTP](https://ambassadorpatryk.com/wp-content/uploads/2020/02/web-socket.png)

Websockets are used in Video Games (Among Us, COD, Rocket League, basically any Multiplay Online Game), real-time web apps (Stock trading, live streams), and chat apps!