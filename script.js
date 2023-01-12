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
        checkCart(total);
    }

}


const form=document.querySelector('form')
// const userName=document.getElementsByClassName('user-name');
// var userEmail=document.getElementsByClassName('user-email')[0];
// const phone=document.getElementsByClassName('user-phone');
// const userAddress=document.getElementsByClassName('user-address');
// const userCard=document.getElementsByClassName('user-creditcard');

function checkEmail(userEmail){
    var at= userEmail.indexOf("@");
    var dot= userEmail.indexOf(".");
    
    if(at<1){
        return false;
    }else if(dot=userEmail.length - 1){
        return false;
    }

}

function ValidateEmail(userEmail){
    var result=checkEmail(userEmail);

    if(!result){
        preventDefaut();
        document.getElementById("email-error").innerHTML="Email Address is not Valid"
    }else{
        document.getElementById("email-error").innerHTML="Correct"
    }
}

function checkNumber(userNumber){
    if(isNaN(userNumber)){
        document.getElementById("phone-error").innerHTML="Input only number"
        document.getElementById("form-sub-button").disabled=true;
    }else{
        document.getElementById("phone-error").innerHTML="Correct"
        document.getElementById("form-sub-button").disabled=false;
    }
}


function checkCard(userCreditCard){
    var cardnumlen=userCreditCard.length;
    if(isNaN(userCreditCard) || cardnumlen!=16){
        document.getElementById("card-error").innerHTML="Invalid Credit Card Number"
        document.getElementById("form-sub-button").disabled=true;
    }
    
    if(!isNaN(userCreditCard) && cardnumlen==16){
        document.getElementById("card-error").innerHTML="Correct"
        document.getElementById("form-sub-button").disabled=false;
    }
}

// function checkCart(total){
//     var priceTotal=total;

//     if(total==0){
//         document.getElementById("submit-error").innerHTML="Cart Cannot be Empty"
//         document.getElementById("form-sub-button").disabled=true;
//     }else if(total!=0){
//         document.getElementById("submit-error").innerHTML="Cart is not Empty"
//         document.getElementById("form-sub-button").disabled=false;
//     }
    
// }

// Services.html slider
//Show
var slidesS = $('.PosterS') 
slidesS.hide()

var minS = 0
var maxS = slidesS.length - 1

var indexS = 0
slidesS.eq(indexS).show()

$('#gorightS').click(()=> {
    if(indexS == maxS){
        return
    }

    slidesS.eq(indexS).fadeOut(500, ()=> {
        indexS++
        slidesS.eq(indexS).fadeIn(500)
    })
})

$('#goleftS').click(()=> {
    if(indexS == minS){
        return
    }

    slidesS.eq(indexS).fadeOut(500, ()=> {
        indexS--
        slidesS.eq(indexS).fadeIn(500)
    })
})

//Movie
var slidesMo = $('.PosterMo') 
slidesMo.hide()

var minMo = 0
var maxMo = slidesMo.length - 1

var indexMo = 0
slidesMo.eq(indexMo).show()

$('#gorightMo').click(()=> {
    if(indexMo == maxMo){
        return
    }

    slidesMo.eq(indexMo).fadeOut(500, ()=> {
        indexMo++
        slidesMo.eq(indexMo).fadeIn(500)
    })
})

$('#goleftMo').click(()=> {
    if(indexMo == minMo){
        return
    }

    slidesMo.eq(indexMo).fadeOut(500, ()=> {
        indexMo--
        slidesMo.eq(indexMo).fadeIn(500)
    })
})

//music
var slidesMu = $('.PosterMu') 
slidesMu.hide()

var minMu = 0
var maxMu = slidesMu.length - 1

var indexMu = 0
slidesMu.eq(indexMu).show()

$('#gorightMu').click(()=> {
    if(indexMu == maxMu){
        return
    }

    slidesMu.eq(indexMu).fadeOut(500, ()=> {
        indexMu++
        slidesMu.eq(indexMu).fadeIn(500)
    })
})

$('#goleftMu').click(()=> {
    if(indexMu == minMu){
        return
    }

    slidesMu.eq(indexMu).fadeOut(500, ()=> {
        indexMu--
        slidesMu.eq(indexMu).fadeIn(500)
    })
})