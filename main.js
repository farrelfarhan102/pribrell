
const message = `buat cayya apa aja inimaa.\nSemangat buat jalanin puasa di taun ini walau gak puasa hari ini , jangan lupa diganti tuu.\n\nSemangat juga kuliahnyaa yakk,. semoga semester dua ini bisa dapet ipk tinggi\n\nand semoga uts nanti lancarr yupp\n\nHarus seriuss pokoknya and belajarr, pastii lu bisaa semangat okeyy\n\nDari farrel`;
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

