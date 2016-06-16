 var myIndex= 0;
automatic();
function automatic(){
    var i;
    var x = document.getElementsByClassName("mySlides");
    for(i=0;i < x.length;i++){
        x[i].style.display="none";
    }
    myIndex++;
    if(myIndex > x.length){myIndex=1}
    x[myIndex-1].style.display="block";
    console.log(myIndex);
    setTimeout(function() {automatic()},2000);
    
}

