const { EventHubClient } = require('@azure/event-hubs');
var client;

/* TODO: Error handling */

exports.init = function (connectionString, hubName) {
    client = EventHubClient.createFromConnectionString(connectionString, hubName);
}

/* Sends an event to the Event Hub */
exports.sendEvent = async function (data, partition = 0) {
    const eventData = { body: data };
    var delivery = await client.send(eventData, partition);
}


