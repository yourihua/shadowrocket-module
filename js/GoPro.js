const url = $request.url;
const method = $request.method;
const body = $response.body;

console.log(`${url}-${method}-${body}`);