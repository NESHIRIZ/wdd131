// ================== PROFESSIONAL SITE ENHANCEMENTS ==================
document.addEventListener("DOMContentLoaded", () => {
	// ---------- Footer Year ----------
	const yearSpan = document.getElementById("currentyear");
	if (yearSpan) {
		yearSpan.textContent = new Date().getFullYear();
		yearSpan.setAttribute("aria-label", `Current year: ${yearSpan.textContent}`);
		yearSpan.style.opacity = 0;
		setTimeout(() => {
			yearSpan.style.transition = "opacity 1s";
			yearSpan.style.opacity = 1;
		}, 200);
	}

	// ---------- Footer Last Modified ----------
	const lastMod = document.getElementById("lastModified");
	if (lastMod) {
		lastMod.textContent = `Last Modified: ${document.lastModified}`;
		lastMod.setAttribute("aria-label", lastMod.textContent);
		lastMod.style.opacity = 0;
		setTimeout(() => {
			lastMod.style.transition = "opacity 1s";
			lastMod.style.opacity = 1;
		}, 400);
	}

	// ---------- Dynamic Greeting ----------
	function getGreeting() {
		const hour = new Date().getHours();
		if (hour < 12) return "Good morning";
		if (hour < 18) return "Good afternoon";
		return "Good evening";
	}
	const profileTitle = document.querySelector(".profile-title");
	if (profileTitle) {
		const greeting = document.createElement("div");
		greeting.textContent = getGreeting() + "!";
		greeting.className = "profile-greeting";
		greeting.setAttribute("aria-live", "polite");
		greeting.style.fontSize = "1.1rem";
		greeting.style.color = "#00695c";
		greeting.style.marginTop = "0.5rem";
		greeting.style.opacity = 0;
		profileTitle.parentNode.insertBefore(greeting, profileTitle.nextSibling);
		setTimeout(() => {
			greeting.style.transition = "opacity 1s";
			greeting.style.opacity = 1;
		}, 600);
	}

	// ================== NEW ENHANCEMENTS ==================

	// ---------- Hamburger Menu ----------
	const menuBtn = document.getElementById("menu");
	const nav = document.querySelector(".navigation");

	if (menuBtn && nav) {
		menuBtn.addEventListener("click", () => {
			nav.classList.toggle("hidden");

			// Accessibility updates
			const expanded = menuBtn.getAttribute("aria-expanded") === "true";
			menuBtn.setAttribute("aria-expanded", !expanded);
		});
	}

	// ---------- Temple Album Animations ----------
	const albumFigures = document.querySelectorAll(".album figure");
	if (albumFigures.length) {
		albumFigures.forEach((fig, index) => {
			fig.style.opacity = 0;
			fig.style.transform = "translateY(30px)";
			setTimeout(() => {
				fig.style.transition = "opacity 0.8s, transform 0.8s";
				fig.style.opacity = 1;
				fig.style.transform = "translateY(0)";
			}, 300 + index * 150); // stagger animation
		});
	}
});
