addEventListener('fetch', event => {
  event.respondWith(handle(event.request))
})

async function handle(request) {
  const url = new URL(request.url);
  let customHeaders = {
    "Content-Type": "text/plain",
    "Content-Security-Policy": "default-src 'none';",
    "Feature-Policy": "accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; sync-xhr 'none'; payment 'none'; usb 'none'; vr 'none'",
    "X-Content-Type-Options": "nosniff",
    "X-XSS-Protection": "1; mode=block",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "no-referrer",
    "Cache-Control": "max-age=0, no-cache, no-store, must-revalidate",
    "Pragma": "no-cache",
    "Expires": "Thu, 01 Jan 1970 00:00:01 GMT",
    "X-Did-You-Know": "You can use \"curl -4 simpip.com\" or \"curl -6 simpip.com\" to get either address!",
    "X-Source-Code": "https://github.com/jakejarvis/simpip"
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
