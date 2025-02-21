document.addEventListener('DOMContentLoaded', () => {
  // Animate text immediately
  gsap.to(".designer-text", {
    opacity: 1,
    duration: 1,
    delay: 3
  });

  // Animate buttons after 3 seconds (now stays fixed)
  gsap.to(".button-container", {
    opacity: 1,
    duration: 1,
    delay: 3,
    ease: "power2.out",
    onComplete: () => {
      // Keep buttons fixed permanently
      document.querySelector('.button-container').style.position = 'fixed';

      // Add hover animations
      document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, { scale: 1.05, duration: 0.3 });
        });
        button.addEventListener('mouseleave', () => {
          gsap.to(button, { scale: 1, duration: 0.3 });
        });
      });
    }
  });

  // Rotate saw blade
  gsap.to("#saw-blade", {
    rotation: -360,
    transformOrigin: "center",
    repeat: -1,
    duration: 20,
    ease: "linear"
  });

  // Button navigation and active state handling
  const projectsButton = document.getElementById("projects-button");
  const profileButton = document.getElementById("profile-button");

  // Scroll to the top when the "Projects" button is clicked
  projectsButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveButton(projectsButton);
  });

  // Switch to the "Profile" button when clicked
  profileButton.addEventListener("click", function () {
    setActiveButton(profileButton);
  });

  function setActiveButton(activeButton) {
    document.querySelectorAll(".button").forEach((button) => {
      button.classList.remove("active");
    });
    activeButton.classList.add("active");
  }
});
const customCursor = document.createElement('div');
customCursor.setAttribute("id", "custom-cursor");
document.body.appendChild(customCursor);

// Track mouse movement
document.addEventListener('mousemove', (e) => {
  gsap.to(customCursor, { x: e.pageX - 30, y: e.pageY - 30, duration: 0.2, ease: "power2.out" });
});

// // Handle hover animation on the content container
// const contentContainers = document.querySelectorAll('.content-container, .video-frame');

// contentContainers.forEach(container => {
//   container.addEventListener('mouseenter', () => {
//     gsap.to(customCursor, { scale: 1.5, opacity: 1, duration: 1, ease: "power2.inOut" });
//   });

//   container.addEventListener('mouseleave', () => {
//     gsap.to(customCursor, { scale: 1, opacity: 0.8, duration: 1, ease: "power2.inOut" });
//   });
// });


// Rotate the saw-icon continuously
gsap.to(".saw-icon", {
  rotate: -360,
  duration: 15,
  repeat: -1, // Infinite loop
  ease: "linear"

});

