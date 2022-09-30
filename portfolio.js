let pic = document.getElementById("picture");
let picClose = document.getElementById('close');

let newPic = function() {
    pic.style.width = "200%";
    picClose.style.display = "block";
}

let oldPic = function() {
    pic.style.width = '';
    picClose.style.display = '';
}

pic.onclick = newPic;
    
picClose.onclick = oldPic;
