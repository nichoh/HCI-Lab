const hambMenu = document.getElementsByClassName('hamb-menu')[0]
const navLinks = document.getElementsByClassName('link-container')[0]
const navCheckout = document.getElementsByClassName('icon-container')[0]
const navSearch = document.getElementsByClassName('icon-container')[1]

function setupTabs(){
    document.querySelectorAll(".type-button").forEach(button =>{
        button.addEventListener("click", () =>{
            const typeBar = button.parentElement;
            const barContainer = typeBar.parentElement;
            const typeNumber = button.dataset.forTab;
            const typeToActivate = barContainer.querySelector(`.type-content[data-tab="${typeNumber}"]`);

            typeBar.querySelectorAll(".type-button").forEach(button => {
                button.classList.remove("type-button--active");
            });

            barContainer.querySelectorAll(".type-content").forEach(tab => {
                tab.classList.remove("type-content--active");
            });
            
            button.classList.add("type-button--active");
            typeToActivate.classList.add("type-content--active");

        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();

    document.querySelectorAll(".content").forEach(barContainer =>{
        barContainer.querySelector(".macbookType-Container .type-button").click();
    })
});

hambMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    navCheckout.classList.toggle('active')
    navSearch.classList.toggle('active')
  })