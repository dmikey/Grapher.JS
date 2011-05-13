if(typeof Object.create!='function'){Object.create=function(o){function F(){}
F.prototype=o
return new F}}!function(window){var grapher=window.grapher={}}(window);!function(grapher,document){grapher.bar=function(g,d,o){var mp="missing param",c
var G=document.getElementById(g);if(G){if(!o||!d){m(mp,G);return false;}
G.innerHTML+=axis('y',o);ddW=33
ddH=330
sH='50%'
sW='33px'
om='left'
lm1='top'
lm2='left'
mt='22px'
gh='height'
if(o.orientation=="horizontal"){ddW=330
ddH=33
sH='33px'
sW='50%'
om='top'
lm1='right'
lm2='top'
mt='0px'
gh='width'}
guid=(((1+Math.random())*0x10000)|0).toString(16).substring(1)+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+"-"+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+"-"+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+"-"+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+"-"+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+(((1+Math.random())*0x10000)|0).toString(16).substring(1);h='<dl id="csschart'+guid+'">';for(var i in d){if(d.hasOwnProperty(i)){s=d[i]
if(s.length>1){s=s[0]}
h+='<dd><span style="'+gh+':'+s+'%;"><b>'+s+'</b></span></dd>'
if(d[i].length>1){for(b=1;b<d[i].length;b++){h+='<dd class="sub" ><span style="'+gh+':'+d[i][b]+'%;"><b>'+d[i][b]+'</b></span></dd> '}}};}
h+='</dl> '
G.innerHTML+=h
G.innerHTML+=axis('x',o);G.innerHTML+='<style>ul.xAxis{float:left;clear:left;display:inline;width:454px;margin:0 0 0 27px;padding:0} ul.yAxis{display:inline;float:left;margin:14px 0 0;padding:0} ul.xAxis li{float:left;list-style:none;width:33px;text-align:center} ul.yAxis li{list-style:none;height:33px;text-align:right;float:left;clear:left} dl#csschart'+guid+',dl#csschart'+guid+' dt,dl#csschart'+guid+' dd{margin:0;padding:0} dl#csschart'+guid+'{width:454px;height:360px;padding-left:11px;float:left} dl#csschart dt{display:none} dl#csschart'+guid+' dd{position:relative;display:block;float:left;width:'+ddW+'px;height:'+ddH+'px;margin-top:'+mt+';} dl#csschart'+guid+' span{position:absolute;display:block;width:'+sW+';bottom:0;left:0;z-index:1;color:#555;text-decoration:none;height:'+sH+';background:#456} dl#csschart'+guid+' span b{display:block;font-weight:700;font-style:normal;float:left;line-height:200%;color:#fff;position:absolute;'+lm1+':5px;'+lm2+':3px;text-align:right;width:23px} dl#csschart'+guid+' .sub{margin-'+om+':-33px} dl#csschart'+guid+' .sub span{background:#978}</style>'}}
function axis(a,o){h=""
b=a
if(o.orientation=="horizontal"){if(a=="y"){a="x"}else{a="y"}}
for(x=0;x<=o[a+"units"].length-1;x++){if(o.orientation=="horizontal"){h='<li>'+o[a+"units"][x]+'</li>'+h;}
else{h+='<li>'+o[a+"units"][x]+'</li>';}}
h='<ul class="'+b+'Axis">'+h+'</ul>';return h;}
function m(t,g){g.innerHTML=t;}
function rI(i){return parseInt(i);}}(grapher,document);