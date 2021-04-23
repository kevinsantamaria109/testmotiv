// define all UI variables

const ws = new WebSocket('ws://localhost:6969');
ws.onopen = () => {
    console.log('Client Connected !')
}

ws.onmessage = (message) => {

    let result = JSON.parse(message["data"]);

    processResult(result);
}