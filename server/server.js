const WebSocket = require("ws")

const wss = new WebSocket.Server({
    port:9856
},function(){
    console.log("hello to ws")
})

wss.on("connection",function(ws){
    ws.send("hello from the server")
})