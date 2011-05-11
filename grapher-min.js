if(typeof Object.create!='function'){Object.create=function(o){function F(){}
F.prototype=o
return new F}}!function(window){var grapher=window.grapher={}}(window);!function(grapher,document){grapher.graph=function(g,d,o){Object.size=function(obj){var size=0,key;for(key in obj){if(obj.hasOwnProperty(key))size++;}
return size;};var mp="missing param",c
var G=document.getElementById(g);if(G){if(!o){m(mp,G);return false;}
var A=[o.x,o.y]
G.style.width=o.width;G.style.height=o.height;G.style.overflow="hidden";if(!d){m(mp,G);return false;}
G.innerHTML="<div id='chart' style='margin-left:15px;z-index:99;'></div>";c=document.getElementById("chart");c.style.width=(rI(o.width)-30)+"px";c.style.height=(rI(o.height)-30)+"px";c.style.borderBottom=c.style.borderLeft="1px solid "+o.borderColor;gT=((rI(o.height)-15)/2)
gL=rI(o.width)/2
for(i=0;i<=1;i++){G.innerHTML+='<div id="axis%" style="position:absolute;margin-top:-'+(gT*i)+'px;margin-left:'+((gL)-(gL*i))+'px;">%</div>'.replace(/%/gi,A[i])}
if(o.gridlines){totalLines=parseInt(o.height)/20;for(i=1;i<=totalLines-2;i++){G.innerHTML+='<div style="border-bottom:1px solid #999;position:absolute;margin-left:15px;margin-top:-'+i*20+'px;height:5px;width:'+c.style.width+';"></div>'}}
count=0
if(!o.type){m("need chart type",G);return false;}
var p=10;for(var i in d){if(d.hasOwnProperty(i)){switch(o.type){case"bar":var hT=(parseInt(o.height)/o.ymax);G.innerHTML+='<div class="d" style="height:'+(d[i]*hT)+'px;background-color:'+color()+';width:20px;position:absolute;margin-top:-'+(d[i]+1)*hT+'px;margin-left:'+(20*count+20+p*count)+'px;margin-right:'+p+'px;"></div>';G.innerHTML+='<div class="d" style="width:20px;position:absolute;margin-top:-'+(d[i]*hT+20)+'px;margin-left:'+(20*count+20+p*count)+'px;margin-right:'+p+'px;text-align:center;">'+d[i]+'</div>';addCss(".d:hover{background-color:#fff;}");break;case"line":break;}};count++}}}
function m(t,g){g.innerHTML=t;}
function color(){var C=["red","blue","green","yellow","purple"]
return C[Math.floor(Math.random()*C.length)]}
function rI(i){return parseInt(i);}
function addCss(cssCode){var styleElement=document.createElement("style");styleElement.type="text/css";if(styleElement.styleSheet){styleElement.styleSheet.cssText=cssCode;}else{styleElement.appendChild(document.createTextNode(cssCode));}
document.getElementsByTagName("head")[0].appendChild(styleElement);}}(grapher,document);