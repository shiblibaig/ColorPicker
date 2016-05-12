$(document).ready(function(){

	$(".findCol").on('click', function(){
			i = $(this).attr('fill');
			obj = $(i).remove();	
			changeCol2(obj.selector);
			
	});

});

var colorGlobal;

function changeCol2(color){

	colorGlobal=color;
	count++;
	var n = startTime();
	document.getElementById('resultDisp').innerHTML+='<p id="resultText">'+count+' You chose <b>'+color+'</b> at '+ n + ' with Alpha as 1.</p>';
	document.getElementById('showBox').style.backgroundColor=color;

}

function allowDrop(ev){

	ev.preventDefault();
}

function drop(ev){

	document.getElementById('likeColor').innerHTML+= colorGlobal+'<div style=" width: 30px; height: 30px;background-color:'+colorGlobal+ ' "></div><br>';
	document.getElementById('showBox').style.backgroundColor= '#ffffff';
}

var count= 0;

function changeCol(){
	var a = document.getElementById('colInput').value;

	var c = '#'+a;
	document.getElementById('showBox').style.backgroundColor=c;

	var re = /[0-9A-Fa-f]{6}/g;
	var check = false;

	if(!re.test(a)){
		alert('Enter hexadecimal numbers and only 6 characters!');
		check = true;
	}

	if(!check){
		colorGlobal = c;
		count++;
		var n = startTime();
		document.getElementById('hexShow').textContent='Color: #'+ a;
		document.getElementById('resultDisp').innerHTML+='<p id="resultText">'+count+' You chose <b>'+c+'</b> at '+ n + ' with Alpha as 1.</p>';
	}

	var a = document.getElementById('colInput').value='';
}

var r, g, b, h, a;

function getValue(){
	var r = document.getElementById('red').value;
	document.getElementById('red-value').textContent = r+'';
	r=r*1.0;

	var g = document.getElementById('green').value;
	document.getElementById('green-value').textContent = g + ' ';
	g=g*1.0;

	var b = document.getElementById('blue').value;
	document.getElementById('blue-value').textContent = b + ' ';
	b=b*1.0;

	var h = document.getElementById('hue').value;
	document.getElementById('hue-value').textContent = h + '';
	h=h*1.0;

	var a = document.getElementById('alpha').value;
	a=a*0.01;
	a = Math.floor(a*100)/100;
	document.getElementById('alpha-value').textContent = a + '';

	var rgb = 'rgba('+r+','+g+','+b+','+ a +')';
	var hue = 'hue-rotate('+h+'deg)';
	var div = document.getElementById('showBox').style.backgroundColor = rgb;
	var div = document.getElementById('showBox').style.opacity = a;
	var div = document.getElementById('showBox').style.webkitFilter = hue;

	colorGlobal = rgb;

	var n = startTime(); count++;
	document.getElementById('resultDisp').innerHTML+='<p id="resultText">'+count+' You chose <b>'+rgb+'</b> at '+ n + ' with Alpha '+ a +' and Hue '+h+'</p>';

}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    return h+':'+m+':'+s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}