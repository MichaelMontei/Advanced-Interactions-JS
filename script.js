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




//Image transform + reset image function
document.querySelectorAll('.image')[0].addEventListener("click", myFunction);
//increase the image
    function myFunction(){
    let firstImage = document.querySelectorAll('.image')[0];
    firstImage.style.transform = "scale(1.5)";
    firstImage.style.transition = "transform 0.25s ease";
    document.getElementById("text1").innerText = "Aurora Borealis";

}

//decrease the image
document.querySelectorAll(".image")[0].addEventListener("mouseout", resetImg);
function resetImg() {
    // Set image size to original
    document.querySelectorAll(".image")[0].addEventListener("mouseout", resetImg);
    let firstImage = document.querySelectorAll(".image")[0];
    firstImage.style.transform = "scale(1)";
    firstImage.style.transition = "transform 0.25s ease";
}