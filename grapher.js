/*!
  * grapher.js (c) Derek Anderson
  * https://github.com/toxigenicpoem/grapher
  * MIT License
*/

if (typeof Object.create != 'function'){
  Object.create = function (o){
    function F() {}
    F.prototype = o
    return new F
  }
}
!function(window){
  var grapher = window.grapher = {}
}(window);
var hz = "h";
!function(grapher, document){
  grapher.bar = function (g,d,o){
		var mp = "missing param",c
		var G = document.getElementById(g);
		//axis lines
		mkLin(25,351,400,351,G);
		mkLin(25,1,25,351,G);
		if (G) {
			if(!o||!d)	{m(mp,G);return false;}
			//yaxis
			m(axis('y',o),G); 
			//plot the data
			var ddW = 33,ddH = 330,	sH = '50%',	sW = '33px',om = 'left',lm1 = 'top',lm2 = 'left',mt = '22px',gh = 'height'
			if (o.style == hz){var ddW = 330,ddH = 33,sH = '33px',sW = '50%',om = 'top',lm1 = 'right',lm2 = 'top',mt = '0px',gh = 'width'}
			guid = 'd'+gid();
			h = '<dl id="'+ guid +'">';			
				for (var i in d) {
					   if (d.hasOwnProperty(i)){							
									s=d[i]
									if (s.length>1){
									s=s[0]						
									}
									h += '<dd><span style="' + gh + ':'+  s +'%;"><b>'+ s +'</b></span></dd>'
									if (d[i].length>1){
										for (b=1;b<d[i].length;b++) {h+='<dd class="sub" ><span style="' + gh + ':' + d[i][b] + '%;"><b>'+ d[i][b] +'</b></span></dd> '}
										}
			   };
			}
			m(h + '</dl>' + axis('x',o) + '<style>ul.xAxis{float:left;clear:left;display:inline;width:454px;margin:0 0 0 27px;padding:0} ul.yAxis{display:inline;float:left;margin:14px 0 0;padding:0;height:370px;} ul.xAxis li{float:left;list-style:none;width:33px;text-align:center} ul.yAxis li{list-style:none;height:33px;text-align:right;float:left;clear:left} dl#'+guid+',dl#'+guid+' dt,dl#'+guid+' dd{margin:0;padding:0} dl#'+guid+'{width:454px;height:360px;padding-left:11px;float:left} dl#'+guid+' dd{position:relative;display:block;float:left;width:' + ddW + 'px;height:' + ddH + 'px;margin-top:' + mt + ';} dl#'+guid+' span{position:absolute;display:block;width:' + sW + ';bottom:0;left:0;z-index:1;color:#555;text-decoration:none;height:' + sH + ';background:#456} dl#'+guid+' span b{display:block;font-weight:700;font-style:normal;float:left;line-height:200%;color:#fff;position:absolute;' + lm1 + ':5px;' + lm2 + ':3px;text-align:right;width:23px} dl#'+guid+' .sub{margin-' + om + ':-33px} dl#'+guid+' .sub span{background:#978}</style>',G);
		}
  }
 grapher.line = function (g,d,o){
		var mp = "missing param",c
		var G = document.getElementById(g);
		//axis lines
		mkLin(25,351,400,351,G);
		mkLin(25,1,25,351,G);
		xoffset = 25
		if (G) {
			if(!o||!d)	{m(mp,G);return false;}
			//yaxis
			m(axis('y',o),G);
			var plotPoints = new Array()
			//plot the data
			counter = 0
			for (var i in d) {
					   if (d.hasOwnProperty(i)){	
					    plotPoints[counter] = new Array();
						plotPoints[counter][0] = d[i][0] + xoffset;
						plotPoints[counter][1] = d[i][1];
					    counter += 1
					   
					   }}
			for (i=0;i<=plotPoints.length-1;i++){
			if(plotPoints[i+1]){
					mkLin(plotPoints[i][0],plotPoints[i][1],plotPoints[i+1][0],plotPoints[i+1][1],G);
				}
			}
			
			m(axis('x',o),G);
		}
  }
  
 grapher.plot = function (g,d,o){
		var mp = "missing param",c
		var G = document.getElementById(g);
		//axis lines
		mkLin(25,351,400,351,G);
		mkLin(25,1,25,351,G);
		xoffset = 25
		if (G) {
			if(!o||!d)	{m(mp,G);return false;}
			//yaxis
			m(axis('y',o),G);
			var plotPoints = new Array()
			//plot the data
			counter = 0
			for (var i in d) {
					   if (d.hasOwnProperty(i)){	
					    plotPoints[counter] = new Array();
						plotPoints[counter][0] = d[i][0] + xoffset;
						plotPoints[counter][1] = d[i][1];
					    counter += 1
					   
					   }}
			for (i=0;i<=plotPoints.length-1;i++){
			if(plotPoints[i]){
					mD(plotPoints[i][0], plotPoints[i][1], 4, 4, G);
				}
			}
			
			m(axis('x',o),G);
		}
  }
  
  
  //often used calls, made smaller
  function axis(a,o){
  				h = "",	b = a
				if(o.style == hz){if(a=="y"){a="x"}else{a="y"}}
				for (x=0;x<=o[ a + "units"].length-1;x++){
				if(o.style == hz){h = '<li>' + o[ a + "units"][x] + '</li>' + h;}
				else{h += '<li>' + o[ a + "units"][x] + '</li>';}
				}
				return '<ul class="' + b + 'Axis">' + h + '</ul>';
  }
  
//drawing library
//some of this code borrowed from: CITE SOURCE
function m(t,g){g.innerHTML += t;}
function rI(i){return parseInt(i);}
function gid() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
function mD(x, y, w, h, g){g.innerHTML  += '<div style="position:absolute;'+'margin-left:' + x + 'px;'+'margin-top:' + y + 'px;'+'width:' + w + 'px;'+'height:' + h + 'px;'+'clip:rect(0,'+w+'px,'+h+'px,0);'+'background-color:#000;"><\/div>';}
function mkLin(x1, y1, x2, y2,g)
{

	if (x1 > x2)
	{
		var _x2 = x2;var _y2 = y2;x2 = x1;y2 = y1;x1 = _x2;y1 = _y2;
	}
	var dx = x2-x1, dy = Math.abs(y2-y1),
	x = x1, y = y1,
	yIncr = (y1 > y2)? -1 : 1;

	if (dx >= dy)
	{
		var pr = dy<<1,	pru = pr - (dx<<1),	p = pr-dx, ox = x;
		while ((dx--) > 0)
		{
			++x;
			if (p > 0){mD(ox, y, x-ox, 1,g);y += yIncr;p += pru;ox = x;}
			else p += pr;
		}
		mD(ox, y, x2-ox+1, 1,g);
	}
	else
	{
		var pr = dx<<1,	pru = pr - (dy<<1),	p = pr-dy, oy = y;
		if (y2 <= y1)
		{
			while ((dy--) > 0)
			{
				if (p > 0){mD(x++, y, 1, oy-y+1,g);y += yIncr;p += pru;oy = y;}
				else{y += yIncr;p += pr;}
			}
			mD(x2, y2, 1, oy-y2+1,g);
		}
		else
		{
			while ((dy--) > 0)
			{
				y += yIncr;
				if (p > 0){mD(x++, oy, 1, y-oy,g);	p += pru; oy = y;}
				else p += pr;
			}
			mD(x2, oy, 1, y2-oy+1,g);
		}
	}
}  
}(grapher,document);
