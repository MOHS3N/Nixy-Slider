// JavaScript Document
window.onload=function(){
	
var alb = document.getElementById('bord');
var box = document.getElementById('box');
alb.onmousemove=function(evt){
	
	
	var x = evt.offsetX;
	var y = evt.offsetY;
	
	box.style.webkitTransform ="rotateX("+x+"deg) rotateY("+y+"deg)";
	
	document.getElementById('pos').innerHTML="X: "+x+" Y: "+y;
};
	
	
};