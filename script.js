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

            console.log(typeBar)
            console.log(barContainer)
            console.log(typeNumber)
            console.log(typeToActivate)
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();

    document.querySelectorAll('.tabs').forEach(barContainer=>{
        barContainer.querySelector('.macbookType-Container .type-button').click();
    });
});