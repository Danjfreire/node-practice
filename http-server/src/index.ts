import * as http from "http"

const hostname = '127.0.0.1' // loopback address - localhost
const port = 3000;

// const server = http.createServer((req, res) => {
//     
// });

const server = http.createServer(async (req, res) => {
    console.log(req.headers)
    console.log(req.httpVersion)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World');

    // Old way to do it, without await
    // let data = ''

    // req.on('data', chunk => {
    //     console.log('Data chunk available :', chunk);
    //     data += chunk;
    // });

    // req.on('end', () => {
    //     console.log('Data transmission ended')
    //     console.log(JSON.parse(data));
    // });
    const buffers = [];

    for await (const chunk of req) {
        buffers.push(chunk);
    }

    const data = Buffer.concat(buffers).toString();
    console.log(JSON.parse(data));
});

server.listen(port,hostname, () => {
    console.log(`server running at http:${hostname}:${port}/`)
})