// find elements
var banner = $("#banner-message")
var button = $("button")

// handle click and add class
button.on("click", () => {
  banner.toggleClass("alt")
})
