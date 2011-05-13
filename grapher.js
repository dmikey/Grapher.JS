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

!function(grapher, document){
  grapher.bar = function (g,d,o){
		var mp = "missing param",c
		var G = document.getElementById(g);
		if (G) {
			if(!o||!d)	{m(mp,G);return false;}
			//yaxis
			G.innerHTML += axis('y',o); 
			//plot the data
			h = '<dl id="csschart">';			
				for (var i in d) {
					   if (d.hasOwnProperty(i)){							
									s=d[i]
									if (s.length>1){
									s=s[0]						
									}
									h += '<dd><span style="height:'+  s +'%;"><b>'+ s +'</b></span></dd>'
									if (d[i].length>1){
										for (b=1;b<d[i].length;b++) {
												h+='<dd class="sub" ><span style="height:' + d[i][b] + '%;"><b>'+ d[i][b] +'</b></span></dd> '
										}
										}
			   };
			}
			h += '</dl> '
			G.innerHTML += h
			//xaxis
			G.innerHTML += axis('x',o); 
		    G.innerHTML += '<style>ul.xAxis{float:left;clear:left;display:inline;width:454px;margin:0 0 0 27px;padding:0} ul.yAxis{display:inline;float:left;margin:14px 0 0;padding:0} ul.xAxis li{float:left;list-style:none;width:33px;text-align:center} ul.yAxis li{list-style:none;height:33px;text-align:right;float:left;clear:left} dl#csschart,dl#csschart dt,dl#csschart dd{margin:0;padding:0} dl#csschart{width:454px;height:360px;padding-left:11px;float:left} dl#csschart dt{display:none} dl#csschart dd{position:relative;float:left;display:inline;width:33px;height:330px;margin-top:22px} dl#csschart span{position:absolute;display:block;width:33px;bottom:0;left:0;z-index:1;color:#555;text-decoration:none;height:50%;background:#456} dl#csschart span b{display:block;font-weight:700;font-style:normal;float:left;line-height:200%;color:#fff;position:absolute;top:5px;left:3px;text-align:center;width:23px} dl#csschart .sub{margin-left:-33px} dl#csschart .sub span{background:#978}</style>'
		}
  }
  //often used calls, made smaller
  function axis(a,o){
  				h = '<ul class="' + a + 'Axis">';
					for (x=0;x<=o[ a + "units"].length-1;x++){
						h += '<li>' + o[ a + "units"][x] + '</li>';
					}
				h += '</ul>';
				return h;
  }
  function m(t,g){
	g.innerHTML  = t;
  }
  function rI(i){
	return parseInt(i);
  }
}(grapher,document);