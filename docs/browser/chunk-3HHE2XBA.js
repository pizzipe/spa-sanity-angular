import{d as Re}from"./chunk-USDYGGWM.js";var be=Re((se,Y)=>{"use strict";(function(w){"use strict";var O=w.setTimeout,M=w.clearTimeout,T=w.XMLHttpRequest,de=w.XDomainRequest,ue=w.ActiveXObject,z=w.EventSource,N=w.document,De=w.Promise,K=w.fetch,ce=w.Response,Z=w.TextDecoder,le=w.TextEncoder,k=w.AbortController;if(typeof window<"u"&&typeof N<"u"&&!("readyState"in N)&&N.body==null&&(N.readyState="loading",window.addEventListener("load",function(e){N.readyState="complete"},!1)),T==null&&ue!=null&&(T=function(){return new ue("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(e){function r(){}return r.prototype=e,new r}),Date.now||(Date.now=function(){return new Date().getTime()}),k==null){var Fe=K;K=function(e,r){var n=r.signal;return Fe(e,{headers:r.headers,credentials:r.credentials,cache:r.cache}).then(function(t){var i=t.body.getReader();return n._reader=i,n._aborted&&n._reader.cancel(),{status:t.status,statusText:t.statusText,headers:t.headers,body:{getReader:function(){return i}}}})},k=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function ve(){this.bitsNeeded=0,this.codePoint=0}ve.prototype.decode=function(e){function r(d,u,o){if(o===1)return d>=128>>u&&d<<u<=2047;if(o===2)return d>=2048>>u&&d<<u<=55295||d>=57344>>u&&d<<u<=65535;if(o===3)return d>=65536>>u&&d<<u<=1114111;throw new Error}function n(d,u){if(d===6*1)return u>>6>15?3:u>31?2:1;if(d===6*2)return u>15?3:2;if(d===6*3)return 3;throw new Error}for(var t=65533,i="",a=this.bitsNeeded,f=this.codePoint,c=0;c<e.length;c+=1){var s=e[c];a!==0&&(s<128||s>191||!r(f<<6|s&63,a-6,n(a,f)))&&(a=0,f=t,i+=String.fromCharCode(f)),a===0?(s>=0&&s<=127?(a=0,f=s):s>=192&&s<=223?(a=6*1,f=s&31):s>=224&&s<=239?(a=6*2,f=s&15):s>=240&&s<=247?(a=6*3,f=s&7):(a=0,f=t),a!==0&&!r(f,a,n(a,f))&&(a=0,f=t)):(a-=6,f=f<<6|s&63),a===0&&(f<=65535?i+=String.fromCharCode(f):(i+=String.fromCharCode(55296+(f-65535-1>>10)),i+=String.fromCharCode(56320+(f-65535-1&1023))))}return this.bitsNeeded=a,this.codePoint=f,i};var xe=function(){try{return new Z().decode(new le().encode("test"),{stream:!0})==="test"}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1};(Z==null||le==null||!xe())&&(Z=ve);var _=function(){};function L(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=_,this.onload=_,this.onerror=_,this.onreadystatechange=_,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=_}L.prototype.open=function(e,r){this._abort(!0);var n=this,t=this._xhr,i=1,a=0;this._abort=function(o){n._sendTimeout!==0&&(M(n._sendTimeout),n._sendTimeout=0),(i===1||i===2||i===3)&&(i=4,t.onload=_,t.onerror=_,t.onabort=_,t.onprogress=_,t.onreadystatechange=_,t.abort(),a!==0&&(M(a),a=0),o||(n.readyState=4,n.onabort(null),n.onreadystatechange())),i=0};var f=function(){if(i===1){var o=0,l="",A=void 0;if("contentType"in t)o=200,l="OK",A=t.contentType;else try{o=t.status,l=t.statusText,A=t.getResponseHeader("Content-Type")}catch{o=0,l="",A=void 0}o!==0&&(i=2,n.readyState=2,n.status=o,n.statusText=l,n._contentType=A,n.onreadystatechange())}},c=function(){if(f(),i===2||i===3){i=3;var o="";try{o=t.responseText}catch{}n.readyState=3,n.responseText=o,n.onprogress()}},s=function(o,l){if((l==null||l.preventDefault==null)&&(l={preventDefault:_}),c(),i===1||i===2||i===3){if(i=4,a!==0&&(M(a),a=0),n.readyState=4,o==="load")n.onload(l);else if(o==="error")n.onerror(l);else if(o==="abort")n.onabort(l);else throw new TypeError;n.onreadystatechange()}},d=function(o){t!=null&&(t.readyState===4?(!("onload"in t)||!("onerror"in t)||!("onabort"in t))&&s(t.responseText===""?"error":"load",o):t.readyState===3?"onprogress"in t||c():t.readyState===2&&f())},u=function(){a=O(function(){u()},500),t.readyState===3&&c()};"onload"in t&&(t.onload=function(o){s("load",o)}),"onerror"in t&&(t.onerror=function(o){s("error",o)}),"onabort"in t&&(t.onabort=function(o){s("abort",o)}),"onprogress"in t&&(t.onprogress=c),"onreadystatechange"in t&&(t.onreadystatechange=function(o){d(o)}),("contentType"in t||!("ontimeout"in T.prototype))&&(r+=(r.indexOf("?")===-1?"?":"&")+"padding=true"),t.open(e,r,!0),"readyState"in t&&(a=O(function(){u()},0))},L.prototype.abort=function(){this._abort(!1)},L.prototype.getResponseHeader=function(e){return this._contentType},L.prototype.setRequestHeader=function(e,r){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(e,r)},L.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},L.prototype.send=function(){if((!("ontimeout"in T.prototype)||!("sendAsBinary"in T.prototype)&&!("mozAnon"in T.prototype))&&N!=null&&N.readyState!=null&&N.readyState!=="complete"){var e=this;e._sendTimeout=O(function(){e._sendTimeout=0,e.send()},4);return}var r=this._xhr;"withCredentials"in r&&(r.withCredentials=this.withCredentials);try{r.send(void 0)}catch(n){throw n}};function he(e){return e.replace(/[A-Z]/g,function(r){return String.fromCharCode(r.charCodeAt(0)+32)})}function pe(e){for(var r=Object.create(null),n=e.split(`\r
`),t=0;t<n.length;t+=1){var i=n[t],a=i.split(": "),f=a.shift(),c=a.join(": ");r[he(f)]=c}this._map=r}pe.prototype.get=function(e){return this._map[he(e)]},T!=null&&T.HEADERS_RECEIVED==null&&(T.HEADERS_RECEIVED=2);function ye(){}ye.prototype.open=function(e,r,n,t,i,a,f){e.open("GET",i);var c=0;e.onprogress=function(){var d=e.responseText,u=d.slice(c);c+=u.length,n(u)},e.onerror=function(d){d.preventDefault(),t(new Error("NetworkError"))},e.onload=function(){t(null)},e.onabort=function(){t(null)},e.onreadystatechange=function(){if(e.readyState===T.HEADERS_RECEIVED){var d=e.status,u=e.statusText,o=e.getResponseHeader("Content-Type"),l=e.getAllResponseHeaders();r(d,u,o,new pe(l))}},e.withCredentials=a;for(var s in f)Object.prototype.hasOwnProperty.call(f,s)&&e.setRequestHeader(s,f[s]);return e.send(),e};function Ee(e){this._headers=e}Ee.prototype.get=function(e){return this._headers.get(e)};function ge(){}ge.prototype.open=function(e,r,n,t,i,a,f){var c=null,s=new k,d=s.signal,u=new Z;return K(i,{headers:f,credentials:a?"include":"same-origin",signal:d,cache:"no-store"}).then(function(o){return c=o.body.getReader(),r(o.status,o.statusText,o.headers.get("Content-Type"),new Ee(o.headers)),new De(function(l,A){var W=function(){c.read().then(function(m){if(m.done)l(void 0);else{var y=u.decode(m.value,{stream:!0});n(y),W()}}).catch(function(m){A(m)})};W()})}).catch(function(o){if(o.name!=="AbortError")return o}).then(function(o){t(o)}),{abort:function(){c?.cancel(),s.abort()}}};function G(){this._listeners=Object.create(null)}function we(e){O(function(){throw e},0)}G.prototype.dispatchEvent=function(e){e.target=this;var r=this._listeners[e.type];if(r!=null)for(var n=r.length,t=0;t<n;t+=1){var i=r[t];try{typeof i.handleEvent=="function"?i.handleEvent(e):i.call(this,e)}catch(a){we(a)}}},G.prototype.addEventListener=function(e,r){e=String(e);var n=this._listeners,t=n[e];t==null&&(t=[],n[e]=t);for(var i=!1,a=0;a<t.length;a+=1)t[a]===r&&(i=!0);i||t.push(r)},G.prototype.removeEventListener=function(e,r){e=String(e);var n=this._listeners,t=n[e];if(t!=null){for(var i=[],a=0;a<t.length;a+=1)t[a]!==r&&i.push(t[a]);i.length===0?delete n[e]:n[e]=i}};function P(e){this.type=e,this.target=void 0}function Te(e,r){P.call(this,e),this.data=r.data,this.lastEventId=r.lastEventId}Te.prototype=Object.create(P.prototype);function ee(e,r){P.call(this,e),this.status=r.status,this.statusText=r.statusText,this.headers=r.headers}ee.prototype=Object.create(P.prototype);function me(e,r){P.call(this,e),this.error=r.error}me.prototype=Object.create(P.prototype);var te=-1,I=0,q=1,V=2,re=-1,H=0,ne=1,Ce=2,Oe=3,Ne=/^text\/event\-stream(;.*)?$/i,Ie=1e3,He=18e6,ae=function(e,r){var n=e==null?r:parseInt(e,10);return n!==n&&(n=r),ie(n)},ie=function(e){return Math.min(Math.max(e,Ie),He)},X=function(e,r,n){try{typeof r=="function"&&r.call(e,n)}catch(t){we(t)}};function R(e,r){G.call(this),r=r||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,Me(this,e,r)}function Le(){return T!=null&&"withCredentials"in T.prototype||de==null?new T:new de}var je=K!=null&&ce!=null&&"body"in ce.prototype;function Me(e,r,n){r=String(r);var t=!!n.withCredentials,i=n.lastEventIdQueryParameterName||"lastEventId",a=ie(1e3),f=ae(n.heartbeatTimeout,45e3),c="",s=a,d=!1,u=0,o=n.headers||{},l=n.Transport,A=je&&l==null?void 0:new L(l!=null?new l:Le()),W=l!=null&&typeof l!="string"?new l:A==null?new ge:new ye,m=void 0,y=0,b=te,U="",$="",D="",J="",E=H,oe=0,j=0,Pe=function(h,v,C,S){if(b===I)if(h===200&&C!=null&&Ne.test(C)){b=q,d=Date.now(),s=a,e.readyState=q;var g=new ee("open",{status:h,statusText:v,headers:S});e.dispatchEvent(g),X(e,e.onopen,g)}else{var p="";h!==200?(v&&(v=v.replace(/\s+/g," ")),p="EventSource's response has a status "+h+" "+v+" that is not 200. Aborting the connection."):p="EventSource's response has a Content-Type specifying an unsupported type: "+(C==null?"-":C.replace(/\s+/g," "))+". Aborting the connection.",fe();var g=new ee("error",{status:h,statusText:v,headers:S});e.dispatchEvent(g),X(e,e.onerror,g),console.error(p)}},qe=function(h){if(b===q){for(var v=-1,C=0;C<h.length;C+=1){var S=h.charCodeAt(C);(S===10||S===13)&&(v=C)}var g=(v!==-1?J:"")+h.slice(0,v+1);J=(v===-1?J:"")+h.slice(v+1),h!==""&&(d=Date.now(),u+=h.length);for(var p=0;p<g.length;p+=1){var S=g.charCodeAt(p);if(E===re&&S===10)E=H;else if(E===re&&(E=H),S===13||S===10){if(E!==H){E===ne&&(j=p+1);var F=g.slice(oe,j-1),x=g.slice(j+(j<p&&g.charCodeAt(j)===32?1:0),p);F==="data"?(U+=`
`,U+=x):F==="id"?$=x:F==="event"?D=x:F==="retry"?(a=ae(x,a),s=a):F==="heartbeatTimeout"&&(f=ae(x,f),y!==0&&(M(y),y=O(function(){Q()},f)))}if(E===H){if(U!==""){c=$,D===""&&(D="message");var B=new Te(D,{data:U.slice(1),lastEventId:$});if(e.dispatchEvent(B),D==="open"?X(e,e.onopen,B):D==="message"?X(e,e.onmessage,B):D==="error"&&X(e,e.onerror,B),b===V)return}U="",D=""}E=S===13?re:H}else E===H&&(oe=p,E=ne),E===ne?S===58&&(j=p+1,E=Ce):E===Ce&&(E=Oe)}}},_e=function(h){if(b===q||b===I){b=te,y!==0&&(M(y),y=0),y=O(function(){Q()},s),s=ie(Math.min(a*16,s*2)),e.readyState=I;var v=new me("error",{error:h});e.dispatchEvent(v),X(e,e.onerror,v),h!=null&&console.error(h)}},fe=function(){b=V,m!=null&&(m.abort(),m=void 0),y!==0&&(M(y),y=0),e.readyState=V},Q=function(){if(y=0,b!==te){if(!d&&m!=null)_e(new Error("No activity within "+f+" milliseconds. "+(b===I?"No response received.":u+" chars received.")+" Reconnecting.")),m!=null&&(m.abort(),m=void 0);else{var h=Math.max((d||Date.now())+f-Date.now(),1);d=!1,y=O(function(){Q()},h)}return}d=!1,u=0,y=O(function(){Q()},f),b=I,U="",D="",$=c,J="",oe=0,j=0,E=H;var v=r;if(r.slice(0,5)!=="data:"&&r.slice(0,5)!=="blob:"&&c!==""){var C=r.indexOf("?");v=C===-1?r:r.slice(0,C+1)+r.slice(C+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(x,B){return B===i?"":x}),v+=(r.indexOf("?")===-1?"?":"&")+i+"="+encodeURIComponent(c)}var S=e.withCredentials,g={};g.Accept="text/event-stream";var p=e.headers;if(p!=null)for(var F in p)Object.prototype.hasOwnProperty.call(p,F)&&(g[F]=p[F]);try{m=W.open(A,Pe,qe,_e,v,S,g)}catch(x){throw fe(),x}};e.url=r,e.readyState=I,e.withCredentials=t,e.headers=o,e._close=fe,Q()}R.prototype=Object.create(G.prototype),R.prototype.CONNECTING=I,R.prototype.OPEN=q,R.prototype.CLOSED=V,R.prototype.close=function(){this._close()},R.CONNECTING=I,R.OPEN=q,R.CLOSED=V,R.prototype.withCredentials=void 0;var Se=z;T!=null&&(z==null||!("withCredentials"in z.prototype))&&(Se=R),function(e){if(typeof Y=="object"&&typeof Y.exports=="object"){var r=e(se);r!==void 0&&(Y.exports=r)}else typeof define=="function"&&define.amd?define(["exports"],e):e(w)}(function(e){e.EventSourcePolyfill=R,e.NativeEventSource=z,e.EventSource=Se})})(typeof globalThis>"u"?typeof window<"u"?window:typeof self<"u"?self:se:globalThis)});var Xe=Re((Ue,Ae)=>{Ae.exports=be().EventSourcePolyfill});export default Xe();
