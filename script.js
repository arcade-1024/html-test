const dots = document.querySelectorAll(".dot");
console.log(dots);
dots.forEach((dot) => {
	dot.addEventListener("mouseover", () => {
		const tooltip = dot.firstElementChild;
		tooltip.classList.remove("d-none");
	});
	dot.addEventListener("mouseleave", () => {
		const tooltip = dot.firstElementChild;
		tooltip.classList.add("d-none");
	});
});
