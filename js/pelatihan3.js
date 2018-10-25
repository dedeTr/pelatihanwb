function on(){
    document.getElementById('lampu').src="pic_bulbon.gif";
}
function off(){
    document.getElementById('lampu').src="pic_bulboff.gif";
}
function destroy(){
    document.getElementById('tulisan').style.display="none";
}
function show(){
    document.getElementById('tulisan').style.display="block";
}
var x=10;
var y="text";
var z;
var teks;
z=x+y;
function hitung(){
    window.alert(z);
}
var x = new Date(2018,12,21,00,00,00);
function show_tanggal(){
    window.alert(x)
}
function input_show(){
    var teks=getElementById("mytext").value;
    document.getElementById('tampilkan').innerHTML="teks";
}