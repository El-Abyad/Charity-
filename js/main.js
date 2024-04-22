
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('hidden');
  });
});


// introo
  // Select the <p> element containing the text
  const textElement = document.getElementById("text");

  // Split the text into an array of characters
  const textArray = "Smile".split("");

  // Set the delay between each character (in milliseconds)
  const delay = 1000;

  // Calculate the total delay for all the characters
  const totalDelay = delay * (textArray.length - 1);

  // Loop through the array of characters and add each character to the <p> element
  for (let i = 1; i < textArray.length; i++) {
    setTimeout(() => {
      textElement.textContent += textArray[i];
    }, delay * i);
  }

  // Hide the intro element after the total delay
  let intro = document.querySelector('.intro');

  window.addEventListener('load', function() {
    setTimeout(function() {
      intro.style.display = 'none';
    }, totalDelay);
  });

  window.addEventListener('load', function() {
    if (window.innerWidth >= 1024) {
      ScrollReveal({
        reset: true,
        distance: "60px",
        duration: 1500,
        delay: 200,
      });
      ScrollReveal().reveal(".tagline , .page ", {
        delay: 300,
        origin: "bottom",
      });
      ScrollReveal().reveal(".text , .first, .here-sex", {
        delay: 300,
        origin: "right",
      });
      ScrollReveal().reveal(".boxes ", {
        delay: 500,
        origin: "top",
        interval: 500,
      });
      ScrollReveal().reveal(".boxes , .five-page", {
        delay: 500,
        origin: "bottom",
        interval: 500,
      });
      ScrollReveal().reveal(".image-one", {
        delay: 500,
        origin: "top",
        interval: 500,
      });
      ScrollReveal().reveal(".image-two", {
        delay: 500,
        origin: "bottom",
        interval: 500,
      });
      ScrollReveal().reveal(".company-one", {
        delay: 500,
        origin: "bottom",
        interval: 500,
      });
      ScrollReveal().reveal(".company-two", {
        delay: 500,
        origin: "top",
        interval: 500,
      });
      ScrollReveal().reveal(".company-three", {
        delay: 500,
        origin: "right",
        interval: 500,
      });
      ScrollReveal().reveal(".company-four", {
        delay: 500,
        origin: "left",
        interval: 500,
      });
    }
  });
  