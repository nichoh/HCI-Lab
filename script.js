function setupTabs (){
    document.querySelectorAll(".type-button").forEach(button =>{
        button.addEventListener("click", ()=>{
            const typeButton = button.parentElement;
            const typeContent= typeButton.parentElement;
            const typeNumber= button.dataset.forMacbooktype;
            const activateTab= typeContent.querySelector(`.type-content[data-typeContent="${typeNumber}"]`);
        });
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    setupTabs();
});