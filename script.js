
  document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel_items");
    const buttons = Array.from(items, () => {
      return `<button class="carousel_buttons"></button>`;
    });
    carousel.insertAdjacentHTML("beforeend",`
      <div class="carousel_bar">
        ${buttons.join("")}
      </div>
    `);

    const carouselButtons = carousel.querySelectorAll(".carousel_buttons");
    setInterval(  carouselButtons.forEach((button, i) => {
      button.addEventListener("click", () => {
        items.forEach(item => item.classList.remove("carousel_items--selected"));
        carouselButtons.forEach(item => item.classList.remove("carousel_buttons--selected"));
        items[i].classList.add("carousel_items--selected");
        button.classList.add("carousel_buttons--selected");
      });
      
    }),2000)
items[0].classList.add("carousel_items--selected");
        buttons[0].classList.add("carousel_buttons--selected");
    console.log(buttons);
  });

  