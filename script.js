// Home page contact us button logic starts here
const button = document.getElementById("showFormBtn");
const contactForm = document.getElementById("contactFormContainer");
const home = document.getElementById("home-container");
const closeFormButton = document.getElementById("closeFormBtn");

button.addEventListener('click', ShowButton);
document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get form elements
  const workEmail = document.getElementById('workEmail').value;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const termsCheckbox = document.getElementById('termsCheckbox').checked;

  // Check if all fields are filled
  if (workEmail && firstName && lastName && termsCheckbox) {
      alert('Form submitted!');
      // Optionally, submit the form programmatically after showing the alert
      event.target.submit();
  } else {
      alert('Please fill in all fields and agree to the terms and conditions.');
  }
});

function ShowButton() {
  console.log("I am clicked");
  contactForm.style.opacity = 1;
  home.style.opacity = 0.1;
}

closeFormButton.addEventListener('click', function () {
  contactForm.style.opacity = 0;
  home.style.opacity = 1;
});
// Home page contact us button logic ends here

// Function to reset label position
function resetLabel(label) {
  label.style.top = '10px';
  label.style.fontSize = '16px';
  label.style.color = '#6F718F99';
}

// Reset label position on focus
document.querySelectorAll('#contactForm input').forEach(function (input) {
  const label = input.nextElementSibling;

  // Focus event listener
  input.addEventListener('focus', function () {
    resetLabel(label); // Reset all labels
    label.style.top = '-25px'; // Move current label up
    label.style.fontSize = '25px';
    label.style.color = '#6F718F';
  });

  // Blur event listener (when focus is lost)
  input.addEventListener('blur', function () {
    if (input.value.trim() === '') {
      resetLabel(label); // Reset label if input is empty
    }
  });
});

// Reload the page after form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
  setTimeout(function () {
    location.reload();
  }, 1000);
});

// Our Project Section starts here
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images/ProjectSection-1.png",
    "images/image1.jpeg",
    "images/image2.jpg"
  ];
  const paragraphs = document.querySelectorAll(".left-content div");
  let currentIndex = 0; // Define currentIndex here

  function changeImageAndParagraphBackground(index) {
    // Change image
    document.getElementById("projectImage").src = images[index];

    // Remove active class from all paragraphs
    paragraphs.forEach((paragraph, idx) => {
      paragraph.classList.remove("active");
      if (idx === index) {
        paragraph.classList.add("active");
      }
    });
  }

  // Add click event listeners to each paragraph
  paragraphs.forEach((paragraph, index) => {
    paragraph.addEventListener("click", function () {
      changeImageAndParagraphBackground(index);
    });
  });

  // Initial call (assuming first paragraph should be active initially)
  changeImageAndParagraphBackground(0);


});
// Our Project Section ends here

// Services section carousel logic starts here
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const slideWidth = slides[0].getBoundingClientRect().width;

  const dot1 = document.getElementById('dot1');
  const dot2 = document.getElementById('dot2');
  const dot3 = document.getElementById('dot3');

  let currentIndex = 0;
  let intervalId; // To store the interval ID for carousel auto-play

  function moveToSlide(index) {
    const offset = -index * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
    currentIndex = index;

    updateDots();
  }

  function updateDots() {
    // Update dot indicators based on currentIndex
    if (currentIndex === 0 || currentIndex === 3 || currentIndex === 6) {
      dot1.src = "/images/red-dot.svg";
      dot2.src = "/images/black-dot.svg";
      dot3.src = "/images/black-dot.svg";
    } else if (currentIndex === 1 || currentIndex === 4 || currentIndex === 7) {
      dot1.src = "/images/black-dot.svg";
      dot2.src = "/images/red-dot.svg";
      dot3.src = "/images/black-dot.svg";
    } else if (currentIndex === 2 || currentIndex === 5 || currentIndex === 8) {
      dot1.src = "/images/black-dot.svg";
      dot2.src = "/images/black-dot.svg";
      dot3.src = "/images/red-dot.svg";
    }
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length - 2) {
      track.style.transition = 'none';
      currentIndex = 0;
      moveToSlide(currentIndex);
      setTimeout(() => {
        track.style.transition = 'transform 0.5s ease-in-out';
        currentIndex = 1;
        moveToSlide(currentIndex);
      }, 50);
    } else {
      moveToSlide(currentIndex);
    }
  }



  function startCarousel() {
    intervalId = setInterval(nextSlide, 2000); // Auto-play carousel every 2 seconds
  }



  // Event listeners for carousel controls (if any)
  // Example: dot1.addEventListener('click', () => moveToSlide(0));

  startCarousel(); // Start the carousel on page load
});
// Services section carousel logic ends here
