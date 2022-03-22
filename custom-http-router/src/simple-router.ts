import * as http from "http";

export default class SimpleRouter {
  private routes: Route[] = [];

  constructor() {}

  public get(route: string, handler: () => void) {
    this.routes.push({ method: "get", route, handler });
  }

  public post(route: string, handler: () => void) {
    this.routes.push({ method: "post", route, handler });
  }

  public listen(port: number, cb?: () => void) {
    http
      .createServer(async (req, res) => {
        // route logic goes here
        console.log(req.method?.toLowerCase())
        console.log(req.url?.toLowerCase())
        const found = this.routes.find(route => route.method === req.method?.toLowerCase() && route.route === req.url?.toLowerCase());

        if(!found) {
            res.writeHead(404, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify({message : 'Not found'}));
        }

        const response = await found?.handler();
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(response));
      })
      .listen(port, cb);
  }
}

interface Route {
  method: "get" | "post" ;
  route: string;
  handler: () => any;
}
