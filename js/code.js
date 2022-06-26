// function addOpenClass(elementId){
//   var element=document.getElementById(elementId);
//   element.style= "display: block";
// }
// function AddOpenClassToAllIcons(){
//   addOpenClass('navigation');
// }

// var sentBtn = document.getElementById('navbar-toggler');

// sentBtn.addEventListener('click', AddOpenClassToAllIcons);
$(".navbar-toggler").on("click", function() {
 
  $(".navigation").toggle();

 // $(".navbar-toggler").css('backgroundImage', 'url("../img/btn_close.png")');
 // $(".navbar-toggler").css('backgroundImage', 'url("../img/btn.png")');
});