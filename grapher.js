/*!
  * grapher.js (c) Derek Anderson
  * https://github.com/toxigenicpoem/grapher
  * MIT License
  * Code inspired or borrowed from Thomas Fuchs, Walter Zorn, Balamurugan S
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
		xoffset = 25
		//axis lines
		mkLin(25,351,400,351,G);
		mkLin(25,1,25,351,G);
		
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
  
 grapher.area = function (g,d,o){
		var mp = "missing param",c
		var G = document.getElementById(g);
		xoffset = 25
		//axis lines
		mkLin(25,351,400,351,G);
		mkLin(25,1,25,351,G);
		
		if (G) {
			if(!o||!d)	{m(mp,G);return false;}
			//yaxis
			m(axis('y',o),G);
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
			fillPolygon(xarray, yarray,G,"#0ef");
		
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
					mD(plotPoints[i][0], plotPoints[i][1], 4, 4, G,'#000');
				}
			}
			
			m(axis('x',o),G);
		}
  }
  
grapher.pie = function (g,d,o){
		var mp = "missing param",c
		var G = document.getElementById(g);
	
		
		//axis lines
		
		xoffset = 25
		if (G) {
			if(!o||!d)	{m(mp,G);return false;}


			//plot the data
			
   var r  = 75;
   var sx = 250;
   var sy = 100;
   var hyp = 100;
   var fnt  = 12;
   var total = 0;
   
   
   	for (var i in d) {
				   if (d.hasOwnProperty(i)){ total += d[i];	}}

   // shadow
   fillEllipse(sx+5-r, sy+5-r, 2*r, 2*r,G,'#ccc');

   var st_angle = 0;
   	for (var i in d) {
				   if (d.hasOwnProperty(i)){	
					   
				   var angle = Math.round(d[i]/total*360);
				   var pc    = Math.round(d[i]/total*100);
				   fillArc(sx, sy, r, st_angle, st_angle+angle, G);
				   var ang_rads = (st_angle+(angle/2))*2*Math.PI/360;
				   var my  = Math.sin(ang_rads) * hyp;
				   var mx  = Math.cos(ang_rads) * hyp;
				   st_angle += angle;
				   mxa = (mx < 0 ? 50 : 0);
					   
				}}
					   
		//border
		//drawEllipse(sx-r, sy-r, 2*r, 2*r,c);
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
function mD(x, y, w, h, g, c){g.innerHTML  += '<div style="position:absolute;'+'margin-left:' + x + 'px;'+'margin-top:' + y + 'px;'+'width:' + w + 'px;'+'height:' + h + 'px;'+'clip:rect(0,'+w+'px,'+h+'px,0);'+'background-color:' + c + ';"><\/div>';}
function mkLin(x1, y1, x2, y2,g,c)
{

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
			if (p > 0){mD(ox, y, x-ox, 1,g,c);y += yIncr;p += pru;ox = x;}
			else p += pr;
		}
		mD(ox, y, x2-ox+1, 1,g,c);
	}
	else
	{
		var pr = dx<<1,	pru = pr - (dy<<1),	p = pr-dy, oy = y;
		if (y2 <= y1)
		{
			while ((dy--) > 0)
			{
				if (p > 0){mD(x++, y, 1, oy-y+1,g,c);y += yIncr;p += pru;oy = y;}
				else{y += yIncr;p += pr;}
			}
			mD(x2, y2, 1, oy-y2+1,g,c);
		}
		else
		{
			while ((dy--) > 0)
			{
				y += yIncr;
				if (p > 0){mD(x++, oy, 1, y-oy,g,c);	p += pru; oy = y;}
				else p += pr;
			}
			mD(x2, oy, 1, y2-oy+1,g,c);
		}
	}
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

				 // modified 11. 2. 2004 Walter Zorn
				if ((y >= y1) && (y < y2))
					polyInts[ints++] = Math.round((y-y1) * (x2-x1) / (y2-y1) + x1);

				else if ((y == maxy) && (y > y1) && (y <= y2))
					polyInts[ints++] = Math.round((y-y1) * (x2-x1) / (y2-y1) + x1);
			}
			polyInts.sort(integer_compare);
			for (i = 0; i < ints; i+=2)
				mD(polyInts[i], y, polyInts[i+1]-polyInts[i]+1, 1,g,c);
		}
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
				mD(pxl, cy-oy, dw, dh,g,c);
				mD(pxl, cy+y+hod, dw, dh,g,c);
				ox = x;
				oy = y;
			}
			else
			{
				tt -= aa2*((y<<1)-3);
				st -= aa4*(--y);
			}
		}
		mD(cx-a, cy-oy, w+1, (oy<<1)+hod,g,c);
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
    fillPolygon(xc, yc,g,getColor());
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
