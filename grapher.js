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
									h += '<dd><span style="height:'+  d[i] +'%;"><b>'+ d[i] +'</b></span></dd>'
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
		    G.innerHTML += '<style type="text/css" media="screen">ul.xAxis{margin:0 0 0 27px;padding:0;float:left;clear:left;display:inline;width:454px;}ul.yAxis{margin:14px 0 0 0;padding:0;display:inline;float:left;}ul.xAxis li{float:left; list-style:none;width:33px;text-align:center;}ul.yAxis li{	list-style:none;	height:33px;	text-align:right;	float:left;	clear:left;}dl#csschart, dl#csschart dt, dl#csschart dd{	margin:0;	padding:0;	} 	dl#csschart{width:454px;	height:360px;	padding-left:11px;	float:left;	} dl#csschart dt{	display:none;	}dl#csschart dd{	position:relative;	float:left;	display:inline;	width:33px;	height:330px;	margin-top:22px;			} dl#csschart span{	position:absolute;	display:block;	width:33px;		bottom:0;	left:0;		z-index:1;	color:#555;	text-decoration:none;	} 		dl#csschart span b{	display:block;	font-weight:bold;	font-style:normal;	float:left;	line-height:200%;	color:#fff;	position:absolute;	top:5px;	left:3px;	text-align:center;	width:23px;	} 		/* default column styling */			dl#csschart span{		height:50%;		background:#ddd;		} dl#csschart .sub{	margin-left:-33px;	}dl#csschart .sub span{	background:#eee;}</style>'
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