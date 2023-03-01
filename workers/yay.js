// const destinationURL = `https://us06web.zoom.us/j/6771048335?pwd=DMUFCMIutvQkE4zLs4jXVpgHYv8ga0.1`
// const statusCode = 301

const html = `
<!DOCTYPE html>
<html>
<head>
<style>
body {
  display: flex;
  height: 100vh;
}

.wrapper {
  background-color: LemonChiffon;
  width: 600px;
  height: 400px;
  border: 2px dotted black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.picture-box {
  text-align: center;
  width: 50px;
  height: 50px;
}

img {
  width: 100%;
  height: 100%;
  opacity: 0.5;
}
</style>
</head>
<body>
<div class="wrapper">
  <div class="picture-box">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-728.7 992.4 835.2 768.2">
  <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
    <path stroke-width="24.8" d="M-611 1098h3l-1 5-8 19-10 22-9 23-9 25-6 19-9 31-13 45-12 44-6 28-6 28-6 35-3 29-1 22 1 20 4 22 7 19 8 14 8 12q5 6 15 13l17 12 15 8 36 9"/>
    <path stroke-width="21.2" d="m-111 1352-16-16-25-25-19-22-13-19-8-14-3-11v-7q0-4 4-11l11-13 17-13q10-7 26-14l28-13 20-6q9-3 14-3h8l5 3q3 2 6 8 3 7 2 18 0 11-7 31l-12 32-8 21-6 15-10 24-11 31-5 20q-2 7-2 17l2 17 4 12 11 13"/>
    <path stroke-width="17.8" d="m-109 1490-1-3 3-5 7-12 9-10q5-4 9-5 3-2 7-2l8 1q4 1 9 7 4 5 6 13 3 8 3 15l-1 13-7 14q-6 8-13 14-6 6-14 10l-16 6-12 1q-6 1-10-1l-7-5q-4-4-5-10-2-7-1-13l2-11"/>
    <path stroke-width="24.6" d="M-87 1004v1l9 16 14 19 11 13 13 16 18 20 20 22 18 20 16 20 13 18 11 21 11 22 7 19 5 20 4 24 2 23-1 15-2 20q-2 13-7 29l-7 24-6 15-12 28q-9 21-24 49-15 29-25 44l-13 24-8 12-3 7-2 4"/>
  </g>
  <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
    <path stroke-width="27.8" d="m-586 1433 2 6 2 10v40l1 12 1 7 1 8 2 9 4 9 4 6 5 5 6 4 5 2 7 1 7-1 8-3 10-4 12-9 10-10 5-5 5-6 7-8 6-9 6-10 5-9 5-11 3-11 2-6 2-7 2-11v-20l-1-7-1-3-2-2-2-1-2-1-3 4-3 8-2 8-2 6-2 12-2 14-1 15v49l1 15v20l-1 17-1 10-2 13-3 16-4 15-5 17-4 10-3 5-2 5-3 5q-1 4-6 11l-8 12-7 10-6 7-3 3-6 6-10 8-11 7-11 6-11 3-9 2-10-1-9-2-7-3-6-5-6-6q-3-3-4-7l-2-5-1-5-1-5v-5"/>
    <path stroke-width="23.7" d="M-415 1421v-1l2-4 7-10 7-8 4-4 4-5 8-6 7-4 7-2h7l8 1q5 1 9 4 5 2 8 6l8 8 6 10 4 11 3 10 1 8 1 8-1 11-1 6-2 3-2 2-3-1-5-5-7-10-5-8-5-6-4-3-5-4-5-2h-7l-7 1-7 4-8 6-5 5-5 6-4 5-4 6-4 6-4 7-2 5-2 4-1 4-2 8-2 7v8l1 9 2 6 3 5 4 5 5 2 5 1 9 1 10-1q6 0 9-2l6-2 4-2 8-5 10-7 6-4 6-4 8-6 10-8 8-6 5-3 8-4 1-1"/>
    <path stroke-width="27.1" d="m-264 1381 2 2 2 3 1 3 1 5q2 5 1 14v14l-1 12-1 9v13l1 10 1 7 2 5 3 3 4 2h6l8-2 10-5 10-8 6-6 5-6 6-7 7-10 7-13 5-14 3-11 2-10v-18l-2-8-1-5-2-4q-1-2-3-2l-3-1q-2 0-4 3l-4 7-2 9-3 11-2 12-2 18-2 20-2 19-2 19-2 12-2 10-1 7-3 13-4 15-6 16-6 15-4 7-4 8-5 9-7 10-7 10-5 6-7 8-10 9-9 8-6 4-5 3-7 4-11 6-15 7-15 4-10 2-7 1-8 1h-8l-13-1-16-3-10-2-7-2-6-3-7-4"/>
  </g>
</svg>
</div>
</div>
</body>
</html>
`

async function handleRequest(request) {
  // return Response.redirect(destinationURL, statusCode)
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})
