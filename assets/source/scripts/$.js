  const nomes = ['Ana', 'Carlos', 'Gabriel', 'Isabela', 'João', 'Maria', 'Pedro', 'Rafael', 'Sofia', 'Thiago', 'Valentina', 'Vinícius', 'Yasmin', 'Arthur', 'Laura', 'Lucas', 'Julia', 'Matheus', 'Mariana', 'Gustavo', 'Larissa', 'Enzo', 'Camila', 'Daniel', 'Amanda', 'Eduardo', 'Fernanda', 'Felipe', 'Bianca', 'Henrique', 'Lívia', 'Guilherme', 'Beatriz', 'Leonardo', 'Carolina', 'Rafaela', 'Ricardo', 'Natália', 'Vitor', 'Mariana', 'Thales', 'Isadora', 'Rodrigo', 'Vanessa', 'Fábio', 'Luana'];
  const jogos = ['BAC BO', 'MINES', 'PENALTY', 'NINJA CRASH'];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function createRandomSlide() {
    const nome = nomes[getRandomInt(0, nomes.length - 1)];
    const valorInteiro = getRandomInt(20, 330);
    const centavos = getRandomInt(0, 99); 
    const valor = `${valorInteiro},${centavos < 10 ? '0' : ''}${centavos}`;
    const jogo = jogos[getRandomInt(0, jogos.length - 1)];
    const isFaturou = Math.random() < 0.5;
    const sacarMessage = isFaturou ? `ganhou R$${valor}` : `acabou de sacar R$${valor} <br><p>VIA PIX!</p>`;
    const slide = document.createElement('div');
    slide.classList.add('slide');
    const info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = `<p>${nome}</p><p>${sacarMessage}</p>${isFaturou ? `<p>${jogo}</p>` : ''}`;
  
    slide.appendChild(info);
    return slide;
}

  function populateSlider() {
    const slidesContainer = document.getElementById('slides');

    for (let i = 0; i < 50; i++) {
      const slide = createRandomSlide();
      slidesContainer.appendChild(slide);
    }
  }

  populateSlider();

  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % 50;
    const transformValue = `translateX(${-currentIndex * 100}%)`;
    document.getElementById('slides').style.transform = transformValue;
  }, 5000);

  let counterValue = 100;

  function updateCounter() {
      const counterElement = document.getElementById('counter');
  
      const randomIncrement = Math.floor(Math.random() * 13) - 6;
  
      counterValue += randomIncrement;
  
      if (counterValue > 150) {
          counterValue = 150;
      } else if (counterValue < 30) {
          counterValue = 30;
      }
  
      counterElement.textContent = counterValue;
  
      const nextMoveUp = Math.random() > 0.5;
  
      setTimeout(() => {
          if (nextMoveUp) {
              updateCounter();
          } else {
              setTimeout(updateCounter, 2000);
          }
      }, 4000);
  }
  
  document.addEventListener('DOMContentLoaded', updateCounter);
  
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var timer = null;

function playSlideShow() {
    timer = setTimeout(function () {
        plusSlides(1);
        playSlideShow();
    }, 3000);
}

function stopSlideShow() {
    if (timer != null) {
        clearTimeout(timer);
        timer = null;
    }
}

function pauseSlideShow() {
    stopSlideShow();
    setTimeout(function () {
        playSlideShow();
    }, 3000);
}

function pauseOnMouseOver() {
    document.querySelector('.container-banner').addEventListener('mouseover', function () {
        stopSlideShow();
    });

    document.querySelector('.container-banner').addEventListener('mouseout', function () {
        pauseSlideShow();
    });
}

pauseOnMouseOver();
playSlideShow();

