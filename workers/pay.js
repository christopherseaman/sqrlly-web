const destinationURL = "https://forms.gle/zQziRFTHbDDgZ7nR9"
const statusCode = 301

async function handleRequest(request) {
  return Response.redirect(destinationURL, statusCode)
}

addEventListener("fetch", async event => {
  event.respondWith(handleRequest(event.request))
})
