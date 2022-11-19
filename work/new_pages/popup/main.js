function myClickBtn() {
    var CloseBtn = document.getElementById("close");
    
    if(CloseBtn.style.display != 'none') {
        CloseBtn.style.display = 'none';
    }
    else {
        CloseBtn.style.display = 'block';
    }
}
