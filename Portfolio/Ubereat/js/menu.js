function openCity(evt, dishname) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("dishes_card");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(dishes).style.display = "block";
  evt.currentTarget.className += " active";
}