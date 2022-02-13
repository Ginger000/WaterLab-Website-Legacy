



var interval = 0;
$(".element").not(".about, .contact, .team, .centerNav").fadeOut(interval);
$(".aboutBtn").css('color', 'rgb(33, 196, 236)');

$( ".aboutBtn" ).hover(
    function() {
        $(".about , .contact, .team, .centerNav").fadeIn(interval);
        $(".aboutBtn").css('color', 'rgb(33, 196, 236)');
        $(".flex-container a").not(".aboutBtn").css('color', 'grey');
        $(".element").not(".about, .contact, .team, .centerNav").fadeOut(interval);
        // $(".about").fadeOut(interval);
    });

$( ".eventBtn" ).hover(
    function() {
        $(".eventImage, .eventText").fadeIn(interval);
        $(".element").not(".eventImage, .eventText, .centerNav").fadeOut(interval);
        $(".eventBtn").css('color', 'rgb(33, 196, 236)');
        $(".flex-container a").not(".eventBtn").css('color', 'grey');
});

$( ".educationBtn" ).hover(
    function() {
        $(".educationImage1 , .educationImage2,.educationText").fadeIn(interval);
        $(".element").not(".centerNav, .educationImage1, .educationImage2, .educationText").fadeOut(interval);
        $(".educationBtn").css('color', 'rgb(33, 196, 236)');
        $(".flex-container a").not(".educationBtn").css('color', 'grey');
});

$( ".researchBtn" ).hover(
    function() {
        $(".researchImage, .researchText").fadeIn(interval);
        $(".element").not(".centerNav, .researchImage, .researchText").fadeOut(interval);
        $(".researchBtn").css('color', 'rgb(33, 196, 236)');
        $(".flex-container a").not(".researchBtn").css('color', 'grey');
});

$( ".designBtn" ).hover(
    function() {
        $(".designImage, .designText").fadeIn(interval);
        $(".element").not(".centerNav, .designImage, .designText").fadeOut(interval);
        $(".designBtn").css('color', 'rgb(33, 196, 236)');
        $(".flex-container a").not(".designBtn").css('color', 'grey');
});

$( ".collaborativeBtn" ).hover(
    function() {
        $(".collaborativeImage, .collaborativeText").fadeIn(interval);
        $(".element").not(".centerNav, .collaborativeImage, .collaborativeText").fadeOut(interval);
        $(".collaborativeBtn").css('color', 'rgb(33, 196, 236)');
        $(".flex-container a").not(".collaborativeBtn").css('color', 'grey');
});