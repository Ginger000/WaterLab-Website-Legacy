
var cardContainer = 0;
var cardsArr = 0;
var keyword = 0;
cardContainer = document.getElementById("myItems");
cardsArr = cardContainer.getElementsByClassName("card");


var interval = 0;
$(".button-all").on("click", function(){
    $(".card-div").fadeIn(interval);
})

$(".button-mapping").on("click", function(){
    $(".mapping").fadeIn(interval);
    $(".card-div").not(".mapping").fadeOut(interval);
})

$(".button-g-b").on("click", function(){
    $(".green-blue-infra").fadeIn(interval);
    $(".card-div").not(".green-blue-infra").fadeOut(interval);
})

$(".button-soil").on("click", function(){
    $(".soil").fadeIn(interval);
    $(".card-div").not(".soil").fadeOut(interval);
})

$(".button-surface").on("click", function(){
    $(".surface").fadeIn(interval);
    $(".card-div").not(".surface").fadeOut(interval);
})

$(".button-publication").on("click", function(){
    $(".publication").fadeIn(interval);
    $(".card-div").not(".publication").fadeOut(interval);
})