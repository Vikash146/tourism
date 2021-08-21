var y=document.getElementById('id01');
var x=document.getElementById('id02');
var a=document.getElementById('id03');
var b=document.getElementById('id04');
var c=document.getElementById('id05');

//alert(sele);
function loginHandler(){

    y.style.display='block';
    x.style.display='none';
    a.style.display='none';
    b.style.display='none';
    c.style.display='none';
}
function selectHndlr(){
    var sele=document.getElementById("destination1").value;
if(sele=='delhi'){
    y.style.display='none';
    x.style.display='block';
    a.style.display='none';
    b.style.display='none';
    c.style.display='none';
}
}
function galarychng(){
    a.style.display='block';
    b.style.display='none';
    c.style.display='none';
    y.style.display='none';
    x.style.display='none';
}
function aboutHandler(){
    a.style.display='none';
    b.style.display='block';
    c.style.display='none';
    y.style.display='none';
    x.style.display='none';
    
}
function homeHandler(){
    a.style.display='none';
    b.style.display='none';
    c.style.display='block';
    y.style.display='none';
    x.style.display='none';
}
