const menuButton = document.querySelector(".menu-toggle");
		const menuPanel = document.querySelector(".nav-panel");

		menuButton.addEventListener("click", () => {
			const isOpen = menuButton.getAttribute("aria-expanded") === "true";
			menuButton.setAttribute("aria-expanded", String(!isOpen));
			menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
			menuPanel.classList.toggle("is-open", !isOpen);
		});

		menuPanel.addEventListener("click", (event) => {
			if (event.target.closest("a")) {
				menuButton.setAttribute("aria-expanded", "false");
				menuButton.setAttribute("aria-label", "Open navigation menu");
				menuPanel.classList.remove("is-open");
			}
		});



    
