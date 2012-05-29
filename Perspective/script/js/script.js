// JavaScript Document
window.onload=function(){
	
var alb = document.getElementById('bord');
var box = document.getElementById('box');

alb.onmousemove=function(evt){
	
	
	var x = evt.offsetX;
	var y = evt.offsetY;
	if(x<=400 && y<=400){ var xum =15; var yum =-15;}
	if(x>=400 && y>=0){ var xum =15; var yum = 15;}
	/*if(x>=400 && y<=400){ var xum = -20; var yum =-20;}*/
	if(x>=400 && y>=400){ var xum = -25; var yum =25;}
	
	box.style.webkitTransform ="rotateX("+xum+"deg) rotateY("+yum+"deg)";
	
	document.getElementById('pos').innerHTML="X: "+x+" Y: "+x;
};
	
	
};