Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
//*************************************************
//dark and light mode function on the mode button.*
//*************************************************

document.querySelector(".mode").addEventListener('click', function(){
    let light = document.body;
    light.classList.toggle("darkMode");
})


//*******************************
//carousel function + Parallax  *
//*******************************

let carouselImages = ['./images/tim-swaan-eOpewngf68w-unsplash.jpg', "./images/luca-bravo-ESkw2ayO2As-unsplash.jpg", "./images/tienko-dima-uYoVf9I6ANI-unsplash.jpg", "./images/john-towner-3Kv48NS4WUU-unsplash.jpg"];
let carousel = document.getElementById("carouselContainer");
let counter = 0;

carousel.style.backgroundImage = `url(${carouselImages[counter]})`
carousel.style.backgroundRepeat = `no-repeat`
carousel.style.backgroundSize = 'cover';
carousel.style.backgroundAttachment = 'fixed';

setInterval(nextPicture,5000)

function nextPicture(){
    if(counter<carouselImages.length-1){
        counter++
        carousel.style.backgroundImage = `url(${carouselImages[counter]})`
    }else{
        counter = 0;
        carousel.style.backgroundImage = `url(${carouselImages[counter]})`
    }
}

//******************
//collage exercise *
//******************

const allImages = document.querySelectorAll('.image');
console.log(allImages);
for (let i = 0; i < allImages.length; i++){
    allImages[i].addEventListener('click', myFunction);
    allImages[i].addEventListener('click', addText);
    allImages[i].addEventListener('mouseout', resetImg);}

//call enlarge function
function myFunction() {
    console.log(this);
    this.style.transform = "scale(2)";
    this.style.transition = "transform 0.25s ease";
    this.style.border = "2px solid black";
    this.style.zIndex = "1";
}

//call decrease function
function resetImg() {
    // Set image size to original
    console.log(this);
    this.style.transform = "scale(1)";
    this.style.transition = "transform 0.25s ease";
    this.style.zIndex = "-1";
}

function addText(){
   let x = this.alt;
   document.querySelector('.text1').innerHTML = x;
}

//******************
//pokemon on hover *
//******************
let input = "";
const pokemonSprites = document.querySelectorAll('.poke');

pokemonSprites.forEach(poke => {
    poke.addEventListener('mouseover', () => {
        if(poke.innerHTML == "Farfetch'd") {
            poke.innerHTML = "Farfetchd"
            input = poke.innerHTML.toLowerCase();
            getPokemon()
        }
        else {
        }
        input = poke.innerHTML.toLowerCase();
        getPokemon()
    })
})

async function getPokemon() {
    console.log(this);
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const response = await data.json();
    console.log(response);
    let popUp = document.querySelector('.pokeImage');
    popUp.innerHTML = `<img src="${response.sprites.front_default}">`;
}


//***************************
// circle chasing the mouse *
// //***************************
let cursor = document.querySelector('.chaser');
document.getElementsByClassName("box")[0].addEventListener('mousemove', function(e){
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.left = x -310 + "px";
    cursor.style.top = y -280 + "px";
});

let box = document.querySelector(".runnerBox");
let runner = document.getElementsByClassName("runner")[0];


box.addEventListener("mousemove", function (e) {


    let rect = box.getBoundingClientRect();

    let x = box.clientWidth - (e.offsetX - rect.x) - 325;
    let y = box.clientHeight - (e.offsetY - rect.y) - 425;


    runner.style.left = x + "px";
    runner.style.top = y + "px";

});

// let runner = document.querySelector('.runner');
// document.getElementsByClassName('box')[1].addEventListener('mouseover', runAway)
//
// function runAway() {
//     let randomWidth = Math.floor(Math.random() * 100) ;
//     let randomHeight = Math.floor(Math.random() * 100) ;
//
//     runner.style.left = `${randomWidth}px`; //both versions work both with + 'px' or just adding px into the backticks
//     runner.style.top = `${randomHeight}` + 'px';
// }
