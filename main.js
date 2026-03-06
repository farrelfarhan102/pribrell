
const message = `buat cayya inimaa.\nHey! Goodluck with whatever you have going on,you got this. and i hope something really good happenes.\n\nto you,you deserve it. semoga semester dua ini bisa dapet ipk tinggi\n\nand semoga uts nanti lancarr yupp\n\nHarus seriuss pokoknya and belajarr, pastii lu bisaa semangaat teruss yaa kuliahhnyaa\n\nDari farrel cihuy`;
function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}


