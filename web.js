// Enhanced smooth scroll with mobile optimization
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

      // Mobile menu toggle (if you want to add hamburger menu)
      function addMobileMenu() {
        const navbar = document.querySelector(".navbar");
        const navLinks = document.querySelector(".nav-links");

        // Create hamburger button
        const hamburger = document.createElement("button");
        hamburger.className = "hamburger";
        hamburger.innerHTML = "☰";
        hamburger.style.background = "none";
        hamburger.style.border = "none";
        hamburger.style.fontSize = "1.5rem";
        hamburger.style.cursor = "pointer";

        // Insert hamburger button
        navbar.insertBefore(hamburger, navLinks);

        // Toggle functionality
        hamburger.addEventListener("click", () => {
          navLinks.classList.toggle("mobile-open");
        });

        // Show/hide hamburger based on screen size
        function toggleHamburger() {
          if (window.innerWidth <= 768) {
            hamburger.style.display = "block";
          } else {
            hamburger.style.display = "none";
            navLinks.classList.remove("mobile-open");
          }
        }

        window.addEventListener("resize", toggleHamburger);
        toggleHamburger(); // Initial call
      }

      addMobileMenu();