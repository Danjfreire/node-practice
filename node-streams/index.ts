import {Stream} from "stream"

const readableStream = new Stream.Readable({
    read() {}
});


const writableStream = new Stream.Writable();

writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
}

// pipe the source to the destination
readableStream.pipe(writableStream)

readableStream.push('Hello')
readableStream.push('World')

readableStream.on('close', () => writableStream.end())
writableStream.on('close', () => console.log('Writable stream closed'))

readableStream.destroy()