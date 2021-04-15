console.log("👋 This message is being logged by 'hamburger.js', included via webpack"); // Just to make sure when I start the app that the file has been correctly handled by Webpack;
$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });