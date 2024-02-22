
const body = document.querySelector("body");
body.style.cssText = "background-color: #f5f5f5; margin: 0; padding: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; align-items: center;";

const img2 = document.createElement("img");
img2.src = "htmlcss.png";
document.body.appendChild(img2);
img2.style.width = "200px";
img2.style.margin = "absolute";

const img = document.createElement("img");
img.src = "js.png";
document.body.appendChild(img);
img.style.width = "200px";

img.onmouseover = () => {
    img.style.position = "absolute";
    img.style.top = Math.random() * (window.innerHeight - img.height) + "px";
    img.style.left = Math.random() * (window.innerWidth - img.width) + "px";
    // body.style.overflow = "hidden";
}
