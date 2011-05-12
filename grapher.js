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
  grapher.graph = function (g,d,o){
		var mp = "missing param",c
		var G = document.getElementById(g);
		if (G) {
			if(!o)	{m(mp,G);return false;}
			//setup the graph area
			if(!d)	{m(mp,G);return false;}
			//yaxis
			G.innerHTML += axis('y',o); 
			//plot the data
			count = 0
			h = '<dl id="csschart">' ;	
			if(!o.type){m("need chart type",G);return false;}
				
				for (var i in d) {
					   if (d.hasOwnProperty(i)){
							switch (o.type) {
								case "bar": 
									h += '<dd class="p40"><span style="height:'+  d[i] +'%;"><b>'+ d[i] +'</b></span></dd>'
                                    break;
								case "line": 
									break;
							}
			
			   };
			   
			}
			h += '</dl> '
			G.innerHTML += h

			//xaxis
			G.innerHTML += axis('x',o); 
		    G.innerHTML += '<style>ul.xaxis{clear:left;display:inline;float:left;margin:0 0 0 27px;padding:0;width:454px}ul.yaxis{display:inline;float:left;margin:14px 0 0;padding:0}ul.xaxis li{float:left;list-style:none;text-align:center;width:33px}ul.yaxis li{clear:left;float:left;height:33px;list-style:none;text-align:right}dl#csschart,dl#csschart dt,dl#csschart dd{margin:0;padding:0}dl#csschart{float:left;height:360px;padding-left:11px;width:454px}dl#csschart dt{display:none}dl#csschart dd{display:inline;float:left;height:330px;margin-top:22px;position:relative;width:33px}dl#csschart span{background:#aaa;bottom:0;color:#555;display:block;height:50%;left:0;position:absolute;text-decoration:none;width:33px;z-index:1}dl#csschart span b{color:#fff;display:block;float:left;font-style:normal;font-weight:700;left:3px;line-height:200%;position:absolute;text-align:center;top:5px;width:23px}dl#csschart .sub{margin-left:-33px}dl#csschart .sub span{background:#000}</style>'
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