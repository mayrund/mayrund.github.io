$(document).ready(function(){

// find elements
var banner = $("#banner-message")
var button = $("button")

// handle click and add class
button.on("click", function(e) {
  banner.toggleClass("alt")
  var e = (e.currentTarget.id);
  const audio = new Audio(e + ".mp4");
  audio.play();
})
});
