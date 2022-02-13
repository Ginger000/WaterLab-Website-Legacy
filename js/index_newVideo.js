var vidElement = document.getElementById('myvideo');
var vidSources = [
  "images/landingPage/pexelsVideo/1.mp4", 
  "images/landingPage/pexelsVideo/2.mp4", 
  "images/landingPage/pexelsVideo/3.mp4", 
  "images/landingPage/pexelsVideo/4.mp4", 
  "images/landingPage/pexelsVideo/5.mp4", 
  "images/landingPage/pexelsVideo/6.mp4", 
  "images/landingPage/pexelsVideo/7.mp4",  
  "images/landingPage/pexelsVideo/8.mp4",
  "images/landingPage/pexelsVideo/10.mp4", 
  "images/landingPage/pexelsVideo/11.mp4",
  "images/landingPage/pexelsVideo/12.mp4",
  "images/landingPage/pexelsVideo/13.mp4",
  
  ];
var activeVideo = Math.floor((Math.random() * vidSources.length));
var g1, g2, g3, g4;
var $brightness_string = "brightness("+g2+")";
// var $contrast_string = "contrast("+g3+")";
// var $saturate_string = "saturate("+g4+")";

// if(activeVideo == 6 || activeVideo == 8 || activeVideo == 9 || activeVideo == 11 || activeVideo == 12) {
//   g1 = 0.5; g2 = 0.7; g3 = 1; g4 = 1;
//   $('video').css("filter",$brightness_string+$saturate_string+$contrast_string);
//   document.querySelector('video').playbackRate = g1;
// }
// if(activeVideo == 7) {
//   g1 = 0.5; g2 = 0.7; g3 = 1; g4 = 1;
//   $('video').css("filter",$brightness_string+$saturate_string+$contrast_string);
//   document.querySelector('video').playbackRate = g1;
// }


// if(activeVideo == 6) {
//   $('video').css("filter","brightness(0.75)");
// }

if(activeVideo == 7) {
  $('video').css("filter","brightness(0.85)");
}

if(activeVideo == 8) {
  $('video').css("filter","brightness(0.8)");
}

if(activeVideo == 10) {
  $('video').css("filter","brightness(0.8)");
}

if(activeVideo == 11) {
  $('video').css("filter","brightness(0.8)");
}

if(activeVideo == 12) {
  $('video').css("filter","brightness(0.8)");
}
  

vidElement.src = vidSources[activeVideo];
vidElement.addEventListener('ended', function(e) {
  // update the active video index
  activeVideo = (++activeVideo) % vidSources.length;
  if(activeVideo === vidSources.length){
    activeVideo = 0;
  }

  // update the video source and play
  
  vidElement.src = vidSources[activeVideo];
  
  vidElement.play();
  
  
});

//playbackRate must be put at the end
if(activeVideo == 6) {
  $('video').css("filter","brightness(0.7)");
  document.querySelector('video').playbackRate = 0.6
}

// document.querySelector('video').playbackRate = 0.5;