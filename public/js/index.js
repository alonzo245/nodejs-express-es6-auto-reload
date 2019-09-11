/**
 * 1. trace all mouse clicks in page
 * 2. send myData every 2 secondes insted of each time user clicked element ['{}', '{}']
 * 3. every click should be send as follow:
 *      {
 *          "timeClicked": 12321432454,
 *           "pageUrl": "localhost:3334/****", 
 *          "elemntsTree": html/body/main/div#container/button#clickMe
 *      }
 */

const debounced = (delay, fn, events) => {
    let timerId;
    return (...args) => {
        // if (timerId) {
        //     clearTimeout(timerId);
        // }
        // timerId = setTimeout(() => {
        setTimeout(() => {
            fn(...args);
            timerId = null;
            sendRequest(events);
        }, delay);
    }
}

const traceClicks = e => {
    // console.log(e)
    let nodes = e.path.map(node => {
        if (node != 'undefined') {
            let id = node.id ? `#${node.id}` : '';
            return `${node.nodeName}${id}`;
        }
    });
    // console.log(nodes.reverse().join('/'))

    let data = {
        time: new Date().getTime(),
        pageUrl: window.location.href,
        elementTree: nodes.reverse().join('/')
    }
    events.push(data)
    // console.log(events.length)
}

const sendRequest = events => {
    let arrToSend = events.map(item => {
        return item
        // return JSON.stringify(item)
    })
    console.log('sending data...')
    console.log(arrToSend)
}

const myData = '{}';
const events = []
window.addEventListener('click', debounced(2000, traceClicks, events))

// fake api call
// fetch('http://example.con/')
// .then(response => {
//   return response.json();
// })
// .then(function(myJson) {
//   console.log(JSON.stringify(myJson));
// });