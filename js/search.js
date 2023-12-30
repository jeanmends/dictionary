const word = document.querySelector("input");
const btnSearch = document.getElementById("btn-search");

btnSearch.addEventListener("click", () => {
    if(word.value.length < 1){
        alert("Type any word!")
    }else{
        populateNew(word.value);
    }
    

})


async function populateNew(text) {
    const main = document.querySelector("main");
    const titleRandomText = document.getElementById("inicial-text");

    const requestURL =
        "https://api.dictionaryapi.dev/api/v2/entries/en/" + text;

    const request = new Request(requestURL);

    const response = await fetch(request);
    const words = await response.json();
    main.innnerHTML = `
    <div class="loader"></div>
    `
    if (response.status != 200) {
        //generateRandomWord();
        titleRandomText.innerHTML = ''; 
        main.innerHTML = `Word ${text.toUpperCase()} not found! <br> You can go back and try a new one.`;
    } else {
        populateMain(words);
        titleRandomText.innerHTML = '';
    }


    //populateHeroes(words);

    // console.log(words);
}
/*
async function populate(word) {
    const requestURL =
    "https://api.dictionaryapi.dev/api/v2/entries/en/"+word;
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const words = await response.json();

    if(response.status != 200){
      //  generateRandomWord();
    }
    
    populateMain(words);
    //populateHeroes(words);

   // console.log(words);
  }

  function populateMain(obj) {
    const titleRandomText = document.getElementById("inicial-text");
    titleRandomText.innerHTML = 'A very random word (or not, its random!)'
    
    const main = document.querySelector("main");
    main.innerHTML = '';
    const myUl = document.createElement("ul");
    const title = document.createElement("h1");
    title.innerHTML = `Definition of <a href='${obj[0].sourceUrls[0]}' title="Click for more information" target="_blank">${obj[0].word}</a>`;
    main.append(title)
    const newWord = obj.map((text) => text.meanings);
    const def = newWord.map((text) => text[0].definitions);
    let i = 1;
    myUl.innerHTML = def[0].map((text) => `<li> ${i++}. ${text.definition}</li>`).join("");
    main.append(myUl);

  }

  */