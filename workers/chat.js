// const destinationURL = `https://meet.google.com/axr-iaab-akw`
const destinationURL = `https://us06web.zoom.us/j/6771048335?pwd=DMUFCMIutvQkE4zLs4jXVpgHYv8ga0.1`
const statusCode = 301

const html = `
<html itemscope itemtype="http://schema.org/Product" prefix="og: http://ogp.me/ns#" xmlns="http://www.w3.org/1999/html">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="content-type" content="text/html;charset=utf-8">
    </head>
    <body>
        <script src="https://meet.jit.si/external_api.js"></script>
        <script>
            var domain = "meet.jit.si";
            var options = {
                roomName: "Welcome to Barovia",
                width: '100%',
                height: '100%',
                parentNode: undefined,
                configOverwrite: {},
                interfaceConfigOverwrite: {}
            }
            var api = new JitsiMeetExternalAPI(domain, options);
        </script>
    </body>
</html>
`

async function handleRequest(request) {
  return Response.redirect(destinationURL, statusCode)
  // return new Response(html, {
  //   headers: {
  //     "content-type": "text/html;charset=UTF-8",
  //   },
  // })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})
