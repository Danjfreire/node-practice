import {EventEmitter} from "events"


const eventEmmiter = new EventEmitter();

// register an event handler
eventEmmiter.on('super', () => {
    console.log('this is super cool')
})

eventEmmiter.on('param', (param) => {
    console.log('Param :', param)
})

eventEmmiter.emit('super')
eventEmmiter.emit('param', 10)