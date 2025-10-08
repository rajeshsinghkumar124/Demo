document.write("<h1>JavaScript in external file</h1>");

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

const themeButton = document.getElementById("theme-button");
console.log(themeButton);

themeButton.addEventListener("click", () => {
  const current = document.body.style.backgroundColor;
  if (!current || current == "white") {
    changeBackgroundColor("black");
    themeButton.innerText = "Light Mode";
  } else {
    changeBackgroundColor("white");
    themeButton.innerText = "Dark Mode";
  }
});
