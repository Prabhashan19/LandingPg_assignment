      //Enhanced smooth scroll with mobile optimization
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            const navbarHeight = document.querySelector(".navbar").offsetHeight;
            const targetPosition =
              targetElement.getBoundingClientRect().top +
              window.pageYOffset -
              navbarHeight;

            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        });
      });

      // Mobile menu toggle functionality
      function addMobileMenu() {
        const navbar = document.querySelector(".navbar");
        const navLinks = document.querySelector(".nav-links");

        if (!navbar || !navLinks) {
          console.warn("Navbar or nav-links not found");
          return;
        }

        // Create hamburger button
        const hamburger = document.createElement("button");
        hamburger.className = "hamburger";
        hamburger.innerHTML = "☰";
        hamburger.style.display = "none";
        hamburger.style.background = "none";
        hamburger.style.border = "none";
        hamburger.style.fontSize = "1.5rem";
        hamburger.style.cursor = "pointer";
        hamburger.style.color = "#333";
        hamburger.style.padding = "0.5rem";
        hamburger.style.borderRadius = "4px";
        hamburger.style.transition = "background-color 0.3s ease";

        // Insert hamburger button
        navbar.insertBefore(hamburger, navLinks);

        // Toggle functionality
        hamburger.addEventListener("click", () => {
          navLinks.classList.toggle("mobile-open");
        });

        // Hover effect for hamburger
        hamburger.addEventListener("mouseenter", () => {
          hamburger.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        });

        hamburger.addEventListener("mouseleave", () => {
          hamburger.style.backgroundColor = "transparent";
        });

        // Show/hide hamburger based on screen size
        function toggleHamburger() {
          if (window.innerWidth <= 768) {
            hamburger.style.display = "block";
            navLinks.style.display = navLinks.classList.contains("mobile-open")
              ? "flex"
              : "none";
          } else {
            hamburger.style.display = "none";
            navLinks.style.display = "flex";
            navLinks.classList.remove("mobile-open");
          }
        }

        window.addEventListener("resize", toggleHamburger);
        toggleHamburger(); // Initial call
      }

      // Initialize mobile menu when DOM is loaded
      document.addEventListener("DOMContentLoaded", function() {
        addMobileMenu();
        
        // Add scroll behavior for better performance
        document.documentElement.style.scrollBehavior = "smooth";
      });

      // Optional: Close mobile menu when clicking on a nav link
      document.addEventListener("click", function(e) {
        if (e.target.classList.contains("nav-item")) {
          const navLinks = document.querySelector(".nav-links");
          if (navLinks && navLinks.classList.contains("mobile-open")) {
            navLinks.classList.remove("mobile-open");
          }
        }
      });

      // Optional: Handle escape key to close mobile menu
      document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
          const navLinks = document.querySelector(".nav-links");
          if (navLinks && navLinks.classList.contains("mobile-open")) {
            navLinks.classList.remove("mobile-open");
          }
        }
      });