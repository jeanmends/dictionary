/* 
const url = "https://random-word-api.herokuapp.com/word";
const main = document.getElementById("main")
let newArray = [];
//const word = "https://api.dictionaryapi.dev/api/v2/entries/en/"
fetch("https://api.dictionaryapi.dev/api/v2/entries/en/car")
.then((response) => response.json())
.then(function(details){
    let defFinally = details.map((word) => word.meanings);
    console.log(defFinally[0]["definitions"][0])
})
*/
async function generateRandomWord(){
    const requestURL =
    "https://random-word-api.herokuapp.com/word";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const word = await response.json();

    populate(word);
}
async function populate(random) {
    const requestURL =
    "https://api.dictionaryapi.dev/api/v2/entries/en/"+random;
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const words = await response.json();

    if(response.status != 200){
        generateRandomWord();
    }
    
    populateMain(words, "fromrandom");
    //populateHeroes(words);

   // console.log(words);
  }

  function populateMain(obj,aux = 'none') {
    const titleRandomText = document.getElementById("inicial-text");
    if (aux == "fromrandom"){
        console.log("funcionou")
        titleRandomText.innerHTML = 'A very random word (or not, its random!)'
    }else{
        titleRandomText.innerHTML = ''; 
        console.log("não funcionou")
    }

    
    const main = document.querySelector("main");
    main.innerHTML = '';
    const myUl = document.createElement("ul");
    const title = document.createElement("h1");
    //const upTtitle = document.createElement("h1");
    //console.log(obj)
    //upTtitle.innerHTML = 'A very random word';
    //main.append(upTtitle);
    title.innerHTML = `Definition of <a href='${obj[0].sourceUrls[0]}' title="Click for more information" target="_blank">${obj[0].word}</a>`;
    main.append(title)
    const newWord = obj.map((text) => text.meanings);
    const def = newWord.map((text) => text[0].definitions);
    let i = 1;
    myUl.innerHTML = def[0].map((text) => `<li> ${i++}. ${text.definition}</li>`).join("");
    main.append(myUl);
     /* 
    myH1.textContent = obj.word;

    console.log(myH1.textContent);
   
    header.appendChild(myH1);
  
    const myPara = document.createElement("p");
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
    */
  }

generateRandomWord();

const btnRandom = document.getElementById("btn-random");

btnRandom.addEventListener("click", () => {
    const main = document.querySelector("main");
    main.innerHTML = '<div class="loader"></div>';
    generateRandomWord();
});