const destinationURL = "https://calendly.com/christopher-seaman"
const statusCode = 301

async function handleRequest(request) {
  return Response.redirect(destinationURL, statusCode)
}

addEventListener("fetch", async event => {
  event.respondWith(handleRequest(event.request))
})
