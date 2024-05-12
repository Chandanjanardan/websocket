const WebSocket = require("ws")

const wss = new WebSocket.Server({
    port:9856
})
console.log("hello web socket")