var hubsConnector = require('./index.js');

hubsConnector.init(
    "Endpoint=sb://winf-hsos.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=bPdUOwkcmy3cbevQxAb7v1fSTCULOucy0jqPC6s28Uw="
    , "iot-hub");

async function test() {
    await hubsConnector.sendEvent({ time: Date.now(), value: Math.random() * 10 });
    console.log("Message sent successfully");
}

test();