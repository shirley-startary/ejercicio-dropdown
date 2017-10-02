var submenu = document.getElementsByClassName('submenu')
console.log(submenu);
for (var i=0;i<submenu.length;i++) {
  submenu[i].addEventListener("click",showMenu);
}
function showMenu() {
  console.log(this);
  var listMenu = this.children[1]

  if (listMenu.className == "hide"){
    listMenu.classList.remove("hide");
    listMenu.classList.add("show");
  } else {
    listMenu.classList.remove("show");
    listMenu.classList.add("hide");
  }
}
