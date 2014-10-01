(function(){var W=this,AB,F=W.jQuery,S=W.$,T=W.jQuery=W.$=function(B,A){return new T.fn.init(B,A)
},M=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,AC=/^.[^:#\[\.,]*$/;
T.fn=T.prototype={init:function(a,B){a=a||document;
if(a.nodeType){this[0]=a;
this.length=1;
this.context=a;
return this
}if(typeof a==="string"){var C=M.exec(a);
if(C&&(C[1]||!B)){if(C[1]){a=T.clean([C[1]],B)
}else{var A=document.getElementById(C[3]);
if(A&&A.id!=C[3]){return T().find(a)
}var D=T(A||[]);
D.context=document;
D.selector=a;
return D
}}else{return T(B).find(a)
}}else{if(T.isFunction(a)){return T(document).ready(a)
}}if(a.selector&&a.context){this.selector=a.selector;
this.context=a.context
}return this.setArray(T.isArray(a)?a:T.makeArray(a))
},selector:"",jquery:"1.3.2",size:function(){return this.length
},get:function(A){return A===AB?Array.prototype.slice.call(this):this[A]
},pushStack:function(C,A,D){var B=T(C);
B.prevObject=this;
B.context=this.context;
if(A==="find"){B.selector=this.selector+(this.selector?" ":"")+D
}else{if(A){B.selector=this.selector+"."+A+"("+D+")"
}}return B
},setArray:function(A){this.length=0;
Array.prototype.push.apply(this,A);
return this
},each:function(A,B){return T.each(this,A,B)
},index:function(A){return T.inArray(A&&A.jquery?A[0]:A,this)
},attr:function(C,A,B){var D=C;
if(typeof C==="string"){if(A===AB){return this[0]&&T[B||"attr"](this[0],C)
}else{D={};
D[C]=A
}}return this.each(function(a){for(C in D){T.attr(B?this.style:this,C,T.prop(this,D[C],B,a,C))
}})
},css:function(B,A){if((B=="width"||B=="height")&&parseFloat(A)<0){A=AB
}return this.attr(B,A,"curCSS")
},text:function(A){if(typeof A!=="object"&&A!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(A))
}var B="";
T.each(A||this,function(){T.each(this.childNodes,function(){if(this.nodeType!=8){B+=this.nodeType!=1?this.nodeValue:T.fn.text([this])
}})
});
return B
},wrapAll:function(B){if(this[0]){var A=T(B,this[0].ownerDocument).clone();
if(this[0].parentNode){A.insertBefore(this[0])
}A.map(function(){var C=this;
while(C.firstChild){C=C.firstChild
}return C
}).append(this)
}return this
},wrapInner:function(A){return this.each(function(){T(this).contents().wrapAll(A)
})
},wrap:function(A){return this.each(function(){T(this).wrapAll(A)
})
},append:function(){return this.domManip(arguments,true,function(A){if(this.nodeType==1){this.appendChild(A)
}})
},prepend:function(){return this.domManip(arguments,true,function(A){if(this.nodeType==1){this.insertBefore(A,this.firstChild)
}})
},before:function(){return this.domManip(arguments,false,function(A){this.parentNode.insertBefore(A,this)
})
},after:function(){return this.domManip(arguments,false,function(A){this.parentNode.insertBefore(A,this.nextSibling)
})
},end:function(){return this.prevObject||T([])
},push:[].push,sort:[].sort,splice:[].splice,find:function(B){if(this.length===1){var A=this.pushStack([],"find",B);
A.length=0;
T.find(B,this[0],A);
return A
}else{return this.pushStack(T.unique(T.map(this,function(C){return T.find(B,C)
})),"find",B)
}},clone:function(B){var D=this.map(function(){if(!T.support.noCloneEvent&&!T.isXMLDoc(this)){var b=this.outerHTML;
if(!b){var a=this.ownerDocument.createElement("div");
a.appendChild(this.cloneNode(true));
b=a.innerHTML
}return T.clean([b.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]
}else{return this.cloneNode(true)
}});
if(B===true){var A=this.find("*").andSelf(),C=0;
D.find("*").andSelf().each(function(){if(this.nodeName!==A[C].nodeName){return 
}var c=T.data(A[C],"events");
for(var a in c){for(var b in c[a]){T.event.add(this,a,c[a][b],c[a][b].data)
}}C++
})
}return D
},filter:function(A){return this.pushStack(T.isFunction(A)&&T.grep(this,function(B,C){return A.call(B,C)
})||T.multiFilter(A,T.grep(this,function(B){return B.nodeType===1
})),"filter",A)
},closest:function(C){var A=T.expr.match.POS.test(C)?T(C):null,B=0;
return this.map(function(){var D=this;
while(D&&D.ownerDocument){if(A?A.index(D)>-1:T(D).is(C)){T.data(D,"closest",B);
return D
}D=D.parentNode;
B++
}})
},not:function(B){if(typeof B==="string"){if(AC.test(B)){return this.pushStack(T.multiFilter(B,this,true),"not",B)
}else{B=T.multiFilter(B,this)
}}var A=B.length&&B[B.length-1]!==AB&&!B.nodeType;
return this.filter(function(){return A?T.inArray(this,B)<0:this!=B
})
},add:function(A){return this.pushStack(T.unique(T.merge(this.get(),typeof A==="string"?T(A):T.makeArray(A))))
},is:function(A){return !!A&&T.multiFilter(A,this).length>0
},hasClass:function(A){return !!A&&this.is("."+A)
},val:function(C){if(C===AB){var e=this[0];
if(e){if(T.nodeName(e,"option")){return(e.attributes.value||{}).specified?e.value:e.text
}if(T.nodeName(e,"select")){var a=e.selectedIndex,B=[],A=e.options,b=e.type=="select-one";
if(a<0){return null
}for(var d=b?a:0,D=b?a+1:A.length;
d<D;
d++){var c=A[d];
if(c.selected){C=T(c).val();
if(b){return C
}B.push(C)
}}return B
}return(e.value||"").replace(/\r/g,"")
}return AB
}if(typeof C==="number"){C+=""
}return this.each(function(){if(this.nodeType!=1){return 
}if(T.isArray(C)&&/radio|checkbox/.test(this.type)){this.checked=(T.inArray(this.value,C)>=0||T.inArray(this.name,C)>=0)
}else{if(T.nodeName(this,"select")){var f=T.makeArray(C);
T("option",this).each(function(){this.selected=(T.inArray(this.value,f)>=0||T.inArray(this.text,f)>=0)
});
if(!f.length){this.selectedIndex=-1
}}else{this.value=C
}}})
},html:function(A){return A===AB?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(A)
},replaceWith:function(A){return this.after(A).remove()
},eq:function(A){return this.slice(A,+A+1)
},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))
},map:function(A){return this.pushStack(T.map(this,function(B,C){return A.call(B,C,B)
}))
},andSelf:function(){return this.add(this.prevObject)
},domManip:function(D,A,B){if(this[0]){var a=(this[0].ownerDocument||this[0]).createDocumentFragment(),d=T.clean(D,(this[0].ownerDocument||this[0]),a),b=a.firstChild;
if(b){for(var c=0,e=this.length;
c<e;
c++){B.call(C(this[c],b),this.length>1||c>0?a.cloneNode(true):a)
}}if(d){T.each(d,E)
}}return this;
function C(g,f){return A&&T.nodeName(g,"table")&&T.nodeName(f,"tr")?(g.getElementsByTagName("tbody")[0]||g.appendChild(g.ownerDocument.createElement("tbody"))):g
}}};
T.fn.init.prototype=T.fn;
function E(B,A){if(A.src){T.ajax({url:A.src,async:false,dataType:"script"})
}else{T.globalEval(A.text||A.textContent||A.innerHTML||"")
}if(A.parentNode){A.parentNode.removeChild(A)
}}function AD(){return +new Date
}T.extend=T.fn.extend=function(){var C=arguments[0]||{},a=1,D=arguments.length,d=false,b;
if(typeof C==="boolean"){d=C;
C=arguments[1]||{};
a=2
}if(typeof C!=="object"&&!T.isFunction(C)){C={}
}if(D==a){C=this;
--a
}for(;
a<D;
a++){if((b=arguments[a])!=null){for(var c in b){var B=C[c],A=b[c];
if(C===A){continue
}if(d&&A&&typeof A==="object"&&!A.nodeType){C[c]=T.extend(d,B||(A.length!=null?[]:{}),A)
}else{if(A!==AB){C[c]=A
}}}}}return C
};
var AG=/z-?index|font-?weight|opacity|zoom|line-?height/i,Q=document.defaultView||{},L=Object.prototype.toString;
T.extend({noConflict:function(A){W.$=S;
if(A){W.jQuery=F
}return T
},isFunction:function(A){return L.call(A)==="[object Function]"
},isArray:function(A){return L.call(A)==="[object Array]"
},isXMLDoc:function(A){return A.nodeType===9&&A.documentElement.nodeName!=="HTML"||!!A.ownerDocument&&T.isXMLDoc(A.ownerDocument)
},globalEval:function(A){if(A&&/\S/.test(A)){var B=document.getElementsByTagName("head")[0]||document.documentElement,C=document.createElement("script");
C.type="text/javascript";
if(T.support.scriptEval){C.appendChild(document.createTextNode(A))
}else{C.text=A
}B.insertBefore(C,B.firstChild);
B.removeChild(C)
}},nodeName:function(A,B){return A.nodeName&&A.nodeName.toUpperCase()==B.toUpperCase()
},each:function(a,A,b){var c,D=0,C=a.length;
if(b){if(C===AB){for(c in a){if(A.apply(a[c],b)===false){break
}}}else{for(;
D<C;
){if(A.apply(a[D++],b)===false){break
}}}}else{if(C===AB){for(c in a){if(A.call(a[c],c,a[c])===false){break
}}}else{for(var B=a[0];
D<C&&A.call(B,D,B)!==false;
B=a[++D]){}}}return a
},prop:function(B,A,C,D,a){if(T.isFunction(A)){A=A.call(B,D)
}return typeof A==="number"&&C=="curCSS"&&!AG.test(a)?A+"px":A
},className:{add:function(B,A){T.each((A||"").split(/\s+/),function(D,C){if(B.nodeType==1&&!T.className.has(B.className,C)){B.className+=(B.className?" ":"")+C
}})
},remove:function(B,A){if(B.nodeType==1){B.className=A!==AB?T.grep(B.className.split(/\s+/),function(C){return !T.className.has(A,C)
}).join(" "):""
}},has:function(A,B){return A&&T.inArray(B,(A.className||A).toString().split(/\s+/))>-1
}},swap:function(B,C,A){var a={};
for(var D in C){a[D]=B.style[D];
B.style[D]=C[D]
}A.call(B);
for(var D in C){B.style[D]=a[D]
}},css:function(a,c,C,d){if(c=="width"||c=="height"){var A,b={position:"absolute",visibility:"hidden",display:"block"},B=c=="width"?["Left","Right"]:["Top","Bottom"];
function D(){A=c=="width"?a.offsetWidth:a.offsetHeight;
if(d==="border"){return 
}T.each(B,function(){if(!d){A-=parseFloat(T.curCSS(a,"padding"+this,true))||0
}if(d==="margin"){A+=parseFloat(T.curCSS(a,"margin"+this,true))||0
}else{A-=parseFloat(T.curCSS(a,"border"+this+"Width",true))||0
}})
}if(a.offsetWidth!==0){D()
}else{T.swap(a,b,D)
}return Math.max(0,Math.round(A))
}return T.curCSS(a,c,C)
},curCSS:function(a,d,c){var B,e=a.style;
if(d=="opacity"&&!T.support.opacity){B=T.attr(e,"opacity");
return B==""?"1":B
}if(d.match(/float/i)){d=H
}if(!c&&e&&e[d]){B=e[d]
}else{if(Q.getComputedStyle){if(d.match(/float/i)){d="float"
}d=d.replace(/([A-Z])/g,"-$1").toLowerCase();
var A=Q.getComputedStyle(a,null);
if(A){B=A.getPropertyValue(d)
}if(d=="opacity"&&B==""){B="1"
}}else{if(a.currentStyle){var D=d.replace(/\-(\w)/g,function(g,f){return f.toUpperCase()
});
B=a.currentStyle[d]||a.currentStyle[D];
if(!/^\d+(px)?$/i.test(B)&&/^\d/.test(B)){var b=e.left,C=a.runtimeStyle.left;
a.runtimeStyle.left=a.currentStyle.left;
e.left=B||0;
B=e.pixelLeft+"px";
e.left=b;
a.runtimeStyle.left=C
}}}}return B
},clean:function(c,B,D){B=B||document;
if(typeof B.createElement==="undefined"){B=B.ownerDocument||B[0]&&B[0].ownerDocument||document
}if(!D&&c.length===1&&typeof c[0]==="string"){var a=/^<(\w+)\s*\/?>$/.exec(c[0]);
if(a){return[B.createElement(a[1])]
}}var b=[],d=[],A=B.createElement("div");
T.each(c,function(h,e){if(typeof e==="number"){e+=""
}if(!e){return 
}if(typeof e==="string"){e=e.replace(/(<(\w+)[^>]*?)\/>/g,function(o,m,p){return p.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?o:m+"></"+p+">"
});
var j=e.replace(/^\s+/,"").substring(0,10).toLowerCase();
var g=!j.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!j.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||j.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!j.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!j.indexOf("<td")||!j.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!j.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!T.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];
A.innerHTML=g[1]+e+g[2];
while(g[0]--){A=A.lastChild
}if(!T.support.tbody){var f=/<tbody/i.test(e),k=!j.indexOf("<table")&&!f?A.firstChild&&A.firstChild.childNodes:g[1]=="<table>"&&!f?A.childNodes:[];
for(var l=k.length-1;
l>=0;
--l){if(T.nodeName(k[l],"tbody")&&!k[l].childNodes.length){k[l].parentNode.removeChild(k[l])
}}}if(!T.support.leadingWhitespace&&/^\s/.test(e)){A.insertBefore(B.createTextNode(e.match(/^\s*/)[0]),A.firstChild)
}e=T.makeArray(A.childNodes)
}if(e.nodeType){b.push(e)
}else{b=T.merge(b,e)
}});
if(D){for(var C=0;
b[C];
C++){if(T.nodeName(b[C],"script")&&(!b[C].type||b[C].type.toLowerCase()==="text/javascript")){d.push(b[C].parentNode?b[C].parentNode.removeChild(b[C]):b[C])
}else{if(b[C].nodeType===1){b.splice.apply(b,[C+1,0].concat(T.makeArray(b[C].getElementsByTagName("script"))))
}D.appendChild(b[C])
}}return d
}return b
},attr:function(C,b,B){if(!C||C.nodeType==3||C.nodeType==8){return AB
}var a=!T.isXMLDoc(C),A=B!==AB;
b=a&&T.props[b]||b;
if(C.tagName){var c=/href|src|style/.test(b);
if(b=="selected"&&C.parentNode){C.parentNode.selectedIndex
}if(b in C&&a&&!c){if(A){if(b=="type"&&T.nodeName(C,"input")&&C.parentNode){throw"type property can't be changed"
}C[b]=B
}if(T.nodeName(C,"form")&&C.getAttributeNode(b)){return C.getAttributeNode(b).nodeValue
}if(b=="tabIndex"){var D=C.getAttributeNode("tabIndex");
return D&&D.specified?D.value:C.nodeName.match(/(button|input|object|select|textarea)/i)?0:C.nodeName.match(/^(a|area)$/i)&&C.href?0:AB
}return C[b]
}if(!T.support.style&&a&&b=="style"){return T.attr(C.style,"cssText",B)
}if(A){C.setAttribute(b,""+B)
}var d=!T.support.hrefNormalized&&a&&c?C.getAttribute(b,2):C.getAttribute(b);
return d===null?AB:d
}if(!T.support.opacity&&b=="opacity"){if(A){C.zoom=1;
C.filter=(C.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(B)+""=="NaN"?"":"alpha(opacity="+B*100+")")
}return C.filter&&C.filter.indexOf("opacity=")>=0?(parseFloat(C.filter.match(/opacity=([^)]*)/)[1])/100)+"":""
}b=b.replace(/-([a-z])/ig,function(f,e){return e.toUpperCase()
});
if(A){C[b]=B
}return C[b]
},trim:function(A){return(A||"").replace(/^\s+|\s+$/g,"")
},makeArray:function(A){var C=[];
if(A!=null){var B=A.length;
if(B==null||typeof A==="string"||T.isFunction(A)||A.setInterval){C[0]=A
}else{while(B){C[--B]=A[B]
}}}return C
},inArray:function(B,A){for(var D=0,C=A.length;
D<C;
D++){if(A[D]===B){return D
}}return -1
},merge:function(B,a){var D=0,C,A=B.length;
if(!T.support.getAll){while((C=a[D++])!=null){if(C.nodeType!=8){B[A++]=C
}}}else{while((C=a[D++])!=null){B[A++]=C
}}return B
},unique:function(A){var b=[],c={};
try{for(var a=0,D=A.length;
a<D;
a++){var B=T.data(A[a]);
if(!c[B]){c[B]=true;
b.push(A[a])
}}}catch(C){b=A
}return b
},grep:function(a,A,b){var D=[];
for(var C=0,B=a.length;
C<B;
C++){if(!b!=!A(a[C],C)){D.push(a[C])
}}return D
},map:function(b,A){var a=[];
for(var D=0,C=b.length;
D<C;
D++){var B=A(b[D],D);
if(B!=null){a[a.length]=B
}}return a.concat.apply([],a)
}});
var O=navigator.userAgent.toLowerCase();
T.browser={version:(O.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(O),opera:/opera/.test(O),msie:/msie/.test(O)&&!/opera/.test(O),mozilla:/mozilla/.test(O)&&!/(compatible|webkit)/.test(O)};
T.each({parent:function(A){return A.parentNode
},parents:function(A){return T.dir(A,"parentNode")
},next:function(A){return T.nth(A,2,"nextSibling")
},prev:function(A){return T.nth(A,2,"previousSibling")
},nextAll:function(A){return T.dir(A,"nextSibling")
},prevAll:function(A){return T.dir(A,"previousSibling")
},siblings:function(A){return T.sibling(A.parentNode.firstChild,A)
},children:function(A){return T.sibling(A.firstChild)
},contents:function(A){return T.nodeName(A,"iframe")?A.contentDocument||A.contentWindow.document:T.makeArray(A.childNodes)
}},function(B,A){T.fn[B]=function(D){var C=T.map(this,A);
if(D&&typeof D=="string"){C=T.multiFilter(D,C)
}return this.pushStack(T.unique(C),B,D)
}
});
T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(B,A){T.fn[B]=function(d){var a=[],C=T(d);
for(var D=0,c=C.length;
D<c;
D++){var b=(D>0?this.clone(true):this).get();
T.fn[A].apply(T(C[D]),b);
a=a.concat(b)
}return this.pushStack(a,B,d)
}
});
T.each({removeAttr:function(A){T.attr(this,A,"");
if(this.nodeType==1){this.removeAttribute(A)
}},addClass:function(A){T.className.add(this,A)
},removeClass:function(A){T.className.remove(this,A)
},toggleClass:function(A,B){if(typeof B!=="boolean"){B=!T.className.has(this,A)
}T.className[B?"add":"remove"](this,A)
},remove:function(A){if(!A||T.filter(A,[this]).length){T("*",this).add([this]).each(function(){T.event.remove(this);
T.removeData(this)
});
if(this.parentNode){this.parentNode.removeChild(this)
}}},empty:function(){T(this).children().remove();
while(this.firstChild){this.removeChild(this.firstChild)
}}},function(B,A){T.fn[B]=function(){return this.each(A,arguments)
}
});
function Y(B,A){return B[0]&&parseInt(T.curCSS(B[0],A,true),10)||0
}var AA="jQuery"+AD(),I=0,R={};
T.extend({cache:{},data:function(C,D,B){C=C==W?R:C;
var A=C[AA];
if(!A){A=C[AA]=++I
}if(D&&!T.cache[A]){T.cache[A]={}
}if(B!==AB){T.cache[A][D]=B
}return D?T.cache[A][D]:A
},removeData:function(C,D){C=C==W?R:C;
var A=C[AA];
if(D){if(T.cache[A]){delete T.cache[A][D];
D="";
for(D in T.cache[A]){break
}if(!D){T.removeData(C)
}}}else{try{delete C[AA]
}catch(B){if(C.removeAttribute){C.removeAttribute(AA)
}}delete T.cache[A]
}},queue:function(C,D,A){if(C){D=(D||"fx")+"queue";
var B=T.data(C,D);
if(!B||T.isArray(A)){B=T.data(C,D,T.makeArray(A))
}else{if(A){B.push(A)
}}}return B
},dequeue:function(A,B){var D=T.queue(A,B),C=D.shift();
if(!B||B==="fx"){C=D[0]
}if(C!==AB){C.call(A)
}}});
T.fn.extend({data:function(D,B){var A=D.split(".");
A[1]=A[1]?"."+A[1]:"";
if(B===AB){var C=this.triggerHandler("getData"+A[1]+"!",[A[0]]);
if(C===AB&&this.length){C=T.data(this[0],D)
}return C===AB&&A[1]?this.data(A[0]):C
}else{return this.trigger("setData"+A[1]+"!",[A[0],B]).each(function(){T.data(this,D,B)
})
}},removeData:function(A){return this.each(function(){T.removeData(this,A)
})
},queue:function(B,A){if(typeof B!=="string"){A=B;
B="fx"
}if(A===AB){return T.queue(this[0],B)
}return this.each(function(){var C=T.queue(this,B,A);
if(B=="fx"&&C.length==1){C[0].call(this)
}})
},dequeue:function(A){return this.each(function(){T.dequeue(this,A)
})
}});
(function(){var B=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,d=0,h=Object.prototype.toString;
var k=function(p,v,AO,AN){AO=AO||[];
v=v||document;
if(v.nodeType!==1&&v.nodeType!==9){return[]
}if(!p||typeof p!=="string"){return AO
}var o=[],r,AK,z,y,AM,u,q=true;
B.lastIndex=0;
while((r=B.exec(p))!==null){o.push(r[1]);
if(r[2]){u=RegExp.rightContext;
break
}}if(o.length>1&&c.exec(p)){if(o.length===2&&g.relative[o[0]]){AK=f(o[0]+o[1],v)
}else{AK=g.relative[o[0]]?[v]:k(o.shift(),v);
while(o.length){p=o.shift();
if(g.relative[p]){p+=o.shift()
}AK=f(p,AK)
}}}else{var AL=AN?{expr:o.pop(),set:l(AN)}:k.find(o.pop(),o.length===1&&v.parentNode?v.parentNode:v,C(v));
AK=k.filter(AL.expr,AL.set);
if(o.length>0){z=l(AK)
}else{q=false
}while(o.length){var AI=o.pop(),AJ=AI;
if(!g.relative[AI]){AI=""
}else{AJ=o.pop()
}if(AJ==null){AJ=v
}g.relative[AI](z,AJ,C(v))
}}if(!z){z=AK
}if(!z){throw"Syntax error, unrecognized expression: "+(AI||p)
}if(h.call(z)==="[object Array]"){if(!q){AO.push.apply(AO,z)
}else{if(v.nodeType===1){for(var m=0;
z[m]!=null;
m++){if(z[m]&&(z[m]===true||z[m].nodeType===1&&e(v,z[m]))){AO.push(AK[m])
}}}else{for(var m=0;
z[m]!=null;
m++){if(z[m]&&z[m].nodeType===1){AO.push(AK[m])
}}}}}else{l(z,AO)
}if(u){k(u,v,AO,AN);
if(j){hasDuplicate=false;
AO.sort(j);
if(hasDuplicate){for(var m=1;
m<AO.length;
m++){if(AO[m]===AO[m-1]){AO.splice(m--,1)
}}}}}return AO
};
k.matches=function(o,m){return k(o,null,null,m)
};
k.find=function(m,y,z){var o,q;
if(!m){return[]
}for(var r=0,u=g.order.length;
r<u;
r++){var p=g.order[r],q;
if((q=g.match[p].exec(m))){var v=RegExp.leftContext;
if(v.substr(v.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");
o=g.find[p](q,y,z);
if(o!=null){m=m.replace(g.match[p],"");
break
}}}}if(!o){o=y.getElementsByTagName("*")
}return{set:o,expr:m}
};
k.filter=function(AM,AN,AJ,r){var u=AM,z=[],m=AN,p,y,o=AN&&AN[0]&&C(AN[0]);
while(AM&&AN.length){for(var AO in g.filter){if((p=g.match[AO].exec(AM))!=null){var v=g.filter[AO],AI,AK;
y=false;
if(m==z){z=[]
}if(g.preFilter[AO]){p=g.preFilter[AO](p,m,AJ,z,r,o);
if(!p){y=AI=true
}else{if(p===true){continue
}}}if(p){for(var q=0;
(AK=m[q])!=null;
q++){if(AK){AI=v(AK,p,q,m);
var AL=r^!!AI;
if(AJ&&AI!=null){if(AL){y=true
}else{m[q]=false
}}else{if(AL){z.push(AK);
y=true
}}}}}if(AI!==AB){if(!AJ){m=z
}AM=AM.replace(g.match[AO],"");
if(!y){return[]
}break
}}}if(AM==u){if(y==null){throw"Syntax error, unrecognized expression: "+AM
}else{break
}}u=AM
}return m
};
var g=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(m){return m.getAttribute("href")
}},relative:{"+":function(m,y,o){var q=typeof y==="string",z=q&&!/\W/.test(y),p=q&&!z;
if(z&&!o){y=y.toUpperCase()
}for(var r=0,u=m.length,v;
r<u;
r++){if((v=m[r])){while((v=v.previousSibling)&&v.nodeType!==1){}m[r]=p||v&&v.nodeName===y?v||false:v===y
}}if(p){k.filter(y,m,true)
}},">":function(u,p,r){var y=typeof p==="string";
if(y&&!/\W/.test(p)){p=r?p:p.toUpperCase();
for(var o=0,q=u.length;
o<q;
o++){var v=u[o];
if(v){var m=v.parentNode;
u[o]=m.nodeName===p?m:false
}}}else{for(var o=0,q=u.length;
o<q;
o++){var v=u[o];
if(v){u[o]=y?v.parentNode:v.parentNode===p
}}if(y){k.filter(p,u,true)
}}},"":function(m,p,r){var o=d++,q=A;
if(!p.match(/\W/)){var u=p=r?p:p.toUpperCase();
q=D
}q("parentNode",p,o,m,u,r)
},"~":function(m,p,r){var o=d++,q=A;
if(typeof p==="string"&&!p.match(/\W/)){var u=p=r?p:p.toUpperCase();
q=D
}q("previousSibling",p,o,m,u,r)
}},find:{ID:function(p,o,m){if(typeof o.getElementById!=="undefined"&&!m){var q=o.getElementById(p[1]);
return q?[q]:[]
}},NAME:function(o,u,r){if(typeof u.getElementsByName!=="undefined"){var p=[],v=u.getElementsByName(o[1]);
for(var m=0,q=v.length;
m<q;
m++){if(v[m].getAttribute("name")===o[1]){p.push(v[m])
}}return p.length===0?null:p
}},TAG:function(o,m){return m.getElementsByTagName(o[1])
}},preFilter:{CLASS:function(m,p,o,q,u,r){m=" "+m[1].replace(/\\/g,"")+" ";
if(r){return m
}for(var y=0,v;
(v=p[y])!=null;
y++){if(v){if(u^(v.className&&(" "+v.className+" ").indexOf(m)>=0)){if(!o){q.push(v)
}}else{if(o){p[y]=false
}}}}return false
},ID:function(m){return m[1].replace(/\\/g,"")
},TAG:function(o,p){for(var m=0;
p[m]===false;
m++){}return p[m]&&C(p[m])?o[1]:o[1].toUpperCase()
},CHILD:function(o){if(o[1]=="nth"){var m=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(o[2]=="even"&&"2n"||o[2]=="odd"&&"2n+1"||!/\D/.test(o[2])&&"0n+"+o[2]||o[2]);
o[2]=(m[1]+(m[2]||1))-0;
o[3]=m[3]-0
}o[0]=d++;
return o
},ATTR:function(v,p,o,q,u,r){var m=v[1].replace(/\\/g,"");
if(!r&&g.attrMap[m]){v[1]=g.attrMap[m]
}if(v[2]==="~="){v[4]=" "+v[4]+" "
}return v
},PSEUDO:function(u,p,o,q,r){if(u[1]==="not"){if(u[3].match(B).length>1||/^\w/.test(u[3])){u[3]=k(u[3],null,null,p)
}else{var m=k.filter(u[3],p,o,true^r);
if(!o){q.push.apply(q,m)
}return false
}}else{if(g.match.POS.test(u[0])||g.match.CHILD.test(u[0])){return true
}}return u
},POS:function(m){m.unshift(true);
return m
}},filters:{enabled:function(m){return m.disabled===false&&m.type!=="hidden"
},disabled:function(m){return m.disabled===true
},checked:function(m){return m.checked===true
},selected:function(m){m.parentNode.selectedIndex;
return m.selected===true
},parent:function(m){return !!m.firstChild
},empty:function(m){return !m.firstChild
},has:function(m,o,p){return !!k(p[3],m).length
},header:function(m){return/h\d/i.test(m.nodeName)
},text:function(m){return"text"===m.type
},radio:function(m){return"radio"===m.type
},checkbox:function(m){return"checkbox"===m.type
},file:function(m){return"file"===m.type
},password:function(m){return"password"===m.type
},submit:function(m){return"submit"===m.type
},image:function(m){return"image"===m.type
},reset:function(m){return"reset"===m.type
},button:function(m){return"button"===m.type||m.nodeName.toUpperCase()==="BUTTON"
},input:function(m){return/input|select|textarea|button/i.test(m.nodeName)
}},setFilters:{first:function(m,o){return o===0
},last:function(o,p,q,m){return p===m.length-1
},even:function(m,o){return o%2===0
},odd:function(m,o){return o%2===1
},lt:function(m,o,p){return o<p[3]-0
},gt:function(m,o,p){return o>p[3]-0
},nth:function(m,o,p){return p[3]-0==o
},eq:function(m,o,p){return p[3]-0==o
}},filter:{PSEUDO:function(u,o,m,r){var p=o[1],y=g.filters[p];
if(y){return y(u,m,o,r)
}else{if(p==="contains"){return(u.textContent||u.innerText||"").indexOf(o[3])>=0
}else{if(p==="not"){var v=o[3];
for(var m=0,q=v.length;
m<q;
m++){if(v[m]===u){return false
}}return true
}}}},CHILD:function(y,r){var o=r[1],v=y;
switch(o){case"only":case"first":while(v=v.previousSibling){if(v.nodeType===1){return false
}}if(o=="first"){return true
}v=y;
case"last":while(v=v.nextSibling){if(v.nodeType===1){return false
}}return true;
case"nth":var u=r[2],z=r[3];
if(u==1&&z==0){return true
}var p=r[0],AI=y.parentNode;
if(AI&&(AI.sizcache!==p||!y.nodeIndex)){var q=0;
for(v=AI.firstChild;
v;
v=v.nextSibling){if(v.nodeType===1){v.nodeIndex=++q
}}AI.sizcache=p
}var m=y.nodeIndex-z;
if(u==0){return m==0
}else{return(m%u==0&&m/u>=0)
}}},ID:function(m,o){return m.nodeType===1&&m.getAttribute("id")===o
},TAG:function(m,o){return(o==="*"&&m.nodeType===1)||m.nodeName===o
},CLASS:function(m,o){return(" "+(m.className||m.getAttribute("class"))+" ").indexOf(o)>-1
},ATTR:function(u,m){var o=m[1],q=g.attrHandle[o]?g.attrHandle[o](u):u[o]!=null?u[o]:u.getAttribute(o),r=q+"",v=m[2],p=m[4];
return q==null?v==="!=":v==="="?r===p:v==="*="?r.indexOf(p)>=0:v==="~="?(" "+r+" ").indexOf(p)>=0:!p?r&&q!==false:v==="!="?r!=p:v==="^="?r.indexOf(p)===0:v==="$="?r.substr(r.length-p.length)===p:v==="|="?r===p||r.substr(0,p.length+1)===p+"-":false
},POS:function(u,p,o,r){var q=p[2],m=g.setFilters[q];
if(m){return m(u,o,p,r)
}}}};
var c=g.match.POS;
for(var a in g.match){g.match[a]=RegExp(g.match[a].source+/(?![^\[]*\])(?![^\(]*\))/.source)
}var l=function(m,o){m=Array.prototype.slice.call(m);
if(o){o.push.apply(o,m);
return o
}return m
};
try{Array.prototype.slice.call(document.documentElement.childNodes)
}catch(b){l=function(r,m){var p=m||[];
if(h.call(r)==="[object Array]"){Array.prototype.push.apply(p,r)
}else{if(typeof r.length==="number"){for(var o=0,q=r.length;
o<q;
o++){p.push(r[o])
}}else{for(var o=0;
r[o];
o++){p.push(r[o])
}}}return p
}
}var j;
if(document.documentElement.compareDocumentPosition){j=function(o,p){var m=o.compareDocumentPosition(p)&4?-1:o===p?0:1;
if(m===0){hasDuplicate=true
}return m
}
}else{if("sourceIndex" in document.documentElement){j=function(o,p){var m=o.sourceIndex-p.sourceIndex;
if(m===0){hasDuplicate=true
}return m
}
}else{if(document.createRange){j=function(m,p){var o=m.ownerDocument.createRange(),q=p.ownerDocument.createRange();
o.selectNode(m);
o.collapse(true);
q.selectNode(p);
q.collapse(true);
var r=o.compareBoundaryPoints(Range.START_TO_END,q);
if(r===0){hasDuplicate=true
}return r
}
}}}(function(){var o=document.createElement("form"),m="script"+(new Date).getTime();
o.innerHTML="<input name='"+m+"'/>";
var p=document.documentElement;
p.insertBefore(o,p.firstChild);
if(!!document.getElementById(m)){g.find.ID=function(v,u,r){if(typeof u.getElementById!=="undefined"&&!r){var q=u.getElementById(v[1]);
return q?q.id===v[1]||typeof q.getAttributeNode!=="undefined"&&q.getAttributeNode("id").nodeValue===v[1]?[q]:AB:[]
}};
g.filter.ID=function(r,q){var u=typeof r.getAttributeNode!=="undefined"&&r.getAttributeNode("id");
return r.nodeType===1&&u&&u.nodeValue===q
}
}p.removeChild(o)
})();
(function(){var m=document.createElement("div");
m.appendChild(document.createComment(""));
if(m.getElementsByTagName("*").length>0){g.find.TAG=function(q,r){var u=r.getElementsByTagName(q[1]);
if(q[1]==="*"){var o=[];
for(var p=0;
u[p];
p++){if(u[p].nodeType===1){o.push(u[p])
}}u=o
}return u
}
}m.innerHTML="<a href='#'></a>";
if(m.firstChild&&typeof m.firstChild.getAttribute!=="undefined"&&m.firstChild.getAttribute("href")!=="#"){g.attrHandle.href=function(o){return o.getAttribute("href",2)
}
}})();
if(document.querySelectorAll){(function(){var o=k,m=document.createElement("div");
m.innerHTML="<p class='TEST'></p>";
if(m.querySelectorAll&&m.querySelectorAll(".TEST").length===0){return 
}k=function(u,v,q,p){v=v||document;
if(!p&&v.nodeType===9&&!C(v)){try{return l(v.querySelectorAll(u),q)
}catch(r){}}return o(u,v,q,p)
};
k.find=o.find;
k.filter=o.filter;
k.selectors=o.selectors;
k.matches=o.matches
})()
}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var m=document.createElement("div");
m.innerHTML="<div class='test e'></div><div class='test'></div>";
if(m.getElementsByClassName("e").length===0){return 
}m.lastChild.className="e";
if(m.getElementsByClassName("e").length===1){return 
}g.order.splice(1,0,"CLASS");
g.find.CLASS=function(q,p,o){if(typeof p.getElementsByClassName!=="undefined"&&!o){return p.getElementsByClassName(q[1])
}}
})()
}function D(v,o,p,z,m,AI){var AJ=v=="previousSibling"&&!AI;
for(var r=0,u=z.length;
r<u;
r++){var y=z[r];
if(y){if(AJ&&y.nodeType===1){y.sizcache=p;
y.sizset=r
}y=y[v];
var q=false;
while(y){if(y.sizcache===p){q=z[y.sizset];
break
}if(y.nodeType===1&&!AI){y.sizcache=p;
y.sizset=r
}if(y.nodeName===o){q=y;
break
}y=y[v]
}z[r]=q
}}}function A(v,o,p,z,m,AI){var AJ=v=="previousSibling"&&!AI;
for(var r=0,u=z.length;
r<u;
r++){var y=z[r];
if(y){if(AJ&&y.nodeType===1){y.sizcache=p;
y.sizset=r
}y=y[v];
var q=false;
while(y){if(y.sizcache===p){q=z[y.sizset];
break
}if(y.nodeType===1){if(!AI){y.sizcache=p;
y.sizset=r
}if(typeof o!=="string"){if(y===o){q=true;
break
}}else{if(k.filter(o,[y]).length>0){q=y;
break
}}}y=y[v]
}z[r]=q
}}}var e=document.compareDocumentPosition?function(m,o){return m.compareDocumentPosition(o)&16
}:function(m,o){return m!==o&&(m.contains?m.contains(o):true)
};
var C=function(m){return m.nodeType===9&&m.documentElement.nodeName!=="HTML"||!!m.ownerDocument&&C(m.ownerDocument)
};
var f=function(q,u){var m=[],y="",v,o=u.nodeType?[u]:u;
while((v=g.match.PSEUDO.exec(q))){y+=v[0];
q=q.replace(g.match.PSEUDO,"")
}q=g.relative[q]?q+"*":q;
for(var r=0,p=o.length;
r<p;
r++){k(q,o[r],m)
}return k.filter(y,m)
};
T.find=k;
T.filter=k.filter;
T.expr=k.selectors;
T.expr[":"]=T.expr.filters;
k.selectors.filters.hidden=function(m){return m.offsetWidth===0||m.offsetHeight===0
};
k.selectors.filters.visible=function(m){return m.offsetWidth>0||m.offsetHeight>0
};
k.selectors.filters.animated=function(m){return T.grep(T.timers,function(o){return m===o.elem
}).length
};
T.multiFilter=function(m,p,o){if(o){m=":not("+m+")"
}return k.matches(m,p)
};
T.dir=function(o,p){var q=[],m=o[p];
while(m&&m!=document){if(m.nodeType==1){q.push(m)
}m=m[p]
}return q
};
T.nth=function(r,q,o,m){q=q||1;
var p=0;
for(;
r;
r=r[o]){if(r.nodeType==1&&++p==q){break
}}return r
};
T.sibling=function(m,o){var p=[];
for(;
m;
m=m.nextSibling){if(m.nodeType==1&&m!=o){p.push(m)
}}return p
};
return ;
W.Sizzle=k
})();
T.event={add:function(C,b,D,A){if(C.nodeType==3||C.nodeType==8){return 
}if(C.setInterval&&C!=W){C=W
}if(!D.guid){D.guid=this.guid++
}if(A!==AB){var a=D;
D=this.proxy(a);
D.data=A
}var c=T.data(C,"events")||T.data(C,"events",{}),B=T.data(C,"handle")||T.data(C,"handle",function(){return typeof T!=="undefined"&&!T.event.triggered?T.event.handle.apply(arguments.callee.elem,arguments):AB
});
B.elem=C;
T.each(b.split(/\s+/),function(g,f){var e=f.split(".");
f=e.shift();
D.type=e.slice().sort().join(".");
var d=c[f];
if(T.event.specialAll[f]){T.event.specialAll[f].setup.call(C,A,e)
}if(!d){d=c[f]={};
if(!T.event.special[f]||T.event.special[f].setup.call(C,A,e)===false){if(C.addEventListener){C.addEventListener(f,B,false)
}else{if(C.attachEvent){C.attachEvent("on"+f,B)
}}}}d[D.guid]=D;
T.event.global[f]=true
});
C=null
},guid:1,global:{},remove:function(B,a,C){if(B.nodeType==3||B.nodeType==8){return 
}var b=T.data(B,"events"),c,d;
if(b){if(a===AB||(typeof a==="string"&&a.charAt(0)==".")){for(var D in b){this.remove(B,D+(a||""))
}}else{if(a.type){C=a.handler;
a=a.type
}T.each(a.split(/\s+/),function(j,g){var e=g.split(".");
g=e.shift();
var h=RegExp("(^|\\.)"+e.slice().sort().join(".*\\.")+"(\\.|$)");
if(b[g]){if(C){delete b[g][C.guid]
}else{for(var f in b[g]){if(h.test(b[g][f].type)){delete b[g][f]
}}}if(T.event.specialAll[g]){T.event.specialAll[g].teardown.call(B,e)
}for(c in b[g]){break
}if(!c){if(!T.event.special[g]||T.event.special[g].teardown.call(B,e)===false){if(B.removeEventListener){B.removeEventListener(g,T.data(B,"handle"),false)
}else{if(B.detachEvent){B.detachEvent("on"+g,T.data(B,"handle"))
}}}c=null;
delete b[g]
}}})
}for(c in b){break
}if(!c){var A=T.data(B,"handle");
if(A){A.elem=null
}T.removeData(B,"events");
T.removeData(B,"handle")
}}},trigger:function(D,B,a,d){var b=D.type||D;
if(!d){D=typeof D==="object"?D[AA]?D:T.extend(T.Event(b),D):T.Event(b);
if(b.indexOf("!")>=0){D.type=b=b.slice(0,-1);
D.exclusive=true
}if(!a){D.stopPropagation();
if(this.global[b]){T.each(T.cache,function(){if(this.events&&this.events[b]){T.event.trigger(D,B,this.handle.elem)
}})
}}if(!a||a.nodeType==3||a.nodeType==8){return AB
}D.result=AB;
D.target=a;
B=T.makeArray(B);
B.unshift(D)
}D.currentTarget=a;
var C=T.data(a,"handle");
if(C){C.apply(a,B)
}if((!a[b]||(T.nodeName(a,"a")&&b=="click"))&&a["on"+b]&&a["on"+b].apply(a,B)===false){D.result=false
}if(!d&&a[b]&&!D.isDefaultPrevented()&&!(T.nodeName(a,"a")&&b=="click")){this.triggered=true;
try{a[b]()
}catch(A){}}this.triggered=false;
if(!D.isPropagationStopped()){var c=a.parentNode||a.ownerDocument;
if(c){T.event.trigger(D,B,c,true)
}}},handle:function(B){var C,d;
B=arguments[0]=T.event.fix(B||W.event);
B.currentTarget=this;
var A=B.type.split(".");
B.type=A.shift();
C=!A.length&&!B.exclusive;
var D=RegExp("(^|\\.)"+A.slice().sort().join(".*\\.")+"(\\.|$)");
d=(T.data(this,"events")||{})[B.type];
for(var b in d){var a=d[b];
if(C||D.test(a.type)){B.handler=a;
B.data=a.data;
var c=a.apply(this,arguments);
if(c!==AB){B.result=c;
if(c===false){B.preventDefault();
B.stopPropagation()
}}if(B.isImmediatePropagationStopped()){break
}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(C){if(C[AA]){return C
}var a=C;
C=T.Event(a);
for(var D=this.props.length,A;
D;
){A=this.props[--D];
C[A]=a[A]
}if(!C.target){C.target=C.srcElement||document
}if(C.target.nodeType==3){C.target=C.target.parentNode
}if(!C.relatedTarget&&C.fromElement){C.relatedTarget=C.fromElement==C.target?C.toElement:C.fromElement
}if(C.pageX==null&&C.clientX!=null){var B=document.documentElement,b=document.body;
C.pageX=C.clientX+(B&&B.scrollLeft||b&&b.scrollLeft||0)-(B.clientLeft||0);
C.pageY=C.clientY+(B&&B.scrollTop||b&&b.scrollTop||0)-(B.clientTop||0)
}if(!C.which&&((C.charCode||C.charCode===0)?C.charCode:C.keyCode)){C.which=C.charCode||C.keyCode
}if(!C.metaKey&&C.ctrlKey){C.metaKey=C.ctrlKey
}if(!C.which&&C.button){C.which=(C.button&1?1:(C.button&2?3:(C.button&4?2:0)))
}return C
},proxy:function(A,B){B=B||function(){return A.apply(this,arguments)
};
B.guid=A.guid=A.guid||B.guid||this.guid++;
return B
},special:{ready:{setup:P,teardown:function(){}}},specialAll:{live:{setup:function(B,A){T.event.add(this,A[0],AF)
},teardown:function(A){if(A.length){var C=0,B=RegExp("(^|\\.)"+A[0]+"(\\.|$)");
T.each((T.data(this,"events").live||{}),function(){if(B.test(this.type)){C++
}});
if(C<1){T.event.remove(this,A[0],AF)
}}}}}};
T.Event=function(A){if(!this.preventDefault){return new T.Event(A)
}if(A&&A.type){this.originalEvent=A;
this.type=A.type
}else{this.type=A
}this.timeStamp=AD();
this[AA]=true
};
function X(){return false
}function J(){return true
}T.Event.prototype={preventDefault:function(){this.isDefaultPrevented=J;
var A=this.originalEvent;
if(!A){return 
}if(A.preventDefault){A.preventDefault()
}A.returnValue=false
},stopPropagation:function(){this.isPropagationStopped=J;
var A=this.originalEvent;
if(!A){return 
}if(A.stopPropagation){A.stopPropagation()
}A.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=J;
this.stopPropagation()
},isDefaultPrevented:X,isPropagationStopped:X,isImmediatePropagationStopped:X};
var AH=function(B){var C=B.relatedTarget;
while(C&&C!=this){try{C=C.parentNode
}catch(A){C=this
}}if(C!=this){B.type=B.data;
T.event.handle.apply(this,arguments)
}};
T.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(A,B){T.event.special[B]={setup:function(){T.event.add(this,A,AH,B)
},teardown:function(){T.event.remove(this,A,AH)
}}
});
T.fn.extend({bind:function(B,A,C){return B=="unload"?this.one(B,A,C):this.each(function(){T.event.add(this,B,C||A,C&&A)
})
},one:function(B,A,C){var D=T.event.proxy(C||A,function(a){T(this).unbind(a,D);
return(C||A).apply(this,arguments)
});
return this.each(function(){T.event.add(this,B,D,C&&A)
})
},unbind:function(A,B){return this.each(function(){T.event.remove(this,A,B)
})
},trigger:function(B,A){return this.each(function(){T.event.trigger(B,A,this)
})
},triggerHandler:function(C,A){if(this[0]){var B=T.Event(C);
B.preventDefault();
B.stopPropagation();
T.event.trigger(B,A,this[0]);
return B.result
}},toggle:function(A){var C=arguments,B=1;
while(B<C.length){T.event.proxy(A,C[B++])
}return this.click(T.event.proxy(A,function(D){this.lastToggle=(this.lastToggle||0)%B;
D.preventDefault();
return C[this.lastToggle++].apply(this,arguments)||false
}))
},hover:function(B,A){return this.mouseenter(B).mouseleave(A)
},ready:function(A){P();
if(T.isReady){A.call(document,T)
}else{T.readyList.push(A)
}return this
},live:function(A,B){var C=T.event.proxy(B);
C.guid+=this.selector+A;
T(document).bind(Z(A,this.selector),this.selector,C);
return this
},die:function(A,B){T(document).unbind(Z(A,this.selector),B?{guid:B.guid+this.selector+A}:null);
return this
}});
function AF(A){var D=RegExp("(^|\\.)"+A.type+"(\\.|$)"),B=true,C=[];
T.each(T.data(this,"events").live||[],function(c,b){if(D.test(b.type)){var a=T(A.target).closest(b.data)[0];
if(a){C.push({elem:a,fn:b})
}}});
C.sort(function(a,b){return T.data(a.elem,"closest")-T.data(b.elem,"closest")
});
T.each(C,function(){if(this.fn.call(this.elem,A,this.fn.data)===false){return(B=false)
}});
return B
}function Z(A,B){return["live",A,B.replace(/\./g,"`").replace(/ /g,"|")].join(".")
}T.extend({isReady:false,readyList:[],ready:function(){if(!T.isReady){T.isReady=true;
if(T.readyList){T.each(T.readyList,function(){this.call(document,T)
});
T.readyList=null
}T(document).triggerHandler("ready")
}}});
var G=false;
function P(){if(G){return 
}G=true;
if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);
T.ready()
},false)
}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);
T.ready()
}});
if(document.documentElement.doScroll&&W==W.top){(function(){if(T.isReady){return 
}try{document.documentElement.doScroll("left")
}catch(A){setTimeout(arguments.callee,0);
return 
}T.ready()
})()
}}}T.event.add(W,"load",T.ready)
}T.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(A,B){T.fn[B]=function(C){return C?this.bind(B,C):this.trigger(B)
}
});
T(W).bind("unload",function(){for(var A in T.cache){if(A!=1&&T.cache[A].handle){T.event.remove(T.cache[A].handle.elem)
}}});
(function(){T.support={};
var b=document.documentElement,a=document.createElement("script"),A=document.createElement("div"),B="script"+(new Date).getTime();
A.style.display="none";
A.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';
var D=A.getElementsByTagName("*"),c=A.getElementsByTagName("a")[0];
if(!D||!D.length||!c){return 
}T.support={leadingWhitespace:A.firstChild.nodeType==3,tbody:!A.getElementsByTagName("tbody").length,objectAll:!!A.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!A.getElementsByTagName("link").length,style:/red/.test(c.getAttribute("style")),hrefNormalized:c.getAttribute("href")==="/a",opacity:c.style.opacity==="0.5",cssFloat:!!c.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};
a.type="text/javascript";
try{a.appendChild(document.createTextNode("window."+B+"=1;"))
}catch(C){}b.insertBefore(a,b.firstChild);
if(W[B]){T.support.scriptEval=true;
delete W[B]
}b.removeChild(a);
if(A.attachEvent&&A.fireEvent){A.attachEvent("onclick",function(){T.support.noCloneEvent=false;
A.detachEvent("onclick",arguments.callee)
});
A.cloneNode(true).fireEvent("onclick")
}T(function(){var d=document.createElement("div");
d.style.width=d.style.paddingLeft="1px";
document.body.appendChild(d);
T.boxModel=T.support.boxModel=d.offsetWidth===2;
document.body.removeChild(d).style.display="none"
})
})();
var H=T.support.cssFloat?"cssFloat":"styleFloat";
T.props={"for":"htmlFor","class":"className","float":H,cssFloat:H,styleFloat:H,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};
T.fn.extend({_load:T.fn.load,load:function(a,B,A){if(typeof a!=="string"){return this._load(a)
}var C=a.indexOf(" ");
if(C>=0){var c=a.slice(C,a.length);
a=a.slice(0,C)
}var D="GET";
if(B){if(T.isFunction(B)){A=B;
B=null
}else{if(typeof B==="object"){B=T.param(B);
D="POST"
}}}var b=this;
T.ajax({url:a,type:D,dataType:"html",data:B,complete:function(e,d){if(d=="success"||d=="notmodified"){b.html(c?T("<div/>").append(e.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(c):e.responseText)
}if(A){b.each(A,[e.responseText,d,e])
}}});
return this
},serialize:function(){return T.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?T.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))
}).map(function(C,B){var A=T(this).val();
return A==null?null:T.isArray(A)?T.map(A,function(D,a){return{name:B.name,value:D}
}):{name:B.name,value:A}
}).get()
}});
T.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(B,A){T.fn[A]=function(C){return this.bind(A,C)
}
});
var N=AD();
T.extend({get:function(D,B,A,C){if(T.isFunction(B)){A=B;
B=null
}return T.ajax({type:"GET",url:D,data:B,success:A,dataType:C})
},getScript:function(B,A){return T.get(B,null,A,"script")
},getJSON:function(C,B,A){return T.get(C,B,A,"json")
},post:function(D,B,A,C){if(T.isFunction(B)){A=B;
B={}
}return T.ajax({type:"POST",url:D,data:B,success:A,dataType:C})
},ajaxSetup:function(A){T.extend(T.ajaxSettings,A)
},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return W.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()
},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(g){g=T.extend(true,g,T.extend(true,{},T.ajaxSettings,g));
var A,p=/=\?(&|$)/g,b,B,o=g.type.toUpperCase();
if(g.data&&g.processData&&typeof g.data!=="string"){g.data=T.param(g.data)
}if(g.dataType=="jsonp"){if(o=="GET"){if(!g.url.match(p)){g.url+=(g.url.match(/\?/)?"&":"?")+(g.jsonp||"callback")+"=?"
}}else{if(!g.data||!g.data.match(p)){g.data=(g.data?g.data+"&":"")+(g.jsonp||"callback")+"=?"
}}g.dataType="json"
}if(g.dataType=="json"&&(g.data&&g.data.match(p)||g.url.match(p))){A="jsonp"+N++;
if(g.data){g.data=(g.data+"").replace(p,"="+A+"$1")
}g.url=g.url.replace(p,"="+A+"$1");
g.dataType="script";
W[A]=function(u){B=u;
l();
h();
W[A]=AB;
try{delete W[A]
}catch(r){}if(m){m.removeChild(D)
}}
}if(g.dataType=="script"&&g.cache==null){g.cache=false
}if(g.cache===false&&o=="GET"){var q=AD();
var C=g.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+q+"$2");
g.url=C+((C==g.url)?(g.url.match(/\?/)?"&":"?")+"_="+q:"")
}if(g.data&&o=="GET"){g.url+=(g.url.match(/\?/)?"&":"?")+g.data;
g.data=null
}if(g.global&&!T.active++){T.event.trigger("ajaxStart")
}var c=/^(\w+:)?\/\/([^\/?#]+)/.exec(g.url);
if(g.dataType=="script"&&o=="GET"&&c&&(c[1]&&c[1]!=location.protocol||c[2]!=location.host)){var m=document.getElementsByTagName("head")[0];
var D=document.createElement("script");
D.src=g.url;
if(g.scriptCharset){D.charset=g.scriptCharset
}if(!A){var e=false;
D.onload=D.onreadystatechange=function(){if(!e&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){e=true;
l();
h();
D.onload=D.onreadystatechange=null;
m.removeChild(D)
}}
}m.appendChild(D);
return AB
}var j=false;
var k=g.xhr();
if(g.username){k.open(o,g.url,g.async,g.username,g.password)
}else{k.open(o,g.url,g.async)
}try{if(g.data){k.setRequestHeader("Content-Type",g.contentType)
}if(g.ifModified){k.setRequestHeader("If-Modified-Since",T.lastModified[g.url]||"Thu, 01 Jan 1970 00:00:00 GMT")
}k.setRequestHeader("X-Requested-With","XMLHttpRequest");
k.setRequestHeader("Accept",g.dataType&&g.accepts[g.dataType]?g.accepts[g.dataType]+", */*":g.accepts._default)
}catch(a){}if(g.beforeSend&&g.beforeSend(k,g)===false){if(g.global&&!--T.active){T.event.trigger("ajaxStop")
}k.abort();
return false
}if(g.global){T.event.trigger("ajaxSend",[k,g])
}var f=function(v){if(k.readyState==0){if(d){clearInterval(d);
d=null;
if(g.global&&!--T.active){T.event.trigger("ajaxStop")
}}}else{if(!j&&k&&(k.readyState==4||v=="timeout")){j=true;
if(d){clearInterval(d);
d=null
}b=v=="timeout"?"timeout":!T.httpSuccess(k)?"error":g.ifModified&&T.httpNotModified(k,g.url)?"notmodified":"success";
if(b=="success"){try{B=T.httpData(k,g.dataType,g)
}catch(r){b="parsererror"
}}if(b=="success"){var u;
try{u=k.getResponseHeader("Last-Modified")
}catch(r){}if(g.ifModified&&u){T.lastModified[g.url]=u
}if(!A){l()
}}else{T.handleError(g,k,b)
}h();
if(v){k.abort()
}if(g.async){k=null
}}}};
if(g.async){var d=setInterval(f,13);
if(g.timeout>0){setTimeout(function(){if(k&&!j){f("timeout")
}},g.timeout)
}}try{k.send(g.data)
}catch(a){T.handleError(g,k,null,a)
}if(!g.async){f()
}function l(){if(g.success){g.success(B,b)
}if(g.global){T.event.trigger("ajaxSuccess",[k,g])
}}function h(){if(g.complete){g.complete(k,b)
}if(g.global){T.event.trigger("ajaxComplete",[k,g])
}if(g.global&&!--T.active){T.event.trigger("ajaxStop")
}}return k
},handleError:function(C,A,D,B){if(C.error){C.error(A,D,B)
}if(C.global){T.event.trigger("ajaxError",[A,C,B])
}},active:0,httpSuccess:function(A){try{return !A.status&&location.protocol=="file:"||(A.status>=200&&A.status<300)||A.status==304||A.status==1223
}catch(B){}return false
},httpNotModified:function(B,D){try{var A=B.getResponseHeader("Last-Modified");
return B.status==304||A==T.lastModified[D]
}catch(C){}return false
},httpData:function(A,C,D){var a=A.getResponseHeader("content-type"),b=C=="xml"||!C&&a&&a.indexOf("xml")>=0,B=b?A.responseXML:A.responseText;
if(b&&B.documentElement.tagName=="parsererror"){throw"parsererror"
}if(D&&D.dataFilter){B=D.dataFilter(B,C)
}if(typeof B==="string"){if(C=="script"){T.globalEval(B)
}if(C=="json"){B=W["eval"]("("+B+")")
}}return B
},param:function(D){var B=[];
function A(b,a){B[B.length]=encodeURIComponent(b)+"="+encodeURIComponent(a)
}if(T.isArray(D)||D.jquery){T.each(D,function(){A(this.name,this.value)
})
}else{for(var C in D){if(T.isArray(D[C])){T.each(D[C],function(){A(C,this)
})
}else{A(C,T.isFunction(D[C])?D[C]():D[C])
}}}return B.join("&").replace(/%20/g,"+")
}});
var V={},U,AE=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
function K(B,C){var A={};
T.each(AE.concat.apply([],AE.slice(0,C)),function(){A[this]=B
});
return A
}T.fn.extend({show:function(C,A){if(C){return this.animate(K("show",3),C,A)
}else{for(var a=0,c=this.length;
a<c;
a++){var d=T.data(this[a],"olddisplay");
this[a].style.display=d||"";
if(T.css(this[a],"display")==="none"){var b=this[a].tagName,B;
if(V[b]){B=V[b]
}else{var D=T("<"+b+" />").appendTo("body");
B=D.css("display");
if(B==="none"){B="block"
}D.remove();
V[b]=B
}T.data(this[a],"olddisplay",B)
}}for(var a=0,c=this.length;
a<c;
a++){this[a].style.display=T.data(this[a],"olddisplay")||""
}return this
}},hide:function(B,A){if(B){return this.animate(K("hide",3),B,A)
}else{for(var C=0,D=this.length;
C<D;
C++){var a=T.data(this[C],"olddisplay");
if(!a&&a!=="none"){T.data(this[C],"olddisplay",T.css(this[C],"display"))
}}for(var C=0,D=this.length;
C<D;
C++){this[C].style.display="none"
}return this
}},_toggle:T.fn.toggle,toggle:function(A,B){var C=typeof A==="boolean";
return T.isFunction(A)&&T.isFunction(B)?this._toggle.apply(this,arguments):A==null||C?this.each(function(){var D=C?A:T(this).is(":hidden");
T(this)[D?"show":"hide"]()
}):this.animate(K("toggle",3),A,B)
},fadeTo:function(C,A,B){return this.animate({opacity:A},C,B)
},animate:function(A,D,B,C){var a=T.speed(D,B,C);
return this[a.queue===false?"each":"queue"](function(){var c=T.extend({},a),e,b=this.nodeType==1&&T(this).is(":hidden"),d=this;
for(e in A){if(A[e]=="hide"&&b||A[e]=="show"&&!b){return c.complete.call(this)
}if((e=="height"||e=="width")&&this.style){c.display=T.css(this,"display");
c.overflow=this.style.overflow
}}if(c.overflow!=null){this.style.overflow="hidden"
}c.curAnim=T.extend({},A);
T.each(A,function(l,g){var h=new T.fx(d,c,l);
if(/toggle|show|hide/.test(g)){h[g=="toggle"?b?"show":"hide":g](A)
}else{var j=g.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),f=h.cur(true)||0;
if(j){var m=parseFloat(j[2]),k=j[3]||"px";
if(k!="px"){d.style[l]=(m||1)+k;
f=((m||1)/h.cur(true))*f;
d.style[l]=f+k
}if(j[1]){m=((j[1]=="-="?-1:1)*m)+f
}h.custom(f,m,k)
}else{h.custom(f,g,"")
}}});
return true
})
},stop:function(B,C){var A=T.timers;
if(B){this.queue([])
}this.each(function(){for(var D=A.length-1;
D>=0;
D--){if(A[D].elem==this){if(C){A[D](true)
}A.splice(D,1)
}}});
if(!C){this.dequeue()
}return this
}});
T.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(B,A){T.fn[B]=function(D,C){return this.animate(A,D,C)
}
});
T.extend({speed:function(B,A,C){var D=typeof B==="object"?B:{complete:C||!C&&A||T.isFunction(B)&&B,duration:B,easing:C&&A||A&&!T.isFunction(A)&&A};
D.duration=T.fx.off?0:typeof D.duration==="number"?D.duration:T.fx.speeds[D.duration]||T.fx.speeds._default;
D.old=D.complete;
D.complete=function(){if(D.queue!==false){T(this).dequeue()
}if(T.isFunction(D.old)){D.old.call(this)
}};
return D
},easing:{linear:function(B,A,D,C){return D+C*B
},swing:function(B,A,D,C){return((-Math.cos(B*Math.PI)/2)+0.5)*C+D
}},timers:[],fx:function(B,C,A){this.options=C;
this.elem=B;
this.prop=A;
if(!C.orig){C.orig={}
}}});
T.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)
}(T.fx.step[this.prop]||T.fx.step._default)(this);
if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"
}},cur:function(A){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var B=parseFloat(T.css(this.elem,this.prop,A));
return B&&B>-10000?B:parseFloat(T.curCSS(this.elem,this.prop))||0
},custom:function(A,B,C){this.startTime=AD();
this.start=A;
this.end=B;
this.unit=C||this.unit||"px";
this.now=this.start;
this.pos=this.state=0;
var a=this;
function D(b){return a.step(b)
}D.elem=this.elem;
if(D()&&T.timers.push(D)&&!U){U=setInterval(function(){var b=T.timers;
for(var c=0;
c<b.length;
c++){if(!b[c]()){b.splice(c--,1)
}}if(!b.length){clearInterval(U);
U=AB
}},13)
}},show:function(){this.options.orig[this.prop]=T.attr(this.elem.style,this.prop);
this.options.show=true;
this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());
T(this.elem).show()
},hide:function(){this.options.orig[this.prop]=T.attr(this.elem.style,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)
},step:function(C){var D=AD();
if(C||D>=this.options.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
var b=true;
for(var a in this.options.curAnim){if(this.options.curAnim[a]!==true){b=false
}}if(b){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;
this.elem.style.display=this.options.display;
if(T.css(this.elem,"display")=="none"){this.elem.style.display="block"
}}if(this.options.hide){T(this.elem).hide()
}if(this.options.hide||this.options.show){for(var B in this.options.curAnim){T.attr(this.elem.style,B,this.options.orig[B])
}}this.options.complete.call(this.elem)
}return false
}else{var A=D-this.startTime;
this.state=A/this.options.duration;
this.pos=T.easing[this.options.easing||(T.easing.swing?"swing":"linear")](this.state,A,0,1,this.options.duration);
this.now=this.start+((this.end-this.start)*this.pos);
this.update()
}return true
}};
T.extend(T.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(A){T.attr(A.elem.style,"opacity",A.now)
},_default:function(A){if(A.elem.style&&A.elem.style[A.prop]!=null){A.elem.style[A.prop]=A.now+A.unit
}else{A.elem[A.prop]=A.now
}}}});
if(document.documentElement.getBoundingClientRect){T.fn.offset=function(){if(!this[0]){return{top:0,left:0}
}if(this[0]===this[0].ownerDocument.body){return T.offset.bodyOffset(this[0])
}var b=this[0].getBoundingClientRect(),C=this[0].ownerDocument,c=C.body,d=C.documentElement,A=d.clientTop||c.clientTop||0,B=d.clientLeft||c.clientLeft||0,D=b.top+(self.pageYOffset||T.boxModel&&d.scrollTop||c.scrollTop)-A,a=b.left+(self.pageXOffset||T.boxModel&&d.scrollLeft||c.scrollLeft)-B;
return{top:D,left:a}
}
}else{T.fn.offset=function(){if(!this[0]){return{top:0,left:0}
}if(this[0]===this[0].ownerDocument.body){return T.offset.bodyOffset(this[0])
}T.offset.initialized||T.offset.initialize();
var b=this[0],e=b.offsetParent,f=b,A=b.ownerDocument,C,d=A.documentElement,a=A.body,D=A.defaultView,g=D.getComputedStyle(b,null),B=b.offsetTop,c=b.offsetLeft;
while((b=b.parentNode)&&b!==a&&b!==d){C=D.getComputedStyle(b,null);
B-=b.scrollTop,c-=b.scrollLeft;
if(b===e){B+=b.offsetTop,c+=b.offsetLeft;
if(T.offset.doesNotAddBorder&&!(T.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.tagName))){B+=parseInt(C.borderTopWidth,10)||0,c+=parseInt(C.borderLeftWidth,10)||0
}f=e,e=b.offsetParent
}if(T.offset.subtractsBorderForOverflowNotVisible&&C.overflow!=="visible"){B+=parseInt(C.borderTopWidth,10)||0,c+=parseInt(C.borderLeftWidth,10)||0
}g=C
}if(g.position==="relative"||g.position==="static"){B+=a.offsetTop,c+=a.offsetLeft
}if(g.position==="fixed"){B+=Math.max(d.scrollTop,a.scrollTop),c+=Math.max(d.scrollLeft,a.scrollLeft)
}return{top:B,left:c}
}
}T.offset={initialize:function(){if(this.initialized){return 
}var C=document.body,e=document.createElement("div"),c,d,A,b,B,f,a=C.style.marginTop,D='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
B={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};
for(f in B){e.style[f]=B[f]
}e.innerHTML=D;
C.insertBefore(e,C.firstChild);
c=e.firstChild,d=c.firstChild,b=c.nextSibling.firstChild.firstChild;
this.doesNotAddBorder=(d.offsetTop!==5);
this.doesAddBorderForTableAndCells=(b.offsetTop===5);
c.style.overflow="hidden",c.style.position="relative";
this.subtractsBorderForOverflowNotVisible=(d.offsetTop===-5);
C.style.marginTop="1px";
this.doesNotIncludeMarginInBodyOffset=(C.offsetTop===0);
C.style.marginTop=a;
C.removeChild(e);
this.initialized=true
},bodyOffset:function(C){T.offset.initialized||T.offset.initialize();
var A=C.offsetTop,B=C.offsetLeft;
if(T.offset.doesNotIncludeMarginInBodyOffset){A+=parseInt(T.curCSS(C,"marginTop",true),10)||0,B+=parseInt(T.curCSS(C,"marginLeft",true),10)||0
}return{top:A,left:B}
}};
T.fn.extend({position:function(){var B=0,C=0,a;
if(this[0]){var D=this.offsetParent(),A=this.offset(),b=/^body|html$/i.test(D[0].tagName)?{top:0,left:0}:D.offset();
A.top-=Y(this,"marginTop");
A.left-=Y(this,"marginLeft");
b.top+=Y(D,"borderTopWidth");
b.left+=Y(D,"borderLeftWidth");
a={top:A.top-b.top,left:A.left-b.left}
}return a
},offsetParent:function(){var A=this[0].offsetParent||document.body;
while(A&&(!/^body|html$/i.test(A.tagName)&&T.css(A,"position")=="static")){A=A.offsetParent
}return T(A)
}});
T.each(["Left","Top"],function(B,C){var A="scroll"+C;
T.fn[A]=function(D){if(!this[0]){return null
}return D!==AB?this.each(function(){this==W||this==document?W.scrollTo(!B?D:T(W).scrollLeft(),B?D:T(W).scrollTop()):this[A]=D
}):this[0]==W||this[0]==document?self[B?"pageYOffset":"pageXOffset"]||T.boxModel&&document.documentElement[A]||document.body[A]:this[0][A]
}
});
T.each(["Height","Width"],function(B,D){var b=B?"Left":"Top",C=B?"Right":"Bottom",a=D.toLowerCase();
T.fn["inner"+D]=function(){return this[0]?T.css(this[0],a,false,"padding"):null
};
T.fn["outer"+D]=function(c){return this[0]?T.css(this[0],a,false,c?"margin":"border"):null
};
var A=D.toLowerCase();
T.fn[A]=function(c){return this[0]==W?document.compatMode=="CSS1Compat"&&document.documentElement["client"+D]||document.body["client"+D]:this[0]==document?Math.max(document.documentElement["client"+D],document.body["scroll"+D],document.documentElement["scroll"+D],document.body["offset"+D],document.documentElement["offset"+D]):c===AB?(this.length?T.css(this[0],A):null):this.css(A,typeof c==="string"?c:c+"px")
}
})
})();
jQuery.ui||(function(G){var A=G.fn.remove,F=G.browser.mozilla&&(parseFloat(G.browser.version)<1.9);
G.ui={version:"1.7.2",plugin:{add:function(L,K,N){var J=G.ui[L].prototype;
for(var M in N){J.plugins[M]=J.plugins[M]||[];
J.plugins[M].push([K,N[M]])
}},call:function(M,K,L){var N=M.plugins[K];
if(!N||!M.element[0].parentNode){return 
}for(var J=0;
J<N.length;
J++){if(M.options[N[J][0]]){N[J][1].apply(M.element,L)
}}}},contains:function(J,K){return document.compareDocumentPosition?J.compareDocumentPosition(K)&16:J!==K&&J.contains(K)
},hasScroll:function(J,L){if(G(J).css("overflow")=="hidden"){return false
}var M=(L&&L=="left")?"scrollLeft":"scrollTop",K=false;
if(J[M]>0){return true
}J[M]=1;
K=(J[M]>0);
J[M]=0;
return K
},isOverAxis:function(K,L,J){return(K>L)&&(K<(L+J))
},isOver:function(N,L,O,J,M,K){return G.ui.isOverAxis(N,O,M)&&G.ui.isOverAxis(L,J,K)
},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};
if(F){var D=G.attr,E=G.fn.removeAttr,B="http://www.w3.org/2005/07/aaa",I=/^aria-/,H=/^wairole:/;
G.attr=function(L,M,K){var J=K!==undefined;
return(M=="role"?(J?D.call(this,L,M,"wairole:"+K):(D.apply(this,arguments)||"").replace(H,"")):(I.test(M)?(J?L.setAttributeNS(B,M.replace(I,"aaa:"),K):D.call(this,L,M.replace(I,"aaa:"))):D.apply(this,arguments)))
};
G.fn.removeAttr=function(J){return(I.test(J)?this.each(function(){this.removeAttributeNS(B,J.replace(I,""))
}):E.call(this,J))
}
}G.fn.extend({remove:function(){G("*",this).add(this).each(function(){G(this).triggerHandler("remove")
});
return A.apply(this,arguments)
},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")
},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false
})
},scrollParent:function(){var J;
if((G.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){J=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(G.curCSS(this,"position",1))&&(/(auto|scroll)/).test(G.curCSS(this,"overflow",1)+G.curCSS(this,"overflow-y",1)+G.curCSS(this,"overflow-x",1))
}).eq(0)
}else{J=this.parents().filter(function(){return(/(auto|scroll)/).test(G.curCSS(this,"overflow",1)+G.curCSS(this,"overflow-y",1)+G.curCSS(this,"overflow-x",1))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!J.length?G(document):J
}});
G.extend(G.expr[":"],{data:function(J,K,L){return !!G.data(J,L[3])
},focusable:function(K){var J=K.nodeName.toLowerCase(),L=G.attr(K,"tabindex");
return(/input|select|textarea|button|object/.test(J)?!K.disabled:"a"==J||"area"==J?K.href||!isNaN(L):!isNaN(L))&&!G(K)["area"==J?"parents":"closest"](":hidden").length
},tabbable:function(J){var K=G.attr(J,"tabindex");
return(isNaN(K)||K>=0)&&G(J).is(":focusable")
}});
function C(J,O,N,K){function L(P){var Q=G[J][O][P]||[];
return(typeof Q=="string"?Q.split(/,?\s+/):Q)
}var M=L("getter");
if(K.length==1&&typeof K[0]=="string"){M=M.concat(L("getterSetter"))
}return(G.inArray(N,M)!=-1)
}G.widget=function(K,L){var J=K.split(".")[0];
K=K.split(".")[1];
G.fn[K]=function(N){var P=(typeof N=="string"),O=Array.prototype.slice.call(arguments,1);
if(P&&N.substring(0,1)=="_"){return this
}if(P&&C(J,K,N,O)){var M=G.data(this[0],K);
return(M?M[N].apply(M,O):undefined)
}return this.each(function(){var Q=G.data(this,K);
(!Q&&!P&&G.data(this,K,new G[J][K](this,N))._init());
(Q&&P&&G.isFunction(Q[N])&&Q[N].apply(Q,O))
})
};
G[J]=G[J]||{};
G[J][K]=function(N,O){var M=this;
this.namespace=J;
this.widgetName=K;
this.widgetEventPrefix=G[J][K].eventPrefix||K;
this.widgetBaseClass=J+"-"+K;
this.options=G.extend({},G.widget.defaults,G[J][K].defaults,G.metadata&&G.metadata.get(N)[K],O);
this.element=G(N).bind("setData."+K,function(Q,R,P){if(Q.target==N){return M._setData(R,P)
}}).bind("getData."+K,function(P,Q){if(P.target==N){return M._getData(Q)
}}).bind("remove",function(){return M.destroy()
})
};
G[J][K].prototype=G.extend({},G.widget.prototype,L);
G[J][K].getterSetter="option"
};
G.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")
},option:function(K,J){var L=K,M=this;
if(typeof K=="string"){if(J===undefined){return this._getData(K)
}L={};
L[K]=J
}G.each(L,function(O,N){M._setData(O,N)
})
},_getData:function(J){return this.options[J]
},_setData:function(K,J){this.options[K]=J;
if(K=="disabled"){this.element[J?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",J)
}},enable:function(){this._setData("disabled",false)
},disable:function(){this._setData("disabled",true)
},_trigger:function(K,J,P){var N=this.options[K],M=(K==this.widgetEventPrefix?K:this.widgetEventPrefix+K);
J=G.Event(J);
J.type=M;
if(J.originalEvent){for(var L=G.event.props.length,O;
L;
){O=G.event.props[--L];
J[O]=J.originalEvent[O]
}}this.element.trigger(J,P);
return !(G.isFunction(N)&&N.call(this.element[0],J,P)===false||J.isDefaultPrevented())
}};
G.widget.defaults={disabled:false};
G.ui.mouse={_mouseInit:function(){var J=this;
this.element.bind("mousedown."+this.widgetName,function(K){return J._mouseDown(K)
}).bind("click."+this.widgetName,function(K){if(J._preventClickEvent){J._preventClickEvent=false;
K.stopImmediatePropagation();
return false
}});
if(G.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");
this.element.attr("unselectable","on")
}this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
(G.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))
},_mouseDown:function(K){K.originalEvent=K.originalEvent||{};
if(K.originalEvent.mouseHandled){return 
}(this._mouseStarted&&this._mouseUp(K));
this._mouseDownEvent=K;
var L=this,J=(K.which==1),M=(typeof this.options.cancel=="string"?G(K.target).parents().add(K.target).filter(this.options.cancel).length:false);
if(!J||M||!this._mouseCapture(K)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){L.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(K)&&this._mouseDelayMet(K)){this._mouseStarted=(this._mouseStart(K)!==false);
if(!this._mouseStarted){K.preventDefault();
return true
}}this._mouseMoveDelegate=function(N){return L._mouseMove(N)
};
this._mouseUpDelegate=function(N){return L._mouseUp(N)
};
G(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
(G.browser.safari||K.preventDefault());
K.originalEvent.mouseHandled=true;
return true
},_mouseMove:function(J){if(G.browser.msie&&!J.button){return this._mouseUp(J)
}if(this._mouseStarted){this._mouseDrag(J);
return J.preventDefault()
}if(this._mouseDistanceMet(J)&&this._mouseDelayMet(J)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,J)!==false);
(this._mouseStarted?this._mouseDrag(J):this._mouseUp(J))
}return !this._mouseStarted
},_mouseUp:function(J){G(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
this._preventClickEvent=(J.target==this._mouseDownEvent.target);
this._mouseStop(J)
}return false
},_mouseDistanceMet:function(J){return(Math.max(Math.abs(this._mouseDownEvent.pageX-J.pageX),Math.abs(this._mouseDownEvent.pageY-J.pageY))>=this.options.distance)
},_mouseDelayMet:function(J){return this.mouseDelayMet
},_mouseStart:function(J){},_mouseDrag:function(J){},_mouseStop:function(J){},_mouseCapture:function(J){return true
}};
G.ui.mouse.defaults={cancel:null,distance:1,delay:0}
})(jQuery);
(function(A){A.widget("ui.tabs",{_init:function(){if(this.options.deselectable!==undefined){this.options.collapsible=this.options.deselectable
}this._tabify(true)
},_setData:function(B,C){if(B=="selected"){if(this.options.collapsible&&C==this.options.selected){return 
}this.select(C)
}else{this.options[B]=C;
if(B=="deselectable"){this.options.collapsible=C
}this._tabify()
}},_tabId:function(B){return B.title&&B.title.replace(/\s/g,"_").replace(/[^A-Za-z0-9\-_:\.]/g,"")||this.options.idPrefix+A.data(B)
},_sanitizeSelector:function(B){return B.replace(/:/g,"\\:")
},_cookie:function(){var B=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+A.data(this.list[0]));
return A.cookie.apply(null,[B].concat(A.makeArray(arguments)))
},_ui:function(C,B){return{tab:C,panel:B,index:this.anchors.index(C)}
},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var B=A(this);
B.html(B.data("label.tabs")).removeData("label.tabs")
})
},_tabify:function(C){this.list=this.element.children("ul:first");
this.lis=A("li:has(a[href])",this.list);
this.anchors=this.lis.map(function(){return A("a",this)[0]
});
this.panels=A([]);
var B=this,L=this.options;
var M=/^#.+/;
this.anchors.each(function(S,U){var T=A(U).attr("href");
if(A(U).parent().is("div.moduleAd")){return false
}var R=T.split("#")[0],Q;
if(R&&(R===location.toString().split("#")[0]||(Q=A("base")[0])&&R===Q.href)){T=U.hash;
U.href=T
}if(M.test(T)){B.panels=B.panels.add(B._sanitizeSelector(T))
}else{if(T!="#"){A.data(U,"href.tabs",T);
A.data(U,"load.tabs",T.replace(/#.*$/,""));
var O=B._tabId(U);
U.href="#"+O;
var P=A("#"+O);
if(!P.length){P=A(L.panelTemplate).attr("id",O).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(B.panels[S-1]||B.list);
P.data("destroy.tabs",true)
}B.panels=B.panels.add(P)
}else{L.disabled.push(S)
}}});
if(C){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.lis.addClass("ui-state-default ui-corner-top");
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
if(L.selected===undefined){if(location.hash){this.anchors.each(function(O,P){if(P.hash==location.hash){L.selected=O;
return false
}})
}if(typeof L.selected!="number"&&L.cookie){L.selected=parseInt(B._cookie(),10)
}if(typeof L.selected!="number"&&this.lis.filter(".ui-tabs-selected").length){L.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))
}L.selected=L.selected||0
}else{if(L.selected===null){L.selected=-1
}}L.selected=((L.selected>=0&&this.anchors[L.selected])||L.selected<0)?L.selected:0;
L.disabled=A.unique(L.disabled.concat(A.map(this.lis.filter(".ui-state-disabled"),function(O,P){return B.lis.index(O)
}))).sort();
if(A.inArray(L.selected,L.disabled)!=-1){L.disabled.splice(A.inArray(L.selected,L.disabled),1)
}this.panels.addClass("ui-tabs-hide");
this.lis.removeClass("ui-tabs-selected ui-state-active");
if(L.selected>=0&&this.anchors.length){this.panels.eq(L.selected).removeClass("ui-tabs-hide");
this.lis.eq(L.selected).addClass("ui-tabs-selected ui-state-active");
B.element.queue("tabs",function(){B._trigger("show",null,B._ui(B.anchors[L.selected],B.panels[L.selected]))
});
this.load(L.selected)
}A(window).bind("unload",function(){B.lis.add(B.anchors).unbind(".tabs");
B.lis=B.anchors=B.panels=null
})
}else{L.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))
}this.element[L.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");
if(L.cookie){this._cookie(L.selected,L.cookie)
}for(var I=0,D;
(D=this.lis[I]);
I++){A(D)[A.inArray(I,L.disabled)!=-1&&!A(D).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")
}if(L.cache===false){this.anchors.removeData("cache.tabs")
}this.lis.add(this.anchors).unbind(".tabs");
if(L.event!="mouseover"){var J=function(P,O){if(O.is(":not(.ui-state-disabled)")){O.addClass("ui-state-"+P)
}};
var G=function(P,O){O.removeClass("ui-state-"+P)
};
this.lis.bind("mouseover.tabs",function(){J("hover",A(this))
});
this.lis.bind("mouseout.tabs",function(){G("hover",A(this))
});
this.anchors.bind("focus.tabs",function(){J("focus",A(this).closest("li"))
});
this.anchors.bind("blur.tabs",function(){G("focus",A(this).closest("li"))
})
}var N,H;
if(L.fx){if(A.isArray(L.fx)){N=L.fx[0];
H=L.fx[1]
}else{N=H=L.fx
}}function K(O,P){O.css({display:""});
if(A.browser.msie&&P.opacity){O[0].style.removeAttribute("filter")
}}var F=H?function(O,P){A(O).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");
P.hide().removeClass("ui-tabs-hide").animate(H,H.duration||"normal",function(){K(P,H);
B._trigger("show",null,B._ui(O,P[0]))
})
}:function(O,P){A(O).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");
P.removeClass("ui-tabs-hide");
B._trigger("show",null,B._ui(O,P[0]))
};
var E=N?function(P,O){O.animate(N,N.duration||"normal",function(){B.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");
O.addClass("ui-tabs-hide");
K(O,N);
B.element.dequeue("tabs")
})
}:function(Q,O,P){B.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");
O.addClass("ui-tabs-hide");
B.element.dequeue("tabs")
};
this.anchors.bind(L.event+".tabs",function(){var R=this,P=A(this).closest("li"),O=B.panels.filter(":not(.ui-tabs-hide)"),Q=A(B._sanitizeSelector(this.hash));
if((P.hasClass("ui-tabs-selected")&&!L.collapsible)||P.hasClass("ui-state-disabled")||P.hasClass("ui-state-processing")||B._trigger("select",null,B._ui(this,Q[0]))===false){this.blur();
return false
}L.selected=B.anchors.index(this);
B.abort();
if(L.collapsible){if(P.hasClass("ui-tabs-selected")){L.selected=-1;
if(L.cookie){B._cookie(L.selected,L.cookie)
}B.element.queue("tabs",function(){E(R,O)
}).dequeue("tabs");
this.blur();
return false
}else{if(!O.length){if(L.cookie){B._cookie(L.selected,L.cookie)
}B.element.queue("tabs",function(){F(R,Q)
});
B.load(B.anchors.index(this));
this.blur();
return false
}}}if(L.cookie){B._cookie(L.selected,L.cookie)
}if(Q.length){if(O.length){B.element.queue("tabs",function(){E(R,O)
})
}B.element.queue("tabs",function(){F(R,Q)
});
B.load(B.anchors.index(this))
}else{throw"jQuery UI Tabs: Mismatching fragment identifier."
}if(A.browser.msie){this.blur()
}});
this.anchors.bind("click.tabs",function(){if(!$(this).parent().is("div.moduleAd")){return false
}})
},destroy:function(){var B=this.options;
this.abort();
this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.anchors.each(function(){var D=A.data(this,"href.tabs");
if(D){this.href=D
}var C=A(this).unbind(".tabs");
A.each(["href","load","cache"],function(F,E){C.removeData(E+".tabs")
})
});
this.lis.unbind(".tabs").add(this.panels).each(function(){if(A.data(this,"destroy.tabs")){A(this).remove()
}else{A(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))
}});
if(B.cookie){this._cookie(null,B.cookie)
}},add:function(G,H,I){if(I===undefined){I=this.anchors.length
}var B=this,E=this.options,C=A(E.tabTemplate.replace(/#\{href\}/g,G).replace(/#\{label\}/g,H)),D=!G.indexOf("#")?G.replace("#",""):this._tabId(A("a",C)[0]);
C.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);
var F=A("#"+D);
if(!F.length){F=A(E.panelTemplate).attr("id",D).data("destroy.tabs",true)
}F.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
if(I>=this.lis.length){C.appendTo(this.list);
F.appendTo(this.list[0].parentNode)
}else{C.insertBefore(this.lis[I]);
F.insertBefore(this.panels[I])
}E.disabled=A.map(E.disabled,function(J,K){return J>=I?++J:J
});
this._tabify();
if(this.anchors.length==1){C.addClass("ui-tabs-selected ui-state-active");
F.removeClass("ui-tabs-hide");
this.element.queue("tabs",function(){B._trigger("show",null,B._ui(B.anchors[0],B.panels[0]))
});
this.load(0)
}this._trigger("add",null,this._ui(this.anchors[I],this.panels[I]))
},remove:function(B){var D=this.options,C=this.lis.eq(B).remove(),E=this.panels.eq(B).remove();
if(C.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(B+(B+1<this.anchors.length?1:-1))
}D.disabled=A.map(A.grep(D.disabled,function(F,G){return F!=B
}),function(F,G){return F>=B?--F:F
});
this._tabify();
this._trigger("remove",null,this._ui(C.find("a")[0],E[0]))
},enable:function(B){var C=this.options;
if(A.inArray(B,C.disabled)==-1){return 
}this.lis.eq(B).removeClass("ui-state-disabled");
C.disabled=A.grep(C.disabled,function(D,E){return D!=B
});
this._trigger("enable",null,this._ui(this.anchors[B],this.panels[B]))
},disable:function(D){var B=this,C=this.options;
if(D!=C.selected){this.lis.eq(D).addClass("ui-state-disabled");
C.disabled.push(D);
C.disabled.sort();
this._trigger("disable",null,this._ui(this.anchors[D],this.panels[D]))
}},select:function(B){if(typeof B=="string"){B=this.anchors.index(this.anchors.filter("[href$="+B+"]"))
}else{if(B===null){B=-1
}}if(B==-1&&this.options.collapsible){B=this.options.selected
}this.anchors.eq(B).trigger(this.options.event+".tabs")
},load:function(E){var G=this,C=this.options,B=this.anchors.eq(E)[0],F=A.data(B,"load.tabs");
this.abort();
if(!F||this.element.queue("tabs").length!==0&&A.data(B,"cache.tabs")){this.element.dequeue("tabs");
return 
}this.lis.eq(E).addClass("ui-state-processing");
if(C.spinner){var D=A("span",B);
D.data("label.tabs",D.html()).html(C.spinner)
}this.xhr=A.ajax(A.extend({},C.ajaxOptions,{url:F,success:function(I,J){A(G._sanitizeSelector(B.hash)).html(I);
G._cleanup();
if(C.cache){A.data(B,"cache.tabs",true)
}G._trigger("load",null,G._ui(G.anchors[E],G.panels[E]));
try{C.ajaxOptions.success(I,J)
}catch(H){}G.element.dequeue("tabs")
}}))
},abort:function(){this.element.queue([]);
this.panels.stop(false,true);
if(this.xhr){this.xhr.abort();
delete this.xhr
}this._cleanup()
},url:function(C,B){this.anchors.eq(C).removeData("cache.tabs").data("load.tabs",B)
},length:function(){return this.anchors.length
}});
A.extend(A.ui.tabs,{version:"1.7.2",getter:"length",defaults:{ajaxOptions:null,cache:false,cookie:null,collapsible:false,disabled:[],event:"click",fx:null,idPrefix:"ui-tabs-",panelTemplate:"<div></div>",spinner:"<em>Loading&#8230;</em>",tabTemplate:'<li><a href="#{href}"><span>#{label}</span></a></li>'}});
A.extend(A.ui.tabs.prototype,{rotation:null,rotate:function(F,D){var B=this,C=this.options;
var G=B._rotate||(B._rotate=function(H){clearTimeout(B.rotation);
B.rotation=setTimeout(function(){var I=C.selected;
B.select(++I<B.anchors.length?I:0)
},F);
if(H){H.stopPropagation()
}});
var E=B._unrotate||(B._unrotate=!D?function(H){if(H.clientX){B.rotate(null)
}}:function(H){t=C.selected;
G()
});
if(F){this.element.bind("tabsshow",G);
this.anchors.bind(C.event+".tabs",E);
G()
}else{clearTimeout(B.rotation);
this.element.unbind("tabsshow",G);
this.anchors.unbind(C.event+".tabs",E);
delete this._rotate;
delete this._unrotate
}}})
})(jQuery);
(function(G){var A="2.18";
var B=G.browser.msie&&/MSIE 6.0/.test(navigator.userAgent);
function D(){if(window.console&&window.console.log){window.console.log("[cycle] "+Array.prototype.join.call(arguments,""))
}}G.fn.cycle=function(I){return this.each(function(){I=I||{};
if(I.constructor==String){switch(I){case"stop":if(this.cycleTimeout){clearTimeout(this.cycleTimeout)
}this.cycleTimeout=0;
return ;
case"pause":this.cyclePause=1;
return ;
case"resume":this.cyclePause=0;
return ;
default:I={fx:I}
}}if(this.cycleTimeout){clearTimeout(this.cycleTimeout)
}this.cycleTimeout=0;
this.cyclePause=0;
var P=G(this);
var N=I.slideExpr?G(I.slideExpr,this):P.children();
var K=N.get();
var J=G.extend({},G.fn.cycle.defaults,I||{},G.metadata?P.metadata():G.meta?P.data():{});
if(J.autostop){J.countdown=J.autostopCount||K.length
}if(K.length<2){if(J.force==1){D("Forcing slideshow to start");
G(K).each(function(S){G(this).parent().append(G(this).clone())
});
N=I.slideExpr?G(I.slideExpr,this):P.children();
K=N.get()
}else{D("terminating; too few slides: "+K.length);
return 
}}J.before=J.before?[J.before]:[];
J.after=J.after?[J.after]:[];
J.after.unshift(function(){J.busy=0
});
if(J.continuous){J.after.push(function(){E(K,J,0,!J.rev)
})
}if(B&&J.cleartype&&!J.cleartypeNoBg){C(N)
}var R=this.className;
J.width=parseInt((R.match(/w:(\d+)/)||[])[1])||J.width;
J.height=parseInt((R.match(/h:(\d+)/)||[])[1])||J.height;
J.timeout=parseInt((R.match(/t:(\d+)/)||[])[1])||J.timeout;
if(P.css("position")=="static"){P.css("position","relative")
}if(J.width){P.width(J.width)
}if(J.height&&J.height!="auto"){P.height(J.height)
}if(J.random){J.randomMap=[];
for(var L=0;
L<K.length;
L++){J.randomMap.push(L)
}J.randomMap.sort(function(T,S){return Math.random()-0.5
});
J.randomIndex=0;
J.startingSlide=J.randomMap[0]
}else{if(J.startingSlide>=K.length){J.startingSlide=0
}}var M=J.startingSlide||0;
N.css({position:"absolute",top:0,left:0}).hide().each(function(S){var T=M?S>=M?K.length-(S-M):M-S:K.length-S;
G(this).css("z-index",T)
});
G(K[M]).css("opacity",1).show();
if(G.browser.msie){K[M].style.removeAttribute("filter")
}if(J.fit&&J.width){N.width(J.width)
}if(J.fit&&J.height&&J.height!="auto"){N.height(J.height)
}if(J.pause){P.hover(function(){this.cyclePause=1
},function(){this.cyclePause=0
})
}var Q=G.fn.cycle.transitions[J.fx];
if(G.isFunction(Q)){Q(P,N,J)
}else{if(J.fx!="custom"){D("unknown transition: "+J.fx)
}}N.each(function(){var S=G(this);
this.cycleH=(J.fit&&J.height)?J.height:S.height();
this.cycleW=(J.fit&&J.width)?J.width:S.width()
});
J.cssBefore=J.cssBefore||{};
J.animIn=J.animIn||{};
J.animOut=J.animOut||{};
N.not(":eq("+M+")").css(J.cssBefore);
if(J.cssFirst){G(N[M]).css(J.cssFirst)
}if(J.timeout){if(J.speed.constructor==String){J.speed={slow:600,fast:200}[J.speed]||400
}if(!J.sync){J.speed=J.speed/2
}while((J.timeout-J.speed)<250){J.timeout+=J.speed
}}if(J.easing){J.easeIn=J.easeOut=J.easing
}if(!J.speedIn){J.speedIn=J.speed
}if(!J.speedOut){J.speedOut=J.speed
}J.slideCount=K.length;
J.currSlide=M;
if(J.random){J.nextSlide=J.currSlide;
if(++J.randomIndex==K.length){J.randomIndex=0
}J.nextSlide=J.randomMap[J.randomIndex]
}else{J.nextSlide=J.startingSlide>=(K.length-1)?0:J.startingSlide+1
}var O=N[M];
if(J.before.length){J.before[0].apply(O,[O,O,J,true])
}if(J.after.length>1){J.after[1].apply(O,[O,O,J,true])
}if(J.click&&!J.next){J.next=J.click
}if(J.next){G(J.next).bind("click",function(){return F(K,J,J.rev?-1:1)
})
}if(J.prev){G(J.prev).bind("click",function(){return F(K,J,J.rev?1:-1)
})
}if(J.pager){H(K,J)
}if(J.timeout||J.continuous){this.cycleTimeout=setTimeout(function(){E(K,J,0,!J.rev)
},J.continuous?10:J.timeout+(J.delay||0))
}J.addSlide=function(T){var S=G(T),U=S[0];
if(!J.autostopCount){J.countdown++
}K.push(U);
if(J.els){J.els.push(U)
}J.slideCount=K.length;
S.css("position","absolute").css(J.cssBefore).appendTo(P);
if(B&&J.cleartype&&!J.cleartypeNoBg){C(S)
}if(J.fit&&J.width){S.width(J.width)
}if(J.fit&&J.height&&J.height!="auto"){N.height(J.height)
}U.cycleH=(J.fit&&J.height)?J.height:S.height();
U.cycleW=(J.fit&&J.width)?J.width:S.width()
}
})
};
function E(N,I,M,O){if(I.busy){return 
}var L=N[0].parentNode,Q=N[I.currSlide],P=N[I.nextSlide];
if(L.cycleTimeout===0&&!M){return 
}if(!M&&!L.cyclePause&&((I.autostop&&(--I.countdown<=0))||(I.nowrap&&!I.random&&I.nextSlide<I.currSlide))){if(I.end){I.end(I)
}return 
}if(M||!L.cyclePause){if(I.before.length){G.each(I.before,function(R,S){S.apply(P,[Q,P,I,O])
})
}var J=function(){if(G.browser.msie&&I.cleartype){this.style.removeAttribute("filter")
}G.each(I.after,function(R,S){S.apply(P,[Q,P,I,O])
})
};
if(I.nextSlide!=I.currSlide){I.busy=1;
if(I.fxFn){I.fxFn(Q,P,I,J,O)
}else{if(G.isFunction(G.fn.cycle[I.fx])){G.fn.cycle[I.fx](Q,P,I,J)
}else{G.fn.cycle.custom(Q,P,I,J)
}}}if(I.random){I.currSlide=I.nextSlide;
if(++I.randomIndex==N.length){I.randomIndex=0
}I.nextSlide=I.randomMap[I.randomIndex]
}else{var K=(I.nextSlide+1)==N.length;
I.nextSlide=K?0:I.nextSlide+1;
I.currSlide=K?N.length-1:I.nextSlide-1
}if(I.pager){G(I.pager).find("a").removeClass("activeSlide").filter("a:eq("+I.currSlide+")").addClass("activeSlide")
}}if(I.timeout&&!I.continuous){L.cycleTimeout=setTimeout(function(){E(N,I,0,!I.rev)
},I.timeout)
}else{if(I.continuous&&L.cyclePause){L.cycleTimeout=setTimeout(function(){E(N,I,0,!I.rev)
},10)
}}}function F(I,J,M){var L=I[0].parentNode,K=L.cycleTimeout;
if(K){clearTimeout(K);
L.cycleTimeout=0
}J.nextSlide=J.currSlide+M;
if(J.nextSlide<0){if(J.nowrap){return false
}J.nextSlide=I.length-1
}else{if(J.nextSlide>=I.length){if(J.nowrap){return false
}J.nextSlide=0
}}if(J.prevNextClick&&typeof J.prevNextClick=="function"){J.prevNextClick(M>0,J.nextSlide,I[J.nextSlide])
}E(I,J,1,M>=0);
return false
}function H(J,K){var I=G(K.pager);
G.each(J,function(L,N){var M=(typeof K.pagerAnchorBuilder=="function")?G(K.pagerAnchorBuilder(L,N)):G('<a href="#">'+(L+1)+"</a>");
if(M.parents("body").length==0){M.appendTo(I)
}M.bind(K.pagerEvent,function(){K.nextSlide=L;
var P=J[0].parentNode,O=P.cycleTimeout;
if(O){clearTimeout(O);
P.cycleTimeout=0
}if(typeof K.pagerClick=="function"){K.pagerClick(K.nextSlide,J[K.nextSlide])
}E(J,K,1,!K.rev);
return false
})
});
I.find("a").filter("a:eq("+K.startingSlide+")").addClass("activeSlide")
}function C(K){function J(L){var L=parseInt(L).toString(16);
return L.length<2?"0"+L:L
}function I(N){for(;
N&&N.nodeName.toLowerCase()!="html";
N=N.parentNode){var L=G.css(N,"background-color");
if(L.indexOf("rgb")>=0){var M=L.match(/\d+/g);
return"#"+J(M[0])+J(M[1])+J(M[2])
}if(L&&L!="transparent"){return L
}}return"#ffffff"
}K.each(function(){G(this).css("background-color",I(this))
})
}G.fn.cycle.custom=function(O,L,M,I){var N=G(O),K=G(L);
K.css(M.cssBefore);
var J=function(){K.animate(M.animIn,M.speedIn,M.easeIn,I)
};
N.animate(M.animOut,M.speedOut,M.easeOut,function(){if(M.cssAfter){N.css(M.cssAfter)
}if(!M.sync){J()
}});
if(M.sync){J()
}};
G.fn.cycle.transitions={fade:function(J,K,I){K.not(":eq("+I.startingSlide+")").css("opacity",0);
I.before.push(function(){G(this).show()
});
I.animIn={opacity:1};
I.animOut={opacity:0};
I.cssAfter={display:"none"}
}};
G.fn.cycle.ver=function(){return A
};
G.fn.cycle.defaults={fx:"fade",timeout:4000,continuous:0,speed:1000,speedIn:null,speedOut:null,next:null,prev:null,prevNextClick:null,pager:null,pagerClick:null,pagerEvent:"click",pagerAnchorBuilder:null,before:null,after:null,end:null,easing:null,easeIn:null,easeOut:null,shuffle:null,animIn:null,animOut:null,cssBefore:null,cssAfter:null,fxFn:null,height:"auto",startingSlide:0,sync:1,random:0,fit:0,pause:0,autostop:0,autostopCount:0,delay:0,slideExpr:null,cleartype:0,nowrap:0,force:0}
})(jQuery);
(function(A){A.fn.cycle.transitions.scrollUp=function(C,D,B){C.css("overflow","hidden");
B.before.push(function(G,E,F){A(this).show();
F.cssBefore.top=E.offsetHeight;
F.animOut.top=0-G.offsetHeight
});
B.cssFirst={top:0};
B.animIn={top:0};
B.cssAfter={display:"none"}
};
A.fn.cycle.transitions.scrollDown=function(C,D,B){C.css("overflow","hidden");
B.before.push(function(G,E,F){A(this).show();
F.cssBefore.top=0-E.offsetHeight;
F.animOut.top=G.offsetHeight
});
B.cssFirst={top:0};
B.animIn={top:0};
B.cssAfter={display:"none"}
};
A.fn.cycle.transitions.scrollLeft=function(C,D,B){C.css("overflow","hidden");
B.before.push(function(G,E,F){A(this).show();
F.cssBefore.left=E.offsetWidth;
F.animOut.left=0-G.offsetWidth
});
B.cssFirst={left:0};
B.animIn={left:0}
};
A.fn.cycle.transitions.scrollRight=function(C,D,B){C.css("overflow","hidden");
B.before.push(function(G,E,F){A(this).show();
F.cssBefore.left=0-E.offsetWidth;
F.animOut.left=G.offsetWidth
});
B.cssFirst={left:0};
B.animIn={left:0}
};
A.fn.cycle.transitions.scrollHorz=function(C,D,B){B.before.push(function(I,G,H,F){C.css("overflow","hidden");
A(this).show();
var E=I.offsetWidth,J=G.offsetWidth;
H.cssBefore=F?{left:J}:{left:-J};
H.animIn.left=0;
H.animOut.left=F?-E:E;
D.not(I).css(H.cssBefore)
});
B.after.push(function(){C.css("overflow","")
});
B.cssFirst={left:0};
B.cssAfter={display:"none"}
};
A.fn.cycle.transitions.scrollVert=function(C,D,B){C.css("overflow","hidden");
B.before.push(function(J,G,H,F){A(this).show();
var I=J.offsetHeight,E=G.offsetHeight;
H.cssBefore=F?{top:-E}:{top:E};
H.animIn.top=0;
H.animOut.top=F?I:-I;
D.not(J).css(H.cssBefore)
});
B.cssFirst={top:0};
B.cssAfter={display:"none"}
};
A.fn.cycle.transitions.slideX=function(C,D,B){B.before.push(function(G,E,F){A(G).css("zIndex",1)
});
B.cssBefore={zIndex:2};
B.animIn={width:"show"};
B.animOut={width:"hide"}
};
A.fn.cycle.transitions.slideY=function(C,D,B){B.before.push(function(G,E,F){A(G).css("zIndex",1)
});
B.cssBefore={zIndex:2};
B.animIn={height:"show"};
B.animOut={height:"hide"}
};
A.fn.cycle.transitions.shuffle=function(E,F,D){var B=E.css("overflow","visible").width();
F.css({left:0,top:0});
D.before.push(function(){A(this).show()
});
D.speed=D.speed/2;
D.random=0;
D.shuffle=D.shuffle||{left:-B,top:15};
D.els=[];
for(var C=0;
C<F.length;
C++){D.els.push(F[C])
}for(var C=0;
C<D.startingSlide;
C++){D.els.push(D.els.shift())
}D.fxFn=function(L,J,K,G,I){var H=I?A(L):A(J);
H.animate(K.shuffle,K.speedIn,K.easeIn,function(){I?K.els.push(K.els.shift()):K.els.unshift(K.els.pop());
if(I){for(var N=0,M=K.els.length;
N<M;
N++){A(K.els[N]).css("z-index",M-N)
}}else{var O=A(L).css("z-index");
H.css("z-index",parseInt(O)+1)
}H.animate({left:0,top:0},K.speedOut,K.easeOut,function(){A(I?this:L).hide();
if(G){G()
}})
})
}
};
A.fn.cycle.transitions.turnUp=function(C,D,B){B.before.push(function(G,E,F){A(this).show();
F.cssBefore.top=E.cycleH;
F.animIn.height=E.cycleH
});
B.cssFirst={top:0};
B.cssBefore={height:0};
B.animIn={top:0};
B.animOut={height:0};
B.cssAfter={display:"none"}
};
A.fn.cycle.transitions.turnDown=function(C,D,B){B.before.push(function(G,E,F){A(this).show();
F.animIn.height=E.cycleH;
F.animOut.top=G.cycleH
});
B.cssFirst={top:0};
B.cssBefore={top:0,height:0};
B.animOut={height:0};
B.cssAfter={display:"none"}
};
A.fn.cycle.transitions.turnLeft=function(C,D,B){B.before.push(function(G,E,F){A(this).show();
F.cssBefore.left=E.cycleW;
F.animIn.width=E.cycleW
});
B.cssBefore={width:0};
B.animIn={left:0};
B.animOut={width:0};
B.cssAfter={display:"none"}
};
A.fn.cycle.transitions.turnRight=function(C,D,B){B.before.push(function(G,E,F){A(this).show();
F.animIn.width=E.cycleW;
F.animOut.left=G.cycleW
});
B.cssBefore={left:0,width:0};
B.animIn={left:0};
B.animOut={width:0};
B.cssAfter={display:"none"}
};
A.fn.cycle.transitions.zoom=function(C,D,B){B.cssFirst={top:0,left:0};
B.cssAfter={display:"none"};
B.before.push(function(G,E,F){A(this).show();
F.cssBefore={width:0,height:0,top:E.cycleH/2,left:E.cycleW/2};
F.animIn={top:0,left:0,width:E.cycleW,height:E.cycleH};
F.animOut={width:0,height:0,top:G.cycleH/2,left:G.cycleW/2}
})
};
A.fn.cycle.transitions.fadeZoom=function(C,D,B){B.before.push(function(G,E,F){F.cssBefore={width:0,height:0,opacity:1,left:E.cycleW/2,top:E.cycleH/2,zIndex:1};
F.animIn={top:0,left:0,width:E.cycleW,height:E.cycleH}
});
B.animOut={opacity:0};
B.cssAfter={zIndex:0}
};
A.fn.cycle.transitions.blindX=function(D,E,C){var B=D.css("overflow","hidden").width();
E.show();
C.before.push(function(H,F,G){A(H).css("zIndex",1)
});
C.cssBefore={left:B,zIndex:2};
C.cssAfter={zIndex:1};
C.animIn={left:0};
C.animOut={left:B}
};
A.fn.cycle.transitions.blindY=function(D,E,C){var B=D.css("overflow","hidden").height();
E.show();
C.before.push(function(H,F,G){A(H).css("zIndex",1)
});
C.cssBefore={top:B,zIndex:2};
C.cssAfter={zIndex:1};
C.animIn={top:0};
C.animOut={top:B}
};
A.fn.cycle.transitions.blindZ=function(E,F,D){var C=E.css("overflow","hidden").height();
var B=E.width();
F.show();
D.before.push(function(I,G,H){A(I).css("zIndex",1)
});
D.cssBefore={top:C,left:B,zIndex:2};
D.cssAfter={zIndex:1};
D.animIn={top:0,left:0};
D.animOut={top:C,left:B}
};
A.fn.cycle.transitions.growX=function(C,D,B){B.before.push(function(G,E,F){F.cssBefore={left:this.cycleW/2,width:0,zIndex:2};
F.animIn={left:0,width:this.cycleW};
F.animOut={left:0};
A(G).css("zIndex",1)
})
};
A.fn.cycle.transitions.growY=function(C,D,B){B.before.push(function(G,E,F){F.cssBefore={top:this.cycleH/2,height:0,zIndex:2};
F.animIn={top:0,height:this.cycleH};
F.animOut={top:0};
A(G).css("zIndex",1)
})
};
A.fn.cycle.transitions.curtainX=function(C,D,B){B.before.push(function(G,E,F){F.cssBefore={left:E.cycleW/2,width:0,zIndex:1,display:"block"};
F.animIn={left:0,width:this.cycleW};
F.animOut={left:G.cycleW/2,width:0};
A(G).css("zIndex",2)
});
B.cssAfter={zIndex:1,display:"none"}
};
A.fn.cycle.transitions.curtainY=function(C,D,B){B.before.push(function(G,E,F){F.cssBefore={top:E.cycleH/2,height:0,zIndex:1,display:"block"};
F.animIn={top:0,height:this.cycleH};
F.animOut={top:G.cycleH/2,height:0};
A(G).css("zIndex",2)
});
B.cssAfter={zIndex:1,display:"none"}
};
A.fn.cycle.transitions.cover=function(E,F,D){var G=D.direction||"left";
var B=E.css("overflow","hidden").width();
var C=E.height();
D.before.push(function(J,H,I){I.cssBefore={zIndex:2,display:"block"};
if(G=="right"){I.cssBefore.left=-B
}else{if(G=="up"){I.cssBefore.top=C
}else{if(G=="down"){I.cssBefore.top=-C
}else{I.cssBefore.left=B
}}}A(J).css("zIndex",1)
});
D.animIn={left:0,top:0};
D.animOut={left:0,top:0};
D.cssAfter={zIndex:2,display:"none"}
};
A.fn.cycle.transitions.uncover=function(E,F,D){var G=D.direction||"left";
var B=E.css("overflow","hidden").width();
var C=E.height();
D.before.push(function(J,H,I){I.cssBefore.display="block";
if(G=="right"){I.animOut.left=B
}else{if(G=="up"){I.animOut.top=-C
}else{if(G=="down"){I.animOut.top=C
}else{I.animOut.left=-B
}}}A(J).css("zIndex",2)
});
D.animIn={left:0,top:0};
D.cssBefore={zIndex:1,top:0,left:0};
D.cssAfter={zIndex:1,display:"none"}
};
A.fn.cycle.transitions.toss=function(E,F,D){var B=E.css("overflow","visible").width();
var C=E.height();
D.before.push(function(I,G,H){A(I).css("zIndex",2);
H.cssBefore.display="block";
if(!H.animOut.left&&!H.animOut.top){H.animOut={left:B*2,top:-C/2,opacity:0}
}else{H.animOut.opacity=0
}});
D.cssBefore={left:0,top:0,zIndex:1,opacity:1};
D.animIn={left:0};
D.cssAfter={zIndex:2,display:"none"}
}
})(jQuery);
jQuery.cookie=function(B,I,L){if(typeof I!="undefined"){L=L||{};
if(I===null){I="";
L.expires=-1
}var E="";
if(L.expires&&(typeof L.expires=="number"||L.expires.toUTCString)){var F;
if(typeof L.expires=="number"){F=new Date();
F.setTime(F.getTime()+(L.expires*24*60*60*1000))
}else{F=L.expires
}E="; expires="+F.toUTCString()
}var K=L.path?"; path="+(L.path):"";
var G=L.domain?"; domain="+(L.domain):"";
var A=L.secure?"; secure":"";
document.cookie=[B,"=",encodeURIComponent(I),E,K,G,A].join("");
return I
}else{var D=null;
if(document.cookie&&document.cookie!=""){var J=document.cookie.split(";");
for(var H=0;
H<J.length;
H++){var C=jQuery.trim(J[H]);
if(C.substring(0,B.length+1)==(B+"=")){D=decodeURIComponent(C.substring(B.length+1));
break
}}}return D
}};
(function(A){A.fn.pagination=function(B,C){C=A.extend({display_entries_shift:1,elementsToPaginate:null,items_per_page:10,num_display_entries:3,current_page:0,num_edge_entries:3,link_to:"#",prev_text:"&laquo; Prev",next_text:"Next &raquo;",single_text:"Single Page &raquo;",ellipse_text:"...",prev_show_always:true,next_show_always:true,single_page_show:false,hiddenPageClass:"hide",lastPagerClass:"last",currentPagerClass:"current",prevPagerClass:"prev",nextPagerClass:"next",singlePagerClass:"single",storyPagerClass:"story",firstColumnMidulesId:"firstColumnModulesStoryPage",showFirstColumnModulesAlways:false,copyrightTagId:"copyrightStoryModule",callback:function(){return false
}},C||{});
if(C.items_per_page>=B){return 
}return this.each(function(){function F(){return Math.ceil(B/C.items_per_page)
}function I(){var O=Math.ceil(C.num_display_entries/2);
var P=F();
var N=P-C.num_display_entries;
var Q=(J<C.display_entries_shift)?0:(J-(J%C.display_entries_shift));
var M=(J<P)?Q+C.display_entries_shift:(Q+C.display_entries_shift+1)+1;
M=(M>=P)?P:M;
return[Q,M]
}function G(){var M=A(C.elementsToPaginate).find("."+C.storyPagerClass).get();
var N=[];
while(M.length){N.push(M.splice(0,C.items_per_page))
}A.each(N,function(O){A(N[O]).wrapAll('<div class="page"></div>')
});
E=A(C.elementsToPaginate).find(".page").get();
A.each(E,function(O){A(E[O]).find("."+C.storyPagerClass).filter(":last").addClass(C.lastPagerClass)
});
H(C.current_page)
}function H(M){A.each(E,function(N){A(E[N]).addClass(C.hiddenPageClass)
});
A(E).filter("div:eq("+M+")").removeClass(C.hiddenPageClass);
if(A(E).filter("div:eq("+M+")").parent(".storyFontResize").length!=0){window.scroll(0,0)
}}function L(N,M){if(A("#"+C.firstColumnMidulesId)){if(N==0||C.showFirstColumnModulesAlways){A("#"+C.firstColumnMidulesId).show()
}else{A("#"+C.firstColumnMidulesId).hide()
}}if(B==N+1&&A("#"+C.copyrightTagId)){A("#"+C.copyrightTagId).show()
}J=N;
K();
H(N);
var O=C.callback(N,D);
if(!O){if(M.stopPropagation){M.stopPropagation()
}else{M.cancelBubble=true
}}return O
}function K(){D.empty();
var N=I();
var Q=F();
var T=function(U){return function(V){return L(U,V)
}
};
var S=function(){return function(U){U.preventDefault();
A(E).removeClass(C.hiddenPageClass);
A(D).hide();
A(".pager-container").hide();
A(this).hide();
if(A("#"+C.firstColumnMidulesId)){A("#"+C.firstColumnMidulesId).show()
}if(A("#"+C.copyrightTagId)){A("#"+C.copyrightTagId).show()
}}
};
appendItem=function(U,V){U=(U==9999)?U:(U<0?0:(U<Q?U:Q-1));
V=A.extend({text:U+1,classes:""},V||{});
if(U==J){var W=A("<span class='"+C.currentPagerClass+"'>"+(V.text)+"</span>")
}else{if(U<9999){if((V.classes).indexOf("adRefresh")!=-1){var W=A("<a>"+(V.text)+"</a>").bind("click",function(X){reloadCompanionAd();
L(U,X)
}).attr("href",C.link_to.replace(/__id__/,U+1))
}else{var W=A("<a>"+(V.text)+"</a>").bind("click",T(U)).attr("href",C.link_to.replace(/__id__/,U+1))
}}else{var W=A("<a style='clear:both;float:left;'>"+(V.text)+"</a>").bind("click",S()).attr("href",C.link_to.replace(/__id__/,U))
}}if(V.classes){W.addClass(V.classes)
}if(U==9999){D.after(W);
D.after("<br/>")
}else{D.append(W)
}};
if(C.prev_text&&(N[0]>C.display_entries_shift||C.prev_show_always)){if(C.adRefresh){appendItem(J-C.display_entries_shift,{text:C.prev_text,classes:(C.prevPagerClass+" "+C.adRefresh)})
}else{appendItem(J-C.display_entries_shift,{text:C.prev_text,classes:C.prevPagerClass})
}}if(N[0]>0&&C.num_edge_entries>0){var M=Math.min(C.num_edge_entries,N[0]);
for(var O=0;
O<M;
O++){appendItem(O)
}if(C.num_edge_entries<N[0]&&C.ellipse_text){A("<span>"+C.ellipse_text+"</span>").appendTo(D)
}}for(var O=N[0];
O<N[1];
O++){if(C.adRefresh){appendItem(O,{classes:C.adRefresh})
}else{appendItem(O)
}}if(N[1]<Q&&C.num_edge_entries>0){if(Q-C.num_edge_entries>N[1]&&C.ellipse_text){A("<span>"+C.ellipse_text+"</span>").appendTo(D)
}var P=Math.max(Q-C.num_edge_entries,N[1]);
for(var O=P;
O<Q;
O++){appendItem(O)
}}if(C.next_text&&(N[0]+C.display_entries_shift<Q&&C.next_show_always)){if(C.adRefresh){appendItem(N[0]+C.display_entries_shift,{text:C.next_text,classes:(C.nextPagerClass+" "+C.adRefresh)})
}else{appendItem(N[0]+C.display_entries_shift,{text:C.next_text,classes:C.nextPagerClass})
}}A(D).children().filter('[class!="'+C.prevPagerClass+'"][class!="'+C.nextPagerClass+'"]').after("<span>|</span>");
A(D).children().filter("span:last").remove();
if(D.attr("class")=="pager"){var R=A(D).parents(".detail");
A(".pager-container").empty();
A(D).clone(true).prependTo(A(R).find(".pager-container"))
}}var J=C.current_page;
B=(!B||B<0)?1:B;
C.items_per_page=(!C.items_per_page||C.items_per_page<0)?1:C.items_per_page;
var D=A(this);
var E=null;
G();
K();
if(C.single_page_show){appendItem(9999,{text:C.single_text,classes:C.singlePagerClass})
}if(A("#"+C.copyrightTagId)){A("#"+C.copyrightTagId).hide()
}})
}
})(jQuery);
(function(A){A.extend(A.fn,{validate:function(B){if(!this.length){B&&B.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");
return 
}var C=A.data(this[0],"validator");
if(C){return C
}C=new A.validator(B,this[0]);
A.data(this[0],"validator",C);
if(C.settings.onsubmit){this.find("input, button").filter(".cancel").click(function(){C.cancelSubmit=true
});
if(C.settings.submitHandler){this.find("input, button").filter(":submit").click(function(){C.submitButton=this
})
}this.submit(function(D){if(C.settings.debug){D.preventDefault()
}function E(){if(C.settings.submitHandler){if(C.submitButton){var F=A("<input type='hidden'/>").attr("name",C.submitButton.name).val(C.submitButton.value).appendTo(C.currentForm)
}C.settings.submitHandler.call(C,C.currentForm);
if(C.submitButton){F.remove()
}return false
}return true
}if(C.cancelSubmit){C.cancelSubmit=false;
return E()
}if(C.form()){if(C.pendingRequest){C.formSubmitted=true;
return false
}return E()
}else{C.focusInvalid();
return false
}})
}return C
},valid:function(){if(A(this[0]).is("form")){return this.validate().form()
}else{var C=true;
var B=A(this[0].form).validate();
this.each(function(){C&=B.element(this)
});
return C
}},removeAttrs:function(D){var B={},C=this;
A.each(D.split(/\s/),function(E,F){B[F]=C.attr(F);
C.removeAttr(F)
});
return B
},rules:function(E,B){var G=this[0];
if(E){var D=A.data(G.form,"validator").settings;
var I=D.rules;
var J=A.validator.staticRules(G);
switch(E){case"add":A.extend(J,A.validator.normalizeRule(B));
I[G.name]=J;
if(B.messages){D.messages[G.name]=A.extend(D.messages[G.name],B.messages)
}break;
case"remove":if(!B){delete I[G.name];
return J
}var H={};
A.each(B.split(/\s/),function(K,L){H[L]=J[L];
delete J[L]
});
return H
}}var F=A.validator.normalizeRules(A.extend({},A.validator.metadataRules(G),A.validator.classRules(G),A.validator.attributeRules(G),A.validator.staticRules(G)),G);
if(F.required){var C=F.required;
delete F.required;
F=A.extend({required:C},F)
}return F
}});
A.extend(A.expr[":"],{blank:function(B){return !A.trim(B.value)
},filled:function(B){return !!A.trim(B.value)
},unchecked:function(B){return !B.checked
}});
A.validator=function(B,C){this.settings=A.extend({},A.validator.defaults,B);
this.currentForm=C;
this.init()
};
A.validator.format=function(B,C){if(arguments.length==1){return function(){var D=A.makeArray(arguments);
D.unshift(B);
return A.validator.format.apply(this,D)
}
}if(arguments.length>2&&C.constructor!=Array){C=A.makeArray(arguments).slice(1)
}if(C.constructor!=Array){C=[C]
}A.each(C,function(D,E){B=B.replace(new RegExp("\\{"+D+"\\}","g"),E)
});
return B
};
A.extend(A.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:A([]),errorLabelContainer:A([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(B){this.lastActive=B;
if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,B,this.settings.errorClass,this.settings.validClass);
this.errorsFor(B).hide()
}},onfocusout:function(B){if(!this.checkable(B)&&(B.name in this.submitted||!this.optional(B))){this.element(B)
}},onkeyup:function(B){if(B.name in this.submitted||B==this.lastElement){this.element(B)
}},onclick:function(B){if(B.name in this.submitted){this.element(B)
}},highlight:function(D,B,C){A(D).addClass(B).removeClass(C)
},unhighlight:function(D,B,C){A(D).removeClass(B).addClass(C)
}},setDefaults:function(B){A.extend(A.validator.defaults,B)
},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",dateDE:"Bitte geben Sie ein gültiges Datum ein.",number:"Please enter a valid number.",phoneNumber:"Please enter a valid phone number.",numberDE:"Bitte geben Sie eine Nummer ein.",digits:"Please enter only digits",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",commentsMaxlength:"You currently have {0} characters entered.",maxlength:A.validator.format("Please enter no more than {0} characters."),minlength:A.validator.format("Please enter at least {0} characters."),rangelength:A.validator.format("Please enter a value between {0} and {1} characters long."),range:A.validator.format("Please enter a value between {0} and {1}."),max:A.validator.format("Please enter a value less than or equal to {0}."),min:A.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=A(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||A(this.currentForm);
this.containers=A(this.settings.errorContainer).add(this.settings.errorLabelContainer);
this.submitted={};
this.valueCache={};
this.pendingRequest=0;
this.pending={};
this.invalid={};
this.reset();
var B=(this.groups={});
A.each(this.settings.groups,function(E,F){A.each(F.split(/\s/),function(H,G){B[G]=E
})
});
var D=this.settings.rules;
A.each(D,function(E,F){D[E]=A.validator.normalizeRule(F)
});
function C(F){var E=A.data(this[0].form,"validator");
E.settings["on"+F.type]&&E.settings["on"+F.type].call(E,this[0])
}A(this.currentForm).delegate("focusin focusout keyup",":text, :password, :file, select, textarea",C).delegate("click",":radio, :checkbox",C);
if(this.settings.invalidHandler){A(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)
}},form:function(){this.checkForm();
A.extend(this.submitted,this.errorMap);
this.invalid=A.extend({},this.errorMap);
if(!this.valid()){A(this.currentForm).triggerHandler("invalid-form",[this])
}this.showErrors();
return this.valid()
},checkForm:function(){this.prepareForm();
for(var B=0,C=(this.currentElements=this.elements());
C[B];
B++){this.check(C[B])
}return this.valid()
},element:function(C){C=this.clean(C);
this.lastElement=C;
this.prepareElement(C);
this.currentElements=A(C);
var B=this.check(C);
if(B){delete this.invalid[C.name]
}else{this.invalid[C.name]=true
}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)
}this.showErrors();
return B
},showErrors:function(C){if(C){A.extend(this.errorMap,C);
this.errorList=[];
for(var B in C){this.errorList.push({message:C[B],element:this.findByName(B)[0]})
}this.successList=A.grep(this.successList,function(D){return !(D.name in C)
})
}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()
},resetForm:function(){if(A.fn.resetForm){A(this.currentForm).resetForm()
}this.submitted={};
this.prepareForm();
this.hideErrors();
this.elements().removeClass(this.settings.errorClass)
},numberOfInvalids:function(){return this.objectLength(this.invalid)
},objectLength:function(D){var C=0;
for(var B in D){C++
}return C
},hideErrors:function(){this.addWrapper(this.toHide).hide()
},valid:function(){return this.size()==0
},size:function(){return this.errorList.length
},focusInvalid:function(){if(this.settings.focusInvalid){try{A(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus()
}catch(B){}}},findLastActive:function(){var B=this.lastActive;
return B&&A.grep(this.errorList,function(C){return C.element.name==B.name
}).length==1&&B
},elements:function(){var C=this,B={};
return A([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&C.settings.debug&&window.console&&console.error("%o has no name assigned",this);
if(this.name in B||!C.objectLength(A(this).rules())){return false
}B[this.name]=true;
return true
})
},clean:function(B){return A(B)[0]
},errors:function(){return A(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)
},reset:function(){this.successList=[];
this.errorList=[];
this.errorMap={};
this.toShow=A([]);
this.toHide=A([]);
this.formSubmitted=false;
this.currentElements=A([])
},prepareForm:function(){this.reset();
this.toHide=this.errors().add(this.containers)
},prepareElement:function(B){this.reset();
this.toHide=this.errorsFor(B)
},check:function(C){C=this.clean(C);
if(this.checkable(C)){C=this.findByName(C.name)[0]
}var G=A(C).rules();
var D=false;
for(method in G){var F={method:method,parameters:G[method]};
try{var B=A.validator.methods[method].call(this,C.value.replace(/\r/g,""),C,F.parameters);
if(B=="dependency-mismatch"){D=true;
continue
}D=false;
if(B=="pending"){this.toHide=this.toHide.not(this.errorsFor(C));
return 
}if(!B){this.formatAndAdd(C,F);
return false
}}catch(E){this.settings.debug&&window.console&&console.log("exception occured when checking element "+C.id+", check the '"+F.method+"' method");
throw E
}}if(D){return 
}if(this.objectLength(G)){this.successList.push(C)
}return true
},customMetaMessage:function(B,D){if(!A.metadata){return 
}var C=this.settings.meta?A(B).metadata()[this.settings.meta]:A(B).metadata();
return C&&C.messages&&C.messages[D]
},customMessage:function(C,D){var B=this.settings.messages[C];
return B&&(B.constructor==String?B:B[D])
},findDefined:function(){for(var B=0;
B<arguments.length;
B++){if(arguments[B]!==undefined){return arguments[B]
}}return undefined
},defaultMessage:function(B,C){return this.findDefined(this.customMessage(B.name,C),this.customMetaMessage(B,C),!this.settings.ignoreTitle&&B.title||undefined,A.validator.messages[C],"<strong>Warning: No message defined for "+B.name+"</strong>")
},formatAndAdd:function(B,D){var C=this.defaultMessage(B,D.method);
if(typeof C=="function"){C=C.call(this,D.parameters,B)
}this.errorList.push({message:C,element:B});
this.errorMap[B.name]=C;
this.submitted[B.name]=C
},addWrapper:function(B){if(this.settings.wrapper){B=B.add(B.parent(this.settings.wrapper))
}return B
},defaultShowErrors:function(){for(var C=0;
this.errorList[C];
C++){var B=this.errorList[C];
this.settings.highlight&&this.settings.highlight.call(this,B.element,this.settings.errorClass,this.settings.validClass);
this.showLabel(B.element,B.message)
}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)
}if(this.settings.success){for(var C=0;
this.successList[C];
C++){this.showLabel(this.successList[C])
}}if(this.settings.unhighlight){for(var C=0,D=this.validElements();
D[C];
C++){this.settings.unhighlight.call(this,D[C],this.settings.errorClass,this.settings.validClass)
}}this.toHide=this.toHide.not(this.toShow);
this.hideErrors();
this.addWrapper(this.toShow).show()
},validElements:function(){return this.currentElements.not(this.invalidElements())
},invalidElements:function(){return A(this.errorList).map(function(){return this.element
})
},showLabel:function(C,D){var B=this.errorsFor(C);
if(B.length){B.removeClass().addClass(this.settings.errorClass);
B.attr("generated")&&B.html(D)
}else{B=A("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(C),generated:true}).addClass(this.settings.errorClass).html(D||"");
if(this.settings.wrapper){B=B.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()
}if(!this.labelContainer.append(B).length){this.settings.errorPlacement?this.settings.errorPlacement(B,A(C)):B.insertAfter(C)
}}if(!D&&this.settings.success){B.text("");
typeof this.settings.success=="string"?B.addClass(this.settings.success):this.settings.success(B)
}this.toShow=this.toShow.add(B)
},errorsFor:function(B){return this.errors().filter("[for='"+this.idOrName(B)+"']")
},idOrName:function(B){return this.groups[B.name]||(this.checkable(B)?B.name:B.id||B.name)
},checkable:function(B){return/radio|checkbox/i.test(B.type)
},findByName:function(B){var C=this.currentForm;
return A(document.getElementsByName(B)).map(function(D,E){return E.form==C&&E.name==B&&E||null
})
},getLength:function(C,B){switch(B.nodeName.toLowerCase()){case"select":return A("option:selected",B).length;
case"input":if(this.checkable(B)){return this.findByName(B.name).filter(":checked").length
}}return C.length
},depend:function(C,B){return this.dependTypes[typeof C]?this.dependTypes[typeof C](C,B):true
},dependTypes:{"boolean":function(C,B){return C
},string:function(C,B){return !!A(C,B.form).length
},"function":function(C,B){return C(B)
}},optional:function(B){return !A.validator.methods.required.call(this,A.trim(B.value),B)&&"dependency-mismatch"
},startRequest:function(B){if(!this.pending[B.name]){this.pendingRequest++;
this.pending[B.name]=true
}},stopRequest:function(B,C){this.pendingRequest--;
if(this.pendingRequest<0){this.pendingRequest=0
}delete this.pending[B.name];
if(C&&this.pendingRequest==0&&this.formSubmitted&&this.form()){A(this.currentForm).submit()
}else{if(!C&&this.pendingRequest==0&&this.formSubmitted){A(this.currentForm).triggerHandler("invalid-form",[this])
}}},previousValue:function(B){return A.data(B,"previousValue")||A.data(B,"previousValue",previous={old:null,valid:true,message:this.defaultMessage(B,"remote")})
}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},phoneNumber:{phoneNumber:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true},commentsMaxlength:{commentsMaxlength:true}},addClassRules:function(B,C){B.constructor==String?this.classRuleSettings[B]=C:A.extend(this.classRuleSettings,B)
},classRules:function(C){var D={};
var B=A(C).attr("class");
B&&A.each(B.split(" "),function(){if(this in A.validator.classRuleSettings){A.extend(D,A.validator.classRuleSettings[this])
}});
return D
},attributeRules:function(C){var E={};
var B=A(C);
for(method in A.validator.methods){var D=B.attr(method);
if(D){E[method]=D
}}if(E.maxlength&&/-1|2147483647|524288/.test(E.maxlength)){delete E.maxlength
}return E
},metadataRules:function(B){if(!A.metadata){return{}
}var C=A.data(B.form,"validator").settings.meta;
return C?A(B).metadata()[C]:A(B).metadata()
},staticRules:function(C){var D={};
var B=A.data(C.form,"validator");
if(B.settings.rules){D=A.validator.normalizeRule(B.settings.rules[C.name])||{}
}return D
},normalizeRules:function(C,B){A.each(C,function(F,E){if(E===false){delete C[F];
return 
}if(E.param||E.depends){var D=true;
switch(typeof E.depends){case"string":D=!!A(E.depends,B.form).length;
break;
case"function":D=E.depends.call(B,B);
break
}if(D){C[F]=E.param!==undefined?E.param:true
}else{delete C[F]
}}});
A.each(C,function(D,E){C[D]=A.isFunction(E)?E(B):E
});
A.each(["minlength","maxlength","min","max"],function(){if(C[this]){C[this]=Number(C[this])
}});
A.each(["rangelength","range"],function(){if(C[this]){C[this]=[Number(C[this][0]),Number(C[this][1])]
}});
if(A.validator.autoCreateRanges){if(C.min&&C.max){C.range=[C.min,C.max];
delete C.min;
delete C.max
}if(C.minlength&&C.maxlength){C.rangelength=[C.minlength,C.maxlength];
delete C.minlength;
delete C.maxlength
}}if(C.messages){delete C.messages
}return C
},normalizeRule:function(C){if(typeof C=="string"){var B={};
A.each(C.split(/\s/),function(){B[this]=true
});
C=B
}return C
},addMethod:function(B,D,C){A.validator.methods[B]=D;
A.validator.messages[B]=C||A.validator.messages[B];
if(D.length<3){A.validator.addClassRules(B,A.validator.normalizeRule(B))
}},methods:{required:function(D,C,E){if(!this.depend(E,C)){return"dependency-mismatch"
}switch(C.nodeName.toLowerCase()){case"select":var B=A("option:selected",C);
return B.length>0&&(C.type=="select-multiple"||(A.browser.msie&&!(B[0].attributes.value.specified)?B[0].text:B[0].value).length>0);
case"input":if(this.checkable(C)){return this.getLength(D,C)>0
}default:return A.trim(D).length>0
}},remote:function(F,C,G){if(this.optional(C)){return"dependency-mismatch"
}var D=this.previousValue(C);
if(!this.settings.messages[C.name]){this.settings.messages[C.name]={}
}this.settings.messages[C.name].remote=typeof D.message=="function"?D.message(F):D.message;
G=typeof G=="string"&&{url:G}||G;
if(D.old!==F){D.old=F;
var B=this;
this.startRequest(C);
var E={};
E[C.name]=F;
A.ajax(A.extend(true,{url:G,mode:"abort",port:"validate"+C.name,dataType:"json",data:E,success:function(I){var J=I===true;
if(J){var H=B.formSubmitted;
B.prepareElement(C);
B.formSubmitted=H;
B.successList.push(C);
B.showErrors()
}else{var K={};
K[C.name]=D.message=I||B.defaultMessage(C,"remote");
B.showErrors(K)
}D.valid=J;
B.stopRequest(C,J)
}},G));
return"pending"
}else{if(this.pending[C.name]){return"pending"
}}return D.valid
},minlength:function(C,B,D){return this.optional(B)||this.getLength(A.trim(C),B)>=D
},maxlength:function(C,B,D){return this.optional(B)||this.getLength(A.trim(C),B)<=D
},commentsMaxlength:function(G,D){var H=A(D).attr("commentsMaxlength");
var F=A.validator.messages.commentsMaxlength;
var E=/.*\s(\{?\d+,?.*?\}?)\s.*/;
var C=String(this.getLength(A.trim(G),D));
var B=/(\d{1,3})(?=(\d{3})+(?:$))/g;
C=C.replace(B,"$1,");
A.validator.messages.commentsMaxlength=F.replace(E.exec(F)[1],C);
return this.optional(D)||this.getLength(A.trim(G),D)<=H
},rangelength:function(D,B,E){var C=this.getLength(A.trim(D),B);
return this.optional(B)||(C>=E[0]&&C<=E[1])
},min:function(C,B,D){return this.optional(B)||C>=D
},max:function(C,B,D){return this.optional(B)||C<=D
},range:function(C,B,D){return this.optional(B)||(C>=D[0]&&C<=D[1])
},email:function(C,B){return this.optional(B)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(C)
},url:function(C,B){return this.optional(B)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(C)
},date:function(C,B){return this.optional(B)||!/Invalid|NaN/.test(new Date(C))
},dateISO:function(C,B){return this.optional(B)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(C)
},dateDE:function(C,B){return this.optional(B)||/^\d\d?\.\d\d?\.\d\d\d?\d?$/.test(C)
},number:function(C,B){return this.optional(B)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(C)
},phoneNumber:function(C,B){return this.optional(B)||/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|([\(. ]?[0-9])\d\d[\). ]?[ -]?[0-9]\d\d[-. ]\d{4})$)/.test(C)
},numberDE:function(C,B){return this.optional(B)||/^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(C)
},digits:function(C,B){return this.optional(B)||/^\d+$/.test(C)
},creditcard:function(F,C){if(this.optional(C)){return"dependency-mismatch"
}if(/[^0-9-]+/.test(F)){return false
}var G=0,E=0,B=false;
F=F.replace(/\D/g,"");
for(n=F.length-1;
n>=0;
n--){var D=F.charAt(n);
var E=parseInt(D,10);
if(B){if((E*=2)>9){E-=9
}}G+=E;
B=!B
}return(G%10)==0
},accept:function(C,B,D){D=typeof D=="string"?D.replace(/,/g,"|"):"png|jpe?g|gif";
return this.optional(B)||C.match(new RegExp(".("+D+")$","i"))
},equalTo:function(C,B,D){return C==A(D).val()
}}});
A.format=A.validator.format
})(jQuery);
(function(C){var B=C.ajax;
var A={};
C.ajax=function(E){E=C.extend(E,C.extend({},C.ajaxSettings,E));
var D=E.port;
if(E.mode=="abort"){if(A[D]){A[D].abort()
}return(A[D]=B.apply(this,arguments))
}return B.apply(this,arguments)
}
})(jQuery);
(function(A){A.each({focus:"focusin",blur:"focusout"},function(C,B){A.event.special[B]={setup:function(){if(A.browser.msie){return false
}this.addEventListener(C,A.event.special[B].handler,true)
},teardown:function(){if(A.browser.msie){return false
}this.removeEventListener(C,A.event.special[B].handler,true)
},handler:function(D){arguments[0]=A.event.fix(D);
arguments[0].type=B;
return A.event.handle.apply(this,arguments)
}}
});
A.extend(A.fn,{delegate:function(D,C,B){return this.bind(D,function(E){var F=A(E.target);
if(F.is(C)){return B.apply(F,arguments)
}})
},triggerEvent:function(B,C){return this.triggerHandler(B,[A.event.fix({type:B,target:C})])
}})
})(jQuery);
function singlePlayer(B){if(!B){B="video_player"
}vp=getSWF(B);
vp.width=320;
vp.height=284;
vp.style.width="320px";
vp.style.height="284px";
var A=jQuery("*[name="+B+"]");
if(A.parents(".media1, .media4").length>0){var K=A.parents(".content").children(".col2");
var H=A.parents(".ui-tabs-panel").find(".col1");
var D=A.parent(".vidHolder").attr("id");
var L=H.find("#abstract");
L.css("display","none");
K.css("display","block");
var G=A.parents(".content").children(".footer");
G.find(".col2").show()
}A.parent(".vidHolder").removeClass("larger");
if(A.parents(".ui-tabs-panel").length){A.parents(".ui-tabs-panel")[0].doubleSize=false
}var J=A.parents(".media2");
if(J.length>0){var I=2*_scrollAfter;
J.removeClass("double");
J.find("div.playlist ol").each(function(){var P=0,N=$(this).children("li");
for(var O=0,M=N.length;
O<M;
O++){if(!(O%I)){P=N[O].offsetLeft;
console.log(O,P)
}if($(N[O]).hasClass("playing")){console.log(N[O].className,N[O].offsetLeft,O,P);
break
}}this.style.left=-P+"px"
})
}var F=A.parent(".vidHolder").attr("id");
var E="photo"+F.substring(F.lastIndexOf("_"));
var H=A.parents(".ui-tabs-panel").find(".col1");
var C=H.find("#"+E);
C.find(".photo").removeClass("larger");
C.find(".regularphoto").removeClass("largerCaption");
C.find("img.imgBtn86x22").attr("src","/images/btn-largePhoto.gif").attr("alt","Large Photo")
}$(function(){jQuery("object").each(function(){if(!(jQuery(this).attr("name"))&&(jQuery(this).attr("id"))){jQuery(this).attr("name",(jQuery(this).attr("id")))
}})
});
function isValidDate(A){var D=/^(\d{1,2})(\/|-)(\d{1,2})\2(\d{2}|\d{4})$/;
var C=A.match(D);
if(C==null){return false
}month=C[1];
day=C[3];
year=C[4];
if(month<1||month>12){return false
}if(day<1||day>31){return false
}if((month==4||month==6||month==9||month==11)&&day==31){return false
}if(month==2){var B=(year%4==0&&(year%100!=0||year%400==0));
if(day>29||(day==29&&!B)){return false
}}return true
}function getZodiacSign(B){var A=B.split("/");
var E=jQuery.trim(A[0]);
var D=jQuery.trim(A[1]);
month=(parseInt(E,10))-1;
day=parseInt(D,10);
var C=null;
switch(month){case 0:if(day>=20){C="Aquarius"
}else{C="Capricorn"
}break;
case 1:if(day>=19){C="Pisces"
}else{C="Aquarius"
}break;
case 2:if(day>=21){C="Aries"
}else{C="Pisces"
}break;
case 3:if(day>=20){C="Taurus"
}else{C="Aries"
}break;
case 4:if(day>=21){C="Gemini"
}else{C="Taurus"
}break;
case 5:if(day>=22){C="Cancer"
}else{C="Gemini"
}break;
case 6:if(day>=23){C="Leo"
}else{C="Cancer"
}break;
case 7:if(day>=23){C="Virgo"
}else{C="Leo"
}break;
case 8:if(day>=23){C="Libra"
}else{C="Virgo"
}break;
case 9:if(day>=24){C="Scorpio"
}else{C="Libra"
}break;
case 10:if(day>=23){C="Sagittarius"
}else{C="Scorpio"
}break;
case 11:if(day>=22){C="Capricorn"
}else{C="Sagittarius"
}break;
default:break
}return C
}function lookupElementsById(E,D){var C=document.getElementsByTagName(E);
var B=new Array();
for(var A=0;
A<C.length;
A++){if(C[A].id==D){B.push(C[A])
}}return B
}function lookupElementById(B){var A=jQuery("#"+B);
return A
}function showDiv(A){jQuery("#"+A).show()
}function hideDiv(A){jQuery("#"+A).hide()
}function showHideDiv(A,C){var B=Boolean(C);
if(B){showDiv(A)
}else{hideDiv(A)
}}function isCookieEnabled(){var A=(navigator.cookieEnabled)?true:false;
if(typeof navigator.cookieEnabled=="undefined"&&!A){document.cookie="testcookie";
A=(document.cookie.indexOf("testcookie")!=-1)?true:false
}return(A)
}function defaultFooter(A,B){showHideDiv(A+"-default-footer",B)
}function searchFooter(A,B){showHideDiv(A+"-search-footer",B)
}function errorDiv(A,B){showHideDiv(A+"-error",B)
}function moduleAdDiv(A,B){}function fetchDate(C,E){var D=Boolean(isCookieEnabled());
var B=null;
var A=document.getElementById(C+"-birthdate");
if(D){if(jQuery.cookie(C+"-birthdate-cookie")==null){jQuery.cookie(C+"-birthdate-cookie",E,{expires:365});
B=E
}else{B=jQuery.cookie(C+"-birthdate-cookie")
}}else{if(A==""){A=E;
B=A.value
}else{B=A.value
}}return B
}function setBirthDate(B,D){var C=Boolean(isCookieEnabled());
var A=document.getElementById(B+"-birthdate");
if(C){jQuery.cookie(B+"-birthdate-cookie",D,{expires:365})
}else{A.value=D
}}function showSign(C,D){var B=fetchDate(C,D);
var A=getZodiacSign(B);
var E=C+"-"+A;
showDiv(E);
defaultFooter(C,true);
moduleAdDiv(C,true);
searchForm(C,false);
searchFooter(C,false)
}function searchForm(B,C){var A=B+"-search-horoscope";
showHideDiv(A,C)
}function changeHoroscope(C,D){var B=fetchDate(C,D);
var A=getZodiacSign(B);
var E=C+"-"+A;
hideDiv(E);
defaultFooter(C,false);
searchForm(C,true);
searchFooter(C,true);
errorDiv(C,false);
moduleAdDiv(C,false)
}function submitForm(B){var C=document.getElementById(B+"-birthdate").value;
var A=Boolean(isValidDate(C));
if(A){setBirthDate(B,C);
showSign(B,C)
}else{errorDiv(B,true)
}}function cancelHoroscope(C,D){var B=fetchDate(C,D);
var A=getZodiacSign(B);
var E=C+"-"+A;
showDiv(E);
defaultFooter(C,true);
moduleAdDiv(C,true);
searchForm(C,false);
searchFooter(C,false);
errorDiv(C,false)
}if(!window.fim){window.fim={}
}if(!fim.mfl){fim.mfl={}
}if(!fim.mfl.util){fim.mfl.util={}
}if(!fim.timeline){fim.timeline={}
}if(!fim.config){fim.config={}
}fim.config.preventRefreshBuffer=30000;
fim.mfl.util.getRefreshAt=function(){if(!window.fim||!fim.timeline||"undefined"==typeof (fim.timeline.initial)){throw ("Undefined fim.timeline.initial")
}if("undefined"==typeof (fim.timeline.refreshAt)){fim.timeline.refreshAt=false;
$("meta[http-equiv=refresh], meta[httpequiv=refresh]").each(function(){if(false===fim.timeline.refreshAt||fim.timeline.refreshAt>this.content){fim.timeline.refreshAt=fim.timeline.initial+(this.content*1000)
}})
}return fim.timeline.refreshAt
};
fim.mfl.util.willRefreshSoon=function(){var B=new Date().valueOf(),A;
try{A=fim.mfl.util.getRefreshAt();
if(false!==A){if(B>=(A-fim.config.preventRefreshBuffer)){return true
}}}catch(C){}return false
};
(function(){fim.mfl.AjaxFramework=function(){jQuery.ajaxSetup({timeout:60000,error:this._handleError});
jQuery("#waitMessageWrapper").bind("ajaxStart",function(){jQuery(this).show()
}).bind("ajaxStop",function(){jQuery(this).hide()
});
D.PAGE_LOAD_DATE_STAMP=new Date()
};
var B=fim.mfl.AjaxFramework.prototype;
var D=fim.mfl.AjaxFramework;
var C=null;
var A=null;
D.PAGE_LOAD_DATE_STAMP=null;
B.makeAjaxCall=function(E){if(fim.mfl.util.willRefreshSoon()){return jQuery
}E=jQuery.extend({beforeSend:function(F){F.setRequestHeader("If-Modified-Since","0")
}},E);
return jQuery.ajax(E)
};
B._handleError=function(H,I,G){var E;
try{E=H.status;
if(E){if(E==404){}else{}}}catch(F){}};
B.handleApplicationException=function(G){var F=G;
if(typeof F=="string"&&F.indexOf("MFL-Application-Exception-Ajax")!=-1){var E=F.substring(F.indexOf("<MFL-Application-Exception-Ajax>")+32,F.indexOf("</MFL-Application-Exception-Ajax>"));
return{exceptionThrown:true,exceptionMessage:E}
}else{return{exceptionThrown:false,exceptionMessage:null}
}};
B._createLoadingMessageDiv=function(I){var J=(I)?I:"Loading";
if(document.getElementById("waitMessageWrapper")){var H=document.getElementById("waitMessage");
if(H.innerText){H.innerText=J
}else{H.textContent=J
}jQuery("#waitMessage").text(J)
}else{var G=document.createElement("div");
G.setAttribute("id","waitMessageWrapper");
G.className="waitMessageWrapper";
var F=document.getElementById("mfl");
F.appendChild(G);
var E=document.createElement("div");
E.setAttribute("id","waitMessage");
E.className="waitMessage";
G.appendChild(E);
var K=document.createTextNode(J);
E.appendChild(K)
}};
B.doesTabNeedFreshContent=function(F,H,J){if(F){if(J){var G=Number(J);
if(G!=NaN){var I=H.getAttribute("tabLoadDateStamp");
var E=new Date();
if(I==null){if((E-D.PAGE_LOAD_DATE_STAMP)>=G*1000){return true
}}else{I=Number(I);
if(I!=NaN&&(E-I)>=G*1000){return true
}}}}}return false
}
})();
(function(){fim.mfl.Validation=function(){};
var A=fim.mfl.Validation.prototype;
var B=fim.mfl.Validation;
A.isZipValid=function(C){return(/(^\d{5}$)/.test(C))
};
A.isValidAge=function(C){return(/(^\d{2}$)/.test(C))
};
A.isValidYear=function(C){return(/(^\d{4}$)/.test(C))
};
A.isEmailValid=function(C){return(/(^([\w-]+[\.]?)+[\w-]+@([\w-]+\.)+[\w-]+$)/.test(C))
};
A.isMultipleEmailsValid=function(E){var D=E.split(",");
for(var C=0;
C<D.length;
C++){if(!this.isEmailValid(D[C])){return false
}}return true
};
A.isDateValid=function(E){var D=/^\d{2}(\/)\d{2}(\/)\d{4}$/;
if(D.test(E)){var F=E.substring(2,3);
var I=E.split(F);
var C={"01":31,"03":31,"04":30,"05":31,"06":30,"07":31,"08":31,"09":30,"10":31,"11":30,"12":31};
var J=parseInt(I[1],10);
if(C[I[0]]!=null){if(J<=C[I[0]]&&J!=0){return true
}}var H=parseInt(I[0],10);
if(H==2){var G=parseInt(I[2]);
if(J>0&&J<29){return true
}else{if(J==29){if((G%4==0)&&(G%100!=0)||(G%400==0)){return true
}}}}}return false
}
})();
(function(B){fim.mfl.RefreshModule=function(C){if(C){this._moduleParentDivId=C;
if(B("#"+this._moduleParentDivId).find(".breaking").length>0){this._isBreaking=true
}if(B("#"+this._moduleParentDivId).find("#nwsAlerts").length>0){this._isNWSAlert=true;
this._setNWSPublicProperties()
}this._setData();
this._scheduleModuleRefresh()
}};
var A=fim.mfl.RefreshModule.prototype;
A._moduleParentDivId=null;
A._moduleTtl=null;
A._moduleUrl=null;
A._refreshTimer=null;
A._isBreaking=false;
A._isNWSAlert=false;
A._isFirstRefresh=true;
A._setNWSPublicProperties=function(){this.requestData={rawDataHTML:null,newUrl:null,newTtl:null,titleHTML:null,scrollHTML:null,viewAllHTML:null}
};
A.resetNWSPublicProperties=function(){if(this.requestData){for(var C in this.requestData){this.requestData[C]=null
}}};
A._parseNWSRequest=function(F){var E=this,D=this._moduleParentDivId;
F=B.trim(F);
if(B("#"+D).find("#nwsAlerts")==null||B("#"+D).find("#nwsAlerts").children().length==0){if(F.length>0){B("#"+E._moduleParentDivId).html(F)
}}else{var C=(F==""||F==null)?B([]):B(F);
E.requestData.rawDataHTML=E._getNWSString(C.parent().html());
E.requestData.newUrl=E._getNWSString(C.attr("url"));
E.requestData.newTtl=E._getNWSString(C.attr("ttl"));
E.requestData.titleHTML=E._getNWSString(C.find("h3").html());
E.requestData.scrollHTML=E._getNWSString(C.find("h4").children("div").html());
E.requestData.viewAllHTML=E._getNWSString(C.children("a.view-all").wrap("<div></div>").parent().html())
}};
A._getNWSString=function(C){return C==null?"":C
};
A._setData=function(){if(this._isNWSAlert&&this.requestData.newTtl!=null){this._moduleTtl=this.requestData.newTtl!=""?this.requestData.newTtl:0;
this._moduleUrl=this.requestData.newUrl
}else{var C=B("#"+this._moduleParentDivId).children().get(0);
if(C){this._moduleTtl=C.getAttribute("ttl");
this._moduleUrl=C.getAttribute("url")
}}if(this._refreshTimer){clearTimeout(this._refreshTimer)
}};
A._refreshBreakingNews=function(){var D=this;
if(D._isBreaking&&B(".breaking").css("display")!=="none"){var C=new fim.mfl.AjaxFramework();
C.makeAjaxCall({url:D._moduleUrl,success:function(F,E){var G=C.handleApplicationException(F);
if(G.exceptionThrown){D._scheduleModuleRefresh()
}else{if(B.trim(F)!==""){B("#"+D._moduleParentDivId).html(F);
if(D._isBreaking){B("div.breakingRight a.close").bind("click",function(){B(this).parents(".breaking").hide("slow")
})
}D._setData()
}D._scheduleModuleRefresh()
}}})
}};
A._refreshNWSTeaser=function(){var D=this;
var C=new fim.mfl.AjaxFramework();
C.makeAjaxCall({url:D._moduleUrl,success:function(F,E){var G=C.handleApplicationException(F);
if(G.exceptionThrown){D._scheduleModuleRefresh()
}else{if(B.trim(F)!==""){D._parseNWSRequest(F);
D._setData()
}D._scheduleModuleRefresh()
}}})
};
A._refreshModule=function(){if(this._isBreaking){this._refreshBreakingNews()
}if(this._isNWSAlert){this._refreshNWSTeaser()
}};
A._scheduleModuleRefresh=function(){if(this._moduleTtl&&this._moduleUrl){var C=Number(this._moduleTtl);
if(C!=NaN&&C!=0){var D=this;
if(this._isBreaking||this._isNWSAlert){var E=C*60000;
if(D._isFirstRefresh){E=30000;
D._isFirstRefresh=false
}this._refreshTimer=setTimeout(function(){D._refreshModule.apply(D)
},E)
}}}}
})(jQuery);
function isCookieEnabled(){var A=navigator.cookieEnabled?true:false;
if(typeof navigator.cookieEnabled=="undefined"&&!A){document.cookie="testcookie";
A=(document.cookie.indexOf("testcookie")!=-1)?true:false
}return(A)
}function fitImage(){if(!this.complete){var F=this;
setTimeout(function(){fitImage.call(F)
},50);
return 
}var A,G,D,L,H=[],I=$(this).parents("div.image")[0]||$(this).parents("div.photos")[0]||$(this).parents("div.photo")[0],B,K,J=$(this).css("display"),M;
$(this).css("padding","");
B=$(I).width();
K=$(I).height();
if($.browser.msie&&$.browser.version==6&&I.className=="photos"){K=240
}$(this).parents().each(function(N){if($(this).css("display")==="none"){H[H.length]={el:this,oDisplay:$(this).css("display"),oPosition:$(this).css("position"),oZIndex:$(this).css("z-index")};
$(this).css({display:"block",position:"relative","z-index":"-"+(N+1*10)})
}});
$(I).find("p.fontStyle14").each(function(N){if(this.innerHTML){M=true
}});
A=parseInt(this.width);
G=parseInt(this.height);
for(var E=0,C=H.length;
E<C;
E++){if($(H[E].el).hasClass("hideMP1")){$(H[E].el).css({display:"",position:"","z-index":""})
}else{$(H[E].el).css({display:H[E].oDisplay,position:H[E].oPosition,"z-index":H[E].oZIndex})
}}if((A!=1)&&(A<B)){L=(Math.round((B-A)/2)).toString()+"px";
$(this).css({"padding-left":L,"padding-right":L})
}if((G!=1)&&(G<K)){D=(Math.round((K-G)/2)).toString()+"px";
$(this).css({"padding-top":D,"padding-bottom":D})
}}(function(B){fim.mfl.WEX2=function(C){this._moduleId=C;
this._init()
};
var A=fim.mfl.WEX2.prototype;
A._moduleId=null;
A._init=function(){B("#"+this._moduleId+" .controls button.loop").each(function(){var F=B(this).parents(".ui-tabs-panel:eq(0)").attr("id");
parentIndex=F.substr(F.length-1);
if(parentIndex==="1"){this.$lazyImages=B(this).parent().siblings(".image").children("div").not(":eq(0)").find("img[lazyUrl]")
}else{this.$lazyImages=B(this).parent().siblings(".image").children("div").not(":eq(0)").find("img[url]");
this.$lazyImages.each(function(){this.setAttribute("lazyUrl",this.getAttribute("url"));
this.removeAttribute("url")
})
}B(this).bind("click.lazyUrl",function(){this.$lazyImages.each(function(){this.setAttribute("src",this.getAttribute("lazyUrl"));
this.removeAttribute("lazyUrl")
});
B(this).unbind("click.lazyUrl")
})
});
B("#"+this._moduleId).find(".content .image img").each(function(F){if(this.complete){fitImage.call(this)
}B(this).load(fitImage)
});
var C=B("#"+this._moduleId).find(".col2");
B(C).each(function(){var M=B(this).siblings(".col1");
var G=B(M).find("#0");
var K=B(M).find("#0");
var J=this;
var I=B(this).find("#0");
var F=B(I);
var H=B(I);
var N=B(this).find(".playlist .playing");
var L=B(N);
var O=B(N);
if(B(M).find(".showMP1").length==0){B(M).each(function(P){if(B(this).find(".wrapper .photo").length>0){B(this).parent().css("overflow","hidden")
}})
}B(M).find(".photo").each(function(P){if((B(this).parent().parent().css("height")=="300px")){if(B(this).parent().siblings(".hideMP1").length){B(this).parent().parent().css({height:"auto","padding-bottom":"10px"})
}else{if(B(this).parent().siblings(".showMP1").length){B(this).parent().parent().css({"min-height":"300px",height:"auto","padding-bottom":"0"})
}else{B(this).parent().parent().css({height:"auto","padding-bottom":"10px"})
}}}});
B(this).find(".photo").each(function(V){var R=B(this).find("div");
var U=B(this).find("a").is("a")?B(this).find("a"):false;
var Q=B(R).children("img").css("display","none");
var T=Q.attr("id");
var W=Q.attr("src");
var S=Q.attr("title");
var P=B(M).find("#"+T).find("img")[0];
_panelId=B(M).parents(".wex2mult").parent().attr("id");
_panelIndex=_panelId.substr(_panelId.length-1);
if(_panelIndex!="1"&&V!=0){P.setAttribute("lazyUrl",P.getAttribute("url"));
P.removeAttribute("url")
}if(W.length==0){B(this).css("display","inline");
B(this).css("cursor","pointer");
B(this).click(function(){if(G.find(".controls button.loop").length&&/stop/i.test(G.find(".controls button.loop img").attr("alt"))){G.find(".controls button.loop").click()
}K=B(M).find("#"+T);
G.css("display","none");
K.css("display","block");
G=K;
return false
})
}else{Q.addClass("thumb").attr("rel",W);
B(M).find("#"+T+" .pop img").each(function(X){if(this.complete){fitImage.call(this)
}B(this).load(fitImage)
});
Q.bind("click.lazyUrl",function(){P.setAttribute("src",P.getAttribute("lazyUrl"));
P.removeAttribute("lazyUrl");
B(this).unbind("click.lazyUrl")
}).end().click(function(){if(G.find(".controls button.loop").length&&/stop/i.test(G.find(".controls button.loop img").attr("alt"))){G.find(".controls button.loop").click()
}K=B(M).find("#"+T);
G.css("display","none");
K.css("display","block");
G=K;
return false
});
if(V==0){Q.unbind("click.lazyUrl")
}Q.css("display","inline");
Q.css("cursor","pointer")
}U.click(function(X){B(this).parent().find("img.thumb").click();
X.preventDefault()
})
});
B(M).find(".wrapper .photo img").each(function(P){if(this.complete){fitImage.call(this)
}B(this).load(fitImage)
});
B(this).find(".playlist li").each(function(){B(this).click(function(){var Q=B(this).attr("id");
K=B(M).find("#"+Q);
G.css("display","none");
K.css("display","block");
G=K;
H=B(J).find("#"+Q);
F.filter("div").css("display","none");
H.css("display","block");
F=H;
O=B(J).find(".playlist").find("#"+Q);
L.removeClass("playing");
O.addClass("playing");
L=O;
var R=B(J).find("#"+Q).find("#storytext");
if(R!=null){var P=B(M).find("#abstract");
P.html(R.html())
}return false
})
})
});
var D=B("#"+this._moduleId).find(".tempreture .leftTempreture a");
var E=B("#"+this._moduleId).find(".tempreture .rightTempreture a");
B(D).removeAttr("href").attr("style","text-decoration: none; color: gray");
B(E).bind("click",function(){B(this).parents(".module").find(".farenheit").hide();
B(this).parents(".module").find(".celsius").show();
B(this).removeAttr("href").attr("style","text-decoration: none; color: gray");
B(this).parents(".module").find(".tempreture .leftTempreture a").attr("href","#").removeAttr("style")
});
B(D).bind("click",function(){B(this).parents(".module").find(".farenheit").show();
B(this).parents(".module").find(".celsius").hide();
B(this).removeAttr("href").attr("style","text-decoration: none; color: gray");
B(this).parents(".module").find(".tempreture .rightTempreture a").attr("href","#").removeAttr("style")
})
}
})(jQuery);
(function(B){fim.mfl.Ratings=function(C){this.div=C;
this._pid=C.getAttribute("id");
this._init(this._pid)
};
var A=fim.mfl.Ratings.prototype;
A._init=function(C){switch(C){case"22":new fim.mfl.OneSite(this.div);
break;
case"5":new fim.mfl.SNAP(this.div);
break;
default:alert("Error occured while rating.\nPlease try agian. Thanks");
return false
}}
})(jQuery);
(function(B){fim.mfl.OneSite=function(C){this.div=C;
this._init()
};
var A=fim.mfl.OneSite.prototype;
A._moduleId=null;
A._init=function(){var D=this.div;
var G=null;
var K=B(".userWelcome a").text()?B(".userWelcome a").text():0;
var J=B(D).find(".lrgStarRating");
var C=B(J).attr("id").split("|")[0];
var H=B(J).attr("id").split("|")[1];
var E=B(J).find("a");
var I=Boolean(isCookieEnabled());
if(I){F()
}B(E).each(function(){B(this).click(function(){if(G==null){if(confirm("Requried login to rate this story. \n Please select OK to redirect to the login page, \n or CANCEL to use sign-in link from header")){var P=window.location.hostname;
var M=P.split(".");
var S=M[M.length-2];
document.location.href="http://participate."+S+".com/go/network/login"
}return false
}else{if(I&&jQuery.cookie(C+"-"+H+"-"+K)){alert("You have already rated this story!");
return false
}else{var L=B(this).attr("href");
var O=new String(document.location);
var N=O.indexOf("?");
O=N>0?O.substr(0,(N)):O;
var R="storyId="+C+"&storyUserRating="+B(this).html()+"&url="+O+"&title="+document.title+"&SId="+H;
var Q=new fim.mfl.AjaxFramework();
Q.makeAjaxCall({url:L,data:R,success:function(U,T){var W=Q.handleApplicationException(U);
if(W.exceptionThrown){alert("Error occured while posting rating.\nPlease try agian. Thanks");
return false
}else{var V=B(U).find(".starRating span").html();
B(".starRating span").html(V);
if(I){jQuery.cookie(C+"-"+H+"-"+K,V,{expires:1})
}}}});
return false
}}})
});
function F(){var L=jQuery.cookie("core_anon");
var M=jQuery.cookie("core_u");
if(L==null&&M!=null){G=M
}}}
})(jQuery);
(function(B){fim.mfl.SNAP=function(C){this.div=C;
this._init()
};
var A=fim.mfl.SNAP.prototype;
A._moduleId=null;
A._init=function(){var C=this.div;
var I=null;
var D=B(C).find(".lrgStarRating");
var G=B(D).attr("id");
var F=B(D).find("a");
var E=Boolean(isCookieEnabled());
if(E){H()
}B(F).each(function(){B(this).click(function(){if(I==null){if(confirm("You need to login to rate this story. \n Please select OK to redirect to the login page.")){var L=window.location.hostname;
var K=L.split(".");
var O=K[K.length-2];
document.location.href="http://participate."+O+".com/profiles/signin.aspx?return_url="+location.href
}return false
}else{var J=B(this).attr("href");
var N="storyId="+G+"&userGuid="+I+"&storyUserRating="+B(this).html();
var M=new fim.mfl.AjaxFramework();
M.makeAjaxCall({url:J,data:N,success:function(Q,P){var S=M.handleApplicationException(Q);
if(S.exceptionThrown){alert("Error occured while posting comment.\nPlease try agian. Thanks");
return false
}else{var R=B(Q).find(".starRating span").html();
B(".starRating span").html(R)
}}});
return false
}})
});
function H(){var J=jQuery.cookie("FTV_SE");
if(J!=null){I=J
}}}
})(jQuery);
(function(A){A.fn.mp4=function(){return this.each(function(){var B=A(this).find(".col2");
B.each(function(D){var G=this;
var H=A(this).attr("id");
var F=A(this).siblings(".col1");
var E=F.find("#abstractStory"+H);
var C=A(this).find("#0Story"+H);
E.html(C.html());
A(this).find(".playlist li").bind("click",function(I){var J=A(this).attr("id");
A(G).find(".playlist .ui-tabs-selected").removeClass("ui-tabs-selected");
A(this).addClass("ui-tabs-selected");
E.html(A(G).find("#"+J+"Story"+H).html())
})
})
})
}
})(jQuery);
(function(){fim.mfl.Weather=function(B){this._moduleId=B;
this._init()
};
var A=fim.mfl.Weather.prototype;
A._moduleId=null;
A._init=function(){var G=jQuery("#"+this._moduleId).find("form")[0];
var F=jQuery("#"+this._moduleId).find(".footer")[0];
var H=jQuery(F).find("span")[0];
var E=this._moduleId;
var C=Boolean(isCookieEnabled());
if(C){var D=jQuery.cookie(E);
if(D!=null&&D!=""&&Validation.isZipValid(D)){B(D,E)
}}jQuery(H).hide();
if(typeof G!="undefined"){jQuery(G).submit(function(){var J=jQuery(G).find(":input")[0];
var I=jQuery(J).val();
if(I!=null&&I!=""&&Validation.isZipValid(I)){B(I,E)
}else{jQuery(H).show();
return false
}return false
})
}function B(K,N){var M=jQuery("#"+N).find("form")[0];
var L=jQuery("#"+N).find(".footer")[0];
var O=jQuery(L).find("span")[0];
var N=N;
var P=jQuery(M).find(":input")[0];
P.value=K;
var I=M.getAttribute("action");
var J=new fim.mfl.AjaxFramework();
J.makeAjaxCall({url:I,data:jQuery(M).serialize(),success:function(h,a){var b=J.handleApplicationException(h);
if(b.exceptionThrown){jQuery(self.errorDiv).show()
}else{var S=jQuery(h).find("#wexTemp")[0];
var d=jQuery(h).find("#wexImg")[0];
var U=jQuery(h).find("#wexCond")[0];
var T;
var c;
var R="";
if(typeof S!="undefined"){var g=jQuery("#"+N).find(".ui-tabs-selected")[0];
if(typeof g!="undefined"){var Z=jQuery(g).find("span")[0];
jQuery(Z).text("Weather for "+K)
}var V=jQuery(S).html();
if(typeof d!="undefined"){T=jQuery(d).attr("src");
c=jQuery(d).attr("alt")
}if(typeof U!="undefined"){R=jQuery(U).html()
}var X=jQuery("#"+N).find("#wextab")[0];
var e=jQuery(X).find("span#wexTemp")[0];
jQuery(e).html(V);
var j=jQuery(X).find("img#wexImg")[0];
jQuery(j).attr({src:T,alt:c,title:c});
var W=jQuery(X).find("a#wexCond")[0];
jQuery(W).html(R);
var f=Boolean(isCookieEnabled());
var Y=K;
if(f){jQuery.cookie(N,Y,{expires:200})
}var Q=jQuery(M).find(":input")[0];
Q.value=""
}else{jQuery(O).show();
return false
}jQuery(O).hide();
return false
}}})
}}
})();
(function(){fim.mfl.loadLazyImages=function(A){$(A).find('img[src*="blank.gif"]').each(function(D){if($(A)[0].id){try{var C=$(this).attr("url");
if(C&&this.src.indexOf("/images/blank.gif")>0){$(this).hide();
$(this).load(function(){$(this).show()
}).attr("src",C);
this.removeAttribute("url")
}}catch(B){}}})
}
})();
(function(){fim.mfl.getSiteTime=function(A){getTime(A);
setInterval("getTime('"+A+"' )",60000)
}
})();
getTime=function(E){var F={PDT:-7,PST:-8,MDT:-6,MST:-7,CDT:-5,CST:-6,EDT:-4,EST:-5,HST:-10,HADT:-9,HAST:-10,AKDT:-8,AKST:-9};
var H=new Date();
var G=H.getTime();
var A=H.getTimezoneOffset()*60000;
var D=G+A;
var C=0;
if(typeof timeZone!="undefined"){C=F[timeZone.toUpperCase()]
}var I=new Date(D+(3600000*C));
var B=I.getHours();
var K=I.getMinutes();
var J="AM";
if(B>11){J="PM";
B=B-12
}if(B==0){B=12
}else{if(B<10){B="0"+B
}}if(K<10){K="0"+K
}jQuery("#"+E).html(B+":"+K+J+" "+((typeof timeZone!="undefined")?timeZone:"GMT"))
};
fim.mfl.util.isCookieEnabled=function(){var A=(navigator.cookieEnabled)?true:false;
if(typeof navigator.cookieEnabled=="undefined"&&!A){document.cookie="testcookie";
A=(document.cookie.indexOf("testcookie")!=-1)?true:false
}return A
};

/**
 *	This function will traverse a jQuery dom object to find a video player ID
 *  for the new OSMF video player or fallback to the legacy player. If found, returns ID.
 *  - Steve Kudirka - EndPlay
 */
fim.mfl.util.findVideoID = function($el){
	var epv, id;
	try{
		epv = window.EndPlayVideo;
	} catch(er){}
	if(epv){
		id = $el.find('.vidHolder .video-js-innerContainer').attr('data-id');
		if(id!=null){
			return id;
		}
	}
	//last resort, fallback to legacy
	return $el.find('.vidHolder object').attr('name');
}

fim.mfl.showSelectedStory=function(E,B,A,G,C){var F=document.getElementById(E);
var K=document.getElementById(E+"-li");
if(F){for(var H=0;
H<=A;
H++){var D=document.getElementById(B+H);
var J=document.getElementById(B+H+"-li");
if(D&&K){D.className="ui-tabs-hide";
J.className=""
}}F.className="";
K.className=G;
var I= fim.mfl.util.findVideoID( $(K).parents(".content") );
getSWF(I).playVideo(C.video,C.keyframe,"#",C.storyURL)
}};
$.fn.poll=function(){return this.each(function(){var A=$(this);
var B=A.find("#componentId").val();
A.find("#resultsLink").click(function(){$(this).hide();
A.find("#pollFormDiv, #pollResultsDiv").toggle();
A.find("#pollResultsDiv .hide").show();
return false
});
A.find("#pollResultsDiv .hide").click(function(){$(this).hide();
A.find("#pollFormDiv, #pollResultsDiv").toggle();
A.find("#resultsLink").show();
return false
});
if($.cookie(B)!=null){A.find("#pollFormDiv").hide();
A.find("#pollResultsDiv").show();
A.find("#resultsLink").hide();
A.find("#pollResultsDiv .hide").hide()
}A.find("form").submit(function(){if(A.find("input:checked").length>0){if(A.find("#captchaResponse").val()==""){A.find(".errorDiv span").hide().filter("#captchaError").show();
return false
}A.find(".errorDiv span").hide();
$.ajax({url:A.find("form").attr("action"),type:"POST",data:A.find("form").serialize(),success:function(E,C){if(E.indexOf("MFL-Application-Exception-Ajax")!=-1){A.find(".errorDiv span").hide().filter("#serverError").show();
A.find("#refreshCaptcha").click()
}else{if($.trim(E)!=""){var D=A.append("<div id='temp' />").find("#temp").hide().append(E).find("#pollResultsDiv").html();
$(A.find("#pollResultsDiv")[0]).html(D);
A.find("#temp").remove()
}A.find("#resultsLink").hide();
A.find("#pollFormDiv, #pollResultsDiv").toggle();
A.find("#pollResultsDiv .hide").hide();
$.cookie(B,"!@#$%^&*<>?|~",{expires:1})
}}})
}else{A.find(".errorDiv span").hide().filter("#formError").show()
}return false
})
})
};
fim.mfl.util.identifyBrowser=function(){if(navigator.vendor){document.getElementById("mfl").className="webkit";
if(navigator.vendor.indexOf("Apple")!=-1){document.getElementById("mfl").className+=" safari";
var A=navigator.userAgent;
var B=new RegExp("Version/([0-9]{1,})");
if(B.exec(A)!=null){document.getElementById("mfl").className+=" saf"+parseFloat(RegExp.$1)
}}else{if(navigator.vendor.indexOf("Google")!=-1){document.getElementById("mfl").className+=" chrome";
var A=navigator.userAgent;
var B=new RegExp("Chrome/([0-9]{1,})");
if(B.exec(A)!=null){document.getElementById("mfl").className+=" chr"+parseFloat(RegExp.$1)
}}}}else{if(window.sidebar){document.getElementById("mfl").className="mozilla";
var A=navigator.userAgent;
var B=new RegExp("Firefox/([0-9]{1,}[.0-9]{0,2})");
if(B.exec(A)!=null){document.getElementById("mfl").className+=" ff"+parseFloat(RegExp.$1)
}}else{if(window.external){document.getElementById("mfl").className="msie";
var A=navigator.userAgent;
var B=new RegExp("MSIE ([0-9]{1,})");
if(B.exec(A)!=null){document.getElementById("mfl").className+=" ie"+parseFloat(RegExp.$1)
}}else{if(window.opera){document.getElementById("mfl").className="opera";
var A=window.opera.version();
var B=new RegExp("([0-9]{1,2})");
if(B.exec(A)!=null){document.getElementById("mfl").className+=" oper"+parseFloat(RegExp.$1)
}}}}}if(navigator.userAgent.indexOf("Mac")!=-1){document.getElementById("mfl").className+=" mac"
}};
var _scrollAfter=1;
var mflMp2BottomClasses=function(){return"mflMp2Bottom1 mflMp2Bottom2 mflMp2Bottom3 mflMp2Bottom4"
};
function onDOMReady(C){var E=C("body");
C("embed").each(function(){if(!C(this).attr("wmode")){C(this).attr({wmode:"opaque"})
}});
if(navigator.vendor){if(navigator.vendor.indexOf("Apple")!=-1){E.addClass("safari")
}}if(window.opera){E.addClass("opera")
}else{if(window.sidebar){E.addClass("mozilla")
}else{if(window.external){E.addClass("msie");
C("input").each(function(Q){C(this).addClass(this.type)
});
C(".globalNavTop li").each(function(Q){C(this).hover(function(){C(this).addClass("hover")
},function(){C(this).removeClass("hover")
})
});
C(".sitemap dd li .rss").after("<div/>")
}}}if(C.browser.msie){C(".content.images").parents(".module").bind("mouseover",function(Q){C(this).css("z-index","999")
}).bind("mouseout",function(Q){C(this).css("z-index","")
})
}C(".globalNavTop li").each(function(){C(this).hover(function(){var T=C(this).find(">div"),U=getOffset(this,"x"),S=T.width(),R=C("#wrapper"),Q=C(R).width()+getOffset(R[0],"x");
if(U+S+11>Q){T.css({left:Q-(U+S+7)+"px"})
}},function(){C(this).find(">div").css({left:""})
})
});
C("input").each(function(Q){C(this).addClass(this.type)
});
C.each(C(".zebratable tbody tr"),function(Q){if(Q%2==1){this.className+="even"
}});
if(C.fn.cycle){C("div.hov").each(function(Q){C(this).cycle({fx:"scrollHorz",next:C(this).siblings(".next"),prev:C(this).siblings(".previous"),nowrap:1,timeout:0})
});
if(typeof currentSlide!="undefined"){C(".horoscope_wrap").cycle({next:C(".bnrt"),prev:C(".bnlt"),height:"72px",width:"430px",startingSlide:(currentSlide-1),fx:"fade",cleartype:1}).cycle("pause").css("margin","0 auto")
}C(".media2 .playlist ol").each(function(S){var U=this,Q=C(U).find("li"),R=C(this).parents(".content").find(".playlistControls");
U.style.position="relative";
var T=0;
for(var S=0;
S<Q.length;
S++){if(C(Q[S]).hasClass("playing")){break
}T++
}U.style.left=(-T*Q[0].offsetWidth)+"px";
R.find(".next").click(function(X){X.preventDefault();
var V=Q[0].offsetWidth,Y=parseInt(U.style.left),W=C(this).parents(".double").length?(4*_scrollAfter):(2*_scrollAfter);
if(Y%V===0&&Y>-(Q.length-W)*V){C(U).animate({left:-(V*W)+Y},500)
}});
R.find(".prev").click(function(X){X.preventDefault();
var V=Q[0].offsetWidth,Y=parseInt(U.style.left),W=C(this).parents(".double").length?(4*_scrollAfter):(2*_scrollAfter);
if(Y%V===0&&Y<0){C(U).animate({left:(V*W)+Y},500)
}})
});
var D=C(".media2 .photos .photo img").attr("isLarge")==="true"?480:240,O,H=0;
C(".media2 .photos p.fontStyle14").each(function(Q){if(this.innerHTML){O=true
}if(C(this).text()&&C(this).text().length>H){H=C(this).text().length
}});
if(H>0){C(".media2 .photos").removeClass(mflMp2BottomClasses);
if(C(".media2 .photos .photo img").attr("isLarge")==="true"){if(H<=240){C(".media2 .photos").addClass("mflMp2Bottom1")
}else{C(".media2 .photos").addClass("mflMp2Bottom2")
}}else{if(H<=240){C(".media2 .photos").addClass("mflMp2Bottom3")
}else{C(".media2 .photos").addClass("mflMp2Bottom4")
}}}D=(O?D+75:D)+"px";
C(".controlsContainer .regular").click(function(){var T,R,Q,S=0;
C(".media2 .photos p.fontStyle14").each(function(U){if(this.innerHTML){Q=true
}if(C(this).text()&&C(this).text().length>S){S=C(this).text().length
}});
if(C(this).parents(".module").hasClass("double")){C(this).parents(".module").removeClass("double");
C(this).parents(".content").find(".photos").removeClass("larger");
T=C(this).parents(".module").find(".photos");
R="240px";
T.height(R);
if(S>0){C(".media2 .photos").removeClass(mflMp2BottomClasses);
if(S<=240){C(".media2 .photos").addClass("mflMp2Bottom3")
}else{C(".media2 .photos").addClass("mflMp2Bottom4")
}}if(C(this).parents(".ui-tabs-panel")[0]){C(this).parents(".ui-tabs-panel")[0].doubleSize=false
}else{C(this).parents(".media2 .content").doubleSize=false
}if(C(this).parents(".module").find(".photo img").attr("islarge")==="true"){C(this).parents(".module").find(".photo img").each(function(U){var V=C(this).attr("src");
C(this).attr("src",V.replace(/640_480\./,"320_240."))
})
}}else{C(this).parents(".module").addClass("double");
C(this).parents(".content").find(".photos").addClass("larger");
T=C(this).parents(".module").find(".photos");
R="480px";
T.height(R);
if(S>0){C(".media2 .photos").removeClass(mflMp2BottomClasses);
if(S<=240){C(".media2 .photos").addClass("mflMp2Bottom1")
}else{C(".media2 .photos").addClass("mflMp2Bottom2")
}}if(C(this).parents(".ui-tabs-panel")[0]){C(this).parents(".ui-tabs-panel")[0].doubleSize=true
}else{C(this).parents(".media2 .content").doubleSize=true
}C(this).parents(".module").find(".photo img").each(function(U){var V=C(this).attr("src");
C(this).attr("src",V.replace(/320_240\./,"640_480.")).attr("isLarge","true")
})
}});
C(".media2 .photos .photo img").each(function(Q){C(this).css("background-color","transparent");
C(this).css({"padding-left":"0","padding-top":"0","padding-bottom":"0","padding-right":"0"});
if(this.complete){fitImage.call(this)
}C(this).load(fitImage)
});
if(C(".media2 .photos .photo").length>1){window.play=false;
var L=C(".controlsContainer .play").attr("timeDelay");
L=(typeof L=="undefined")?4000:parseInt(L);
C(".media2 .photos").cycle({next:C(".controlsContainer .next"),prev:C(".controlsContainer .previous"),timeout:L,startingSlide:parseInt(activityComponentID),before:function(R,X,Y,T){var S=C(X),U=S.find("img");
if(U.css("padding-top")=="0px"||U.css("padding-left")=="0px"){var Q=S.parents("div.photos").width(),W=S.parents("div.photos").height(),V=S.width();
imgHeight=S.height(),hMargin=(V<Q)?(Math.round((Q-V)/2))+"px":"0px",vMargin=(imgHeight<W)?(Math.round((W-imgHeight)/2))+"px":"0px";
if(hMargin!="0px"){U.css({"padding-left":hMargin,"padding-right":hMargin})
}if(vMargin!="0px"){U.css({"padding-top":vMargin,"padding-bottom":vMargin})
}}},pager:C(".controlsContainer .count").empty()}).cycle("pause").find("div");
if(C(".controlsContainer .play").text()=="Pause"&&C(".media2 .module-bg .ui-tabs-nav .ui-tabs-selected").length==0){C(".media2 .photos").cycle("resume");
play=true
}C(".controlsContainer .play").bind("click",function(){if(play==false){C(this).parent().css("background-position","0 -22px");
C(this).parents(".module").find(".photos").cycle("resume")
}else{C(this).parent().css("background-position","0 0");
C(this).parents(".module").find(".photos").cycle("pause")
}play=!play
})
}}if(C.ui&&C.ui.tabs){C(".module-bg, .wex2").tabs({show:function(V,U){if(C(U.panel).attr("style")&&C(U.panel).attr("style").match(/display: none;?/ig)){C(U.panel).css({display:"","z-index":""})
}if(U.panel&&!U.panel.lazyLoaded){U.panel.lazyLoaded=true;
try{if(!(C(this.parentNode)&&C(this.parentNode).hasClass("wex2"))){if(C(U.panel).find(".content").find(".ui-tabs-nav").length>0){C(U.panel).find(".content").tabs("select",0)
}else{new fim.mfl.loadLazyImages(U.panel)
}}}catch(V){new fim.mfl.loadLazyImages(U.panel)
}}var S=C(U.panel).find("div#map")[0];
var R=C(S).parents(".double");
if(C(S).parents(".double").length){var Q=C(S).parents(".content").find("a.largeMap")[0];
try{mp2MapObj._makeMapLarge(S,Q)
}catch(V){}}else{if(typeof S!="undefined"){try{mp2MapObj.centerMap()
}catch(V){}}}if(C(U.panel).find(".photos").length>0){var T=C(U.panel).find("div.photos div.photo:visible");
pWidth=T.parents("div.photos").width(),pHeight=T.parents("div.photos").height(),imgWidth=T.width(),imgHeight=T.height(),hMargin=(imgWidth<pWidth)?(Math.round((pWidth-imgWidth)/2))+"px":"0px",vMargin=(imgHeight<pHeight)?(Math.round((pHeight-imgHeight)/2))+"px":"0px";
if(T.parents(".media2").length>0){if(T.find("img").css("padding-top")=="0px"||T.find("img").css("padding-left")=="0px"){if(hMargin!="0px"){T.find("img").css({"padding-left":hMargin,"padding-right":hMargin})
}if(vMargin!="0px"){T.find("img").css({"padding-top":vMargin,"padding-bottom":vMargin})
}}}else{T.css({margin:vMargin+" "+hMargin})
}}if(C(U.panel).parents(".media2").find(".photos .photo").length>1){C(".controlsContainer .play").each(function(){if((C(this).parents(".ui-tabs-hide").length)==0){var W=C(this).text();
if(W=="Pause"){C(this).parents(".module").find(".photos").cycle("resume");
C(this).text("Play");
play=!play
}}})
}C(U.panel).find(".content .image img").each(function(W){if(this.complete){fitImage.call(this)
}C(this).load(fitImage)
})
},select:function(U,T){if(C(T.panel).find(".larger").length){C(T.panel).parents(".media2").addClass("double")
}else{C(T.panel).parents(".media2").removeClass("double")
}C(T.panel).siblings(".ui-tabs-panel").each(function(X){
	var W= fim.mfl.util.findVideoID( C(this) );
if(W){var Y=getSWF(W);
if(typeof Y.hibernatePlayer=="function"){getSWF(W).hibernatePlayer(true)
}}});
var Q= fim.mfl.util.findVideoID( C(T.panel) );
if(Q){var R=getSWF(Q);
if(typeof R.hibernatePlayer=="function"){getSWF(Q).hibernatePlayer(false)
}}var S=C(T.panel).find("div.moduleAd");
if(S.attr("url")){S.append('<iframe src="'+S.attr("url")+'" style="width:88px; height:31px;" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>');
S.removeAttr("url")
}if(C(T.panel).parents("div.module").hasClass("wex-trfx")){var V=C(T.panel).find(".map").attr("mapurl");
if(V){C(T.panel).find("iframe:first").attr("src",V);
C(T.panel).find(".map").removeAttr("mapurl")
}}}});
C(".dir .ui-tabs-nav").parent().tabs({event:"mouseover",select:function(R,Q){C(Q.panel).parents(".content").find(".ui-tabs-panel").each(function(){C(this).hide()
});
C(Q.panel).parents(".content").find(".ui-tabs-nav li").each(function(){C(this).removeClass("ui-tabs-selected")
});
if(C(Q.tab.parentNode).is("div.moduleAd")){return false
}C(Q.panel).show();
C(Q.tab).parent().addClass("ui-tabs-selected")
}});
C(".dir #firstPreview .ui-widget-content, .dir #secondPreview .ui-widget-content").each(function(){C(this).addClass("ui-tabs-hide")
});
C(".dir .content .ui-tabs-selected").each(function(){C(this).removeClass("ui-tabs-selected")
});
C(".media1 ul.ui-tabs-nav a").each(function(Q){C(this).bind("click",function(){C(".media1 .module-bg").tabs("rotate",null);
C(".media1 .play a").text("Play")
})
});
C(".media1 .play a").each(function(){var Q=C(this).attr("timeDelay");
if(typeof Q!="undefined"){C(this).parents(".media1 .module-bg").tabs("rotate",(Q==null)?7000:parseInt(Q))
}});
C(".media1 .ui-tabs-panel").each(function(Q){C(this).bind("click",function(){C(".media1 .module-bg").tabs("rotate",null);
C(".media1 .play a").text("Play")
})
});
C(".media1 .ui-tabs-panel a").each(function(Q){C(this).bind("click",function(){C(".media1 .module-bg").tabs("rotate",null);
C(".media1 .play a").text("Play")
})
});
C(".wex2 .content").tabs({show:function(R,Q){if(C(Q.panel).attr("style")&&C(Q.panel).attr("style").match(/display: none;?/ig)){C(Q.panel).css({display:"","z-index":""})
}if(C(Q.panel).is(":visible")&&!Q.panel.lazyLoaded){Q.panel.lazyLoaded=true;
new fim.mfl.loadLazyImages(Q.panel)
}}});
C(".media1").find(".photo img").each(function(Q){if(this.complete){fitImage.call(this)
}C(this).load(fitImage)
});
C(".media1 .play a").click(function(){var R=C(".media1 .play a").text();
if(R=="Pause"){C(this).parents(".media1 .module-bg").tabs("rotate",null);
C(this).text("Play")
}else{if(R=="Play"){var Q=C(this).attr("timeDelay");
C(this).parents(".media1 .module-bg").tabs("rotate",(Q==null)?7000:parseInt(Q));
C(this).text("Pause")
}}return false
});
C(".media1 .back a").click(function(){$tabs=C(".media1 .module-bg").tabs("rotate",null);
C(".media1 .play a").text("Play");
$selected=$tabs.data("selected.tabs");
$length=$tabs.tabs("length");
if($selected==0){$tabs.tabs("select",$length-1)
}else{$tabs.tabs("select",$selected-1)
}return false
});
C(".media1 .forward a").click(function(){$tabs=C(".media1 .module-bg").tabs("rotate",null);
C(".media1 .play a").text("Play");
$selected=$tabs.data("selected.tabs");
$length=$tabs.tabs("length");
if($selected==$length-1){$tabs.tabs("select",0)
}else{$tabs.tabs("select",$selected+1)
}return false
});
if(C.browser.mozilla){C(".media4 .vidHolder").each(function(Q){C(this).html(C(this).html())
})
}}var P="imgBtn76x22";
AjaxFramework=new fim.mfl.AjaxFramework();
Validation=new fim.mfl.Validation();
C(".poll").poll();
refreshNWSAlertModule=new Array();
C(".refresh").each(function(){var Q=C(this).attr("id");
if(Q.length!=0){if(C("#"+Q).find(".breaking").length>0){refreshBreakingNewsModule=new fim.mfl.RefreshModule(C(this).attr("id"))
}if(C("#"+Q).find("#nwsAlerts").length>0){refreshNWSAlertModule[refreshNWSAlertModule.length]=new fim.mfl.RefreshModule(C(this).attr("id"))
}}});
if(refreshNWSAlertModule.length==1){refreshNWSAlertModule=refreshNWSAlertModule[0]
}C(".wex1").each(function(){new fim.mfl.Weather(this.getAttribute("id"))
});
C(".wex2").each(function(){new fim.mfl.WEX2(this.getAttribute("id"))
});
C(".media1").each(function(){new fim.mfl.WEX2(this.getAttribute("id"))
});
C(".media4").mp4();
C("#popup").each(function(){C(".imageContainer .image div img").each(function(Q){if(C(this).parents("div.controls").length){return 
}if(this.complete){fitImage.call(this)
}C(this).load(fitImage)
})
});
C("#header_clock").each(function(){new fim.mfl.getSiteTime(this.getAttribute("id"))
});
C("a[href='#']").each(function(Q){C(this).click(function(R){R.preventDefault()
})
});
C(".wex2").tabs({select:function(R){var S=C(R.panel).find("div.ui-tabs-panel")[0];
var Q=null;
if(S!=null){log("WEX2: Main tab clicked");
Q=C(S).find("div.moduleAd")
}else{log("WEX2: Sub tab clicked or Tab with only one sub tab clicked");
Q=C(R.panel).find("div.moduleAd")
}if(Q.attr("url")){C(R.panel).find("div.forFooter").append('<iframe src="'+Q.attr("url")+'" frameborder="0" marginwidth="0" marginheight="0" class="moduleAd" scrolling="no"></iframe>');
Q.remove()
}}});
C(".wex2 .controls button.loop").parent().siblings(".image").cycle({speed:1,timeout:1000}).cycle("pause").find("div");
var I=false;
C(".wex2 .controls button.loop").click(function(){if(I){C(this).html('<img src="/images/btn_loop_weather_map.png" class="'+P+'" alt="Loop" />');
C(this).parent().siblings(".image").cycle("pause")
}else{C(this).html('<img src="/images/btn_stop_weather_map.png" class="'+P+'" alt="Stop" />');
C(this).parent().siblings(".image").cycle("resume")
}I=!I
});
C(".imageContainer .controls button.loop").parent().siblings(".image").cycle({speed:1,timeout:1000}).cycle("pause").find("div");
var J=false;
C(".imageContainer .controls button.loop").click(function(){if(J){C(this).parent().siblings(".image").cycle("pause");
C(this).html('<img src="/images/btn_loop_weather_map.png" class="'+P+'" alt="Loop" />')
}else{C(this).parent().siblings(".image").cycle("resume");
C(this).html('<img src="/images/btn_stop_weather_map.png" class="'+P+'" alt="Stop" />')
}J=!J
});
C(".wex2 button.large").click(function(){var Q=C(this).siblings("button.loop").length?766:726;
window.open(C(this).attr("id"),"popup","width=765, height = "+Q);
return false
});
C(".media1 button.large").click(function(){var T=C(this).find("img.imgBtn86x22").attr("alt");
var V=C(this).parents(".wrapper");
var U=C(this).parents(".content").children(".col2");
var X=V.find(".photo img");
var W=U.find(".playlist .playing").attr("id");
var S=C(this).parents(".content").children(".footer");
var R=C(this).parents(".content").find(".col1").find("#abstract");
if(typeof T!="undefined"&&T=="Large Photo"){U.css("display","none");
V.find(".photo").addClass("larger");
V.find(".regularphoto").addClass("largerCaption");
X.attr("width",640).attr("height",480);
var Q=X.attr("src");
X.attr("src",Q.replace(/320_240\./,"640_480."));
C(this).find("img.imgBtn86x22").attr("src","/images/btn-regular.gif").attr("alt","Regular Photo").attr("url","/images/btn-regular.gif").attr("title","Regular Photo");
R.css("display","block");
S.find(".col2").hide()
}else{if(typeof T!="undefined"&&T=="Regular Photo"){U.css("display","block");
V.find(".photo").removeClass("larger");
V.find(".regularphoto").removeClass("largerCaption");
X.attr("width",320).attr("height",240);
var Q=X.attr("src");
X.attr("src",Q.replace(/640_480\./,"320_240."));
C(this).find("img.imgBtn86x22").attr("src","/images/btn-largePhoto.gif").attr("alt","Large Photo").attr("url","/images/btn-largePhoto.gif").attr("title","Large Photo");
R.css("display","none");
S.find(".col2").show()
}}return false
});
C(".wex2 .image a.pop").click(function(){var Q=C(this).parents("div.image").siblings("div.controls").find("button.loop").length?766:726;
window.open(C(this).attr("href"),"popup","width=765, height = "+Q);
return false
});
C(".ratings").each(function(){new fim.mfl.Ratings(this)
});
var K=C("div.media2 #map").get(0);
if(typeof K!="undefined"){try{mp2MapObj=new fim.mfl.MP2Map(C("div.media2").get(0))
}catch(G){}}if(isPreviewOn()){C(".module-bg").append('<img src="/images/blank.gif" style="position: absolute; height: 100%; width: 100%; top: 24; left: 0;">');
C("#mfl").addClass("cms-preview")
}C(".wex2mult").removeClass("wex2mult").parent().addClass("wex2mult");
C(".wex2 .wex2mult").each(function(){if(C(this).css("position")=="static"){C(this).css("position","relative")
}});
C(".wex2 .content .ui-tabs-panel").each(function(){if(C(this).css("position")=="static"){C(this).css("position","relative")
}});
C(".wex2 .ui-tabs-panel .content .wex2mult").each(function(){if(!(C(this).hasClass("ui-tabs-panel"))){if(C(this).find("div.withad").length>0){C(this).css("margin-bottom","1px")
}else{C(this).css("margin-bottom","18px")
}}});
C(".closingNav a").each(function(Q){C(this).bind("click",function(R){C(this).parents(".content").find(".sectionLetter").text(C(this).text());
if(C(this).text()=="#"){C(this).parents(".content").find("table tr").hide();
C(this).parents(".content").find("table ._0").show()
}else{if((this.hash!="#ALL")){C(this).parents(".content").find("table tr").hide();
C(this).parents(".content").find("table ."+C(this).text()).show()
}else{C(this).parents(".content").find("table tr").show()
}}return false
})
});
C(".wex2mult img").each(function(Q){if(C(this).css("display")=="none"){C(this).css("display","inline")
}});
C(".interactive").parents(".content").find(".vidHolder").css("float","none");
C(".interactive").unbind("click");
C(".interactive").click(function(){if(C(this).parents(".module").hasClass("double")){singleSWF(C(".interactive").parents(".content").find("object").attr("name"));
C("#swf3").parent(".vidHolder").height(C("#swf3").height());
C(this).text("Regular Size")
}else{doubleSWF(C(".interactive").parents(".content").find("object").attr("name"));
C("#swf3").parent(".vidHolder").height(C("#swf3").height());
C(this).text("Expand")
}return false
});
C(".module .adRefresh, .module .adRefresh a").bind("click",reloadCompanionAd);
C(".mp1exp li").unbind("click");
C(".mp1exp li").bind("click",function(){C(this).parents(".content").find(".col1 .wrapper").hide();
C(this).parents(".content").find(".col1 #"+C(this).attr("id")).show();
C(this).parent().find(".playing").removeClass("playing");
C(this).addClass("playing");
C(this).parents(".module").find(".vidHolder").parent("div").css("height","524px")
});
C("div.breakingRight a.close").bind("click",function(){C(this).parents(".breaking").hide("slow")
});
C("#emailForm").validate({submitHandler:function(Q){C("#storyUrl").val(window.opener.document.URL);
C.ajax({url:C(Q).attr("action"),type:"POST",data:C(Q).serialize(),success:function(S,R){if(S.indexOf("Story sent to:")!=-1){C("#emailForm").hide();
C("#emailForm_response").show();
C("#sent_to").html(C("#to").val());
C("#emailForm_response #message").html(C("#emailForm #message").val())
}else{C("#errorDiv").html("There was an error sending your email. Please try again.").show()
}}})
}});
C("#refreshCaptcha").click(function(Q){C.ajax({url:C(this).parents("form").attr("action"),type:"POST",data:"refreshCaptcha=yes",success:function(U,S){var T=C("#captchaImage");
var R=T.attr("src").substring(0,T.attr("src").indexOf("?"));
T.attr("src",R+"?pollToken="+U);
C("#pollToken").val(U);
C("#captchaResponse").val("")
}})
});
C("button[type='reset'][title='contactus_clear']").click(function(){C("#contactusForm").validate().resetForm()
});
C("#contactusForm").validate({groups:{dateofbirth:"dateofbirth1 dateofbirth2 dateofbirth3"},errorPlacement:function(Q,R){if(/^dateofbirth/.test(R[0].name)){Q.insertAfter("#dateofbirth3")
}else{if(/^ageOver13/.test(R[0].name)){Q.insertAfter("#ageOver13Span")
}else{if(/^captchaResponse/.test(R[0].name)){Q.insertAfter("#refreshCaptcha")
}else{if(/^comments$/.test(R[0].name)){Q.insertAfter("#commentsErrorMsg")
}else{Q.insertAfter(R)
}}}}},rules:{dateofbirth3:"year"},submitHandler:function(Q){C.ajax({url:C(Q).attr("action"),type:"POST",data:C(Q).serialize(),success:function(S,R){if(S.indexOf("MFL-Application-Exception-Ajax")!=-1){C(Q).parents(".contact-us").find(".footer").find("span").hide().filter("#serverError").show();
C("#refreshCaptcha").click()
}else{if(C.trim(S)=="Success"){C("#contactusForm").hide();
C("#contactus_response").show()
}}}})
}});
var N=C(".videoheadline:eq(0) .playlist ul").find("li:eq(0)").parents(".module").attr("id");
var M=jQuery("#"+N).find("div.playlist li:eq(0)").find("a");
if(M.length>0){var F=M.attr("onclick");
F=String(F).split("{")[1].split("}")[0];
F=F.split("return false;").join("");
F=F.split("player.").join("if(jQuery.isFunction(player.playVideo)){player.");
var B=F.split("playVideo([");
B[0]+="playVideo([";
B[2]="])"+B[1].split("])")[1];
B[1]=B[1].split("])")[0];
var A=B[1].split(",");
A[4]=false;
B[1]=A.join(",");
F=B.join("");
F+="}else{";
F+="player['flv']="+A[0]+";";
F+="player['img']="+A[1]+";";
F+="player['story']="+A[3]+";";
F+="player['autoPlay']="+A[4]+";";
F+="player['embeddable']="+A[5]+"}";
M.each(Function(F))
}}$.validator.addMethod("year",function(C,B){var A=true;
if(B.className.indexOf("year")>0&&C=="Year(YYYY)"){A=false
}else{if(C&&C.length>0&&C!="Year(YYYY)"){if(!Validation.isValidYear(C)){A=false
}else{if(C<1900||C>2099){A=false
}}}}return A
},"Year must begin with 19xx or 20xx.");
function reloadCompanionAd(){var C=$(".companionAd");
if(!C.attr("lastAdLoad")){C.attr("lastAdLoad","0")
}if(Number(C.attr("lastAdLoad"))+adRefreshTimeout<new Date().getTime()){C.attr("lastAdLoad",new Date().getTime());
var A=$(".companionAd > *[src]").attr("src");
var B='<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="width: 300px; height: 250px;" src="'+A.replace("adj","adi").split("sz=")[0]+"sz=300x250;ord="+Math.random()*10000000000000000+'" />';
C.html(B)
}}$(document).ready(function(A){onDOMReady(A);
initLinkTracking()
});
function getSWF(A){if(navigator.appName.indexOf("Microsoft")!=-1){return document.getElementById(A)
}else{if(document[A].length!=undefined){return document[A][1]
}return document[A]
}}function switchColumn1(C,B){var D=C=="vid_id"?"photo_id":"vid_id";
$("#"+C+B).removeClass("hideMP1").addClass("showMP1");
if($("#"+D+B).length){$("#"+D+B).removeClass("showMP1").addClass("hideMP1");
if(D=="vid_id"){var A=$("#"+D+B+" object").attr("name");
if(A&&typeof getSWF(A).hibernatePlayer=="function"){getSWF(A).hibernatePlayer(true)
}$("#"+D+B).parent().css({height:"auto","padding-bottom":"10px"})
}else{$("#"+D+B).parent().css({height:"300px","padding-bottom":"0"})
}}}function changePhoto(L,B,E,M,F,H,I,C){var K=$(L).parents(".content");
var J=$(K).find("#photo_id"+B);
$(J).find("a:first").attr({href:C});
$(J).find("img:first").attr({src:M,title:E,alt:E,width:H,height:I});
if(H=="0"){$(J).find("img:first").removeAttr("width")
}if(I=="0"){$(J).find("img:first").removeAttr("height")
}$(J).find("img:first").each(function(N){$(this).css({"padding-top":"0","padding-left":"0","padding-right":"0","padding-bottom":"0"});
if(this.complete){fitImage.call(this)
}$(this).load(fitImage)
});
if(C==""){$(J).find("p:first").hide()
}else{var A=$(J).find("p:first")[0];
for(var G=0,D=A.childNodes.length;
G<D;
G++){if(A.childNodes[G]&&A.childNodes[G].nodeName!="BUTTON"){A.removeChild(A.childNodes[G])
}}$(J).find("p:first").show().prepend(F)
}}function popupWindow(C,B,A){B=B.replace(" ","_");
mw=window.open(C,B,A)
}function doublePlayer(A){if(!A){A="video_player"
}vp=getSWF(A);
vp.width=640;
vp.height=524;
vp.style.width="640px";
vp.style.height="524px";
var I=jQuery("*[name="+A+"]");
if(I.parents(".media1, .media4").length>0){var G=I.parents(".content").children(".col2");
var D=I.parents(".ui-tabs-panel").find(".col1");
G.css("display","none");
D.css("height","auto");
var B=I.parent(".vidHolder").attr("id");
var H=D.find("#abstract");
H.css("display","block");
var C=I.parents(".content").children(".footer");
C.find(".col2").hide()
}I.parent(".vidHolder").addClass("larger");
if(I.parents(".ui-tabs-panel").length){I.parents(".ui-tabs-panel")[0].doubleSize=true
}var F=I.parents(".media2");
if(F.length>0){var E=4*_scrollAfter;
F.addClass("double");
F.find("div.playlist ol").each(function(){var M=0,K=$(this).children("li");
for(var L=0,J=K.length;
L<J;
L++){if(!(L%E)){M=K[L].offsetLeft
}if($(K[L]).hasClass("playing")){break
}}this.style.left=-M+"px"
})
}}function playNext(C){var B=jQuery("*[name="+C+"]").parents(".media2"),A=B.hasClass("double")?(4*_scrollAfter):(2*_scrollAfter);
if(B.length>0){B.find("div.playlist ol").each(function(){var G=0,E=$(this).children("li"),H=false;
for(var F=0,D=E.length;
F<D;
F++){if(!(F%A)){G=E[F].offsetLeft
}if(H){$(E[F]).find("a").click();
break
}if($(E[F]).hasClass("playing")){H=true
}}$(this).animate({left:-(G)},500)
})
}}playNext=function(E){if(typeof (playListID)=="undefined"){var F=jQuery("*[name="+E+"]").parents(".media2");
var D=F.hasClass("double")?(4*_scrollAfter):(2*_scrollAfter);
if(F.length>0){F.find("div.playlist ol").each(function(){var B=0,I=$(this).children("li"),A=false;
for(var C=0,J=I.length;
C<J;
C++){if(!(C%D)){B=I[C].offsetLeft
}if(A){$(I[C]).find("a").click();
break
}if($(I[C]).hasClass("playing")){A=true
}}$(this).animate({left:-B},500)
})
}}else{var F=jQuery("#"+playListID);
if(F.length>0){F.find("div.playlist li.playing").next().find("a").click()
}}};
function printThis(){var C=$(".bigad")[0];
var B=$(".detail");
var D='<div id="print"><div class="linhead">';
D+="</div>";
D+='<div class="col2"><div class="module bigad">';
if(C){D+=C.innerHTML
}D+="</div></div>";
D+='<div class="detail">';
if(B){D+=B.html()
}D+="</div></div>";
D=D.replace(/<script[^>]*>/gi,'<span style="display:none">').replace(/<\/script>/gi,"</span>").replace(/(<\/?(no)?sc[^>]*>)/g,"");
D=D.replace(/page hide/g,"page");
var E=window.open("","printThis");
if(E){var A=E.document;
A.writeln("<html><head>");
A.writeln('<link rel="stylesheet" href="/css/common.css" type="text/css" media="screen" title="Global" charset="utf-8" /><link rel="stylesheet" href="/css/print.css" type="text/css" media="screen, print" charset="utf-8" /></head><body id="mfl">'+D);
A.writeln("<script>var storyPager = document.getElementById('storyPager'); if(storyPager) {storyPager.style.display = 'none'; } var elems = document.getElementsByTagName('a'); var len = elems.length; for(var i=0; i<len; i++){if (elems[i].className == 'single') {elems[i].style.display = 'none';}}<\/script></body></html>");
A.close()
}else{alert("Please Disable Popup Blocker")
}E.print()
}function doubleSWF(B){swf=getSWF(B);
if(swf.width.indexOf("%")==-1){swf.width*=2;
swf.height*=2;
swf.style.width=swf.width+"px";
swf.style.height=swf.height+"px"
}if(jQuery("*[name="+B+"]").parents(".media2").length>0){jQuery("*[name="+B+"]").parents(".media2").addClass("double")
}jQuery("*[name="+B+"]").parent(".vidHolder").addClass("larger");
var A=jQuery("*[name="+B+"]").parent(".vidHolder").css("height").split("px")[0]*2;
jQuery("*[name="+B+"]").parent(".vidHolder").css("height",A+"px");
if(jQuery("*[name="+B+"]").parents(".ui-tabs-panel").length>0){jQuery("*[name="+B+"]").parents(".ui-tabs-panel")[0].doubleSize=true
}else{jQuery("*[name="+B+"]").parents(".content")[0].doubleSize=true
}}function singleSWF(B){swf=getSWF(B);
if(swf.width.indexOf("%")==-1){swf.width*=0.5;
swf.height*=0.5;
swf.style.width=swf.width+"px";
swf.style.height=swf.height+"px"
}if(jQuery("*[name="+B+"]").parents(".media2").length>0){jQuery("*[name="+B+"]").parents(".media2").removeClass("double")
}jQuery("*[name="+B+"]").parent(".vidHolder").removeClass("larger");
var A=jQuery("*[name="+B+"]").parent(".vidHolder").css("height").split("px")[0]*0.5;
if(A<240){A=240
}jQuery("*[name="+B+"]").parent(".vidHolder").css("height",A+"px");
if(jQuery("*[name="+B+"]").parents(".ui-tabs-panel").length>0){jQuery("*[name="+B+"]").parents(".ui-tabs-panel")[0].doubleSize=false
}else{jQuery("*[name="+B+"]").parents(".content")[0].doubleSize=false
}}function singlePage(){var A=$(".detail").find(".page").get();
var B=jQuery("#storyPager");
$(A).removeClass("hide");
$(B).hide();
$(".single").hide()
}function isPreviewOn(){if(typeof isPreview!="undefined"&&isPreview){return true
}else{return false
}}function loadCompanionAd(B){var A=$("div.companionAd:first"),C=A.find("*[src]").attr("src");
A.html('<div src="'+C+'">'+B+"</div>")
}function getOffset(A,C){var C=C=="x"?"offsetLeft":"offsetTop",B=0;
while(A){B+=A[C];
A=A.offsetParent
}return B
}function submitSearchForm(){var A=document.forms.top_search;
A.startIndex.value=0;
A.currentPage.value=1;
A.submit()
}function updateSearchType(D){var B=document.forms.top_search;
var E=B.search_type;
var A=B.google_web;
var C=false;
for(i=0;
i<E.length;
i++){if(E[i].value==D){E[i].checked=true;
C=true
}else{E[i].checked=false
}}if(A){if(C==true){A.checked=false
}else{A.checked=true
}}}function renderSearchResults(E,G){var A=document.forms.top_search;
A.startIndex.value=G;
A.currentPage.value=E;
var C=document.getElementById("sm");
var F=document.getElementById("srm");
if(C!=null){C=C.value
}if(F!=null){F=C.value
}var D=new fim.mfl.AjaxFramework();
var B="/searchresultsmodule/0/"+C;
D.makeAjaxCall({url:B,data:jQuery(A).serialize(),success:function(I,H){var J=AjaxFramework.handleApplicationException(I);
if(J.exceptionThrown){jQuery("#search-results").parent().parent().html("No records found.")
}else{jQuery("#search-results").parent().parent().html(I)
}return false
}})
}function renderMP4Pagination(G,H,F,E,B,D){if(G==null||G==""){G=1
}var C=new fim.mfl.AjaxFramework();
var A="/refreshtab/0/"+E+"/"+B+"?tabCollID="+D+"&startIndex="+H+"&endIndex="+F+"&pageNum="+G;
C.makeAjaxCall({url:A,success:function(J,I){var K=AjaxFramework.handleApplicationException(J);
if(K.exceptionThrown){jQuery("#mp4Pagination"+B).parent().html("No stories found.")
}else{jQuery("#mp4Pagination"+B).parent().parent().html(J);
$(".module .adRefresh,.module .adRefresh a").bind("click",reloadCompanionAd)
}return false
}})
}function getStoredVideoPlayerProperties(B){var A=getSWF(B);
var C={};
C.flv=A.flv;
C.img=A.img;
C.story=A.story;
C.adSrc=A.adSrc;
C.embeddable=A.embeddable;
return C
}function headlineListCallback(A,B){$.ajax({url:$(B).parents(".module").find(".content").attr("ajaxURL")+(A+1),type:"POST",success:function(D,C){if(D.indexOf("MFL-Application-Exception-Ajax")!=-1){}else{$(B).parents(".module").find(".content").html(D)
}}});
return false
}function WMPStream(F){var C=F[0];
var A=310;
var D=F[2];
var B=F[3];
var E='<object width="'+D+'" height="'+A+'" align="center" classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,0,0,0" id="MediaPlayer" type="application/x-oleobject" standby="Loading Microsoft Windows Media Player components..."><param name="AudioStream" value="-1"><param name="AutoSize" value="0"><param name="AutoStart" value="-1"><param name="AnimationAtStart" value="-1"><param name="AllowScan" value="-1"><param name="AllowChangeDisplaySize" value="1"><param name="AutoRewind" value="0"><param name="Balance" value="0"><param name="BaseURL" value=""><param name="BufferingTime" value="5"><param name="CaptioningID" value=""><param name="ClickToPlay" value="-1"><param name="CursorType" value="0"><param name="CurrentPosition" value="-1"><param name="CurrentMarker" value="0"><param name="DefaultFrame" value=""><param name="DisplayBackColor" value="0"><param name="DisplayForeColor" value="16777215"><param name="DisplayMode" value="0"><param name="DisplaySize" value="4"><param name="Enabled" value="-1"><param name="EnableContextMenu" value="-1"><param name="EnablePositionControls" value="-1"><param name="EnableFullScreenControls" value="0"><param name="EnableTracker" value="-1"><param name="Filename" value="'+C+'"><param name="InvokeURLs" value="-1"><param name="Language" value="-1"><param name="uiMode" value="mini"><param name="Mute" value="0"><param name="PlayCount" value="1"><param name="PreviewMode" value="0"><param name="Rate" value="1"><param name="SAMILang" value=""><param name="SAMIStyle" value=""><param name="SAMIFileName" value=""><param name="stretchToFit" value="1"><param name="SelectionStart" value="-1"><param name="SelectionEnd" value="-1"><param name="SendOpenStateChangeEvents" value="-1"><param name="SendWarningEvents" value="-1"><param name="SendErrorEvents" value="-1"><param name="SendKeyboardEvents" value="0"><param name="SendMouseClickEvents" value="0"><param name="SendMouseMoveEvents" value="0"><param name="SendPlayStateChangeEvents" value="-1"><param name="ShowCaptioning" value="0"><param name="ShowControls" value="1"><param name="ShowAudioControls" value="-1"><param name="ShowDisplay" value="0"><param name="ShowGotoBar" value="0"><param name="ShowPositionControls" value="-1"><param name="ShowStatusBar" value="-1"><param name="ShowTracker" value="-1"><param name="TransparentAtStart" value="-1"><param name="VideoBorderWidth" value="0"><param name="VideoBorderColor" value="0"><param name="VideoBorder3D" value="0"><param name="Volume" value="100"><param name="WindowlessVideo" value="0"><embed width="'+D+'" height="'+A+'" type="application/x-mplayer2" pluginspage="http://www.microsoft.com/Windows/Downloads/Contents/Products/MediaPlayer/" src="'+C+'" name="MediaPlayer" id="MediaPlayer" displaysize="4" stretchToFit="1" autosize="0" showcontrols="1" uimode="mini" showtracker="1" bgcolor="black" showdisplay="0" showstatusbar="0" videoborder3d="0" autostart="1" volume="100" designtimesp="5311" loop="0"></embed></object>';
$("#"+B).parent().html(E)
}(function(A){fim.mfl.WeatherMarquee=function(P,X,T){var U=P,W=T,j=1,V=0,f=true;
var Z=A("#"+U),G=Z.children("h3"),h=Z.children("h4"),k=h.children("div"),Y=Z.children("a.view-all");
var H=0,D=0,K=0,C=0;
var B=function(){H=h.height();
D=h.outerWidth(true)-h.outerWidth();
K=G.outerWidth(true);
C=Y.length!=0?Y.outerWidth(true):0
};
B();
var b=A("#wrapper").find("#newsticker");
var O=1250,R=document.createElement("span"),J={hasClosingsSummary:false,variable:{emptyModule:false,emptyData:false,newContent:false,newTitle:false,hasViewAll:false,newViewAll:false,noNewViewAll:false,newData:false}},N={height:0,opacity:0},c={height:H,opacity:1},Q={opacity:0},e={opacity:1};
var d=Z.prepend('<div class="ajax_indicator"></div>').children(".ajax_indicator");
Z.addClass("animatable");
G.find("span").add(Y).add(Y.find("span")).css("opacity",1);
if(b.length>0){N={opacity:0};
c={opacity:1};
J.hasClosingsSummary=true;
if(window.refreshNWSAlertModule!=null){Z.css({height:H,opacity:0})
}Z.parent().addClass("has-closing")
}if(window.refreshNWSAlertModule==null){Z.css({height:H,opacity:1})
}else{Z.css({opacity:0})
}var g=function(){B();
W=Z.width()-(D+K+C);
h.width(W);
k.css({"padding-left":W+"px",visibility:"visible"}).children().filter(":last").css("padding-right",W+"px");
if(X){k.children().hover(function(){f=clearInterval(f)
},function(){f=setInterval(S,10)
})
}Y.css({width:Y.find("span").outerWidth(true)})
};
g();
var L=function(){refreshNWSAlertModule.resetNWSPublicProperties()
};
var F=function(){Z.attr("ttl",refreshNWSAlertModule.requestData.newTtl).attr("url",refreshNWSAlertModule.requestData.newUrl);
k.children().remove().end().html(refreshNWSAlertModule.requestData.scrollHTML);
if(Y.length!=0){Y.attr("href",A(refreshNWSAlertModule.requestData.viewAllHTML).attr("href")).attr("title",A(refreshNWSAlertModule.requestData.viewAllHTML).attr("title"))
}g()
};
var E=function(){Z.empty();
L()
};
var a=function(){F();
I();
L();
d.animate({opacity:0},{duration:O/2,queue:true,complete:function(){d.hide()
}});
f=setInterval(S,10)
};
var M=function(){if(refreshNWSAlertModule.requestData.scrollHTML.length==""){J.variable.emptyModule=true;
if(refreshNWSAlertModule.requestData.rawDataHTML.length==""){J.variable.emptyData=true
}}else{if(Z.length==0||Z.html().length==0){J.variable.hiddenModule=true
}else{if(refreshNWSAlertModule.requestData.scrollHTML!=""&&A(refreshNWSAlertModule.requestData.scrollHTML).html()!=h.find("a").html()){J.variable.newContent=true
}if(refreshNWSAlertModule.requestData.titleHTML!=""&&A(refreshNWSAlertModule.requestData.titleHTML).html()!=G.find("span").html()){J.variable.newTitle=true
}if(Y.children().length!=0){J.variable.hasViewAll=true
}if(A(refreshNWSAlertModule.requestData.viewAllHTML).find("span").html()!=Y.find("span").html()){J.variable.newViewAll=true
}if(refreshNWSAlertModule.requestData.viewAllHTML==""){J.variable.noNewViewAll=true
}if(!J.variable.hasViewAll&&J.variable.noNewViewAll){J.variable.newViewAll=false
}if(J.variable.newContent||J.variable.newTitle||J.variable.newViewAll){J.variable.newData=true
}}}};
var I=function(){for(var l in J.variable){J.variable[l]=false
}};
var S=function(){V+=j;
h.scrollLeft(V);
if(V>h.scrollLeft()){V=0;
h.scrollLeft(V);
if(window.refreshNWSAlertModule!=null&&refreshNWSAlertModule.requestData.scrollHTML!=null){f=clearInterval(f);
M();
if(J.variable.emptyModule){Z.animate(N,{duration:O,queue:false,specialEasing:{height:"easeOutQuint"},complete:E})
}else{if(Z.hasClass("isHidden")){Z.animate(c,{duration:O,queue:true,specialEasing:{height:"easeOutQuint"},complete:a}).removeClass("isHidden")
}else{if(J.variable.newData){var m=J.variable.newContent?{opacity:1}:{opacity:0},p=15;
if(J.variable.newViewAll){p=O;
if(J.variable.noNewViewAll){Y.animate({opacity:0},{duration:O,queue:true,complete:function(){A(this).remove();
Y=A([])
}})
}else{if(J.variable.hasViewAll){var o=Math.round((2*O)/3);
p=O*2;
Y.children("span").animate({opacity:0},{duration:o,queue:true,complete:function(){Y.children("span").html(A(refreshNWSAlertModule.requestData.viewAllHTML).children("span").html()).end().animate({width:Y.children("span").outerWidth(true)},{duration:o,queue:true,complete:function(){Y.children("span").animate({opacity:1},{duration:o,queue:true})
}})
}})
}else{Y=Z.append(refreshNWSAlertModule.requestData.viewAllHTML).children("a.view-all");
var l=J.variable.newTitle?O:0;
Y.children("span").css({opacity:1}).end().animate({opacity:0},{duration:l,queue:true}).animate({opacity:1},{duration:O,queue:true})
}}}if(J.variable.newTitle){p=O*2;
G.children("span").animate(Q,{duration:O,queue:true,complete:function(){G.children("span").html(A(refreshNWSAlertModule.requestData.titleHTML).html()).animate(e,{duration:O,queue:true})
}})
}d.show().animate(m,{duration:O/2,queue:true,complete:function(){p=p-O/2;
setTimeout(a,p)
}})
}else{a()
}}}}}};
Z.animate(c,{duration:O,queue:true,specialEasing:{height:"easeOutQuint"}});
f=setInterval(S,10)
}
})(jQuery);
jQuery(document).ready(function(A){A(".photo-gallery").each(function(Y){var P=this;
var X=A(this);
var N=X.find(".featured-image");
var Z=N.find("img");
var C=X.find(".featured-description");
var M=X.find(".thumbCarousel");
var R=M.find("li").length;
var L=88;
var W=5;
var Q=0;
var J=Math.floor(R/W);
var a=R*L;
M.find("ol").css("width",a+"px");
var S=M.find("ol").position().left;
var D=M.find("li.selected").prevAll().length;
var E=X.find(".bot-nav .arrow-left");
var F=X.find(".bot-nav .arrow-right");
var T=X.find(".top-nav .arrow-left");
var I=X.find(".top-nav .arrow-right");
X.find(".top-nav div").html("<span>1</span> of "+R);
var H=X.find(".top-nav span");
var O=X.find(".gallery-slideshow li a");
var b=X.find(".gallery-slideshow .play-btn");
var V=1;
var U=true;
P.adjustCarousel=function(){if(!M.find("li.selected").hasClass("active")){if(M.find("li.active").prevAll(".selected").length==1){E.trigger("click");
if(!M.find("li.selected").hasClass("active")){P.adjustCarousel()
}}else{F.trigger("click");
if(!M.find("li.selected").hasClass("active")){P.adjustCarousel()
}}}};
P.moveCarousel=function(c){c=(typeof c=="undefined")?1000:c;
M.find("ol").animate({left:S},{duration:c,queue:false});
P.carouselSlideShowStop()
};
P.updateFeatured=function(){M.find("li.selected span img[url]").each(function(){A(this).attr("src",A(this).attr("url")).removeAttr("url")
});
Z.attr({src:M.find("li.selected span img").attr("src")});
if(M.find("li.selected span img").height()<N.height()){Z.css({top:(N.height()-Z.height())/2})
}C.html(M.find("li.selected div").html());
H.html(M.find("li.selected").prevAll().length+1);
P.carouselSlideShowStop()
};
P.updateThumbsVisible=function(c){M.find("li.active").removeClass("active");
for(x=c;
x<(c+W);
x++){M.find("li").eq(x).addClass("active")
}M.find("li.active").find("a img[url]").each(function(){A(this).attr("src",A(this).attr("url")).removeAttr("url")
})
};
P.refreshAd=function(){if(U){reloadCompanionAd()
}};
var K;
var B=A(".gallery-slideshow li:eq(0)").addClass("selected").find("a").text()+"000";
B=(typeof B=="undefined")?3000:parseInt(B);
var G=false;
P.carouselSlideShowAutoPlay=function(){var c=D+1;
G=false;
I.trigger("click");
P.carouselSlideShowAutoPlayStart()
};
P.carouselSlideShowStop=function(){if(G&&b.hasClass("active")){b.trigger("click");
P.carouselSlideShowAutoPlayStop()
}};
P.carouselSlideShowAutoPlayStop=function(){clearTimeout(K)
};
P.carouselSlideShowAutoPlayStart=function(){G=true;
K=setTimeout(P.carouselSlideShowAutoPlay,B)
};
b.click(function(c){if(!b.hasClass("active")){U=false;
P.adjustCarousel();
A(this).parent().find("ul").show();
A(this).addClass("active").html("I I");
P.carouselSlideShowAutoPlayStart()
}else{U=true;
P.carouselSlideShowAutoPlayStop();
A(this).parent().find("ul").hide();
A(this).removeClass("active").html(">")
}});
O.click(function(c){A(this).parents("ul").find(".selected").removeClass("selected");
A(this).parent().addClass("selected");
P.carouselSlideShowAutoPlayStop();
B=parseInt(A(".gallery-slideshow li.selected a").text()+"000");
P.carouselSlideShowAutoPlayStart()
});
Z.click(P.carouselSlideShowStop);
M.find("li a").click(function(c){if(!A(this).parent().hasClass("selected")){A(this).parents("ol").find("li.selected").removeClass("selected");
A(this).blur().parent().addClass("selected");
D=A(this).parent().prevAll().length;
P.updateFeatured();
P.refreshAd()
}});
T.click(function(c){var d=(D==0)?R-1:D-1;
D=d;
M.find("li").removeClass("selected").eq(d).addClass("selected");
if(!M.find("li.selected").hasClass("active")){P.adjustCarousel()
}P.updateFeatured();
P.refreshAd()
});
I.click(function(c){var d=(D==R-1)?0:D+1;
D=d;
M.find("li").removeClass("selected").eq(d).addClass("selected");
if(!M.find("li.selected").hasClass("active")){P.adjustCarousel()
}P.updateFeatured();
P.refreshAd()
});
E.click(function(c){if(S<0){S=S+(L*W);
Q-=W;
P.updateThumbsVisible(Q);
P.moveCarousel()
}else{S=a*(-1)+(L*(R%W));
Q=R-(R%W);
P.updateThumbsVisible(Q);
P.moveCarousel()
}});
F.click(function(c){if(a+S>=L*W){S=S-(L*W);
Q+=W;
P.updateThumbsVisible(Q);
P.moveCarousel()
}else{S=0;
Q=0;
P.updateThumbsVisible(Q);
P.moveCarousel()
}});
Q=Math.floor(activityPhotoComponent/5)*5;
P.updateThumbsVisible(Q);
M.find("li").eq(activityPhotoComponent).addClass("selected");
M.show();
P.updateFeatured();
if(activityPhotoComponent!=0){S-=Math.floor(activityPhotoComponent/W)*440;
P.moveCarousel();
D=activityPhotoComponent
}Z.load(function(){if(A(this).height()<N.height()){A(this).css({top:(N.height()-A(this).height())/2})
}});
X.find(".track-click").bind("click",function(){if(window.s_gi&&!b.hasClass("active")){s.t()
}})
})
});
$.fn.robinRound=function(A){return this.each(function(){var F=$(A,this),H=F.find("> ul"),G=H.find("> li"),D=G.filter(":first"),I=this,J=D.outerWidth(),C=Math.ceil(F.innerWidth()/J),E=1,B=Math.ceil(G.length/C),L=true;
if(G.length<4){$(".scrollButtons > a",this.parentNode).hide()
}else{for(i=1;
i<=B;
i++){if(i==E){$(".paginationDisplay > ul",this.parentNode).append("<li><div id="+i+' class="dot dotTop"></div><li>')
}else{$(".paginationDisplay > ul",this.parentNode).append("<li><div id="+i+' class="dot dotBottom"></div><li>')
}}}G.filter(":first").before(G.slice(-C).clone().addClass("cloned"));
G.filter(":last").after(G.slice(0,C).clone().addClass("cloned"));
G=H.find("> li");
F.get(0).scrollLeft=J*C;
$("a.back",this).click(function(){if(L){L=false;
return K(E-1)
}});
$("a.forward",this).click(function(){if(L){L=false;
return K(E+1)
}});
$(".dot",this.parentNode).click(function(M){if(L){L=false;
K(parseInt(M.target.id))
}});
$(".adRefresh .forward img,.adRefresh .back img").bind("click",reloadCompanionAd);
function K(N){var M=N<E?-1:1,P=Math.abs(E-N),O=J*M*C*P;
F.animate({scrollLeft:"+="+O},100,function(){if(N==0){E=B;
this.scrollLeft=J*C*B
}else{if(N>B){E=1;
this.scrollLeft=J*C
}else{E=N
}}$(".paginationDisplay ul div",I.parentNode).each(function(Q){Q++;
if(Q==E){$(this).removeClass("dotBottom");
$(this).addClass("dotTop")
}else{$(this).removeClass("dotTop");
$(this).addClass("dotBottom")
}});
L=true
});
return false
}})
};
$(function(){$(".scrollButtons > div").before('<a href="#" class="back"><img src="/images/modules/nscroll_left.png" width="30" height="30" alt="Scroll Left" title="Scroll Left" class="scrollLeft" /></a>').after('<a class="forward" href="#"><img src="/images/modules/nscroll_right.png" width="30" height="30" alt="Scroll Right" title="Scroll Right" class="scrollRight" /></a>').parent().robinRound("> div")
});
(function(){var E=typeof jQuery=="function";
function I(){if(C.done){return false
}var K=document;
if(K&&K.getElementsByTagName&&K.getElementById&&K.body){clearInterval(C.timer);
C.timer=null;
for(var J=0;
J<C.ready.length;
J++){C.ready[J].call()
}C.ready=null;
C.done=true
}}var C=E?jQuery:function(J){if(C.done){return J()
}if(C.timer){C.ready.push(J)
}else{C.ready=[J];
C.timer=setInterval(I,13)
}};
function F(K,J){if(J){for(key in J){if(J.hasOwnProperty(key)){K[key]=J[key]
}}}return K
}function G(J){switch(H(J)){case"string":J=J.replace(new RegExp('(["\\\\])',"g"),"\\$1");
J=J.replace(/^\s?(\d+)%/,"$1pct");
return'"'+J+'"';
case"array":return"["+B(J,function(M){return G(M)
}).join(",")+"]";
case"function":return'"function()"';
case"object":var K=[];
for(var L in J){if(J.hasOwnProperty(L)){K.push('"'+L+'":'+G(J[L]))
}}return"{"+K.join(",")+"}"
}return String(J).replace(/\s/g," ").replace(/\'/g,'"')
}function H(K){if(K===null||K===undefined){return false
}var J=typeof K;
return(J=="object"&&K.push)?"array":J
}if(window.attachEvent){window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};
__flash_savedUnloadHandler=function(){}
})
}function B(J,M){var L=[];
for(var K in J){if(J.hasOwnProperty(K)){L[K]=M(J[K])
}}return L
}function A(O,Q){var P=document.all;
var L='<object width="'+O.width+'" height="'+O.height+'"';
if(P&&!O.id){O.id="_"+(""+Math.random()).substring(9)
}if(O.id){L+=' id="'+O.id+'"'
}if(O.id){L+=' name="'+O.id+'"'
}if(O.w3c||!P){L+=' data="'+O.src+'" type="application/x-shockwave-flash"'
}else{L+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
}L+=">";
if(O.w3c||P){L+='<param name="movie" value="'+O.src+'" />'
}var N=F({},O);
N.width=N.height=N.id=N.w3c=N.src=null;
for(var J in N){if(N[J]!==null){L+='<param name="'+J+'" value="'+N[J]+'" />'
}}var M="";
if(Q){for(var K in Q){if(Q[K]!==null){M+=K+"="+(typeof Q[K]=="object"?G(Q[K]):Q[K])+"&"
}}M=M.substring(0,M.length-1);
L+='<param name="flashvars" value=\''+M+"' />"
}L+="</object>";
return L
}function D(L,O,K){var J=flashembed.getVersion();
F(this,{getContainer:function(){return L
},getConf:function(){return conf
},getVersion:function(){return J
},getFlashvars:function(){return K
},getApi:function(){return L.firstChild
},getHTML:function(){return A(O,K)
}});
var P=O.version;
var Q=O.expressInstall;
var N=!P||flashembed.isSupported(P);
if(N){O.onFail=O.version=O.expressInstall=null;
L.innerHTML=A(O,K)
}else{if(P&&Q&&flashembed.isSupported([6,65])){F(O,{src:Q});
K={MMredirectURL:location.href,MMplayerType:"PlugIn",MMdoctitle:document.title};
L.innerHTML=A(O,K)
}else{if(L.innerHTML.replace(/\s/g,"")!==""){}else{L.innerHTML="<h2>Flash version "+P+" or greater is required</h2><h3>"+(J[0]>0?"Your version is "+J:"You have no flash plugin installed")+"</h3>"+(L.tagName=="A"?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='http://www.adobe.com/go/getflashplayer'>here</a></p>");
if(L.tagName=="A"){L.href="http://www.adobe.com/go/getflashplayer"
}}}}if(!N&&O.onFail){var M=O.onFail.call(this);
if(typeof M=="string"){L.innerHTML=M
}}}window.flashembed=function(K,L,J){if(typeof K=="string"){var M=document.getElementById(K);
if(M){K=M
}else{C(function(){flashembed(K,L,J)
});
return 
}}if(!K){return 
}var N={width:"100%",height:"100%",allowfullscreen:true,allowscriptaccess:"always",quality:"high",version:null,onFail:null,expressInstall:null,w3c:false};
if(typeof L=="string"){L={src:L}
}F(N,L);
return new D(K,N,J)
};
F(window.flashembed,{getVersion:function(){var L=[0,0];
if(navigator.plugins&&typeof navigator.plugins["Shockwave Flash"]=="object"){var K=navigator.plugins["Shockwave Flash"].description;
if(typeof K!="undefined"){K=K.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
var M=parseInt(K.replace(/^(.*)\..*$/,"$1"),10);
var Q=/r/.test(K)?parseInt(K.replace(/^.*r(.*)$/,"$1"),10):0;
L=[M,Q]
}}else{if(window.ActiveXObject){try{var O=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
}catch(P){try{O=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
L=[6,0];
O.AllowScriptAccess="always"
}catch(J){if(L[0]==6){return 
}}try{O=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
}catch(N){}}if(typeof O=="object"){K=O.GetVariable("$version");
if(typeof K!="undefined"){K=K.replace(/^\S+\s+(.*)$/,"$1").split(",");
L=[parseInt(K[0],10),parseInt(K[2],10)]
}}}}return L
},isSupported:function(J){var L=flashembed.getVersion();
var K=(L[0]>J[0])||(L[0]==J[0]&&L[1]>=J[1]);
return K
},domReady:C,asString:G,getHTML:A});
if(E){jQuery.prototype.flashembed=function(K,J){return this.each(function(){flashembed(this,K,J)
})
}
}})();
var collarityVideoFeedbackURL=null;
(function(){StringBuffer=function(){this._buffer=[]
};
var A=StringBuffer.prototype;
A._buffer=null;
A.append=function(B){this._buffer.push(B);
return this
};
A.toString=function(){return this._buffer.join("")
}
})();
(function($){var _this=null;
fim.mfl.MP4Search=function(ele,flashvars,params,attributes,paginateFlag,storiesPerPage,pageShift,prevText,nextText){this._mp4ContentDivEle=ele;
this._flashvars=flashvars;
this._params=params;
this._attributes=attributes;
this._init();
this._paginateFlag=paginateFlag;
this._storiesPerPage=storiesPerPage;
this._pageShift=pageShift;
this._prevText=prevText;
this._nextText=nextText;
_this=this
};
var proto=fim.mfl.MP4Search.prototype;
var MP4Search=fim.mfl.MP4Search;
proto._mp4ContentDivEle=null;
proto._OlEle=null;
proto._masterLiEle=null;
proto._jsonObj=null;
proto._firstSearch=true;
proto._flashvars=null;
proto._params=null;
proto._attributes=null;
proto._siteLogoLarge="";
proto._siteLogoSmall="";
proto._searchString="";
proto._paginateFlag=false;
proto._storiesPerPage=0;
proto._pageShift=0;
proto._prevText="";
proto._nextText="";
proto._cachedJsonObjects=[];
MP4Search.SELECTED_STORY_CLASS="ui-tabs-selected";
proto._init=function(){this._masterLiEle=$(this._mp4ContentDivEle).find("#masterLiEle").html();
this._siteLogoLarge=$(this._mp4ContentDivEle).attr("siteLogoLarge");
this._siteLogoSmall=$(this._mp4ContentDivEle).attr("siteLogoSmall");
this._bindSearchButton()
};
proto._sendFeedback=function(url){$.get("/videofeedbackaction?feedbackUrl="+encodeURIComponent(url),function(data){log(data)
})
};
proto._populateStories=function(jsonObj,pageToShow){var numberOfStories=jsonObj.numStories;
if(numberOfStories===0){alert(jsonObj.errorMessage)
}else{this._cachedJsonObjects[pageToShow-1]=jsonObj;
if(this._firstSearch){var resultDivEle=$(this._mp4ContentDivEle).find("#videoSearchResultsDiv")[0];
$(this._mp4ContentDivEle).html($(resultDivEle).html());
this._OlEle=$(this._mp4ContentDivEle).find(".playlist:first");
this._fullStoryDivEle=$(this._mp4ContentDivEle).find("#fullStory");
this._bindSearchButton();
$(this._mp4ContentDivEle).find("input:first").val(this._searchString)
}this._jsonObj=jsonObj;
this._sendFeedback(this._jsonObj.tracking);
$(this._OlEle).empty();
for(var i=0;
i<numberOfStories;
i++){$(this._OlEle).append(this._masterLiEle);
var lastLiEle=$(this._OlEle).find("li:last");
$(lastLiEle).attr("position",i);
$(lastLiEle).find("img:first").attr("src",this._getDefaultImage(this._jsonObj.stories[i].imageUrl,false));
$(lastLiEle).find("img:first").attr("title",this._jsonObj.stories[i].headline);
$(lastLiEle).find("a:first").html(this._jsonObj.stories[i].headlineCol2).attr("src",this._jsonObj.stories[i].storyUrl).attr("title",this._jsonObj.stories[i].headline);
$(lastLiEle).find("p:first").html(this._jsonObj.stories[i].longAbstractCol2);
$(lastLiEle).bind("click",{mp4SearchObj:this},function(event){event.preventDefault();
event.data.mp4SearchObj._storyClicked(this)
});
if(i===0){$(lastLiEle).addClass(MP4Search.SELECTED_STORY_CLASS);
this._setFullStory(lastLiEle)
}}if(this._firstSearch){this._initVideoPlayer();
this._firstSearch=false
}else{this._playStory(0)
}}};
proto._paginationCallBack=function(page_index,jQ){if(jQ.hasClass("adRefresh")){jQ.find("a").bind("mousedown",reloadCompanionAd)
}if(!_this._cachedJsonObjects[eval(page_index)]){var videoSearchAjaxObject=new fim.mfl.AjaxFramework();
var searchURL=$(_this._mp4ContentDivEle).attr("searchURL");
searchURL=searchURL.replace("SEARCH_STRING",_this._searchString);
videoSearchAjaxObject.makeAjaxCall({url:"/videosearchaction?video_search="+encodeURIComponent(searchURL)+"&pageNumber="+(page_index+1)+"&paginateFlag="+_this._paginateFlag+"&storiesPerPage="+_this._storiesPerPage,success:function(data,status){var exceptionObject=videoSearchAjaxObject.handleApplicationException(data);
if(exceptionObject.exceptionThrown){alert(exceptionObject.exceptionMessage)
}else{var tempObj=eval("("+data+")");
_this._populateStories(tempObj,eval(page_index+1))
}}})
}else{_this._populateStories(_this._cachedJsonObjects[eval(page_index)],eval(page_index+1))
}return false
};
proto._getDefaultImage=function(imageUrl,large){if(large){return $.trim(imageUrl)===""?this._siteLogoLarge:imageUrl
}else{return $.trim(imageUrl)===""?this._siteLogoSmall:imageUrl
}};
proto._storyClicked=function(ele){$(this._OlEle).find("li").removeClass(MP4Search.SELECTED_STORY_CLASS);
$(ele).addClass(MP4Search.SELECTED_STORY_CLASS);
this._setFullStory(ele);
this._playStory($(ele).attr("position"));
this._sendFeedback(this._jsonObj.feedbackBase+this._jsonObj.stories[$(ele).attr("position")].feedback)
};
proto._setFullStory=function(currentSelectedLiEle){collarityVideoFeedbackURL=$(this._mp4ContentDivEle).attr("videoFeedbackURL");
var aHrefEle=$(currentSelectedLiEle).find("a:first");
var selectedStoryIndex=$(currentSelectedLiEle).attr("position");
$(this._fullStoryDivEle).find("a:first").html(this._jsonObj.stories[selectedStoryIndex].headlineCol1).attr("href",this._jsonObj.stories[selectedStoryIndex].storyUrl).attr("title",this._jsonObj.stories[selectedStoryIndex].headline);
$(this._fullStoryDivEle).find("p:first").html(this._jsonObj.stories[selectedStoryIndex].longAbstractCol1);
$(this._fullStoryDivEle).find("a:last").attr("href",this._jsonObj.stories[selectedStoryIndex].storyUrl);
$(this._fullStoryDivEle).removeClass("hide")
};
proto._bindSearchButton=function(){var searchForm=$(this._mp4ContentDivEle).find("form")[0];
$(searchForm).bind("submit",{mp4SearchObj:this},function(event){event.preventDefault();
var searchString=$(this).find("input:first").val();
if(jQuery.trim(searchString)===""){return 
}else{var self=event.data.mp4SearchObj;
var videoSearchAjaxObject=new fim.mfl.AjaxFramework();
var searchUrl=$(self._mp4ContentDivEle).attr("searchURL");
var searchPaginationDivId=$(self._mp4ContentDivEle).attr("searchPaginationDivId");
searchUrl=searchUrl.replace("SEARCH_STRING",searchString);
self._searchString=searchString;
videoSearchAjaxObject.makeAjaxCall({url:"/videosearchaction?video_search="+encodeURIComponent(searchUrl)+"&pageNumber=1&paginateFlag="+_this._paginateFlag+"&storiesPerPage="+_this._storiesPerPage,success:function(data,status){var exceptionObject=videoSearchAjaxObject.handleApplicationException(data);
if(exceptionObject.exceptionThrown){alert(exceptionObject.exceptionMessage)
}else{var tempObj=eval("("+data+")");
self._populateStories(tempObj,1);
jQuery("#"+searchPaginationDivId).pagination(tempObj.totalPages,{callback:_this._paginationCallBack,display_entries_shift:_this._pageShift,num_display_entries:_this._pageShift,num_edge_entries:0,prev_text:_this._prevText,next_text:_this._nextText,items_per_page:1,elementsToPaginate:"#col2",storyPagerClass:"playlist",link_to:"#__id__",current_page:tempObj.currentPage-1});
if(jQuery("#"+searchPaginationDivId).hasClass("adRefresh")){jQuery("#"+searchPaginationDivId).find("a").bind("mousedown",reloadCompanionAd)
}}var tempObj=eval("("+data+")");
obj=new Object();
obj.query=searchString;
if(tempObj.numStories>0){obj.resultCount=tempObj.numStories
}else{obj.resultCount=0
}searchCallbackHandler(obj)
}})
}})
};
proto._playStory=function(storyIndex){var imageUrl=this._getDefaultImage(this._jsonObj.stories[storyIndex].imageUrl,true);
imageUrl=imageUrl.replace(/82_61/,"320_240");
var storyUrl=escape(this._jsonObj.stories[storyIndex].storyUrl);
var videoUrl=this._jsonObj.stories[storyIndex].videoUrlHigh;
var storyHeadline=escape(this._jsonObj.stories[storyIndex].headline);
getSWF(this._attributes.id).playVideo([videoUrl,imageUrl,"",storyUrl,storyHeadline])
};
proto._initVideoPlayer=function(){this._flashvars.img=escape(this._getDefaultImage(this._jsonObj.stories[0].imageUrl,true));
this._flashvars.img=this._flashvars.img.replace(/82_61/,"320_240");
this._flashvars.story=escape(this._jsonObj.stories[0].storyUrl);
this._flashvars.flv=escape(this._jsonObj.stories[0].videoUrlHigh);
this._params.id=this._attributes.id;
this._params.name=this._attributes.name;
this._params.src="/video/videoplayer.swf";
this._params.height="284";
this._params.width="320";
flashembed(this._attributes.id,this._params,this._flashvars)
};
proto._getVideoURLsXML=function(storyIndex){var sb=new StringBuffer();
sb.append("<smil>");
sb.append("<body>");
sb.append("<switch>");
sb.append('<video src="');
sb.append(this._jsonObj.stories[storyIndex].videoUrlHigh);
sb.append('" system-bitrate="550000" />');
sb.append('<ref src="');
sb.append(this._jsonObj.stories[storyIndex].videoUrlLow);
sb.append('" />');
sb.append("</switch>");
sb.append("</body>");
sb.append("</smil>");
return sb.toString()
}
})(jQuery);
(function($){var _this=null;
fim.mfl.OSMFMP4Search=function(ele,config,attributes,paginateFlag,storiesPerPage,pageShift,prevText,nextText){this._mp4ContentDivEle=ele;
this._config=config;
this._attributes=attributes;
this._init();
this._paginateFlag=paginateFlag;
this._storiesPerPage=storiesPerPage;
this._pageShift=pageShift;
this._prevText=prevText;
this._nextText=nextText;
_this=this
};
var proto=fim.mfl.OSMFMP4Search.prototype;
var MP4Search=fim.mfl.OSMFMP4Search;
proto._mp4ContentDivEle=null;
proto._OlEle=null;
proto._masterLiEle=null;
proto._jsonObj=null;
proto._firstSearch=true;
proto._config=null;
proto._attributes=null;
proto._siteLogoLarge="";
proto._siteLogoSmall="";
proto._searchString="";
proto._paginateFlag=false;
proto._storiesPerPage=0;
proto._pageShift=0;
proto._prevText="";
proto._nextText="";
proto._cachedJsonObjects=[];
MP4Search.SELECTED_STORY_CLASS="ui-tabs-selected";
proto._init=function(){this._masterLiEle=$(this._mp4ContentDivEle).find("#masterLiEle").html();
this._siteLogoLarge=$(this._mp4ContentDivEle).attr("siteLogoLarge");
this._siteLogoSmall=$(this._mp4ContentDivEle).attr("siteLogoSmall");
this._bindSearchButton()
};
proto._sendFeedback=function(url){$.get("/videofeedbackaction?feedbackUrl="+encodeURIComponent(url),function(data){log(data)
})
};
proto._populateStories=function(jsonObj,pageToShow){var numberOfStories=jsonObj.numStories;
if(numberOfStories===0){alert(jsonObj.errorMessage)
}else{this._cachedJsonObjects[pageToShow-1]=jsonObj;
if(this._firstSearch){var resultDivEle=$(this._mp4ContentDivEle).find("#videoSearchResultsDiv")[0];
$(this._mp4ContentDivEle).html($(resultDivEle).html());
this._OlEle=$(this._mp4ContentDivEle).find(".playlist:first");
this._fullStoryDivEle=$(this._mp4ContentDivEle).find("#fullStory");
this._bindSearchButton();
$(this._mp4ContentDivEle).find("input:first").val(this._searchString)
}this._jsonObj=jsonObj;
this._sendFeedback(this._jsonObj.tracking);
$(this._OlEle).empty();
for(var i=0;
i<numberOfStories;
i++){$(this._OlEle).append(this._masterLiEle);
var lastLiEle=$(this._OlEle).find("li:last");
$(lastLiEle).attr("position",i);
$(lastLiEle).find("img:first").attr("src",this._getDefaultImage(this._jsonObj.stories[i].imageUrl,false));
$(lastLiEle).find("img:first").attr("title",this._jsonObj.stories[i].headline);
$(lastLiEle).find("a:first").html(this._jsonObj.stories[i].headlineCol2).attr("src",this._jsonObj.stories[i].storyUrl).attr("title",this._jsonObj.stories[i].headline);
$(lastLiEle).find("p:first").html(this._jsonObj.stories[i].longAbstractCol2);
$(lastLiEle).bind("click",{mp4SearchObj:this},function(event){event.preventDefault();
event.data.mp4SearchObj._storyClicked(this)
});
if(i===0){$(lastLiEle).addClass(MP4Search.SELECTED_STORY_CLASS);
this._setFullStory(lastLiEle)
}}if(this._firstSearch){this._initVideoPlayer();
this._firstSearch=false
}else{this._playStory(0)
}}};
proto._paginationCallBack=function(page_index,jQ){if(jQ.hasClass("adRefresh")){jQ.find("a").bind("mousedown",reloadCompanionAd)
}if(!_this._cachedJsonObjects[eval(page_index)]){var videoSearchAjaxObject=new fim.mfl.AjaxFramework();
var searchURL=$(_this._mp4ContentDivEle).attr("searchURL");
searchURL=searchURL.replace("SEARCH_STRING",_this._searchString);
videoSearchAjaxObject.makeAjaxCall({url:"/videosearchaction?video_search="+encodeURIComponent(searchURL)+"&pageNumber="+(page_index+1)+"&paginateFlag="+_this._paginateFlag+"&storiesPerPage="+_this._storiesPerPage,success:function(data,status){var exceptionObject=videoSearchAjaxObject.handleApplicationException(data);
if(exceptionObject.exceptionThrown){alert(exceptionObject.exceptionMessage)
}else{var tempObj=eval("("+data+")");
_this._populateStories(tempObj,eval(page_index+1))
}}})
}else{_this._populateStories(_this._cachedJsonObjects[eval(page_index)],eval(page_index+1))
}return false
};
proto._getDefaultImage=function(imageUrl,large){if(large){return $.trim(imageUrl)===""?this._siteLogoLarge:imageUrl
}else{return $.trim(imageUrl)===""?this._siteLogoSmall:imageUrl
}};
proto._storyClicked=function(ele){$(this._OlEle).find("li").removeClass(MP4Search.SELECTED_STORY_CLASS);
$(ele).addClass(MP4Search.SELECTED_STORY_CLASS);
this._setFullStory(ele);
this._playStory($(ele).attr("position"));
this._sendFeedback(this._jsonObj.feedbackBase+this._jsonObj.stories[$(ele).attr("position")].feedback)
};
proto._setFullStory=function(currentSelectedLiEle){collarityVideoFeedbackURL=$(this._mp4ContentDivEle).attr("videoFeedbackURL");
var aHrefEle=$(currentSelectedLiEle).find("a:first");
var selectedStoryIndex=$(currentSelectedLiEle).attr("position");
$(this._fullStoryDivEle).find("a:first").html(this._jsonObj.stories[selectedStoryIndex].headlineCol1).attr("href",this._jsonObj.stories[selectedStoryIndex].storyUrl).attr("title",this._jsonObj.stories[selectedStoryIndex].headline);
$(this._fullStoryDivEle).find("p:first").html(this._jsonObj.stories[selectedStoryIndex].longAbstractCol1);
$(this._fullStoryDivEle).find("a:last").attr("href",this._jsonObj.stories[selectedStoryIndex].storyUrl);
$(this._fullStoryDivEle).removeClass("hide")
};
proto._bindSearchButton=function(){var searchForm=$(this._mp4ContentDivEle).find("form")[0];
$(searchForm).bind("submit",{mp4SearchObj:this},function(event){event.preventDefault();
var searchString=$(this).find("input:first").val();
if(jQuery.trim(searchString)===""){return 
}else{var self=event.data.mp4SearchObj;
var videoSearchAjaxObject=new fim.mfl.AjaxFramework();
var searchUrl=$(self._mp4ContentDivEle).attr("searchURL");
var searchPaginationDivId=$(self._mp4ContentDivEle).attr("searchPaginationDivId");
searchUrl=searchUrl.replace("SEARCH_STRING",searchString);
self._searchString=searchString;
videoSearchAjaxObject.makeAjaxCall({url:"/videosearchaction?video_search="+encodeURIComponent(searchUrl)+"&pageNumber=1&paginateFlag="+_this._paginateFlag+"&storiesPerPage="+_this._storiesPerPage,success:function(data,status){var exceptionObject=videoSearchAjaxObject.handleApplicationException(data);
if(exceptionObject.exceptionThrown){alert(exceptionObject.exceptionMessage)
}else{var tempObj=eval("("+data+")");
self._populateStories(tempObj,1);
jQuery("#"+searchPaginationDivId).pagination(tempObj.totalPages,{callback:_this._paginationCallBack,display_entries_shift:_this._pageShift,num_display_entries:_this._pageShift,num_edge_entries:0,prev_text:_this._prevText,next_text:_this._nextText,items_per_page:1,elementsToPaginate:"#col2",storyPagerClass:"playlist",link_to:"#__id__",current_page:tempObj.currentPage-1});
if(jQuery("#"+searchPaginationDivId).hasClass("adRefresh")){jQuery("#"+searchPaginationDivId).find("a").bind("mousedown",reloadCompanionAd)
}}var tempObj=eval("("+data+")");
obj=new Object();
obj.query=searchString;
if(tempObj.numStories>0){obj.resultCount=tempObj.numStories
}else{obj.resultCount=0
}searchCallbackHandler(obj)
}})
}})
};
proto._playStory=function(storyIndex){var imageUrl=this._getDefaultImage(this._jsonObj.stories[storyIndex].imageUrl,true);
imageUrl=imageUrl.replace(/82_61/,"320_240");
var storyUrl=escape(this._jsonObj.stories[storyIndex].storyUrl);
var videoUrl=this._jsonObj.stories[storyIndex].videoUrlHigh;
var storyHeadline=escape(this._jsonObj.stories[storyIndex].headline);
EndPlayVideo.getPlayerById(this._attributes.id).playVideo([videoUrl,imageUrl,"",storyUrl,false,true,"","",storyHeadline,""])
};
proto._initVideoPlayer=function(){this._config.poster=escape(this._getDefaultImage(this._jsonObj.stories[0].imageUrl,true));
this._config.poster=this._config.poster.replace(/82_61/,"320_240");
this._config.story=escape(this._jsonObj.stories[0].storyUrl);
if(!this._config.singleSource){this._config.singleSource={source:"",wmode:"opaque"}
}this._config.singleSource.source=escape(this._jsonObj.stories[0].videoUrlHigh);
this._config.id=this._attributes.id;
EndPlayVideo.HybridVideo(this._config,document.getElementById(this._attributes.id))
};
proto._getVideoURLsXML=function(storyIndex){var sb=new StringBuffer();
sb.append("<smil>");
sb.append("<body>");
sb.append("<switch>");
sb.append('<video src="');
sb.append(this._jsonObj.stories[storyIndex].videoUrlHigh);
sb.append('" system-bitrate="550000" />');
sb.append('<ref src="');
sb.append(this._jsonObj.stories[storyIndex].videoUrlLow);
sb.append('" />');
sb.append("</switch>");
sb.append("</body>");
sb.append("</smil>");
return sb.toString()
}
})(jQuery);
function videoFeedbackCallback(B){log("Video Player feedback call Event Type: "+B[0]+" Video URL: "+B[1]);
log(" Video Current Position: "+B[2]+" Video Total Duration: "+B[3]);
var A=collarityVideoFeedbackURL;
if(B[0]=="START"){A.replace("EVENT_TYPE",30)
}else{if(B[0]=="STOP"){A.replace("EVENT_TYPE",31)
}else{if(B[0]=="PAUSE"){A.replace("EVENT_TYPE",32)
}else{if(B[0]=="RESUME"){A.replace("EVENT_TYPE",33)
}else{if(B[0]=="POSITION_CHANGE"){A.replace("EVENT_TYPE",34)
}}}}}A.replace("VIDEO_URL",B[1]);
A.replace("VIDEO_CURRENT_POSITION",B[2]);
A.replace("VIDEO_TOTAL_DURATION",B[3]);
$.get("/videofeedbackaction?feedbackUrl="+encodeURIComponent(A),function(C){})
}function log(A){if(window.console){window.console.log(A)
}}var prevTabTitle=null;
var intermediateTabTitle=null;
function initLinkTracking(){initModuleTracking();
initGoogleSearchPageTracking()
}function initGlobalNavTracking(){$("div.globalNavTop[tracking]").each(function(){var metaData=$(this).attr("tracking");
metaData=eval("("+metaData+")");
switch(metaData.provider){case"Omniture":var links=$(this).find("a");
jQuery.each(links,function(i){$(this).bind("click",function(){var metaData=$(this).parents("div.globalNavTop").attr("tracking");
metaData=eval("("+metaData+")");
var moduleName=metaData.moduleName;
var module=moduleName.split(" ")[0];
module=module.toUpperCase();
log("Module is -->"+module);
trackLinkClickForOmniture(this,{moduleName:metaData.moduleName,tabTitle:"",prevTabTitle:""})
})
});
break;
case"HitBox":break
}})
}function initModuleTracking(){$("div[tracking]").each(function(){var metaData=$(this).attr("tracking");
metaData=eval("("+metaData+")");
switch(metaData.provider){case"Omniture":trackModuleLoadForOmniture(this,{moduleName:metaData.moduleName,tabTitle:"",prevTabTitle:""});
var moduleName=metaData.moduleName;
var module=moduleName.split(" ")[0];
module=module.toUpperCase();
var buttons=$(this).find("button");
jQuery.each(buttons,function(i){var trackAs=$(this).attr("trackas");
if(trackAs=="tab"){$(this).bind("click",function(){var metaData=$(this).parents("div[tracking]").attr("tracking");
metaData=eval("("+metaData+")");
var moduleName=metaData.moduleName;
var module=moduleName.split(" ")[0];
module=module.toUpperCase();
var tabULEle=$(this).parents("div[tracking]").find("ul.ui-tabs-nav:first");
var tabLIEle=$(tabULEle).find("li.ui-tabs-selected");
var tabTitle=$(this).find("img:first").attr("alt");
if(prevTabTitle==undefined){if(module.toUpperCase()=="POLL"){prevTabTitle=$(tabLIEle).find("span:last").text()
}else{prevTabTitle=$(tabULEle).find("li:first").text()
}intermediateTabTitle=prevTabTitle
}if(tabTitle!=""){if(intermediateTabTitle==prevTabTitle&&intermediateTabTitle!=tabTitle){intermediateTabTitle=tabTitle
}else{if(intermediateTabTitle!=prevTabTitle&&intermediateTabTitle!=tabTitle){prevTabTitle=intermediateTabTitle;
intermediateTabTitle=tabTitle
}}trackTabClickForOmniture(this,{moduleName:metaData.moduleName,tabTitle:tabTitle,prevTabTitle:prevTabTitle})
}})
}});
var links=$(this).find("a");
jQuery.each(links,function(i){$(this).bind("click",function(){var metaData=$(this).parents("div[tracking]").attr("tracking");
metaData=eval("("+metaData+")");
var tabULEle=$(this).parents("div[tracking]").find("ul.ui-tabs-nav:first");
var tabLIEle=$(tabULEle).find("li.ui-tabs-selected");
var moduleName=metaData.moduleName;
var module=moduleName.split(" ")[0];
module=module.toUpperCase();
var ahref=$(this).attr("href");
var trackAs=$(this).attr("trackas");
if((trackAs=="tab")||(ahref.indexOf("#")==0)){var tabTitle=$.trim($(this).text());
if(tabTitle==""){tabTitle=$(this).find("img:first").attr("alt")
}if(prevTabTitle==undefined){if(module.toUpperCase()=="POLL"){prevTabTitle=$(tabLIEle).find("span:last").text()
}else{prevTabTitle=$(tabULEle).find("li:first").text()
}intermediateTabTitle=prevTabTitle
}if(tabTitle!=""){if(intermediateTabTitle==prevTabTitle&&intermediateTabTitle!=tabTitle){intermediateTabTitle=tabTitle
}else{if(intermediateTabTitle!=prevTabTitle&&intermediateTabTitle!=tabTitle){prevTabTitle=intermediateTabTitle;
intermediateTabTitle=tabTitle
}}trackTabClickForOmniture(this,{moduleName:metaData.moduleName,tabTitle:tabTitle,prevTabTitle:prevTabTitle})
}}else{trackLinkClickForOmniture(this,{moduleName:metaData.moduleName,tabTitle:"",prevTabTitle:""})
}})
});
break;
case"HitBox":log("Hit box not supported yet.");
break
}})
}function trackDefaultTabs(B,G){var H=$(G).find("ul.ui-tabs-nav:first");
var I=$(H).find("li");
if($(I).size()>1){var E="";
var A=B.moduleName;
var C=A.split(" ")[0];
C=C.toUpperCase();
log("Module is -->"+C);
var D=$(H).find("li.ui-tabs-selected");
if(C=="MP1"||C=="MP4"||C=="WEX_TRFX1"||C=="DW_HAM1"||C=="HAM1"||C=="HAM2"||C=="LIVID1"||C=="HEADLINETALL"){E=$(D).text()
}else{if(C.toUpperCase()=="POLL"){var J=$(D).find("span:last");
E=$(J).text()
}}var F=$(D).find("a:first");
switch(B.provider){case"Omniture":trackLinkClickForOmniture(F,{moduleName:B.moduleName,tabTitle:E,prevTabTitle:""});
break;
case"HitBox":log("Hit box not supported yet.");
break
}}}function removeIllegalChars(B){var A="";
for(i=0;
i<B.length;
i++){if(B.charCodeAt(i)<256){A=A+B.charAt(i)
}}return A
}function trackLinkClickForOmniture(B,C){var A=s_gi(lin_s_account);
A.linkTrackVars="prop41,prop42,prop45,eVar41,eVar42,eVar45,events";
A.linkTrackEvents="event22";
A.events="event22";
linkText=removeIllegalChars($(B).text());
A.prop41=lin_pageName;
A.prop42=C.moduleName;
A.prop43="";
A.prop44="";
A.prop45=linkText;
A.eVar41=lin_pageName;
A.eVar42=C.moduleName;
A.eVar43="";
A.eVar44="";
A.eVar45=linkText;
log("Link Tracking (Page Name--> "+A.prop41+") (Module Name---> "+A.prop42+") (Tab Title---> "+A.prop43+") (Prev Tab Title---> "+A.prop44+") (Link Title---> "+A.prop45+")");
A.tl(B,"o",linkText);
A.prop41="";
A.prop42="";
A.prop43="";
A.prop44="";
A.prop45="";
A.eVar41="";
A.eVar42="";
A.eVar43="";
A.eVar44="";
A.eVar45=""
}function trackTabClickForOmniture(B,C){var A=s_gi(lin_s_account);
A.linkTrackVars="prop41,prop42,prop43,prop44,eVar41,eVar42,eVar43,eVar44,events";
A.linkTrackEvents="event22";
A.events="event22";
tabName=removeIllegalChars(C.tabTitle);
prevTabName=removeIllegalChars(C.prevTabTitle);
A.prop41=lin_pageName;
A.prop42=C.moduleName;
A.prop43=tabName;
A.prop44=prevTabName;
A.prop45="";
A.eVar41=lin_pageName;
A.eVar42=C.moduleName;
A.eVar43=tabName;
A.eVar44=prevTabName;
A.eVar45="";
log("Tab Tracking (Page Name--> "+A.prop41+") (Module Name---> "+A.prop42+") (Tab Title---> "+A.prop43+") (Prev Tab Title---> "+A.prop44+") (Link Title---> "+A.prop45+")");
A.tl(B,"o",tabName);
A.prop41="";
A.prop42="";
A.prop43="";
A.prop44="";
A.prop45="";
A.eVar41="";
A.eVar42="";
A.eVar43="";
A.eVar44="";
A.eVar45=""
}function trackModuleLoadForOmniture(B,C){var A=s_gi(lin_s_account);
A.linkTrackVars="prop41,prop42,eVar41,eVar42,events";
A.linkTrackEvents="event22";
A.events="event22";
A.prop41=lin_pageName;
A.prop42=C.moduleName;
A.prop43="";
A.prop44="";
A.prop45="";
A.eVar41=lin_pageName;
A.eVar42=C.moduleName;
A.eVar43="";
A.eVar44="";
A.eVar45="";
log("Module load Tracking (Page Name--> "+A.prop41+") (Module Name---> "+A.prop42+") (Tab Title---> "+A.prop43+") (Prev Tab Title---> "+A.prop44+") (Link Title---> "+A.prop45+")");
A.tl(B,"o",C.moduleName);
A.prop41="";
A.prop42="";
A.prop43="";
A.prop44="";
A.prop45="";
A.eVar41="";
A.eVar42="";
A.eVar43="";
A.eVar44="";
A.eVar45=""
}function searchCallbackHandler(B){if(B!=undefined){log("searchCallbackHandler resultCount --> "+B.resultCount);
log("searchCallbackHandler query --> "+B.query);
var A=s_gi(lin_s_account);
A.linkTrackVars="prop41,eVar41,events";
A.linkTrackEvents="event2";
A.events="event2";
A.prop41=lin_pageName;
A.eVar41=lin_pageName;
if(B.resultCount==0){A.prop5="zero";
A.eVar5=A.prop5
}else{A.prop5=B.resultCount;
A.eVar5=A.prop5
}A.prop6=B.query.toLowerCase();
A.eVar6=A.prop6;
log("Search result page Tracking Page Name--> "+A.prop41);
A.tl(null,"o","Search Results Page");
A.prop41="";
A.eVar41=""
}}function initGoogleSearchPageTracking(){var A=document.forms.top_search;
if(typeof lin_pageName!="undefined"&&lin_pageName=="search"&&A.google_web&&A.google_web.checked){search_term=$("div#header").find("input:text").val();
search_term=$.trim(search_term);
if(search_term!=""){obj=new Object();
obj.query=search_term;
if((typeof googleResultCount!="undefined")&&(googleResultCount>0)){obj.resultCount=googleResultCount
}else{obj.resultCount=0
}searchCallbackHandler(obj)
}}}function log(A){if(window.console){window.console.log(A)
}}(function(B){var A=fim.mfl.RefreshModule.prototype;
A._parseNWSRequest=function(K){var O=this;
var I=(K==""||K==null)?B([]):B(K),F=I.find(".content").html(),E=I.find(".ui-tabs-selected").html(),H=I.find(".footer").html();
F=F==null?"":F;
E=E==null?"":E;
H=H==null?"":H;
var M=1250,N={emptyModule:false,hiddenModule:false,newContentHTML:false,noTitle:false,noNewTitle:false,newTitleHTML:false,noFooter:false,noFooterLink:false,noNewFooter:false,newFooterHTML:false},J={duration:M,queue:true,specialEasing:{height:"easeOutQuint",opacity:"easeOutQuint"}},D=B("#"+O._moduleParentDivId).children("#nwsAlerts"),P=D.find(".ui-tabs-selected"),L=D.find(".content");
$currentFooter=D.find(".footer");
if(F.length==0){N.emptyModule=true
}else{if(D.length==0||D.html().length==0){N.hiddenModule=true
}else{if(F!=L.html()){N.newContentHTML=true
}if(P.length==0){N.noTitle=true
}if(E.length==0){N.noNewTitle=true
}else{if(E!=P.html()){N.newTitleHTML=true
}}if($currentFooter.length==0){N.noFooter=true
}else{if($currentFooter.children().length==0){N.noFooterLink=true
}}if(H.length==0){N.noNewFooter=true
}else{if(H!=$currentFooter.html()){N.newFooterHTML=true
}}}}if(N.emptyModule){D.animate({opacity:0,height:0},{duration:M,queue:true,complete:function(){D.remove().parent().html(K)
}})
}else{if(N.hiddenModule){B("#"+O._moduleParentDivId).addClass("hiddenModule").html(K);
D=B("#"+O._moduleParentDivId).children("#nwsAlerts").css("opacity","0");
var C=D.find(".content").parents(".module").outerHeight(true);
D.animate({opacity:1,height:C},{duration:M,queue:true,complete:function(){B("#"+O._moduleParentDivId).removeClass("hiddenModule");
B(this).css("height","auto")
}})
}else{if(N.noNewTitle&&!N.noTitle){P.parent().animate({height:0,opacity:0},{duration:M,queue:true,complete:function(){P.parent().remove()
}})
}else{if(N.newTitleHTML){if(N.noTitle){B("#"+O._moduleParentDivId).addClass("noTitle");
P=L.parent().prepend('<ul class="ui-tabs-nav titlebar"><li class="ui-tabs-selected">'+E+"</li></ul>").find(".ui-tabs-nav");
P.animate({opacity:1,height:P.children("li").outerHeight(true)},{duration:M,queue:true,complete:function(){B("#"+O._moduleParentDivId).removeClass("noTitle");
B(this).css("height","auto")
}})
}else{P.animate({opacity:0},{duration:M,queue:true,complete:function(){P.html(E);
P.animate({opacity:1},{duration:M,queue:true})
}})
}}}if(N.noNewFooter&&!N.noFooter){if(N.newContentHTML){$currentFooter.animate({opacity:0},{duration:M,queue:true}).animate({height:0},{duration:M/2,queue:true,complete:function(){$currentFooter.empty()
}})
}else{$currentFooter.animate({opacity:0,height:0},{duration:M,queue:true,complete:function(){$currentFooter.empty()
}})
}}else{if(N.newFooterHTML){if(N.noFooterLink){B("#"+O._moduleParentDivId).addClass("noFooter");
if(N.noFooter){$currentFooter=L.parent().prepend('<div class="footer">'+H+"</div>").find(".footer")
}else{$currentFooter.html(H).children("a").end().css("height","0")
}var G=0;
if(N.newContentHTML){G=M
}$currentFooter.animate({opacity:0},{duration:G,queue:true}).animate({height:$currentFooter.children("a").outerHeight(true)},{duration:M/2,queue:true}).animate({opacity:1},{duration:M,queue:true,complete:function(){B("#"+O._moduleParentDivId).removeClass("noFooter");
B(this).css("height","auto")
}})
}else{$currentFooter.animate({opacity:0},{duration:M,queue:true,complete:function(){$currentFooter.html(H);
var Q=0;
if(N.newContentHTML){Q=M*(0.5)
}$currentFooter.animate({opacity:0},{duration:Q,queue:true}).animate({opacity:1},{duration:M,queue:true})
}})
}}}if(N.newContentHTML){D.find(".content").css("height",D.find(".content").height());
L.animate({opacity:0},{duration:M,queue:true,complete:function(){L.html(F);
var Q=0;
D.find(".content").children("div").each(function(){Q=Q+B(this).outerHeight(true)
});
D.find(".content").animate({height:Q},{duration:M/2,queue:true,complete:function(){L.animate({opacity:1},{duration:M,queue:true})
}})
}})
}}}}
})(jQuery);
$(function(){$("div.breakingRight a.close").click(function(){$(this).parents(".breaking").hide("slow")
});
$(".module").each(function(B){$(this).find(".images").each(function(C){$(this).find(".photo div a").each(function(D){var E=0;
$(this).bind("mouseleave",function(F){var G=$(this).parents(".module").find(".tooltip a");
$(this).find("img").attr("title",G.html());
E=setTimeout(function(){$(this).parents(".module").find(".tooltip").css({right:"",left:"",display:"none"}).removeClass().addClass("tooltip")
},1000)
}).bind("mouseenter",function(F){if(E){clearTimeout(E)
}A(this,D)
})
});
$(this).bind("mouseleave",function(D){$(this).parents(".module").find(".tooltip").css({right:"",left:"",display:"none"}).removeClass().addClass("tooltip")
})
})
});
function A(E,C){var G=C%6;
var D=$(E).parents(".module");
var B=$(E).parents(".images");
var F=$(E).find("img").attr("alt");
$(E).find("img").attr("title","");
if(B.find(".tooltip").length===0){B.append('<div class="tooltip"><div/></div>')
}switch(G){case 5:D.find(".tooltip").removeClass().addClass("tooltip right third");
break;
case 4:D.find(".tooltip").removeClass().addClass("tooltip right second");
break;
case 3:D.find(".tooltip").removeClass().addClass("tooltip right first");
break;
case 2:D.find(".tooltip").removeClass().addClass("tooltip left third");
break;
case 1:D.find(".tooltip").removeClass().addClass("tooltip left second");
break;
case 0:D.find(".tooltip").removeClass().addClass("tooltip left first");
break
}if(F){D.find(".tooltip").css({display:"block",top:($(E).parents(".photo").position().top+$(E).parents(".photo").height()-10)+"px"})
}else{D.find(".tooltip").css({right:"",left:"",display:"none"}).removeClass().addClass("tooltip")
}if($(E).find("img").attr("data")){if($(E).attr("onclick")){D.find(".tooltip").html('<a href="'+$(E).attr("href")+'" onclick="popupWindow(\''+$(E).attr("href")+"', 'Images', 'width=765, height=726') ;return false\" >"+F+"</a><p>"+$(E).find("img").attr("data")+"</p><div/>")
}else{D.find(".tooltip").html('<a href="'+$(E).attr("href")+'">'+F+"</a><p>"+$(E).find("img").attr("data")+"</p><div/>")
}}else{if($(E).attr("onclick")){D.find(".tooltip").html('<a href="'+$(E).attr("href")+'" onclick="popupWindow(\''+$(E).attr("href")+"', 'Images', 'width=765, height=726') ;return false\" >"+F+"</a><div/>")
}else{D.find(".tooltip").html('<a href="'+$(E).attr("href")+'">'+F+"</a><div/>")
}}}});
var deferAdCount=0,deferAds=[],deferRepoAds=[],deferAdParents=[];
var placeAd=function(){if(deferAdCount+1>deferAdParents.length){return false
}deferAdParents.eq(deferAdCount).each(function(A){var E=$(this).children("div.deferAd");
var B=E.attr("tile");
E.attr("deferredAd",deferAdCount);
var D=E.offset().left-$("#wrapper").offset().left;
var C=E.offset().top-$("#wrapper").offset().top;
document.write("<div class='deferredAd'  style='top:"+C+"px; margin-left:"+D+"px;'>");
document.write(ads[B])
});
deferAdCount++;
return true
};
var lastSuper,lastSuperH,lastSuperT,lastThirdCol,lastThirdColH,lastThirdColT;
var deferredAds=[],lastSuperHChanged=false,lastSuperTChanged=false,lastThirdColHChanged=false,lastThirdColTChanged=false;
changeAdvertisementPositions=function(){deferAds.each(function(B){var F=$(this);
var C=F.attr("tile");
var A=F.attr("deferredAd");
if($(this).is(":visible")){var E=F.offset().top-$("#wrapper").offset().top;
var D=F.offset().left-$("#wrapper").offset().left;
deferredAds.eq(A).css({display:"block",top:E+"px","margin-left":D+"px"})
}else{deferredAds.eq(A).css({display:"none"})
}})
};
adjustAdvertisements=function(A){newlastSuperH=lastSuper.height(),newlastSuperT=lastSuper.offset().top,newlastThirdColH=lastThirdCol.height(),newlastThirdColT=lastThirdCol.offset().top;
lastSuperHChanged=(lastSuperH-newlastSuperH)!=0?true:false,lastSuperTChanged=(lastSuperT-newlastSuperT)!=0?true:false,lastThirdColHChanged=(lastThirdColH-newlastThirdColH)!=0?true:false,lastThirdColTChanged=(lastThirdColT-newlastThirdColT)!=0?true:false;
positionChanged=(lastSuperHChanged!=0||lastSuperTChanged!=0||lastThirdColHChanged!=0||lastThirdColTChanged!=0)?true:false;
if(positionChanged){lastSuperH=newlastSuperH,lastSuperT=newlastSuperT,lastThirdColH=newlastThirdColH,lastThirdColT=newlastThirdColT;
changeAdvertisementPositions()
}if(--A>0){setTimeout("adjustAdvertisements("+A+")",100)
}};
var initializeDeferAds=function(){$(".col3 .advert300By250").parents(".bigad").css("z-index","99");
deferAds=$("div.deferAd"),deferAdParents=deferAds.parent().filter(function(A){return $(this).height()=="60"
}).add(deferAds.parent().filter(function(A){return $(this).width()=="300"&&$(this).height()!="100"
})).add(deferAds.parent().filter(function(A){return $(this).height()=="100"
})).add(deferAds.parent().filter(function(A){return $(this).height()=="90"
}));
lastSuper=$(".super:last"),lastSuperH=lastSuper.height(),lastSuperT=lastSuper.offset().top,lastThirdCol=$(".col3:last"),lastThirdColH=lastThirdCol.height(),lastThirdColT=lastThirdCol.offset().top
};
var initializeDeferredAds=function(){deferredAds=$("div.deferredAd");
deferAds.each(function(B){var G=$(this);
var C=G.attr("tile");
var A=G.attr("deferredAd");
var F=G.offset().top-$("#wrapper").offset().top;
var E=G.offset().left-$("#wrapper").offset().left;
var D=G.width();
deferredAds.eq(A).css({top:F+"px","margin-left":E+"px",width:D+"px"})
});
adjustAdvertisements(200000)
};
var deferRepoAdsFix=function(){deferRepoAds.css("top","-700px");
setTimeout(deferRepoAdsFixFailsafe,500)
};
var deferRepoAdsFixFailsafe=function(){if(deferRepoAds.filter(function(A){if($(this).css("top")=="-700px"){return true
}}).length>0){changeAdvertisementPositions()
}};
$(function(){deferRepoAds=$(".deferredAd").filter(function(A){if($(this).css("margin-left").slice(0,-2)<500){return true
}});
$("#storyPager a").live("mousedown",deferRepoAdsFix);
$(".controlsContainer .regular, .media1 button.large, #mp2map a").bind("mousedown",deferRepoAdsFix);
$(".media1 .module-bg, .media2 .module-bg").bind("tabsselect",deferRepoAdsFix)
});
var oldDoublePlayer=doublePlayer;
var doublePlayer=function(A){deferRepoAdsFix();
oldDoublePlayer(A)
};
var oldSinglePlayer=singlePlayer;
var singlePlayer=function(A){oldSinglePlayer(A);
deferRepoAdsFix()
};
function loadCompanionAd(A){var B=$("div.companionAd").add($(".deferredAd").eq($(".advert300By250 .deferAd").attr("deferredad"))).each(function(C){var D=$(this).find("*[src]").attr("src");
$(this).html('<div src="'+D+'">'+A+"</div>")
})
}jQuery(document).ready(function(A){A("#header_date").each(function(){new fim.mfl.getSiteDate(this.getAttribute("id"))
});
if(A(".detail").hasClass("adRefresh")){A("#storyPager a").live("mousedown",reloadCompanionAd)
}});
function pauseSlide(A){jQuery("*[name="+A+"]").parents(".module .module-bg").tabs("rotate",null).end().parents(".module").find(".play a").text("Play")
}function reloadCompanionAd(){ord=Math.random()*10000000000000000;
if(typeof (this.adSpots)=="undefined"){if($(".deferredAd").length>0){this.adSpots=$('#leaderboard>div, .companionAd, .deferredAd, .ad>div[style*="728"]').filter(function(A){return $(this).width()!=120
})
}else{this.adSpots=$('#leaderboard>div, .ad>div[style*="300"], .ad>div[style*="638"], .ad>div[style*="728"]')
}}this.adSpots.each(function(B){if(!$(this).attr("lastAdLoad")){$(this).attr("lastAdLoad","0")
}if(Number($(this).attr("lastAdLoad"))+adRefreshTimeout<(new Date).getTime()){$(this).attr("lastAdLoad",(new Date).getTime());
var A=$(this).find("*[src]").attr("src");
var C=A.split("sz=")[1].split(",")[0].split(";")[0].split(" ")[0].split("x");
var D='<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="width: '+C[0]+"px; height: "+C[1]+'px;" src="'+A.replace("adj","adi").replace(new RegExp("(sz=300x250[0-9,x]+)"),"sz=300x250").split("ord=")[0]+"ord="+ord+'" />';
$(this).html(D)
}})
}jQuery(document).ready(function(A){
var isExpanded = $('.htmlInt').parent('.content').find(".larger");
	if(isExpanded.get(0) != undefined){
		$('.htmlInt').parent().find(".controlsContainer").css("width","620px");
	}
	$('.htmlInt').parent().find('.controlsContainer .regular').unbind('click');
	$('.htmlInt').parent().find('.controlsContainer .regular').click(function(event){
	event.preventDefault();
		var 
			m=$(this).parents('.module'),
			d=$(this).parents('.content').find('.htmlComponent'),
			h=d.css('height'),
			control = $(this).parents('.controlsContainer');

		if (m.hasClass('double')) {
			m.removeClass('double');
			if (h!='auto') {
				if($(this).parents('.content').find(".htVariable").get(0)){
					d.css('width',d.width()/2 + 'px');
				}else{
					d.css('height',d.height()/2+"px");
					d.css('width',d.width()/2 + 'px');
				}
			}
			$(this).parents('.content').find('.htmlInt').removeClass('larger');
			control.css('width','300px');
		}
		else {
			m.addClass('double');
			if (h!='auto') {
				if($(this).parents('.content').find(".htVariable").get(0)){
					d.css('width',d.width()*2 + 'px');
				}else{
					d.css('height',d.height()*2+"px");
					d.css('width',d.width()*2 + 'px');
				}
			}
			$(this).parents('.content').find('.htmlInt').addClass('larger');
			control.css('width','620px');
		}
	});
});
/* EndPlayVideo Framework START */
(function(a,e){var c=a.document;(function(){var b=!1,a=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.JRClass=function(){};JRClass.extend=function(c){function d(){!b&&this.init&&this.init.apply(this,arguments)}var e=this.prototype;b=!0;var i=new this;b=!1;for(var n in c)i[n]="function"==typeof c[n]&&"function"==typeof e[n]&&a.test(c[n])?function(b,a){return function(){var c=this._super;this._super=e[b];var d=a.apply(this,arguments);this._super=c;return d}}(n,c[n]):c[n];d.prototype=i;d.constructor=
d;d.extend=arguments.callee;return d}})();var d=JRClass.extend({init:function(b,a){this.video="string"==typeof b?c.getElementById(b):b;this.video.player=this;this.values={};this.elements={};this.options={autoplay:!1,preload:!0,useBuiltInControls:!1,controlsBelow:!1,controlsAtStart:!1,controlsHiding:!0,defaultVolume:0.85,playerFallbackOrder:["html5","flash","links"],flashPlayer:"htmlObject",flashPlayerVersion:!1};"object"==typeof d.options&&_V_.merge(this.options,d.options);"object"==typeof a&&_V_.merge(this.options,
a);this.getPreloadAttribute()!==e&&(this.options.preload=this.getPreloadAttribute());this.getAutoplayAttribute()!==e&&(this.options.autoplay=this.getAutoplayAttribute());this.box=this.video.parentNode;this.linksFallback=this.getLinksFallback();this.hideLinksFallback();this.each(this.options.playerFallbackOrder,function(b){if(this[b+"Supported"]())return this[b+"Init"](),!0});this.activateElement(this,"player");this.activateElement(this.box,"box")},behaviors:{},newBehavior:function(b,a,c){this.behaviors[b]=
a;this.extend(c)},activateElement:function(b,a){"string"==typeof b&&(b=c.getElementById(b));this.behaviors[a].call(this,b)},errors:[],warnings:[],warning:function(b){this.warnings.push(b);this.log(b)},history:[],log:function(b){if(b){"string"==typeof b&&(b={type:b});b.type&&this.history.push(b.type);50<=this.history.length&&this.history.shift();try{console.log(b.type)}catch(a){try{opera.postError(b.type)}catch(c){}}}},setLocalStorage:function(b,a){EndPlayVideo.control.FlashExternalController.setLocalStorage(b,
a)},getLocalStorage:function(b){return EndPlayVideo.control.FlashExternalController.getLocalStorage(b)},getPreloadAttribute:function(){if("function"==typeof this.video.hasAttribute&&this.video.hasAttribute("preload")){var b=this.video.getAttribute("preload");return""===b||"true"===b?"auto":"false"===b?"none":b}},getAutoplayAttribute:function(){if("function"==typeof this.video.hasAttribute&&this.video.hasAttribute("autoplay"))return"false"===this.video.getAttribute("autoplay")?!1:!0},bufferedPercent:function(){return this.duration()?
this.buffered()[1]/this.duration():0},each:function(b,a){if(b&&0!==b.length)for(var c=0,d=b.length;c<d&&!a.call(this,b[c],c);c++);},extend:function(b){for(var a in b)b.hasOwnProperty(a)&&(this[a]=b[a])}});d.player=d.prototype;d.player.extend({flashSupported:function(){this.flashElement||(this.flashElement=this.getFlashElement());return this.flashElement&&this.flashPlayerVersionSupported()?!0:!1},flashInit:function(){this.replaceWithFlash();this.element=this.flashElement;this.video.src="";var b=d.flashPlayers[this.options.flashPlayer];
this.extend(d.flashPlayers[this.options.flashPlayer].api);b.init._ctx(this)()},getFlashElement:function(){for(var b=this.video.children,a=0,c=b.length;a<c;a++)if("vjs-flash-fallback"==b[a].className)return b[a]},replaceWithFlash:function(){this.flashElement&&(this.box.insertBefore(this.flashElement,this.video),this.video.style.display="none")},flashPlayerVersionSupported:function(){var b=this.options.flashPlayerVersion?this.options.flashPlayerVersion:d.flashPlayers[this.options.flashPlayer].flashPlayerVersion;
return d.getFlashVersion()>=b}});d.flashPlayers={};d.flashPlayers.htmlObject={flashPlayerVersion:9,init:function(){return!0},api:{width:function(b){return b!==e?(this.element.width=b,this.box.style.width=b+"px",this.triggerResizeListeners(),this):this.element.width},height:function(b){return b!==e?(this.element.height=b,this.box.style.height=b+"px",this.triggerResizeListeners(),this):this.element.height}}};d.player.extend({linksSupported:function(){return!0},linksInit:function(){this.showLinksFallback();
this.element=this.video},getLinksFallback:function(){return this.box.getElementsByTagName("P")[0]},hideLinksFallback:function(){this.linksFallback&&(this.linksFallback.style.display="none")},showLinksFallback:function(){this.linksFallback&&(this.linksFallback.style.display="block")}});d.merge=function(b,a,c){for(var d in a)if(a.hasOwnProperty(d)&&(!c||!b.hasOwnProperty(d)))b[d]=a[d];return b};d.extend=function(b){this.merge(this,b,!0)};d.extend({setupAllWhenReady:function(b){d.options=b;d.DOMReady(d.setup)},
DOMReady:function(b){d.addToDOMReady(b)},setup:function(b,a){var e=!1,j=[],h;if(!b||"All"==b)b=d.getVideoJSTags();else if("object"!=typeof b||1==b.nodeType)b=[b],e=!0;for(var i=0;i<b.length;i++)h="string"==typeof b[i]?c.getElementById(b[i]):b[i],j.push(new d(h,a));return e?j[0]:j},getVideoJSTags:function(){for(var b=c.getElementsByTagName("video"),a=[],d,e=0,h=b.length;e<h;e++)d=b[e],-1!=d.className.indexOf("video-js")&&a.push(d);return a},browserSupportsVideo:function(){if("undefined"!=typeof d.videoSupport)return d.videoSupport;
d.videoSupport=!!c.createElement("video").canPlayType;return d.videoSupport},getFlashVersion:function(){if("undefined"!=typeof d.flashVersion)return d.flashVersion;var b=0,c;if("undefined"!=typeof navigator.plugins&&"object"==typeof navigator.plugins["Shockwave Flash"])(c=navigator.plugins["Shockwave Flash"].description)&&!("undefined"!=typeof navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&!navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)&&(b=parseInt(c.match(/^.*\s+([^\s]+)\.[^\s]+\s+[^\s]+$/)[1],
10));else if("undefined"!=typeof a.ActiveXObject)try{(c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))&&(b=parseInt(c.GetVariable("$version").match(/^[^\s]+\s(\d+)/)[1],10))}catch(e){}d.flashVersion=b;return d.flashVersion},isIE:function(){return!+"\v1"},isIPad:function(){return null!==navigator.userAgent.match(/iPad/i)},isIPhone:function(){return null!==navigator.userAgent.match(/iPhone/i)},isIOS:function(){return d.isIPhone()||d.isIPad()},iOSVersion:function(){var b=navigator.userAgent.match(/OS (\d+)_/i);
if(b&&b[1])return b[1]},isAndroid:function(){return null!==navigator.userAgent.match(/Android/i)},androidVersion:function(){var b=navigator.userAgent.match(/Android (\d+)\./i);if(b&&b[1])return b[1]},warnings:{videoNotReady:"Video is not ready yet (try playing the video first).",localStorageFull:"Local Storage is Full"}});d.isIE()&&c.createElement("video");a.VideoJS=a._V_=d;d.player.extend({html5Supported:function(){this.canPlaySource();return d.browserSupportsVideo()?!0:!1},html5Init:function(){this.element=
this.video;this.fixPreloading();this.supportProgressEvents();var b=this.getLocalStorage("volume"),a=this.getLocalStorage("muted");null!=a&&"true"===""+a&&(b=0);this.volume(null!=b?b:this.options.defaultVolume);this.socialController=!1;d.isIOS()?(this.options.useBuiltInControls=!0,this.iOSInterface()):d.isAndroid()&&(this.options.useBuiltInControls=!0,this.androidInterface());this.options.useBuiltInControls||(this.video.controls=!1,this.options.controlsBelow&&_V_.addClass(this.box,"vjs-controls-below"),
this.activateElement(this.video,"playToggle"),this.buildStylesCheckDiv(),this.buildAndActivatePoster(),this.buildBigPlayButton(),this.buildAndActivateSpinner(),this.buildAndActivateSocialPopup(),this.buildAndActivateControlBar(),this.loadInterface(),this.getSubtitles());this.overlayContainer=_V_.createElement("div",{className:"vjs-overlayContainer"});this.box.appendChild(this.overlayContainer)},canPlaySource:function(){var b=this,a=function(a){var c=a.type?b.video.canPlayType(a.type)||b.canPlayExt(a.src):
b.canPlayExt(a.src);return"probably"==c||"maybe"==c?(b.firstPlayableSource=a,b.canPlaySourceResult=!0):!1};if(!(null==this.video.src||""===this.video.src)&&a({src:this.video.src,type:null}))return!0;for(var c=this.video.children,d=0,e=c.length;d<e;d++)if("SOURCE"==c[d].tagName.toUpperCase()&&a(c[d]))return!0;return this.canPlaySourceResult=!1},canPlayExt:function(b){if(!b)return"";if((b=b.match(/\.([^\.]+)$/))&&b[1])if(b=b[1].toLowerCase(),d.isAndroid()){if("mp4"==b||"m4v"==b)return"maybe"}else if(d.isIOS()&&
"m3u8"==b)return"maybe";return""},forceTheSource:function(){if((null==this.video.src||""===this.video.src)&&this.firstPlayableSource)this.video.src=this.firstPlayableSource.src;this.video.load()},fixPreloading:function(){"function"==typeof this.video.hasAttribute&&this.video.hasAttribute("preload")&&"none"!=this.video.preload?this.video.autobuffer=!0:(this.video.autobuffer=!1,this.video.preload="none")},supportProgressEvents:function(){_V_.addListener(this.video,"progress",this.playerOnVideoProgress._ctx(this))},
playerOnVideoProgress:function(b){this.setBufferedFromProgress(b)},setBufferedFromProgress:function(b){0<b.total&&(b=b.loaded/b.total*this.duration(),b>this.values.bufferEnd&&(this.values.bufferEnd=b))},iOSInterface:function(){4>d.iOSVersion()&&this.forceTheSource();d.isIPad()&&this.buildAndActivateSpinner()},androidInterface:function(){this.forceTheSource();_V_.addListener(this.video,"click",function(){this.play()});this.buildBigPlayButton();_V_.addListener(this.bigPlayButton,"click",function(){this.play()}._ctx(this));
this.positionBox();this.showBigPlayButtons()},loadInterface:function(){if(!this.stylesHaveLoaded()&&(this.positionRetries||(this.positionRetries=1),100>this.positionRetries++)){setTimeout(this.loadInterface._ctx(this),10);return}this.video&&(this.hideStylesCheckDiv(),this.showPoster(),!1!==this.video.paused&&this.showBigPlayButtons(),this.options.controlsAtStart&&this.showControlBars(),this.positionAll())},buildAndActivateControlBar:function(){this.controls=_V_.createElement("div",{className:"vjs-controls"});
this.showMenu(!1);this.showExpander(!1);this.box.appendChild(this.controls);this.activateElement(this.controls,"controlBar");this.activateElement(this.controls,"mouseOverVideoReporter");this.playControl=_V_.createElement("div",{className:"vjs-play-control",innerHTML:"<span></span>"});this.controls.appendChild(this.playControl);this.activateElement(this.playControl,"playToggle");this.progressControl=_V_.createElement("div",{className:"vjs-progress-control"});this.controls.appendChild(this.progressControl);
this.progressHolder=_V_.createElement("div",{className:"vjs-progress-holder"});this.progressControl.appendChild(this.progressHolder);this.activateElement(this.progressHolder,"currentTimeScrubber");this.loadProgressBar=_V_.createElement("div",{className:"vjs-load-progress"});this.progressHolder.appendChild(this.loadProgressBar);this.activateElement(this.loadProgressBar,"loadProgressBar");this.playProgressBar=_V_.createElement("div",{className:"vjs-play-progress"});this.progressHolder.appendChild(this.playProgressBar);
this.activateElement(this.playProgressBar,"playProgressBar");this.timeControl=_V_.createElement("div",{className:"vjs-time-control"});this.controls.appendChild(this.timeControl);this.currentAdTimeDisplay=_V_.createElement("span",{className:"vjs-current-adTime-display",innerHTML:"Ad Playing"});_V_.addClass(this.currentAdTimeDisplay,"vjs-noDisplay");this.timeControl.appendChild(this.currentAdTimeDisplay);this.currentTimeDisplay=_V_.createElement("span",{className:"vjs-current-time-display",innerHTML:"00:00"});
this.timeControl.appendChild(this.currentTimeDisplay);this.activateElement(this.currentTimeDisplay,"currentTimeDisplay");this.timeSeparator=_V_.createElement("span",{innerHTML:" / "});this.timeControl.appendChild(this.timeSeparator);this.durationDisplay=_V_.createElement("span",{className:"vjs-duration-display",innerHTML:"00:00"});this.timeControl.appendChild(this.durationDisplay);this.activateElement(this.durationDisplay,"durationDisplay");this.volumeControl=_V_.createElement("div",{className:"vjs-volume-control",
innerHTML:"<div><span></span><span></span><span></span><span></span><span></span><span></span></div>"});this.controls.appendChild(this.volumeControl);this.activateElement(this.volumeControl,"volumeScrubber");this.volumeDisplay=this.volumeControl.children[0];this.activateElement(this.volumeDisplay,"volumeDisplay");this.fullscreenControl=_V_.createElement("div",{className:"vjs-fullscreen-control",innerHTML:"<div><span></span><span></span><span></span><span></span></div>"});this.controls.appendChild(this.fullscreenControl);
this.activateElement(this.fullscreenControl,"fullscreenToggle");this.expandControl=_V_.createElement("div",{className:"vjs-expand-control",innerHTML:""});this.controls.appendChild(this.expandControl);this.activateElement(this.expandControl,"expandControl");this.menuControl=_V_.createElement("div",{className:"vjs-menu-control",innerHTML:""});this.controls.appendChild(this.menuControl);this.activateElement(this.menuControl,"menuControl")},buildAndActivatePoster:function(){this.updatePosterSource();
this.video.poster?(this.poster=c.createElement("div"),this.posterImage=c.createElement("img"),this.poster.appendChild(this.posterImage),this.posterImage.src=this.video.poster,this.poster.className="vjs-poster",this.activateElement(this.poster,"poster")):this.poster=!1},buildBigPlayButton:function(){this.bigPlayButton=_V_.createElement("div",{className:"vjs-big-play-button",innerHTML:"<span></span>"});this.box.appendChild(this.bigPlayButton);this.activateElement(this.bigPlayButton,"bigPlayButton")},
buildAndActivateSpinner:function(){this.spinner=_V_.createElement("div",{className:"vjs-spinner",innerHTML:"<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"});this.box.appendChild(this.spinner);this.activateElement(this.spinner,"spinner")},buildAndActivateSocialPopup:function(){this.social=_V_.createElement("div",{className:"vjs-social",innerHTML:"<div class='vjs-social-close'></div><div class='vjs-social-main'><div class='vjs-social-share'></div><div class='vjs-social-twitter'></div></div><div class='vjs-social-emailScreen'></div><div class='vjs-social-embedScreen'></div>"});
this.box.appendChild(this.social);this.activateElement(this.social,"social")},buildStylesCheckDiv:function(){this.stylesCheckDiv=_V_.createElement("div",{className:"vjs-styles-check"});this.stylesCheckDiv.style.position="absolute";this.box.appendChild(this.stylesCheckDiv)},hideStylesCheckDiv:function(){this.stylesCheckDiv.style.display="none"},stylesHaveLoaded:function(){return 5!=this.stylesCheckDiv.offsetHeight?!1:!0},positionAll:function(){this.positionBox();this.positionControlBars();this.positionPoster()},
positionBox:function(){this.videoIsFullScreen?(this.box.style.width="",this.element.style.height="",this.options.controlsBelow&&(this.box.style.height="",this.element.style.height=this.box.offsetHeight-this.controls.offsetHeight+"px")):(this.box.style.width=this.width()+"px",this.element.style.height=this.height()+"px",this.options.controlsBelow&&(this.element.style.height=""))},getSubtitles:function(){for(var b=this.video.getElementsByTagName("TRACK"),a=0,c=b.length;a<c;a++)"subtitles"==b[a].getAttribute("kind")&&
b[a].getAttribute("src")&&(this.subtitlesSource=b[a].getAttribute("src"),this.loadSubtitles(),this.buildSubtitles())},loadSubtitles:function(){_V_.get(this.subtitlesSource,this.parseSubtitles._ctx(this))},parseSubtitles:function(b){var b=b.split("\n"),a="",c,d;this.subtitles=[];this.currentSubtitle=!1;for(var e=this.lastSubtitleIndex=0;e<b.length;e++)if(a=_V_.trim(b[e])){c={id:a,index:this.subtitles.length};a=_V_.trim(b[++e]);a=a.split(" --\> ");c.start=this.parseSubtitleTime(a[0]);c.end=this.parseSubtitleTime(a[1]);
d=[];for(var i=e;i<b.length;i++){a=_V_.trim(b[++e]);if(!a)break;d.push(a)}c.text=d.join("<br/>");this.subtitles.push(c)}},parseSubtitleTime:function(b){var a=b.split(":"),b=0+3600*parseFloat(a[0]),b=b+60*parseFloat(a[1]),a=a[2].split(/\.|,/),b=b+parseFloat(a[0]);(ms=parseFloat(a[1]))&&(b+=ms/1E3);return b},buildSubtitles:function(){this.subtitlesDisplay=_V_.createElement("div",{className:"vjs-subtitles"});this.box.appendChild(this.subtitlesDisplay);this.activateElement(this.subtitlesDisplay,"subtitlesDisplay")},
addVideoListener:function(b,a){_V_.addListener(this.video,b,a.rEvtContext(this))},play:function(){this.video.play();return this},onPlay:function(b){this.addVideoListener("play",b);return this},pause:function(){this.video.pause();return this},onPause:function(b){this.addVideoListener("pause",b);return this},paused:function(){return this.video.paused},toggleSocialPopup:function(b){b?this.socialController.open():this.socialController.close()},showMenu:function(b){this.controls&&(b?_V_.removeClass(this.controls,
"noMenu"):_V_.addClass(this.controls,"noMenu"))},showExpander:function(b){this.controls&&(b?_V_.removeClass(this.controls,"noExpander"):_V_.addClass(this.controls,"noExpander"))},toggleExpand:function(b){this.controls&&this.expandControl&&(b?_V_.addClass(this.expandControl,"expanded"):_V_.removeClass(this.expandControl,"expanded"),this.expanded=Boolean(b))},currentTime:function(b){if(b!==e){try{this.video.currentTime=b}catch(a){this.warning(d.warnings.videoNotReady)}this.values.currentTime=b;return this}return this.video.currentTime},
onCurrentTimeUpdate:function(b){this.currentTimeListeners.push(b)},duration:function(){return this.video.duration},buffered:function(){this.values.bufferStart===e&&(this.values.bufferStart=0,this.values.bufferEnd=0);if(this.video.buffered&&0<this.video.buffered.length){var b=this.video.buffered.end(0);b>this.values.bufferEnd&&(this.values.bufferEnd=b)}return[this.values.bufferStart,this.values.bufferEnd]},volume:function(b){return b!==e?(this.values.volume=Math.max(0,Math.min(1,parseFloat(b))),this.video.volume=
this.values.volume,0===this.values.volume?this.setLocalStorage("muted",!0):(this.setLocalStorage("volume",this.values.volume),this.setLocalStorage("muted",!1)),this):this.values.volume?this.values.volume:this.video.volume},onVolumeChange:function(b){_V_.addListener(this.video,"volumechange",b.rEvtContext(this))},width:function(b){return b!==e?(this.video.width=b,this.box.style.width=b+"px",this.triggerResizeListeners(),this):this.video.offsetWidth},height:function(b){return b!==e?(this.video.height=
b,this.box.style.height=b+"px",this.triggerResizeListeners(),this):this.video.offsetHeight},supportsFullScreen:function(){if("function"==typeof this.video.webkitEnterFullScreen){var b=navigator,a=b.userAgent;if((-1==b.vendor.indexOf("Apple")||d.isIOS())&&!a.match("Chrome")&&!a.match("Mac OS X 10.5"))return!0}return!1},html5EnterNativeFullScreen:function(){try{this.video.webkitEnterFullScreen()}catch(b){11==b.code&&this.warning(d.warnings.videoNotReady)}return this},enterFullScreen:function(){this.supportsFullScreen()?
this.html5EnterNativeFullScreen():this.enterFullWindow()},exitFullScreen:function(){this.supportsFullScreen()||this.exitFullWindow()},enterFullWindow:function(){this.videoIsFullScreen=!0;this.docOrigOverflow=c.documentElement.style.overflow;_V_.addListener(c,"keydown",this.fullscreenOnEscKey.rEvtContext(this));_V_.addListener(a,"resize",this.fullscreenOnWindowResize.rEvtContext(this));c.documentElement.style.overflow="hidden";_V_.addClass(this.box,"vjs-fullscreen");this.positionAll()},exitFullWindow:function(){this.videoIsFullScreen=
!1;c.removeEventListener("keydown",this.fullscreenOnEscKey,!1);a.removeEventListener("resize",this.fullscreenOnWindowResize,!1);c.documentElement.style.overflow=this.docOrigOverflow;_V_.removeClass(this.box,"vjs-fullscreen");this.positionAll()},onError:function(b){this.addVideoListener("error",b);return this},onEnded:function(b){this.addVideoListener("ended",b);return this}});d.player.newBehavior("player",function(){this.onError(this.playerOnVideoError);this.onPlay(this.playerOnVideoPlay);this.onPlay(this.trackCurrentTime);
this.onPause(this.playerOnVideoPause);this.onPause(this.stopTrackingCurrentTime);this.onEnded(this.playerOnVideoEnded);this.trackBuffered();this.onBufferedUpdate(this.isBufferFull)},{playerOnVideoError:function(b){this.log(b);this.log(this.video.error)},playerOnVideoPlay:function(){this.hasPlayed=!0},playerOnVideoPause:function(){},playerOnVideoEnded:function(){this.currentTime(0);this.pause()},trackBuffered:function(){this.bufferedInterval=setInterval(this.triggerBufferedListeners._ctx(this),500)},
stopTrackingBuffered:function(){clearInterval(this.bufferedInterval)},bufferedListeners:[],onBufferedUpdate:function(b){this.bufferedListeners.push(b)},triggerBufferedListeners:function(){this.isBufferFull();this.each(this.bufferedListeners,function(b){b._ctx(this)()})},isBufferFull:function(){1==this.bufferedPercent()&&this.stopTrackingBuffered()},trackCurrentTime:function(){this.currentTimeInterval&&clearInterval(this.currentTimeInterval);this.currentTimeInterval=setInterval(this.triggerCurrentTimeListeners._ctx(this),
100);this.trackingCurrentTime=!0},stopTrackingCurrentTime:function(){clearInterval(this.currentTimeInterval);this.trackingCurrentTime=!1},currentTimeListeners:[],triggerCurrentTimeListeners:function(b,a){this.each(this.currentTimeListeners,function(b){b._ctx(this)(a||this.currentTime())})},resizeListeners:[],onResize:function(b){this.resizeListeners.push(b)},triggerResizeListeners:function(){this.each(this.resizeListeners,function(b){b._ctx(this)()})}});d.player.newBehavior("mouseOverVideoReporter",
function(b){_V_.addListener(b,"mousemove",this.mouseOverVideoReporterOnMouseMove._ctx(this));_V_.addListener(b,"mouseout",this.mouseOverVideoReporterOnMouseOut._ctx(this))},{mouseOverVideoReporterOnMouseMove:function(){this.showControlBars();clearInterval(this.mouseMoveTimeout);this.mouseMoveTimeout=setTimeout(this.hideControlBars._ctx(this),4E3)},mouseOverVideoReporterOnMouseOut:function(b){for(b=b.relatedTarget;b&&b!==this.box;)b=b.parentNode;b!==this.box&&this.hideControlBars()}});d.player.newBehavior("box",
function(b){this.positionBox();_V_.addClass(b,"vjs-paused");this.activateElement(b,"mouseOverVideoReporter");this.onPlay(this.boxOnVideoPlay);this.onPause(this.boxOnVideoPause)},{boxOnVideoPlay:function(){_V_.removeClass(this.box,"vjs-paused");_V_.addClass(this.box,"vjs-playing")},boxOnVideoPause:function(){_V_.removeClass(this.box,"vjs-playing");_V_.addClass(this.box,"vjs-paused")}});d.player.newBehavior("poster",function(b){this.activateElement(b,"mouseOverVideoReporter");this.activateElement(b,
"playButton");this.onPlay(this.hidePoster);this.onEnded(this.showPoster);this.onResize(this.positionPoster)},{showPoster:function(){this.poster&&(this.poster.style.display="block",this.positionPoster())},positionPoster:function(){this.poster&&"none"!=this.poster.style.display&&(this.poster.style.height=this.height()+"px",this.poster.style.width=this.width()+"px")},hidePoster:function(){this.poster&&(this.poster.style.display="none")},updatePosterSource:function(){if(!this.video.poster){var b=this.video.getElementsByTagName("img");
0<b.length&&(this.video.poster=b[0].src)}}});d.player.newBehavior("controlBar",function(b){this.controlBars||(this.controlBars=[],this.onResize(this.positionControlBars));this.controlBars.push(b);_V_.addListener(b,"mousemove",this.onControlBarsMouseMove._ctx(this));_V_.addListener(b,"mouseout",this.onControlBarsMouseOut._ctx(this))},{showControlBars:function(){(this.options.controlsAtStart||this.hasPlayed)&&this.each(this.controlBars,function(b){b.style.display="block"})},positionControlBars:function(){this.updatePlayProgressBars();
this.updateLoadProgressBars()},hideControlBars:function(){this.options.controlsHiding&&!this.mouseIsOverControls&&this.each(this.controlBars,function(b){b.style.display="none"})},onControlBarsMouseMove:function(){this.mouseIsOverControls=!0},onControlBarsMouseOut:function(){this.mouseIsOverControls=!1}});d.player.newBehavior("playToggle",function(b){this.elements.playToggles||(this.elements.playToggles=[],this.onPlay(this.playTogglesOnPlay),this.onPause(this.playTogglesOnPause));this.elements.playToggles.push(b);
_V_.addListener(b,"click",this.onPlayToggleClick._ctx(this))},{onPlayToggleClick:function(){this.paused()?this.play():this.pause()},playTogglesOnPlay:function(){this.each(this.elements.playToggles,function(b){_V_.removeClass(b,"vjs-paused");_V_.addClass(b,"vjs-playing")})},playTogglesOnPause:function(){this.each(this.elements.playToggles,function(b){_V_.removeClass(b,"vjs-playing");_V_.addClass(b,"vjs-paused")})}});d.player.newBehavior("playButton",function(b){_V_.addListener(b,"click",this.onPlayButtonClick._ctx(this))},
{onPlayButtonClick:function(){this.play()}});d.player.newBehavior("pauseButton",function(b){_V_.addListener(b,"click",this.onPauseButtonClick._ctx(this))},{onPauseButtonClick:function(){this.pause()}});d.player.newBehavior("playProgressBar",function(b){this.playProgressBars||(this.playProgressBars=[],this.onCurrentTimeUpdate(this.updatePlayProgressBars));this.playProgressBars.push(b)},{updatePlayProgressBars:function(b){var a=b!==e?b/this.duration():this.currentTime()/this.duration();isNaN(a)&&(a=
0);this.each(this.playProgressBars,function(b){b.style&&(b.style.width=_V_.round(100*a,2)+"%")})}});d.player.newBehavior("loadProgressBar",function(b){this.loadProgressBars||(this.loadProgressBars=[]);this.loadProgressBars.push(b);this.onBufferedUpdate(this.updateLoadProgressBars)},{updateLoadProgressBars:function(){this.each(this.loadProgressBars,function(b){b.style&&(b.style.width=_V_.round(100*this.bufferedPercent(),2)+"%")})}});d.player.newBehavior("currentTimeDisplay",function(b){this.currentTimeDisplays||
(this.currentTimeDisplays=[],this.onCurrentTimeUpdate(this.updateCurrentTimeDisplays));this.currentTimeDisplays.push(b)},{updateCurrentTimeDisplays:function(b){if(this.currentTimeDisplays){var a=b?b:this.currentTime();this.each(this.currentTimeDisplays,function(b){b.innerHTML=_V_.formatTime(a)})}}});d.player.newBehavior("durationDisplay",function(b){this.durationDisplays||(this.durationDisplays=[],this.onCurrentTimeUpdate(this.updateDurationDisplays));this.durationDisplays.push(b)},{updateDurationDisplays:function(){this.durationDisplays&&
this.each(this.durationDisplays,function(b){this.duration()&&(b.innerHTML=_V_.formatTime(this.duration()))})}});d.player.newBehavior("currentTimeScrubber",function(b){this.seekEnabled=!0;this.isSeeking=!1;_V_.addListener(b,"mousedown",this.onCurrentTimeScrubberMouseDown.rEvtContext(this))},{onCurrentTimeScrubberMouseDown:function(b,a){b.preventDefault();this.seekEnabled&&(this.isSeeking=!0,this.currentScrubber=a,this.stopTrackingCurrentTime(),this.videoWasPlaying=!this.paused(),this.pause(),_V_.blockTextSelection(),
this.setCurrentTimeWithScrubber(b),_V_.addListener(c,"mousemove",this.onCurrentTimeScrubberMouseMove.rEvtContext(this)),_V_.addListener(c,"mouseup",this.onCurrentTimeScrubberMouseUp.rEvtContext(this)))},onCurrentTimeScrubberMouseMove:function(b){this.setCurrentTimeWithScrubber(b)},onCurrentTimeScrubberMouseUp:function(){this.stopSeeking();this.videoWasPlaying&&(this.play(),this.trackCurrentTime())},stopSeeking:function(){this.isSeeking&&(this.isSeeking=!1,_V_.unblockTextSelection(),c.removeEventListener("mousemove",
this.onCurrentTimeScrubberMouseMove,!1),c.removeEventListener("mouseup",this.onCurrentTimeScrubberMouseUp,!1))},setSeekEnabled:function(b){this.seekEnabled&&!b&&this.isSeeking&&this.stopSeeking();b?this.progressHolder&&_V_.removeClass(this.progressHolder,"disabled"):this.progressHolder&&_V_.addClass(this.progressHolder,"disabled");this.seekEnabled=b},setCurrentTimeWithScrubber:function(b){b=_V_.getRelativePosition(b.pageX,this.currentScrubber)*this.duration();this.triggerCurrentTimeListeners(0,b);
b==this.duration()&&(b-=0.1);this.currentTime(b)}});d.player.newBehavior("volumeDisplay",function(b){this.volumeDisplays||(this.volumeDisplays=[],this.onVolumeChange(this.updateVolumeDisplays));this.volumeDisplays.push(b);this.updateVolumeDisplay(b)},{updateVolumeDisplays:function(){this.volumeDisplays&&this.each(this.volumeDisplays,function(b){this.updateVolumeDisplay(b)})},updateVolumeDisplay:function(b){var a=Math.ceil(6*this.volume());this.each(b.children,function(b,c){c<a?_V_.addClass(b,"vjs-volume-level-on"):
_V_.removeClass(b,"vjs-volume-level-on")})}});d.player.newBehavior("volumeScrubber",function(b){_V_.addListener(b,"mousedown",this.onVolumeScrubberMouseDown.rEvtContext(this))},{onVolumeScrubberMouseDown:function(b,a){_V_.blockTextSelection();this.currentScrubber=a;this.setVolumeWithScrubber(b);_V_.addListener(c,"mousemove",this.onVolumeScrubberMouseMove.rEvtContext(this));_V_.addListener(c,"mouseup",this.onVolumeScrubberMouseUp.rEvtContext(this))},onVolumeScrubberMouseMove:function(b){this.setVolumeWithScrubber(b)},
onVolumeScrubberMouseUp:function(b){this.setVolumeWithScrubber(b);_V_.unblockTextSelection();c.removeEventListener("mousemove",this.onVolumeScrubberMouseMove,!1);c.removeEventListener("mouseup",this.onVolumeScrubberMouseUp,!1)},setVolumeWithScrubber:function(b){this.volume(_V_.getRelativePosition(b.pageX,this.currentScrubber))}});d.player.newBehavior("fullscreenToggle",function(b){_V_.addListener(b,"click",this.onFullscreenToggleClick._ctx(this))},{onFullscreenToggleClick:function(){this.videoIsFullScreen?
this.exitFullScreen():this.enterFullScreen()},fullscreenOnWindowResize:function(){this.positionControlBars()},fullscreenOnEscKey:function(b){27==b.keyCode&&this.exitFullScreen()}});d.player.newBehavior("bigPlayButton",function(b){this.elements.bigPlayButtons||(this.elements.bigPlayButtons=[],this.onPlay(this.bigPlayButtonsOnPlay),this.onPause(this.bigPlayButtonsOnPause),this.onEnded(this.bigPlayButtonsOnEnded));this.elements.bigPlayButtons.push(b);this.activateElement(b,"playButton")},{bigPlayButtonsOnPlay:function(){this.hideBigPlayButtons()},
bigPlayButtonsOnPause:function(){!this.isSeeking&&(!this.socialController||!this.socialController.isOpen)&&this.showBigPlayButtons()},bigPlayButtonsOnEnded:function(){this.showBigPlayButtons()},showBigPlayButtons:function(){this.each(this.elements.bigPlayButtons,function(b){b.style.display="block"})},hideBigPlayButtons:function(){this.each(this.elements.bigPlayButtons,function(b){b.style.display="none"})}});d.player.newBehavior("spinner",function(b){this.spinners||(this.spinners=[],_V_.addListener(this.video,
"loadeddata",this.spinnersOnVideoLoadedData._ctx(this)),_V_.addListener(this.video,"loadstart",this.spinnersOnVideoLoadStart._ctx(this)),_V_.addListener(this.video,"seeking",this.spinnersOnVideoSeeking._ctx(this)),_V_.addListener(this.video,"seeked",this.spinnersOnVideoSeeked._ctx(this)),_V_.addListener(this.video,"canplay",this.spinnersOnVideoCanPlay._ctx(this)),_V_.addListener(this.video,"canplaythrough",this.spinnersOnVideoCanPlayThrough._ctx(this)),_V_.addListener(this.video,"waiting",this.spinnersOnVideoWaiting._ctx(this)),
_V_.addListener(this.video,"stalled",this.spinnersOnVideoStalled._ctx(this)),_V_.addListener(this.video,"suspend",this.spinnersOnVideoSuspend._ctx(this)),_V_.addListener(this.video,"playing",this.spinnersOnVideoPlaying._ctx(this)),_V_.addListener(this.video,"timeupdate",this.spinnersOnVideoTimeUpdate._ctx(this)));this.spinners.push(b)},{showSpinners:function(){this.each(this.spinners,function(b){b.style.display="block"});clearInterval(this.spinnerInterval);this.spinnerInterval=setInterval(this.rotateSpinners._ctx(this),
100)},hideSpinners:function(){this.each(this.spinners,function(b){b.style.display="none"});clearInterval(this.spinnerInterval)},spinnersRotated:0,rotateSpinners:function(){this.each(this.spinners,function(b){b.style.WebkitTransform="scale(0.5) rotate("+this.spinnersRotated+"deg)";b.style.MozTransform="scale(0.5) rotate("+this.spinnersRotated+"deg)"});360==this.spinnersRotated&&(this.spinnersRotated=0);this.spinnersRotated+=45},spinnersOnVideoLoadedData:function(){},spinnersOnVideoLoadStart:function(){},
spinnersOnVideoSeeking:function(){},spinnersOnVideoSeeked:function(){},spinnersOnVideoCanPlay:function(){},spinnersOnVideoCanPlayThrough:function(){},spinnersOnVideoWaiting:function(){this.showSpinners()},spinnersOnVideoStalled:function(){},spinnersOnVideoSuspend:function(){},spinnersOnVideoPlaying:function(){},spinnersOnVideoTimeUpdate:function(){"block"==this.spinner.style.display&&this.hideSpinners()}});d.player.newBehavior("social",function(b){var a=this;this.socialController={isOpen:!1,open:function(){this.isOpen=
!0;!1==a.video.paused?(a.playingBeforeSocial=!0,a.pause()):a.playingBeforeSocial=!1;a.socialMainMenu&&a.showScreen(a.socialMainMenu);a.hideBigPlayButtons();a.social.style.display="block"},close:function(){this.isOpen=!1;a.playingBeforeSocial?a.play():a.showBigPlayButtons();a.social.style.display="none"}};var c=_V_.getChildByClass(b,"vjs-social-close");c&&_V_.addListener(c,"click",this.onCloseClick._ctx(this));this.emailButton=_V_.getChildByClass(b,"vjs-social-email",!0);this.shareButton=_V_.getChildByClass(b,
"vjs-social-share",!0);this.twitterButton=_V_.getChildByClass(b,"vjs-social-twitter",!0);this.embedButton=_V_.getChildByClass(b,"vjs-social-embed",!0);this.socialMainMenu=_V_.getChildByClass(b,"vjs-social-main",!0);this.emailScreen=_V_.getChildByClass(b,"vjs-social-emailScreen",!0);this.embedScreen=_V_.getChildByClass(b,"vjs-social-embedScreen",!0);this.playingBeforeSocial=!1;this.emailButton&&this.emailScreen&&_V_.addListener(this.emailButton,"click",this.onEmailBtnClick._ctx(this));this.embedButton&&
this.embedScreen&&_V_.addListener(this.embedButton,"click",this.onEmbedBtnClick._ctx(this))},{showScreen:function(b){if(this.socialMainMenu){var a=this.social;this.socialMainMenu===b?_V_.addClass(a,"socialMainMenu"):_V_.removeClass(a,"socialMainMenu")}this.emailScreen&&(a=this.social,this.emailScreen===b?_V_.addClass(a,"emailScreen"):_V_.removeClass(a,"emailScreen"));this.embedScreen&&(a=this.social,this.embedScreen===b?_V_.addClass(a,"embedScreen"):_V_.removeClass(a,"embedScreen"))},onEmailBtnClick:function(){this.showScreen(this.emailScreen)},
onEmbedBtnClick:function(){this.showScreen(this.embedScreen)},onCloseClick:function(){this.socialController.close()}});d.player.newBehavior("expandControl",function(b){_V_.addListener(b,"click",this.onExpanderClick._ctx(this))},{expanded:!1,onExpanderClick:function(){var b=!this.expanded;this.toggleExpand(b);this.expanded=b}});d.player.newBehavior("menuControl",function(b){_V_.addListener(b,"click",this.onMenuClick._ctx(this));this.onPlay(function(){this.socialController.isOpen&&this.toggleSocialPopup(!1)})},
{onMenuClick:function(){this.toggleSocialPopup(!this.socialController.isOpen)}});d.player.newBehavior("subtitlesDisplay",function(b){this.subtitleDisplays||(this.subtitleDisplays=[],this.onCurrentTimeUpdate(this.subtitleDisplaysOnVideoTimeUpdate),this.onEnded(function(){this.lastSubtitleIndex=0}._ctx(this)));this.subtitleDisplays.push(b)},{subtitleDisplaysOnVideoTimeUpdate:function(b){if(this.subtitles&&(!this.currentSubtitle||this.currentSubtitle.start>=b||this.currentSubtitle.end<b)){for(var a=
!1,c=this.subtitles[this.lastSubtitleIndex].start>b,d=this.lastSubtitleIndex-c?1:0;;)if(c){if(0>d||this.subtitles[d].end<b)break;if(this.subtitles[d].start<b){a=d;break}d--}else{if(d>=this.subtitles.length||this.subtitles[d].start>b)break;if(this.subtitles[d].end>b){a=d;break}d++}!1!==a?(this.currentSubtitle=this.subtitles[a],this.lastSubtitleIndex=a,this.updateSubtitleDisplays(this.currentSubtitle.text)):this.currentSubtitle&&(this.currentSubtitle=!1,this.updateSubtitleDisplays(""))}},updateSubtitleDisplays:function(b){this.each(this.subtitleDisplays,
function(a){a.innerHTML=b})}});d.extend({addClass:function(b,a){-1==(" "+b.className+" ").indexOf(" "+a+" ")&&(b.className=""===b.className?a:b.className+" "+a)},removeClass:function(b,a){if(-1!=b.className.indexOf(a)){var c=b.className.split(/\s+/);c.splice(c.lastIndexOf(a),1);b.className=c.join(" ")}},toggleClass:function(b,a,c){c?d.addClass(b,a):d.removeClass(b,a)},createElement:function(b,a){return this.merge(c.createElement(b),a)},getChildByClass:function(b,a,c){for(var b=b.childNodes,e=0;e<
b.length;e++){var h=b[e];if(-1!=(h.className?h.className.split(" "):[]).indexOf(a)||c&&0<h.childNodes.length&&(h=d.getChildByClass(h,a,c)))return h}return null},blockTextSelection:function(){c.body.focus();c.onselectstart=function(){return!1}},unblockTextSelection:function(){c.onselectstart=function(){return!0}},formatTime:function(b){var b=Math.round(b),a=Math.floor(b/60),b=Math.floor(b%60);return(10<=a?a:"0"+a)+":"+(10<=b?b:"0"+b)},getRelativePosition:function(b,a){return Math.max(0,Math.min(1,
(b-this.findPosX(a))/a.offsetWidth))},findPosX:function(b){for(var a=b.offsetLeft;b=b.offsetParent;)a+=b.offsetLeft;return a},getComputedStyleValue:function(b,c){return a.getComputedStyle(b,null).getPropertyValue(c)},round:function(b,a){a||(a=0);return Math.round(b*Math.pow(10,a))/Math.pow(10,a)},addListener:function(b,a,c){b.addEventListener?b.addEventListener(a,c,!1):b.attachEvent&&b.attachEvent("on"+a,c)},removeListener:function(b,a,c){b.removeEventListener?b.removeEventListener(a,c,!1):b.attachEvent&&
b.detachEvent("on"+a,c)},get:function(b,a){"undefined"==typeof XMLHttpRequest&&(XMLHttpRequest=function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(b){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(c){}throw Error("This browser does not support XMLHttpRequest.");});var c=new XMLHttpRequest;c.open("GET",b);c.onreadystatechange=function(){4==c.readyState&&200==c.status&&a(c.responseText)}._ctx(this);c.send()},trim:function(b){return b.toString().replace(/^\s+/,
"").replace(/\s+$/,"")},bindDOMReady:function(){if("complete"===c.readyState)return d.onDOMReady();c.addEventListener?(c.addEventListener("DOMContentLoaded",d.DOMContentLoaded,!1),a.addEventListener("load",d.onDOMReady,!1)):c.attachEvent&&(c.attachEvent("onreadystatechange",d.DOMContentLoaded),a.attachEvent("onload",d.onDOMReady))},DOMContentLoaded:function(){c.addEventListener?(c.removeEventListener("DOMContentLoaded",d.DOMContentLoaded,!1),d.onDOMReady()):c.attachEvent&&"complete"===c.readyState&&
(c.detachEvent("onreadystatechange",d.DOMContentLoaded),d.onDOMReady())},DOMReadyList:[],addToDOMReady:function(b){d.DOMIsReady?b.call(c):d.DOMReadyList.push(b)},DOMIsReady:!1,onDOMReady:function(){if(!d.DOMIsReady){if(!c.body)return setTimeout(d.onDOMReady,13);d.DOMIsReady=!0;if(d.DOMReadyList){for(var b=0;b<d.DOMReadyList.length;b++)d.DOMReadyList[b].call(c);d.DOMReadyList=null}}}});d.bindDOMReady();Function.prototype._ctx=function(b){var a=this;return function(){return a.apply(b,arguments)}};Function.prototype.evtContext=
function(b){var a=this;return function(c){return a.call(b,c,this)}};Function.prototype.rEvtContext=function(b,a){if(!0===this.hasContext)return this;a||(a=b);for(var c in a)if(a[c]==this)return a[c]=this.evtContext(b),a[c].hasContext=!0,a[c];return this.evtContext(b)};a.jQuery&&function(a){a.fn.VideoJS=function(a){this.each(function(){d.setup(this,a)});return this};a.fn.player=function(){return this[0].player}}(jQuery);a.VideoJS=a._V_=d})(window);function SimpleEventDispatcher(){this._listeners={}}
SimpleEventDispatcher.prototype={constructor:SimpleEventDispatcher,addListener:function(a,e){"undefined"==typeof this._listeners[a]&&(this._listeners[a]=[]);this._listeners[a].push(e)},dispatchEvent:function(a){"string"==typeof a&&(a={type:a});a.target||(a.target=this);if(!a.type)throw Error("Event object missing 'type' property.");if(this._listeners[a.type]instanceof Array)for(var e=this._listeners[a.type],c=0,d=e.length;c<d;c++)e[c].call(this,a)},removeListener:function(a,e){if(this._listeners[a]instanceof
Array)for(var c=this._listeners[a],d=0,b=c.length;d<b;d++)if(c[d]===e){c.splice(d,1);break}}};var w=this;
w.EndPlayVideo=function(a,e,c){SimpleEventDispatcher.apply(this,arguments);var d=this,b=EndPlayVideo.instances.length+"",k;if(a&&(!a.hasOwnProperty("id")||null==a.id))a.id="__EndPlayVideoInstance"+b;var m=!1,j=562,h=316,i,n=EndPlayVideo.Settings.PATH+"images/EndPlay_logo.png",f=navigator.userAgent.toLowerCase(),r=!1,g,l,z,s=e,q=!1,o,C=!0,t,y,E,u,x,H,A,B,p,G,F,D,J;d.supportsFlash=function(){return swfobject.hasFlashPlayerVersion("10.1.0")&&y};d.supportsHTML5Video=function(){return Boolean(VideoJS.browserSupportsVideo())};d.isBlackBerry=
function(){return-1!=f.indexOf("blackberry")};var L=function(){d.pause();if(g){var a=EndPlayVideo.events.PlayerEvent;g.removeListener(a.READY,v);g.removeListener(a.PLAY,v);g.removeListener(a.PAUSE,v);g.removeListener(a.AD_LOADED,v);g.removeListener(a.AD_ERROR,v);g.removeListener(a.AD_NO_VIDEO,v);g.removeListener(a.SOCIAL_FACEBOOK,v);g.removeListener(a.SOCIAL_TWITTER,v);g.destroy();g=null}},Z=function(){var a=function(a,b,c){a=VideoJS.getChildByClass(a,b);return null!=a&&(null==c||a.tagName===c.toUpperCase())?
a:null},b=a(s,"video-js-innerContainer","DIV");if(b){var c=a(b,"video-js-box","DIV");if(c&&(a=a(c,"video-js","VIDEO")))return{inner:b,box:c,video:a}}return null},T=function(a,c){L();var e;e=c?c.box:M();l="EndPlayVideoHTML5"+b;e.style.width="100%";e.style.height="100%";e.style.display="none";var h=document.createElement("div");h.className="video-js-marginTopFloat";c?e.insertBefore(h,c.video):e.appendChild(h);c?(h=c.video,h.setAttribute("id",l)):(h=document.createElement("video"),h.className="video-js",
h.id=l);var j=u&&u.live;h.setAttribute("controls","controls");j?h.setAttribute("preload","none"):h.setAttribute("preload","auto");i&&h.setAttribute("poster",i);j&&h.setAttribute("data-isLive","true");B&&null==B.vidID&&(B.vidID=z);j=function(a,b){var c=document.createElement("source");c.src=EndPlayVideo.decodeURI(a);b&&(c.type=b);return c};if(!c&&(u&&h.appendChild(j(u.source)),!u||!(VideoJS.isIOS()&&5>VideoJS.iOSVersion())))E&&!VideoJS.isIOS()&&h.appendChild(j(E.source)),x&&h.appendChild(j(x.source,
'video/mp4; codecs="avc1.42E01E, mp4a.40.2"')),H&&h.appendChild(j(H.source,'video/webm; codecs="vp8, vorbis"')),A&&h.appendChild(j(A.source,'video/ogg; codecs="theora, vorbis"'));i&&(j=document.createElement("img"),j.src=i,j.alt="Poster Image",j.title="No video playback capabilities.",h.appendChild(j));j=G&&G.cssClass?G.cssClass:"endplay-css";c?VideoJS.addClass(e,j):(VideoJS.addClass(e,"video-js-box "+j),e.appendChild(h));var n=function(){if(p){var a=new EndPlayVideo.vo.AdRequests;a.proxy=!EndPlayVideo.isNull(p.proxy)?
p.proxy:null;var b=p.preRoll_source;EndPlayVideo.isNull(b)||(a.preRoll=new EndPlayVideo.vo.AdRequestVO,a.preRoll.adTagUrl=EndPlayVideo.view.PlayerHTML5.getAdProxyPath(b,a.proxy));b=p.postRoll_source;EndPlayVideo.isNull(b)||(a.postRoll=new EndPlayVideo.vo.AdRequestVO,a.postRoll.adTagUrl=EndPlayVideo.view.PlayerHTML5.getAdProxyPath(b,a.proxy));b=p.overlay_source;EndPlayVideo.isNull(b)||(a.overlay=new EndPlayVideo.vo.AdRequestVO,a.overlay.adType="overlay",a.overlay.adTagUrl=EndPlayVideo.view.PlayerHTML5.getAdProxyPath(b,
a.proxy));b=p.adFrequency;EndPlayVideo.isNull(b)||(a.adFrequency=parseInt(b));b=p.adDelay;EndPlayVideo.isNull(b)||(a.adDelay=parseInt(b));b=p.adCallCount;EndPlayVideo.isNull(b)||(a.adCallCount=parseInt(b));return a}return null}(),f=$()&&!EndPlayVideo.hasRequiredIOSVersion(4,0,2);e=function(){var b={width:"100%",height:"100%",omniture:B||null,ads:f?null:n,showMenu:F,expandable:Boolean(D),expanded:q,parentContainer:d.getInnerContainer(),story:EndPlayVideo.decodeURI(o.story),emailAction:o.emailAction,
playList:J,toggleVideoCode:o.toggleVideoCode,devID:k,autoplay:a,controlsBelow:Boolean(o.controlsBelow),controlsHiding:Boolean(o.controlsHiding)},c=EndPlayVideo.events.PlayerEvent;g=new EndPlayVideo.view.PlayerHTML5(document.getElementById(l),b);g.addListener(c.READY,v);g.addListener(c.PLAY,v);g.addListener(c.PAUSE,v);g.addListener(c.AD_LOADED,v);g.addListener(c.AD_ERROR,v);g.addListener(c.AD_NO_VIDEO,v);g.addListener(c.SOCIAL_FACEBOOK,v);g.addListener(c.SOCIAL_TWITTER,v);g.addListener(c.EXPANDER_EXPAND,
v);g.addListener(c.EXPANDER_CONTRACT,v);g.init();g.canPlaySource()||(L(),aa(!0))};!f&&n&&!EndPlayVideo.AdsLoader?(e={fnc:e,ref:d},0==EndPlayVideo.AdsLoaderCallbacks.length?(EndPlayVideo.AdsLoaderCallbacks.push(e),google.load("ima","1",{callback:function(){EndPlayVideo.AdsLoader=google.ima.AdsLoader;for(var a=0,b=EndPlayVideo.AdsLoaderCallbacks.length;a<b;a++){var c=EndPlayVideo.AdsLoaderCallbacks[a];c.fnc.call(c.ref)}EndPlayVideo.AdsLoaderCallbacks=[]}})):EndPlayVideo.AdsLoaderCallbacks.push(e)):
e();m=!1},$=function(){return-1!=f.indexOf("iphone")||-1!=f.indexOf("ipod")||-1!=f.indexOf("ipad")?!0:!1},aa=function(a,c){L();var d=M();l="EndPlayVideoNoSupport"+b;var e=N(d,!0),e=""+("<div id='"+l+"' class='vjs-message' style='"+e+"'>"),e=e+"<p>This video cannot be played.<br />",h=!a&&!c&&!$();y&&!swfobject.hasFlashPlayerVersion("10.1.0")&&h?e+="You need the latest <a href='http://get.adobe.com/flashplayer/' title='Get Flash Player' target='_blank'>Flash Player</a> version.<br />":a?e+="The browser may not be able to handle this video codec.":
c&&(e+="Your web browser or device does not support HTML5 video.");d.innerHTML=e+"</p></div>";m=!1},K=function(a){L();t&&(VideoJS.removeListener(t,"click",O),t=null);var c=M();l="EndPlayVideoBadConnection"+b;var d=N(c,!0),d=""+("<div id='"+l+"' class='vjs-message' style='"+d+"'>");c.innerHTML=d+("<p>"+((null!=a?a:"The stream cannot reconnect.")+"<br><a href='#' class='reloadBtn' title='Refresh'>Try Again Later</a>")+"</p></div>");t=VideoJS.getChildByClass(c,"reloadBtn",!0);VideoJS.addListener(t,"click",
O);m=!1},O=function(a){VideoJS.removeListener(t,"click",O);t=null;d.init(!0);a.preventDefault()},N=function(a,b){var c;isNaN(Number("100%"))?(c="100%",a.style.width=c):c="100%px";var d;isNaN(Number("100%"))?(d="100%",a.style.height=d):d="100%px";return(null!=i&&!b?"background: #000 url("+i+") no-repeat center center; ":"background: #000; ")+"height: "+d+"; width: "+c+";"},M=function(){var a=document.createElement("div");a.id="EndPlayVideo"+b;var c=d.getInnerContainer();c.innerHTML="";c.appendChild(a);
return a},I=function(){return m?swfobject.getObjectById(l):g?g:null},Q=function(a,b,c){if(a)try{a[b].apply(a,c)}catch(d){}};d.play=function(){var a=I();a&&Q(a,"play",[])};d.pause=function(){var a=I();a&&Q(a,"pause",[])};d.playAd=function(a){var b=I();b&&Q(b,"playAd",[a])};d.playPost=function(){var a=I();a&&Q(a,"playPost",[])};d.openFacebookShare=function(){var a="http://facebook.com/sharer.php?u="+encodeURIComponent(EndPlayVideo.decodeURI(o.story)),b=W();null!=b&&(a+="&t="+encodeURIComponent(b));
window.open(a,"fbshare","height=400,width=600,scrollbars=no,noresize")};d.openTwitterShare=function(){var a=ea()||EndPlayVideo.decodeURI(o.story),a="https://twitter.com/share?url="+encodeURIComponent(a),b=W();null!=b&&(a+="&text="+encodeURIComponent(b));window.open(a,"tweetshare","height=400,width=600,scrollbars=no,noresize")};var W=function(){var a=document.title;null==a&&(a=EndPlayVideo.decodeURI(o.title));return a};d.openEmailLink=function(a){window.open(a||"popups/email.html","Email","height=300,width=600,scrollbars=no,noresize")};
d.openEmbedLink=function(a){window.open(a||"popups/embed.html","Embed","height=330,width=600,scrollbars=no,noresize")};d.kill=function(a){L();var c=M();l="EndPlayVideoKilled"+b;var d=N(c,!0),d=""+("<div id='"+l+"' class='vjs-message' style='"+d+"'>");c.innerHTML=d+("<p>"+(null!=a?a:"This video is currently offline.")+"</p></div>");m=!1};d.showBadConnectionScreen=function(a){K(a)};d.reset=function(a){a=EndPlayVideo.getVOCopy(a,EndPlayVideo.vo.ConfigVO);if(a.singleSource&&a.singleSource.source){var b=
d.getConfigBySource(a.singleSource.source);a.flash||(a.flash=b.flash,a.flash&&(a.flash.wmode=a.singleSource.wmode));a.mp4=a.mp4||b.mp4;a.webm=a.webm||b.webm;a.ogg=a.ogg||b.ogg;a.rtsp=a.rtsp||b.rtsp;a.http=a.http||b.http}b=EndPlayVideo.isNull;y=a.flash||null;E=a.rtsp||null;u=a.http||null;x=a.mp4||null;H=a.webm||null;A=a.ogg||null;a.omniture&&!0!==a.omniture?B=EndPlayVideo.getVOCopy(a.omniture,EndPlayVideo.vo.OmnitureVO):!0===a.omniture&&(B=new EndPlayVideo.vo.OmnitureVO);p=a.ads||null;G=a.skin||null;
F=a.showMenu||null;a.story=b(a.story)?document.URL:a.story;J=a.playList;if(p){var c;p.adSizeArray&&p.adSizeArray.constructor===Array?c=p.adSizeArray:p.adSizeArray&&"string"===typeof p.adSizeArray?(c=p.adSizeArray,c=c.replace("[","").replace("]",""),c=c.split(",")):c=[];var e=b(p.adSizeArray),g=0<c.length?c[0]:null;if(p.preRoll_source&&(e||!b(g)))p.preRoll_source=X(p.preRoll_source,g);g=1<c.length?c[1]:null;if(p.overlay_source&&(e||!b(g)))p.overlay_source=X(p.overlay_source,g);g=2<c.length?c[2]:null;
if(p.postRoll_source&&(e||!b(g)))p.postRoll_source=X(p.postRoll_source,g)}b=null!=a.id?a.id+"":null;null!=b&&b!=k&&(null!=k&&EndPlayVideo.instancesObj.hasOwnProperty(k)&&(c=EndPlayVideo.instancesObj[k])&&c===d&&delete EndPlayVideo.instancesObj[k],k=b,EndPlayVideo.instancesObj[k]=d);a.expander?(b=P(a.expander.expandedWidth,0),c=P(a.expander.expandedHeight,0),0!=b&&0!=c?(D=a.expander,q=Boolean(a.expander.isExpanded)):D=null):D=null;j=P(a.width,562);h=P(a.height,316);i=ba(a.poster)?"none"===(""+a.poster).toLowerCase()?
null:a.poster:n;z=null!=a.videoID&&!isNaN(Number(a.videoID))?Number(a.videoID):0;b=Y(a.autoPlay);r=Y(a.debugBlackBerry);c=swfobject.getQueryParamValue("epv_debugBlackBerry");null!=c&&(r=Y(c));o=a;m=!1;d.init(b);C=!1};var X=function(a,b){var c=EndPlayVideo.decodeURI(a),c=c.replace("%pos%","native");b&&(c=c.replace("%size%",b));return c};d.getScreenSize=function(){var a=new EndPlayVideo.utils.ScreenUtil;return{width:a.getWindowWidth(),height:a.getWindowHeight()}};d.resetSize=function(){!m&&g&&g.resetSize()};
d.resizeContainer=function(a,b){a=P(a,j);b=P(b,h);R(a,b);if(m){var c=I();c&&Q(c,"defineContainerSize",[a,b])}d.resetSize()};var R=function(a,b){var c=0;m&&o&&o.controlsBelow&&(c=EndPlayVideo.Settings.FLASH_CONTROL_BAR_HEIGHT);var e=d.getInnerContainer();e&&(e.style.width=isNaN(Number(a))?a:a+"px",e.style.height=isNaN(Number(b))?b:b+c+"px")};d.getContainer=function(){return s};d.getInnerContainer=function(){return VideoJS.getChildByClass(s,"video-js-innerContainer")};d.toggleExpand=function(a){if(D){a?
d.resizeContainer(D.expandedWidth,D.expandedHeight):d.resizeContainer(j,h);if(m){var b=I();b&&Q(b,"toggleExpand",[a])}q=a}else throw Error("ERROR::Cannot call toggleExpand() without defining the 'expandedWidth' and 'expandedHeight'.");};d.getAdCallCount=function(){var a=I();if(m)try{return a.getAdCallCount()}catch(b){}else return a.getAdCallCount();return null};var ea=function(){var a=I();if(m)try{return a.getShortenedShareURL()}catch(b){}else return a.getShortenedShareURL();return null},P=function(a,
b){if(null!=a){var c=""+a;return 1<c.length&&c.lastIndexOf("%")===c.length-1?isNaN(Number(c.substring(0,c.length-1)))?b:a:!isNaN(Number(a))?Number(a):b}return b},Y=function(a){return!0===a||ba(a)&&"true"===(""+a).toLowerCase()},ba=function(a){return null!=a&&"string"===(typeof a).toLowerCase()&&0<(""+a).length};d._relayEvent=function(a){v(new EndPlayVideo.events.PlayerEvent(a))};var v=function(a){var b=EndPlayVideo.events.PlayerEvent;switch(a.type){case b.SOCIAL_EMAIL:d.openEmailLink();break;case b.SOCIAL_EMBED:d.openEmbedLink();
break;case b.SOCIAL_FACEBOOK:d.openFacebookShare();break;case b.SOCIAL_TWITTER:d.openTwitterShare();break;case b.RECONNECTION_FAILED:K();break;case b.EXPANDER_EXPAND:d.toggleExpand(!0);break;case b.EXPANDER_CONTRACT:d.toggleExpand(!1);case b.CHECK_FOR_OMNITURE:fa()}d.dispatchEvent(a)},fa=function(){if(m)var a=0,b=0,a=window.setInterval(function(){var c=4E4<b;if(!c&&!window.s)b++;else if(a=window.clearInterval(a),!c&&window.s.account){var c=window.s,d={};d.account=c.account;d.visitorNamespace=c.visitorNamespace;
d.trackingServer=c.trackingServer;d.trackingServerSecure=c.trackingServerSecure;try{var e=I();e&&e.readOmnitureData(d)}catch(h){}}},300)};d.init=function(a){var c=C?Z():null;if(!C||!c){var e=document.createElement("div");e.className="video-js-innerContainer";s&&(s.innerHTML="",e.setAttribute("data-id",k),s.appendChild(e))}!C&&c&&c.inner&&c.inner.setAttribute("data-id",k);if(!s)throw Error("ERROR::EndPlayVideo did not receive a container!");D&&q?R(D.expandedWidth,D.expandedHeight):R(j,h);if(d.supportsFlash()&&
!r){L();M();l="EndPlayVideoFlash"+b;var A=a?"true":"false",g=swfobject.hasFlashPlayerVersion("10.2.0"),n=EndPlayVideo.Settings.PATH,f=o.FBDebug?"":"swf/",t=o.version;switch(t){case "1_4":case "1_2":case "1_3":break;default:t="1_4"}var v=EndPlayVideo.isNull,a=g?"10.2.0":"10.1.0",c=g?n+f+"EndPlayVideoPlayer_v"+t+"_FP10_2.swf?v=020912_3":n+f+"EndPlayVideoPlayer_v"+t+"_FP10_1.swf?v=020912_3",e=n+f+"playerProductInstall.swf",u=o.FBDebug?"":f+"plugins/",f={};if(y&&(f.src=y.source,y.streaming&&(f.streamType=
y.live?"live":"recorded","live"===f.streamType||"dvr"===f.streamType)))f.bufferTime=f.liveBufferTime=7;t="_v"+t;if(p){var K=n+u+"PluginEndPlayAd"+t+"_FP10_";f.plugin_vast=g?K+"2.swf":K+"1.swf";f.vast_ads=!0;v(p.proxy)||(f.vast_proxy=p.proxy);v(p.preRoll_source)||(f.vast_preRoll=encodeURIComponent(p.preRoll_source));v(p.postRoll_source)||(f.vast_postRoll=encodeURIComponent(p.postRoll_source));v(p.overlay_source)||(f.vast_overlay=encodeURIComponent(p.overlay_source));v(p.adFrequency)||(f.vast_frequency=
p.adFrequency);v(p.adDelay)||(f.vast_callDelay=p.adDelay)}if(B){u=n+u+"PluginEndPlayOmniture"+t+"_FP10_";f.plugin_omniture=g?u+"2.swf":u+"1.swf";for(var x in B)g=B[x],u=null!=g&&"undefined"!=g?typeof g:null,null!=u&&"function"!=u&&"object"!=u&&(f["omniture_"+x]=g);f.hasOwnProperty("omniture_vidID")||(f.omniture_vidID=z);f.omniture_id=k;C||(f.omniture_initialLoad=!1)}""!=n&&(f.epD=EndPlayVideo.Settings.DOMAIN);G&&!v(G.xml)&&(f.skin=G.xml);f.playList=J;F&&(f.showMenu=!0);D&&(f.expandable=!0,f.expanded=
q);f.shareUrl=encodeURIComponent(EndPlayVideo.decodeURI(o.story));f.shareTitle=encodeURIComponent(EndPlayVideo.decodeURI(o.title));f.emailAction=encodeURIComponent(o.emailAction);if((f.embeddable=o.embeddable)&&o.embeddableWithLink)f.embeddableWithLink=o.embeddableWithLink;f.toggleVideoCode=o.toggleVideoCode;f.autoPlay=A;f.id=k;f.poster=encodeURIComponent(EndPlayVideo.decodeURI(i));x={quality:"high",bgcolor:"#000000",allowscriptaccess:"always",allowfullscreen:"true",allownetworking:"all"};y.wmode=
y.wmode||"direct";A=(""+y.wmode).toLowerCase();switch(A){case "window":case "opaque":case "transparent":case "gpu":x.wmode=A;break;default:x.wmode="direct"}A={};A.id=l;A.name=l;A.align="middle";swfobject.embedSWF(c,"EndPlayVideo"+b,"100%","100%",a,e,f,x,A);swfobject.createCSS("#EndPlayVideo"+b,"display:block;text-align:left;");m=!0;o.controlsBelow&&(D&&q?R(D.expandedWidth,D.expandedHeight):R(j,h))}else E&&(r||d.isBlackBerry())?(L(),a=M(),l="EndPlayVideoBlackBerry"+b,c=N(a),c=""+("<div id='"+l+"' class='vjs-blackBerryVideo' style='"+
c+"'>"),B&&null!=B.account?(e=encodeURIComponent(E.source),x=E.live?EndPlayVideo.vo.OmnitureVideoVO.LIVE:EndPlayVideo.vo.OmnitureVideoVO.RECORDED,f=encodeURIComponent(B.vidCategory),A=encodeURIComponent(EndPlayVideo.Settings.PLAYER_NAME_BLACKBERRY),c+="<a href='http://ewstv.112.2o7.net/b/ss/"+B.account+"/5.4/REDIR/?url="+e+"&ev=event18&c16=bb_"+e+"&v16=bb_"+e+"&c33="+x+"&v33="+x+"&c35="+f+"&v35="+f+"&c37="+A+"&v37="+A+"&pe=lnk_o&pev2=bb%20endplay' target='_top'></a>"):c+="<a href='"+E.source+"' target='_top'></a>",
a.innerHTML=c+"</div>",m=!1):d.supportsHTML5Video()?T(a,c):aa(!1,!0)};d.getConfigBySource=function(a){var b=new EndPlayVideo.vo.ConfigVO,a=new EndPlayVideo.utils.SourceInfo(a),c=function(a,b){if(U(a,[],[b])){var c=new EndPlayVideo.vo.MediaVO;c.source=a.src;return c}return null};U(a,["rtmp"],"flv,swf,f4v,mov,mp4,jpg,mp3,smil,smi".split(","))&&(b.flash=new EndPlayVideo.vo.FlashVO,b.flash.source=a.src,b.flash.streaming="rtmp"===a.protocol||"f4m"===a.extension);b.mp4=c(a,"mp4");b.webm=c(a,"webm");b.ogg=
c(a,"ogv");b.rtsp=function(a,b){if(U(a,[b],[])){var c=new EndPlayVideo.vo.MediaVO;c.source=a.src;return c}return null}(a,"rtsp");b.rtsp&&(b.rtsp.streaming=!0);b.http=c(a,"m3u8");b.http&&(b.http.streaming=!0);return b};var U=function(a,b,c){return-1!=b.indexOf(a.protocol)||-1!=c.indexOf(a.extension)};d.isExpanded=function(){return q};d.getCurrentConfig=function(){return o};d.getPlayerID=function(){return k};d._init=function(){EndPlayVideo.instances.push(d);d.reset(a)};a&&e&&!c&&d._init()};
EndPlayVideo.extend=function(a,e){a.prototype=new e;a.prototype.constructor=a;a.uber=e.prototype};EndPlayVideo.extend(EndPlayVideo,SimpleEventDispatcher);EndPlayVideo.getVOCopy=function(a,e){var c=new e,d;for(d in c)if("function"!==typeof c[d])try{"undefined"!==typeof a[d]&&(c[d]=a[d])}catch(b){}return c};EndPlayVideo.AdsLoader=null;EndPlayVideo.AdsLoaderCallbacks=[];EndPlayVideo.instances=[];EndPlayVideo.instancesObj={};EndPlayVideo.WaitingForOmniture=[];
EndPlayVideo.getPlayerById=function(a){return EndPlayVideo.instancesObj.hasOwnProperty(a)?EndPlayVideo.instancesObj[a]:null};EndPlayVideo.isNull=function(a){return Boolean(!a||null==a||""===a||"undefined"===a||"undefined"===typeof a)};EndPlayVideo.decodeURI=function(a){if(null!=a){var e=a=a.replace(/\+/g," ");try{e=decodeURIComponent(a)}catch(c){try{e=decodeURI(a)}catch(d){try{e=unescape(a)}catch(b){}}}return e}return null};
EndPlayVideo.getIOSVersionArray=function(){var a=navigator.userAgent.match(/OS (\d+)_(\d+)_(\d+)/i);return a&&a[0]?(a=(a=3<a[0].length?a[0].substring(3):null)?a.split("_"):null)&&3<=a.length?a:null:null};EndPlayVideo.hasRequiredIOSVersion=function(a,e,c){var d=EndPlayVideo.getIOSVersionArray();if(null!=d){var b=d[0],k=d[1],d=d[2];if(b>parseFloat(a)||b==parseFloat(a)&&(k>parseFloat(e)||k==parseFloat(e)&&d>=parseFloat(c)))return!0}return!1};EndPlayVideo.model={};EndPlayVideo.vo={};
EndPlayVideo.events={};EndPlayVideo.control={};EndPlayVideo.view={};EndPlayVideo.utils={};Array.prototype.indexOf||(Array.prototype.indexOf=function(a,e){var c=this.length,d=Number(e)||0,d=0>d?Math.ceil(d):Math.floor(d);for(0>d&&(d+=c);d<c;d++)if(d in this&&this[d]===a)return d;return-1});Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(a,e){var c=this.length,d=Number(e)||c,d=0>d?Math.ceil(d):Math.floor(d);for(0>d&&(d+=c);d--;)if(d in this&&this[d]===a)return d;return-1});EndPlayVideo.events.PlayerEvent=function(a){this.type=a};var EV=EndPlayVideo.events.PlayerEvent;EV.prototype={target:null,currentTime:null,currentDuration:null,ad:null};EV.READY="ready";EV.TIME_UPDATE="timeUpdate";EV.PLAY="play";EV.PAUSE="pause";EV.COMPLETE="complete";EV.MAIN_END="mainEnd";EV.MEDIA_END="mediaEnd";EV.PREROLL_END="preRollEnd";EV.MIDROLL_END="midRollEnd";EV.POSTROLL_END="postRollEnd";EV.MODEL_UPDATE="modelUpdate";EV.ERROR="error";EV.RECONNECTION_FAILED="reconnectionFailed";
EV.AD_LOADED="adLoaded";EV.AD_ERROR="adError";EV.AD_NO_VIDEO="adNoVideo";EV.SOCIAL_FACEBOOK="socialFacebook";EV.SOCIAL_TWITTER="socialTwitter";EV.SOCIAL_EMAIL="socialEmail";EV.SOCIAL_EMBED="socialEmbed";EV.EXPANDER_EXPAND="expanderExpand";EV.EXPANDER_CONTRACT="expanderContract";EV.CHECK_FOR_OMNITURE="checkForOmniture";EndPlayVideo.Settings={};EndPlayVideo.Settings.VERSION="1.4";EndPlayVideo.Settings.PLAYER_NAME_HTML5="EndPlay Video Player v"+EndPlayVideo.Settings.VERSION+" HTML5";EndPlayVideo.Settings.PLAYER_NAME_BLACKBERRY="EndPlay Video Player v"+EndPlayVideo.Settings.VERSION+" BlackBerry";EndPlayVideo.Settings.DOMAIN="http://media.wcpo.com/";EndPlayVideo.Settings.PATH="";EndPlayVideo.Settings.FLASH_CONTROL_BAR_HEIGHT=32;EndPlayVideo.model.PlayerModel=function(a){var e=this,c=a,d=!1;SimpleEventDispatcher.apply(this,arguments);e.adRequest=null;e.isLastInExternalPlaylist=!1;e.init=function(){return e};e.sendUpdate=function(){var a=new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.MODEL_UPDATE);e.dispatchEvent(a)};e.setPlayState=function(a){var c=d;d=a;c!=d&&e.sendUpdate()};e.setAdPlaying=function(a){e.adRequest=a;e.sendUpdate()};e.destroy=function(){e._listeners={};c=null};e.isPlaying=function(){return d};
e.isAdPlaying=function(){return null!=e.adRequest};e.isAdPostRoll=function(a){return c&&c.postRoll===a};e.isAdOverlay=function(a){return c&&c.overlay===a};e.getAdsVO=function(){return c}};EndPlayVideo.extend(EndPlayVideo.model.PlayerModel,SimpleEventDispatcher);EndPlayVideo.vo.MediaVO=function(){this.source=null;this.live=this.streaming=!1};EndPlayVideo.vo.FlashVO=function(){EndPlayVideo.vo.MediaVO.apply(this,arguments);this.wmode="direct"};EndPlayVideo.extend(EndPlayVideo.vo.FlashVO,EndPlayVideo.vo.MediaVO);EndPlayVideo.vo.OmnitureVideoVO=function(){this.vidPlaylist=this.vidEmbeddedHost=this.vidPlayerID=this.vidAdName=this.vidCategory=this.vidID=this.vidType=this.vidName=null;this.vidSegment="M";this.vidContent="video";this.vidPubDate=this.vidPersonality=null};EndPlayVideo.vo.OmnitureVideoVO.PREFIX_PRE="preroll_";EndPlayVideo.vo.OmnitureVideoVO.PREFIX_POST="postroll_";EndPlayVideo.vo.OmnitureVideoVO.PREFIX_MID="midroll_";EndPlayVideo.vo.OmnitureVideoVO.PREFIX_LIVE="live_";
EndPlayVideo.vo.OmnitureVideoVO.PREFIX_RECORDED="ondemand_";EndPlayVideo.vo.OmnitureVideoVO.RECORDED="ondemand";EndPlayVideo.vo.OmnitureVideoVO.LIVE="live";EndPlayVideo.vo.OmnitureVideoVO.AD="ad";EndPlayVideo.vo.OmnitureVO=function(){EndPlayVideo.vo.OmnitureVideoVO.apply(this,arguments);this.s=this.account=null;this.trackLocal=this.debugTracking=!0;this.delayTracking=500;this.visitorNamespace="ewstv";this.trackingServer="ewstv.112.2o7.net";this.trackingServerSecure="ewstv.102.122.2o7.net"};EndPlayVideo.extend(EndPlayVideo.vo.OmnitureVO,EndPlayVideo.vo.OmnitureVideoVO);EndPlayVideo.vo.AdRequestVO=function(){return{adTagUrl:null,adType:"video",cleanPath:null}};EndPlayVideo.vo.AdsVO=function(){return{preRoll_source:null,postRoll_source:null,overlay_source:null,adSizeArray:null,proxy:null,adFrequency:1,adDelay:0,adCallCount:0}};EndPlayVideo.vo.AdRequests=function(){return{preRoll:null,postRoll:null,overlay:null,proxy:null,adSizeArray:null,adFrequency:1,adDelay:0,adCallCount:0}};EndPlayVideo.vo.ExpanderVO=function(){return{expandedWidth:null,expandedHeight:null,contractedWidth:null,contractedHeight:null,isExpanded:!1}};EndPlayVideo.vo.ConfigVO=function(){this.poster=this.skin=this.ads=this.omniture=this.ogg=this.webm=this.mp4=this.http=this.rtsp=this.flash=this.singleSource=null;this.autoPlay=!1;this.width=562;this.height=316;this.expander=this.id=this.headline=this.title=this.story=this.category=null;this.emailAction="/emailaction";this.showMenu=!0;this.playList=!1;this.toggleVideoCode=3;this.embeddable=!0;this.FBDebug=this.embeddableWithLink=!1;this.version=this.controlsHiding=this.controlsBelow=null};EndPlayVideo.control.OmnitureController=function(a){this.trackLoadOfPlayer=function(c,d){Spit.log("--\> HTML5 OMNITURE CALL: trackLoadOfPlayer");a.linkTrackVars="eVar38,eVar39,events";a.linkTrackEvents="event31";a.eVar38=c;a.eVar39=d;a.events="event31";a.tl(this,"o",c);a.linkTrackVars="";a.linkTrackEvents="";a.eVar38="";a.eVar39="";a.events=""};this.trackAdStart=function(c){Spit.log("--\> HTML5 OMNITURE CALL: trackAdStart");a.linkTrackVars="prop16,prop50,prop33,prop34,prop35,prop36,prop37,prop38,prop39,eVar13,eVar30,eVar31,eVar32,eVar33,eVar34,eVar35,eVar36,eVar37,eVar38,eVar39,events";
a.linkTrackEvents="event25";a.prop16=a.eVar13=c.vidName;a.prop50=a.eVar30=c.vidType;a.eVar31=c.vidSegment;a.eVar32=c.vidContent;a.prop33=a.eVar33=c.vidID;a.prop34=a.eVar34=c.vidCategory;a.prop35=a.eVar35=c.vidPersonality;a.prop36=a.eVar36=c.vidPubDate;a.prop37=a.eVar37="ad";a.prop38=a.eVar38=c.vidPlayerID;a.prop39=a.eVar39=c.vidEmbeddedHost;a.events="event25";a.tl(this,"o",c.vidPlayerID);a.linkTrackVars="";a.linkTrackEvents="";a.events="";a.prop16=a.prop50=a.prop33=a.prop34=a.prop35=a.prop36=a.prop37=
a.prop38=a.prop39="";a.eVar13=a.eVar30=a.eVar31=a.eVar32=a.eVar33=a.eVar34=a.eVar35=a.eVar36=a.eVar37=a.eVar38=a.eVar39=""};this.trackAdComplete=function(c,d){Spit.log("--\> HTML5 OMNITURE CALL: trackAdComplete");d=e(d);a.linkTrackVars="eVar13,eVar30,eVar31,eVar32,eVar33,eVar34,eVar35,eVar37,eVar38,eVar39,events";a.linkTrackEvents="event26,event39,event38";a.eVar13=c.vidName;a.eVar30=c.vidType;a.eVar31=c.vidSegment;a.eVar32=c.vidContent;a.eVar33=c.vidID;a.eVar34=c.vidCategory;a.eVar35=c.vidPersonality;
a.eVar37="ad";a.eVar38=c.vidPlayerID;a.eVar39=c.vidEmbeddedHost;a.events="event26,event39,event38="+d;a.tl(this,"o",c.vidPlayerID);a.linkTrackVars="";a.linkTrackEvents="";a.events="";a.eVar13=a.eVar30=a.eVar31=a.eVar32=a.eVar33=a.eVar34=a.eVar35=a.eVar37=a.eVar38=a.eVar39=""};this.trackVideoStart=function(c){Spit.log("--\> HTML5 OMNITURE CALL: trackVideoStart");a.linkTrackVars="prop16,prop50,prop33,prop34,prop35,prop36,prop38,prop39,eVar13,eVar30,eVar31,eVar32,eVar33,eVar34,eVar35,eVar36,eVar38,eVar39,events";
a.linkTrackEvents="event18";a.prop16=a.eVar13=c.vidName;a.prop50=a.eVar30=c.vidType;a.eVar31="1:M:0-25";a.eVar32=c.vidContent;a.prop33=a.eVar33=c.vidID;a.prop34=a.eVar34=c.vidCategory;a.prop35=a.eVar35=c.vidPersonality;a.prop36=a.eVar36=c.vidPubDate;a.prop38=a.eVar38=c.vidPlayerID;a.prop39=a.eVar39=c.vidEmbeddedHost;a.events="event18";a.tl(this,"o",c.vidPlayerID);a.linkTrackVars="";a.linkTrackEvents="";a.events="";a.prop16=a.prop50=a.prop33=a.prop34=a.prop35=a.prop36=a.prop38=a.prop39="";a.eVar13=
a.eVar30=a.eVar31=a.eVar32=a.eVar33=a.eVar34=a.eVar35=a.eVar36=a.eVar38=a.eVar39=""};this.trackVideo25Percent=function(c,d){Spit.log("--\> HTML5 OMNITURE CALL: trackVideo25Percent");d=e(d);a.linkTrackVars="eVar13,eVar30,eVar31,eVar32,eVar33,eVar34,eVar35,eVar36,eVar38,eVar39,events";a.linkTrackEvents="event35,event39,event38";a.eVar13=c.vidName;a.eVar30=c.vidType;a.eVar31="1:M:0-25";a.eVar32=c.vidContent;a.eVar33=c.vidID;a.eVar34=c.vidCategory;a.eVar35=c.vidPersonality;a.eVar36=c.vidPubDate;a.eVar38=
c.vidPlayerID;a.eVar39=c.vidEmbeddedHost;a.events="event35,event39,event38="+d;a.tl(this,"o",c.vidPlayerID);a.linkTrackVars="";a.linkTrackEvents="";a.events="";a.eVar13=a.eVar30=a.eVar31=a.eVar32=a.eVar33=a.eVar34=a.eVar35=a.eVar36=a.eVar38=a.eVar39=""};this.trackVideo50Percent=function(c,d){Spit.log("--\> HTML5 OMNITURE CALL: trackVideo50Percent");d=e(d);a.linkTrackVars="eVar13,eVar30,eVar31,eVar32,eVar33,eVar34,eVar35,eVar36,eVar38,eVar39,events";a.linkTrackEvents="event36,event39,event38";a.eVar13=
c.vidName;a.eVar30=c.vidType;a.eVar31="2:M:25-50";a.eVar32=c.vidContent;a.eVar33=c.vidID;a.eVar34=c.vidCategory;a.eVar35=c.vidPersonality;a.eVar36=c.vidPubDate;a.eVar38=c.vidPlayerID;a.eVar39=c.vidEmbeddedHost;a.events="event36,event39,event38="+d;a.tl(this,"o",c.vidPlayerID);a.linkTrackVars="";a.linkTrackEvents="";a.events="";a.eVar13=a.eVar30=a.eVar31=a.eVar32=a.eVar33=a.eVar34=a.eVar35=a.eVar36=a.eVar38=a.eVar39=""};this.trackVideo75Percent=function(c,d){Spit.log("--\> HTML5 OMNITURE CALL: trackVideo75Percent");
d=e(d);a.linkTrackVars="eVar13,eVar30,eVar31,eVar32,eVar33,eVar34,eVar35,eVar36,eVar38,eVar39,events";a.linkTrackEvents="event37,event39,event38";a.eVar13=c.vidName;a.eVar30=c.vidType;a.eVar31="3:M:50-75";a.eVar32=c.vidContent;a.eVar33=c.vidID;a.eVar34=c.vidCategory;a.eVar35=c.vidPersonality;a.eVar36=c.vidPubDate;a.eVar38=c.vidPlayerID;a.eVar39=c.vidEmbeddedHost;a.events="event37,event39,event38="+d;a.tl(this,"o",c.vidPlayerID);a.linkTrackVars="";a.linkTrackEvents="";a.events="";a.eVar13=a.eVar30=
a.eVar31=a.eVar32=a.eVar33=a.eVar34=a.eVar35=a.eVar36=a.eVar38=a.eVar39=""};this.trackVideoComplete=function(c,d){Spit.log("--\> HTML5 OMNITURE CALL: trackVideoComplete");d=e(d);a.linkTrackVars="eVar13,eVar30,eVar31,eVar32,eVar33,eVar34,eVar35,eVar36,eVar38,eVar39,events";a.linkTrackEvents="event19,event39,event38";a.eVar13=c.vidName;a.eVar30=c.vidType;a.eVar31="4:M:75-100";a.eVar32=c.vidContent;a.eVar33=c.vidID;a.eVar34=c.vidCategory;a.eVar35=c.vidPersonality;a.eVar36=c.vidPubDate;a.eVar38=c.vidPlayerID;
a.eVar39=c.vidEmbeddedHost;a.events="event19,event39,event38="+d;a.tl(this,"o",c.vidPlayerID);a.linkTrackVars="";a.linkTrackEvents="";a.events="";a.eVar13=a.eVar30=a.eVar31=a.eVar32=a.eVar33=a.eVar34=a.eVar35=a.eVar36=a.eVar38=a.eVar39=""};this.trackVideoPause=function(c,d){Spit.log("--\> HTML5 OMNITURE CALL: trackVideoPause");d=e(d);a.linkTrackVars="eVar13,eVar30,eVar33,eVar34,eVar35,eVar36,eVar38,eVar39,events";a.linkTrackEvents="event30,event38";a.eVar13=c.vidName;a.eVar30=c.vidType;a.eVar33=c.vidID;
a.eVar34=c.vidCategory;a.eVar35=c.vidPersonality;a.eVar36=c.vidPubDate;a.eVar38=c.vidPlayerID;a.eVar39=c.vidEmbeddedHost;a.events="event30,event38="+d;a.tl(this,"o",c.vidPlayerID);a.linkTrackVars="";a.linkTrackEvents="";a.events="";a.eVar13=a.eVar30=a.eVar33=a.eVar34=a.eVar35=a.eVar36=a.eVar38=a.eVar39=""};this.trackVideoSeek=function(c,d){Spit.log("--\> HTML5 OMNITURE CALL: trackVideoSeek");d=e(d);a.linkTrackVars="eVar13,eVar30,eVar32,eVar33,eVar34,eVar35,eVar36,eVar38,eVar39,events";a.linkTrackEvents=
"event30,event38";a.eVar13=c.vidName;a.eVar30=c.vidType;a.eVar32=c.vidContent;a.eVar33=c.vidID;a.eVar34=c.vidCategory;a.eVar35=c.vidPersonality;a.eVar36=c.vidPubDate;a.eVar38=c.vidPlayerID;a.eVar39=c.vidEmbeddedHost;a.events="event30,event38="+d;a.tl(this,"o",c.vidPlayerID);a.linkTrackVars="";a.linkTrackEvents="";a.events="";a.eVar13=a.eVar30=a.eVar32=a.eVar33=a.eVar34=a.eVar35=a.eVar36=a.eVar38=a.eVar39=""};this.trackClickOnEmbedLink=function(c){Spit.log("--\> HTML5 OMNITURE CALL: trackClickOnEmbedLink");
a.linkTrackVars="eVar13,eVar30,eVar33,eVar34,eVar38,eVar39,events";a.linkTrackEvents="event28";a.eVar13=c.vidName;a.eVar30=c.vidType;a.eVar33=c.vidID;a.eVar34=c.vidCategory;a.eVar38=c.vidPlayerID;a.eVar39=c.vidEmbeddedHost;a.events="event28";a.tl(this,"o",c.vidPlayerID);a.linkTrackVars="";a.linkTrackEvents="";a.events="";a.eVar13=a.eVar30=a.eVar33=a.eVar34=a.eVar38=a.eVar39=""};this.trackClickOnEmail=function(c){Spit.log("--\> HTML5 OMNITURE CALL: trackClickOnEmail");a.linkTrackVars="eVar13,eVar30,eVar33,eVar34,eVar38,eVar39,events";
a.linkTrackEvents="event32";a.eVar13=c.vidName;a.eVar30=c.vidType;a.eVar33=c.vidID;a.eVar34=c.vidCategory;a.eVar38=c.vidPlayerID;a.eVar39=c.vidEmbeddedHost;a.events="event32";a.tl(this,"o",c.vidPlayerID);a.linkTrackVars="";a.linkTrackEvents="";a.events="";a.eVar13=a.eVar30=a.eVar33=a.eVar34=a.eVar38=a.eVar39=""};this.trackClickOnPlaylist=function(c){Spit.log("--\> HTML5 OMNITURE CALL: trackClickOnPlaylist");a.linkTrackVars="prop40,eVar40,events";a.linkTrackEvents="event27";a.prop39=a.eVar39=c.vidPlaylist;
a.events="event27";a.tl(this,"o",c.vidPlayerID);a.linkTrackVars="";a.linkTrackEvents="";a.eVar40="";a.prop40="";a.events=""};this.trackLiveTimeCheck=function(c,d){Spit.log("--\> HTML5 OMNITURE CALL: trackLiveTimeCheck");d=e(d);a.linkTrackVars="eVar13,eVar30,eVar31,eVar32,eVar33,eVar34,eVar35,eVar36,eVar38,eVar39,events";a.linkTrackEvents="event39,event38";a.eVar13=c.vidName;a.eVar30=c.vidType;a.eVar31=c.vidSegment;a.eVar32=c.vidContent;a.eVar33=c.vidID;a.eVar34=c.vidCategory;a.eVar35=c.vidPersonality;
a.eVar36=c.vidPubDate;a.eVar38=c.vidPlayerID;a.eVar39=c.vidEmbeddedHost;a.events="event39,event38="+d;a.tl(this,"o",c.vidPlayerID);a.linkTrackVars="";a.linkTrackEvents="";a.events="";a.eVar13=a.eVar30=a.eVar31=a.eVar32=a.eVar33=a.eVar34=a.eVar35=a.eVar36=a.eVar38=a.eVar39=""};var e=function(a){return isNaN(Number(a))||0>a?0:a}};EndPlayVideo.control.TimerController=function(a){function e(){b+=a;for(var c=j,d=0;d<c.length;d++)c[d](b)}var c=this,d=0,b=0,k=!1,m=!1,j=[];c.start=function(){k=!0;c.pause();b=0;c.resume()};c.pause=function(){clearInterval(d);m=!0};c.resume=function(){d=setInterval(e,1E3*a);m=!1};c.stop=function(){k=!1;c.pause();b=0;m=!1};c.onInterval=function(a){if(a&&"function"===(typeof a).toLowerCase())j.push(a);else throw Error("EndPlayVideo.control.TimerController.onInterval can only accept a functions as callback.");
};c.destroy=function(){c.stop();c=j=null};c.getSecondsElapsed=function(){return b};c.isStarted=function(){return k};c.isPaused=function(){return m}};EndPlayVideo.control.AdController=function(a,e,c,d){SimpleEventDispatcher.apply(this,arguments);var b,k,m=this,j,h,i=!1,n,f,r;m.init=function(){var a=e.getAdsVO(),b=!EndPlayVideo.isNull(a.adDelay)&&!isNaN(Number(a.adDelay))&&0<=Number(a.adDelay)?a.adDelay:0;r=!EndPlayVideo.isNull(a.adCallCount)&&!isNaN(Number(a.adCallCount))&&0<=Number(a.adCallCount)?a.adCallCount:0;r-=b;return m};m.requestAd=function(a){r++;if(g()){m.unloadAd();e.isAdOverlay(a)||e.setAdPlaying(a);b=new EndPlayVideo.AdsLoader;b.addEventListener(google.ima.AdsLoadedEvent.Type.ADS_LOADED,
q,!1);b.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,y,!1);var c={};a.cleanPath=c.adTagUrl=l(a.adTagUrl);c.adType=a.adType;h=a;try{b.requestAds(c,a)}catch(d){d=d||{},d.getUserRequestContext=function(){return a},y(d)}return!0}return!1};var g=function(){var a=e.getAdsVO().adFrequency;return 0<r&&0==r%a},l=function(a){a=a.replace("%pos%","native");a=a.replace("%loc%","site");return a=a.replace("%rand%",1E16*Math.random())},z=function(a){s();if(k=a)k.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,
E),k.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,u),k.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,H)};m.unloadAd=function(){b&&(b.removeEventListener(google.ima.AdsLoadedEvent.Type.ADS_LOADED,q,!1),b.removeEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,y,!1),b=null);s()};var s=function(){k&&(i&&(a.removeListener(EndPlayVideo.events.PlayerEvent.PLAY,x),i=!1),j&&(j.destroy(),j=null),k.removeEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,E),k.removeEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
u),k.removeEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,H),k.unload(),h=k=null)};m.destroy=function(){o();m.unloadAd();m=null};m.getCallCount=function(){return r};var q=function(b){var c;try{c=b.getAdsManager()}catch(h){}var j;try{j=b.getUserRequestContext()}catch(g){}b=!1;if(c){var i=c.getAds();if(0<i.length){z(c);switch(k.getType()){case "video":c=a.video();var l=c.currentSrc;k.setClickTrackingElement(c);try{k.play(c),c.currentSrc!=l&&(b=!0)}catch(q){q=q||{},q.getUserRequestContext=
function(){return j},y(q)}break;case "overlay":k.setAdSlotWidth(400);k.setAdSlotHeight(260);k.setHorizontalAlignment(google.ima.AdSlotAlignment.HorizontalAlignment.CENTER);k.setVerticalAlignment(google.ima.AdSlotAlignment.VerticalAlignment.BOTTOM);d.style.display="";c=!1;try{k.play(d),c=!0}catch(r){c=!1,r=r||{},r.getUserRequestContext=function(){return j},y(r)}if(c){if(d.hasChildNodes()){c=function(a){a.style.width="";a.style.height="";try{a.removeAttribute("width")}catch(b){}try{a.removeAttribute("height")}catch(c){}Boolean(a.style.top)&&
(a.style.top="",a.style.bottom="0px");Boolean(a.style.zIndex)&&(a.style.zIndex="")};l=d.firstChild;"DIV"===l.nodeName&&(c(l),l.style.marginLeft="auto",l.style.marginRight="auto");var t=l.hasChildNodes()?l.firstChild:null;t&&"DIV"===t.nodeName&&c(t);o();f=document.createElement("div");f.className="vjs-overlay-close";d.insertBefore(f,l);VideoJS.addListener(f,"click",C)}n=[];m.resize()}}if(i=(i=i[0].getCompanionAds(300,250,{resourceType:google.ima.CompanionAdSelectionSettings.ResourceType.STATIC,creativeType:google.ima.CompanionAdSelectionSettings.CreativeType.IMAGE}))&&
0<i.length?i[0]:null)if(i=i.getContent(),i=function(a){for(var b=a.indexOf("z-index");-1!=b;)endIdx=a.indexOf(";",b),b=a.substring(0,b),a=a.substring(endIdx+1),a=b+a,b=a.indexOf("z-index");return a}(i),null!=i&&1<VideoJS.trim(i).length)try{window.loadCompanionAd(i)}catch(u){}}else Spit.log("No VAST Ads returned."),s()}else s();b?b=new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.AD_LOADED):(b=new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.AD_NO_VIDEO),e.setAdPlaying(null));
b.ad=j;m.dispatchEvent(b)},o=function(){f&&(VideoJS.removeListener(f,"click",C),f=null)},C=function(){d.style.display="none"},t=function(a){var b,c,d,e;t.hasStyleSize(a)&&(b=parseFloat(a.style.width),c=parseFloat(a.style.height));t.hasAttributeSize(a)&&(d=parseFloat(a.getAttribute("width")),e=parseFloat(a.getAttribute("height")));this.resize=function(h){var f=EndPlayVideo.utils.RatioUtil,j=new f,i;if(!isNaN(d)&&!isNaN(e)){i=new f.Size(d,e);h<d&&(i=j.scaleHeight(i,h));try{a.setAttribute("width",i.width),
a.setAttribute("height",i.height)}catch(g){}}!isNaN(b)&&!isNaN(c)&&(i=new f.Size(b,c),h<b&&(i=j.scaleHeight(i,h)),a.style.width=i.width+"px",a.style.height=i.height+"px");return i?i.width:null};this.node=function(){return a}};t.hasStyleSize=function(a){return Boolean(a.style.width)&&Boolean(a.style.height)};t.hasAttributeSize=function(a){var b=!1;try{b=Boolean(a.getAttribute("width"))}catch(c){}var d=!1;try{d=Boolean(a.getAttribute("height"))}catch(e){}return b&&d};t.hasSize=function(a){return t.hasStyleSize(a)||
t.hasAttributeSize(a)};m.resize=function(){if(d.hasChildNodes()&&n){var a=function(b,c){do{var d=c,e;a:{e=b;for(var h=0,f=n.length;h<f;h++)if(n[h].node()===e){e=n[h];break a}e=null}!e&&t.hasSize(b)&&(e=new t(b),n.push(e));e&&(d=e.resize(c));b.hasChildNodes()&&a(b.firstChild,d)}while(b=b.nextSibling)};a(d.firstChild,parseFloat(d.offsetWidth))}};var y=function(a){var b;try{b=a.getUserRequestContext()}catch(c){b=h}var d="";try{d=a.getError()}catch(f){try{d=a.c}catch(i){}}d=""!==d?": "+d:d;e.setAdPlaying(null);
Spit.log("AD LOAD ERROR"+d);a=new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.AD_ERROR);a.ad=b;m.dispatchEvent(a)},E=function(a){var b;try{b=a.getUserRequestContext()}catch(c){b=h}e.setAdPlaying(null);Spit.log("AD ERROR: "+a.getError());a=new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.AD_ERROR);a.ad=b;m.dispatchEvent(a)},u=function(){a.video().pause();e.isAdOverlay(h)||e.setAdPlaying(h);i=!0;a.addListener(EndPlayVideo.events.PlayerEvent.PLAY,x)},x=function(){a.removeListener(EndPlayVideo.events.PlayerEvent.PLAY,
x);i=!1;var b=a.video();if(c){var b=b.currentSrc,d=new EndPlayVideo.vo.OmnitureVideoVO,f;f=e.getAdsVO();h==f.preRoll?(f=EndPlayVideo.vo.OmnitureVideoVO.PREFIX_PRE,d.vidSegment="1:A:Preroll"):h==f.postRoll?(f=EndPlayVideo.vo.OmnitureVideoVO.PREFIX_POST,d.vidSegment="3:A:Postroll"):(f=EndPlayVideo.vo.OmnitureVideoVO.PREFIX_MID,d.vidSegment="2:A:Midroll");d.vidName=d.vidAdName=f+b;d.vidType=EndPlayVideo.vo.OmnitureVideoVO.AD;d.vidID="0";d.vidCategory="";d.vidSegment="A";d.vidPlayerID=EndPlayVideo.Settings.PLAYER_NAME_HTML5;
f=EndPlayVideo.isNull;var g=EndPlayVideo.view.OmnitureMediator;f(d.vidPersonality)&&b&&(d.vidPersonality=g.getPersonality(b));f(d.vidPubDate)&&b&&(d.vidPubDate="n/a");g.adjustVidName(d);j=new EndPlayVideo.view.OmnitureMediator(a,c,d,e,!1);j.pushPlay()}},H=function(){e.setAdPlaying(null);e.isAdPostRoll(h)?a._pauseAfterAdPostRoll():a.video().play();m.unloadAd()}};EndPlayVideo.extend(EndPlayVideo.control.AdController,SimpleEventDispatcher);var ext=EndPlayVideo.control.FlashExternalController={};ext.ns="EndPlayVideo.control.FlashExternalController";ext.p=EndPlayVideo.getPlayerById;ext.relayEvent=function(a,e){var c=ext.p(a);if(c)c._relayEvent(e);else throw Error("ERROR: "+ext.ns+".relayEvent getting passed an invalid index.");};ext.resizeContainer=function(a,e,c){if(a=ext.p(a))a.resizeContainer(e,c);else throw Error("ERROR: "+ext.ns+".resizeContainer getting passed an invalid index.");};
ext.toggleExpand=function(a,e){var c=ext.p(a);if(c)c.toggleExpand(e);else throw Error("ERROR: "+ext.ns+".toggleExpand getting passed an invalid index.");};ext.isExpanded=function(a){var e=!1;if(a=ext.p(a))e=a.isExpanded();else throw Error("ERROR: "+ext.ns+".isExpanded getting passed an invalid index.");return e};ext.STORAGE_PREFIX="EPVideo_";ext.setLocalStorage=function(a,e){var c=!1;if(!localStorage)return!1;try{localStorage[ext.STORAGE_PREFIX+a]=e,c=!0}catch(d){c=!1}return c};
ext.getLocalStorage=function(a){var e;try{var c=ext.STORAGE_PREFIX+a;e=localStorage&&null!=localStorage[c]?localStorage[c]:null}catch(d){}return e};ext.getInstance=ext.p;(function(a){function e(a){this.el=a;var b=new c(a);this.add=function(a,d){var e;e=b.indexOf(a);-1==e?(e=new c(a),b.addItem(e,!0)):e=b.getItemByIndex(e);e.addItem(d,!1)};this.remove=function(a,c){var d;d=b.indexOf(a);-1!=d&&(d=b.getItemByIndex(d),d.removeItem(c),0===d.length()&&b.removeItem(d))};this.getTypes=function(){return b.toItemArray()};this.length=function(){return b.length}}function c(a){this.ref=a;var b=[];this.addItem=function(a,c){c?-1==b.indexOf(a)&&b.push(a):b.push(a)};this.removeItem=
function(a){a=b.indexOf(a);-1!=a&&b.splice(a,1)};this.getItemByIndex=function(a){return b[a]};this.indexOf=function(a){return b.indexOf(a)};this.length=function(){return b.length};this.toItemArray=function(){return b}}var d=a.addListener,b=a.removeListener,k=new function(){var a=this,b=new c(this);a.add=function(c,d,k){var f=a.indexOf(c);-1==f?(c=new e(c),b.addItem(c,!0)):c=b.getItemByIndex(f);c.add(d,k)};a.remove=function(c,d,e){var f;f=a.indexOf(c);-1!=f&&(f=b.getItemByIndex(f),f.remove(d,e),0===
f.length()&&b.removeItem(c))};a.length=function(){return b.length()};a.indexOf=function(c){for(var d=0;d<a.length();d++){var e=b.getItemByIndex(d);if(c===e.el)return d}return-1};a.getListeners=function(){return b.toItemArray()}};a.addListener=function(a,b,c){k.add(a,b,c);d.apply(this,arguments)};a.removeListener=function(a,c,d){k.remove(a,c,d);b.apply(this,arguments)};a.removeAllListeners=function(b){for(var c=k.getListeners(),d=0;d<c.length;d++){var e=c[d];if(e.el===b)for(var n=e.getTypes(),f=0;f<
n.length;f++)for(var r=n[f],g=r.toItemArray(),l=0;l<g.length;l++)a.removeListener(e.el,r.ref,g[l])}};a.player.extend({removeVideoListener:function(b,c){a.removeListener(this.video,b,c.rEvtContext(this))}})})(VideoJS);EndPlayVideo.view.PlayerHTML5=function(a,e){SimpleEventDispatcher.apply(this,arguments);var c=this,d=e.ads,b,k,m,j,h,i=!1,n,f=!1,r,g,l,z=0,s=0,q,o,C,t=!1,y=!1,E=!1,u=!1,x,H,A,B,p,G=!1,F,D,J=new EndPlayVideo.utils.RatioUtil.Size(-1,-1),L=!1,Z=!0,T=!1,$,aa,K,O=!1,N,M=!1,I,Q=!1,W=!1,X=!1,R;c.init=function(){C=new SimpleEventDispatcher;var f=navigator.userAgent.toLowerCase();k=-1!=f.indexOf("iphone")||-1!=f.indexOf("ipod")||-1!=f.indexOf("ipad")?!0:!1;m=VideoJS.iOSVersion();h=Boolean(a.getAttribute("data-isLive"));
l=(new EndPlayVideo.model.PlayerModel(d)).init();e.autoplay&&a.setAttribute("autoplay","autoplay");b=new VideoJS(a,{controlsBelow:e.controlsBelow,controlsHiding:e.controlsHiding,controlsAtStart:!e.controlsHiding});e.showMenu&&b.showMenu(!0);if(e.expandable){b.showExpander(!0);e.expanded&&b.toggleExpand(!0);var i=b.toggleExpand;b.toggleExpand=function(a){i.apply(b,arguments);var d=new EndPlayVideo.events.PlayerEvent(a?EndPlayVideo.events.PlayerEvent.EXPANDER_EXPAND:EndPlayVideo.events.PlayerEvent.EXPANDER_CONTRACT);
c.dispatchEvent(d)}}try{b.video.getAttribute("controls")}catch(j){}D=VideoJS.getChildByClass(b.box,"video-js-marginTopFloat",!0);if(isNaN(Number(e.width))||isNaN(Number(e.height)))f=window,isNaN(f.orientation)||(B=f.onorientationchange,f.onorientationchange=ua),VideoJS.addListener(f,"resize",fa),G=!0;q=b.enterFullScreen;b.enterFullScreen=function(){q.apply(b);b.supportsFullScreen()||(VideoJS.removeClass(a,"vjs-block"),!b.options.useBuiltInControls&&!b.options.controlsBelow&&VideoJS.addClass(D,"vjs-noDisplay"),
S())};o=b.exitFullScreen;b.exitFullScreen=function(){o.apply(b);VideoJS.addClass(a,"vjs-block");!b.options.useBuiltInControls&&!b.options.controlsBelow?VideoJS.removeClass(D,"vjs-noDisplay"):(b.element.style.width="",b.element.style.height="");S()};x=b.play;b.play=function(){var a=W=!1;g&&d&&d.preRoll&&!t&&(a=ga());a||(!VideoJS.isIOS()&&g&&d&&d.overlay&&!l.isAdPlaying()&&!O&&ha(),x.apply(b))};H=b.width;b.width=function(a){return void 0!==a?(b.video.width=a,b.box.style.width=isNaN(Number(a))?a:a+"px",
b.triggerResizeListeners(),b):b.video.offsetWidth};A=b.height;b.height=function(a){return void 0!==a?(b.video.height=a,b.box.style.height=isNaN(Number(a))?a:a+"px",b.triggerResizeListeners(),b):b.video.offsetHeight};p=b.positionBox;b.positionBox=function(){if(b.videoIsFullScreen){if(b.box.style.width="",b.box.style.height="",b.options.useBuiltInControls||!b.options.controlsBelow)b.element.style.height=""}else b.box.style.width=isNaN(Number(e.width))?e.width:e.width+"px",b.box.style.height=isNaN(Number(e.height))?
e.height:e.height+"px",b.element.style.height=""};b.emailButton&&VideoJS.addListener(b.emailButton,"click",ia);b.shareButton&&VideoJS.addListener(b.shareButton,"click",ja);b.twitterButton&&VideoJS.addListener(b.twitterButton,"click",ka);b.embedButton&&VideoJS.addListener(b.embedButton,"click",na);e.showMenu&&b.menuControl&&VideoJS.addListener(b.menuControl,"click",ma);VideoJS.addToDOMReady(function(){M||(b.box.style.display="block",b.controls&&(b.controls.style.display="block"),b.progressControl&&
(b.progressControl.style.display="block"),S())});b.addVideoListener("loadeddata",da);b.addVideoListener("play",oa);b.addVideoListener("pause",pa);b.addVideoListener("ended",qa);b.addVideoListener("loadedmetadata",la);b.addVideoListener("waiting",Y);b.addVideoListener("timeupdate",ba);b.addVideoListener("loadstart",v);if(e.omniture&&!window.s&&null!=EndPlayVideo.WaitingForOmniture){var f=EndPlayVideo.WaitingForOmniture,n={fnc:ea,ref:c,destroyCheck:c.isDestroyed};if(0==f.length){var r=0,s=0;f.push(n);
r=window.setInterval(function(){if(!(1E3<s)&&!window.s)s++;else{r=window.clearInterval(r);for(var a=EndPlayVideo.WaitingForOmniture,b=0,c=a.length;b<c;b++){var d=a[b];!d.destroyCheck.call(d.ref)&&d.fnc.call(d.ref)}EndPlayVideo.WaitingForOmniture=null}},100)}else f.push(n)}else ea();return c};var ea=function(){if(e.omniture&&window.s){var a=window.s;e.omniture.s=a;try{e.omniture.account=e.omniture.account||a.account,null==e.omniture.account&&(e.omniture.account=a.getAccount())}catch(i){}e.omniture.visitorNamespace=
a.visitorNamespace;e.omniture.trackingServer=a.trackingServer;e.omniture.trackingServerSecure=a.trackingServerSecure}e.omniture&&e.omniture.s&&e.omniture.account&&(f=!0,N=ra(b.video.currentSrc,e.omniture),r=new EndPlayVideo.control.OmnitureController(a,e.omniture),r.trackLoadOfPlayer(EndPlayVideo.Settings.PLAYER_NAME_HTML5));va(parseInt(e.toggleVideoCode),!1)||(d=null);EndPlayVideo.AdsLoader&&d&&(g=(new EndPlayVideo.control.AdController(c,l,r,b.overlayContainer)).init(),g.addListener(EndPlayVideo.events.PlayerEvent.AD_LOADED,
V),g.addListener(EndPlayVideo.events.PlayerEvent.AD_ERROR,V),g.addListener(EndPlayVideo.events.PlayerEvent.AD_NO_VIDEO,V),a=!1,b.options.autoplay&&d&&d.preRoll&&(a=ga()),!a&&!VideoJS.isIOS()&&b.options.autoplay&&d&&d.overlay&&ha());k&&h?(j=new EndPlayVideo.control.TimerController(1),j.onInterval(function(a){var b=new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.TIME_UPDATE);z=b.currentTime=a;c.dispatchEvent(b)})):(C.addListener(EndPlayVideo.events.PlayerEvent.TIME_UPDATE,sa),b.onCurrentTimeUpdate(function(){if(b){var a=
b,c=Math.ceil(a.currentTime()),d=Math.ceil(a.duration());if(l.isAdPlaying()){var e=d-c;isNaN(Number(e))||(a.currentAdTimeDisplay.innerHTML="continues in: "+e)}C&&(a=new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.TIME_UPDATE),a.currentTime=c,a.currentDuration=d,C.dispatchEvent(a))}}));l.addListener(EndPlayVideo.events.PlayerEvent.MODEL_UPDATE,P);P();VideoJS.isIOS()&&b.options.autoplay&&b.play()},P=function(){var a=l.isAdPlaying();b.progressHolder&&b.setSeekEnabled(!a);if(Q!=a){var c=
function(a,b){VideoJS.toggleClass(a,"vjs-noDisplay",b)};a&&(b.currentAdTimeDisplay.innerHTML="");c(b.currentTimeDisplay,a);c(b.timeSeparator,a);c(b.durationDisplay,a);c(b.currentAdTimeDisplay,!a);Q=a}},Y=function(){Z&&(VideoJS.removeClass(b.element,"vjs-fadeIn"),VideoJS.addClass(b.element,"vjs-alphaOut"));L=!0},ba=function(){L&&(Z&&(VideoJS.addClass(b.element,"vjs-fadeIn"),VideoJS.removeClass(b.element,"vjs-alphaOut"),Z=!1),L=!1)},v=function(){VideoJS.isIPad()?T?b.spinners&&b.showSpinners():b.spinners&&
b.hideSpinners():b.options.autoplay&&b.spinners&&b.showSpinners()},fa=function(){S()},U=function(){var a=b.video.videoWidth,c=b.video.videoHeight;if(!(k&&4>m)&&null!=a&&0<a&&null!=c&&0<c&&(J.width!=a||J.height!=c))J.width=a,J.height=c,S()},S=function(){var a=isNaN(Number(e.width)),c=isNaN(Number(e.height));a&&(b.box.style.width=e.width);c&&(b.element.style.height="",!b.options.useBuiltInControls&&b.options.controlsBelow&&(b.box.style.height=e.height));var d=new EndPlayVideo.utils.RatioUtil.Size(b.box.offsetWidth,
b.box.offsetHeight);0===d.width&&(d.width=b.box.parentNode.offsetWidth);0===d.height&&(d.height=b.box.parentNode.offsetHeight);var f=0,i=0;!b.options.useBuiltInControls&&b.options.controlsBelow&&(b.controls&&(i+=b.controls.offsetHeight),b.progressControl&&0>b.progressControl.offsetTop&&(i+=-1*b.progressControl.offsetTop));b.videoIsFullScreen&&!b.options.useBuiltInControls&&b.options.controlsBelow&&(f=i,d.height-=f);var h=d.width;400>(h?h:b.box.offsetWidth)?VideoJS.addClass(b.box,"compact"):VideoJS.removeClass(b.box,
"compact");0<J.width&&0<J.height?(F||(F=new EndPlayVideo.utils.RatioUtil),a&&c?a=F.scaleToFit(J,d):(a?(a=d.clone(),a.height=e.height):c?(a=d.clone(),a.width=e.width):a=new EndPlayVideo.utils.RatioUtil.Size(e.width,e.height),a=F.scaleToFit(J,a)),b.video.width=a.width,b.video.height=a.height,b.videoIsFullScreen&&!b.options.useBuiltInControls&&b.options.controlsBelow&&(b.video.style.width=a.width+"px",b.video.style.height=a.height+"px"),D.style.marginBottom=-(a.height+f)/2+"px",b.triggerResizeListeners()):
(b.video.width=d.width,b.video.height=d.height,b.videoIsFullScreen&&!b.options.useBuiltInControls&&b.options.controlsBelow&&(b.video.style.width=d.width+"px",b.video.style.height=d.height+"px"),D.style.marginBottom=-(d.height+f)/2+"px");!b.options.useBuiltInControls&&b.options.controlsBelow&&(e.parentContainer.style.marginBottom=i+"px");b.positionAll();g&&g.resize()};c.resetSize=function(){S()};var ua=function(){S();null!=B&&B.call(arguments)},la=function(){U()};c.canPlaySource=function(){return b.canPlaySource()};
var ia=function(){!$&&b.emailScreen&&($=new EndPlayVideo.view.EmailFormMediator(b.emailScreen,e.emailAction,EndPlayVideo.decodeURI(e.story)));c.dispatchEvent(new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.SOCIAL_EMAIL));r&&N&&r.trackClickOnEmail(N)},ja=function(){c.dispatchEvent(new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.SOCIAL_FACEBOOK))},ka=function(){c.dispatchEvent(new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.SOCIAL_TWITTER))},
na=function(){aa||(aa=new EndPlayVideo.view.EmbedFormMediator(b.embedScreen,"<embed></embed>"));c.dispatchEvent(new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.SOCIAL_EMBED));r&&N&&r.trackClickOnEmbedLink(N)},ma=function(){if(!X){var a=function(a,b){return"http://api-ssl.bitly.com/v3/shorten?login=endplayui&apiKey=R_d7876ce60026e874e4ef3906c1f433a3&longUrl="+encodeURIComponent(a)+"&format="+b}(EndPlayVideo.decodeURI(e.story),"json");try{VideoJS.get(a,function(a){var b,c;try{b=
JSON.parse(a),c=Number(b.status_code)}catch(d){}if(c&&!isNaN(c)&&200===c)try{R=b.data.url}catch(e){}})}catch(b){}X=!0}};c.getShortenedShareURL=function(){return R};var V=function(a){var b=EndPlayVideo.events.PlayerEvent;switch(a.type){case b.AD_ERROR:case b.AD_NO_VIDEO:if(a.ad){b=!1;switch(a.ad){case d.preRoll:b=t=!0;break;case d.overlay:O=!0}b&&c.play()}}c.dispatchEvent(a)},da=function(){if(b&&(U(),!u)){u=!0;var a=new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.READY);c.dispatchEvent(a)}},
ga=function(){ca();var a=!1;g&&d&&d.preRoll&&(a=g.requestAd(d.preRoll));t=!0;O=y=!1;return a},ca=function(){K&&(K.destroy(),K=null)};c._onOverlayInterval=function(){ca();d.overlay.adType="overlay";g.requestAd(d.overlay)};var ha=function(){ca();g&&d&&d.overlay&&(K=new EndPlayVideo.control.TimerController(10),K.onInterval(function(){c._onOverlayInterval.call(this)}),K.start());O=!0},ta=function(){ca();var a=!1;g&&d&&d.postRoll&&(a=g.requestAd(d.postRoll));y=!0;return a},oa=function(){if(!W&&(T=!0,b)){U();
u||da();l.setPlayState(!0);if(f&&!i&&!l.isAdPlaying()){var a=ra(b.video.currentSrc,e.omniture);n=new EndPlayVideo.view.OmnitureMediator(c,r,a,l,!0);i=!0}a=!1;d&&d.preRoll&&!t&&(a=ga());!a&&!VideoJS.isIOS()&&d&&d.overlay&&(d.preRoll&&t||!d.preRoll)&&!l.isAdPlaying()&&!O&&ha();j&&(j.isStarted()?j.isPaused()&&j.resume():j.start());a=new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.PLAY);c.dispatchEvent(a)}},pa=function(){T=!1;if(b){u||da();l.setPlayState(!1);j&&j.isStarted()&&!j.isPaused()&&
j.pause();var a=new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.PAUSE);c.dispatchEvent(a)}},sa=function(a){var b=new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.TIME_UPDATE);z=b.currentTime=a.currentTime;s=b.currentDuration=a.currentDuration;c.dispatchEvent(b)},qa=function(){T=!1;if(b){l.setPlayState(!1);var a,d=!1,f=!1,i=l.getAdsVO();l.isAdPlaying()?l.adRequest===i.preRoll?a=EndPlayVideo.events.PlayerEvent.PREROLL_END:l.adRequest===i.postRoll?(a=EndPlayVideo.events.PlayerEvent.POSTROLL_END,
d=!0):(a=EndPlayVideo.events.PlayerEvent.MIDROLL_END,E&&i&&i.postRoll&&!y&&(!e.playList||l.isLastInExternalPlaylist)&&(f=!0)):(i&&i.postRoll&&(!e.playList||l.isLastInExternalPlaylist)?f=!0:d=!0,a=EndPlayVideo.events.PlayerEvent.MAIN_END,E=!0);a=new EndPlayVideo.events.PlayerEvent(a);c.dispatchEvent(a);a=new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.MEDIA_END);c.dispatchEvent(a);!d&&f&&(ta()||(d=!0));if(d&&(E=O=y=t=!1,d=new EndPlayVideo.events.PlayerEvent(EndPlayVideo.events.PlayerEvent.COMPLETE),
c.dispatchEvent(d),e.playList&&!l.isLastInExternalPlaylist))try{window.playNext(e.devID)}catch(g){}}};c.play=function(){b.play()};c._resumeAfterAdError=function(){c.play()};c._pauseAfterAdPostRoll=function(){W=!0;b.playerOnVideoEnded();b.bigPlayButtonsOnEnded();b.hideSpinners()};c.playPost=function(){l.isLastInExternalPlaylist=!0;ta()};c.pause=function(){b.pause()};c.playAd=function(a){g&&a&&!l.isAdPlaying()&&l.isPlaying()&&(d&&d.proxy&&(a.adTagUrl=EndPlayVideo.view.PlayerHTML5.getAdProxyPath(a.adTagUrl,
d.proxy)),g.requestAd(a))};c.destroy=function(){M=!0;n&&(n.destroy(),n=null);ca();T=!1;if(l){l.removeListener(EndPlayVideo.events.PlayerEvent.MODEL_UPDATE,P);k&&h&&C.removeListener(EndPlayVideo.events.PlayerEvent.TIME_UPDATE,sa);C=null;G&&(isNaN(window.orientation)||(window.onorientationchange=B),B=null,VideoJS.removeListener(w,"resize",fa),G=!1);b.enterFullScreen=q;b.exitFullScreen=o;o=q=null;b.play=x;x=null;b.width=H;H=null;b.height=A;A=null;b.positionBox=p;p=null;j&&(j.destroy(),j=null);I&&(I.destroy(),
I=null);l.destroy();r=l=null;g&&(g.removeListener(EndPlayVideo.events.PlayerEvent.AD_LOADED,V),g.removeListener(EndPlayVideo.events.PlayerEvent.AD_ERROR,V),g.removeListener(EndPlayVideo.events.PlayerEvent.AD_NO_VIDEO,V),g.destroy(),g=null);if(b){b.video.pause();if(b.social){var a=VideoJS.getChildByClass(b.social,"vjs-social-close");a&&VideoJS.removeAllListeners(a)}b.emailButton&&VideoJS.removeListener(b.emailButton,"click",ia);b.shareButton&&VideoJS.removeListener(b.shareButton,"click",ja);b.twitterButton&&
VideoJS.removeListener(b.twitterButton,"click",ka);b.embedButton&&VideoJS.removeListener(b.embedButton,"click",na);e.showMenu&&b.menuControl&&VideoJS.removeListener(b.menuControl,"click",ma);b.removeVideoListener("loadeddata",da);b.removeVideoListener("play",oa);b.removeVideoListener("pause",pa);b.removeVideoListener("ended",qa);b.removeVideoListener("loadedmetadata",la);b.removeVideoListener("waiting",Y);b.removeVideoListener("timeupdate",ba);b.removeVideoListener("loadstart",v);VideoJS.removeAllListeners(b.video);
VideoJS.removeAllListeners(b.box);VideoJS.removeAllListeners(b.playControl);VideoJS.removeAllListeners(b.bigPlayButton);VideoJS.removeAllListeners(b.progressHolder);VideoJS.removeAllListeners(b.volumeControl);VideoJS.removeAllListeners(b.fullscreenControl);b.poster&&VideoJS.removeAllListeners(b.poster);b.stopTrackingBuffered();b.stopTrackingCurrentTime();b.currentTimeInterval=0;b.play=b.pause=null;b.currentTimeListeners=b.bufferedListeners=b.resizeListeners=null;b.video.src="";b.video.removeAttribute("autoplay");
b.video.innerHTML="";try{b.video.load()}catch(d){}b.box.innerHTML="";b.video=null;u=!1;b=null}c=b=null}};c.getAdCallCount=function(){return g?g.getCallCount():null};c.isDestroyed=function(){return M};var ra=function(a,c){var d=EndPlayVideo.getVOCopy(c,EndPlayVideo.vo.OmnitureVideoVO);d.vidName=h?EndPlayVideo.vo.OmnitureVideoVO.PREFIX_LIVE:EndPlayVideo.vo.OmnitureVideoVO.PREFIX_RECORDED;d.vidName+=a;d.vidType=h?EndPlayVideo.vo.OmnitureVideoVO.LIVE:EndPlayVideo.vo.OmnitureVideoVO.RECORDED;d.vidPlayerID=
EndPlayVideo.Settings.PLAYER_NAME_HTML5;var e=EndPlayVideo.isNull,f=EndPlayVideo.view.OmnitureMediator;e(d.vidPersonality)&&a&&(d.vidPersonality=f.getPersonality(a));if(e(d.vidPubDate)&&a&&(d.vidPubDate=f.getPubDate(a),(e(d.vidPubDate)||"n/a"==d.vidPubDate)&&b.video.poster))d.vidPubDate=f.getPubDate(b.video.poster);f.adjustVidName(d);return d};c.isLive=function(){return l.isAdPlaying()?!1:h};c.isIOS=function(){return k};c.currentSeconds=function(){return z};c.totalSeconds=function(){return s};c.videoJS=
function(){return b};c.video=function(){return b.video};c.model=function(){return l};c.isReady=function(){return u};var va=function(a,b){var c=!1;switch(a){case 3:c=!0;break;case 2:c=!b;break;case 1:c=b;break;default:c=!1}return c}};EndPlayVideo.extend(EndPlayVideo.view.PlayerHTML5,SimpleEventDispatcher);EndPlayVideo.view.PlayerHTML5.getAdProxyPath=function(a,e){var c=e?e.lastIndexOf("?"):-1;e&&-1==c&&(e+="?");return e?e+"url="+encodeURIComponent(a)+"&mime=xml":a};EndPlayVideo.view.OmnitureMediator=function(a,e,c,d,b){var k,m,j,h=!1,i=!1,n=0,f=!1,r=!1,g=!1,l,z,s=0,q=0,o=!1,C=!1;this.destroy=function(){if(o){var b=a.videoJS();b.progressHolder&&(VideoJS.removeListener(b.progressHolder,"mousedown",t),VideoJS.removeListener(document,"mouseup",y));b.removeVideoListener("seeking",x);b.removeVideoListener("seeked",H);a.removeListener(EndPlayVideo.events.PlayerEvent.TIME_UPDATE,A);a.removeListener(EndPlayVideo.events.PlayerEvent.MEDIA_END,E);a.removeListener(EndPlayVideo.events.PlayerEvent.PLAY,
u);j=null}o=!1};var t=function(){a.videoJS().seekEnabled&&F()&&h&&(g=!0)},y=function(){a.videoJS().seekEnabled&&F()&&h&&f&&g&&!r&&(r=!0)},E=function(){F()&&(h=!1,i=!0,f=!1,!C&&!a.isLive()&&B())};this.pushPlay=function(){u()};var u=function(){F()&&(C=i=!1)},x=function(){F()&&h&&(!f&&g&&(l=p(),z=s-n),f=!0,r=!1)},H=function(){F()&&h&&f&&g&&!r&&(r=!0)},A=function(b){if(F())if(s=b.currentTime,q=b.currentDuration,!f&&!i){var o=a.isLive();!h&&0<s&&(m=1,j={},d.isAdPlaying()?e.trackAdStart(c):e.trackVideoStart(c),
h=!0,C=i=!1);b=k*m;if(o=(o?s:G())>=b)o="interval"+b,o=!(j.hasOwnProperty(o)&&j[o]);if(o){if(a.isLive())d.isAdPlaying()||e.trackLiveTimeCheck(c,k),300==b&&(k=300,m=1);else switch(o=s-n,n=s,b){case 25:d.isAdPlaying()||e.trackVideo25Percent(c,o);break;case 50:d.isAdPlaying()||e.trackVideo50Percent(c,o);break;case 75:d.isAdPlaying()||e.trackVideo75Percent(c,o);break;case 100:B(o);break;default:throw Error("EndPlayVideo.view.OmnitureMediator::_checkTrackingInterval still increasing!");}j["interval"+b]=
!0;!a.isLive()&&100==b?(i=!0,h=!1):m++}}else f&&r&&!i&&F()&&f&&r&&(0>z&&(z=0),d.isAdPlaying()||e.trackVideoSeek(c,z),n=s,a.isLive()||(s=a.currentSeconds(),q=a.totalSeconds()),b=p(),l!=b&&(m=b,j={}),g=r=f=!1)},B=function(a){isNaN(a)&&(a=s-n,n=s);d.isAdPlaying()?e.trackAdComplete(c,a):e.trackVideoComplete(c,a);C=!0},p=function(){var a=G();return 25>a?1:50>a?2:75>a?3:4},G=function(){var a=0;0<q&&(a=100*(s/q));return a},F=function(){return b&&!d.isAdPlaying()||!b&&d.isAdPlaying()};(function(){k=a.isLive()?
60:25;var b=a.videoJS();b.progressHolder&&(VideoJS.addListener(b.progressHolder,"mousedown",t),VideoJS.addListener(document,"mouseup",y));b.addVideoListener("seeking",x);b.addVideoListener("seeked",H);a.addListener(EndPlayVideo.events.PlayerEvent.TIME_UPDATE,A);a.addListener(EndPlayVideo.events.PlayerEvent.MEDIA_END,E);a.addListener(EndPlayVideo.events.PlayerEvent.PLAY,u);o=!0})()};
EndPlayVideo.view.OmnitureMediator.getPersonality=function(a){var e=(new EndPlayVideo.utils.SourceInfo(a)).host,c,d=e,b;try{c=a.split("://")[1].split("/")[1]}catch(k){}if(c)try{b=-1!=c.indexOf("share")?e+":"+c.split("share")[1].toUpperCase():e}catch(m){}EndPlayVideo.isNull(b)||(d=b);return d};EndPlayVideo.view.OmnitureMediator.getPubDate=function(a){for(var a=a.split("/"),e="n/a",c=a.length,d;c--;)try{if(1900<Number(a[c])){d=[a[c],a[c+1],a[c+2]].join("_");break}}catch(b){}null!=d&&(e=d);return e};
EndPlayVideo.view.OmnitureMediator.adjustVidName=function(a){var e=EndPlayVideo.isNull;"n/a"!=a.vidName&&!e(a.vidName)&&"n/a"!=a.vidPubDate&&!e(a.vidPubDate)&&(a.vidName+=" | "+a.vidPubDate)};EndPlayVideo.view.EmailFormMediator=function(a,e,c){this.init=function(){a.innerHTML='<h3>Email to Friend</h3><fieldset><ol><li><label>From</label><input type="text" class="endplay-css-form-fromName"></li><li><label>Your Email</label><input type="text" class="endplay-css-form-fromEmail"></li><li><label>Send to</label><input type="text" class="endplay-css-form-toEmail"></li><li><label>Subject</label><input type="text" class="endplay-css-form-subject"></li><li><textarea name="" cols="" rows="2" class="endplay-css-form-body"></textarea></li><li style="float: right"><button class="endplay-css-form-sendButton">Email</button></li><li><button class="endplay-css-form-copyButton">Copy Link to Story</button></li></ol></fieldset>';
(function(d){for(var b=d(a),k=b.find("input.endplay-css-form-fromName").first(),m=b.find("input.endplay-css-form-fromEmail").first(),j=b.find("input.endplay-css-form-toEmail").first(),h=b.find("input.endplay-css-form-subject").first(),i=b.find("textarea.endplay-css-form-body").first(),n=b.find("button.endplay-css-form-sendButton").first(),b=b.find("button.endplay-css-form-copyButton").first(),f=[k,m,j,h,h,i],r=function(a){a.val("");a.blur(g).keydown(g)},g=function(){for(var a=0,b=f.length;a<b;a++){var c=
f[a].val();if(!(c&&""!=VideoJS.trim(c))){l(!0);return}}l(!1)},l=function(a){n.attr("disabled",a).toggleClass("disabled",a);return n},z=0,s=f.length;z<s;z++)r(f[z]);l(!0);n.click(function(a){l(!0);var b={};b.subject=h.val();b.storyUrl=c;b.to=j.val();b.fromName=k.val();b.fromEmail=m.val();b.message=i.val();d.ajax({type:"GET",url:e,dataType:"text",data:b,success:function(){for(var a=0,b=f.length;a<b;a++)f[a].val("");alert("Your email was sent.")},error:function(){alert("There was an error sending the email");
l(!1)}});a.preventDefault()});b.zclip({path:EndPlayVideo.Settings.PATH+"swf/plugins/ZeroClipboard.swf",copy:function(){return c}})})(window.jQuery)};this.init()};EndPlayVideo.view.EmbedFormMediator=function(a,e){this.init=function(){a.innerHTML='<fieldset><ol><li><span>Width</span></li><li class="endplay-css-form-widthValue"><input type="text" size="2" maxlength="3" value="562"><span class="offFocus"></span></li> <li style="margin-left: 10px;"><span>Height</span></li> <li class="endplay-css-form-heightValue"><input type="text" size="2" maxlength="3" value="316"><span class="offFocus"></span></li> <li class="actionBtn"><button class="endplay-css-form-copyButton">Copy Embed Code</button></li></ol></fieldset>';
(function(c){for(var c=c(a),d=c.find("li.endplay-css-form-widthValue").first(),b=c.find("li.endplay-css-form-heightValue").first(),c=c.find("button.endplay-css-form-copyButton").first(),d=[d,b],b=function(a){var b=a.find("input").first(),c=a.find("span").first();c.click(function(){k(c,b,!0);b.focus()}).text(b.val());a=function(){c.text(b.val());k(c,b,!1)};b.blur(a).focusout(a).keydown(function(){c.text(b.val())});k(c,b,!1)},k=function(a,b,c){b.toggle(c);a.toggle(!c)},m=0,j=d.length;m<j;m++)b(d[m]);
c.zclip({path:EndPlayVideo.Settings.PATH+"swf/plugins/ZeroClipboard.swf",copy:function(){return e}})})(window.jQuery)};this.init()};EndPlayVideo.utils.RatioUtil=function(){var a=this;this.widthToHeight=function(a){return a.width/a.height};this.heightToWidth=function(a){return a.height/a.width};this.scaleWidth=function(c,d,b){null==b&&(b=!0);return e(c,d*a.widthToHeight(c),d,b)};this.scaleHeight=function(c,d,b){null==b&&(b=!0);return e(c,d,d*a.heightToWidth(c),b)};this.scaleToFit=function(c,d,b){null==b&&(b=!0);var e=a.scaleHeight(c,d.width,b);e.height>d.height&&(e=a.scaleWidth(c,d.height,b));return e};var e=function(a,d,b,e){null==
e&&(e=!0);a=a.clone();a.width=e?Math.round(d):d;a.height=e?Math.round(b):b;return a}};EndPlayVideo.utils.RatioUtil.Size=function(a,e){this.width=a;this.height=e;this.clone=function(){return new EndPlayVideo.utils.RatioUtil.Size(this.width,this.height)};return this};EndPlayVideo.utils.ScreenUtil=function(){var a=window,e=document;this.getWindowWidth=function(){return null!=a.innerWidth?a.innerWidth:e.documentElement&&e.documentElement.clientWidth?e.documentElement.clientWidth:null!=e.body?e.body.clientWidth:null};this.getWindowHeight=function(){return null!=a.innerHeight?a.innerHeight:e.documentElement&&e.documentElement.clientHeight?e.documentElement.clientHeight:null!=e.body?e.body.clientHeight:null}};EndPlayVideo.utils.SourceInfo=function(a){this.src=null;if(null!=a){this.src=""+a;a=this.src.toLowerCase();this.protocol=a.substring(0,a.indexOf("://"));var e=a.split("://");this.host=1<e.length?(""+e[1]).split("/")[0]:null;e=a.lastIndexOf("/");this.fileName=a.substring(e+1);a=a.split("?");this.extension=a[0].substring(a[0].lastIndexOf(".")+1)}};var JSON;JSON||(JSON={});
(function(){function a(a){return 10>a?"0"+a:a}function e(a){b.lastIndex=0;return b.test(a)?'"'+a.replace(b,function(a){var b=j[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function c(a,b){var d,j,g,l,z=k,s,q=b[a];q&&"object"===typeof q&&"function"===typeof q.toJSON&&(q=q.toJSON(a));"function"===typeof h&&(q=h.call(b,a,q));switch(typeof q){case "string":return e(q);case "number":return isFinite(q)?""+q:"null";case "boolean":case "null":return""+q;
case "object":if(!q)return"null";k+=m;s=[];if("[object Array]"===Object.prototype.toString.apply(q)){l=q.length;for(d=0;d<l;d+=1)s[d]=c(d,q)||"null";g=0===s.length?"[]":k?"[\n"+k+s.join(",\n"+k)+"\n"+z+"]":"["+s.join(",")+"]";k=z;return g}if(h&&"object"===typeof h){l=h.length;for(d=0;d<l;d+=1)"string"===typeof h[d]&&(j=h[d],(g=c(j,q))&&s.push(e(j)+(k?": ":":")+g))}else for(j in q)Object.prototype.hasOwnProperty.call(q,j)&&(g=c(j,q))&&s.push(e(j)+(k?": ":":")+g);g=0===s.length?"{}":k?"{\n"+k+s.join(",\n"+
k)+"\n"+z+"}":"{"+s.join(",")+"}";k=z;return g}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var d=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
b=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,k,m,j={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,b,d){var e;m=k="";if("number"===typeof d)for(e=0;e<d;e+=1)m+=" ";else"string"===typeof d&&(m=d);if((h=b)&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length))throw Error("JSON.stringify");return c("",
{"":a})});"function"!==typeof JSON.parse&&(JSON.parse=function(a,b){function c(a,d){var e,h,i=a[d];if(i&&"object"===typeof i)for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(h=c(i,e),void 0!==h?i[e]=h:delete i[e]);return b.call(a,d,i)}var e,a=""+a;d.lastIndex=0;d.test(a)&&(a=a.replace(d,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof b?c({"":e},""):e;throw new SyntaxError("JSON.parse");})})();window.Spit={};Spit.props=function(a,e,c){Spit.log(Spit.getPropString(arguments))};Spit.getPropString=function(a,e,c){var d="\nSpit.props "+a+" {";null==e&&(e="\n\t");null==c&&(c="");for(prop in a)d+=e+prop+": "+a[prop]+c;return d+"\n}"};Spit.log=function(a){"undefined"!=typeof console&&"function"==typeof console.log&&console.log(a)};
/* EndPlayVideo Framework END*/
/* Hybrid Video Extension START */
(function(e){e.HybridVideo=function(f,g){e.apply(this,[f,g,!0]);var c=this;c.playVideo=function(b){var a=function(b){var a=c.getCurrentConfig();a.expander&&(a.expander.isExpanded=c.isExpanded());a.ads&&(a.ads.adCallCount=c.getAdCallCount());var d;a.flash?d=a.flash.wmode:a.singleSource&&(d=a.singleSource.wmode);a.singleSource=new EndPlayVideo.vo.FlashVO;a.singleSource.source=b;d&&(a.singleSource.wmode=d);a.flash=null;a.mp4=null;a.webm=null;a.ogg=null;a.rtsp=null;a.http=null;a.poster="none";return a};
if(b)if("object"===typeof b)if(b.constructor===Array&&0<b.length){var a=a(b[0]),d=b.length;1<d&&(a.poster=b[1]);3<d&&(a.story=b[3]);4<d&&(a.autoPlay=Boolean(b[4]));5<d&&(a.embeddable=Boolean(b[5]));6<d&&(a.category=b[6],a.omniture&&(a.omniture.category=a.category));7<d&&(a.title=b[7]);8<d&&(a.headline=b[8]);9<d&&(a.toggleVideoCode=parseInt(b[9]));c.reset(a)}else c.reset(b);else"string"===typeof b&&c.reset(a(b))};c.hibernatePlayer=function(b){b?c.pause():c.play()};var h=c.toggleExpand;c.toggleExpand=
function(b){h(b);if(f.expander)if(b)try{window.doublePlayerOSMF(c.getPlayerID())}catch(a){Spit.log("Caught Error from global function doublePlayerOSMF: "+a)}else try{window.singlePlayerOSMF(c.getPlayerID())}catch(d){Spit.log("Caught Error from global function singlePlayerOSMF: "+d)}};var i=c.reset;c.reset=function(b){var a=EndPlayVideo.isNull,d,c,e,f;try{d=b.poster}catch(g){}try{c=b.version}catch(h){}try{e=b.adFrequency}catch(j){}try{f=b.adDelay}catch(k){}b&&(b.poster=a(d)?"none":d,a(c)&&(b.version=
EndPlayVideo.Settings.VERSION.replace(".","_")),a(b.controlsBelow)&&(b.controlsBelow=!0),a(b.controlsHiding)&&(b.controlsHiding=!1),b.ads&&(a(e)||(b.ads.adFrequency=e),a(f)||(b.ads.adDelay=f)));!1!==b.omniture&&a(b.omniture)&&(b.omniture=!0);i(b)};f&&g&&c._init()};e.extend(e.HybridVideo,e)})(this.EndPlayVideo);
/* HybridVideo Extension END */
/* Global Player Functions START */
function doublePlayerOSMF(b){var a=EndPlayVideo.getPlayerById(b);if(a){try{deferRepoAdsFix()}catch(i){}var e=jQuery(a.getContainer());if(e.parents(".media1, .media4").length>0){var h=e.parents(".content").children(".col2");var d=e.parents(".ui-tabs-panel").find(".col1");h.css("display","none");d.css("height","auto");var j=d.find("#abstract");j.css("display","block");var c=e.parents(".content").children(".footer");c.find(".col2").hide()}e.addClass("larger");if(e.parents(".ui-tabs-panel").length){e.parents(".ui-tabs-panel")[0].doubleSize=true}var g=e.parents(".media2");if(g.length>0){var f=4*_scrollAfter;g.addClass("double");g.find("div.playlist ol").each(function(){var o=0,m=$(this).children("li");for(var n=0,k=m.length;n<k;n++){if(!(n%f)){o=m[n].offsetLeft}if($(m[n]).hasClass("playing")){break}}this.style.left=-o+"px"})}}else{doublePlayer(b)}}function singlePlayerOSMF(b){var a=EndPlayVideo.getPlayerById(b);if(a){var h=jQuery(a.getContainer());if(h.parents(".media1, .media4").length>0){var k=h.parents(".content").children(".col2");var g=h.parents(".ui-tabs-panel").find(".col1");var m=g.find("#abstract");m.css("display","none");k.css("display","block");var f=h.parents(".content").children(".footer");f.find(".col2").show()}h.removeClass("larger");if(h.parents(".ui-tabs-panel").length){h.parents(".ui-tabs-panel")[0].doubleSize=false}var j=h.parents(".media2");if(j.length>0){var i=2*_scrollAfter;j.removeClass("double");j.find("div.playlist ol").each(function(){var q=0,o=$(this).children("li");for(var p=0,n=o.length;p<n;p++){if(!(p%i)){q=o[p].offsetLeft;console.log(p,q)}if($(o[p]).hasClass("playing")){console.log(o[p].className,o[p].offsetLeft,p,q);break}}this.style.left=-q+"px"})}var e=h.attr("id");var d="photo"+e.substring(e.lastIndexOf("_"));var g=h.parents(".ui-tabs-panel").find(".col1");var c=g.find("#"+d);c.find(".photo").removeClass("larger");c.find(".regularphoto").removeClass("largerCaption");c.find("img.imgBtn86x22").attr("src","/images/btn-largePhoto.gif").attr("alt","Large Photo");try{deferRepoAdsFix()}catch(l){}}else{singlePlayer(b)}}var _getSWF=getSWF;getSWF=function(b){var a=EndPlayVideo.getPlayerById(b);if(a){return a}else{if(_getSWF&&(typeof _getSWF)==="function"){return _getSWF(b)}}};var _getStoredVideoPlayerProperties=getStoredVideoPlayerProperties;function getStoredVideoPlayerProperties(b){var a=EndPlayVideo.getPlayerById(b);if(a){return a.getCurrentConfig()}else{if(_getStoredVideoPlayerProperties&&(typeof _getStoredVideoPlayerProperties)==="function"){return _getStoredVideoPlayerProperties(b)}}}var _playNext=playNext;playNext=function(d){var c=EndPlayVideo.getPlayerById(d);if(c){if(typeof(playListID)=="undefined"){var b=jQuery(c.getContainer()).parents(".media2");var a=b.hasClass("double")?(4*_scrollAfter):(2*_scrollAfter);if(b.length>0){b.find("div.playlist ol").each(function(){var h=0,f=$(this).children("li"),j=false;for(var g=0,e=f.length;g<e;g++){if(!(g%a)){h=f[g].offsetLeft}if(j){$(f[g]).find("a").click();break}if($(f[g]).hasClass("playing")){if(g==e-1){c.playPost()}else{j=true}}}$(this).animate({left:-h},500)})}}else{var b=jQuery("#"+playListID);if(b.length>0){b.find("div.playlist li.playing").next().find("a").click()}}}else{if(_playNext&&(typeof _playNext)==="function"){_playNext(d)}}};
/* Global Player Functions END */
/* SWFObject 2.2 START */
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
/* SWFObject 2.2 END */
(function(A){A.fn.zclip=function(C){if(typeof C=="object"&&!C.length){var B=A.extend({path:"ZeroClipboard.swf",copy:null,beforeCopy:null,afterCopy:null,clickAfter:true,setHandCursor:true,setCSSEffects:true},C);
return this.each(function(){var D=A(this);
if(D.is(":visible")&&(typeof B.copy=="string"||A.isFunction(B.copy))){ZeroClipboard.setMoviePath(B.path);
var E=new ZeroClipboard.Client();
if(A.isFunction(B.copy)){D.bind("zClip_copy",B.copy)
}if(A.isFunction(B.beforeCopy)){D.bind("zClip_beforeCopy",B.beforeCopy)
}if(A.isFunction(B.afterCopy)){D.bind("zClip_afterCopy",B.afterCopy)
}E.setHandCursor(B.setHandCursor);
E.setCSSEffects(B.setCSSEffects);
E.addEventListener("mouseOver",function(F){D.trigger("mouseenter")
});
E.addEventListener("mouseOut",function(F){D.trigger("mouseleave")
});
E.addEventListener("mouseDown",function(F){D.trigger("mousedown");
if(!A.isFunction(B.copy)){E.setText(B.copy)
}else{E.setText(D.triggerHandler("zClip_copy"))
}if(A.isFunction(B.beforeCopy)){D.trigger("zClip_beforeCopy")
}});
E.addEventListener("complete",function(G,F){if(A.isFunction(B.afterCopy)){D.trigger("zClip_afterCopy")
}else{if(F.length>500){F=F.substr(0,500)+"...\n\n("+(F.length-500)+" characters not shown)"
}D.removeClass("hover");
alert("Copied text to clipboard:\n\n "+F)
}if(B.clickAfter){D.trigger("click")
}});
E.glue(D[0],D.parent()[0]);
A(window).bind("load resize",function(){E.reposition()
})
}})
}else{if(typeof C=="string"){return this.each(function(){var D=A(this);
C=C.toLowerCase();
var E=D.data("zclipId");
var F=A("#"+E+".zclip");
if(C=="remove"){F.remove();
D.removeClass("active hover")
}else{if(C=="hide"){F.hide();
D.removeClass("active hover")
}else{if(C=="show"){F.show()
}}}})
}}}
})(jQuery);
var ZeroClipboard={version:"1.0.7",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(A){if(typeof (A)=="string"){A=document.getElementById(A)
}if(!A.addClass){A.hide=function(){this.style.display="none"
};
A.show=function(){this.style.display=""
};
A.addClass=function(B){this.removeClass(B);
this.className+=" "+B
};
A.removeClass=function(D){var C=this.className.split(/\s+/);
var B=-1;
for(var E=0;
E<C.length;
E++){if(C[E]==D){B=E;
E=C.length
}}if(B>-1){C.splice(B,1);
this.className=C.join(" ")
}return this
};
A.hasClass=function(B){return !!this.className.match(new RegExp("\\s*"+B+"\\s*"))
}
}return A
},setMoviePath:function(A){this.moviePath=A
},dispatch:function(C,A,D){var B=this.clients[C];
if(B){B.receiveEvent(A,D)
}},register:function(A,B){this.clients[A]=B
},getDOMObjectPosition:function(C,B){var A={left:0,top:0,width:C.width?C.width:C.offsetWidth,height:C.height?C.height:C.offsetHeight};
if(C&&(C!=B)){A.left+=C.offsetLeft;
A.top+=C.offsetTop
}return A
},Client:function(A){this.handlers={};
this.id=ZeroClipboard.nextId++;
this.movieId="ZeroClipboardMovie_"+this.id;
ZeroClipboard.register(this.id,this);
if(A){this.glue(A)
}}};
ZeroClipboard.Client.prototype={id:0,ready:false,movie:null,clipText:"",handCursorEnabled:true,cssEffects:true,handlers:null,glue:function(E,A,D){this.domElement=ZeroClipboard.$(E);
var C=99;
if(this.domElement.style.zIndex){C=parseInt(this.domElement.style.zIndex,10)+1
}if(typeof (A)=="string"){A=ZeroClipboard.$(A)
}else{if(typeof (A)=="undefined"){A=document.getElementsByTagName("body")[0]
}}var F=ZeroClipboard.getDOMObjectPosition(this.domElement,A);
this.div=document.createElement("div");
this.div.className="zclip";
this.div.id="zclip-"+this.movieId;
$(this.domElement).data("zclipId","zclip-"+this.movieId);
var B=this.div.style;
B.position="absolute";
B.left=""+F.left+"px";
B.top=""+F.top+"px";
B.width=""+F.width+"px";
B.height=""+F.height+"px";
B.zIndex=C;
if(typeof (D)=="object"){for(addedStyle in D){B[addedStyle]=D[addedStyle]
}}A.appendChild(this.div);
this.div.innerHTML=this.getHTML(F.width,F.height)
},getHTML:function(D,B){var E="";
var A="id="+this.id+"&width="+D+"&height="+B;
if(navigator.userAgent.match(/MSIE/)){var C=location.href.match(/^https/i)?"https://":"http://";
E+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+C+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+D+'" height="'+B+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+A+'"/><param name="wmode" value="transparent"/></object>'
}else{E+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+D+'" height="'+B+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+A+'" wmode="transparent" />'
}return E
},hide:function(){if(this.div){this.div.style.left="-2000px"
}},show:function(){this.reposition()
},destroy:function(){if(this.domElement&&this.div){this.hide();
this.div.innerHTML="";
var B=document.getElementsByTagName("body")[0];
try{B.removeChild(this.div)
}catch(A){}this.domElement=null;
this.div=null
}},reposition:function(C){if(C){this.domElement=ZeroClipboard.$(C);
if(!this.domElement){this.hide()
}}if(this.domElement&&this.div){var A=ZeroClipboard.getDOMObjectPosition(this.domElement);
var B=this.div.style;
B.left=""+A.left+"px";
B.top=""+A.top+"px"
}},setText:function(A){this.clipText=A;
if(this.ready){this.movie.setText(A)
}},addEventListener:function(B,A){B=B.toString().toLowerCase().replace(/^on/,"");
if(!this.handlers[B]){this.handlers[B]=[]
}this.handlers[B].push(A)
},setHandCursor:function(A){this.handCursorEnabled=A;
if(this.ready){this.movie.setHandCursor(A)
}},setCSSEffects:function(A){this.cssEffects=!!A
},receiveEvent:function(F,E){F=F.toString().toLowerCase().replace(/^on/,"");
switch(F){case"load":this.movie=document.getElementById(this.movieId);
if(!this.movie){var G=this;
setTimeout(function(){G.receiveEvent("load",null)
},1);
return 
}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){var G=this;
setTimeout(function(){G.receiveEvent("load",null)
},100);
this.ready=true;
return 
}this.ready=true;
try{this.movie.setText(this.clipText)
}catch(C){}try{this.movie.setHandCursor(this.handCursorEnabled)
}catch(C){}break;
case"mouseover":if(this.domElement&&this.cssEffects){this.domElement.addClass("hover");
if(this.recoverActive){this.domElement.addClass("active")
}}break;
case"mouseout":if(this.domElement&&this.cssEffects){this.recoverActive=false;
if(this.domElement.hasClass("active")){this.domElement.removeClass("active");
this.recoverActive=true
}this.domElement.removeClass("hover")
}break;
case"mousedown":if(this.domElement&&this.cssEffects){this.domElement.addClass("active")
}break;
case"mouseup":if(this.domElement&&this.cssEffects){this.domElement.removeClass("active");
this.recoverActive=false
}break
}if(this.handlers[F]){for(var A=0,B=this.handlers[F].length;
A<B;
A++){var D=this.handlers[F][A];
if(typeof (D)=="function"){D(this,E)
}else{if((typeof (D)=="object")&&(D.length==2)){D[0][D[1]](this,E)
}else{if(typeof (D)=="string"){window[D](this,E)
}}}}}}};