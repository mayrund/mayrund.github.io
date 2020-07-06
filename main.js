$(document).ready(function(){

// find elements
var banner = $("#banner-message")
var button = $("button")

// handle click and add class
button.on("click", () => {
  banner.toggleClass("alt")
})
});

$('#one').click(function() {
  console.log('hello');
  const audio = new Audio("one.mp4");
  audio.play();
});
