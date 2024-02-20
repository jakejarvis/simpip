export default {
  async fetch(request: Request) {
    const opts = {
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Expires": "0",
        "Pragma": "no-cache",
        "Content-Security-Policy": "default-src 'none'",
        "X-Did-You-Know": "You can use \"curl -4\" or \"curl -6\" to get either IP address!",
        "X-View-Source": "https://github.com/jakejarvis/simpip",
      },
    };

    if (new URL(request.url).pathname === "/") {
      const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for");

      return new Response(ip + "\n", {
        status: 200,
        statusText: "OK",
        ...opts,
      });
    }

    return new Response("404 Not Found\n", {
      status: 404,
      statusText: "Not Found",
      ...opts,
    });
  },
} satisfies ExportedHandler;
