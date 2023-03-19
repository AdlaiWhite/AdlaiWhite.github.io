const hamburgerButton = document.getElementById('hamburger')
const navList =document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

const selectElement = document.querySelector(".ice-cream");

selectElement.addEventListener("change", (event) => {
  const result = document.querySelector("#result");
  result.innerHTML = `You like ${event.target.value}`;
});



