const myData = '{}';
let events = []
let timerId = false;

const traceClicks = (e) => {
    let nodes = e.path.map(node => {
        if (node != 'undefined') {
            let id = node.id ? `#${node.id}` : '';
            return `${node.nodeName}${id}`;
        }
    });

    let data = {
        time: new Date().getTime(),
        pageUrl: window.location.href,
        elementTree: nodes.reverse().join('/')
    }
    events.push(data)
    if (timerId) return
    timerId = setTimeout(() => {
        sendRequest(events)
        timerId = false
    }, 2000);
}

const sendRequest = () => {
    let arrToSend = events.map(item => {
        // return item
        return JSON.stringify(item)
    })
    events = []
    console.log('sending data...')
    console.log(arrToSend)
}

window.addEventListener('click', traceClicks)