addEventListener('fetch', event => {
  event.respondWith(handle(event.request))
})

async function handle(request) {
  return new Response(request.headers.get("cf-connecting-ip") + "\n", {
    status: 200,
    statusText: "OK",
    headers: {
      "Content-Type": "text/plain",
      "Content-Security-Policy": "default-src 'none';",
      "X-Content-Type-Options": "nosniff",
      "X-XSS-Protection": "1; mode=block",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "no-referrer",
      "Cache-Control": "max-age=0, no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "Wed, 11 Jan 1984 05:00:00 GMT",
      "X-Did-You-Know": "You can use \"curl -4 simpip.com\" or \"curl -6 simpip.com\" to get either address!"
    }
  });
}
