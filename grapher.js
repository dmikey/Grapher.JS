/*!
  * grapher.js (c) Derek Anderson
  * https://github.com/toxigenicpoem/grapher
  * LGPL 2.1 License
  * Code inspired or borrowed from Thomas Fuchs, Walter Zorn
	Performance optimizations for Internet Explorer
	by Thomas Frank and John Holdsworth.
	fillPolygon method implemented by Matthieu Haller.
	fillArc method implimented by Balamurugan S
	
	
	LICENSE: LGPL

	This library is free software; you can redistribute it and/or
	modify it under the terms of the GNU Lesser General Public
	License (LGPL) as published by the Free Software Foundation; either
	version 2.1 of the License, or (at your option) any later version.

	This library is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
	Lesser General Public License for more details.

	You should have received a copy of the GNU Lesser General Public
	License along with this library; if not, write to the Free Software
	Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA,
	or see http://www.gnu.org/copyleft/lesser.html

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
hz="h"
!function(grapher, document){

  grapher.initialize = function(g,o){
  var G = document.getElementById(g);
   var htmlstring = "";
	htmlstring +=axis('y',o);
	htmlstring +=axis('x',o);
	htmlstring += mkLin(25,351,400,351,G);
	htmlstring += mkLin(25,1,25,351,G);
	htmlstring += '<style>ul.xAxis{float:left;clear:left;display:inline;width:454px;margin:0 0 0 27px;padding:0} ul.yAxis{display:inline;float:left;margin:14px 0 0;padding:0;height:370px;} ul.xAxis li{float:left;list-style:none;width:33px;text-align:center} ul.yAxis li{list-style:none;height:33px;text-align:right;float:left;clear:left}</style>'
	m(htmlstring,G);
  }
  
  grapher.bar = function (g,d,o){
		var mp = "missing param",c
		var G = document.getElementById(g);
	    var htmlstring = "";
		if (G) {
			if(!o||!d)	{m(mp,G);return false;}
			guid = 'd'+gid();
			h = '';			
			var leftcount=0
				for (var i in d) {
					   if (d.hasOwnProperty(i)){							
									s=d[i]
									if (s.length>1){
									s=s[0]						
									}
									x = 33*leftcount+28
									y = 351-d[i][0]*3
									v = d[i][0]*3
									th = 33
									
									if (o.style=='h'){
									x = 25
									y = 33*leftcount+5
									v = 33
									th = d[i][0]*3
									}
									htmlstring += mD(x, y, th, v, G,getColor());
									if (d[i].length>1){
									
							
										for (b=1;b<d[i].length;b++) {
										x = 33*leftcount+28
									y = 351-d[i][b]*3
									v = d[i][b]*3
									th = 33
									
									if (o.style=='h'){
									x = 25
									y = 33*leftcount+5
									v = 33
									th = d[i][b]*3
									}
									
										htmlstring += mD(x, y, th, v, G,getColor());}
										}
										leftcount += 1;
			   };
			}
			m(htmlstring,G);
		}
		
  }
 grapher.line = function (g,d,o){
		
		var mp = "missing param",c
		var G = document.getElementById(g);
		xoffset = 25
		var htmlstring = "";
		
		
		
		if (G) {
			if(!o||!d)	{m(mp,G);return false;}

			var plotPoints = new Array()

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
					htmlstring += mkLin(plotPoints[i][0],plotPoints[i][1],plotPoints[i+1][0],plotPoints[i+1][1],G);
				}
			}
			

			G.innerHTML += htmlstring;
		}
  }
  
 grapher.area = function (g,d,o){
		var mp = "missing param",c
		var G = document.getElementById(g);
		xoffset = 25
		var htmlstring = "";
		if (G) {
			if(!o||!d)	{m(mp,G);return false;}
			var plotPoints = new Array()
			var xarray = new Array()
			var yarray = new Array()
			//plot the data
			counter = 0
			//poly fill start
			xarray[0]= 1 + xoffset;
			yarray[0]= 350; //this is the height needs to be dynamic yet
			
			for (var i in d) {
					   if (d.hasOwnProperty(i)){	

						yarray[counter+1] = d[i][1] +1;
						xarray[counter+1] = d[i][0] + xoffset;
					    counter += 1
					   
					   }}
					   
			yarray[counter+1] = 350;
			xarray[counter+1] = 325;
			htmlstring += fillPolygon(xarray, yarray,G,getColor());

			G.innerHTML += htmlstring;
		}
		
		
  }
  
 grapher.plot = function (g,d,o){
		var mp = "missing param",c
		var G = document.getElementById(g);
		var htmlstring = "";		
		xoffset = 25
		if (G) {
			if(!o||!d)	{m(mp,G);return false;}
			var plotPoints = new Array()
			//plot the data
			counter = 0
			for (var i in d) {
					   if (d.hasOwnProperty(i)){	
					    plotPoints[counter] = new Array();
						plotPoints[counter][0] = d[i][0] + xoffset;
						plotPoints[counter][1] = d[i][1];
					    counter += 1;
					   }}
			for (i=0;i<=plotPoints.length-1;i++){
			if(plotPoints[i]){
					htmlstring += mD(plotPoints[i][0], plotPoints[i][1], 4, 4, G,'#000');
				}
			}
			G.innerHTML += htmlstring;
		}
  }
  
grapher.pie = function (g,d,o){


	var mp = "missing param",c
	var G = document.getElementById(g);

	xoffset = 25
	if (G) {if(!o||!d)	{m(mp,G);return false;}


	//plot the data
			
   var r  = 75;
   var sx = 250;
   var sy = 100;
   var hyp = 100;
   var fnt  = 12;
   var total = 0;
   for (var i in d) {
   if (d.hasOwnProperty(i)){ total += d[i];	}}
   var htmlstring = ""
   // shadow
   htmlstring += fillEllipse(sx+5-r, sy+5-r, 2*r, 2*r,G,'#ccc');
   
   var st_angle = 0;
   	for (var i in d) {
				   if (d.hasOwnProperty(i)){	
				   var angle = Math.round(d[i]/total*360);
				   var pc    = Math.round(d[i]/total*100);
				   htmlstring += fillArc(sx, sy, r, st_angle, st_angle+angle, G);
				   var ang_rads = (st_angle+(angle/2))*2*Math.PI/360;
				   var my  = Math.sin(ang_rads) * hyp;
				   var mx  = Math.cos(ang_rads) * hyp;
				   st_angle += angle;
				   mxa = (mx < 0 ? 50 : 0);
					   
				}}
			
		//border
		 htmlstring +=  drawEllipse(sx-r, sy-r, 2*r, 2*r,c);
		
		G.innerHTML += htmlstring;
	 }
  }
  
  

 function axis(a,o){
  				h = "",	b = a
				if(o.style == hz){if(a=="y"){a="x"}else{a="y"}}
				for (x=0;x<=o[ a + "units"].length-1;x++){
				if(o.style == hz){h = '<li>' + o[ a + "units"][x] + '</li>' + h;}
				else{h += '<li>' + o[ a + "units"][x] + '</li>';}
				}
				return '<ul class="' + b + 'Axis">' + h + '</ul>';
  }
  

function m(t,g){g.innerHTML += t;}
function rI(i){return parseInt(i);}
function gid() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}


function mD(x, y, w, h, g, c){return '<div style="position:absolute;'+'margin-left:' + x + 'px;'+'margin-top:' + y + 'px;'+'width:' + w + 'px;'+'height:' + h + 'px;'+'clip:rect(0,'+w+'px,'+h+'px,0);'+'background-color:' + c + ';"><\/div>';}
function mkLin(x1, y1, x2, y2,g,c)
{
	var htmlstring = ""
	if(!c){c='#000'}

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
			if (p > 0){ htmlstring +=  mD(ox, y, x-ox, 1,g,c);y += yIncr;p += pru;ox = x;}
			else p += pr;
		}
		 htmlstring +=  mD(ox, y, x2-ox+1, 1,g,c);
	}
	else
	{
		var pr = dx<<1,	pru = pr - (dy<<1),	p = pr-dy, oy = y;
		if (y2 <= y1)
		{
			while ((dy--) > 0)
			{
				if (p > 0){ htmlstring +=  mD(x++, y, 1, oy-y+1,g,c);y += yIncr;p += pru;oy = y;}
				else{y += yIncr;p += pr;}
			}
			 htmlstring +=  mD(x2, y2, 1, oy-y2+1,g,c);
		}
		else
		{
			while ((dy--) > 0)
			{
				y += yIncr;
				if (p > 0){ htmlstring +=  mD(x++, oy, 1, y-oy,g,c);	p += pru; oy = y;}
				else p += pr;
			}
			 htmlstring +=  mD(x2, oy, 1, y2-oy+1,g,c);
		}
	}
	return  htmlstring;
}
function integer_compare(x,y)
{
	return (x < y) ? -1 : ((x > y)*1);
}

this.fillPolygon = function(array_x, array_y,g,c)
	{
		if(!c){c='#000'}
		var i;
		var y;
		var miny, maxy;
		var x1, y1;
		var x2, y2;
		var ind1, ind2;
		var ints;
		var htmlstring = "";
		var n = array_x.length;
		if (!n) return;
		miny = array_y[0];
		maxy = array_y[0];
		for (i = 1; i < n; i++)
		{
			if (array_y[i] < miny)
				miny = array_y[i];

			if (array_y[i] > maxy)
				maxy = array_y[i];
		}
		for (y = miny; y <= maxy; y++)
		{
			var polyInts = new Array();
			ints = 0;
			for (i = 0; i < n; i++)
			{
				if (!i)
				{
					ind1 = n-1;
					ind2 = 0;
				}
				else
				{
					ind1 = i-1;
					ind2 = i;
				}
				y1 = array_y[ind1];
				y2 = array_y[ind2];
				if (y1 < y2)
				{
					x1 = array_x[ind1];
					x2 = array_x[ind2];
				}
				else if (y1 > y2)
				{
					y2 = array_y[ind1];
					y1 = array_y[ind2];
					x2 = array_x[ind1];
					x1 = array_x[ind2];
				}
				else continue;
				if ((y >= y1) && (y < y2))
					polyInts[ints++] = Math.round((y-y1) * (x2-x1) / (y2-y1) + x1);

				else if ((y == maxy) && (y > y1) && (y <= y2))
					polyInts[ints++] = Math.round((y-y1) * (x2-x1) / (y2-y1) + x1);
			}
			polyInts.sort(integer_compare);
			for (i = 0; i < ints; i+=2)
			htmlstring += mD(polyInts[i], y, polyInts[i+1]-polyInts[i]+1, 1,g,c);
		}
		
		return htmlstring;
	};
	
	this.fillEllipse = this.fillOval = function(left, top, w, h,g,c)
	{
		if(!c){c='#000'}
		var a = (w -= 1)>>1, b = (h -= 1)>>1,
		wod = (w&1)+1, hod = (h&1)+1,
		cx = left+a, cy = top+b,
		x = 0, y = b,
		ox = 0, oy = b,
		aa2 = (a*a)<<1, aa4 = aa2<<1, bb = (b*b)<<1,
		st = (aa2>>1)*(1-(b<<1)) + bb,
		tt = (bb>>1) - aa2*((b<<1)-1),
		pxl, dw, dh;
		var htmlstring = ""
		if (w+1) while (y > 0)
		{
			if (st < 0)
			{
				st += bb*((x<<1)+3);
				tt += (bb<<1)*(++x);
			}
			else if (tt < 0)
			{
				st += bb*((x<<1)+3) - aa4*(y-1);
				pxl = cx-x;
				dw = (x<<1)+wod;
				tt += (bb<<1)*(++x) - aa2*(((y--)<<1)-3);
				dh = oy-y;
				 htmlstring += mD(pxl, cy-oy, dw, dh,g,c);
				 htmlstring +=  mD(pxl, cy+y+hod, dw, dh,g,c);
				ox = x;
				oy = y;
			}
			else
			{
				tt -= aa2*((y<<1)-3);
				st -= aa4*(--y);
			}
		}
		 htmlstring +=  mD(cx-a, cy-oy, w+1, (oy<<1)+hod,g,c);
		 return htmlstring;
	};
	
   this.fillArc = function(x, y, r, st_a, en_a, g,c)
  {
	if(!c){c='#aef'}
    
    var number_of_steps = en_a - st_a ;
    var angle_increment = 2 * Math.PI / number_of_steps;

    var xc = new Array();
    var yc = new Array();

    st_r = st_a*Math.PI / 180;
    en_r = en_a*Math.PI / 180;

   
    for (angle = st_r; angle <= en_r; angle += angle_increment)
        {
         if(en_r < angle + angle_increment)
            angle = en_r;

	 var y2 = Math.sin(angle) * r ;
         var x2 = Math.cos(angle) * r ;

    	 xc.push(x+x2);
         yc.push(y-y2);
        }
    xc.push(x);
    yc.push(y);
    return fillPolygon(xc, yc,g,getColor());
  }
  
  	this.drawEllipse = function(x, y, w, h)
	{
		return mkOv(x, y, w, h);
	};
	
	this.mkOvQds = function(cx, cy, xl, xr, yt, yb, w, h)
	{
		var htmlstring = ""
		htmlstring += mD(xr+cx, yt+cy, w, h,undefined,"#000");
		htmlstring += mD(xr+cx, yb+cy, w, h,undefined,"#000");
		htmlstring += mD(xl+cx, yb+cy, w, h,undefined,"#000");
		htmlstring += mD(xl+cx, yt+cy, w, h,undefined,"#000");
		return htmlstring;
	};
function mkOv(left, top, width, height)
{
	var htmlstring = ""
	var a = width>>1, b = height>>1,
	wod = width&1, hod = (height&1)+1,
	cx = left+a, cy = top+b,
	x = 0, y = b,
	ox = 0, oy = b,
	aa = (a*a)<<1, bb = (b*b)<<1,
	st = (aa>>1)*(1-(b<<1)) + bb,
	tt = (bb>>1) - aa*((b<<1)-1),
	w, h;
	while (y > 0)
	{
		if (st < 0)
		{
			st += bb*((x<<1)+3);
			tt += (bb<<1)*(++x);
		}
		else if (tt < 0)
		{
			st += bb*((x<<1)+3) - (aa<<1)*(y-1);
			tt += (bb<<1)*(++x) - aa*(((y--)<<1)-3);
			w = x-ox;
			h = oy-y;
			if (w&2 && h&2)
			{
				htmlstring += mkOvQds(cx, cy, -x+2, ox+wod, -oy, oy-1+hod, 1, 1);
				htmlstring += mkOvQds(cx, cy, -x+1, x-1+wod, -y-1, y+hod, 1, 1);
			}
			else htmlstring += mkOvQds(cx, cy, -x+1, ox+wod, -oy, oy-h+hod, w, h);
			ox = x;
			oy = y;
		}
		else
		{
			tt -= aa*((y<<1)-3);
			st -= (aa<<1)*(--y);
		}
	}
	htmlstring += mD(cx-a, cy-oy, a-ox+1, (oy<<1)+hod,undefined,"#000");
	htmlstring += mD(cx+ox+wod, cy-oy, a-ox+1, (oy<<1)+hod,undefined,"#000");

	return htmlstring;
}
  
  ct = 0;
  this.getColor = function()
  {
	 c_array = new Array();
	 c_array[0] = new Array(255, 192, 95);
	 c_array[1] = new Array(80, 127, 175);
	 c_array[2] = new Array(159, 87, 112);
	 c_array[3] = new Array(111, 120, 96);
	 c_array[4] = new Array(224, 119, 96);
	 c_array[5] = new Array(80, 159, 144);
	 c_array[6] = new Array(207, 88, 95);
	 c_array[7] = new Array(64, 135, 96);
	 c_array[8] = new Array(239, 160, 95);
	 c_array[9] = new Array(144, 151, 80);
	 c_array[10] = new Array(255, 136, 80);
	 
   if(ct >= (c_array.length-1))
      ct = 0;
   else
      ct++;

   return "#" + d2h(c_array[ct][0]) + d2h(c_array[ct][1]) + d2h(c_array[ct][2]);
   
  }
  
  hD="0123456789ABCDEF";

function d2h(d) 
{
 var h = hD.substr(d&15,1);
 while(d>15) {d>>=4;h=hD.substr(d&15,1)+h;}
 return h;
}

function h2d(h) 
{
 return parseInt(h,16);
}



	
}(grapher,document);