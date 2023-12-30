async function getImages(text) {
    const main = document.querySelector("main");
    const titleRandomText = document.getElementById("inicial-text");

    const requestURL = `https://serpapi.com/playground?engine=google_images&q=Apple&gl=us&hl=en&ijn=0`;

    const request = new Request(requestURL);

    const response = await fetch(request);
    const words = await response.json();
    console.log(words);
}

getImages(1);
