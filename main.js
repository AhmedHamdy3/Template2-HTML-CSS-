var header=document.getElementById("header");
var ul =document.getElementById("ul");
window.onscroll=function(){
    if(window.pageYOffset>=500){
        header.style.backgroundColor="whire";
        ul.style.backgroundColor="white"
    }
    else{
        header.style.backgroundColor="transparent";
        ul.style.backgroundColor="transparent"
    }
}
