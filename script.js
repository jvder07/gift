
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";

    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    document.querySelector(".heart-container").appendChild(heart);

    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}

setInterval(createHeart, 4000);
