# Usage

 ```js
 var hubsConnector = require('./index.js');

hubsConnector.init(
    "<your-connection-string>"
    , "<your-hub-name>");

async function test() {
    await hubsConnector.sendEvent({ time: Date.now(), value: Math.random() * 10 });
    console.log("Message sent successfully");
}

test();
 ```