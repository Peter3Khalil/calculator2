function show(c){
    var z=document.getElementById("display").value+=c;
}
function sol(){
    let x = document.getElementById("display").value;
    let y = eval(x);
    document.getElementById("display").value = y;
}
function clr(){
    document.getElementById("display").value="";
}
function back(){
    let x = document.getElementById("display").value;
    x = x.slice(0,--x.length);
    document.getElementById("display").value = x;
}
