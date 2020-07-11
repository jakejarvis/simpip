addEventListener('fetch', event => {
  event.respondWith(handle(event.request))
})

async function handle(request) {
  const url = new URL(request.url);
  let customHeaders = {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Content-Security-Policy": "default-src 'none';",
    "X-Frame-Options": "DENY",
    "X-Did-You-Know": "You can use \"curl -4\" or \"curl -6\" to get either IP address!",
    "X-View-Source": "https://git.io/simpip"
  }
  if (url.pathname === '/') {
    return new Response(request.headers.get("cf-connecting-ip") + "\n", {
      status: 200,
      statusText: "OK",
      headers: customHeaders
    })
  } else {
    return new Response("404 Not Found\n", {
      status: 404,
      statusText: "Not Found",
      headers: customHeaders
    })
  }
}
