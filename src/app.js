const slider = document.getElementById("slider");
let currentIndex = 0;
let images = ["./assets/auth.jpeg", "./assets/dash.png", "./assets/feed.png"];
slider.innerHTML = `<img src=${images[currentIndex]} alt="post" class="h-full w-full overflow-hidden object-cover rounded-md"/>`;
setInterval(() => {
  slider.innerHTML = `<img src=${images[currentIndex]} alt="post" class=" h-full w-full overflow-hidden object-cover rounded-md z-0   transition-transform duration-150 ease-linear"/>`;
  currentIndex++;
  if (currentIndex === 3) {
    currentIndex = 0;
  }
}, 1000);
