// HEADER

window.onscroll = function() {scrollFunction()};

window.addEventListener('scroll', function() {
    document.getElementById("header").style.height = "6vh";
    document.getElementById("header").style.paddingTop = "0px";
    document.getElementById("header").style.background = "#1d1d1d";
    document.getElementById("logotext").style.paddingLeft = "100px";
    document.getElementById("logotext").style.fontSize = "30px";
    document.getElementById("logotext").style.color = "#bd5fff";

  /*
    document.getElementById("header").style.height = "100px";
    document.getElementById("header").style.paddingTop = "20px";
    document.getElementById("header").style.background = "none";
    document.getElementById("logotext").style.paddingLeft = "100px";
    document.getElementById("logotext").style.fontSize = "40px";
    document.getElementById("logotext").style.color = "#ffffff"

  }*/
});


//ABOUT-GALLERY

function aboutFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("aboutExpandedImg");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
}


function toggleFunction(id) {
  var element = document.getElementById(id);
  element.style.display = 'none;';
}

// WORK-GALLERY
//1
function workFunctionDesign(place, num, imgelem) {

  if (place == "design") {
    var workcontainer = document.getElementById("workcontainerDesign");
    // Get the expanded image
    var expandImg = document.getElementById("workExpandedImgDesign");
    // Get the image text
    var imgText = document.getElementById("imgtextDesign");
    // Use the same src in the expanded image as the image being clicked on from the grid
    if (num == 1) {expandImg.src = "img/forecast.jpg";}
    else if (num == 2) {expandImg.src = "img/copy.jpg";}

} else if (place == "ux") {
    var workcontainer = document.getElementById("workcontainerUx");
    // Get the expanded image
    var expandImg = document.getElementById("workExpandedImgUx");
    // Get the image text
    var imgText = document.getElementById("imgtextUx");
    // Use the same src in the expanded image as the image being clicked on from the grid
    if (num == 1) {expandImg.src = "img/webpage.jpg";}

} else if (place == "research") {
  var workcontainer = document.getElementById("workcontainerResearch");
  // Get the expanded image
  var expandImg = document.getElementById("workExpandedImgResearch");
  // Get the image text
  var imgText = document.getElementById("imgtextResearch");
  // Use the same src in the expanded image as the image being clicked on from the grid
  if (num == 1) {expandImg.src = "img/reportthumb.jpg";}
}


  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgelem.alt;
  imgText.style.display = "block";
  // Show the container element (hidden with CSS)
  workcontainer.style.display = "inline-block";
}
