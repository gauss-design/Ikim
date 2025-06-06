const slides = document.querySelectorAll(".ikim-testimonials-cards");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initilizeSlider);

function initilizeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("ikim-displaySlide");
    // intervalId = setInterval(nextSlide, 5000);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const startYear = 2017;
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - startYear;

  const aboutText = `Avand de ${yearsInBusiness} ani sala de dans in Iasi, am lucrat cu mii de perechi alaturi de echipa noastra. Nu doar din zona Moldovei, ci si din Bucuresti, Brasov, Timisoara sau chiar Constanta, perechile de miri veneau din orice colt al tarii.`;

  document.getElementById("ikim-about-text").innerText = aboutText;
});

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("ikim-displaySlide");
  });
  slides[slideIndex].classList.add("ikim-displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

const currentYear = document.getElementById("ikim-currentYear");
currentYear.textContent = new Date().getFullYear();

document.querySelectorAll(".ikim-button-primary").forEach((button) => {
  const updateGradient = (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    button.style.setProperty("--mouse-x", `${percentX}%`);
    button.style.setProperty("--mouse-y", `${percentY}%`);
  };

  button.addEventListener("mousemove", updateGradient);
  button.addEventListener("mouseenter", updateGradient);
});

gsap.from(".ikim-nav", { y: -100, opacity: 0, duration: 0.5 });
gsap.from(".ikim-hero-image img", { y: 50, opacity: 0, duration: 0.7 });
gsap.from(".ikim-hero-content", { y: 100, opacity: 0, duration: 1 });

// ScrollTrigger for the .intro section
gsap.from(".ikim-intro", {
  scrollTrigger: {
    trigger: ".ikim-intro",
    start: "top 80%", // Trigger when the top of the section is 80% from the top of the viewport
    toggleActions: "play none none reverse",
  },
  y: 50, // Slide up from below
  opacity: 0,
  duration: 1,
});

// Animate the title and content with delay
gsap.from(".ikim-intro-cards-title", {
  scrollTrigger: {
    trigger: ".ikim-intro",
    start: "top 80%",
  },
  y: 30,
  opacity: 0,
  duration: 0.5,
  delay: 0.2, // Delay for the title
});

gsap.from(".ikim-intro-cards-content", {
  scrollTrigger: {
    trigger: ".ikim-intro",
    start: "top 80%",
  },
  y: 30,
  opacity: 0,
  duration: 0.5,
  delay: 0.4, // Delay for the content
});

// Stagger animation for the intro cards
gsap.from(".ikim-intro-card", {
  scrollTrigger: {
    trigger: ".ikim-intro",
    start: "top 80%",
  },
  y: 30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2, // Stagger the animation for each card
});

// Rolling effect for the numbers
const numbers = document.querySelectorAll(".ikim-intro-numbers");
numbers.forEach((number) => {
  const value = parseInt(number.textContent, 10);
  gsap.fromTo(
    number,
    {
      innerHTML: 0,
    },
    {
      innerHTML: value,
      duration: 5,
      scrollTrigger: {
        trigger: ".ikim-intro",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      snap: { innerHTML: 1 }, // Snap to whole numbers
      onUpdate: function () {
        number.innerHTML = Math.ceil(number.innerHTML); // Round up to the nearest whole number
      },
    }
  );
});

// ScrollTrigger for the .beneficii section
gsap.from(".ikim-roadmap h2", {
  scrollTrigger: {
    trigger: ".ikim-beneficii",
    start: "top 80%",
  },
  y: -30,
  opacity: 0,
  duration: 0.5,
});

// Scale animation for the .beneficii-card elements
gsap.from(".ikim-beneficii-card", {
  scrollTrigger: {
    trigger: ".ikim-beneficii",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  scale: 0,
  opacity: 0,
  duration: 0.5,
  stagger: {
    amount: 0.5,
    from: "start",
    amount: 0.5,
    random: true,
  },
});

gsap.from(".ikim-lectures", {
  scrollTrigger: {
    trigger: ".ikim-lectures",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  y: 50, // Move up from below
  opacity: 0,
  duration: 0.5,
});

// Stagger animation for the .lecture-card elements
gsap.from(".ikim-lecture-card", {
  scrollTrigger: {
    trigger: ".ikim-lectures",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 30, // Move up from below
  duration: 0.5,
  stagger: 0.3, // Stagger the appearance of each card
});

// Slide in animation for the .about-content
gsap.from(".ikim-about-info", {
  scrollTrigger: {
    trigger: ".ikim-about",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  x: -100, // Move in from the right
  opacity: 0,
  duration: 0.5,
});

// ScrollTrigger for the .testimonials section
gsap.from(".ikim-testimonials", {
  scrollTrigger: {
    trigger: ".ikim-testimonials",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  y: 50, // Move up from below
  opacity: 0,
  duration: 0.5,
});

// Stagger animation for the .testimonials-card elements
gsap.from(".ikim-testimonials-card", {
  scrollTrigger: {
    trigger: ".ikim-testimonials",
    start: "top 70%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 30, // Move up from below
  duration: 0.5,
  stagger: 0.3, // Stagger the appearance of each card
});
