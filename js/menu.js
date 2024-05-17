window.onscroll = function() {transMenu()};

function transMenu(){
    var menu = document.getElementById("navbar");
    var pos = document.documentElement.scrollTop;
    if (pos > 50){
        menu.style.height = "40px";
        menu.style.fontSize = "1em";
    } else{
        menu.style.height = "60px";
        menu.style.fontSize = "1.2em";
    }
}