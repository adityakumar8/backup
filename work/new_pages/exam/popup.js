function myClickBtn() {
  var CloseBtn = document.getElementById("close");

  if (CloseBtn.style.display != "none") {
    CloseBtn.style.display = "none";
  } else {
    CloseBtn.style.display = "block";
  }
}

var header = document.getElementById("exambuttonscontainer");
var btns = header.getElementsByClassName("ie-exam-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("exam-active");
    if (current.length) {
      current[0].className = current[0].className.replace(" exam-active", "");
      this.className += " exam-active";
    }
  });
}
