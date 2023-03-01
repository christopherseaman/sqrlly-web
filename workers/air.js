const html = `<!DOCTYPE html>
<body>
<div id='PurpleAirWidget_125219_module_AQI_conversion_C0_average_10_layer_standard'>Loading PurpleAir Widget...</div>
<script src='https://www.purpleair.com/pa.widget.js?key=0UH3T34V8UWI2R7L&module=AQI&conversion=C0&average=10&layer=standard&container=PurpleAirWidget_125219_module_AQI_conversion_C0_average_10_layer_standard'></script>
</body>`

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})
