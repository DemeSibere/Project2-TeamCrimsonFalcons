
var addToCartBtn = document.querySelector(".add-to-cartBtn");

function addToCartHandler(event){

    console.log(event);

}




addToCartBtn.addEventListener("click", function(event){
    event.preventDefault();
    addToCartHandler(event)
});