const h1 = document.querySelector("div.hello h1")

function handleTitleClick() {
    h1.classList.toggle("clicked")
}

h1.addEventListener("click", handleTitleClick);