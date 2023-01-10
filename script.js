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

//   Checkout

if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ReadableStreamDefaultController()
}

function ready(){
    var removeItemButton = document.getElementsByClassName('remove-button');
    console.log(removeItemButton)
    for(var i=0; i<removeItemButton.length; i++){
        var button=removeItemButton[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityInputs=document.getElementsByClassName('cart-detail-quantity');
    for(var i=0; i<quantityInputs.length; i++){
        var input=quantityInputs[i];
        input.addEventListener("change", changedquantity);
    }
    }

function removeCartItem(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateTotal();
}

function changedquantity(event){
    var input=event.target
    if(isNaN(input.value) || input.value <=0) {
        input.value=0;
    }
    updateTotal()
}

function updateTotal(){
    var cartContent=document.getElementsByClassName('cart-box')
    var total=0;
    for(var i=0; i<cartContent.length; i++){
        var cartBox=cartContent[i];
        var priceElement= cartBox.getElementsByClassName('cart-detail-price')[0];
        var quantityElement= cartBox.getElementsByClassName('cart-detail-quantity')[0];
        var price=parseFloat(priceElement.innerText.replace("$", ""));
        var quantity=quantityElement.value;
        total = total+ (price*quantity);

        document.getElementsByClassName("total-price")[0].innerText= "$" + total;
    }
}
