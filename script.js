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
