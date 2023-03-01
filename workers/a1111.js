const destinationURL = `https://raw.githubusercontent.com/Engineer-of-Stuff/stable-diffusion-paperspace/master/StableDiffusionUI_Voldemort_paperspace.ipynb`
const statusCode = 301

export default {
  async fetch(request, env) {
    try {
      const { pathname } = new URL(request.url);


      if (pathname.startsWith("/status")) {
        const httpStatusCode = Number(pathname.split("/")[2]);


        return Number.isInteger(httpStatusCode)
          ? fetch("https://http.cat/" + httpStatusCode)
          : new Response("That's not a valid HTTP status code.");
      }
      return fetch(destinationURL);
    } catch(e) {
      return new Response(err.stack, { status: 500 })
    }
  }
}