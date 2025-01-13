const logo = document.getElementById('logo');

setTimeout(() => {
  logo.classList.add('fade-out');
}, 2000);

setTimeout(() => {
  logo.remove();
}, 4000);

window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var headerHeight = document.querySelector('header').offsetHeight;
    if (window.scrollY > headerHeight) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });

  // disable klik kanan
  document.oncontextmenu = () => {
    alert("Nyontek Trozzz")
    return false
  }



  // Audio

// Ambil elemen audio dan tombol
document.addEventListener("DOMContentLoaded", function () {
  const musicToggle = document.getElementById("music-toggle");
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");
  const backgroundMusic = document.getElementById("background-music");

  musicToggle.addEventListener("click", function () {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      playIcon.style.display = "inline";
      pauseIcon.style.display = "none";
    } else {
      backgroundMusic.pause();
      playIcon.style.display = "none";
      pauseIcon.style.display = "inline";
    }
  });
});