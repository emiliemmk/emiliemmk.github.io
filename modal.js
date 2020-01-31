function workFunc(num) {
  // Get the button that opens the modal (same for all img)
  var btn = document.getElementById("btn");

  // Get the modal
  if (num == 0) {
    var modal = document.getElementById("myModal1");
  } else if (num == 1){
    var modal = document.getElementById("myModal2");
  } else if (num == 2){
    var modal = document.getElementById("myModal3");
  } else if (num == 3){
    var modal = document.getElementById("myModal4");
  }


  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[num];


  document.body.style.overflow = "hidden";

  // When the user clicks on the button, open the modal
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "initial";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "initial";
    }
  }
}
