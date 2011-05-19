hz="h";if(typeof Object.create!="function")Object.create=function(m){function r(){}r.prototype=m;return new r};getElementsByClassName=function(m){for(var r=RegExp("(?:^|\\s)"+m+"(?:$|\\s)"),E=document.getElementsByTagName("*"),u=[],t,w=0;(t=E[w])!=null;w++){var A=t.className;A&&A.indexOf(m)!=-1&&r.test(A)&&u.push(t)}return u};(function(m){m.grapher={}})(window);
(function(m,r){function E(j,c,a){return(j+(c-j)*a).toFixed(3)}function u(j,c,a){for(var e=2,d,f,g=[],l=[];d=3,f=arguments[e-1],e--;)if(f.substr(0,1)=="r")for(f=f.match(/\d+/g);d--;)g.push(~~f[d]);else for(f.length==4&&(f="#"+f.substr(1,1)+f.substr(1,1)+f.substr(2,1)+f.substr(2,1)+f.substr(3,1)+f.substr(3,1));d--;)g.push(parseInt(f.substr(1+d*2,2),16));for(;d--;)e=~~(g[d+3]+(g[d]-g[d+3])*a),l.push(e<0?0:e>255?255:e);return"rgb("+l.join(",")+")"}function t(j){var c=parseFloat(j),j=j.replace(/^[\-\d\.]+/,
"");return isNaN(c)?{v:j,f:u,u:""}:{v:c,f:E,u:j}}function w(j){var c={},a=D.length,e;A.innerHTML='<div style="'+j+'"></div>';for(j=A.childNodes[0].style;a--;)if(e=j[D[a]])c[D[a]]=t(e);return c}var A=document.createElement("div"),D="backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
r[m]=function(j,c,a,e){var j=typeof j=="string"?document.getElementById(j):j,a=a||{},d=w(c),c=j.currentStyle?j.currentStyle:getComputedStyle(j,null),f,g={},l=+new Date,k=a.duration||200,p=l+k,n,F=a.easing||function(a){return-Math.cos(a*Math.PI)/2+0.5};for(f in d)g[f]=t(c[f]);n=setInterval(function(){var c=+new Date,B=c>p?1:(c-l)/k;for(f in d)j.style[f]=d[f].f(g[f].v,d[f].v,F(B))+d[f].u;c>p&&(clearInterval(n),a.after&&a.after(),e&&setTimeout(e,1))},10)}})("grapher",this);
(function(m,r){function E(c,a){h="";b=c;a.style==hz&&(c=c=="y"?"x":"y");for(x=0;x<=a[c+"units"].length-1;x++)a.style==hz?h="<li>"+a[c+"units"][x]+"</li>"+h:h+="<li>"+a[c+"units"][x]+"</li>";return'<ul class="'+b+'Axis">'+h+"</ul>"}function u(){var c=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return c()+c()+"-"+c()+"-"+c()+"-"+c()+"-"+c()+c()+c()}function t(c,a,e,d,f,g,l,k){return'<div  class="'+k+'" rel="off" onclick="javascript:grapher.click(this,\''+l+"','"+g+"');\" onmouseout=\"javascript:grapher.out(this,'"+
g+"','"+l+"');\" onmouseover=\"javascript:grapher.over(this,'"+l+'\');" style="z-index:5;position:absolute;margin-left:'+c+"px;margin-top:"+a+"px;width:"+e+"px;height:"+d+"px;clip:rect(0,"+e+"px,"+d+"px,0);background-color:"+g+';"></div>'}function w(c,a,e,d,f,g){var l="";g||(g="#000");if(c>e)var k=e,p=d,e=c,d=a,c=k,a=p;var k=e-c,p=Math.abs(d-a),n=a,F=a>d?-1:1;if(k>=p){for(var o=p<<1,j=o-(k<<1),q=o-k,a=c;k-- >0;)++c,q>0?(l+=t(a,n,c-a,1,f,g),n+=F,q+=j,a=c):q+=o;l+=t(a,n,e-a+1,1,f,g)}else if(o=k<<1,
j=o-(p<<1),q=o-p,k=n,d<=a){for(;p-- >0;)q>0?(l+=t(c++,n,1,k-n+1,f,g),n+=F,q+=j,k=n):(n+=F,q+=o);l+=t(e,d,1,k-d+1,f,g)}else{for(;p-- >0;)n+=F,q>0?(l+=t(c++,k,1,n-k,f,g),q+=j,k=n):q+=o;l+=t(e,k,1,d-k+1,f,g)}return l}function A(c,a){return c<a?-1:(c>a)*1}function D(c){for(var a=hD.substr(c&15,1);c>15;)c>>=4,a=hD.substr(c&15,1)+a;return a}m.initialize=function(c,a){j=0;if(a.axis==void 0)a.axis=!0;if(a.axis){var e=r.getElementById(c),d="";d+=E("y",a);d+=E("x",a);d+=w(25,351,400,351,e);d+=w(25,1,25,351,
e);d+="<style>ul.xAxis{float:left;clear:left;display:inline;width:454px;margin:0 0 0 27px;padding:0} ul.yAxis{display:inline;float:left;margin:14px 0 0;padding:0;height:370px;} ul.xAxis li{float:left;list-style:none;width:33px;text-align:center} ul.yAxis li{list-style:none;height:33px;text-align:right;float:left;clear:left}</style>";e.innerHTML+=d}};m.bar=function(c,a,e){var c=r.getElementById(c),d="";if(c){if(!e||!a)return c.innerHTML+="missing param",!1;guid="d"+u();h="";var f=0,g;for(g in a)if(a.hasOwnProperty(g)){s=
a[g];s.length>1&&(s=s[0]);x=33*f+28;y=351-a[g][0]*3;v=a[g][0]*3;th=33;e.style=="h"&&(x=25,y=33*f+5,v=33,th=a[g][0]*3);type="";e.interactive&&(type="bar");j=0;d+=t(x,y,th,v,c,getColor(),type);if(a[g].length>1){for(b=1;b<a[g].length;b++)x=33*f+28,y=351-a[g][b]*3,v=a[g][b]*3,th=33,e.style=="h"&&(x=25,y=33*f+5,v=33,th=a[g][b]*3),d+=t(x,y,th,v,c,getColor(),type);d+='<div id="tester" style="position:absolute;left:'+(x+7)+"px;opacity:0;top:"+(y-35)+'px;z-index:99;background-color:;">'+(g+"<br/>"+a[g][0])+
"</div>"}f+=1}c.innerHTML+=d}};m.line=function(c,a,e){c=r.getElementById(c);xoffset=25;var d="";if(c){if(!e||!a)return c.innerHTML+="missing param",!1;e=[];counter=0;for(var f in a)a.hasOwnProperty(f)&&(e[counter]=[],e[counter][0]=a[f][0]+xoffset,e[counter][1]=a[f][1],counter+=1);for(f=0;f<=e.length-1;f++)e[f+1]&&(d+=w(e[f][0],e[f][1],e[f+1][0],e[f+1][1],c));c.innerHTML+=d}};m.area=function(c,a,e){c=r.getElementById(c);xoffset=25;var d="";if(c){if(!e||!a)return c.innerHTML+="missing param",!1;var e=
[],f=[];counter=0;e[0]=1+xoffset;f[0]=350;for(var g in a)a.hasOwnProperty(g)&&(f[counter+1]=a[g][1]+1,e[counter+1]=a[g][0]+xoffset,counter+=1);f[counter+1]=350;e[counter+1]=325;d+=fillPolygon(e,f,c,getColor());c.innerHTML+=d}};m.plot=function(c,a,e){var c=r.getElementById(c),d="";xoffset=25;if(c){if(!e||!a)return c.innerHTML+="missing param",!1;e=[];counter=0;for(var f in a)a.hasOwnProperty(f)&&(e[counter]=[],e[counter][0]=a[f][0]+xoffset,e[counter][1]=a[f][1],counter+=1);for(f=0;f<=e.length-1;f++)e[f]&&
(d+=t(e[f][0],e[f][1],4,4,c,"#000"));c.innerHTML+=d}};m.pie=function(c,a,e){c=r.getElementById(c);xoffset=25;if(c){if(!e||!a)return c.innerHTML+="missing param",!1;var e=0,d;for(d in a)a.hasOwnProperty(d)&&(e+=a[d]);var f="";f+=fillEllipse(180,30,150,150,c,"#ccc");var g=0;for(d in a)if(a.hasOwnProperty(d)){var l=Math.round(a[d]/e*360);f+=fillArc(250,100,75,g,g+l,c,void 0,"pie","pie."+(g+l/2)+"."+u());var k=Math.cos((g+l/2)*2*Math.PI/360)*100;g+=l;mxa=k<0?50:0}f+=drawEllipse(175,25,150,150,void 0,
"pie");c.innerHTML+=f}};m.click=function(c,a){if(a=="pie"){parts=getElementsByClassName(c.className);var e,d=c.className.split("."),d={r:0+parseInt(d[1]),rt:45-d[1],t:90-d[1],lt:135-d[1],l:180-d[1],lb:225-d[1],b:270-d[1],br:315-d[1],r2:360-d[1]},f=360,g="";for(i in d)Math.abs(d[i])<f&&(f=Math.abs(d[i]),g=i);for(i=0;i<parts.length;i++)parts[i].getAttribute("rel")=="off"&&(g=="r"&&(x=parseInt(parts[i].style.marginLeft)*1+10,y=parseInt(parts[i].style.marginTop)),g=="rt"&&(x=parseInt(parts[i].style.marginLeft)*
1+10,y=parseInt(parts[i].style.marginTop)*1-10),g=="t"&&(x=parseInt(parts[i].style.marginLeft),y=parseInt(parts[i].style.marginTop)*1-10),g=="lt"&&(x=parseInt(parts[i].style.marginLeft)*1-10,y=parseInt(parts[i].style.marginTop)*1-10),g=="l"&&(x=parseInt(parts[i].style.marginLeft)*1-10,y=parseInt(parts[i].style.marginTop)),g=="lb"&&(x=parseInt(parts[i].style.marginLeft)*1-10,y=parseInt(parts[i].style.marginTop)*1+10),g=="b"&&(x=parseInt(parts[i].style.marginLeft),y=parseInt(parts[i].style.marginTop)*
1+10),g=="br"&&(x=parseInt(parts[i].style.marginLeft)*1+10,y=parseInt(parts[i].style.marginTop)*1+10),m(parts[i],"margin-left:"+x+"px;margin-top:"+y+"px;",{duration:500}),e="on"),parts[i].getAttribute("rel")=="on"&&(g=="r"&&(x=parseInt(parts[i].style.marginLeft)*1-10,y=parseInt(parts[i].style.marginTop)),g=="rt"&&(x=parseInt(parts[i].style.marginLeft)*1-10,y=parseInt(parts[i].style.marginTop)*1+10),g=="t"&&(x=parseInt(parts[i].style.marginLeft),y=parseInt(parts[i].style.marginTop)*1+10),g=="lt"&&
(x=parseInt(parts[i].style.marginLeft)*1+10,y=parseInt(parts[i].style.marginTop)*1+10),g=="l"&&(x=parseInt(parts[i].style.marginLeft)*1+10,y=parseInt(parts[i].style.marginTop)),g=="lb"&&(x=parseInt(parts[i].style.marginLeft)*1+10,y=parseInt(parts[i].style.marginTop)*1-10),g=="b"&&(x=parseInt(parts[i].style.marginLeft),y=parseInt(parts[i].style.marginTop)*1-10),g=="br"&&(x=parseInt(parts[i].style.marginLeft)*1-10,y=parseInt(parts[i].style.marginTop)*1-10),m(parts[i],"margin-left:"+x+"px;margin-top:"+
y+"px;",{duration:500}),e="off"),parts[i].setAttribute("rel",e)}};m.over=function(c,a){a=="bar"&&m(c,"background:#B5BCD9;",{duration:500})};m.out=function(c,a,e){e=="bar"&&m(c,"background:"+a+";",{duration:500})};this.fillPolygon=function(c,a,e,d,f,g){d||(d="#000");var l,k,p,n,j,o,B,q,m,r="",z=c.length;if(z){k=a[0];p=a[0];for(l=1;l<z;l++)a[l]<k&&(k=a[l]),a[l]>p&&(p=a[l]);for(;k<=p;k++){var C=[];for(l=m=0;l<z;l++){l?(n=l-1,q=l):(n=z-1,q=0);j=a[n];B=a[q];if(j<B)n=c[n],o=c[q];else if(j>B)B=a[n],j=a[q],
o=c[n],n=c[q];else continue;k>=j&&k<B?C[m++]=Math.round((k-j)*(o-n)/(B-j)+n):k==p&&k>j&&k<=B&&(C[m++]=Math.round((k-j)*(o-n)/(B-j)+n))}C.sort(A);for(l=0;l<m;l+=2)r+=t(C[l],k,C[l+1]-C[l]+1,1,e,d,f,g)}return r}};this.fillEllipse=this.fillOval=function(c,a,e,d,f,g,l){g||(g="#000");var k=(e-=1)>>1,p=(d-=1)>>1,n=(e&1)+1,d=(d&1)+1;c+=k;a+=p;var j=0,o=p,m=p,q=k*k<<1,r=q<<1,G=p*p<<1,z=(q>>1)*(1-(p<<1))+G,p=(G>>1)-q*((p<<1)-1),C,w,A,u="";if(e+1)for(;o>0;)z<0?(z+=G*((j<<1)+3),p+=(G<<1)*++j):p<0?(z+=G*((j<<
1)+3)-r*(o-1),C=c-j,w=(j<<1)+n,p+=(G<<1)*++j-q*((o--<<1)-3),A=m-o,u+=t(C,a-m,w,A,f,g,void 0,l),u+=t(C,a+o+d,w,A,f,g,void 0,l),m=o):(p-=q*((o<<1)-3),z-=r*--o);u+=t(c-k,a-m,e+1,(m<<1)+d,f,g,void 0,l);return u};this.fillArc=function(c,a,e,d,f,g,l,k,j){var l=2*Math.PI/(f-d),n=[],m=[];st_r=d*Math.PI/180;en_r=f*Math.PI/180;for(angle=st_r;angle<=en_r;angle+=l)en_r<angle+l&&(angle=en_r),d=Math.sin(angle)*e,n.push(c+Math.cos(angle)*e),m.push(a-d);n.push(c);m.push(a);return fillPolygon(n,m,g,getColor(),k,j)};
this.drawEllipse=function(c,a,e,d,f){var g="",l=e>>1,k=d>>1;e&=1;d=(d&1)+1;c+=l;a+=k;for(var j=0,n=k,m=0,o=k,r=l*l<<1,q=k*k<<1,u=(r>>1)*(1-(k<<1))+q,k=(q>>1)-r*((k<<1)-1),w,z;n>0;)u<0?(u+=q*((j<<1)+3),k+=(q<<1)*++j):k<0?(u+=q*((j<<1)+3)-(r<<1)*(n-1),k+=(q<<1)*++j-r*((n--<<1)-3),w=j-m,z=o-n,w&2&&z&2?(g+=mkOvQds(c,a,-j+2,m+e,-o,o-1+d,1,1,f),g+=mkOvQds(c,a,-j+1,j-1+e,-n-1,n+d,1,1,f)):g+=mkOvQds(c,a,-j+1,m+e,-o,o-z+d,w,z,f),m=j,o=n):(k-=r*((n<<1)-3),u-=(r<<1)*--n);g+=t(c-l,a-o,l-m+1,(o<<1)+d,void 0,"#000",
void 0,f);g+=t(c+m+e,a-o,l-m+1,(o<<1)+d,void 0,"#000",void 0,f);return g};this.mkOvQds=function(c,a,e,d,f,g,j,k,m){var n="";n+=t(d+c,f+a,j,k,void 0,"#000",void 0,m);n+=t(d+c,g+a,j,k,void 0,"#000",void 0,m);n+=t(e+c,g+a,j,k,void 0,"#000",void 0,m);n+=t(e+c,f+a,j,k,void 0,"#000",void 0,m);return n};var j=0;this.getColor=function(){c_array=[[255,192,95],[80,127,175],[159,87,112],[111,120,96],[224,119,96],[80,159,144],[207,88,95],[64,135,96],[239,160,95],[144,151,80],[255,136,80]];j>=c_array.length-1?
j=0:j++;return"#"+D(c_array[j][0])+D(c_array[j][1])+D(c_array[j][2])};hD="0123456789ABCDEF"})(grapher,document);