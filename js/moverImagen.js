const image = document.getElementById('moving-image');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
  mouseX = Math.min(event.clientX, window.innerWidth - image.clientWidth);
  mouseY = Math.min(event.clientY, window.innerHeight - image.clientHeight - 100);
  moveImage();
}); 

function moveImage() {
  const offsetX = mouseX - image.clientWidth / 2;
  const offsetY = mouseY - image.clientHeight / 2 - 300;
  image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}
