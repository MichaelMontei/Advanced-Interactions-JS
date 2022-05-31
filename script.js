Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

//dark and light mode function on the mode button.
document.querySelector(".mode").addEventListener('click', function(){
    let light = document.body;
    light.classList.toggle("darkMode");
})


//carousel function + Parallax
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

//collage exercise
const allImages = document.querySelectorAll('.image');
console.log(allImages);
for (let i = 0; i < allImages.length; i++){
    allImages[i].addEventListener('click', myFunction);
    allImages[i].addEventListener('click', addText);
    allImages[i].addEventListener('mouseout', resetImg);}

//call enlarge function
function myFunction() {
    console.log(this);
    this.style.transform = "scale(1.5)";
    this.style.transition = "transform 0.25s ease";
}

//call decrease function
function resetImg() {
    // Set image size to original
    console.log(this);
    this.style.transform = "scale(1)";
    this.style.transition = "transform 0.25s ease";
}

function addText(){
   let x = this.alt;
   document.querySelector('.text1').innerHTML = x;
}

// circle chasing the mouse
let cursor = document.getElementById('chaser');
document.addEventListener('mousemove', function (e){
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.right = y + "px";
})