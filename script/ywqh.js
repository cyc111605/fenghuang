function ywqh() {
    if(!document.getElementById) return false;
    if(!document.getElementById("yw")) return false;
    if(!document.getElementById("zjyw")) return false;
    if(!document.getElementById("middle_one")) return false;
    if(!document.getElementById("middle_two")) return false;
    var yw=document.getElementById("yw");
    var zjyw=document.getElementById("zjyw");
    var one=document.getElementById("middle_one");
    var two=document.getElementById("middle_two");
    yw.onmouseover=function(){
        one.style.display="block";
        two.style.display="none";
    }
    zjyw.onmouseover=function(){
        one.style.display="none";
        two.style.display="block";
    }
}
addLoadEvent(ywqh);