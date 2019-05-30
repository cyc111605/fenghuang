function go(obj) {
    if(!document.getElementById("rut_img")) return false;
    var source=obj.getAttribute("href");
    var target=document.getElementById("rut_img");
    target.setAttribute("src",source);
    return true;
}

function tpqh() {
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("right_up_top")) return false;
    var all=document.getElementById("right_up_top");
    var links=all.getElementsByTagName("a");
    for(var i=0;i<links.length-1;i++){
        links[i].onmousemove=function () {
            for(var j=0;j<links.length-1;j++){
                links[j].style.color="black";
                links[j].style.backgroundColor="white";
            }
            this.style.backgroundColor="#ff4742";
            this.style.color="white";
            go(this);
            return !go(this);
        }
    }
}
addLoadEvent(tpqh);