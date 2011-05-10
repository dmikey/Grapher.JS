if(typeof Object.create!='function'){Object.create=function(o){function F(){}
F.prototype=o
return new F}}!function(window){var grapher=window.grapher={}}(window);!function(grapher,document){grapher.graph=function(g,d,o){Object.size=function(obj){var size=0,key;for(key in obj){if(obj.hasOwnProperty(key))size++;}
return size;};var mp="missing param",c
var G=document.getElementById(g);var A=["X","Y"]
if(G){if(!o){m(mp,G);return false;}
G.style.width=o.width;G.style.height=o.height;G.style.overflow="hidden";if(!d){m(mp,G);return false;}
G.innerHTML="<div id='chart' style='margin-left:15px;'></div>";c=document.getElementById("chart");c.style.width=(rI(o.width)-30);c.style.height=(rI(o.height)-30);c.style.borderBottom=c.style.borderLeft="1px solid "+o.borderColor;gT=-((rI(o.height)-15)/2)
gL=rI(o.width)/2
for(i=0;i<=1;i++){G.innerHTML+='<div id="axis%" style="position:absolute;margin-top:'+(gT*i)+'px;margin-left:'+((gL)-(gL*i))+';"></div>'.replace(/%/gi,A[i])}
count=0
if(!o.type){m("need chart type",G);return false;}
var p=10;for(var i in d){if(d.hasOwnProperty(i)){switch(o.type){case"bar":G.innerHTML+='<div id="d" style="height:'+d[i]+'px;background-color:red;width:20px;position:absolute;margin-top:-'+(d[i]+1)+'px;margin-left:'+(20*count+20+p*count)+'px;margin-right:'+p+'px;"> </div>';G.innerHTML+='<div id="d" style="width:20px;position:absolute;margin-top:-'+(d[i]+20)+'px;margin-left:'+(20*count+20+p*count)+'px;margin-right:'+p+'px;">'+(d[i])+'</div>';break;case"line":break;}};count++}}}
function m(t,g){g.innerHTML=t;}
function rI(i){return parseInt(i);}}(grapher,document);