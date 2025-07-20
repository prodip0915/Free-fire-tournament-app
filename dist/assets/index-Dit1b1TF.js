(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const h of l)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const h={};return l.integrity&&(h.integrity=l.integrity),l.referrerPolicy&&(h.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?h.credentials="include":l.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(l){if(l.ep)return;l.ep=!0;const h=i(l);fetch(l.href,h)}})();function g0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yd={exports:{}},fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y;function D1(){if(_y)return fl;_y=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,l,h){var d=null;if(h!==void 0&&(d=""+h),l.key!==void 0&&(d=""+l.key),"key"in l){h={};for(var g in l)g!=="key"&&(h[g]=l[g])}else h=l;return l=h.ref,{$$typeof:s,type:a,key:d,ref:l!==void 0?l:null,props:h}}return fl.Fragment=e,fl.jsx=i,fl.jsxs=i,fl}var yy;function M1(){return yy||(yy=1,yd.exports=D1()),yd.exports}var ee=M1(),vd={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy;function k1(){if(vy)return pe;vy=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),I=Symbol.iterator;function O(R){return R===null||typeof R!="object"?null:(R=I&&R[I]||R["@@iterator"],typeof R=="function"?R:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,ie={};function te(R,Y,$){this.props=R,this.context=Y,this.refs=ie,this.updater=$||Q}te.prototype.isReactComponent={},te.prototype.setState=function(R,Y){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,Y,"setState")},te.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function xe(){}xe.prototype=te.prototype;function Se(R,Y,$){this.props=R,this.context=Y,this.refs=ie,this.updater=$||Q}var fe=Se.prototype=new xe;fe.constructor=Se,K(fe,te.prototype),fe.isPureReactComponent=!0;var Ee=Array.isArray,de={H:null,A:null,T:null,S:null,V:null},je=Object.prototype.hasOwnProperty;function k(R,Y,$,X,ae,me){return $=me.ref,{$$typeof:s,type:R,key:Y,ref:$!==void 0?$:null,props:me}}function S(R,Y){return k(R.type,Y,void 0,void 0,void 0,R.props)}function C(R){return typeof R=="object"&&R!==null&&R.$$typeof===s}function D(R){var Y={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function($){return Y[$]})}var M=/\/+/g;function L(R,Y){return typeof R=="object"&&R!==null&&R.key!=null?D(""+R.key):Y.toString(36)}function w(){}function It(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(w,w):(R.status="pending",R.then(function(Y){R.status==="pending"&&(R.status="fulfilled",R.value=Y)},function(Y){R.status==="pending"&&(R.status="rejected",R.reason=Y)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function it(R,Y,$,X,ae){var me=typeof R;(me==="undefined"||me==="boolean")&&(R=null);var he=!1;if(R===null)he=!0;else switch(me){case"bigint":case"string":case"number":he=!0;break;case"object":switch(R.$$typeof){case s:case e:he=!0;break;case b:return he=R._init,it(he(R._payload),Y,$,X,ae)}}if(he)return ae=ae(R),he=X===""?"."+L(R,0):X,Ee(ae)?($="",he!=null&&($=he.replace(M,"$&/")+"/"),it(ae,Y,$,"",function(Fn){return Fn})):ae!=null&&(C(ae)&&(ae=S(ae,$+(ae.key==null||R&&R.key===ae.key?"":(""+ae.key).replace(M,"$&/")+"/")+he)),Y.push(ae)),1;he=0;var yt=X===""?".":X+":";if(Ee(R))for(var Xe=0;Xe<R.length;Xe++)X=R[Xe],me=yt+L(X,Xe),he+=it(X,Y,$,me,ae);else if(Xe=O(R),typeof Xe=="function")for(R=Xe.call(R),Xe=0;!(X=R.next()).done;)X=X.value,me=yt+L(X,Xe++),he+=it(X,Y,$,me,ae);else if(me==="object"){if(typeof R.then=="function")return it(It(R),Y,$,X,ae);throw Y=String(R),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return he}function V(R,Y,$){if(R==null)return R;var X=[],ae=0;return it(R,X,"","",function(me){return Y.call($,me,ae++)}),X}function Z(R){if(R._status===-1){var Y=R._result;Y=Y(),Y.then(function($){(R._status===0||R._status===-1)&&(R._status=1,R._result=$)},function($){(R._status===0||R._status===-1)&&(R._status=2,R._result=$)}),R._status===-1&&(R._status=0,R._result=Y)}if(R._status===1)return R._result.default;throw R._result}var re=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function De(){}return pe.Children={map:V,forEach:function(R,Y,$){V(R,function(){Y.apply(this,arguments)},$)},count:function(R){var Y=0;return V(R,function(){Y++}),Y},toArray:function(R){return V(R,function(Y){return Y})||[]},only:function(R){if(!C(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},pe.Component=te,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=Se,pe.StrictMode=a,pe.Suspense=y,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=de,pe.__COMPILER_RUNTIME={__proto__:null,c:function(R){return de.H.useMemoCache(R)}},pe.cache=function(R){return function(){return R.apply(null,arguments)}},pe.cloneElement=function(R,Y,$){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var X=K({},R.props),ae=R.key,me=void 0;if(Y!=null)for(he in Y.ref!==void 0&&(me=void 0),Y.key!==void 0&&(ae=""+Y.key),Y)!je.call(Y,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&Y.ref===void 0||(X[he]=Y[he]);var he=arguments.length-2;if(he===1)X.children=$;else if(1<he){for(var yt=Array(he),Xe=0;Xe<he;Xe++)yt[Xe]=arguments[Xe+2];X.children=yt}return k(R.type,ae,void 0,void 0,me,X)},pe.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:h,_context:R},R},pe.createElement=function(R,Y,$){var X,ae={},me=null;if(Y!=null)for(X in Y.key!==void 0&&(me=""+Y.key),Y)je.call(Y,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ae[X]=Y[X]);var he=arguments.length-2;if(he===1)ae.children=$;else if(1<he){for(var yt=Array(he),Xe=0;Xe<he;Xe++)yt[Xe]=arguments[Xe+2];ae.children=yt}if(R&&R.defaultProps)for(X in he=R.defaultProps,he)ae[X]===void 0&&(ae[X]=he[X]);return k(R,me,void 0,void 0,null,ae)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(R){return{$$typeof:g,render:R}},pe.isValidElement=C,pe.lazy=function(R){return{$$typeof:b,_payload:{_status:-1,_result:R},_init:Z}},pe.memo=function(R,Y){return{$$typeof:v,type:R,compare:Y===void 0?null:Y}},pe.startTransition=function(R){var Y=de.T,$={};de.T=$;try{var X=R(),ae=de.S;ae!==null&&ae($,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(De,re)}catch(me){re(me)}finally{de.T=Y}},pe.unstable_useCacheRefresh=function(){return de.H.useCacheRefresh()},pe.use=function(R){return de.H.use(R)},pe.useActionState=function(R,Y,$){return de.H.useActionState(R,Y,$)},pe.useCallback=function(R,Y){return de.H.useCallback(R,Y)},pe.useContext=function(R){return de.H.useContext(R)},pe.useDebugValue=function(){},pe.useDeferredValue=function(R,Y){return de.H.useDeferredValue(R,Y)},pe.useEffect=function(R,Y,$){var X=de.H;if(typeof $=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(R,Y)},pe.useId=function(){return de.H.useId()},pe.useImperativeHandle=function(R,Y,$){return de.H.useImperativeHandle(R,Y,$)},pe.useInsertionEffect=function(R,Y){return de.H.useInsertionEffect(R,Y)},pe.useLayoutEffect=function(R,Y){return de.H.useLayoutEffect(R,Y)},pe.useMemo=function(R,Y){return de.H.useMemo(R,Y)},pe.useOptimistic=function(R,Y){return de.H.useOptimistic(R,Y)},pe.useReducer=function(R,Y,$){return de.H.useReducer(R,Y,$)},pe.useRef=function(R){return de.H.useRef(R)},pe.useState=function(R){return de.H.useState(R)},pe.useSyncExternalStore=function(R,Y,$){return de.H.useSyncExternalStore(R,Y,$)},pe.useTransition=function(){return de.H.useTransition()},pe.version="19.1.0",pe}var Ey;function pp(){return Ey||(Ey=1,vd.exports=k1()),vd.exports}var kr=pp();const x1=g0(kr);var Ed={exports:{}},dl={},Td={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty;function L1(){return Ty||(Ty=1,function(s){function e(V,Z){var re=V.length;V.push(Z);e:for(;0<re;){var De=re-1>>>1,R=V[De];if(0<l(R,Z))V[De]=Z,V[re]=R,re=De;else break e}}function i(V){return V.length===0?null:V[0]}function a(V){if(V.length===0)return null;var Z=V[0],re=V.pop();if(re!==Z){V[0]=re;e:for(var De=0,R=V.length,Y=R>>>1;De<Y;){var $=2*(De+1)-1,X=V[$],ae=$+1,me=V[ae];if(0>l(X,re))ae<R&&0>l(me,X)?(V[De]=me,V[ae]=re,De=ae):(V[De]=X,V[$]=re,De=$);else if(ae<R&&0>l(me,re))V[De]=me,V[ae]=re,De=ae;else break e}}return Z}function l(V,Z){var re=V.sortIndex-Z.sortIndex;return re!==0?re:V.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var d=Date,g=d.now();s.unstable_now=function(){return d.now()-g}}var y=[],v=[],b=1,I=null,O=3,Q=!1,K=!1,ie=!1,te=!1,xe=typeof setTimeout=="function"?setTimeout:null,Se=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;function Ee(V){for(var Z=i(v);Z!==null;){if(Z.callback===null)a(v);else if(Z.startTime<=V)a(v),Z.sortIndex=Z.expirationTime,e(y,Z);else break;Z=i(v)}}function de(V){if(ie=!1,Ee(V),!K)if(i(y)!==null)K=!0,je||(je=!0,L());else{var Z=i(v);Z!==null&&it(de,Z.startTime-V)}}var je=!1,k=-1,S=5,C=-1;function D(){return te?!0:!(s.unstable_now()-C<S)}function M(){if(te=!1,je){var V=s.unstable_now();C=V;var Z=!0;try{e:{K=!1,ie&&(ie=!1,Se(k),k=-1),Q=!0;var re=O;try{t:{for(Ee(V),I=i(y);I!==null&&!(I.expirationTime>V&&D());){var De=I.callback;if(typeof De=="function"){I.callback=null,O=I.priorityLevel;var R=De(I.expirationTime<=V);if(V=s.unstable_now(),typeof R=="function"){I.callback=R,Ee(V),Z=!0;break t}I===i(y)&&a(y),Ee(V)}else a(y);I=i(y)}if(I!==null)Z=!0;else{var Y=i(v);Y!==null&&it(de,Y.startTime-V),Z=!1}}break e}finally{I=null,O=re,Q=!1}Z=void 0}}finally{Z?L():je=!1}}}var L;if(typeof fe=="function")L=function(){fe(M)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,It=w.port2;w.port1.onmessage=M,L=function(){It.postMessage(null)}}else L=function(){xe(M,0)};function it(V,Z){k=xe(function(){V(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return O},s.unstable_next=function(V){switch(O){case 1:case 2:case 3:var Z=3;break;default:Z=O}var re=O;O=Z;try{return V()}finally{O=re}},s.unstable_requestPaint=function(){te=!0},s.unstable_runWithPriority=function(V,Z){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var re=O;O=V;try{return Z()}finally{O=re}},s.unstable_scheduleCallback=function(V,Z,re){var De=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?De+re:De):re=De,V){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=re+R,V={id:b++,callback:Z,priorityLevel:V,startTime:re,expirationTime:R,sortIndex:-1},re>De?(V.sortIndex=re,e(v,V),i(y)===null&&V===i(v)&&(ie?(Se(k),k=-1):ie=!0,it(de,re-De))):(V.sortIndex=R,e(y,V),K||Q||(K=!0,je||(je=!0,L()))),V},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(V){var Z=O;return function(){var re=O;O=Z;try{return V.apply(this,arguments)}finally{O=re}}}}(Sd)),Sd}var Sy;function U1(){return Sy||(Sy=1,Td.exports=L1()),Td.exports}var bd={exports:{}},Ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by;function P1(){if(by)return Ut;by=1;var s=pp();function e(y){var v="https://react.dev/errors/"+y;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)v+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+y+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function h(y,v,b){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:I==null?null:""+I,children:y,containerInfo:v,implementation:b}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,v){if(y==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ut.createPortal=function(y,v){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(e(299));return h(y,v,null,b)},Ut.flushSync=function(y){var v=d.T,b=a.p;try{if(d.T=null,a.p=2,y)return y()}finally{d.T=v,a.p=b,a.d.f()}},Ut.preconnect=function(y,v){typeof y=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,a.d.C(y,v))},Ut.prefetchDNS=function(y){typeof y=="string"&&a.d.D(y)},Ut.preinit=function(y,v){if(typeof y=="string"&&v&&typeof v.as=="string"){var b=v.as,I=g(b,v.crossOrigin),O=typeof v.integrity=="string"?v.integrity:void 0,Q=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;b==="style"?a.d.S(y,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:I,integrity:O,fetchPriority:Q}):b==="script"&&a.d.X(y,{crossOrigin:I,integrity:O,fetchPriority:Q,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Ut.preinitModule=function(y,v){if(typeof y=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var b=g(v.as,v.crossOrigin);a.d.M(y,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&a.d.M(y)},Ut.preload=function(y,v){if(typeof y=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var b=v.as,I=g(b,v.crossOrigin);a.d.L(y,b,{crossOrigin:I,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Ut.preloadModule=function(y,v){if(typeof y=="string")if(v){var b=g(v.as,v.crossOrigin);a.d.m(y,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else a.d.m(y)},Ut.requestFormReset=function(y){a.d.r(y)},Ut.unstable_batchedUpdates=function(y,v){return y(v)},Ut.useFormState=function(y,v,b){return d.H.useFormState(y,v,b)},Ut.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ut.version="19.1.0",Ut}var Ay;function z1(){if(Ay)return bd.exports;Ay=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),bd.exports=P1(),bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy;function H1(){if(wy)return dl;wy=1;var s=U1(),e=pp(),i=z1();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(h(t)!==t)throw Error(a(188))}function y(t){var n=t.alternate;if(!n){if(n=h(t),n===null)throw Error(a(188));return n!==t?null:t}for(var r=t,o=n;;){var c=r.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===r)return g(c),t;if(f===o)return g(c),n;f=f.sibling}throw Error(a(188))}if(r.return!==o.return)r=c,o=f;else{for(var _=!1,E=c.child;E;){if(E===r){_=!0,r=c,o=f;break}if(E===o){_=!0,o=c,r=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===r){_=!0,r=f,o=c;break}if(E===o){_=!0,o=f,r=c;break}E=E.sibling}if(!_)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var b=Object.assign,I=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),xe=Symbol.for("react.provider"),Se=Symbol.for("react.consumer"),fe=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function L(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var w=Symbol.for("react.client.reference");function It(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===w?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case K:return"Fragment";case te:return"Profiler";case ie:return"StrictMode";case de:return"Suspense";case je:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Q:return"Portal";case fe:return(t.displayName||"Context")+".Provider";case Se:return(t._context.displayName||"Context")+".Consumer";case Ee:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return n=t.displayName||null,n!==null?n:It(t.type)||"Memo";case S:n=t._payload,t=t._init;try{return It(t(n))}catch{}}return null}var it=Array.isArray,V=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},De=[],R=-1;function Y(t){return{current:t}}function $(t){0>R||(t.current=De[R],De[R]=null,R--)}function X(t,n){R++,De[R]=t.current,t.current=n}var ae=Y(null),me=Y(null),he=Y(null),yt=Y(null);function Xe(t,n){switch(X(he,n),X(me,t),X(ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?F_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=F_(n),t=Y_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(ae),X(ae,t)}function Fn(){$(ae),$(me),$(he)}function Ji(t){t.memoizedState!==null&&X(yt,t);var n=ae.current,r=Y_(n,t.type);n!==r&&(X(me,t),X(ae,r))}function pi(t){me.current===t&&($(ae),$(me)),yt.current===t&&($(yt),ol._currentValue=re)}var Vs=Object.prototype.hasOwnProperty,qs=s.unstable_scheduleCallback,Gs=s.unstable_cancelCallback,ro=s.unstable_shouldYield,Zl=s.unstable_requestPaint,pn=s.unstable_now,_h=s.unstable_getCurrentPriorityLevel,ao=s.unstable_ImmediatePriority,Xr=s.unstable_UserBlockingPriority,Fs=s.unstable_NormalPriority,yh=s.unstable_LowPriority,Wr=s.unstable_IdlePriority,oo=s.log,$l=s.unstable_setDisableYieldValue,st=null,Pe=null;function tn(t){if(typeof oo=="function"&&$l(t),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(st,t)}catch{}}var xt=Math.clz32?Math.clz32:Ys,Jl=Math.log,vh=Math.LN2;function Ys(t){return t>>>=0,t===0?32:31-(Jl(t)/vh|0)|0}var Ks=256,Xs=4194304;function Dn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Qr(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?c=Dn(o):(_&=E,_!==0?c=Dn(_):r||(r=E&~t,r!==0&&(c=Dn(r))))):(E=o&~f,E!==0?c=Dn(E):_!==0?c=Dn(_):r||(r=o&~t,r!==0&&(c=Dn(r)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:c}function Ws(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function lo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uo(){var t=Ks;return Ks<<=1,(Ks&4194048)===0&&(Ks=256),t}function eu(){var t=Xs;return Xs<<=1,(Xs&62914560)===0&&(Xs=4194304),t}function gi(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function mi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function co(t,n,r,o,c,f){var _=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var E=t.entanglements,A=t.expirationTimes,z=t.hiddenUpdates;for(r=_&~r;0<r;){var q=31-xt(r),F=1<<q;E[q]=0,A[q]=-1;var H=z[q];if(H!==null)for(z[q]=null,q=0;q<H.length;q++){var B=H[q];B!==null&&(B.lane&=-536870913)}r&=~F}o!==0&&_i(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function _i(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-xt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&4194090}function ho(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-xt(r),c=1<<o;c&n|t[o]&n&&(t[o]|=n),r&=~c}}function Qs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Zr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function es(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:hy(t.type))}function tu(t,n){var r=Z.p;try{return Z.p=t,n()}finally{Z.p=r}}var Je=Math.random().toString(36).slice(2),gt="__reactFiber$"+Je,ct="__reactProps$"+Je,gn="__reactContainer$"+Je,fo="__reactEvents$"+Je,Eh="__reactListeners$"+Je,ts="__reactHandles$"+Je,nu="__reactResources$"+Je,Zs="__reactMarker$"+Je;function $s(t){delete t[gt],delete t[ct],delete t[fo],delete t[Eh],delete t[ts]}function ns(t){var n=t[gt];if(n)return n;for(var r=t.parentNode;r;){if(n=r[gn]||r[gt]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=Q_(t);t!==null;){if(r=t[gt])return r;t=Q_(t)}return n}t=r,r=t.parentNode}return null}function Yn(t){if(t=t[gt]||t[gn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Kn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function jt(t){var n=t[nu];return n||(n=t[nu]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ot(t){t[Zs]=!0}var po=new Set,$r={};function Mn(t,n){yi(t,n),yi(t+"Capture",n)}function yi(t,n){for($r[t]=n,t=0;t<n.length;t++)po.add(n[t])}var iu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),su={},Js={};function ru(t){return Vs.call(Js,t)?!0:Vs.call(su,t)?!1:iu.test(t)?Js[t]=!0:(su[t]=!0,!1)}function is(t,n,r){if(ru(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function Xn(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function Nt(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}var er,au;function vi(t){if(er===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);er=n&&n[1]||"",au=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+er+t+au}var Jr=!1;function ea(t,n){if(!t||Jr)return"";Jr=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(B){var H=B}Reflect.construct(t,[],F)}else{try{F.call()}catch(B){H=B}t.call(F.prototype)}}else{try{throw Error()}catch(B){H=B}(F=t())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(B){if(B&&H&&typeof B.stack=="string")return[B.stack,H.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var A=_.split(`
`),z=E.split(`
`);for(c=o=0;o<A.length&&!A[o].includes("DetermineComponentFrameRoot");)o++;for(;c<z.length&&!z[c].includes("DetermineComponentFrameRoot");)c++;if(o===A.length||c===z.length)for(o=A.length-1,c=z.length-1;1<=o&&0<=c&&A[o]!==z[c];)c--;for(;1<=o&&0<=c;o--,c--)if(A[o]!==z[c]){if(o!==1||c!==1)do if(o--,c--,0>c||A[o]!==z[c]){var q=`
`+A[o].replace(" at new "," at ");return t.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",t.displayName)),q}while(1<=o&&0<=c);break}}}finally{Jr=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?vi(r):""}function go(t){switch(t.tag){case 26:case 27:case 5:return vi(t.type);case 16:return vi("Lazy");case 13:return vi("Suspense");case 19:return vi("SuspenseList");case 0:case 15:return ea(t.type,!1);case 11:return ea(t.type.render,!1);case 1:return ea(t.type,!0);case 31:return vi("Activity");default:return""}}function ta(t){try{var n="";do n+=go(t),t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mo(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Th(t){var n=mo(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){o=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(_){o=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function na(t){t._valueTracker||(t._valueTracker=Th(t))}function _o(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=mo(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function tr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Sh=/[\n"\\]/g;function ht(t){return t.replace(Sh,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function nn(t,n,r,o,c,f,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Vt(n)):t.value!==""+Vt(n)&&(t.value=""+Vt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?ss(t,_,Vt(n)):r!=null?ss(t,_,Vt(r)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Vt(E):t.removeAttribute("name")}function nr(t,n,r,o,c,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;r=r!=null?""+Vt(r):"",n=n!=null?""+Vt(n):r,E||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=E?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_)}function ss(t,n,r){n==="number"&&tr(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Ei(t,n,r,o){if(t=t.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<t.length;r++)c=n.hasOwnProperty("$"+t[r].value),t[r].selected!==c&&(t[r].selected=c),c&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Vt(r),n=null,c=0;c<t.length;c++){if(t[c].value===r){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ve(t,n,r){if(n!=null&&(n=""+Vt(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+Vt(r):""}function ir(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(it(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=Vt(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o)}function mn(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var sr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ou(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||sr.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function yo(t,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&ou(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&ou(t,f,n[f])}function vo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ah=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ia(t){return Ah.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ti=null;function _n(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Si=null,bi=null;function Eo(t){var n=Yn(t);if(n&&(t=n.stateNode)){var r=t[ct]||null;e:switch(t=n.stateNode,n.type){case"input":if(nn(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ht(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var c=o[ct]||null;if(!c)throw Error(a(90));nn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&_o(o)}break e;case"textarea":Ve(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&Ei(t,!!r.multiple,n,!1)}}}var Wn=!1;function lu(t,n,r){if(Wn)return t(n,r);Wn=!0;try{var o=t(n);return o}finally{if(Wn=!1,(Si!==null||bi!==null)&&(tc(),Si&&(n=Si,t=bi,bi=Si=null,Eo(n),t)))for(n=0;n<t.length;n++)Eo(t[n])}}function rr(t,n){var r=t.stateNode;if(r===null)return null;var o=r[ct]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yn=!1;if(kn)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){yn=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{yn=!1}var Qn=null,rs=null,Ai=null;function To(){if(Ai)return Ai;var t,n=rs,r=n.length,o,c="value"in Qn?Qn.value:Qn.textContent,f=c.length;for(t=0;t<r&&n[t]===c[t];t++);var _=r-t;for(o=1;o<=_&&n[r-o]===c[f-o];o++);return Ai=c.slice(t,1<o?1-o:void 0)}function Zn(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function $n(){return!0}function So(){return!1}function vt(t){function n(r,o,c,f,_){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(r=t[E],this[E]=r?r(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$n:So,this.isPropagationStopped=So,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),n}var ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sa=vt(ze),or=b({},ze,{view:0,detail:0}),uu=vt(or),ra,aa,Jn,lr=b({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Jn&&(Jn&&t.type==="mousemove"?(ra=t.screenX-Jn.screenX,aa=t.screenY-Jn.screenY):aa=ra=0,Jn=t),ra)},movementY:function(t){return"movementY"in t?t.movementY:aa}}),vn=vt(lr),cu=b({},lr,{dataTransfer:0}),wh=vt(cu),ur=b({},or,{relatedTarget:0}),oa=vt(ur),bo=b({},ze,{animationName:0,elapsedTime:0,pseudoElement:0}),la=vt(bo),hu=b({},ze,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ua=vt(hu),Ch=b({},ze,{data:0}),Ao=vt(Ch),cr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},du={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wo(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=du[t])?!!n[t]:!1}function hr(){return wo}var pu=b({},or,{key:function(t){if(t.key){var n=cr[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hr,charCode:function(t){return t.type==="keypress"?Zn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ca=vt(pu),gu=b({},lr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Co=vt(gu),wi=b({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hr}),mu=vt(wi),_u=b({},ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),yu=vt(_u),vu=b({},lr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yt=vt(vu),Eu=b({},ze,{newState:0,oldState:0}),Tu=vt(Eu),as=[9,13,27,32],u=kn&&"CompositionEvent"in window,p=null;kn&&"documentMode"in document&&(p=document.documentMode);var m=kn&&"TextEvent"in window&&!p,T=kn&&(!u||p&&8<p&&11>=p),U=" ",j=!1;function W(t,n){switch(t){case"keyup":return as.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Le(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var et=!1;function be(t,n){switch(t){case"compositionend":return Le(n);case"keypress":return n.which!==32?null:(j=!0,U);case"textInput":return t=n.data,t===U&&j?null:t;default:return null}}function Et(t,n){if(et)return t==="compositionend"||!u&&W(t,n)?(t=To(),Ai=rs=Qn=null,et=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return T&&n.locale!=="ko"?null:n.data;default:return null}}var Tt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ci(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Tt[t.type]:n==="textarea"}function Kt(t,n,r,o){Si?bi?bi.push(o):bi=[o]:Si=o,n=oc(n,"onChange"),0<n.length&&(r=new sa("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var ei=null,Ri=null;function aS(t){B_(t,0)}function Su(t){var n=Kn(t);if(_o(n))return t}function og(t,n){if(t==="change")return n}var lg=!1;if(kn){var Rh;if(kn){var Ih="oninput"in document;if(!Ih){var ug=document.createElement("div");ug.setAttribute("oninput","return;"),Ih=typeof ug.oninput=="function"}Rh=Ih}else Rh=!1;lg=Rh&&(!document.documentMode||9<document.documentMode)}function cg(){ei&&(ei.detachEvent("onpropertychange",hg),Ri=ei=null)}function hg(t){if(t.propertyName==="value"&&Su(Ri)){var n=[];Kt(n,Ri,t,_n(t)),lu(aS,n)}}function oS(t,n,r){t==="focusin"?(cg(),ei=n,Ri=r,ei.attachEvent("onpropertychange",hg)):t==="focusout"&&cg()}function lS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Su(Ri)}function uS(t,n){if(t==="click")return Su(n)}function cS(t,n){if(t==="input"||t==="change")return Su(n)}function hS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var sn=typeof Object.is=="function"?Object.is:hS;function Ro(t,n){if(sn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!Vs.call(n,c)||!sn(t[c],n[c]))return!1}return!0}function fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dg(t,n){var r=fg(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=fg(r)}}function pg(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?pg(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function gg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=tr(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=tr(t.document)}return n}function Nh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var fS=kn&&"documentMode"in document&&11>=document.documentMode,ha=null,Oh=null,Io=null,Dh=!1;function mg(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Dh||ha==null||ha!==tr(o)||(o=ha,"selectionStart"in o&&Nh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Io&&Ro(Io,o)||(Io=o,o=oc(Oh,"onSelect"),0<o.length&&(n=new sa("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=ha)))}function fr(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var fa={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionrun:fr("Transition","TransitionRun"),transitionstart:fr("Transition","TransitionStart"),transitioncancel:fr("Transition","TransitionCancel"),transitionend:fr("Transition","TransitionEnd")},Mh={},_g={};kn&&(_g=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);function dr(t){if(Mh[t])return Mh[t];if(!fa[t])return t;var n=fa[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in _g)return Mh[t]=n[r];return t}var yg=dr("animationend"),vg=dr("animationiteration"),Eg=dr("animationstart"),dS=dr("transitionrun"),pS=dr("transitionstart"),gS=dr("transitioncancel"),Tg=dr("transitionend"),Sg=new Map,kh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kh.push("scrollEnd");function xn(t,n){Sg.set(t,n),Mn(n,[t])}var bg=new WeakMap;function En(t,n){if(typeof t=="object"&&t!==null){var r=bg.get(t);return r!==void 0?r:(n={value:t,source:n,stack:ta(n)},bg.set(t,n),n)}return{value:t,source:n,stack:ta(n)}}var Tn=[],da=0,xh=0;function bu(){for(var t=da,n=xh=da=0;n<t;){var r=Tn[n];Tn[n++]=null;var o=Tn[n];Tn[n++]=null;var c=Tn[n];Tn[n++]=null;var f=Tn[n];if(Tn[n++]=null,o!==null&&c!==null){var _=o.pending;_===null?c.next=c:(c.next=_.next,_.next=c),o.pending=c}f!==0&&Ag(r,c,f)}}function Au(t,n,r,o){Tn[da++]=t,Tn[da++]=n,Tn[da++]=r,Tn[da++]=o,xh|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Lh(t,n,r,o){return Au(t,n,r,o),wu(t)}function pa(t,n){return Au(t,null,null,n),wu(t)}function Ag(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var c=!1,f=t.return;f!==null;)f.childLanes|=r,o=f.alternate,o!==null&&(o.childLanes|=r),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-xt(r),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=r|536870912),f):null}function wu(t){if(50<Jo)throw Jo=0,Vf=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ga={};function mS(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,n,r,o){return new mS(t,n,r,o)}function Uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ii(t,n){var r=t.alternate;return r===null?(r=rn(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function wg(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Cu(t,n,r,o,c,f){var _=0;if(o=t,typeof t=="function")Uh(t)&&(_=1);else if(typeof t=="string")_=y1(t,r,ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=rn(31,r,n,c),t.elementType=C,t.lanes=f,t;case K:return pr(r.children,c,f,n);case ie:_=8,c|=24;break;case te:return t=rn(12,r,n,c|2),t.elementType=te,t.lanes=f,t;case de:return t=rn(13,r,n,c),t.elementType=de,t.lanes=f,t;case je:return t=rn(19,r,n,c),t.elementType=je,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xe:case fe:_=10;break e;case Se:_=9;break e;case Ee:_=11;break e;case k:_=14;break e;case S:_=16,o=null;break e}_=29,r=Error(a(130,t===null?"null":typeof t,"")),o=null}return n=rn(_,r,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function pr(t,n,r,o){return t=rn(7,t,o,n),t.lanes=r,t}function Ph(t,n,r){return t=rn(6,t,null,n),t.lanes=r,t}function zh(t,n,r){return n=rn(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ma=[],_a=0,Ru=null,Iu=0,Sn=[],bn=0,gr=null,Ni=1,Oi="";function mr(t,n){ma[_a++]=Iu,ma[_a++]=Ru,Ru=t,Iu=n}function Cg(t,n,r){Sn[bn++]=Ni,Sn[bn++]=Oi,Sn[bn++]=gr,gr=t;var o=Ni;t=Oi;var c=32-xt(o)-1;o&=~(1<<c),r+=1;var f=32-xt(n)+c;if(30<f){var _=c-c%5;f=(o&(1<<_)-1).toString(32),o>>=_,c-=_,Ni=1<<32-xt(n)+c|r<<c|o,Oi=f+t}else Ni=1<<f|r<<c|o,Oi=t}function Hh(t){t.return!==null&&(mr(t,1),Cg(t,1,0))}function Bh(t){for(;t===Ru;)Ru=ma[--_a],ma[_a]=null,Iu=ma[--_a],ma[_a]=null;for(;t===gr;)gr=Sn[--bn],Sn[bn]=null,Oi=Sn[--bn],Sn[bn]=null,Ni=Sn[--bn],Sn[bn]=null}var qt=null,rt=null,Me=!1,_r=null,ti=!1,jh=Error(a(519));function yr(t){var n=Error(a(418,""));throw Do(En(n,t)),jh}function Rg(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[gt]=t,n[ct]=o,r){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(r=0;r<tl.length;r++)ve(tl[r],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),nr(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),na(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),ir(n,o.value,o.defaultValue,o.children),na(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||G_(n.textContent,r)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=lc),n=!0):n=!1,n||yr(t)}function Ig(t){for(qt=t.return;qt;)switch(qt.tag){case 5:case 13:ti=!1;return;case 27:case 3:ti=!0;return;default:qt=qt.return}}function No(t){if(t!==qt)return!1;if(!Me)return Ig(t),Me=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||sd(t.type,t.memoizedProps)),r=!r),r&&rt&&yr(t),Ig(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(n===0){rt=Un(t.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;t=t.nextSibling}rt=null}}else n===27?(n=rt,Ss(t.type)?(t=ld,ld=null,rt=t):rt=n):rt=qt?Un(t.stateNode.nextSibling):null;return!0}function Oo(){rt=qt=null,Me=!1}function Ng(){var t=_r;return t!==null&&(Qt===null?Qt=t:Qt.push.apply(Qt,t),_r=null),t}function Do(t){_r===null?_r=[t]:_r.push(t)}var Vh=Y(null),vr=null,Di=null;function os(t,n,r){X(Vh,n._currentValue),n._currentValue=r}function Mi(t){t._currentValue=Vh.current,$(Vh)}function qh(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function Gh(t,n,r,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var A=0;A<n.length;A++)if(E.context===n[A]){f.lanes|=r,E=f.alternate,E!==null&&(E.lanes|=r),qh(f.return,r,t),o||(_=null);break e}f=E.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(a(341));_.lanes|=r,f=_.alternate,f!==null&&(f.lanes|=r),qh(_,r,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Mo(t,n,r,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var E=c.type;sn(c.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(c===yt.current){if(_=c.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(ol):t=[ol])}c=c.return}t!==null&&Gh(n,t,r,o),n.flags|=262144}function Nu(t){for(t=t.firstContext;t!==null;){if(!sn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Er(t){vr=t,Di=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Lt(t){return Og(vr,t)}function Ou(t,n){return vr===null&&Er(t),Og(t,n)}function Og(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Di===null){if(t===null)throw Error(a(308));Di=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Di=Di.next=n;return r}var _S=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},yS=s.unstable_scheduleCallback,vS=s.unstable_NormalPriority,mt={$$typeof:fe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fh(){return{controller:new _S,data:new Map,refCount:0}}function ko(t){t.refCount--,t.refCount===0&&yS(vS,function(){t.controller.abort()})}var xo=null,Yh=0,ya=0,va=null;function ES(t,n){if(xo===null){var r=xo=[];Yh=0,ya=Wf(),va={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Yh++,n.then(Dg,Dg),n}function Dg(){if(--Yh===0&&xo!==null){va!==null&&(va.status="fulfilled");var t=xo;xo=null,ya=0,va=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function TS(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var Mg=V.S;V.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&ES(t,n),Mg!==null&&Mg(t,n)};var Tr=Y(null);function Kh(){var t=Tr.current;return t!==null?t:We.pooledCache}function Du(t,n){n===null?X(Tr,Tr.current):X(Tr,n.pool)}function kg(){var t=Kh();return t===null?null:{parent:mt._currentValue,pool:t}}var Lo=Error(a(460)),xg=Error(a(474)),Mu=Error(a(542)),Xh={then:function(){}};function Lg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ku(){}function Ug(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(ku,ku),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zg(t),t;default:if(typeof n.status=="string")n.then(ku,ku);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zg(t),t}throw Uo=n,Lo}}var Uo=null;function Pg(){if(Uo===null)throw Error(a(459));var t=Uo;return Uo=null,t}function zg(t){if(t===Lo||t===Mu)throw Error(a(483))}var ls=!1;function Wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qh(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function us(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function cs(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(He&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=wu(t),Ag(t,null,r),n}return Au(t,o,n,r),wu(t)}function Po(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,ho(t,r)}}function Zh(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var _={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,r=r.next}while(r!==null);f===null?c=f=n:f=f.next=n}else c=f=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var $h=!1;function zo(){if($h){var t=va;if(t!==null)throw t}}function Ho(t,n,r,o){$h=!1;var c=t.updateQueue;ls=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var A=E,z=A.next;A.next=null,_===null?f=z:_.next=z,_=A;var q=t.alternate;q!==null&&(q=q.updateQueue,E=q.lastBaseUpdate,E!==_&&(E===null?q.firstBaseUpdate=z:E.next=z,q.lastBaseUpdate=A))}if(f!==null){var F=c.baseState;_=0,q=z=A=null,E=f;do{var H=E.lane&-536870913,B=H!==E.lane;if(B?(Ae&H)===H:(o&H)===H){H!==0&&H===ya&&($h=!0),q!==null&&(q=q.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ce=t,oe=E;H=n;var Fe=r;switch(oe.tag){case 1:if(ce=oe.payload,typeof ce=="function"){F=ce.call(Fe,F,H);break e}F=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=oe.payload,H=typeof ce=="function"?ce.call(Fe,F,H):ce,H==null)break e;F=b({},F,H);break e;case 2:ls=!0}}H=E.callback,H!==null&&(t.flags|=64,B&&(t.flags|=8192),B=c.callbacks,B===null?c.callbacks=[H]:B.push(H))}else B={lane:H,tag:E.tag,payload:E.payload,callback:E.callback,next:null},q===null?(z=q=B,A=F):q=q.next=B,_|=H;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;B=E,E=B.next,B.next=null,c.lastBaseUpdate=B,c.shared.pending=null}}while(!0);q===null&&(A=F),c.baseState=A,c.firstBaseUpdate=z,c.lastBaseUpdate=q,f===null&&(c.shared.lanes=0),ys|=_,t.lanes=_,t.memoizedState=F}}function Hg(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function Bg(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Hg(r[t],n)}var Ea=Y(null),xu=Y(0);function jg(t,n){t=Hi,X(xu,t),X(Ea,n),Hi=t|n.baseLanes}function Jh(){X(xu,Hi),X(Ea,Ea.current)}function ef(){Hi=xu.current,$(Ea),$(xu)}var hs=0,ge=null,qe=null,ft=null,Lu=!1,Ta=!1,Sr=!1,Uu=0,Bo=0,Sa=null,SS=0;function lt(){throw Error(a(321))}function tf(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!sn(t[r],n[r]))return!1;return!0}function nf(t,n,r,o,c,f){return hs=f,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,V.H=t===null||t.memoizedState===null?Am:wm,Sr=!1,f=r(o,c),Sr=!1,Ta&&(f=qg(n,r,o,c)),Vg(t),f}function Vg(t){V.H=Vu;var n=qe!==null&&qe.next!==null;if(hs=0,ft=qe=ge=null,Lu=!1,Bo=0,Sa=null,n)throw Error(a(300));t===null||St||(t=t.dependencies,t!==null&&Nu(t)&&(St=!0))}function qg(t,n,r,o){ge=t;var c=0;do{if(Ta&&(Sa=null),Bo=0,Ta=!1,25<=c)throw Error(a(301));if(c+=1,ft=qe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}V.H=NS,f=n(r,o)}while(Ta);return f}function bS(){var t=V.H,n=t.useState()[0];return n=typeof n.then=="function"?jo(n):n,t=t.useState()[0],(qe!==null?qe.memoizedState:null)!==t&&(ge.flags|=1024),n}function sf(){var t=Uu!==0;return Uu=0,t}function rf(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function af(t){if(Lu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Lu=!1}hs=0,ft=qe=ge=null,Ta=!1,Bo=Uu=0,Sa=null}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?ge.memoizedState=ft=t:ft=ft.next=t,ft}function dt(){if(qe===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var n=ft===null?ge.memoizedState:ft.next;if(n!==null)ft=n,qe=t;else{if(t===null)throw ge.alternate===null?Error(a(467)):Error(a(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},ft===null?ge.memoizedState=ft=t:ft=ft.next=t}return ft}function of(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(t){var n=Bo;return Bo+=1,Sa===null&&(Sa=[]),t=Ug(Sa,t,n),n=ge,(ft===null?n.memoizedState:ft.next)===null&&(n=n.alternate,V.H=n===null||n.memoizedState===null?Am:wm),t}function Pu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return jo(t);if(t.$$typeof===fe)return Lt(t)}throw Error(a(438,String(t)))}function lf(t){var n=null,r=ge.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=of(),ge.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=D;return n.index++,r}function ki(t,n){return typeof n=="function"?n(t):n}function zu(t){var n=dt();return uf(n,qe,t)}function uf(t,n,r){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=_=null,A=null,z=n,q=!1;do{var F=z.lane&-536870913;if(F!==z.lane?(Ae&F)===F:(hs&F)===F){var H=z.revertLane;if(H===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),F===ya&&(q=!0);else if((hs&H)===H){z=z.next,H===ya&&(q=!0);continue}else F={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},A===null?(E=A=F,_=f):A=A.next=F,ge.lanes|=H,ys|=H;F=z.action,Sr&&r(f,F),f=z.hasEagerState?z.eagerState:r(f,F)}else H={lane:F,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},A===null?(E=A=H,_=f):A=A.next=H,ge.lanes|=F,ys|=F;z=z.next}while(z!==null&&z!==n);if(A===null?_=f:A.next=E,!sn(f,t.memoizedState)&&(St=!0,q&&(r=va,r!==null)))throw r;t.memoizedState=f,t.baseState=_,t.baseQueue=A,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function cf(t){var n=dt(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var o=r.dispatch,c=r.pending,f=n.memoizedState;if(c!==null){r.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);sn(f,n.memoizedState)||(St=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,o]}function Gg(t,n,r){var o=ge,c=dt(),f=Me;if(f){if(r===void 0)throw Error(a(407));r=r()}else r=n();var _=!sn((qe||c).memoizedState,r);_&&(c.memoizedState=r,St=!0),c=c.queue;var E=Kg.bind(null,o,c,t);if(Vo(2048,8,E,[t]),c.getSnapshot!==n||_||ft!==null&&ft.memoizedState.tag&1){if(o.flags|=2048,ba(9,Hu(),Yg.bind(null,o,c,r,n),null),We===null)throw Error(a(349));f||(hs&124)!==0||Fg(o,n,r)}return r}function Fg(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=ge.updateQueue,n===null?(n=of(),ge.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function Yg(t,n,r,o){n.value=r,n.getSnapshot=o,Xg(n)&&Wg(t)}function Kg(t,n,r){return r(function(){Xg(n)&&Wg(t)})}function Xg(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!sn(t,r)}catch{return!0}}function Wg(t){var n=pa(t,2);n!==null&&cn(n,t,2)}function hf(t){var n=Xt();if(typeof t=="function"){var r=t;if(t=r(),Sr){tn(!0);try{r()}finally{tn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function Qg(t,n,r,o){return t.baseState=r,uf(t,qe,typeof o=="function"?o:ki)}function AS(t,n,r,o,c){if(ju(t))throw Error(a(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};V.T!==null?r(!0):f.isTransition=!1,o(f),r=n.pending,r===null?(f.next=n.pending=f,Zg(n,f)):(f.next=r.next,n.pending=r.next=f)}}function Zg(t,n){var r=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=V.T,_={};V.T=_;try{var E=r(c,o),A=V.S;A!==null&&A(_,E),$g(t,n,E)}catch(z){ff(t,n,z)}finally{V.T=f}}else try{f=r(c,o),$g(t,n,f)}catch(z){ff(t,n,z)}}function $g(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Jg(t,n,o)},function(o){return ff(t,n,o)}):Jg(t,n,r)}function Jg(t,n,r){n.status="fulfilled",n.value=r,em(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Zg(t,r)))}function ff(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,em(n),n=n.next;while(n!==o)}t.action=null}function em(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function tm(t,n){return n}function nm(t,n){if(Me){var r=We.formState;if(r!==null){e:{var o=ge;if(Me){if(rt){t:{for(var c=rt,f=ti;c.nodeType!==8;){if(!f){c=null;break t}if(c=Un(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){rt=Un(c.nextSibling),o=c.data==="F!";break e}}yr(o)}o=!1}o&&(n=r[0])}}return r=Xt(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tm,lastRenderedState:n},r.queue=o,r=Tm.bind(null,ge,o),o.dispatch=r,o=hf(!1),f=_f.bind(null,ge,!1,o.queue),o=Xt(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,r=AS.bind(null,ge,c,f,r),c.dispatch=r,o.memoizedState=t,[n,r,!1]}function im(t){var n=dt();return sm(n,qe,t)}function sm(t,n,r){if(n=uf(t,n,tm)[0],t=zu(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=jo(n)}catch(_){throw _===Lo?Mu:_}else o=n;n=dt();var c=n.queue,f=c.dispatch;return r!==n.memoizedState&&(ge.flags|=2048,ba(9,Hu(),wS.bind(null,c,r),null)),[o,f,t]}function wS(t,n){t.action=n}function rm(t){var n=dt(),r=qe;if(r!==null)return sm(n,r,t);dt(),n=n.memoizedState,r=dt();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function ba(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=ge.updateQueue,n===null&&(n=of(),ge.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function Hu(){return{destroy:void 0,resource:void 0}}function am(){return dt().memoizedState}function Bu(t,n,r,o){var c=Xt();o=o===void 0?null:o,ge.flags|=t,c.memoizedState=ba(1|n,Hu(),r,o)}function Vo(t,n,r,o){var c=dt();o=o===void 0?null:o;var f=c.memoizedState.inst;qe!==null&&o!==null&&tf(o,qe.memoizedState.deps)?c.memoizedState=ba(n,f,r,o):(ge.flags|=t,c.memoizedState=ba(1|n,f,r,o))}function om(t,n){Bu(8390656,8,t,n)}function lm(t,n){Vo(2048,8,t,n)}function um(t,n){return Vo(4,2,t,n)}function cm(t,n){return Vo(4,4,t,n)}function hm(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function fm(t,n,r){r=r!=null?r.concat([t]):null,Vo(4,4,hm.bind(null,n,t),r)}function df(){}function dm(t,n){var r=dt();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function pm(t,n){var r=dt();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=t(),Sr){tn(!0);try{t()}finally{tn(!1)}}return r.memoizedState=[o,n],o}function pf(t,n,r){return r===void 0||(hs&1073741824)!==0?t.memoizedState=n:(t.memoizedState=r,t=__(),ge.lanes|=t,ys|=t,r)}function gm(t,n,r,o){return sn(r,n)?r:Ea.current!==null?(t=pf(t,r,o),sn(t,n)||(St=!0),t):(hs&42)===0?(St=!0,t.memoizedState=r):(t=__(),ge.lanes|=t,ys|=t,n)}function mm(t,n,r,o,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var _=V.T,E={};V.T=E,_f(t,!1,n,r);try{var A=c(),z=V.S;if(z!==null&&z(E,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var q=TS(A,o);qo(t,n,q,un(t))}else qo(t,n,o,un(t))}catch(F){qo(t,n,{then:function(){},status:"rejected",reason:F},un())}finally{Z.p=f,V.T=_}}function CS(){}function gf(t,n,r,o){if(t.tag!==5)throw Error(a(476));var c=_m(t).queue;mm(t,c,n,re,r===null?CS:function(){return ym(t),r(o)})}function _m(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:re},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ym(t){var n=_m(t).next.queue;qo(t,n,{},un())}function mf(){return Lt(ol)}function vm(){return dt().memoizedState}function Em(){return dt().memoizedState}function RS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=un();t=us(r);var o=cs(n,t,r);o!==null&&(cn(o,n,r),Po(o,n,r)),n={cache:Fh()},t.payload=n;return}n=n.return}}function IS(t,n,r){var o=un();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},ju(t)?Sm(n,r):(r=Lh(t,n,r,o),r!==null&&(cn(r,t,o),bm(r,n,o)))}function Tm(t,n,r){var o=un();qo(t,n,r,o)}function qo(t,n,r,o){var c={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(ju(t))Sm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,r);if(c.hasEagerState=!0,c.eagerState=E,sn(E,_))return Au(t,n,c,0),We===null&&bu(),!1}catch{}finally{}if(r=Lh(t,n,c,o),r!==null)return cn(r,t,o),bm(r,n,o),!0}return!1}function _f(t,n,r,o){if(o={lane:2,revertLane:Wf(),action:o,hasEagerState:!1,eagerState:null,next:null},ju(t)){if(n)throw Error(a(479))}else n=Lh(t,r,o,2),n!==null&&cn(n,t,2)}function ju(t){var n=t.alternate;return t===ge||n!==null&&n===ge}function Sm(t,n){Ta=Lu=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function bm(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,ho(t,r)}}var Vu={readContext:Lt,use:Pu,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt},Am={readContext:Lt,use:Pu,useCallback:function(t,n){return Xt().memoizedState=[t,n===void 0?null:n],t},useContext:Lt,useEffect:om,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Bu(4194308,4,hm.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Bu(4194308,4,t,n)},useInsertionEffect:function(t,n){Bu(4,2,t,n)},useMemo:function(t,n){var r=Xt();n=n===void 0?null:n;var o=t();if(Sr){tn(!0);try{t()}finally{tn(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=Xt();if(r!==void 0){var c=r(n);if(Sr){tn(!0);try{r(n)}finally{tn(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=IS.bind(null,ge,t),[o.memoizedState,t]},useRef:function(t){var n=Xt();return t={current:t},n.memoizedState=t},useState:function(t){t=hf(t);var n=t.queue,r=Tm.bind(null,ge,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:df,useDeferredValue:function(t,n){var r=Xt();return pf(r,t,n)},useTransition:function(){var t=hf(!1);return t=mm.bind(null,ge,t.queue,!0,!1),Xt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=ge,c=Xt();if(Me){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),We===null)throw Error(a(349));(Ae&124)!==0||Fg(o,n,r)}c.memoizedState=r;var f={value:r,getSnapshot:n};return c.queue=f,om(Kg.bind(null,o,f,t),[t]),o.flags|=2048,ba(9,Hu(),Yg.bind(null,o,f,r,n),null),r},useId:function(){var t=Xt(),n=We.identifierPrefix;if(Me){var r=Oi,o=Ni;r=(o&~(1<<32-xt(o)-1)).toString(32)+r,n="«"+n+"R"+r,r=Uu++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=SS++,n="«"+n+"r"+r.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:mf,useFormState:nm,useActionState:nm,useOptimistic:function(t){var n=Xt();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=_f.bind(null,ge,!0,r),r.dispatch=n,[t,n]},useMemoCache:lf,useCacheRefresh:function(){return Xt().memoizedState=RS.bind(null,ge)}},wm={readContext:Lt,use:Pu,useCallback:dm,useContext:Lt,useEffect:lm,useImperativeHandle:fm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:pm,useReducer:zu,useRef:am,useState:function(){return zu(ki)},useDebugValue:df,useDeferredValue:function(t,n){var r=dt();return gm(r,qe.memoizedState,t,n)},useTransition:function(){var t=zu(ki)[0],n=dt().memoizedState;return[typeof t=="boolean"?t:jo(t),n]},useSyncExternalStore:Gg,useId:vm,useHostTransitionStatus:mf,useFormState:im,useActionState:im,useOptimistic:function(t,n){var r=dt();return Qg(r,qe,t,n)},useMemoCache:lf,useCacheRefresh:Em},NS={readContext:Lt,use:Pu,useCallback:dm,useContext:Lt,useEffect:lm,useImperativeHandle:fm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:pm,useReducer:cf,useRef:am,useState:function(){return cf(ki)},useDebugValue:df,useDeferredValue:function(t,n){var r=dt();return qe===null?pf(r,t,n):gm(r,qe.memoizedState,t,n)},useTransition:function(){var t=cf(ki)[0],n=dt().memoizedState;return[typeof t=="boolean"?t:jo(t),n]},useSyncExternalStore:Gg,useId:vm,useHostTransitionStatus:mf,useFormState:rm,useActionState:rm,useOptimistic:function(t,n){var r=dt();return qe!==null?Qg(r,qe,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:lf,useCacheRefresh:Em},Aa=null,Go=0;function qu(t){var n=Go;return Go+=1,Aa===null&&(Aa=[]),Ug(Aa,t,n)}function Fo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Gu(t,n){throw n.$$typeof===I?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Cm(t){var n=t._init;return n(t._payload)}function Rm(t){function n(x,N){if(t){var P=x.deletions;P===null?(x.deletions=[N],x.flags|=16):P.push(N)}}function r(x,N){if(!t)return null;for(;N!==null;)n(x,N),N=N.sibling;return null}function o(x){for(var N=new Map;x!==null;)x.key!==null?N.set(x.key,x):N.set(x.index,x),x=x.sibling;return N}function c(x,N){return x=Ii(x,N),x.index=0,x.sibling=null,x}function f(x,N,P){return x.index=P,t?(P=x.alternate,P!==null?(P=P.index,P<N?(x.flags|=67108866,N):P):(x.flags|=67108866,N)):(x.flags|=1048576,N)}function _(x){return t&&x.alternate===null&&(x.flags|=67108866),x}function E(x,N,P,G){return N===null||N.tag!==6?(N=Ph(P,x.mode,G),N.return=x,N):(N=c(N,P),N.return=x,N)}function A(x,N,P,G){var ne=P.type;return ne===K?q(x,N,P.props.children,G,P.key):N!==null&&(N.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===S&&Cm(ne)===N.type)?(N=c(N,P.props),Fo(N,P),N.return=x,N):(N=Cu(P.type,P.key,P.props,null,x.mode,G),Fo(N,P),N.return=x,N)}function z(x,N,P,G){return N===null||N.tag!==4||N.stateNode.containerInfo!==P.containerInfo||N.stateNode.implementation!==P.implementation?(N=zh(P,x.mode,G),N.return=x,N):(N=c(N,P.children||[]),N.return=x,N)}function q(x,N,P,G,ne){return N===null||N.tag!==7?(N=pr(P,x.mode,G,ne),N.return=x,N):(N=c(N,P),N.return=x,N)}function F(x,N,P){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Ph(""+N,x.mode,P),N.return=x,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case O:return P=Cu(N.type,N.key,N.props,null,x.mode,P),Fo(P,N),P.return=x,P;case Q:return N=zh(N,x.mode,P),N.return=x,N;case S:var G=N._init;return N=G(N._payload),F(x,N,P)}if(it(N)||L(N))return N=pr(N,x.mode,P,null),N.return=x,N;if(typeof N.then=="function")return F(x,qu(N),P);if(N.$$typeof===fe)return F(x,Ou(x,N),P);Gu(x,N)}return null}function H(x,N,P,G){var ne=N!==null?N.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return ne!==null?null:E(x,N,""+P,G);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case O:return P.key===ne?A(x,N,P,G):null;case Q:return P.key===ne?z(x,N,P,G):null;case S:return ne=P._init,P=ne(P._payload),H(x,N,P,G)}if(it(P)||L(P))return ne!==null?null:q(x,N,P,G,null);if(typeof P.then=="function")return H(x,N,qu(P),G);if(P.$$typeof===fe)return H(x,N,Ou(x,P),G);Gu(x,P)}return null}function B(x,N,P,G,ne){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return x=x.get(P)||null,E(N,x,""+G,ne);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case O:return x=x.get(G.key===null?P:G.key)||null,A(N,x,G,ne);case Q:return x=x.get(G.key===null?P:G.key)||null,z(N,x,G,ne);case S:var _e=G._init;return G=_e(G._payload),B(x,N,P,G,ne)}if(it(G)||L(G))return x=x.get(P)||null,q(N,x,G,ne,null);if(typeof G.then=="function")return B(x,N,P,qu(G),ne);if(G.$$typeof===fe)return B(x,N,P,Ou(N,G),ne);Gu(N,G)}return null}function ce(x,N,P,G){for(var ne=null,_e=null,se=N,le=N=0,At=null;se!==null&&le<P.length;le++){se.index>le?(At=se,se=null):At=se.sibling;var Oe=H(x,se,P[le],G);if(Oe===null){se===null&&(se=At);break}t&&se&&Oe.alternate===null&&n(x,se),N=f(Oe,N,le),_e===null?ne=Oe:_e.sibling=Oe,_e=Oe,se=At}if(le===P.length)return r(x,se),Me&&mr(x,le),ne;if(se===null){for(;le<P.length;le++)se=F(x,P[le],G),se!==null&&(N=f(se,N,le),_e===null?ne=se:_e.sibling=se,_e=se);return Me&&mr(x,le),ne}for(se=o(se);le<P.length;le++)At=B(se,x,le,P[le],G),At!==null&&(t&&At.alternate!==null&&se.delete(At.key===null?le:At.key),N=f(At,N,le),_e===null?ne=At:_e.sibling=At,_e=At);return t&&se.forEach(function(Rs){return n(x,Rs)}),Me&&mr(x,le),ne}function oe(x,N,P,G){if(P==null)throw Error(a(151));for(var ne=null,_e=null,se=N,le=N=0,At=null,Oe=P.next();se!==null&&!Oe.done;le++,Oe=P.next()){se.index>le?(At=se,se=null):At=se.sibling;var Rs=H(x,se,Oe.value,G);if(Rs===null){se===null&&(se=At);break}t&&se&&Rs.alternate===null&&n(x,se),N=f(Rs,N,le),_e===null?ne=Rs:_e.sibling=Rs,_e=Rs,se=At}if(Oe.done)return r(x,se),Me&&mr(x,le),ne;if(se===null){for(;!Oe.done;le++,Oe=P.next())Oe=F(x,Oe.value,G),Oe!==null&&(N=f(Oe,N,le),_e===null?ne=Oe:_e.sibling=Oe,_e=Oe);return Me&&mr(x,le),ne}for(se=o(se);!Oe.done;le++,Oe=P.next())Oe=B(se,x,le,Oe.value,G),Oe!==null&&(t&&Oe.alternate!==null&&se.delete(Oe.key===null?le:Oe.key),N=f(Oe,N,le),_e===null?ne=Oe:_e.sibling=Oe,_e=Oe);return t&&se.forEach(function(O1){return n(x,O1)}),Me&&mr(x,le),ne}function Fe(x,N,P,G){if(typeof P=="object"&&P!==null&&P.type===K&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case O:e:{for(var ne=P.key;N!==null;){if(N.key===ne){if(ne=P.type,ne===K){if(N.tag===7){r(x,N.sibling),G=c(N,P.props.children),G.return=x,x=G;break e}}else if(N.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===S&&Cm(ne)===N.type){r(x,N.sibling),G=c(N,P.props),Fo(G,P),G.return=x,x=G;break e}r(x,N);break}else n(x,N);N=N.sibling}P.type===K?(G=pr(P.props.children,x.mode,G,P.key),G.return=x,x=G):(G=Cu(P.type,P.key,P.props,null,x.mode,G),Fo(G,P),G.return=x,x=G)}return _(x);case Q:e:{for(ne=P.key;N!==null;){if(N.key===ne)if(N.tag===4&&N.stateNode.containerInfo===P.containerInfo&&N.stateNode.implementation===P.implementation){r(x,N.sibling),G=c(N,P.children||[]),G.return=x,x=G;break e}else{r(x,N);break}else n(x,N);N=N.sibling}G=zh(P,x.mode,G),G.return=x,x=G}return _(x);case S:return ne=P._init,P=ne(P._payload),Fe(x,N,P,G)}if(it(P))return ce(x,N,P,G);if(L(P)){if(ne=L(P),typeof ne!="function")throw Error(a(150));return P=ne.call(P),oe(x,N,P,G)}if(typeof P.then=="function")return Fe(x,N,qu(P),G);if(P.$$typeof===fe)return Fe(x,N,Ou(x,P),G);Gu(x,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,N!==null&&N.tag===6?(r(x,N.sibling),G=c(N,P),G.return=x,x=G):(r(x,N),G=Ph(P,x.mode,G),G.return=x,x=G),_(x)):r(x,N)}return function(x,N,P,G){try{Go=0;var ne=Fe(x,N,P,G);return Aa=null,ne}catch(se){if(se===Lo||se===Mu)throw se;var _e=rn(29,se,null,x.mode);return _e.lanes=G,_e.return=x,_e}finally{}}}var wa=Rm(!0),Im=Rm(!1),An=Y(null),ni=null;function fs(t){var n=t.alternate;X(_t,_t.current&1),X(An,t),ni===null&&(n===null||Ea.current!==null||n.memoizedState!==null)&&(ni=t)}function Nm(t){if(t.tag===22){if(X(_t,_t.current),X(An,t),ni===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(ni=t)}}else ds()}function ds(){X(_t,_t.current),X(An,An.current)}function xi(t){$(An),ni===t&&(ni=null),$(_t)}var _t=Y(0);function Fu(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||od(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function yf(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:b({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var vf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=un(),c=us(o);c.payload=n,r!=null&&(c.callback=r),n=cs(t,c,o),n!==null&&(cn(n,t,o),Po(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=un(),c=us(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=cs(t,c,o),n!==null&&(cn(n,t,o),Po(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=un(),o=us(r);o.tag=2,n!=null&&(o.callback=n),n=cs(t,o,r),n!==null&&(cn(n,t,r),Po(n,t,r))}};function Om(t,n,r,o,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!Ro(r,o)||!Ro(c,f):!0}function Dm(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&vf.enqueueReplaceState(n,n.state,null)}function br(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=b({},r));for(var c in t)r[c]===void 0&&(r[c]=t[c])}return r}var Yu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Mm(t){Yu(t)}function km(t){console.error(t)}function xm(t){Yu(t)}function Ku(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Lm(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ef(t,n,r){return r=us(r),r.tag=3,r.payload={element:null},r.callback=function(){Ku(t,n)},r}function Um(t){return t=us(t),t.tag=3,t}function Pm(t,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Lm(n,r,o)}}var _=r.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Lm(n,r,o),typeof c!="function"&&(vs===null?vs=new Set([this]):vs.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function OS(t,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Mo(n,r,c,!0),r=An.current,r!==null){switch(r.tag){case 13:return ni===null?Gf():r.alternate===null&&at===0&&(at=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===Xh?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),Yf(t,o,c)),!1;case 22:return r.flags|=65536,o===Xh?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),Yf(t,o,c)),!1}throw Error(a(435,r.tag))}return Yf(t,o,c),Gf(),!1}if(Me)return n=An.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==jh&&(t=Error(a(422),{cause:o}),Do(En(t,r)))):(o!==jh&&(n=Error(a(423),{cause:o}),Do(En(n,r))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=En(o,r),c=Ef(t.stateNode,o,c),Zh(t,c),at!==4&&(at=2)),!1;var f=Error(a(520),{cause:o});if(f=En(f,r),$o===null?$o=[f]:$o.push(f),at!==4&&(at=2),n===null)return!0;o=En(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=c&-c,r.lanes|=t,t=Ef(r.stateNode,o,t),Zh(r,t),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(vs===null||!vs.has(f))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Um(c),Pm(c,t,r,o),Zh(r,c),!1}r=r.return}while(r!==null);return!1}var zm=Error(a(461)),St=!1;function Ot(t,n,r,o){n.child=t===null?Im(n,null,r,o):wa(n,t.child,r,o)}function Hm(t,n,r,o,c){r=r.render;var f=n.ref;if("ref"in o){var _={};for(var E in o)E!=="ref"&&(_[E]=o[E])}else _=o;return Er(n),o=nf(t,n,r,_,f,c),E=sf(),t!==null&&!St?(rf(t,n,c),Li(t,n,c)):(Me&&E&&Hh(n),n.flags|=1,Ot(t,n,o,c),n.child)}function Bm(t,n,r,o,c){if(t===null){var f=r.type;return typeof f=="function"&&!Uh(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,jm(t,n,f,o,c)):(t=Cu(r.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!If(t,c)){var _=f.memoizedProps;if(r=r.compare,r=r!==null?r:Ro,r(_,o)&&t.ref===n.ref)return Li(t,n,c)}return n.flags|=1,t=Ii(f,o),t.ref=n.ref,t.return=n,n.child=t}function jm(t,n,r,o,c){if(t!==null){var f=t.memoizedProps;if(Ro(f,o)&&t.ref===n.ref)if(St=!1,n.pendingProps=o=f,If(t,c))(t.flags&131072)!==0&&(St=!0);else return n.lanes=t.lanes,Li(t,n,c)}return Tf(t,n,r,o,c)}function Vm(t,n,r){var o=n.pendingProps,c=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|r:r,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return qm(t,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Du(n,f!==null?f.cachePool:null),f!==null?jg(n,f):Jh(),Nm(n);else return n.lanes=n.childLanes=536870912,qm(t,n,f!==null?f.baseLanes|r:r,r)}else f!==null?(Du(n,f.cachePool),jg(n,f),ds(),n.memoizedState=null):(t!==null&&Du(n,null),Jh(),ds());return Ot(t,n,c,r),n.child}function qm(t,n,r,o){var c=Kh();return c=c===null?null:{parent:mt._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},t!==null&&Du(n,null),Jh(),Nm(n),t!==null&&Mo(t,n,o,!0),null}function Xu(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function Tf(t,n,r,o,c){return Er(n),r=nf(t,n,r,o,void 0,c),o=sf(),t!==null&&!St?(rf(t,n,c),Li(t,n,c)):(Me&&o&&Hh(n),n.flags|=1,Ot(t,n,r,c),n.child)}function Gm(t,n,r,o,c,f){return Er(n),n.updateQueue=null,r=qg(n,o,r,c),Vg(t),o=sf(),t!==null&&!St?(rf(t,n,f),Li(t,n,f)):(Me&&o&&Hh(n),n.flags|=1,Ot(t,n,r,f),n.child)}function Fm(t,n,r,o,c){if(Er(n),n.stateNode===null){var f=ga,_=r.contextType;typeof _=="object"&&_!==null&&(f=Lt(_)),f=new r(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=vf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Wh(n),_=r.contextType,f.context=typeof _=="object"&&_!==null?Lt(_):ga,f.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(yf(n,r,_,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&vf.enqueueReplaceState(f,f.state,null),Ho(n,o,f,c),zo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,A=br(r,E);f.props=A;var z=f.context,q=r.contextType;_=ga,typeof q=="object"&&q!==null&&(_=Lt(q));var F=r.getDerivedStateFromProps;q=typeof F=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,q||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||z!==_)&&Dm(n,f,o,_),ls=!1;var H=n.memoizedState;f.state=H,Ho(n,o,f,c),zo(),z=n.memoizedState,E||H!==z||ls?(typeof F=="function"&&(yf(n,r,F,o),z=n.memoizedState),(A=ls||Om(n,r,A,o,H,z,_))?(q||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=z),f.props=o,f.state=z,f.context=_,o=A):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Qh(t,n),_=n.memoizedProps,q=br(r,_),f.props=q,F=n.pendingProps,H=f.context,z=r.contextType,A=ga,typeof z=="object"&&z!==null&&(A=Lt(z)),E=r.getDerivedStateFromProps,(z=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==F||H!==A)&&Dm(n,f,o,A),ls=!1,H=n.memoizedState,f.state=H,Ho(n,o,f,c),zo();var B=n.memoizedState;_!==F||H!==B||ls||t!==null&&t.dependencies!==null&&Nu(t.dependencies)?(typeof E=="function"&&(yf(n,r,E,o),B=n.memoizedState),(q=ls||Om(n,r,q,o,H,B,A)||t!==null&&t.dependencies!==null&&Nu(t.dependencies))?(z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,B,A),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,B,A)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&H===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&H===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=B),f.props=o,f.state=B,f.context=A,o=q):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&H===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&H===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Xu(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=wa(n,t.child,null,c),n.child=wa(n,null,r,c)):Ot(t,n,r,c),n.memoizedState=f.state,t=n.child):t=Li(t,n,c),t}function Ym(t,n,r,o){return Oo(),n.flags|=256,Ot(t,n,r,o),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(t){return{baseLanes:t,cachePool:kg()}}function Af(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=wn),t}function Km(t,n,r){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(_t.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(c?fs(n):ds(),Me){var E=rt,A;if(A=E){e:{for(A=E,E=ti;A.nodeType!==8;){if(!E){E=null;break e}if(A=Un(A.nextSibling),A===null){E=null;break e}}E=A}E!==null?(n.memoizedState={dehydrated:E,treeContext:gr!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},A=rn(18,null,null,0),A.stateNode=E,A.return=n,n.child=A,qt=n,rt=null,A=!0):A=!1}A||yr(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return od(E)?n.lanes=32:n.lanes=536870912,null;xi(n)}return E=o.children,o=o.fallback,c?(ds(),c=n.mode,E=Wu({mode:"hidden",children:E},c),o=pr(o,c,r,null),E.return=n,o.return=n,E.sibling=o,n.child=E,c=n.child,c.memoizedState=bf(r),c.childLanes=Af(t,_,r),n.memoizedState=Sf,o):(fs(n),wf(n,E))}if(A=t.memoizedState,A!==null&&(E=A.dehydrated,E!==null)){if(f)n.flags&256?(fs(n),n.flags&=-257,n=Cf(t,n,r)):n.memoizedState!==null?(ds(),n.child=t.child,n.flags|=128,n=null):(ds(),c=o.fallback,E=n.mode,o=Wu({mode:"visible",children:o.children},E),c=pr(c,E,r,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,wa(n,t.child,null,r),o=n.child,o.memoizedState=bf(r),o.childLanes=Af(t,_,r),n.memoizedState=Sf,n=c);else if(fs(n),od(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var z=_.dgst;_=z,o=Error(a(419)),o.stack="",o.digest=_,Do({value:o,source:null,stack:null}),n=Cf(t,n,r)}else if(St||Mo(t,n,r,!1),_=(r&t.childLanes)!==0,St||_){if(_=We,_!==null&&(o=r&-r,o=(o&42)!==0?1:Qs(o),o=(o&(_.suspendedLanes|r))!==0?0:o,o!==0&&o!==A.retryLane))throw A.retryLane=o,pa(t,o),cn(_,t,o),zm;E.data==="$?"||Gf(),n=Cf(t,n,r)}else E.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=A.treeContext,rt=Un(E.nextSibling),qt=n,Me=!0,_r=null,ti=!1,t!==null&&(Sn[bn++]=Ni,Sn[bn++]=Oi,Sn[bn++]=gr,Ni=t.id,Oi=t.overflow,gr=n),n=wf(n,o.children),n.flags|=4096);return n}return c?(ds(),c=o.fallback,E=n.mode,A=t.child,z=A.sibling,o=Ii(A,{mode:"hidden",children:o.children}),o.subtreeFlags=A.subtreeFlags&65011712,z!==null?c=Ii(z,c):(c=pr(c,E,r,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,E=t.child.memoizedState,E===null?E=bf(r):(A=E.cachePool,A!==null?(z=mt._currentValue,A=A.parent!==z?{parent:z,pool:z}:A):A=kg(),E={baseLanes:E.baseLanes|r,cachePool:A}),c.memoizedState=E,c.childLanes=Af(t,_,r),n.memoizedState=Sf,o):(fs(n),r=t.child,t=r.sibling,r=Ii(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=r,n.memoizedState=null,r)}function wf(t,n){return n=Wu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Wu(t,n){return t=rn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Cf(t,n,r){return wa(n,t.child,null,r),t=wf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Xm(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),qh(t.return,n,r)}function Rf(t,n,r,o,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=r,f.tailMode=c)}function Wm(t,n,r){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Ot(t,n,o.children,r),o=_t.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xm(t,r,n);else if(t.tag===19)Xm(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(X(_t,o),c){case"forwards":for(r=n.child,c=null;r!==null;)t=r.alternate,t!==null&&Fu(t)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),Rf(n,!1,c,r,f);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Fu(t)===null){n.child=c;break}t=c.sibling,c.sibling=r,r=c,c=t}Rf(n,!0,r,null,f);break;case"together":Rf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Li(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),ys|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(Mo(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,r=Ii(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Ii(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function If(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Nu(t)))}function DS(t,n,r){switch(n.tag){case 3:Xe(n,n.stateNode.containerInfo),os(n,mt,t.memoizedState.cache),Oo();break;case 27:case 5:Ji(n);break;case 4:Xe(n,n.stateNode.containerInfo);break;case 10:os(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(fs(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Km(t,n,r):(fs(n),t=Li(t,n,r),t!==null?t.sibling:null);fs(n);break;case 19:var c=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Mo(t,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return Wm(t,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),X(_t,_t.current),o)break;return null;case 22:case 23:return n.lanes=0,Vm(t,n,r);case 24:os(n,mt,t.memoizedState.cache)}return Li(t,n,r)}function Qm(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)St=!0;else{if(!If(t,r)&&(n.flags&128)===0)return St=!1,DS(t,n,r);St=(t.flags&131072)!==0}else St=!1,Me&&(n.flags&1048576)!==0&&Cg(n,Iu,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Uh(o)?(t=br(o,t),n.tag=1,n=Fm(null,n,o,t,r)):(n.tag=0,n=Tf(null,n,o,t,r));else{if(o!=null){if(c=o.$$typeof,c===Ee){n.tag=11,n=Hm(null,n,o,t,r);break e}else if(c===k){n.tag=14,n=Bm(null,n,o,t,r);break e}}throw n=It(o)||o,Error(a(306,n,""))}}return n;case 0:return Tf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=br(o,n.pendingProps),Fm(t,n,o,c,r);case 3:e:{if(Xe(n,n.stateNode.containerInfo),t===null)throw Error(a(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Qh(t,n),Ho(n,o,null,r);var _=n.memoizedState;if(o=_.cache,os(n,mt,o),o!==f.cache&&Gh(n,[mt],r,!0),zo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ym(t,n,o,r);break e}else if(o!==c){c=En(Error(a(424)),n),Do(c),n=Ym(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(rt=Un(t.firstChild),qt=n,Me=!0,_r=null,ti=!0,r=Im(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Oo(),o===c){n=Li(t,n,r);break e}Ot(t,n,o,r)}n=n.child}return n;case 26:return Xu(t,n),t===null?(r=ey(n.type,null,n.pendingProps,null))?n.memoizedState=r:Me||(r=n.type,t=n.pendingProps,o=uc(he.current).createElement(r),o[gt]=n,o[ct]=t,Mt(o,r,t),ot(o),n.stateNode=o):n.memoizedState=ey(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ji(n),t===null&&Me&&(o=n.stateNode=Z_(n.type,n.pendingProps,he.current),qt=n,ti=!0,c=rt,Ss(n.type)?(ld=c,rt=Un(o.firstChild)):rt=c),Ot(t,n,n.pendingProps.children,r),Xu(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((c=o=rt)&&(o=r1(o,n.type,n.pendingProps,ti),o!==null?(n.stateNode=o,qt=n,rt=Un(o.firstChild),ti=!1,c=!0):c=!1),c||yr(n)),Ji(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,sd(c,f)?o=null:_!==null&&sd(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=nf(t,n,bS,null,null,r),ol._currentValue=c),Xu(t,n),Ot(t,n,o,r),n.child;case 6:return t===null&&Me&&((t=r=rt)&&(r=a1(r,n.pendingProps,ti),r!==null?(n.stateNode=r,qt=n,rt=null,t=!0):t=!1),t||yr(n)),null;case 13:return Km(t,n,r);case 4:return Xe(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=wa(n,null,o,r):Ot(t,n,o,r),n.child;case 11:return Hm(t,n,n.type,n.pendingProps,r);case 7:return Ot(t,n,n.pendingProps,r),n.child;case 8:return Ot(t,n,n.pendingProps.children,r),n.child;case 12:return Ot(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,os(n,n.type,o.value),Ot(t,n,o.children,r),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Er(n),c=Lt(c),o=o(c),n.flags|=1,Ot(t,n,o,r),n.child;case 14:return Bm(t,n,n.type,n.pendingProps,r);case 15:return jm(t,n,n.type,n.pendingProps,r);case 19:return Wm(t,n,r);case 31:return o=n.pendingProps,r=n.mode,o={mode:o.mode,children:o.children},t===null?(r=Wu(o,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=Ii(t.child,o),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return Vm(t,n,r);case 24:return Er(n),o=Lt(mt),t===null?(c=Kh(),c===null&&(c=We,f=Fh(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=r),c=f),n.memoizedState={parent:o,cache:c},Wh(n),os(n,mt,c)):((t.lanes&r)!==0&&(Qh(t,n),Ho(n,null,null,r),zo()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),os(n,mt,o)):(o=f.cache,os(n,mt,o),o!==c.cache&&Gh(n,[mt],r,!0))),Ot(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Ui(t){t.flags|=4}function Zm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ry(n)){if(n=An.current,n!==null&&((Ae&4194048)===Ae?ni!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||n!==ni))throw Uo=Xh,xg;t.flags|=8192}}function Qu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?eu():536870912,t.lanes|=n,Na|=n)}function Yo(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function nt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function MS(t,n,r){var o=n.pendingProps;switch(Bh(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(n),null;case 1:return nt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Mi(mt),Fn(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(No(n)?Ui(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ng())),nt(n),null;case 26:return r=n.memoizedState,t===null?(Ui(n),r!==null?(nt(n),Zm(n,r)):(nt(n),n.flags&=-16777217)):r?r!==t.memoizedState?(Ui(n),nt(n),Zm(n,r)):(nt(n),n.flags&=-16777217):(t.memoizedProps!==o&&Ui(n),nt(n),n.flags&=-16777217),null;case 27:pi(n),r=he.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ui(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return nt(n),null}t=ae.current,No(n)?Rg(n):(t=Z_(c,o,r),n.stateNode=t,Ui(n))}return nt(n),null;case 5:if(pi(n),r=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ui(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return nt(n),null}if(t=ae.current,No(n))Rg(n);else{switch(c=uc(he.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(r,{is:o.is}):c.createElement(r)}}t[gt]=n,t[ct]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(Mt(t,r,o),r){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ui(n)}}return nt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ui(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(t=he.current,No(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,c=qt,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[gt]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||G_(t.nodeValue,r)),t||yr(n)}else t=uc(t).createTextNode(o),t[gt]=n,n.stateNode=t}return nt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=No(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[gt]=n}else Oo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nt(n),c=!1}else c=Ng(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(xi(n),n):(xi(n),null)}if(xi(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,t=t!==null&&t.memoizedState!==null,r){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return r!==t&&r&&(n.child.flags|=8192),Qu(n,n.updateQueue),nt(n),null;case 4:return Fn(),t===null&&Jf(n.stateNode.containerInfo),nt(n),null;case 10:return Mi(n.type),nt(n),null;case 19:if($(_t),c=n.memoizedState,c===null)return nt(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)Yo(c,!1);else{if(at!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Fu(t),f!==null){for(n.flags|=128,Yo(c,!1),t=f.updateQueue,n.updateQueue=t,Qu(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)wg(r,t),r=r.sibling;return X(_t,_t.current&1|2),n.child}t=t.sibling}c.tail!==null&&pn()>Ju&&(n.flags|=128,o=!0,Yo(c,!1),n.lanes=4194304)}else{if(!o)if(t=Fu(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Qu(n,t),Yo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Me)return nt(n),null}else 2*pn()-c.renderingStartTime>Ju&&r!==536870912&&(n.flags|=128,o=!0,Yo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=pn(),n.sibling=null,t=_t.current,X(_t,o?t&1|2:t&1),n):(nt(n),null);case 22:case 23:return xi(n),ef(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(nt(n),n.subtreeFlags&6&&(n.flags|=8192)):nt(n),r=n.updateQueue,r!==null&&Qu(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&$(Tr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Mi(mt),nt(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function kS(t,n){switch(Bh(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Mi(mt),Fn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pi(n),null;case 13:if(xi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Oo()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $(_t),null;case 4:return Fn(),null;case 10:return Mi(n.type),null;case 22:case 23:return xi(n),ef(),t!==null&&$(Tr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Mi(mt),null;case 25:return null;default:return null}}function $m(t,n){switch(Bh(n),n.tag){case 3:Mi(mt),Fn();break;case 26:case 27:case 5:pi(n);break;case 4:Fn();break;case 13:xi(n);break;case 19:$(_t);break;case 10:Mi(n.type);break;case 22:case 23:xi(n),ef(),t!==null&&$(Tr);break;case 24:Mi(mt)}}function Ko(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&t)===t){o=void 0;var f=r.create,_=r.inst;o=f(),_.destroy=o}r=r.next}while(r!==c)}}catch(E){Ke(n,n.return,E)}}function ps(t,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var _=o.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,c=n;var A=r,z=E;try{z()}catch(q){Ke(c,A,q)}}}o=o.next}while(o!==f)}}catch(q){Ke(n,n.return,q)}}function Jm(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{Bg(n,r)}catch(o){Ke(t,t.return,o)}}}function e_(t,n,r){r.props=br(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Ke(t,n,o)}}function Xo(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(c){Ke(t,n,c)}}function ii(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){Ke(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Ke(t,n,c)}else r.current=null}function t_(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){Ke(t,t.return,c)}}function Nf(t,n,r){try{var o=t.stateNode;e1(o,t.type,r,n),o[ct]=n}catch(c){Ke(t,t.return,c)}}function n_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ss(t.type)||t.tag===4}function Of(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||n_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ss(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=lc));else if(o!==4&&(o===27&&Ss(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(Df(t,n,r),t=t.sibling;t!==null;)Df(t,n,r),t=t.sibling}function Zu(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&Ss(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Zu(t,n,r),t=t.sibling;t!==null;)Zu(t,n,r),t=t.sibling}function i_(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mt(n,o,r),n[gt]=t,n[ct]=r}catch(f){Ke(t,t.return,f)}}var Pi=!1,ut=!1,Mf=!1,s_=typeof WeakSet=="function"?WeakSet:Set,bt=null;function xS(t,n){if(t=t.containerInfo,nd=gc,t=gg(t),Nh(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var _=0,E=-1,A=-1,z=0,q=0,F=t,H=null;t:for(;;){for(var B;F!==r||c!==0&&F.nodeType!==3||(E=_+c),F!==f||o!==0&&F.nodeType!==3||(A=_+o),F.nodeType===3&&(_+=F.nodeValue.length),(B=F.firstChild)!==null;)H=F,F=B;for(;;){if(F===t)break t;if(H===r&&++z===c&&(E=_),H===f&&++q===o&&(A=_),(B=F.nextSibling)!==null)break;F=H,H=F.parentNode}F=B}r=E===-1||A===-1?null:{start:E,end:A}}else r=null}r=r||{start:0,end:0}}else r=null;for(id={focusedElem:t,selectionRange:r},gc=!1,bt=n;bt!==null;)if(n=bt,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,bt=t;else for(;bt!==null;){switch(n=bt,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,r=n,c=f.memoizedProps,f=f.memoizedState,o=r.stateNode;try{var ce=br(r.type,c,r.elementType===r.type);t=o.getSnapshotBeforeUpdate(ce,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(oe){Ke(r,r.return,oe)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)ad(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ad(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,bt=t;break}bt=n.return}}function r_(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:gs(t,r),o&4&&Ko(5,r);break;case 1:if(gs(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(_){Ke(r,r.return,_)}else{var c=br(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ke(r,r.return,_)}}o&64&&Jm(r),o&512&&Xo(r,r.return);break;case 3:if(gs(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Bg(t,n)}catch(_){Ke(r,r.return,_)}}break;case 27:n===null&&o&4&&i_(r);case 26:case 5:gs(t,r),n===null&&o&4&&t_(r),o&512&&Xo(r,r.return);break;case 12:gs(t,r);break;case 13:gs(t,r),o&4&&l_(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=qS.bind(null,r),o1(t,r))));break;case 22:if(o=r.memoizedState!==null||Pi,!o){n=n!==null&&n.memoizedState!==null||ut,c=Pi;var f=ut;Pi=o,(ut=n)&&!f?ms(t,r,(r.subtreeFlags&8772)!==0):gs(t,r),Pi=c,ut=f}break;case 30:break;default:gs(t,r)}}function a_(t){var n=t.alternate;n!==null&&(t.alternate=null,a_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$s(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tt=null,Wt=!1;function zi(t,n,r){for(r=r.child;r!==null;)o_(t,n,r),r=r.sibling}function o_(t,n,r){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(st,r)}catch{}switch(r.tag){case 26:ut||ii(r,n),zi(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:ut||ii(r,n);var o=tt,c=Wt;Ss(r.type)&&(tt=r.stateNode,Wt=!1),zi(t,n,r),il(r.stateNode),tt=o,Wt=c;break;case 5:ut||ii(r,n);case 6:if(o=tt,c=Wt,tt=null,zi(t,n,r),tt=o,Wt=c,tt!==null)if(Wt)try{(tt.nodeType===9?tt.body:tt.nodeName==="HTML"?tt.ownerDocument.body:tt).removeChild(r.stateNode)}catch(f){Ke(r,n,f)}else try{tt.removeChild(r.stateNode)}catch(f){Ke(r,n,f)}break;case 18:tt!==null&&(Wt?(t=tt,W_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),hl(t)):W_(tt,r.stateNode));break;case 4:o=tt,c=Wt,tt=r.stateNode.containerInfo,Wt=!0,zi(t,n,r),tt=o,Wt=c;break;case 0:case 11:case 14:case 15:ut||ps(2,r,n),ut||ps(4,r,n),zi(t,n,r);break;case 1:ut||(ii(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&e_(r,n,o)),zi(t,n,r);break;case 21:zi(t,n,r);break;case 22:ut=(o=ut)||r.memoizedState!==null,zi(t,n,r),ut=o;break;default:zi(t,n,r)}}function l_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hl(t)}catch(r){Ke(n,n.return,r)}}function LS(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new s_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new s_),n;default:throw Error(a(435,t.tag))}}function kf(t,n){var r=LS(t);n.forEach(function(o){var c=GS.bind(null,t,o);r.has(o)||(r.add(o),o.then(c,c))})}function an(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],f=t,_=n,E=_;e:for(;E!==null;){switch(E.tag){case 27:if(Ss(E.type)){tt=E.stateNode,Wt=!1;break e}break;case 5:tt=E.stateNode,Wt=!1;break e;case 3:case 4:tt=E.stateNode.containerInfo,Wt=!0;break e}E=E.return}if(tt===null)throw Error(a(160));o_(f,_,c),tt=null,Wt=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)u_(n,t),n=n.sibling}var Ln=null;function u_(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:an(n,t),on(t),o&4&&(ps(3,t,t.return),Ko(3,t),ps(5,t,t.return));break;case 1:an(n,t),on(t),o&512&&(ut||r===null||ii(r,r.return)),o&64&&Pi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var c=Ln;if(an(n,t),on(t),o&512&&(ut||r===null||ii(r,r.return)),o&4){var f=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Zs]||f[gt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Mt(f,o,r),f[gt]=t,ot(f),o=f;break e;case"link":var _=iy("link","href",c).get(o+(r.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){_.splice(E,1);break t}}f=c.createElement(o),Mt(f,o,r),c.head.appendChild(f);break;case"meta":if(_=iy("meta","content",c).get(o+(r.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){_.splice(E,1);break t}}f=c.createElement(o),Mt(f,o,r),c.head.appendChild(f);break;default:throw Error(a(468,o))}f[gt]=t,ot(f),o=f}t.stateNode=o}else sy(c,t.type,t.stateNode);else t.stateNode=ny(c,o,t.memoizedProps);else f!==o?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,o===null?sy(c,t.type,t.stateNode):ny(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Nf(t,t.memoizedProps,r.memoizedProps)}break;case 27:an(n,t),on(t),o&512&&(ut||r===null||ii(r,r.return)),r!==null&&o&4&&Nf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(an(n,t),on(t),o&512&&(ut||r===null||ii(r,r.return)),t.flags&32){c=t.stateNode;try{mn(c,"")}catch(B){Ke(t,t.return,B)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Nf(t,c,r!==null?r.memoizedProps:c)),o&1024&&(Mf=!0);break;case 6:if(an(n,t),on(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(B){Ke(t,t.return,B)}}break;case 3:if(fc=null,c=Ln,Ln=cc(n.containerInfo),an(n,t),Ln=c,on(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{hl(n.containerInfo)}catch(B){Ke(t,t.return,B)}Mf&&(Mf=!1,c_(t));break;case 4:o=Ln,Ln=cc(t.stateNode.containerInfo),an(n,t),on(t),Ln=o;break;case 12:an(n,t),on(t);break;case 13:an(n,t),on(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Hf=pn()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kf(t,o)));break;case 22:c=t.memoizedState!==null;var A=r!==null&&r.memoizedState!==null,z=Pi,q=ut;if(Pi=z||c,ut=q||A,an(n,t),ut=q,Pi=z,on(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(r===null||A||Pi||ut||Ar(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){A=r=n;try{if(f=A.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=A.stateNode;var F=A.memoizedProps.style,H=F!=null&&F.hasOwnProperty("display")?F.display:null;E.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(B){Ke(A,A.return,B)}}}else if(n.tag===6){if(r===null){A=n;try{A.stateNode.nodeValue=c?"":A.memoizedProps}catch(B){Ke(A,A.return,B)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,kf(t,r))));break;case 19:an(n,t),on(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kf(t,o)));break;case 30:break;case 21:break;default:an(n,t),on(t)}}function on(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(n_(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var c=r.stateNode,f=Of(t);Zu(t,f,c);break;case 5:var _=r.stateNode;r.flags&32&&(mn(_,""),r.flags&=-33);var E=Of(t);Zu(t,E,_);break;case 3:case 4:var A=r.stateNode.containerInfo,z=Of(t);Df(t,z,A);break;default:throw Error(a(161))}}catch(q){Ke(t,t.return,q)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function c_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;c_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function gs(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)r_(t,n.alternate,n),n=n.sibling}function Ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ps(4,n,n.return),Ar(n);break;case 1:ii(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&e_(n,n.return,r),Ar(n);break;case 27:il(n.stateNode);case 26:case 5:ii(n,n.return),Ar(n);break;case 22:n.memoizedState===null&&Ar(n);break;case 30:Ar(n);break;default:Ar(n)}t=t.sibling}}function ms(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ms(c,f,r),Ko(4,f);break;case 1:if(ms(c,f,r),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(z){Ke(o,o.return,z)}if(o=f,c=o.updateQueue,c!==null){var E=o.stateNode;try{var A=c.shared.hiddenCallbacks;if(A!==null)for(c.shared.hiddenCallbacks=null,c=0;c<A.length;c++)Hg(A[c],E)}catch(z){Ke(o,o.return,z)}}r&&_&64&&Jm(f),Xo(f,f.return);break;case 27:i_(f);case 26:case 5:ms(c,f,r),r&&o===null&&_&4&&t_(f),Xo(f,f.return);break;case 12:ms(c,f,r);break;case 13:ms(c,f,r),r&&_&4&&l_(c,f);break;case 22:f.memoizedState===null&&ms(c,f,r),Xo(f,f.return);break;case 30:break;default:ms(c,f,r)}n=n.sibling}}function xf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&ko(r))}function Lf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ko(t))}function si(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)h_(t,n,r,o),n=n.sibling}function h_(t,n,r,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:si(t,n,r,o),c&2048&&Ko(9,n);break;case 1:si(t,n,r,o);break;case 3:si(t,n,r,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ko(t)));break;case 12:if(c&2048){si(t,n,r,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(A){Ke(n,n.return,A)}}else si(t,n,r,o);break;case 13:si(t,n,r,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?si(t,n,r,o):Wo(t,n):f._visibility&2?si(t,n,r,o):(f._visibility|=2,Ca(t,n,r,o,(n.subtreeFlags&10256)!==0)),c&2048&&xf(_,n);break;case 24:si(t,n,r,o),c&2048&&Lf(n.alternate,n);break;default:si(t,n,r,o)}}function Ca(t,n,r,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,_=n,E=r,A=o,z=_.flags;switch(_.tag){case 0:case 11:case 15:Ca(f,_,E,A,c),Ko(8,_);break;case 23:break;case 22:var q=_.stateNode;_.memoizedState!==null?q._visibility&2?Ca(f,_,E,A,c):Wo(f,_):(q._visibility|=2,Ca(f,_,E,A,c)),c&&z&2048&&xf(_.alternate,_);break;case 24:Ca(f,_,E,A,c),c&&z&2048&&Lf(_.alternate,_);break;default:Ca(f,_,E,A,c)}n=n.sibling}}function Wo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,c=o.flags;switch(o.tag){case 22:Wo(r,o),c&2048&&xf(o.alternate,o);break;case 24:Wo(r,o),c&2048&&Lf(o.alternate,o);break;default:Wo(r,o)}n=n.sibling}}var Qo=8192;function Ra(t){if(t.subtreeFlags&Qo)for(t=t.child;t!==null;)f_(t),t=t.sibling}function f_(t){switch(t.tag){case 26:Ra(t),t.flags&Qo&&t.memoizedState!==null&&E1(Ln,t.memoizedState,t.memoizedProps);break;case 5:Ra(t);break;case 3:case 4:var n=Ln;Ln=cc(t.stateNode.containerInfo),Ra(t),Ln=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Qo,Qo=16777216,Ra(t),Qo=n):Ra(t));break;default:Ra(t)}}function d_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Zo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];bt=o,g_(o,t)}d_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)p_(t),t=t.sibling}function p_(t){switch(t.tag){case 0:case 11:case 15:Zo(t),t.flags&2048&&ps(9,t,t.return);break;case 3:Zo(t);break;case 12:Zo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,$u(t)):Zo(t);break;default:Zo(t)}}function $u(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];bt=o,g_(o,t)}d_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ps(8,n,n.return),$u(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,$u(n));break;default:$u(n)}t=t.sibling}}function g_(t,n){for(;bt!==null;){var r=bt;switch(r.tag){case 0:case 11:case 15:ps(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ko(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,bt=o;else e:for(r=t;bt!==null;){o=bt;var c=o.sibling,f=o.return;if(a_(o),o===r){bt=null;break e}if(c!==null){c.return=f,bt=c;break e}bt=f}}}var US={getCacheForType:function(t){var n=Lt(mt),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r}},PS=typeof WeakMap=="function"?WeakMap:Map,He=0,We=null,ye=null,Ae=0,Be=0,ln=null,_s=!1,Ia=!1,Uf=!1,Hi=0,at=0,ys=0,wr=0,Pf=0,wn=0,Na=0,$o=null,Qt=null,zf=!1,Hf=0,Ju=1/0,ec=null,vs=null,Dt=0,Es=null,Oa=null,Da=0,Bf=0,jf=null,m_=null,Jo=0,Vf=null;function un(){if((He&2)!==0&&Ae!==0)return Ae&-Ae;if(V.T!==null){var t=ya;return t!==0?t:Wf()}return es()}function __(){wn===0&&(wn=(Ae&536870912)===0||Me?uo():536870912);var t=An.current;return t!==null&&(t.flags|=32),wn}function cn(t,n,r){(t===We&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(Ma(t,0),Ts(t,Ae,wn,!1)),mi(t,r),((He&2)===0||t!==We)&&(t===We&&((He&2)===0&&(wr|=r),at===4&&Ts(t,Ae,wn,!1)),ri(t))}function y_(t,n,r){if((He&6)!==0)throw Error(a(327));var o=!r&&(n&124)===0&&(n&t.expiredLanes)===0||Ws(t,n),c=o?BS(t,n):Ff(t,n,!0),f=o;do{if(c===0){Ia&&!o&&Ts(t,n,0,!1);break}else{if(r=t.current.alternate,f&&!zS(r)){c=Ff(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var E=t;c=$o;var A=E.current.memoizedState.isDehydrated;if(A&&(Ma(E,_).flags|=256),_=Ff(E,_,!1),_!==2){if(Uf&&!A){E.errorRecoveryDisabledLanes|=f,wr|=f,c=4;break e}f=Qt,Qt=c,f!==null&&(Qt===null?Qt=f:Qt.push.apply(Qt,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){Ma(t,0),Ts(t,n,0,!0);break}e:{switch(o=t,f=c,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Ts(o,n,wn,!_s);break e;case 2:Qt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(c=Hf+300-pn(),10<c)){if(Ts(o,n,wn,!_s),Qr(o,0,!0)!==0)break e;o.timeoutHandle=K_(v_.bind(null,o,r,Qt,ec,zf,n,wn,wr,Na,_s,f,2,-0,0),c);break e}v_(o,r,Qt,ec,zf,n,wn,wr,Na,_s,f,0,-0,0)}}break}while(!0);ri(t)}function v_(t,n,r,o,c,f,_,E,A,z,q,F,H,B){if(t.timeoutHandle=-1,F=n.subtreeFlags,(F&8192||(F&16785408)===16785408)&&(al={stylesheets:null,count:0,unsuspend:v1},f_(n),F=T1(),F!==null)){t.cancelPendingCommit=F(C_.bind(null,t,n,f,r,o,c,_,E,A,q,1,H,B)),Ts(t,f,_,!z);return}C_(t,n,f,r,o,c,_,E,A)}function zS(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],f=c.getSnapshot;c=c.value;try{if(!sn(f(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ts(t,n,r,o){n&=~Pf,n&=~wr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-xt(c),_=1<<f;o[f]=-1,c&=~_}r!==0&&_i(t,r,n)}function tc(){return(He&6)===0?(el(0),!1):!0}function qf(){if(ye!==null){if(Be===0)var t=ye.return;else t=ye,Di=vr=null,af(t),Aa=null,Go=0,t=ye;for(;t!==null;)$m(t.alternate,t),t=t.return;ye=null}}function Ma(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,n1(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),qf(),We=t,ye=r=Ii(t.current,null),Ae=n,Be=0,ln=null,_s=!1,Ia=Ws(t,n),Uf=!1,Na=wn=Pf=wr=ys=at=0,Qt=$o=null,zf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-xt(o),f=1<<c;n|=t[c],o&=~f}return Hi=n,bu(),r}function E_(t,n){ge=null,V.H=Vu,n===Lo||n===Mu?(n=Pg(),Be=3):n===xg?(n=Pg(),Be=4):Be=n===zm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ln=n,ye===null&&(at=1,Ku(t,En(n,t.current)))}function T_(){var t=V.H;return V.H=Vu,t===null?Vu:t}function S_(){var t=V.A;return V.A=US,t}function Gf(){at=4,_s||(Ae&4194048)!==Ae&&An.current!==null||(Ia=!0),(ys&134217727)===0&&(wr&134217727)===0||We===null||Ts(We,Ae,wn,!1)}function Ff(t,n,r){var o=He;He|=2;var c=T_(),f=S_();(We!==t||Ae!==n)&&(ec=null,Ma(t,n)),n=!1;var _=at;e:do try{if(Be!==0&&ye!==null){var E=ye,A=ln;switch(Be){case 8:qf(),_=6;break e;case 3:case 2:case 9:case 6:An.current===null&&(n=!0);var z=Be;if(Be=0,ln=null,ka(t,E,A,z),r&&Ia){_=0;break e}break;default:z=Be,Be=0,ln=null,ka(t,E,A,z)}}HS(),_=at;break}catch(q){E_(t,q)}while(!0);return n&&t.shellSuspendCounter++,Di=vr=null,He=o,V.H=c,V.A=f,ye===null&&(We=null,Ae=0,bu()),_}function HS(){for(;ye!==null;)b_(ye)}function BS(t,n){var r=He;He|=2;var o=T_(),c=S_();We!==t||Ae!==n?(ec=null,Ju=pn()+500,Ma(t,n)):Ia=Ws(t,n);e:do try{if(Be!==0&&ye!==null){n=ye;var f=ln;t:switch(Be){case 1:Be=0,ln=null,ka(t,n,f,1);break;case 2:case 9:if(Lg(f)){Be=0,ln=null,A_(n);break}n=function(){Be!==2&&Be!==9||We!==t||(Be=7),ri(t)},f.then(n,n);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:Lg(f)?(Be=0,ln=null,A_(n)):(Be=0,ln=null,ka(t,n,f,7));break;case 5:var _=null;switch(ye.tag){case 26:_=ye.memoizedState;case 5:case 27:var E=ye;if(!_||ry(_)){Be=0,ln=null;var A=E.sibling;if(A!==null)ye=A;else{var z=E.return;z!==null?(ye=z,nc(z)):ye=null}break t}}Be=0,ln=null,ka(t,n,f,5);break;case 6:Be=0,ln=null,ka(t,n,f,6);break;case 8:qf(),at=6;break e;default:throw Error(a(462))}}jS();break}catch(q){E_(t,q)}while(!0);return Di=vr=null,V.H=o,V.A=c,He=r,ye!==null?0:(We=null,Ae=0,bu(),at)}function jS(){for(;ye!==null&&!ro();)b_(ye)}function b_(t){var n=Qm(t.alternate,t,Hi);t.memoizedProps=t.pendingProps,n===null?nc(t):ye=n}function A_(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=Gm(r,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=Gm(r,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:af(n);default:$m(r,n),n=ye=wg(n,Hi),n=Qm(r,n,Hi)}t.memoizedProps=t.pendingProps,n===null?nc(t):ye=n}function ka(t,n,r,o){Di=vr=null,af(n),Aa=null,Go=0;var c=n.return;try{if(OS(t,c,n,r,Ae)){at=1,Ku(t,En(r,t.current)),ye=null;return}}catch(f){if(c!==null)throw ye=c,f;at=1,Ku(t,En(r,t.current)),ye=null;return}n.flags&32768?(Me||o===1?t=!0:Ia||(Ae&536870912)!==0?t=!1:(_s=t=!0,(o===2||o===9||o===3||o===6)&&(o=An.current,o!==null&&o.tag===13&&(o.flags|=16384))),w_(n,t)):nc(n)}function nc(t){var n=t;do{if((n.flags&32768)!==0){w_(n,_s);return}t=n.return;var r=MS(n.alternate,n,Hi);if(r!==null){ye=r;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);at===0&&(at=5)}function w_(t,n){do{var r=kS(t.alternate,t);if(r!==null){r.flags&=32767,ye=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=r}while(t!==null);at=6,ye=null}function C_(t,n,r,o,c,f,_,E,A){t.cancelPendingCommit=null;do ic();while(Dt!==0);if((He&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=xh,co(t,r,f,_,E,A),t===We&&(ye=We=null,Ae=0),Oa=n,Es=t,Da=r,Bf=f,jf=c,m_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,FS(Fs,function(){return D_(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=V.T,V.T=null,c=Z.p,Z.p=2,_=He,He|=4;try{xS(t,n,r)}finally{He=_,Z.p=c,V.T=o}}Dt=1,R_(),I_(),N_()}}function R_(){if(Dt===1){Dt=0;var t=Es,n=Oa,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=V.T,V.T=null;var o=Z.p;Z.p=2;var c=He;He|=4;try{u_(n,t);var f=id,_=gg(t.containerInfo),E=f.focusedElem,A=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&pg(E.ownerDocument.documentElement,E)){if(A!==null&&Nh(E)){var z=A.start,q=A.end;if(q===void 0&&(q=z),"selectionStart"in E)E.selectionStart=z,E.selectionEnd=Math.min(q,E.value.length);else{var F=E.ownerDocument||document,H=F&&F.defaultView||window;if(H.getSelection){var B=H.getSelection(),ce=E.textContent.length,oe=Math.min(A.start,ce),Fe=A.end===void 0?oe:Math.min(A.end,ce);!B.extend&&oe>Fe&&(_=Fe,Fe=oe,oe=_);var x=dg(E,oe),N=dg(E,Fe);if(x&&N&&(B.rangeCount!==1||B.anchorNode!==x.node||B.anchorOffset!==x.offset||B.focusNode!==N.node||B.focusOffset!==N.offset)){var P=F.createRange();P.setStart(x.node,x.offset),B.removeAllRanges(),oe>Fe?(B.addRange(P),B.extend(N.node,N.offset)):(P.setEnd(N.node,N.offset),B.addRange(P))}}}}for(F=[],B=E;B=B.parentNode;)B.nodeType===1&&F.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<F.length;E++){var G=F[E];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}gc=!!nd,id=nd=null}finally{He=c,Z.p=o,V.T=r}}t.current=n,Dt=2}}function I_(){if(Dt===2){Dt=0;var t=Es,n=Oa,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=V.T,V.T=null;var o=Z.p;Z.p=2;var c=He;He|=4;try{r_(t,n.alternate,n)}finally{He=c,Z.p=o,V.T=r}}Dt=3}}function N_(){if(Dt===4||Dt===3){Dt=0,Zl();var t=Es,n=Oa,r=Da,o=m_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Dt=5:(Dt=0,Oa=Es=null,O_(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(vs=null),Zr(r),n=n.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(st,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=V.T,c=Z.p,Z.p=2,V.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var E=o[_];f(E.value,{componentStack:E.stack})}}finally{V.T=n,Z.p=c}}(Da&3)!==0&&ic(),ri(t),c=t.pendingLanes,(r&4194090)!==0&&(c&42)!==0?t===Vf?Jo++:(Jo=0,Vf=t):Jo=0,el(0)}}function O_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ko(n)))}function ic(t){return R_(),I_(),N_(),D_()}function D_(){if(Dt!==5)return!1;var t=Es,n=Bf;Bf=0;var r=Zr(Da),o=V.T,c=Z.p;try{Z.p=32>r?32:r,V.T=null,r=jf,jf=null;var f=Es,_=Da;if(Dt=0,Oa=Es=null,Da=0,(He&6)!==0)throw Error(a(331));var E=He;if(He|=4,p_(f.current),h_(f,f.current,_,r),He=E,el(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(st,f)}catch{}return!0}finally{Z.p=c,V.T=o,O_(t,n)}}function M_(t,n,r){n=En(r,n),n=Ef(t.stateNode,n,2),t=cs(t,n,2),t!==null&&(mi(t,2),ri(t))}function Ke(t,n,r){if(t.tag===3)M_(t,t,r);else for(;n!==null;){if(n.tag===3){M_(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(vs===null||!vs.has(o))){t=En(r,t),r=Um(2),o=cs(n,r,2),o!==null&&(Pm(r,o,n,t),mi(o,2),ri(o));break}}n=n.return}}function Yf(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new PS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(Uf=!0,c.add(r),t=VS.bind(null,t,n,r),n.then(t,t))}function VS(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,We===t&&(Ae&r)===r&&(at===4||at===3&&(Ae&62914560)===Ae&&300>pn()-Hf?(He&2)===0&&Ma(t,0):Pf|=r,Na===Ae&&(Na=0)),ri(t)}function k_(t,n){n===0&&(n=eu()),t=pa(t,n),t!==null&&(mi(t,n),ri(t))}function qS(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),k_(t,r)}function GS(t,n){var r=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),k_(t,r)}function FS(t,n){return qs(t,n)}var sc=null,xa=null,Kf=!1,rc=!1,Xf=!1,Cr=0;function ri(t){t!==xa&&t.next===null&&(xa===null?sc=xa=t:xa=xa.next=t),rc=!0,Kf||(Kf=!0,KS())}function el(t,n){if(!Xf&&rc){Xf=!0;do for(var r=!1,o=sc;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var _=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-xt(42|t)+1)-1,f&=c&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,P_(o,f))}else f=Ae,f=Qr(o,o===We?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ws(o,f)||(r=!0,P_(o,f));o=o.next}while(r);Xf=!1}}function YS(){x_()}function x_(){rc=Kf=!1;var t=0;Cr!==0&&(t1()&&(t=Cr),Cr=0);for(var n=pn(),r=null,o=sc;o!==null;){var c=o.next,f=L_(o,n);f===0?(o.next=null,r===null?sc=c:r.next=c,c===null&&(xa=r)):(r=o,(t!==0||(f&3)!==0)&&(rc=!0)),o=c}el(t)}function L_(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-xt(f),E=1<<_,A=c[_];A===-1?((E&r)===0||(E&o)!==0)&&(c[_]=lo(E,n)):A<=n&&(t.expiredLanes|=E),f&=~E}if(n=We,r=Ae,r=Qr(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Gs(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ws(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&Gs(o),Zr(r)){case 2:case 8:r=Xr;break;case 32:r=Fs;break;case 268435456:r=Wr;break;default:r=Fs}return o=U_.bind(null,t),r=qs(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&Gs(o),t.callbackPriority=2,t.callbackNode=null,2}function U_(t,n){if(Dt!==0&&Dt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(ic()&&t.callbackNode!==r)return null;var o=Ae;return o=Qr(t,t===We?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(y_(t,o,n),L_(t,pn()),t.callbackNode!=null&&t.callbackNode===r?U_.bind(null,t):null)}function P_(t,n){if(ic())return null;y_(t,n,!0)}function KS(){i1(function(){(He&6)!==0?qs(ao,YS):x_()})}function Wf(){return Cr===0&&(Cr=uo()),Cr}function z_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ia(""+t)}function H_(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function XS(t,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var f=z_((c[ct]||null).action),_=o.submitter;_&&(n=(n=_[ct]||null)?z_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new sa("action","action",null,o,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Cr!==0){var A=_?H_(c,_):new FormData(c);gf(r,{pending:!0,data:A,method:c.method,action:f},null,A)}}else typeof f=="function"&&(E.preventDefault(),A=_?H_(c,_):new FormData(c),gf(r,{pending:!0,data:A,method:c.method,action:f},f,A))},currentTarget:c}]})}}for(var Qf=0;Qf<kh.length;Qf++){var Zf=kh[Qf],WS=Zf.toLowerCase(),QS=Zf[0].toUpperCase()+Zf.slice(1);xn(WS,"on"+QS)}xn(yg,"onAnimationEnd"),xn(vg,"onAnimationIteration"),xn(Eg,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(dS,"onTransitionRun"),xn(pS,"onTransitionStart"),xn(gS,"onTransitionCancel"),xn(Tg,"onTransitionEnd"),yi("onMouseEnter",["mouseout","mouseover"]),yi("onMouseLeave",["mouseout","mouseover"]),yi("onPointerEnter",["pointerout","pointerover"]),yi("onPointerLeave",["pointerout","pointerover"]),Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function B_(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var E=o[_],A=E.instance,z=E.currentTarget;if(E=E.listener,A!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=z;try{f(c)}catch(q){Yu(q)}c.currentTarget=null,f=A}else for(_=0;_<o.length;_++){if(E=o[_],A=E.instance,z=E.currentTarget,E=E.listener,A!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=z;try{f(c)}catch(q){Yu(q)}c.currentTarget=null,f=A}}}}function ve(t,n){var r=n[fo];r===void 0&&(r=n[fo]=new Set);var o=t+"__bubble";r.has(o)||(j_(n,t,2,!1),r.add(o))}function $f(t,n,r){var o=0;n&&(o|=4),j_(r,t,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Jf(t){if(!t[ac]){t[ac]=!0,po.forEach(function(r){r!=="selectionchange"&&(ZS.has(r)||$f(r,!1,t),$f(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ac]||(n[ac]=!0,$f("selectionchange",!1,n))}}function j_(t,n,r,o){switch(hy(n)){case 2:var c=A1;break;case 8:c=w1;break;default:c=dd}r=c.bind(null,n,r,t),c=void 0,!yn||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,r,{capture:!0,passive:c}):t.addEventListener(n,r,!0):c!==void 0?t.addEventListener(n,r,{passive:c}):t.addEventListener(n,r,!1)}function ed(t,n,r,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var E=o.stateNode.containerInfo;if(E===c)break;if(_===4)for(_=o.return;_!==null;){var A=_.tag;if((A===3||A===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;E!==null;){if(_=ns(E),_===null)return;if(A=_.tag,A===5||A===6||A===26||A===27){o=f=_;continue e}E=E.parentNode}}o=o.return}lu(function(){var z=f,q=_n(r),F=[];e:{var H=Sg.get(t);if(H!==void 0){var B=sa,ce=t;switch(t){case"keypress":if(Zn(r)===0)break e;case"keydown":case"keyup":B=ca;break;case"focusin":ce="focus",B=oa;break;case"focusout":ce="blur",B=oa;break;case"beforeblur":case"afterblur":B=oa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=vn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=wh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=mu;break;case yg:case vg:case Eg:B=la;break;case Tg:B=yu;break;case"scroll":case"scrollend":B=uu;break;case"wheel":B=Yt;break;case"copy":case"cut":case"paste":B=ua;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Co;break;case"toggle":case"beforetoggle":B=Tu}var oe=(n&4)!==0,Fe=!oe&&(t==="scroll"||t==="scrollend"),x=oe?H!==null?H+"Capture":null:H;oe=[];for(var N=z,P;N!==null;){var G=N;if(P=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||P===null||x===null||(G=rr(N,x),G!=null&&oe.push(nl(N,G,P))),Fe)break;N=N.return}0<oe.length&&(H=new B(H,ce,null,r,q),F.push({event:H,listeners:oe}))}}if((n&7)===0){e:{if(H=t==="mouseover"||t==="pointerover",B=t==="mouseout"||t==="pointerout",H&&r!==Ti&&(ce=r.relatedTarget||r.fromElement)&&(ns(ce)||ce[gn]))break e;if((B||H)&&(H=q.window===q?q:(H=q.ownerDocument)?H.defaultView||H.parentWindow:window,B?(ce=r.relatedTarget||r.toElement,B=z,ce=ce?ns(ce):null,ce!==null&&(Fe=h(ce),oe=ce.tag,ce!==Fe||oe!==5&&oe!==27&&oe!==6)&&(ce=null)):(B=null,ce=z),B!==ce)){if(oe=vn,G="onMouseLeave",x="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(oe=Co,G="onPointerLeave",x="onPointerEnter",N="pointer"),Fe=B==null?H:Kn(B),P=ce==null?H:Kn(ce),H=new oe(G,N+"leave",B,r,q),H.target=Fe,H.relatedTarget=P,G=null,ns(q)===z&&(oe=new oe(x,N+"enter",ce,r,q),oe.target=P,oe.relatedTarget=Fe,G=oe),Fe=G,B&&ce)t:{for(oe=B,x=ce,N=0,P=oe;P;P=La(P))N++;for(P=0,G=x;G;G=La(G))P++;for(;0<N-P;)oe=La(oe),N--;for(;0<P-N;)x=La(x),P--;for(;N--;){if(oe===x||x!==null&&oe===x.alternate)break t;oe=La(oe),x=La(x)}oe=null}else oe=null;B!==null&&V_(F,H,B,oe,!1),ce!==null&&Fe!==null&&V_(F,Fe,ce,oe,!0)}}e:{if(H=z?Kn(z):window,B=H.nodeName&&H.nodeName.toLowerCase(),B==="select"||B==="input"&&H.type==="file")var ne=og;else if(Ci(H))if(lg)ne=cS;else{ne=lS;var _e=oS}else B=H.nodeName,!B||B.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?z&&vo(z.elementType)&&(ne=og):ne=uS;if(ne&&(ne=ne(t,z))){Kt(F,ne,r,q);break e}_e&&_e(t,H,z),t==="focusout"&&z&&H.type==="number"&&z.memoizedProps.value!=null&&ss(H,"number",H.value)}switch(_e=z?Kn(z):window,t){case"focusin":(Ci(_e)||_e.contentEditable==="true")&&(ha=_e,Oh=z,Io=null);break;case"focusout":Io=Oh=ha=null;break;case"mousedown":Dh=!0;break;case"contextmenu":case"mouseup":case"dragend":Dh=!1,mg(F,r,q);break;case"selectionchange":if(fS)break;case"keydown":case"keyup":mg(F,r,q)}var se;if(u)e:{switch(t){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else et?W(t,r)&&(le="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(le="onCompositionStart");le&&(T&&r.locale!=="ko"&&(et||le!=="onCompositionStart"?le==="onCompositionEnd"&&et&&(se=To()):(Qn=q,rs="value"in Qn?Qn.value:Qn.textContent,et=!0)),_e=oc(z,le),0<_e.length&&(le=new Ao(le,t,null,r,q),F.push({event:le,listeners:_e}),se?le.data=se:(se=Le(r),se!==null&&(le.data=se)))),(se=m?be(t,r):Et(t,r))&&(le=oc(z,"onBeforeInput"),0<le.length&&(_e=new Ao("onBeforeInput","beforeinput",null,r,q),F.push({event:_e,listeners:le}),_e.data=se)),XS(F,t,z,r,q)}B_(F,n)})}function nl(t,n,r){return{instance:t,listener:n,currentTarget:r}}function oc(t,n){for(var r=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=rr(t,r),c!=null&&o.unshift(nl(t,c,f)),c=rr(t,n),c!=null&&o.push(nl(t,c,f))),t.tag===3)return o;t=t.return}return[]}function La(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function V_(t,n,r,o,c){for(var f=n._reactName,_=[];r!==null&&r!==o;){var E=r,A=E.alternate,z=E.stateNode;if(E=E.tag,A!==null&&A===o)break;E!==5&&E!==26&&E!==27||z===null||(A=z,c?(z=rr(r,f),z!=null&&_.unshift(nl(r,z,A))):c||(z=rr(r,f),z!=null&&_.push(nl(r,z,A)))),r=r.return}_.length!==0&&t.push({event:n,listeners:_})}var $S=/\r\n?/g,JS=/\u0000|\uFFFD/g;function q_(t){return(typeof t=="string"?t:""+t).replace($S,`
`).replace(JS,"")}function G_(t,n){return n=q_(n),q_(t)===n}function lc(){}function Ge(t,n,r,o,c,f){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||mn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&mn(t,""+o);break;case"className":Xn(t,"class",o);break;case"tabIndex":Xn(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xn(t,r,o);break;case"style":yo(t,o,f);break;case"data":if(n!=="object"){Xn(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=ia(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&Ge(t,n,"name",c.name,c,null),Ge(t,n,"formEncType",c.formEncType,c,null),Ge(t,n,"formMethod",c.formMethod,c,null),Ge(t,n,"formTarget",c.formTarget,c,null)):(Ge(t,n,"encType",c.encType,c,null),Ge(t,n,"method",c.method,c,null),Ge(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=ia(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=lc);break;case"onScroll":o!=null&&ve("scroll",t);break;case"onScrollEnd":o!=null&&ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=ia(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":ve("beforetoggle",t),ve("toggle",t),is(t,"popover",o);break;case"xlinkActuate":Nt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":is(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=bh.get(r)||r,is(t,r,o))}}function td(t,n,r,o,c,f){switch(r){case"style":yo(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof o=="string"?mn(t,o):(typeof o=="number"||typeof o=="bigint")&&mn(t,""+o);break;case"onScroll":o!=null&&ve("scroll",t);break;case"onScrollEnd":o!=null&&ve("scrollend",t);break;case"onClick":o!=null&&(t.onclick=lc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$r.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),f=t[ct]||null,f=f!=null?f[r]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,c);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):is(t,r,o)}}}function Mt(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",t),ve("load",t);var o=!1,c=!1,f;for(f in r)if(r.hasOwnProperty(f)){var _=r[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ge(t,n,f,_,r,null)}}c&&Ge(t,n,"srcSet",r.srcSet,r,null),o&&Ge(t,n,"src",r.src,r,null);return;case"input":ve("invalid",t);var E=f=_=c=null,A=null,z=null;for(o in r)if(r.hasOwnProperty(o)){var q=r[o];if(q!=null)switch(o){case"name":c=q;break;case"type":_=q;break;case"checked":A=q;break;case"defaultChecked":z=q;break;case"value":f=q;break;case"defaultValue":E=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,n));break;default:Ge(t,n,o,q,r,null)}}nr(t,f,E,A,z,_,c,!1),na(t);return;case"select":ve("invalid",t),o=_=f=null;for(c in r)if(r.hasOwnProperty(c)&&(E=r[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":o=E;default:Ge(t,n,c,E,r,null)}n=f,r=_,t.multiple=!!o,n!=null?Ei(t,!!o,n,!1):r!=null&&Ei(t,!!o,r,!0);return;case"textarea":ve("invalid",t),f=c=o=null;for(_ in r)if(r.hasOwnProperty(_)&&(E=r[_],E!=null))switch(_){case"value":o=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:Ge(t,n,_,E,r,null)}ir(t,o,c,f),na(t);return;case"option":for(A in r)if(r.hasOwnProperty(A)&&(o=r[A],o!=null))switch(A){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ge(t,n,A,o,r,null)}return;case"dialog":ve("beforetoggle",t),ve("toggle",t),ve("cancel",t),ve("close",t);break;case"iframe":case"object":ve("load",t);break;case"video":case"audio":for(o=0;o<tl.length;o++)ve(tl[o],t);break;case"image":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"embed":case"source":case"link":ve("error",t),ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in r)if(r.hasOwnProperty(z)&&(o=r[z],o!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ge(t,n,z,o,r,null)}return;default:if(vo(n)){for(q in r)r.hasOwnProperty(q)&&(o=r[q],o!==void 0&&td(t,n,q,o,r,void 0));return}}for(E in r)r.hasOwnProperty(E)&&(o=r[E],o!=null&&Ge(t,n,E,o,r,null))}function e1(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,E=null,A=null,z=null,q=null;for(B in r){var F=r[B];if(r.hasOwnProperty(B)&&F!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":A=F;default:o.hasOwnProperty(B)||Ge(t,n,B,null,o,F)}}for(var H in o){var B=o[H];if(F=r[H],o.hasOwnProperty(H)&&(B!=null||F!=null))switch(H){case"type":f=B;break;case"name":c=B;break;case"checked":z=B;break;case"defaultChecked":q=B;break;case"value":_=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(137,n));break;default:B!==F&&Ge(t,n,H,B,o,F)}}nn(t,_,E,A,z,q,f,c);return;case"select":B=_=E=H=null;for(f in r)if(A=r[f],r.hasOwnProperty(f)&&A!=null)switch(f){case"value":break;case"multiple":B=A;default:o.hasOwnProperty(f)||Ge(t,n,f,null,o,A)}for(c in o)if(f=o[c],A=r[c],o.hasOwnProperty(c)&&(f!=null||A!=null))switch(c){case"value":H=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==A&&Ge(t,n,c,f,o,A)}n=E,r=_,o=B,H!=null?Ei(t,!!r,H,!1):!!o!=!!r&&(n!=null?Ei(t,!!r,n,!0):Ei(t,!!r,r?[]:"",!1));return;case"textarea":B=H=null;for(E in r)if(c=r[E],r.hasOwnProperty(E)&&c!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ge(t,n,E,null,o,c)}for(_ in o)if(c=o[_],f=r[_],o.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":H=c;break;case"defaultValue":B=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==f&&Ge(t,n,_,c,o,f)}Ve(t,H,B);return;case"option":for(var ce in r)if(H=r[ce],r.hasOwnProperty(ce)&&H!=null&&!o.hasOwnProperty(ce))switch(ce){case"selected":t.selected=!1;break;default:Ge(t,n,ce,null,o,H)}for(A in o)if(H=o[A],B=r[A],o.hasOwnProperty(A)&&H!==B&&(H!=null||B!=null))switch(A){case"selected":t.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Ge(t,n,A,H,o,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in r)H=r[oe],r.hasOwnProperty(oe)&&H!=null&&!o.hasOwnProperty(oe)&&Ge(t,n,oe,null,o,H);for(z in o)if(H=o[z],B=r[z],o.hasOwnProperty(z)&&H!==B&&(H!=null||B!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,n));break;default:Ge(t,n,z,H,o,B)}return;default:if(vo(n)){for(var Fe in r)H=r[Fe],r.hasOwnProperty(Fe)&&H!==void 0&&!o.hasOwnProperty(Fe)&&td(t,n,Fe,void 0,o,H);for(q in o)H=o[q],B=r[q],!o.hasOwnProperty(q)||H===B||H===void 0&&B===void 0||td(t,n,q,H,o,B);return}}for(var x in r)H=r[x],r.hasOwnProperty(x)&&H!=null&&!o.hasOwnProperty(x)&&Ge(t,n,x,null,o,H);for(F in o)H=o[F],B=r[F],!o.hasOwnProperty(F)||H===B||H==null&&B==null||Ge(t,n,F,H,o,B)}var nd=null,id=null;function uc(t){return t.nodeType===9?t:t.ownerDocument}function F_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function sd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rd=null;function t1(){var t=window.event;return t&&t.type==="popstate"?t===rd?!1:(rd=t,!0):(rd=null,!1)}var K_=typeof setTimeout=="function"?setTimeout:void 0,n1=typeof clearTimeout=="function"?clearTimeout:void 0,X_=typeof Promise=="function"?Promise:void 0,i1=typeof queueMicrotask=="function"?queueMicrotask:typeof X_<"u"?function(t){return X_.resolve(null).then(t).catch(s1)}:K_;function s1(t){setTimeout(function(){throw t})}function Ss(t){return t==="head"}function W_(t,n){var r=n,o=0,c=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(0<o&&8>o){r=o;var _=t.ownerDocument;if(r&1&&il(_.documentElement),r&2&&il(_.body),r&4)for(r=_.head,il(r),_=r.firstChild;_;){var E=_.nextSibling,A=_.nodeName;_[Zs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&_.rel.toLowerCase()==="stylesheet"||r.removeChild(_),_=E}}if(c===0){t.removeChild(f),hl(n);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:o=r.charCodeAt(0)-48;else o=0;r=f}while(r);hl(n)}function ad(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ad(r),$s(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function r1(t,n,r,o){for(;t.nodeType===1;){var c=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Zs])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Un(t.nextSibling),t===null)break}return null}function a1(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Un(t.nextSibling),t===null))return null;return t}function od(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function o1(t,n){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Un(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var ld=null;function Q_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return t;n--}else r==="/$"&&n++}t=t.previousSibling}return null}function Z_(t,n,r){switch(n=uc(r),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function il(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$s(t)}var Cn=new Map,$_=new Set;function cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Bi=Z.d;Z.d={f:l1,r:u1,D:c1,C:h1,L:f1,m:d1,X:g1,S:p1,M:m1};function l1(){var t=Bi.f(),n=tc();return t||n}function u1(t){var n=Yn(t);n!==null&&n.tag===5&&n.type==="form"?ym(n):Bi.r(t)}var Ua=typeof document>"u"?null:document;function J_(t,n,r){var o=Ua;if(o&&typeof n=="string"&&n){var c=ht(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),$_.has(c)||($_.add(c),t={rel:t,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Mt(n,"link",t),ot(n),o.head.appendChild(n)))}}function c1(t){Bi.D(t),J_("dns-prefetch",t,null)}function h1(t,n){Bi.C(t,n),J_("preconnect",t,n)}function f1(t,n,r){Bi.L(t,n,r);var o=Ua;if(o&&t&&n){var c='link[rel="preload"][as="'+ht(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+ht(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+ht(r.imageSizes)+'"]')):c+='[href="'+ht(t)+'"]';var f=c;switch(n){case"style":f=Pa(t);break;case"script":f=za(t)}Cn.has(f)||(t=b({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Cn.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(sl(f))||n==="script"&&o.querySelector(rl(f))||(n=o.createElement("link"),Mt(n,"link",t),ot(n),o.head.appendChild(n)))}}function d1(t,n){Bi.m(t,n);var r=Ua;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ht(o)+'"][href="'+ht(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=za(t)}if(!Cn.has(f)&&(t=b({rel:"modulepreload",href:t},n),Cn.set(f,t),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(rl(f)))return}o=r.createElement("link"),Mt(o,"link",t),ot(o),r.head.appendChild(o)}}}function p1(t,n,r){Bi.S(t,n,r);var o=Ua;if(o&&t){var c=jt(o).hoistableStyles,f=Pa(t);n=n||"default";var _=c.get(f);if(!_){var E={loading:0,preload:null};if(_=o.querySelector(sl(f)))E.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Cn.get(f))&&ud(t,r);var A=_=o.createElement("link");ot(A),Mt(A,"link",t),A._p=new Promise(function(z,q){A.onload=z,A.onerror=q}),A.addEventListener("load",function(){E.loading|=1}),A.addEventListener("error",function(){E.loading|=2}),E.loading|=4,hc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:E},c.set(f,_)}}}function g1(t,n){Bi.X(t,n);var r=Ua;if(r&&t){var o=jt(r).hoistableScripts,c=za(t),f=o.get(c);f||(f=r.querySelector(rl(c)),f||(t=b({src:t,async:!0},n),(n=Cn.get(c))&&cd(t,n),f=r.createElement("script"),ot(f),Mt(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function m1(t,n){Bi.M(t,n);var r=Ua;if(r&&t){var o=jt(r).hoistableScripts,c=za(t),f=o.get(c);f||(f=r.querySelector(rl(c)),f||(t=b({src:t,async:!0,type:"module"},n),(n=Cn.get(c))&&cd(t,n),f=r.createElement("script"),ot(f),Mt(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function ey(t,n,r,o){var c=(c=he.current)?cc(c):null;if(!c)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Pa(r.href),r=jt(c).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Pa(r.href);var f=jt(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(sl(t)))&&!f._p&&(_.instance=f,_.state.loading=5),Cn.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Cn.set(t,r),f||_1(c,t,r,_.state))),n&&o===null)throw Error(a(528,""));return _}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=za(r),r=jt(c).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Pa(t){return'href="'+ht(t)+'"'}function sl(t){return'link[rel="stylesheet"]['+t+"]"}function ty(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function _1(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mt(n,"link",r),ot(n),t.head.appendChild(n))}function za(t){return'[src="'+ht(t)+'"]'}function rl(t){return"script[async]"+t}function ny(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ht(r.href)+'"]');if(o)return n.instance=o,ot(o),o;var c=b({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ot(o),Mt(o,"style",c),hc(o,r.precedence,t),n.instance=o;case"stylesheet":c=Pa(r.href);var f=t.querySelector(sl(c));if(f)return n.state.loading|=4,n.instance=f,ot(f),f;o=ty(r),(c=Cn.get(c))&&ud(o,c),f=(t.ownerDocument||t).createElement("link"),ot(f);var _=f;return _._p=new Promise(function(E,A){_.onload=E,_.onerror=A}),Mt(f,"link",o),n.state.loading|=4,hc(f,r.precedence,t),n.instance=f;case"script":return f=za(r.src),(c=t.querySelector(rl(f)))?(n.instance=c,ot(c),c):(o=r,(c=Cn.get(f))&&(o=b({},r),cd(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),ot(c),Mt(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,hc(o,r.precedence,t));return n.instance}function hc(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,_=0;_<o.length;_++){var E=o[_];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var fc=null;function iy(t,n,r){if(fc===null){var o=new Map,c=fc=new Map;c.set(r,o)}else c=fc,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),c=0;c<r.length;c++){var f=r[c];if(!(f[Zs]||f[gt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var E=o.get(_);E?E.push(f):o.set(_,[f])}}return o}function sy(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function y1(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ry(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var al=null;function v1(){}function E1(t,n,r){if(al===null)throw Error(a(475));var o=al;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Pa(r.href),f=t.querySelector(sl(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=dc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,ot(f);return}f=t.ownerDocument||t,r=ty(r),(c=Cn.get(c))&&ud(r,c),f=f.createElement("link"),ot(f);var _=f;_._p=new Promise(function(E,A){_.onload=E,_.onerror=A}),Mt(f,"link",r),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=dc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function T1(){if(al===null)throw Error(a(475));var t=al;return t.stylesheets&&t.count===0&&hd(t,t.stylesheets),0<t.count?function(n){var r=setTimeout(function(){if(t.stylesheets&&hd(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r)}}:null}function dc(){if(this.count--,this.count===0){if(this.stylesheets)hd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pc=null;function hd(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pc=new Map,n.forEach(S1,t),pc=null,dc.call(t))}function S1(t,n){if(!(n.state.loading&4)){var r=pc.get(t);if(r)var o=r.get(null);else{r=new Map,pc.set(t,r);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(r.set(_.dataset.precedence,_),o=_)}o&&r.set(null,o)}c=n.instance,_=c.getAttribute("data-precedence"),f=r.get(_)||o,f===o&&r.set(null,c),r.set(_,c),this.count++,o=dc.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var ol={$$typeof:fe,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function b1(t,n,r,o,c,f,_,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gi(0),this.hiddenUpdates=gi(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function ay(t,n,r,o,c,f,_,E,A,z,q,F){return t=new b1(t,n,r,_,E,A,z,F),n=1,f===!0&&(n|=24),f=rn(3,null,null,n),t.current=f,f.stateNode=t,n=Fh(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:r,cache:n},Wh(f),t}function oy(t){return t?(t=ga,t):ga}function ly(t,n,r,o,c,f){c=oy(c),o.context===null?o.context=c:o.pendingContext=c,o=us(n),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=cs(t,o,n),r!==null&&(cn(r,t,n),Po(r,t,n))}function uy(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function fd(t,n){uy(t,n),(t=t.alternate)&&uy(t,n)}function cy(t){if(t.tag===13){var n=pa(t,67108864);n!==null&&cn(n,t,67108864),fd(t,67108864)}}var gc=!0;function A1(t,n,r,o){var c=V.T;V.T=null;var f=Z.p;try{Z.p=2,dd(t,n,r,o)}finally{Z.p=f,V.T=c}}function w1(t,n,r,o){var c=V.T;V.T=null;var f=Z.p;try{Z.p=8,dd(t,n,r,o)}finally{Z.p=f,V.T=c}}function dd(t,n,r,o){if(gc){var c=pd(o);if(c===null)ed(t,n,o,mc,r),fy(t,o);else if(R1(c,t,n,r,o))o.stopPropagation();else if(fy(t,o),n&4&&-1<C1.indexOf(t)){for(;c!==null;){var f=Yn(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Dn(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var A=1<<31-xt(_);E.entanglements[1]|=A,_&=~A}ri(f),(He&6)===0&&(Ju=pn()+500,el(0))}}break;case 13:E=pa(f,2),E!==null&&cn(E,f,2),tc(),fd(f,2)}if(f=pd(o),f===null&&ed(t,n,o,mc,r),f===c)break;c=f}c!==null&&o.stopPropagation()}else ed(t,n,o,null,r)}}function pd(t){return t=_n(t),gd(t)}var mc=null;function gd(t){if(mc=null,t=ns(t),t!==null){var n=h(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=d(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return mc=t,null}function hy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_h()){case ao:return 2;case Xr:return 8;case Fs:case yh:return 32;case Wr:return 268435456;default:return 32}default:return 32}}var md=!1,bs=null,As=null,ws=null,ll=new Map,ul=new Map,Cs=[],C1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fy(t,n){switch(t){case"focusin":case"focusout":bs=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":ws=null;break;case"pointerover":case"pointerout":ll.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(n.pointerId)}}function cl(t,n,r,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Yn(n),n!==null&&cy(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function R1(t,n,r,o,c){switch(n){case"focusin":return bs=cl(bs,t,n,r,o,c),!0;case"dragenter":return As=cl(As,t,n,r,o,c),!0;case"mouseover":return ws=cl(ws,t,n,r,o,c),!0;case"pointerover":var f=c.pointerId;return ll.set(f,cl(ll.get(f)||null,t,n,r,o,c)),!0;case"gotpointercapture":return f=c.pointerId,ul.set(f,cl(ul.get(f)||null,t,n,r,o,c)),!0}return!1}function dy(t){var n=ns(t.target);if(n!==null){var r=h(n);if(r!==null){if(n=r.tag,n===13){if(n=d(r),n!==null){t.blockedOn=n,tu(t.priority,function(){if(r.tag===13){var o=un();o=Qs(o);var c=pa(r,o);c!==null&&cn(c,r,o),fd(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=pd(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Ti=o,r.target.dispatchEvent(o),Ti=null}else return n=Yn(r),n!==null&&cy(n),t.blockedOn=r,!1;n.shift()}return!0}function py(t,n,r){_c(t)&&r.delete(n)}function I1(){md=!1,bs!==null&&_c(bs)&&(bs=null),As!==null&&_c(As)&&(As=null),ws!==null&&_c(ws)&&(ws=null),ll.forEach(py),ul.forEach(py)}function yc(t,n){t.blockedOn===n&&(t.blockedOn=null,md||(md=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,I1)))}var vc=null;function gy(t){vc!==t&&(vc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){vc===t&&(vc=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(gd(o||r)===null)continue;break}var f=Yn(r);f!==null&&(t.splice(n,3),n-=3,gf(f,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function hl(t){function n(A){return yc(A,t)}bs!==null&&yc(bs,t),As!==null&&yc(As,t),ws!==null&&yc(ws,t),ll.forEach(n),ul.forEach(n);for(var r=0;r<Cs.length;r++){var o=Cs[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Cs.length&&(r=Cs[0],r.blockedOn===null);)dy(r),r.blockedOn===null&&Cs.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],f=r[o+1],_=c[ct]||null;if(typeof f=="function")_||gy(r);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[ct]||null)E=_.formAction;else if(gd(c)!==null)continue}else E=_.action;typeof E=="function"?r[o+1]=E:(r.splice(o,3),o-=3),gy(r)}}}function _d(t){this._internalRoot=t}Ec.prototype.render=_d.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=un();ly(r,o,t,n,null,null)},Ec.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ly(t.current,2,null,t,null,null),tc(),n[gn]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var n=es();t={blockedOn:null,target:t,priority:n};for(var r=0;r<Cs.length&&n!==0&&n<Cs[r].priority;r++);Cs.splice(r,0,t),r===0&&dy(t)}};var my=e.version;if(my!=="19.1.0")throw Error(a(527,my,"19.1.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=y(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var N1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{st=Tc.inject(N1),Pe=Tc}catch{}}return dl.createRoot=function(t,n){if(!l(t))throw Error(a(299));var r=!1,o="",c=Mm,f=km,_=xm,E=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=ay(t,1,!1,null,null,r,o,c,f,_,E,null),t[gn]=n.current,Jf(t),new _d(n)},dl.hydrateRoot=function(t,n,r){if(!l(t))throw Error(a(299));var o=!1,c="",f=Mm,_=km,E=xm,A=null,z=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(_=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks),r.formState!==void 0&&(z=r.formState)),n=ay(t,1,!0,n,r??null,o,c,f,_,E,A,z),n.context=oy(null),r=n.current,o=un(),o=Qs(o),c=us(o),c.callback=null,cs(r,c,o),r=o,n.current.lanes=r,mi(n,r),ri(n),t[gn]=n.current,Jf(t),new Ec(n)},dl.version="19.1.0",dl}var Cy;function B1(){if(Cy)return Ed.exports;Cy=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ed.exports=H1(),Ed.exports}var j1=B1();const V1=g0(j1),q1=()=>{};var Ry={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=function(s,e){if(!s)throw Ja(e)},Ja=function(s){return new Error("Firebase Database ("+m0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=function(s){const e=[];let i=0;for(let a=0;a<s.length;a++){let l=s.charCodeAt(a);l<128?e[i++]=l:l<2048?(e[i++]=l>>6|192,e[i++]=l&63|128):(l&64512)===55296&&a+1<s.length&&(s.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(s.charCodeAt(++a)&1023),e[i++]=l>>18|240,e[i++]=l>>12&63|128,e[i++]=l>>6&63|128,e[i++]=l&63|128):(e[i++]=l>>12|224,e[i++]=l>>6&63|128,e[i++]=l&63|128)}return e},G1=function(s){const e=[];let i=0,a=0;for(;i<s.length;){const l=s[i++];if(l<128)e[a++]=String.fromCharCode(l);else if(l>191&&l<224){const h=s[i++];e[a++]=String.fromCharCode((l&31)<<6|h&63)}else if(l>239&&l<365){const h=s[i++],d=s[i++],g=s[i++],y=((l&7)<<18|(h&63)<<12|(d&63)<<6|g&63)-65536;e[a++]=String.fromCharCode(55296+(y>>10)),e[a++]=String.fromCharCode(56320+(y&1023))}else{const h=s[i++],d=s[i++];e[a++]=String.fromCharCode((l&15)<<12|(h&63)<<6|d&63)}}return e.join("")},gp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<s.length;l+=3){const h=s[l],d=l+1<s.length,g=d?s[l+1]:0,y=l+2<s.length,v=y?s[l+2]:0,b=h>>2,I=(h&3)<<4|g>>4;let O=(g&15)<<2|v>>6,Q=v&63;y||(Q=64,d||(O=64)),a.push(i[b],i[I],i[O],i[Q])}return a.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(_0(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):G1(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<s.length;){const h=i[s.charAt(l++)],g=l<s.length?i[s.charAt(l)]:0;++l;const v=l<s.length?i[s.charAt(l)]:64;++l;const I=l<s.length?i[s.charAt(l)]:64;if(++l,h==null||g==null||v==null||I==null)throw new F1;const O=h<<2|g>>4;if(a.push(O),v!==64){const Q=g<<4&240|v>>2;if(a.push(Q),I!==64){const K=v<<6&192|I;a.push(K)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class F1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const y0=function(s){const e=_0(s);return gp.encodeByteArray(e,!0)},Lc=function(s){return y0(s).replace(/\./g,"")},Uc=function(s){try{return gp.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(s){return v0(void 0,s)}function v0(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const i=e;return new Date(i.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const i in e)!e.hasOwnProperty(i)||!K1(i)||(s[i]=v0(s[i],e[i]));return s}function K1(s){return s!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=()=>X1().__FIREBASE_DEFAULTS__,Q1=()=>{if(typeof process>"u"||typeof Ry>"u")return;const s=Ry.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Z1=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Uc(s[1]);return e&&JSON.parse(e)},mp=()=>{try{return q1()||W1()||Q1()||Z1()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},E0=s=>mp()?.emulatorHosts?.[s],_p=s=>{const e=E0(s);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),a]:[e.substring(0,i),a]},T0=()=>mp()?.config,S0=s=>mp()?.[`_${s}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sh(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=e||"demo-project",l=s.iat||0,h=s.sub||s.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Lc(JSON.stringify(i)),Lc(JSON.stringify(d)),""].join(".")}const El={};function $1(){const s={prod:[],emulator:[]};for(const e of Object.keys(El))El[e]?s.emulator.push(e):s.prod.push(e);return s}function J1(s){let e=document.getElementById(s),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),i=!0),{created:i,element:e}}let Iy=!1;function rh(s,e){if(typeof window>"u"||typeof document>"u"||!zs(window.location.host)||El[s]===e||El[s]||Iy)return;El[s]=e;function i(O){return`__firebase__banner__${O}`}const a="__firebase__banner",h=$1().prod.length>0;function d(){const O=document.getElementById(a);O&&O.remove()}function g(O){O.style.display="flex",O.style.background="#7faaf0",O.style.position="fixed",O.style.bottom="5px",O.style.left="5px",O.style.padding=".5em",O.style.borderRadius="5px",O.style.alignItems="center"}function y(O,Q){O.setAttribute("width","24"),O.setAttribute("id",Q),O.setAttribute("height","24"),O.setAttribute("viewBox","0 0 24 24"),O.setAttribute("fill","none"),O.style.marginLeft="-6px"}function v(){const O=document.createElement("span");return O.style.cursor="pointer",O.style.marginLeft="16px",O.style.fontSize="24px",O.innerHTML=" &times;",O.onclick=()=>{Iy=!0,d()},O}function b(O,Q){O.setAttribute("id",Q),O.innerText="Learn more",O.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",O.setAttribute("target","__blank"),O.style.paddingLeft="5px",O.style.textDecoration="underline"}function I(){const O=J1(a),Q=i("text"),K=document.getElementById(Q)||document.createElement("span"),ie=i("learnmore"),te=document.getElementById(ie)||document.createElement("a"),xe=i("preprendIcon"),Se=document.getElementById(xe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(O.created){const fe=O.element;g(fe),b(te,ie);const Ee=v();y(Se,xe),fe.append(Se,K,te,Ee),document.body.appendChild(fe)}h?(K.innerText="Preview backend disconnected.",Se.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Se.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,K.innerText="Preview backend running in this workspace."),K.setAttribute("id",Q)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ep(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function eb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function b0(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function A0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tb(){const s=Ft();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function nb(){return m0.NODE_ADMIN===!0}function w0(){try{return typeof indexedDB=="object"}catch{return!1}}function C0(){return new Promise((s,e)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(a),s(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{e(l.error?.message||"")}}catch(i){e(i)}})}function ib(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="FirebaseError";class On extends Error{constructor(e,i,a){super(i),this.code=e,this.customData=a,this.name=sb,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gr.prototype.create)}}class Gr{constructor(e,i,a){this.service=e,this.serviceName=i,this.errors=a}create(e,...i){const a=i[0]||{},l=`${this.service}/${e}`,h=this.errors[e],d=h?rb(h,a):"Error",g=`${this.serviceName}: ${d} (${l}).`;return new On(l,g,a)}}function rb(s,e){return s.replace(ab,(i,a)=>{const l=e[a];return l!=null?String(l):`<${a}?>`})}const ab=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(s){return JSON.parse(s)}function kt(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=function(s){let e={},i={},a={},l="";try{const h=s.split(".");e=Ol(Uc(h[0])||""),i=Ol(Uc(h[1])||""),l=h[2],a=i.d||{},delete i.d}catch{}return{header:e,claims:i,data:a,signature:l}},ob=function(s){const e=R0(s),i=e.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},lb=function(s){const e=R0(s).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function Wa(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function Gd(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Pc(s,e,i){const a={};for(const l in s)Object.prototype.hasOwnProperty.call(s,l)&&(a[l]=e.call(i,s[l],l,s));return a}function Ki(s,e){if(s===e)return!0;const i=Object.keys(s),a=Object.keys(e);for(const l of i){if(!a.includes(l))return!1;const h=s[l],d=e[l];if(Ny(h)&&Ny(d)){if(!Ki(h,d))return!1}else if(h!==d)return!1}for(const l of a)if(!i.includes(l))return!1;return!0}function Ny(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(s){const e=[];for(const[i,a]of Object.entries(s))Array.isArray(a)?a.forEach(l=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function yl(s){const e={};return s.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[l,h]=a.split("=");e[decodeURIComponent(l)]=decodeURIComponent(h)}}),e}function vl(s){const e=s.indexOf("?");if(!e)return"";const i=s.indexOf("#",e);return s.substring(e,i>0?i:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,i){i||(i=0);const a=this.W_;if(typeof e=="string")for(let I=0;I<16;I++)a[I]=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3),i+=4;else for(let I=0;I<16;I++)a[I]=e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3],i+=4;for(let I=16;I<80;I++){const O=a[I-3]^a[I-8]^a[I-14]^a[I-16];a[I]=(O<<1|O>>>31)&4294967295}let l=this.chain_[0],h=this.chain_[1],d=this.chain_[2],g=this.chain_[3],y=this.chain_[4],v,b;for(let I=0;I<80;I++){I<40?I<20?(v=g^h&(d^g),b=1518500249):(v=h^d^g,b=1859775393):I<60?(v=h&d|g&(h|d),b=2400959708):(v=h^d^g,b=3395469782);const O=(l<<5|l>>>27)+v+y+b+a[I]&4294967295;y=g,g=d,d=(h<<30|h>>>2)&4294967295,h=l,l=O}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+h&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+g&4294967295,this.chain_[4]=this.chain_[4]+y&4294967295}update(e,i){if(e==null)return;i===void 0&&(i=e.length);const a=i-this.blockSize;let l=0;const h=this.buf_;let d=this.inbuf_;for(;l<i;){if(d===0)for(;l<=a;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<i;)if(h[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(h),d=0;break}}else for(;l<i;)if(h[d]=e[l],++d,++l,d===this.blockSize){this.compress_(h),d=0;break}}this.inbuf_=d,this.total_+=i}digest(){const e=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=i&255,i/=256;this.compress_(this.buf_);let a=0;for(let l=0;l<5;l++)for(let h=24;h>=0;h-=8)e[a]=this.chain_[l]>>h&255,++a;return e}}function cb(s,e){const i=new hb(s,e);return i.subscribe.bind(i)}class hb{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,a){let l;if(e===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");fb(e,["next","error","complete"])?l=e:l={next:e,error:i,complete:a},l.next===void 0&&(l.next=Ad),l.error===void 0&&(l.error=Ad),l.complete===void 0&&(l.complete=Ad);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fb(s,e){if(typeof s!="object"||s===null)return!1;for(const i of e)if(i in s&&typeof s[i]=="function")return!0;return!1}function Ad(){}function db(s,e){return`${s} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=function(s){const e=[];let i=0;for(let a=0;a<s.length;a++){let l=s.charCodeAt(a);if(l>=55296&&l<=56319){const h=l-55296;a++,J(a<s.length,"Surrogate pair missing trail surrogate.");const d=s.charCodeAt(a)-56320;l=65536+(h<<10)+d}l<128?e[i++]=l:l<2048?(e[i++]=l>>6|192,e[i++]=l&63|128):l<65536?(e[i++]=l>>12|224,e[i++]=l>>6&63|128,e[i++]=l&63|128):(e[i++]=l>>18|240,e[i++]=l>>12&63|128,e[i++]=l>>6&63|128,e[i++]=l&63|128)}return e},ah=function(s){let e=0;for(let i=0;i<s.length;i++){const a=s.charCodeAt(i);a<128?e++:a<2048?e+=2:a>=55296&&a<=56319?(e+=4,i++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=1e3,mb=2,_b=14400*1e3,yb=.5;function Oy(s,e=gb,i=mb){const a=e*Math.pow(i,s),l=Math.round(yb*a*(Math.random()-.5)*2);return Math.min(_b,a+l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(s){return s&&s._delegate?s._delegate:s}class dn{constructor(e,i,a){this.name=e,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const a=new yp;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e?.identifier),a=e?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tb(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const h=this.getOrInitializeService({instanceIdentifier:l});a.resolve(h)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[h,d]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(h);a===g&&d.resolve(l)}return l}onInit(e,i){const a=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(a)??new Set;l.add(e),this.onInitCallbacks.set(a,l);const h=this.instances.get(a);return h&&e(h,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,i){const a=this.onInitCallbacks.get(i);if(a)for(const l of a)try{l(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Eb(e),options:i}),this.instances.set(e,a),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Eb(s){return s===Rr?void 0:s}function Tb(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new vb(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(ke||(ke={}));const bb={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},Ab=ke.INFO,wb={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},Cb=(s,e,...i)=>{if(e<s.logLevel)return;const a=new Date().toISOString(),l=wb[e];if(l)console[l](`[${a}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pl{constructor(e){this.name=e,this._logLevel=Ab,this._logHandler=Cb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const Rb=(s,e)=>e.some(i=>s instanceof i);let Dy,My;function Ib(){return Dy||(Dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nb(){return My||(My=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const I0=new WeakMap,Fd=new WeakMap,N0=new WeakMap,wd=new WeakMap,Tp=new WeakMap;function Ob(s){const e=new Promise((i,a)=>{const l=()=>{s.removeEventListener("success",h),s.removeEventListener("error",d)},h=()=>{i(ks(s.result)),l()},d=()=>{a(s.error),l()};s.addEventListener("success",h),s.addEventListener("error",d)});return e.then(i=>{i instanceof IDBCursor&&I0.set(i,s)}).catch(()=>{}),Tp.set(e,s),e}function Db(s){if(Fd.has(s))return;const e=new Promise((i,a)=>{const l=()=>{s.removeEventListener("complete",h),s.removeEventListener("error",d),s.removeEventListener("abort",d)},h=()=>{i(),l()},d=()=>{a(s.error||new DOMException("AbortError","AbortError")),l()};s.addEventListener("complete",h),s.addEventListener("error",d),s.addEventListener("abort",d)});Fd.set(s,e)}let Yd={get(s,e,i){if(s instanceof IDBTransaction){if(e==="done")return Fd.get(s);if(e==="objectStoreNames")return s.objectStoreNames||N0.get(s);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return ks(s[e])},set(s,e,i){return s[e]=i,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function Mb(s){Yd=s(Yd)}function kb(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const a=s.call(Cd(this),e,...i);return N0.set(a,e.sort?e.sort():[e]),ks(a)}:Nb().includes(s)?function(...e){return s.apply(Cd(this),e),ks(I0.get(this))}:function(...e){return ks(s.apply(Cd(this),e))}}function xb(s){return typeof s=="function"?kb(s):(s instanceof IDBTransaction&&Db(s),Rb(s,Ib())?new Proxy(s,Yd):s)}function ks(s){if(s instanceof IDBRequest)return Ob(s);if(wd.has(s))return wd.get(s);const e=xb(s);return e!==s&&(wd.set(s,e),Tp.set(e,s)),e}const Cd=s=>Tp.get(s);function O0(s,e,{blocked:i,upgrade:a,blocking:l,terminated:h}={}){const d=indexedDB.open(s,e),g=ks(d);return a&&d.addEventListener("upgradeneeded",y=>{a(ks(d.result),y.oldVersion,y.newVersion,ks(d.transaction),y)}),i&&d.addEventListener("blocked",y=>i(y.oldVersion,y.newVersion,y)),g.then(y=>{h&&y.addEventListener("close",()=>h()),l&&y.addEventListener("versionchange",v=>l(v.oldVersion,v.newVersion,v))}).catch(()=>{}),g}const Lb=["get","getKey","getAll","getAllKeys","count"],Ub=["put","add","delete","clear"],Rd=new Map;function ky(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Rd.get(e))return Rd.get(e);const i=e.replace(/FromIndex$/,""),a=e!==i,l=Ub.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(l||Lb.includes(i)))return;const h=async function(d,...g){const y=this.transaction(d,l?"readwrite":"readonly");let v=y.store;return a&&(v=v.index(g.shift())),(await Promise.all([v[i](...g),l&&y.done]))[0]};return Rd.set(e,h),h}Mb(s=>({...s,get:(e,i,a)=>ky(e,i)||s.get(e,i,a),has:(e,i)=>!!ky(e,i)||s.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(zb(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function zb(s){return s.getComponent()?.type==="VERSION"}const Kd="@firebase/app",xy="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Pl("@firebase/app"),Hb="@firebase/app-compat",Bb="@firebase/analytics-compat",jb="@firebase/analytics",Vb="@firebase/app-check-compat",qb="@firebase/app-check",Gb="@firebase/auth",Fb="@firebase/auth-compat",Yb="@firebase/database",Kb="@firebase/data-connect",Xb="@firebase/database-compat",Wb="@firebase/functions",Qb="@firebase/functions-compat",Zb="@firebase/installations",$b="@firebase/installations-compat",Jb="@firebase/messaging",eA="@firebase/messaging-compat",tA="@firebase/performance",nA="@firebase/performance-compat",iA="@firebase/remote-config",sA="@firebase/remote-config-compat",rA="@firebase/storage",aA="@firebase/storage-compat",oA="@firebase/firestore",lA="@firebase/ai",uA="@firebase/firestore-compat",cA="firebase",hA="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="[DEFAULT]",fA={[Kd]:"fire-core",[Hb]:"fire-core-compat",[jb]:"fire-analytics",[Bb]:"fire-analytics-compat",[qb]:"fire-app-check",[Vb]:"fire-app-check-compat",[Gb]:"fire-auth",[Fb]:"fire-auth-compat",[Yb]:"fire-rtdb",[Kb]:"fire-data-connect",[Xb]:"fire-rtdb-compat",[Wb]:"fire-fn",[Qb]:"fire-fn-compat",[Zb]:"fire-iid",[$b]:"fire-iid-compat",[Jb]:"fire-fcm",[eA]:"fire-fcm-compat",[tA]:"fire-perf",[nA]:"fire-perf-compat",[iA]:"fire-rc",[sA]:"fire-rc-compat",[rA]:"fire-gcs",[aA]:"fire-gcs-compat",[oA]:"fire-fst",[uA]:"fire-fst-compat",[lA]:"fire-vertex","fire-js":"fire-js",[cA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Map,dA=new Map,Wd=new Map;function Ly(s,e){try{s.container.addComponent(e)}catch(i){Xi.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,i)}}function In(s){const e=s.name;if(Wd.has(e))return Xi.debug(`There were multiple attempts to register component ${e}.`),!1;Wd.set(e,s);for(const i of zc.values())Ly(i,s);for(const i of dA.values())Ly(i,s);return!0}function $i(s,e){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(e)}function Zt(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xs=new Gr("app","Firebase",pA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,i,a){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=hA;function D0(s,e={}){let i=s;typeof e!="object"&&(e={name:e});const a={name:Xd,automaticDataCollectionEnabled:!0,...e},l=a.name;if(typeof l!="string"||!l)throw xs.create("bad-app-name",{appName:String(l)});if(i||(i=T0()),!i)throw xs.create("no-options");const h=zc.get(l);if(h){if(Ki(i,h.options)&&Ki(a,h.config))return h;throw xs.create("duplicate-app",{appName:l})}const d=new Sb(l);for(const y of Wd.values())d.addComponent(y);const g=new gA(i,a,d);return zc.set(l,g),g}function zl(s=Xd){const e=zc.get(s);if(!e&&s===Xd&&T0())return D0();if(!e)throw xs.create("no-app",{appName:s});return e}function Bt(s,e,i){let a=fA[s]??s;i&&(a+=`-${i}`);const l=a.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xi.warn(d.join(" "));return}In(new dn(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA="firebase-heartbeat-database",_A=1,Dl="firebase-heartbeat-store";let Id=null;function M0(){return Id||(Id=O0(mA,_A,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Dl)}catch(i){console.warn(i)}}}}).catch(s=>{throw xs.create("idb-open",{originalErrorMessage:s.message})})),Id}async function yA(s){try{const i=(await M0()).transaction(Dl),a=await i.objectStore(Dl).get(k0(s));return await i.done,a}catch(e){if(e instanceof On)Xi.warn(e.message);else{const i=xs.create("idb-get",{originalErrorMessage:e?.message});Xi.warn(i.message)}}}async function Uy(s,e){try{const a=(await M0()).transaction(Dl,"readwrite");await a.objectStore(Dl).put(e,k0(s)),await a.done}catch(i){if(i instanceof On)Xi.warn(i.message);else{const a=xs.create("idb-set",{originalErrorMessage:i?.message});Xi.warn(a.message)}}}function k0(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=1024,EA=30;class TA{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new bA(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Py();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>EA){const l=AA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Xi.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Py(),{heartbeatsToSend:i,unsentEntries:a}=SA(this._heartbeatsCache.heartbeats),l=Lc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(e){return Xi.warn(e),""}}}function Py(){return new Date().toISOString().substring(0,10)}function SA(s,e=vA){const i=[];let a=s.slice();for(const l of s){const h=i.find(d=>d.agent===l.agent);if(h){if(h.dates.push(l.date),zy(i)>e){h.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),zy(i)>e){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class bA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w0()?C0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await yA(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return Uy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return Uy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function zy(s){return Lc(JSON.stringify({version:2,heartbeats:s})).length}function AA(s){if(s.length===0)return-1;let e=0,i=s[0].date;for(let a=1;a<s.length;a++)s[a].date<i&&(i=s[a].date,e=a);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(s){In(new dn("platform-logger",e=>new Pb(e),"PRIVATE")),In(new dn("heartbeat",e=>new TA(e),"PRIVATE")),Bt(Kd,xy,s),Bt(Kd,xy,"esm2020"),Bt("fire-js","")}wA("");function x0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CA=x0,L0=new Gr("auth","Firebase",x0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new Pl("@firebase/auth");function RA(s,...e){Hc.logLevel<=ke.WARN&&Hc.warn(`Auth (${Hs}): ${s}`,...e)}function Nc(s,...e){Hc.logLevel<=ke.ERROR&&Hc.error(`Auth (${Hs}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(s,...e){throw Sp(s,...e)}function ci(s,...e){return Sp(s,...e)}function U0(s,e,i){const a={...CA(),[e]:i};return new Gr("auth","Firebase",a).create(e,{appName:s.name})}function Fi(s){return U0(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sp(s,...e){if(typeof s!="string"){const i=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=s.name),s._errorFactory.create(i,...a)}return L0.create(s,...e)}function ue(s,e,...i){if(!s)throw Sp(e,...i)}function Vi(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Nc(e),new Error(e)}function Wi(s,e){s||Vi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(){return typeof self<"u"&&self.location?.href||""}function IA(){return Hy()==="http:"||Hy()==="https:"}function Hy(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IA()||b0()||"connection"in navigator)?navigator.onLine:!0}function OA(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,i){this.shortDelay=e,this.longDelay=i,Wi(i>e,"Short delay should be less than long delay!"),this.isMobile=Ep()||A0()}get(){return NA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(s,e){Wi(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{static initialize(e,i,a){this.fetchImpl=e,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kA=new Hl(3e4,6e4);function Bs(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function js(s,e,i,a,l={}){return z0(s,l,async()=>{let h={},d={};a&&(e==="GET"?d=a:h={body:JSON.stringify(a)});const g=eo({key:s.config.apiKey,...d}).slice(1),y=await s._getAdditionalHeaders();y["Content-Type"]="application/json",s.languageCode&&(y["X-Firebase-Locale"]=s.languageCode);const v={method:e,headers:y,...h};return eb()||(v.referrerPolicy="no-referrer"),s.emulatorConfig&&zs(s.emulatorConfig.host)&&(v.credentials="include"),P0.fetch()(await H0(s,s.config.apiHost,i,g),v)})}async function z0(s,e,i){s._canInitEmulator=!1;const a={...DA,...e};try{const l=new LA(s),h=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const d=await h.json();if("needConfirmation"in d)throw Sc(s,"account-exists-with-different-credential",d);if(h.ok&&!("errorMessage"in d))return d;{const g=h.ok?d.errorMessage:d.error.message,[y,v]=g.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sc(s,"credential-already-in-use",d);if(y==="EMAIL_EXISTS")throw Sc(s,"email-already-in-use",d);if(y==="USER_DISABLED")throw Sc(s,"user-disabled",d);const b=a[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw U0(s,b,v);Gn(s,b)}}catch(l){if(l instanceof On)throw l;Gn(s,"network-request-failed",{message:String(l)})}}async function Bl(s,e,i,a,l={}){const h=await js(s,e,i,a,l);return"mfaPendingCredential"in h&&Gn(s,"multi-factor-auth-required",{_serverResponse:h}),h}async function H0(s,e,i,a){const l=`${e}${i}?${a}`,h=s,d=h.config.emulator?bp(s.config,l):`${s.config.apiScheme}://${l}`;return MA.includes(i)&&(await h._persistenceManagerAvailable,h._getPersistenceType()==="COOKIE")?h._getPersistence()._getFinalTarget(d).toString():d}function xA(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(ci(this.auth,"network-request-failed")),kA.get())})}}function Sc(s,e,i){const a={appName:s.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const l=ci(s,e,a);return l.customData._tokenResponse=i,l}function By(s){return s!==void 0&&s.enterprise!==void 0}class UA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return xA(i.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function PA(s,e){return js(s,"GET","/v2/recaptchaConfig",Bs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(s,e){return js(s,"POST","/v1/accounts:delete",e)}async function Bc(s,e){return js(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HA(s,e=!1){const i=en(s),a=await i.getIdToken(e),l=Ap(a);ue(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const h=typeof l.firebase=="object"?l.firebase:void 0,d=h?.sign_in_provider;return{claims:l,token:a,authTime:Tl(Nd(l.auth_time)),issuedAtTime:Tl(Nd(l.iat)),expirationTime:Tl(Nd(l.exp)),signInProvider:d||null,signInSecondFactor:h?.sign_in_second_factor||null}}function Nd(s){return Number(s)*1e3}function Ap(s){const[e,i,a]=s.split(".");if(e===void 0||i===void 0||a===void 0)return Nc("JWT malformed, contained fewer than 3 sections"),null;try{const l=Uc(i);return l?JSON.parse(l):(Nc("Failed to decode base64 JWT payload"),null)}catch(l){return Nc("Caught error parsing JWT payload as JSON",l?.toString()),null}}function jy(s){const e=Ap(s);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(s,e,i=!1){if(i)return e;try{return await e}catch(a){throw a instanceof On&&BA(a)&&s.auth.currentUser===s&&await s.auth.signOut(),a}}function BA({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tl(this.lastLoginAt),this.creationTime=Tl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jc(s){const e=s.auth,i=await s.getIdToken(),a=await Ml(s,Bc(e,{idToken:i}));ue(a?.users.length,e,"internal-error");const l=a.users[0];s._notifyReloadListener(l);const h=l.providerUserInfo?.length?B0(l.providerUserInfo):[],d=qA(s.providerData,h),g=s.isAnonymous,y=!(s.email&&l.passwordHash)&&!d?.length,v=g?y:!1,b={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Zd(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(s,b)}async function VA(s){const e=en(s);await jc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qA(s,e){return[...s.filter(a=>!e.some(l=>l.providerId===a.providerId)),...e]}function B0(s){return s.map(({providerId:e,...i})=>({providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(s,e){const i=await z0(s,{},async()=>{const a=eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:h}=s.config,d=await H0(s,l,"/v1/token",`key=${h}`),g=await s._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:g,body:a};return s.emulatorConfig&&zs(s.emulatorConfig.host)&&(y.credentials="include"),P0.fetch()(d,y)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function FA(s,e){return js(s,"POST","/v2/accounts:revokeToken",Bs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const i=jy(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:a,refreshToken:l,expiresIn:h}=await GA(e,i);this.updateTokensAndExpiration(a,l,Number(h))}updateTokensAndExpiration(e,i,a){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,i){const{refreshToken:a,accessToken:l,expirationTime:h}=i,d=new qa;return a&&(ue(typeof a=="string","internal-error",{appName:e}),d.refreshToken=a),l&&(ue(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),h&&(ue(typeof h=="number","internal-error",{appName:e}),d.expirationTime=h),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qa,this.toJSON())}_performRefresh(){return Vi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(s,e){ue(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class Hn{constructor({uid:e,auth:i,stsTokenManager:a,...l}){this.providerId="firebase",this.proactiveRefresh=new jA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Zd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const i=await Ml(this,this.stsTokenManager.getToken(this.auth,e));return ue(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return HA(this,e)}reload(){return VA(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>({...i})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new Hn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),i&&await jc(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(Fi(this.auth));const e=await this.getIdToken();return await Ml(this,zA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){const a=i.displayName??void 0,l=i.email??void 0,h=i.phoneNumber??void 0,d=i.photoURL??void 0,g=i.tenantId??void 0,y=i._redirectEventId??void 0,v=i.createdAt??void 0,b=i.lastLoginAt??void 0,{uid:I,emailVerified:O,isAnonymous:Q,providerData:K,stsTokenManager:ie}=i;ue(I&&ie,e,"internal-error");const te=qa.fromJSON(this.name,ie);ue(typeof I=="string",e,"internal-error"),Is(a,e.name),Is(l,e.name),ue(typeof O=="boolean",e,"internal-error"),ue(typeof Q=="boolean",e,"internal-error"),Is(h,e.name),Is(d,e.name),Is(g,e.name),Is(y,e.name),Is(v,e.name),Is(b,e.name);const xe=new Hn({uid:I,auth:e,email:l,emailVerified:O,displayName:a,isAnonymous:Q,photoURL:d,phoneNumber:h,tenantId:g,stsTokenManager:te,createdAt:v,lastLoginAt:b});return K&&Array.isArray(K)&&(xe.providerData=K.map(Se=>({...Se}))),y&&(xe._redirectEventId=y),xe}static async _fromIdTokenResponse(e,i,a=!1){const l=new qa;l.updateFromServerResponse(i);const h=new Hn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a});return await jc(h),h}static async _fromGetAccountInfoResponse(e,i,a){const l=i.users[0];ue(l.localId!==void 0,"internal-error");const h=l.providerUserInfo!==void 0?B0(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!h?.length,g=new qa;g.updateFromIdToken(a);const y=new Hn({uid:l.localId,auth:e,stsTokenManager:g,isAnonymous:d}),v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new Zd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!h?.length};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=new Map;function qi(s){Wi(s instanceof Function,"Expected a class definition");let e=Vy.get(s);return e?(Wi(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Vy.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}j0.type="NONE";const qy=j0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(s,e,i){return`firebase:${s}:${e}:${i}`}class Ga{constructor(e,i,a){this.persistence=e,this.auth=i,this.userKey=a;const{config:l,name:h}=this.auth;this.fullUserKey=Oc(this.userKey,l.apiKey,h),this.fullPersistenceKey=Oc("persistence",l.apiKey,h),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await Bc(this.auth,{idToken:e}).catch(()=>{});return i?Hn._fromGetAccountInfoResponse(this.auth,i,e):null}return Hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,a="authUser"){if(!i.length)return new Ga(qi(qy),e,a);const l=(await Promise.all(i.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let h=l[0]||qi(qy);const d=Oc(a,e.config.apiKey,e.name);let g=null;for(const v of i)try{const b=await v._get(d);if(b){let I;if(typeof b=="string"){const O=await Bc(e,{idToken:b}).catch(()=>{});if(!O)break;I=await Hn._fromGetAccountInfoResponse(e,O,b)}else I=Hn._fromJSON(e,b);v!==h&&(g=I),h=v;break}}catch{}const y=l.filter(v=>v._shouldAllowMigration);return!h._shouldAllowMigration||!y.length?new Ga(h,e,a):(h=y[0],g&&await h._set(d,g.toJSON()),await Promise.all(i.map(async v=>{if(v!==h)try{await v._remove(d)}catch{}})),new Ga(h,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(F0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K0(e))return"Blackberry";if(X0(e))return"Webos";if(q0(e))return"Safari";if((e.includes("chrome/")||G0(e))&&!e.includes("edge/"))return"Chrome";if(Y0(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=s.match(i);if(a?.length===2)return a[1]}return"Other"}function V0(s=Ft()){return/firefox\//i.test(s)}function q0(s=Ft()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G0(s=Ft()){return/crios\//i.test(s)}function F0(s=Ft()){return/iemobile/i.test(s)}function Y0(s=Ft()){return/android/i.test(s)}function K0(s=Ft()){return/blackberry/i.test(s)}function X0(s=Ft()){return/webos/i.test(s)}function wp(s=Ft()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function YA(s=Ft()){return wp(s)&&!!window.navigator?.standalone}function KA(){return tb()&&document.documentMode===10}function W0(s=Ft()){return wp(s)||Y0(s)||X0(s)||K0(s)||/windows phone/i.test(s)||F0(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(s,e=[]){let i;switch(s){case"Browser":i=Gy(Ft());break;case"Worker":i=`${Gy(Ft())}-${s}`;break;default:i=s}const a=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${Hs}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const a=h=>new Promise((d,g)=>{try{const y=e(h);d(y)}catch(y){g(y)}});a.onAbort=i,this.queue.push(a);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const a of this.queue)await a(e),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(s,e={}){return js(s,"GET","/v2/passwordPolicy",Bs(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=6;class ZA{constructor(e){const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??QA,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,i),this.validatePasswordCharacterOptions(e,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(e,i){const a=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=e.length>=a),l&&(i.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let l=0;l<e.length;l++)a=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,i,a,l,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,i,a,l){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fy(this),this.idTokenSubscription=new Fy(this),this.beforeStateQueue=new XA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(h=>this._resolvePersistenceManagerAvailable=h)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=qi(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ga.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await Bc(this,{idToken:e}),a=await Hn._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Zt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=this.redirectUser?._redirectEventId,d=a?._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===d)&&g?.user&&(a=g.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(h){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await jc(e)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(Fi(this));const i=e?en(e):null;return i&&ue(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(Fi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(Fi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WA(this),i=new ZA(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gr("auth","Firebase",e())}onAuthStateChanged(e,i,a){return this.registerStateListener(this.authStateSubscription,e,i,a)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,a){return this.registerStateListener(this.idTokenSubscription,e,i,a)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await FA(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,i){const a=await this.getOrInitRedirectPersistenceManager(i);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&qi(e)||this._popupRedirectResolver;ue(i,this,"argument-error"),this.redirectPersistenceManager=await Ga.create(this,[qi(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,a,l){if(this._deleted)return()=>{};const h=typeof i=="function"?i:i.next.bind(i);let d=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(g,this,"internal-error"),g.then(()=>{d||h(this.currentUser)}),typeof i=="function"){const y=e.addObserver(i,a,l);return()=>{d=!0,y()}}else{const y=e.addObserver(i);return()=>{d=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(e["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(e["X-Firebase-AppCheck"]=a),e}async _getAppCheckToken(){if(Zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&RA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Fr(s){return en(s)}class Fy{constructor(e){this.auth=e,this.observer=null,this.addObserver=cb(i=>this.observer=i)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JA(s){oh=s}function Z0(s){return oh.loadJS(s)}function ew(){return oh.recaptchaEnterpriseScript}function tw(){return oh.gapiScript}function nw(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class iw{constructor(){this.enterprise=new sw}ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}class sw{ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}const rw="recaptcha-enterprise",$0="NO_RECAPTCHA";class aw{constructor(e){this.type=rw,this.auth=Fr(e)}async verify(e="verify",i=!1){async function a(h){if(!i){if(h.tenantId==null&&h._agentRecaptchaConfig!=null)return h._agentRecaptchaConfig.siteKey;if(h.tenantId!=null&&h._tenantRecaptchaConfigs[h.tenantId]!==void 0)return h._tenantRecaptchaConfigs[h.tenantId].siteKey}return new Promise(async(d,g)=>{PA(h,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const v=new UA(y);return h.tenantId==null?h._agentRecaptchaConfig=v:h._tenantRecaptchaConfigs[h.tenantId]=v,d(v.siteKey)}}).catch(y=>{g(y)})})}function l(h,d,g){const y=window.grecaptcha;By(y)?y.enterprise.ready(()=>{y.enterprise.execute(h,{action:e}).then(v=>{d(v)}).catch(()=>{d($0)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iw().execute("siteKey",{action:"verify"}):new Promise((h,d)=>{a(this.auth).then(g=>{if(!i&&By(window.grecaptcha))l(g,h,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let y=ew();y.length!==0&&(y+=g),Z0(y).then(()=>{l(g,h,d)}).catch(v=>{d(v)})}}).catch(g=>{d(g)})})}}async function Yy(s,e,i,a=!1,l=!1){const h=new aw(s);let d;if(l)d=$0;else try{d=await h.verify(i)}catch{d=await h.verify(i,!0)}const g={...e};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in g){const y=g.phoneEnrollmentInfo.phoneNumber,v=g.phoneEnrollmentInfo.recaptchaToken;Object.assign(g,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:v,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in g){const y=g.phoneSignInInfo.recaptchaToken;Object.assign(g,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return g}return a?Object.assign(g,{captchaResp:d}):Object.assign(g,{captchaResponse:d}),Object.assign(g,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(g,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),g}async function $d(s,e,i,a,l){if(s._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Yy(s,e,i,i==="getOobCode");return a(s,h)}else return a(s,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Yy(s,e,i,i==="getOobCode");return a(s,d)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(s,e){const i=$i(s,"auth");if(i.isInitialized()){const l=i.getImmediate(),h=i.getOptions();if(Ki(h,e??{}))return l;Gn(l,"already-initialized")}return i.initialize({options:e})}function lw(s,e){const i=e?.persistence||[],a=(Array.isArray(i)?i:[i]).map(qi);e?.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(a,e?.popupRedirectResolver)}function uw(s,e,i){const a=Fr(s);ue(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const l=!1,h=J0(e),{host:d,port:g}=cw(e),y=g===null?"":`:${g}`,v={url:`${h}//${d}${y}/`},b=Object.freeze({host:d,port:g,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!a._canInitEmulator){ue(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),ue(Ki(v,a.config.emulator)&&Ki(b,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=v,a.emulatorConfig=b,a.settings.appVerificationDisabledForTesting=!0,zs(d)?(sh(`${h}//${d}${y}`),rh("Auth",!0)):hw()}function J0(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function cw(s){const e=J0(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(a);if(l){const h=l[1];return{host:h,port:Ky(a.substr(h.length+1))}}else{const[h,d]=a.split(":");return{host:h,port:Ky(d)}}}function Ky(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function hw(){function s(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return Vi("not implemented")}_getIdTokenResponse(e){return Vi("not implemented")}_linkToIdToken(e,i){return Vi("not implemented")}_getReauthenticationResolver(e){return Vi("not implemented")}}async function fw(s,e){return js(s,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dw(s,e){return Bl(s,"POST","/v1/accounts:signInWithPassword",Bs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(s,e){return Bl(s,"POST","/v1/accounts:signInWithEmailLink",Bs(s,e))}async function gw(s,e){return Bl(s,"POST","/v1/accounts:signInWithEmailLink",Bs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends Cp{constructor(e,i,a,l=null){super("password",a),this._email=e,this._password=i,this._tenantId=l}static _fromEmailAndPassword(e,i){return new kl(e,i,"password")}static _fromEmailAndCode(e,i,a=null){return new kl(e,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $d(e,i,"signInWithPassword",dw);case"emailLink":return pw(e,{email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $d(e,a,"signUpPassword",fw);case"emailLink":return gw(e,{idToken:i,email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(s,e){return Bl(s,"POST","/v1/accounts:signInWithIdp",Bs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="http://localhost";class Ur extends Cp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new Ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):Gn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:l,...h}=i;if(!a||!l)return null;const d=new Ur(a,l);return d.idToken=h.idToken||void 0,d.accessToken=h.accessToken||void 0,d.secret=h.secret,d.nonce=h.nonce,d.pendingToken=h.pendingToken||null,d}_getIdTokenResponse(e){const i=this.buildRequest();return Fa(e,i)}_linkToIdToken(e,i){const a=this.buildRequest();return a.idToken=i,Fa(e,a)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,Fa(e,i)}buildRequest(){const e={requestUri:mw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=eo(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yw(s){const e=yl(vl(s)).link,i=e?yl(vl(e)).deep_link_id:null,a=yl(vl(s)).deep_link_id;return(a?yl(vl(a)).link:null)||a||i||e||s}class Rp{constructor(e){const i=yl(vl(e)),a=i.apiKey??null,l=i.oobCode??null,h=_w(i.mode??null);ue(a&&l&&h,"argument-error"),this.apiKey=a,this.operation=h,this.code=l,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(e){const i=yw(e);try{return new Rp(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.providerId=to.PROVIDER_ID}static credential(e,i){return kl._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){const a=Rp.parseLink(i);return ue(a,"argument-error"),kl._fromEmailAndCode(e,a.code,a.tenantId)}}to.PROVIDER_ID="password";to.EMAIL_PASSWORD_SIGN_IN_METHOD="password";to.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends eE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends jl{constructor(){super("facebook.com")}static credential(e){return Ur._fromParams({providerId:Ns.PROVIDER_ID,signInMethod:Ns.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ns.credentialFromTaggedObject(e)}static credentialFromError(e){return Ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ns.credential(e.oauthAccessToken)}catch{return null}}}Ns.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ns.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends jl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return Ur._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:a}=e;if(!i&&!a)return null;try{return Os.credential(i,a)}catch{return null}}}Os.GOOGLE_SIGN_IN_METHOD="google.com";Os.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends jl{constructor(){super("github.com")}static credential(e){return Ur._fromParams({providerId:Ds.PROVIDER_ID,signInMethod:Ds.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ds.credentialFromTaggedObject(e)}static credentialFromError(e){return Ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ds.credential(e.oauthAccessToken)}catch{return null}}}Ds.GITHUB_SIGN_IN_METHOD="github.com";Ds.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends jl{constructor(){super("twitter.com")}static credential(e,i){return Ur._fromParams({providerId:Ms.PROVIDER_ID,signInMethod:Ms.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Ms.credentialFromTaggedObject(e)}static credentialFromError(e){return Ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=e;if(!i||!a)return null;try{return Ms.credential(i,a)}catch{return null}}}Ms.TWITTER_SIGN_IN_METHOD="twitter.com";Ms.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(s,e){return Bl(s,"POST","/v1/accounts:signUp",Bs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,a,l=!1){const h=await Hn._fromIdTokenResponse(e,a,l),d=Xy(a);return new Pr({user:h,providerId:d,_tokenResponse:a,operationType:i})}static async _forOperation(e,i,a){await e._updateTokensIfNecessary(a,!0);const l=Xy(a);return new Pr({user:e,providerId:l,_tokenResponse:a,operationType:i})}}function Xy(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends On{constructor(e,i,a,l){super(i.code,i.message),this.operationType=a,this.user=l,Object.setPrototypeOf(this,Vc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,i,a,l){return new Vc(e,i,a,l)}}function tE(s,e,i,a){return(e==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?Vc._fromErrorAndOperation(s,h,e,a):h})}async function Ew(s,e,i=!1){const a=await Ml(s,e._linkToIdToken(s.auth,await s.getIdToken()),i);return Pr._forOperation(s,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(s,e,i=!1){const{auth:a}=s;if(Zt(a.app))return Promise.reject(Fi(a));const l="reauthenticate";try{const h=await Ml(s,tE(a,l,e,s),i);ue(h.idToken,a,"internal-error");const d=Ap(h.idToken);ue(d,a,"internal-error");const{sub:g}=d;return ue(s.uid===g,a,"user-mismatch"),Pr._forOperation(s,l,h)}catch(h){throw h?.code==="auth/user-not-found"&&Gn(a,"user-mismatch"),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(s,e,i=!1){if(Zt(s.app))return Promise.reject(Fi(s));const a="signIn",l=await tE(s,a,e),h=await Pr._fromIdTokenResponse(s,a,l);return i||await s._updateCurrentUser(h.user),h}async function Sw(s,e){return nE(Fr(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(s){const e=Fr(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bw(s,e,i){if(Zt(s.app))return Promise.reject(Fi(s));const a=Fr(s),d=await $d(a,{returnSecureToken:!0,email:e,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vw).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&iE(s),y}),g=await Pr._fromIdTokenResponse(a,"signIn",d);return await a._updateCurrentUser(g.user),g}function Aw(s,e,i){return Zt(s.app)?Promise.reject(Fi(s)):Sw(en(s),to.credential(e,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&iE(s),a})}function ww(s,e,i,a){return en(s).onIdTokenChanged(e,i,a)}function Cw(s,e,i){return en(s).beforeAuthStateChanged(e,i)}function Rw(s,e,i,a){return en(s).onAuthStateChanged(e,i,a)}function Iw(s){return en(s).signOut()}const qc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(qc,"1"),this.storage.removeItem(qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=1e3,Ow=10;class rE extends sE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=W0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),l=this.localCache[i];a!==l&&e(i,l,a)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((d,g,y)=>{this.notifyListeners(d,y)});return}const a=e.key;i?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(a);!i&&this.localCache[a]===d||this.notifyListeners(a,d)},h=this.storage.getItem(a);KA()&&h!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,Ow):l()}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const l of Array.from(a))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:a}),!0)})},Nw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}rE.type="LOCAL";const Dw=rE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE extends sE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}aE.type="SESSION";const oE=aE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(l=>l.isListeningto(e));if(i)return i;const a=new lh(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:a,eventType:l,data:h}=i.data,d=this.handlersMap[l];if(!d?.size)return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:l});const g=Array.from(d).map(async v=>v(i.origin,h)),y=await Mw(g);i.ports[0].postMessage({status:"done",eventId:a,eventType:l,response:y})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(s="",e=10){let i="";for(let a=0;a<e;a++)i+=Math.floor(Math.random()*10);return s+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,a=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let h,d;return new Promise((g,y)=>{const v=Ip("",20);l.port1.start();const b=setTimeout(()=>{y(new Error("unsupported_event"))},a);d={messageChannel:l,onMessage(I){const O=I;if(O.data.eventId===v)switch(O.data.status){case"ack":clearTimeout(b),h=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),g(O.data.response);break;default:clearTimeout(b),clearTimeout(h),y(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:v,data:i},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(){return window}function xw(s){hi().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(){return typeof hi().WorkerGlobalScope<"u"&&typeof hi().importScripts=="function"}async function Lw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Uw(){return navigator?.serviceWorker?.controller||null}function Pw(){return lE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="firebaseLocalStorageDb",zw=1,Gc="firebaseLocalStorage",cE="fbase_key";class Vl{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function uh(s,e){return s.transaction([Gc],e?"readwrite":"readonly").objectStore(Gc)}function Hw(){const s=indexedDB.deleteDatabase(uE);return new Vl(s).toPromise()}function Jd(){const s=indexedDB.open(uE,zw);return new Promise((e,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const a=s.result;try{a.createObjectStore(Gc,{keyPath:cE})}catch(l){i(l)}}),s.addEventListener("success",async()=>{const a=s.result;a.objectStoreNames.contains(Gc)?e(a):(a.close(),await Hw(),e(await Jd()))})})}async function Wy(s,e,i){const a=uh(s,!0).put({[cE]:e,value:i});return new Vl(a).toPromise()}async function Bw(s,e){const i=uh(s,!1).get(e),a=await new Vl(i).toPromise();return a===void 0?null:a.value}function Qy(s,e){const i=uh(s,!0).delete(e);return new Vl(i).toPromise()}const jw=800,Vw=3;class hE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jd(),this.db)}async _withRetries(e){let i=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(i++>Vw)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lh._getInstance(Pw()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Lw(),!this.activeServiceWorker)return;this.sender=new kw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Uw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jd();return await Wy(e,qc,"1"),await Qy(e,qc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>Wy(a,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(a=>Bw(a,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Qy(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const h=uh(l,!1).getAll();return new Vl(h).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(e.length!==0)for(const{fbase_key:l,value:h}of e)a.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(h)&&(this.notifyListeners(l,h),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!a.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const l of Array.from(a))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hE.type="LOCAL";const qw=hE;new Hl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(s,e){return e?qi(e):(ue(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np extends Cp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fa(e,this._buildIdpRequest())}_linkToIdToken(e,i){return Fa(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return Fa(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function Fw(s){return nE(s.auth,new Np(s),s.bypassAuthState)}function Yw(s){const{auth:e,user:i}=s;return ue(i,e,"internal-error"),Tw(i,new Np(s),s.bypassAuthState)}async function Kw(s){const{auth:e,user:i}=s;return ue(i,e,"internal-error"),Ew(i,new Np(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,i,a,l,h=!1){this.auth=e,this.resolver=a,this.user=l,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:a,postBody:l,tenantId:h,error:d,type:g}=e;if(d){this.reject(d);return}const y={auth:this.auth,requestUri:i,sessionId:a,tenantId:h||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fw;case"linkViaPopup":case"linkViaRedirect":return Kw;case"reauthViaPopup":case"reauthViaRedirect":return Yw;default:Gn(this.auth,"internal-error")}}resolve(e){Wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=new Hl(2e3,1e4);class Ba extends fE{constructor(e,i,a,l,h){super(e,i,l,h),this.provider=a,this.authWindow=null,this.pollId=null,Ba.currentPopupAction&&Ba.currentPopupAction.cancel(),Ba.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Wi(this.filter.length===1,"Popup operations only handle one event");const e=Ip();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(ci(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ci(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ba.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ci(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Xw.get())};e()}}Ba.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="pendingRedirect",Dc=new Map;class Qw extends fE{constructor(e,i,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let e=Dc.get(this.auth._key());if(!e){try{const a=await Zw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(i){e=()=>Promise.reject(i)}Dc.set(this.auth._key(),e)}return this.bypassAuthState||Dc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zw(s,e){const i=eC(e),a=Jw(s);if(!await a._isAvailable())return!1;const l=await a._get(i)==="true";return await a._remove(i),l}function $w(s,e){Dc.set(s._key(),e)}function Jw(s){return qi(s._redirectPersistence)}function eC(s){return Oc(Ww,s.config.apiKey,s.name)}async function tC(s,e,i=!1){if(Zt(s.app))return Promise.reject(Fi(s));const a=Fr(s),l=Gw(a,e),d=await new Qw(a,l,i).execute();return d&&!i&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=600*1e3;class iC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(i=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sC(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){if(e.error&&!dE(e)){const a=e.error.code?.split("auth/")[1]||"internal-error";i.onError(ci(this.auth,a))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const a=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zy(e))}saveEventToCache(e){this.cachedEventUids.add(Zy(e)),this.lastProcessedEventTime=Date.now()}}function Zy(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function dE({type:s,error:e}){return s==="unknown"&&e?.code==="auth/no-auth-event"}function sC(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dE(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(s,e={}){return js(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oC=/^https?/;async function lC(s){if(s.config.emulator)return;const{authorizedDomains:e}=await rC(s);for(const i of e)try{if(uC(i))return}catch{}Gn(s,"unauthorized-domain")}function uC(s){const e=Qd(),{protocol:i,hostname:a}=new URL(e);if(s.startsWith("chrome-extension://")){const d=new URL(s);return d.hostname===""&&a===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===a}if(!oC.test(i))return!1;if(aC.test(s))return a===s;const l=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=new Hl(3e4,6e4);function $y(){const s=hi().___jsl;if(s?.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function hC(s){return new Promise((e,i)=>{function a(){$y(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$y(),i(ci(s,"network-request-failed"))},timeout:cC.get()})}if(hi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(hi().gapi?.load)a();else{const l=nw("iframefcb");return hi()[l]=()=>{gapi.load?a():i(ci(s,"network-request-failed"))},Z0(`${tw()}?onload=${l}`).catch(h=>i(h))}}).catch(e=>{throw Mc=null,e})}let Mc=null;function fC(s){return Mc=Mc||hC(s),Mc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=new Hl(5e3,15e3),pC="__/auth/iframe",gC="emulator/auth/iframe",mC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_C=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yC(s){const e=s.config;ue(e.authDomain,s,"auth-domain-config-required");const i=e.emulator?bp(e,gC):`https://${s.config.authDomain}/${pC}`,a={apiKey:e.apiKey,appName:s.name,v:Hs},l=_C.get(s.config.apiHost);l&&(a.eid=l);const h=s._getFrameworks();return h.length&&(a.fw=h.join(",")),`${i}?${eo(a).slice(1)}`}async function vC(s){const e=await fC(s),i=hi().gapi;return ue(i,s,"internal-error"),e.open({where:document.body,url:yC(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mC,dontclear:!0},a=>new Promise(async(l,h)=>{await a.restyle({setHideOnLeave:!1});const d=ci(s,"network-request-failed"),g=hi().setTimeout(()=>{h(d)},dC.get());function y(){hi().clearTimeout(g),l(a)}a.ping(y).then(y,()=>{h(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TC=500,SC=600,bC="_blank",AC="http://localhost";class Jy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wC(s,e,i,a=TC,l=SC){const h=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let g="";const y={...EC,width:a.toString(),height:l.toString(),top:h,left:d},v=Ft().toLowerCase();i&&(g=G0(v)?bC:i),V0(v)&&(e=e||AC,y.scrollbars="yes");const b=Object.entries(y).reduce((O,[Q,K])=>`${O}${Q}=${K},`,"");if(YA(v)&&g!=="_self")return CC(e||"",g),new Jy(null);const I=window.open(e||"",g,b);ue(I,s,"popup-blocked");try{I.focus()}catch{}return new Jy(I)}function CC(s,e){const i=document.createElement("a");i.href=s,i.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="__/auth/handler",IC="emulator/auth/handler",NC=encodeURIComponent("fac");async function ev(s,e,i,a,l,h){ue(s.config.authDomain,s,"auth-domain-config-required"),ue(s.config.apiKey,s,"invalid-api-key");const d={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:a,v:Hs,eventId:l};if(e instanceof eE){e.setDefaultLanguage(s.languageCode),d.providerId=e.providerId||"",Gd(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,I]of Object.entries({}))d[b]=I}if(e instanceof jl){const b=e.getScopes().filter(I=>I!=="");b.length>0&&(d.scopes=b.join(","))}s.tenantId&&(d.tid=s.tenantId);const g=d;for(const b of Object.keys(g))g[b]===void 0&&delete g[b];const y=await s._getAppCheckToken(),v=y?`#${NC}=${encodeURIComponent(y)}`:"";return`${OC(s)}?${eo(g).slice(1)}${v}`}function OC({config:s}){return s.emulator?bp(s,IC):`https://${s.authDomain}/${RC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="webStorageSupport";class DC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oE,this._completeRedirectFn=tC,this._overrideRedirectResult=$w}async _openPopup(e,i,a,l){Wi(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const h=await ev(e,i,a,Qd(),l);return wC(e,h,Ip())}async _openRedirect(e,i,a,l){await this._originValidation(e);const h=await ev(e,i,a,Qd(),l);return xw(h),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:l,promise:h}=this.eventManagers[i];return l?Promise.resolve(l):(Wi(h,"If manager is not set, promise should be"),h)}const a=this.initAndGetManager(e);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(e){const i=await vC(e),a=new iC(e);return i.register("authEvent",l=>(ue(l?.authEvent,e,"invalid-auth-event"),{status:a.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=i,a}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(Od,{type:Od},l=>{const h=l?.[0]?.[Od];h!==void 0&&i(!!h),Gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=lC(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return W0()||q0()||wp()}}const MC=DC;var tv="@firebase/auth",nv="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(a=>{e(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LC(s){In(new dn("auth",(e,{options:i})=>{const a=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:d,authDomain:g}=a.options;ue(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const y={apiKey:d,authDomain:g,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q0(s)},v=new $A(a,l,h,y);return lw(v,i),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,a)=>{e.getProvider("auth-internal").initialize()})),In(new dn("auth-internal",e=>{const i=Fr(e.getProvider("auth").getImmediate());return(a=>new kC(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(tv,nv,xC(s)),Bt(tv,nv,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=300,PC=S0("authIdTokenMaxAge")||UC;let iv=null;const zC=s=>async e=>{const i=e&&await e.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>PC)return;const l=i?.token;iv!==l&&(iv=l,await fetch(s,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function HC(s=zl()){const e=$i(s,"auth");if(e.isInitialized())return e.getImmediate();const i=ow(s,{popupRedirectResolver:MC,persistence:[qw,Dw,oE]}),a=S0("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(a,location.origin);if(location.origin===h.origin){const d=zC(h.toString());Cw(i,d,()=>d(i.currentUser)),ww(i,g=>d(g))}}const l=E0("auth");return l&&uw(i,`http://${l}`),i}function BC(){return document.getElementsByTagName("head")?.[0]??document}JA({loadJS(s){return new Promise((e,i)=>{const a=document.createElement("script");a.setAttribute("src",s),a.onload=e,a.onerror=l=>{const h=ci("internal-error");h.customData=l,i(h)},a.type="text/javascript",a.charset="UTF-8",BC().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LC("Browser");var jC="firebase",VC="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt(jC,VC,"app");const pE="@firebase/installations",Op="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=1e4,mE=`w:${Op}`,_E="FIS_v2",qC="https://firebaseinstallations.googleapis.com/v1",GC=3600*1e3,FC="installations",YC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},zr=new Gr(FC,YC,KC);function yE(s){return s instanceof On&&s.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE({projectId:s}){return`${qC}/projects/${s}/installations`}function EE(s){return{token:s.token,requestStatus:2,expiresIn:WC(s.expiresIn),creationTime:Date.now()}}async function TE(s,e){const a=(await e.json()).error;return zr.create("request-failed",{requestName:s,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function SE({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function XC(s,{refreshToken:e}){const i=SE(s);return i.append("Authorization",QC(e)),i}async function bE(s){const e=await s();return e.status>=500&&e.status<600?s():e}function WC(s){return Number(s.replace("s","000"))}function QC(s){return`${_E} ${s}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC({appConfig:s,heartbeatServiceProvider:e},{fid:i}){const a=vE(s),l=SE(s),h=e.getImmediate({optional:!0});if(h){const v=await h.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const d={fid:i,authVersion:_E,appId:s.appId,sdkVersion:mE},g={method:"POST",headers:l,body:JSON.stringify(d)},y=await bE(()=>fetch(a,g));if(y.ok){const v=await y.json();return{fid:v.fid||i,registrationStatus:2,refreshToken:v.refreshToken,authToken:EE(v.authToken)}}else throw await TE("Create Installation",y)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(s){return new Promise(e=>{setTimeout(e,s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=/^[cdef][\w-]{21}$/,ep="";function eR(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const i=tR(s);return JC.test(i)?i:ep}catch{return ep}}function tR(s){return $C(s).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(s){return`${s.appName}!${s.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=new Map;function CE(s,e){const i=ch(s);RE(i,e),nR(i,e)}function RE(s,e){const i=wE.get(s);if(i)for(const a of i)a(e)}function nR(s,e){const i=iR();i&&i.postMessage({key:s,fid:e}),sR()}let Or=null;function iR(){return!Or&&"BroadcastChannel"in self&&(Or=new BroadcastChannel("[Firebase] FID Change"),Or.onmessage=s=>{RE(s.data.key,s.data.fid)}),Or}function sR(){wE.size===0&&Or&&(Or.close(),Or=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="firebase-installations-database",aR=1,Hr="firebase-installations-store";let Dd=null;function Dp(){return Dd||(Dd=O0(rR,aR,{upgrade:(s,e)=>{switch(e){case 0:s.createObjectStore(Hr)}}})),Dd}async function Fc(s,e){const i=ch(s),l=(await Dp()).transaction(Hr,"readwrite"),h=l.objectStore(Hr),d=await h.get(i);return await h.put(e,i),await l.done,(!d||d.fid!==e.fid)&&CE(s,e.fid),e}async function IE(s){const e=ch(s),a=(await Dp()).transaction(Hr,"readwrite");await a.objectStore(Hr).delete(e),await a.done}async function hh(s,e){const i=ch(s),l=(await Dp()).transaction(Hr,"readwrite"),h=l.objectStore(Hr),d=await h.get(i),g=e(d);return g===void 0?await h.delete(i):await h.put(g,i),await l.done,g&&(!d||d.fid!==g.fid)&&CE(s,g.fid),g}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mp(s){let e;const i=await hh(s.appConfig,a=>{const l=oR(a),h=lR(s,l);return e=h.registrationPromise,h.installationEntry});return i.fid===ep?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function oR(s){const e=s||{fid:eR(),registrationStatus:0};return NE(e)}function lR(s,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(zr.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=uR(s,i);return{installationEntry:i,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cR(s)}:{installationEntry:e}}async function uR(s,e){try{const i=await ZC(s,e);return Fc(s.appConfig,i)}catch(i){throw yE(i)&&i.customData.serverCode===409?await IE(s.appConfig):await Fc(s.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function cR(s){let e=await sv(s.appConfig);for(;e.registrationStatus===1;)await AE(100),e=await sv(s.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:a}=await Mp(s);return a||i}return e}function sv(s){return hh(s,e=>{if(!e)throw zr.create("installation-not-found");return NE(e)})}function NE(s){return hR(s)?{fid:s.fid,registrationStatus:0}:s}function hR(s){return s.registrationStatus===1&&s.registrationTime+gE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR({appConfig:s,heartbeatServiceProvider:e},i){const a=dR(s,i),l=XC(s,i),h=e.getImmediate({optional:!0});if(h){const v=await h.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const d={installation:{sdkVersion:mE,appId:s.appId}},g={method:"POST",headers:l,body:JSON.stringify(d)},y=await bE(()=>fetch(a,g));if(y.ok){const v=await y.json();return EE(v)}else throw await TE("Generate Auth Token",y)}function dR(s,{fid:e}){return`${vE(s)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(s,e=!1){let i;const a=await hh(s.appConfig,h=>{if(!OE(h))throw zr.create("not-registered");const d=h.authToken;if(!e&&mR(d))return h;if(d.requestStatus===1)return i=pR(s,e),h;{if(!navigator.onLine)throw zr.create("app-offline");const g=yR(h);return i=gR(s,g),g}});return i?await i:a.authToken}async function pR(s,e){let i=await rv(s.appConfig);for(;i.authToken.requestStatus===1;)await AE(100),i=await rv(s.appConfig);const a=i.authToken;return a.requestStatus===0?kp(s,e):a}function rv(s){return hh(s,e=>{if(!OE(e))throw zr.create("not-registered");const i=e.authToken;return vR(i)?{...e,authToken:{requestStatus:0}}:e})}async function gR(s,e){try{const i=await fR(s,e),a={...e,authToken:i};return await Fc(s.appConfig,a),i}catch(i){if(yE(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await IE(s.appConfig);else{const a={...e,authToken:{requestStatus:0}};await Fc(s.appConfig,a)}throw i}}function OE(s){return s!==void 0&&s.registrationStatus===2}function mR(s){return s.requestStatus===2&&!_R(s)}function _R(s){const e=Date.now();return e<s.creationTime||s.creationTime+s.expiresIn<e+GC}function yR(s){const e={requestStatus:1,requestTime:Date.now()};return{...s,authToken:e}}function vR(s){return s.requestStatus===1&&s.requestTime+gE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(s){const e=s,{installationEntry:i,registrationPromise:a}=await Mp(e);return a?a.catch(console.error):kp(e).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(s,e=!1){const i=s;return await SR(i),(await kp(i,e)).token}async function SR(s){const{registrationPromise:e}=await Mp(s);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(s){if(!s||!s.options)throw Md("App Configuration");if(!s.name)throw Md("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!s.options[i])throw Md(i);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function Md(s){return zr.create("missing-app-config-values",{valueName:s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="installations",AR="installations-internal",wR=s=>{const e=s.getProvider("app").getImmediate(),i=bR(e),a=$i(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},CR=s=>{const e=s.getProvider("app").getImmediate(),i=$i(e,DE).getImmediate();return{getId:()=>ER(i),getToken:l=>TR(i,l)}};function RR(){In(new dn(DE,wR,"PUBLIC")),In(new dn(AR,CR,"PRIVATE"))}RR();Bt(pE,Op);Bt(pE,Op,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="analytics",IR="firebase_id",NR="origin",OR=60*1e3,DR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Pl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},hn=new Gr("analytics","Analytics",MR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(s){if(!s.startsWith(xp)){const e=hn.create("invalid-gtag-resource",{gtagURL:s});return Jt.warn(e.message),""}return s}function ME(s){return Promise.all(s.map(e=>e.catch(i=>i)))}function xR(s,e){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(s,e)),i}function LR(s,e){const i=xR("firebase-js-sdk-policy",{createScriptURL:kR}),a=document.createElement("script"),l=`${xp}?l=${s}&id=${e}`;a.src=i?i?.createScriptURL(l):l,a.async=!0,document.head.appendChild(a)}function UR(s){let e=[];return Array.isArray(window[s])?e=window[s]:window[s]=e,e}async function PR(s,e,i,a,l,h){const d=a[l];try{if(d)await e[d];else{const y=(await ME(i)).find(v=>v.measurementId===l);y&&await e[y.appId]}}catch(g){Jt.error(g)}s("config",l,h)}async function zR(s,e,i,a,l){try{let h=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const g=await ME(i);for(const y of d){const v=g.find(I=>I.measurementId===y),b=v&&e[v.appId];if(b)h.push(b);else{h=[];break}}}h.length===0&&(h=Object.values(e)),await Promise.all(h),s("event",a,l||{})}catch(h){Jt.error(h)}}function HR(s,e,i,a){async function l(h,...d){try{if(h==="event"){const[g,y]=d;await zR(s,e,i,g,y)}else if(h==="config"){const[g,y]=d;await PR(s,e,i,a,g,y)}else if(h==="consent"){const[g,y]=d;s("consent",g,y)}else if(h==="get"){const[g,y,v]=d;s("get",g,y,v)}else if(h==="set"){const[g]=d;s("set",g)}else s(h,...d)}catch(g){Jt.error(g)}}return l}function BR(s,e,i,a,l){let h=function(...d){window[a].push(arguments)};return window[l]&&typeof window[l]=="function"&&(h=window[l]),window[l]=HR(h,s,e,i),{gtagCore:h,wrappedGtag:window[l]}}function jR(s){const e=window.document.getElementsByTagName("script");for(const i of Object.values(e))if(i.src&&i.src.includes(xp)&&i.src.includes(s))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=30,qR=1e3;class GR{constructor(e={},i=qR){this.throttleMetadata=e,this.intervalMillis=i}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,i){this.throttleMetadata[e]=i}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const kE=new GR;function FR(s){return new Headers({Accept:"application/json","x-goog-api-key":s})}async function YR(s){const{appId:e,apiKey:i}=s,a={method:"GET",headers:FR(i)},l=DR.replace("{app-id}",e),h=await fetch(l,a);if(h.status!==200&&h.status!==304){let d="";try{const g=await h.json();g.error?.message&&(d=g.error.message)}catch{}throw hn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:d})}return h.json()}async function KR(s,e=kE,i){const{appId:a,apiKey:l,measurementId:h}=s.options;if(!a)throw hn.create("no-app-id");if(!l){if(h)return{measurementId:h,appId:a};throw hn.create("no-api-key")}const d=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new QR;return setTimeout(async()=>{g.abort()},OR),xE({appId:a,apiKey:l,measurementId:h},d,g,e)}async function xE(s,{throttleEndTimeMillis:e,backoffCount:i},a,l=kE){const{appId:h,measurementId:d}=s;try{await XR(a,e)}catch(g){if(d)return Jt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:h,measurementId:d};throw g}try{const g=await YR(s);return l.deleteThrottleMetadata(h),g}catch(g){const y=g;if(!WR(y)){if(l.deleteThrottleMetadata(h),d)return Jt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:h,measurementId:d};throw g}const v=Number(y?.customData?.httpStatus)===503?Oy(i,l.intervalMillis,VR):Oy(i,l.intervalMillis),b={throttleEndTimeMillis:Date.now()+v,backoffCount:i+1};return l.setThrottleMetadata(h,b),Jt.debug(`Calling attemptFetch again in ${v} millis`),xE(s,b,a,l)}}function XR(s,e){return new Promise((i,a)=>{const l=Math.max(e-Date.now(),0),h=setTimeout(i,l);s.addEventListener(()=>{clearTimeout(h),a(hn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function WR(s){if(!(s instanceof On)||!s.customData)return!1;const e=Number(s.customData.httpStatus);return e===429||e===500||e===503||e===504}class QR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ZR(s,e,i,a,l){if(l&&l.global){s("event",i,a);return}else{const h=await e,d={...a,send_to:h};s("event",i,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(){if(w0())try{await C0()}catch(s){return Jt.warn(hn.create("indexeddb-unavailable",{errorInfo:s?.toString()}).message),!1}else return Jt.warn(hn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function JR(s,e,i,a,l,h,d){const g=KR(s);g.then(O=>{i[O.measurementId]=O.appId,s.options.measurementId&&O.measurementId!==s.options.measurementId&&Jt.warn(`The measurement ID in the local Firebase config (${s.options.measurementId}) does not match the measurement ID fetched from the server (${O.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(O=>Jt.error(O)),e.push(g);const y=$R().then(O=>{if(O)return a.getId()}),[v,b]=await Promise.all([g,y]);jR(h)||LR(h,v.measurementId),l("js",new Date);const I=d?.config??{};return I[NR]="firebase",I.update=!0,b!=null&&(I[IR]=b),l("config",v.measurementId,I),v.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.app=e}_delete(){return delete Sl[this.app.options.appId],Promise.resolve()}}let Sl={},av=[];const ov={};let kd="dataLayer",t2="gtag",lv,LE,uv=!1;function n2(){const s=[];if(b0()&&s.push("This is a browser extension environment."),ib()||s.push("Cookies are not available."),s.length>0){const e=s.map((a,l)=>`(${l+1}) ${a}`).join(" "),i=hn.create("invalid-analytics-context",{errorInfo:e});Jt.warn(i.message)}}function i2(s,e,i){n2();const a=s.options.appId;if(!a)throw hn.create("no-app-id");if(!s.options.apiKey)if(s.options.measurementId)Jt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${s.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw hn.create("no-api-key");if(Sl[a]!=null)throw hn.create("already-exists",{id:a});if(!uv){UR(kd);const{wrappedGtag:h,gtagCore:d}=BR(Sl,av,ov,kd,t2);LE=h,lv=d,uv=!0}return Sl[a]=JR(s,av,ov,e,lv,kd,i),new e2(s)}function s2(s=zl()){s=en(s);const e=$i(s,Yc);return e.isInitialized()?e.getImmediate():r2(s)}function r2(s,e={}){const i=$i(s,Yc);if(i.isInitialized()){const l=i.getImmediate();if(Ki(e,i.getOptions()))return l;throw hn.create("already-initialized")}return i.initialize({options:e})}function a2(s,e,i,a){s=en(s),ZR(LE,Sl[s.app.options.appId],e,i,a).catch(l=>Jt.error(l))}const cv="@firebase/analytics",hv="0.10.18";function o2(){In(new dn(Yc,(e,{options:i})=>{const a=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return i2(a,l,i)},"PUBLIC")),In(new dn("analytics-internal",s,"PRIVATE")),Bt(cv,hv),Bt(cv,hv,"esm2020");function s(e){try{const i=e.getProvider(Yc).getImmediate();return{logEvent:(a,l,h)=>a2(i,a,l,h)}}catch(i){throw hn.create("interop-component-reg-failed",{reason:i})}}}o2();var fv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lp;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function C(){}C.prototype=S.prototype,k.D=S.prototype,k.prototype=new C,k.prototype.constructor=k,k.C=function(D,M,L){for(var w=Array(arguments.length-2),It=2;It<arguments.length;It++)w[It-2]=arguments[It];return S.prototype[M].apply(D,w)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(a,i),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(k,S,C){C||(C=0);var D=Array(16);if(typeof S=="string")for(var M=0;16>M;++M)D[M]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(M=0;16>M;++M)D[M]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=k.g[0],C=k.g[1],M=k.g[2];var L=k.g[3],w=S+(L^C&(M^L))+D[0]+3614090360&4294967295;S=C+(w<<7&4294967295|w>>>25),w=L+(M^S&(C^M))+D[1]+3905402710&4294967295,L=S+(w<<12&4294967295|w>>>20),w=M+(C^L&(S^C))+D[2]+606105819&4294967295,M=L+(w<<17&4294967295|w>>>15),w=C+(S^M&(L^S))+D[3]+3250441966&4294967295,C=M+(w<<22&4294967295|w>>>10),w=S+(L^C&(M^L))+D[4]+4118548399&4294967295,S=C+(w<<7&4294967295|w>>>25),w=L+(M^S&(C^M))+D[5]+1200080426&4294967295,L=S+(w<<12&4294967295|w>>>20),w=M+(C^L&(S^C))+D[6]+2821735955&4294967295,M=L+(w<<17&4294967295|w>>>15),w=C+(S^M&(L^S))+D[7]+4249261313&4294967295,C=M+(w<<22&4294967295|w>>>10),w=S+(L^C&(M^L))+D[8]+1770035416&4294967295,S=C+(w<<7&4294967295|w>>>25),w=L+(M^S&(C^M))+D[9]+2336552879&4294967295,L=S+(w<<12&4294967295|w>>>20),w=M+(C^L&(S^C))+D[10]+4294925233&4294967295,M=L+(w<<17&4294967295|w>>>15),w=C+(S^M&(L^S))+D[11]+2304563134&4294967295,C=M+(w<<22&4294967295|w>>>10),w=S+(L^C&(M^L))+D[12]+1804603682&4294967295,S=C+(w<<7&4294967295|w>>>25),w=L+(M^S&(C^M))+D[13]+4254626195&4294967295,L=S+(w<<12&4294967295|w>>>20),w=M+(C^L&(S^C))+D[14]+2792965006&4294967295,M=L+(w<<17&4294967295|w>>>15),w=C+(S^M&(L^S))+D[15]+1236535329&4294967295,C=M+(w<<22&4294967295|w>>>10),w=S+(M^L&(C^M))+D[1]+4129170786&4294967295,S=C+(w<<5&4294967295|w>>>27),w=L+(C^M&(S^C))+D[6]+3225465664&4294967295,L=S+(w<<9&4294967295|w>>>23),w=M+(S^C&(L^S))+D[11]+643717713&4294967295,M=L+(w<<14&4294967295|w>>>18),w=C+(L^S&(M^L))+D[0]+3921069994&4294967295,C=M+(w<<20&4294967295|w>>>12),w=S+(M^L&(C^M))+D[5]+3593408605&4294967295,S=C+(w<<5&4294967295|w>>>27),w=L+(C^M&(S^C))+D[10]+38016083&4294967295,L=S+(w<<9&4294967295|w>>>23),w=M+(S^C&(L^S))+D[15]+3634488961&4294967295,M=L+(w<<14&4294967295|w>>>18),w=C+(L^S&(M^L))+D[4]+3889429448&4294967295,C=M+(w<<20&4294967295|w>>>12),w=S+(M^L&(C^M))+D[9]+568446438&4294967295,S=C+(w<<5&4294967295|w>>>27),w=L+(C^M&(S^C))+D[14]+3275163606&4294967295,L=S+(w<<9&4294967295|w>>>23),w=M+(S^C&(L^S))+D[3]+4107603335&4294967295,M=L+(w<<14&4294967295|w>>>18),w=C+(L^S&(M^L))+D[8]+1163531501&4294967295,C=M+(w<<20&4294967295|w>>>12),w=S+(M^L&(C^M))+D[13]+2850285829&4294967295,S=C+(w<<5&4294967295|w>>>27),w=L+(C^M&(S^C))+D[2]+4243563512&4294967295,L=S+(w<<9&4294967295|w>>>23),w=M+(S^C&(L^S))+D[7]+1735328473&4294967295,M=L+(w<<14&4294967295|w>>>18),w=C+(L^S&(M^L))+D[12]+2368359562&4294967295,C=M+(w<<20&4294967295|w>>>12),w=S+(C^M^L)+D[5]+4294588738&4294967295,S=C+(w<<4&4294967295|w>>>28),w=L+(S^C^M)+D[8]+2272392833&4294967295,L=S+(w<<11&4294967295|w>>>21),w=M+(L^S^C)+D[11]+1839030562&4294967295,M=L+(w<<16&4294967295|w>>>16),w=C+(M^L^S)+D[14]+4259657740&4294967295,C=M+(w<<23&4294967295|w>>>9),w=S+(C^M^L)+D[1]+2763975236&4294967295,S=C+(w<<4&4294967295|w>>>28),w=L+(S^C^M)+D[4]+1272893353&4294967295,L=S+(w<<11&4294967295|w>>>21),w=M+(L^S^C)+D[7]+4139469664&4294967295,M=L+(w<<16&4294967295|w>>>16),w=C+(M^L^S)+D[10]+3200236656&4294967295,C=M+(w<<23&4294967295|w>>>9),w=S+(C^M^L)+D[13]+681279174&4294967295,S=C+(w<<4&4294967295|w>>>28),w=L+(S^C^M)+D[0]+3936430074&4294967295,L=S+(w<<11&4294967295|w>>>21),w=M+(L^S^C)+D[3]+3572445317&4294967295,M=L+(w<<16&4294967295|w>>>16),w=C+(M^L^S)+D[6]+76029189&4294967295,C=M+(w<<23&4294967295|w>>>9),w=S+(C^M^L)+D[9]+3654602809&4294967295,S=C+(w<<4&4294967295|w>>>28),w=L+(S^C^M)+D[12]+3873151461&4294967295,L=S+(w<<11&4294967295|w>>>21),w=M+(L^S^C)+D[15]+530742520&4294967295,M=L+(w<<16&4294967295|w>>>16),w=C+(M^L^S)+D[2]+3299628645&4294967295,C=M+(w<<23&4294967295|w>>>9),w=S+(M^(C|~L))+D[0]+4096336452&4294967295,S=C+(w<<6&4294967295|w>>>26),w=L+(C^(S|~M))+D[7]+1126891415&4294967295,L=S+(w<<10&4294967295|w>>>22),w=M+(S^(L|~C))+D[14]+2878612391&4294967295,M=L+(w<<15&4294967295|w>>>17),w=C+(L^(M|~S))+D[5]+4237533241&4294967295,C=M+(w<<21&4294967295|w>>>11),w=S+(M^(C|~L))+D[12]+1700485571&4294967295,S=C+(w<<6&4294967295|w>>>26),w=L+(C^(S|~M))+D[3]+2399980690&4294967295,L=S+(w<<10&4294967295|w>>>22),w=M+(S^(L|~C))+D[10]+4293915773&4294967295,M=L+(w<<15&4294967295|w>>>17),w=C+(L^(M|~S))+D[1]+2240044497&4294967295,C=M+(w<<21&4294967295|w>>>11),w=S+(M^(C|~L))+D[8]+1873313359&4294967295,S=C+(w<<6&4294967295|w>>>26),w=L+(C^(S|~M))+D[15]+4264355552&4294967295,L=S+(w<<10&4294967295|w>>>22),w=M+(S^(L|~C))+D[6]+2734768916&4294967295,M=L+(w<<15&4294967295|w>>>17),w=C+(L^(M|~S))+D[13]+1309151649&4294967295,C=M+(w<<21&4294967295|w>>>11),w=S+(M^(C|~L))+D[4]+4149444226&4294967295,S=C+(w<<6&4294967295|w>>>26),w=L+(C^(S|~M))+D[11]+3174756917&4294967295,L=S+(w<<10&4294967295|w>>>22),w=M+(S^(L|~C))+D[2]+718787259&4294967295,M=L+(w<<15&4294967295|w>>>17),w=C+(L^(M|~S))+D[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(M+(w<<21&4294967295|w>>>11))&4294967295,k.g[2]=k.g[2]+M&4294967295,k.g[3]=k.g[3]+L&4294967295}a.prototype.u=function(k,S){S===void 0&&(S=k.length);for(var C=S-this.blockSize,D=this.B,M=this.h,L=0;L<S;){if(M==0)for(;L<=C;)l(this,k,L),L+=this.blockSize;if(typeof k=="string"){for(;L<S;)if(D[M++]=k.charCodeAt(L++),M==this.blockSize){l(this,D),M=0;break}}else for(;L<S;)if(D[M++]=k[L++],M==this.blockSize){l(this,D),M=0;break}}this.h=M,this.o+=S},a.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;var C=8*this.o;for(S=k.length-8;S<k.length;++S)k[S]=C&255,C/=256;for(this.u(k),k=Array(16),S=C=0;4>S;++S)for(var D=0;32>D;D+=8)k[C++]=this.g[S]>>>D&255;return k};function h(k,S){var C=g;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=S(k)}function d(k,S){this.h=S;for(var C=[],D=!0,M=k.length-1;0<=M;M--){var L=k[M]|0;D&&L==S||(C[M]=L,D=!1)}this.g=C}var g={};function y(k){return-128<=k&&128>k?h(k,function(S){return new d([S|0],0>S?-1:0)}):new d([k|0],0>k?-1:0)}function v(k){if(isNaN(k)||!isFinite(k))return I;if(0>k)return te(v(-k));for(var S=[],C=1,D=0;k>=C;D++)S[D]=k/C|0,C*=4294967296;return new d(S,0)}function b(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return te(b(k.substring(1),S));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=v(Math.pow(S,8)),D=I,M=0;M<k.length;M+=8){var L=Math.min(8,k.length-M),w=parseInt(k.substring(M,M+L),S);8>L?(L=v(Math.pow(S,L)),D=D.j(L).add(v(w))):(D=D.j(C),D=D.add(v(w)))}return D}var I=y(0),O=y(1),Q=y(16777216);s=d.prototype,s.m=function(){if(ie(this))return-te(this).m();for(var k=0,S=1,C=0;C<this.g.length;C++){var D=this.i(C);k+=(0<=D?D:4294967296+D)*S,S*=4294967296}return k},s.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(K(this))return"0";if(ie(this))return"-"+te(this).toString(k);for(var S=v(Math.pow(k,6)),C=this,D="";;){var M=Ee(C,S).g;C=xe(C,M.j(S));var L=((0<C.g.length?C.g[0]:C.h)>>>0).toString(k);if(C=M,K(C))return L+D;for(;6>L.length;)L="0"+L;D=L+D}},s.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function K(k){if(k.h!=0)return!1;for(var S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function ie(k){return k.h==-1}s.l=function(k){return k=xe(this,k),ie(k)?-1:K(k)?0:1};function te(k){for(var S=k.g.length,C=[],D=0;D<S;D++)C[D]=~k.g[D];return new d(C,~k.h).add(O)}s.abs=function(){return ie(this)?te(this):this},s.add=function(k){for(var S=Math.max(this.g.length,k.g.length),C=[],D=0,M=0;M<=S;M++){var L=D+(this.i(M)&65535)+(k.i(M)&65535),w=(L>>>16)+(this.i(M)>>>16)+(k.i(M)>>>16);D=w>>>16,L&=65535,w&=65535,C[M]=w<<16|L}return new d(C,C[C.length-1]&-2147483648?-1:0)};function xe(k,S){return k.add(te(S))}s.j=function(k){if(K(this)||K(k))return I;if(ie(this))return ie(k)?te(this).j(te(k)):te(te(this).j(k));if(ie(k))return te(this.j(te(k)));if(0>this.l(Q)&&0>k.l(Q))return v(this.m()*k.m());for(var S=this.g.length+k.g.length,C=[],D=0;D<2*S;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(var M=0;M<k.g.length;M++){var L=this.i(D)>>>16,w=this.i(D)&65535,It=k.i(M)>>>16,it=k.i(M)&65535;C[2*D+2*M]+=w*it,Se(C,2*D+2*M),C[2*D+2*M+1]+=L*it,Se(C,2*D+2*M+1),C[2*D+2*M+1]+=w*It,Se(C,2*D+2*M+1),C[2*D+2*M+2]+=L*It,Se(C,2*D+2*M+2)}for(D=0;D<S;D++)C[D]=C[2*D+1]<<16|C[2*D];for(D=S;D<2*S;D++)C[D]=0;return new d(C,0)};function Se(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function fe(k,S){this.g=k,this.h=S}function Ee(k,S){if(K(S))throw Error("division by zero");if(K(k))return new fe(I,I);if(ie(k))return S=Ee(te(k),S),new fe(te(S.g),te(S.h));if(ie(S))return S=Ee(k,te(S)),new fe(te(S.g),S.h);if(30<k.g.length){if(ie(k)||ie(S))throw Error("slowDivide_ only works with positive integers.");for(var C=O,D=S;0>=D.l(k);)C=de(C),D=de(D);var M=je(C,1),L=je(D,1);for(D=je(D,2),C=je(C,2);!K(D);){var w=L.add(D);0>=w.l(k)&&(M=M.add(C),L=w),D=je(D,1),C=je(C,1)}return S=xe(k,M.j(S)),new fe(M,S)}for(M=I;0<=k.l(S);){for(C=Math.max(1,Math.floor(k.m()/S.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),L=v(C),w=L.j(S);ie(w)||0<w.l(k);)C-=D,L=v(C),w=L.j(S);K(L)&&(L=O),M=M.add(L),k=xe(k,w)}return new fe(M,k)}s.A=function(k){return Ee(this,k).h},s.and=function(k){for(var S=Math.max(this.g.length,k.g.length),C=[],D=0;D<S;D++)C[D]=this.i(D)&k.i(D);return new d(C,this.h&k.h)},s.or=function(k){for(var S=Math.max(this.g.length,k.g.length),C=[],D=0;D<S;D++)C[D]=this.i(D)|k.i(D);return new d(C,this.h|k.h)},s.xor=function(k){for(var S=Math.max(this.g.length,k.g.length),C=[],D=0;D<S;D++)C[D]=this.i(D)^k.i(D);return new d(C,this.h^k.h)};function de(k){for(var S=k.g.length+1,C=[],D=0;D<S;D++)C[D]=k.i(D)<<1|k.i(D-1)>>>31;return new d(C,k.h)}function je(k,S){var C=S>>5;S%=32;for(var D=k.g.length-C,M=[],L=0;L<D;L++)M[L]=0<S?k.i(L+C)>>>S|k.i(L+C+1)<<32-S:k.i(L+C);return new d(M,k.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=v,d.fromString=b,Lp=d}).apply(typeof fv<"u"?fv:typeof self<"u"?self:typeof window<"u"?window:{});var bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var s,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,m){return u==Array.prototype||u==Object.prototype||(u[p]=m.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof bc=="object"&&bc];for(var p=0;p<u.length;++p){var m=u[p];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var a=i(this);function l(u,p){if(p)e:{var m=a;u=u.split(".");for(var T=0;T<u.length-1;T++){var U=u[T];if(!(U in m))break e;m=m[U]}u=u[u.length-1],T=m[u],p=p(T),p!=T&&p!=null&&e(m,u,{configurable:!0,writable:!0,value:p})}}function h(u,p){u instanceof String&&(u+="");var m=0,T=!1,U={next:function(){if(!T&&m<u.length){var j=m++;return{value:p(j,u[j]),done:!1}}return T=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}l("Array.prototype.values",function(u){return u||function(){return h(this,function(p,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},g=this||self;function y(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function v(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function b(u,p,m){return u.call.apply(u.bind,arguments)}function I(u,p,m){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,T),u.apply(p,U)}}return function(){return u.apply(p,arguments)}}function O(u,p,m){return O=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:I,O.apply(null,arguments)}function Q(u,p){var m=Array.prototype.slice.call(arguments,1);return function(){var T=m.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function K(u,p){function m(){}m.prototype=p.prototype,u.aa=p.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(T,U,j){for(var W=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)W[Le-2]=arguments[Le];return p.prototype[U].apply(T,W)}}function ie(u){const p=u.length;if(0<p){const m=Array(p);for(let T=0;T<p;T++)m[T]=u[T];return m}return[]}function te(u,p){for(let m=1;m<arguments.length;m++){const T=arguments[m];if(y(T)){const U=u.length||0,j=T.length||0;u.length=U+j;for(let W=0;W<j;W++)u[U+W]=T[W]}else u.push(T)}}class xe{constructor(p,m){this.i=p,this.j=m,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function Se(u){return/^[\s\xa0]*$/.test(u)}function fe(){var u=g.navigator;return u&&(u=u.userAgent)?u:""}function Ee(u){return Ee[" "](u),u}Ee[" "]=function(){};var de=fe().indexOf("Gecko")!=-1&&!(fe().toLowerCase().indexOf("webkit")!=-1&&fe().indexOf("Edge")==-1)&&!(fe().indexOf("Trident")!=-1||fe().indexOf("MSIE")!=-1)&&fe().indexOf("Edge")==-1;function je(u,p,m){for(const T in u)p.call(m,u[T],T,u)}function k(u,p){for(const m in u)p.call(void 0,u[m],m,u)}function S(u){const p={};for(const m in u)p[m]=u[m];return p}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(u,p){let m,T;for(let U=1;U<arguments.length;U++){T=arguments[U];for(m in T)u[m]=T[m];for(let j=0;j<C.length;j++)m=C[j],Object.prototype.hasOwnProperty.call(T,m)&&(u[m]=T[m])}}function M(u){var p=1;u=u.split(":");const m=[];for(;0<p&&u.length;)m.push(u.shift()),p--;return u.length&&m.push(u.join(":")),m}function L(u){g.setTimeout(()=>{throw u},0)}function w(){var u=De;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class It{constructor(){this.h=this.g=null}add(p,m){const T=it.get();T.set(p,m),this.h?this.h.next=T:this.g=T,this.h=T}}var it=new xe(()=>new V,u=>u.reset());class V{constructor(){this.next=this.g=this.h=null}set(p,m){this.h=p,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,re=!1,De=new It,R=()=>{const u=g.Promise.resolve(void 0);Z=()=>{u.then(Y)}};var Y=()=>{for(var u;u=w();){try{u.h.call(u.g)}catch(m){L(m)}var p=it;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}re=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function X(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var ae=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};g.addEventListener("test",m,p),g.removeEventListener("test",m,p)}catch{}return u}();function me(u,p){if(X.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(de){e:{try{Ee(p.nodeName);var U=!0;break e}catch{}U=!1}U||(p=null)}}else m=="mouseover"?p=u.fromElement:m=="mouseout"&&(p=u.toElement);this.relatedTarget=p,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:he[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&me.aa.h.call(this)}}K(me,X);var he={2:"touch",3:"pen",4:"mouse"};me.prototype.h=function(){me.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),Xe=0;function Fn(u,p,m,T,U){this.listener=u,this.proxy=null,this.src=p,this.type=m,this.capture=!!T,this.ha=U,this.key=++Xe,this.da=this.fa=!1}function Ji(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pi(u){this.src=u,this.g={},this.h=0}pi.prototype.add=function(u,p,m,T,U){var j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);var W=qs(u,p,T,U);return-1<W?(p=u[W],m||(p.fa=!1)):(p=new Fn(p,this.src,j,!!T,U),p.fa=m,u.push(p)),p};function Vs(u,p){var m=p.type;if(m in u.g){var T=u.g[m],U=Array.prototype.indexOf.call(T,p,void 0),j;(j=0<=U)&&Array.prototype.splice.call(T,U,1),j&&(Ji(p),u.g[m].length==0&&(delete u.g[m],u.h--))}}function qs(u,p,m,T){for(var U=0;U<u.length;++U){var j=u[U];if(!j.da&&j.listener==p&&j.capture==!!m&&j.ha==T)return U}return-1}var Gs="closure_lm_"+(1e6*Math.random()|0),ro={};function Zl(u,p,m,T,U){if(Array.isArray(p)){for(var j=0;j<p.length;j++)Zl(u,p[j],m,T,U);return null}return m=$l(m),u&&u[yt]?u.K(p,m,v(T)?!!T.capture:!1,U):pn(u,p,m,!1,T,U)}function pn(u,p,m,T,U,j){if(!p)throw Error("Invalid event type");var W=v(U)?!!U.capture:!!U,Le=Wr(u);if(Le||(u[Gs]=Le=new pi(u)),m=Le.add(p,m,T,W,j),m.proxy)return m;if(T=_h(),m.proxy=T,T.src=u,T.listener=m,u.addEventListener)ae||(U=W),U===void 0&&(U=!1),u.addEventListener(p.toString(),T,U);else if(u.attachEvent)u.attachEvent(Fs(p.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return m}function _h(){function u(m){return p.call(u.src,u.listener,m)}const p=yh;return u}function ao(u,p,m,T,U){if(Array.isArray(p))for(var j=0;j<p.length;j++)ao(u,p[j],m,T,U);else T=v(T)?!!T.capture:!!T,m=$l(m),u&&u[yt]?(u=u.i,p=String(p).toString(),p in u.g&&(j=u.g[p],m=qs(j,m,T,U),-1<m&&(Ji(j[m]),Array.prototype.splice.call(j,m,1),j.length==0&&(delete u.g[p],u.h--)))):u&&(u=Wr(u))&&(p=u.g[p.toString()],u=-1,p&&(u=qs(p,m,T,U)),(m=-1<u?p[u]:null)&&Xr(m))}function Xr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[yt])Vs(p.i,u);else{var m=u.type,T=u.proxy;p.removeEventListener?p.removeEventListener(m,T,u.capture):p.detachEvent?p.detachEvent(Fs(m),T):p.addListener&&p.removeListener&&p.removeListener(T),(m=Wr(p))?(Vs(m,u),m.h==0&&(m.src=null,p[Gs]=null)):Ji(u)}}}function Fs(u){return u in ro?ro[u]:ro[u]="on"+u}function yh(u,p){if(u.da)u=!0;else{p=new me(p,this);var m=u.listener,T=u.ha||u.src;u.fa&&Xr(u),u=m.call(T,p)}return u}function Wr(u){return u=u[Gs],u instanceof pi?u:null}var oo="__closure_events_fn_"+(1e9*Math.random()>>>0);function $l(u){return typeof u=="function"?u:(u[oo]||(u[oo]=function(p){return u.handleEvent(p)}),u[oo])}function st(){$.call(this),this.i=new pi(this),this.M=this,this.F=null}K(st,$),st.prototype[yt]=!0,st.prototype.removeEventListener=function(u,p,m,T){ao(this,u,p,m,T)};function Pe(u,p){var m,T=u.F;if(T)for(m=[];T;T=T.F)m.push(T);if(u=u.M,T=p.type||p,typeof p=="string")p=new X(p,u);else if(p instanceof X)p.target=p.target||u;else{var U=p;p=new X(T,u),D(p,U)}if(U=!0,m)for(var j=m.length-1;0<=j;j--){var W=p.g=m[j];U=tn(W,T,!0,p)&&U}if(W=p.g=u,U=tn(W,T,!0,p)&&U,U=tn(W,T,!1,p)&&U,m)for(j=0;j<m.length;j++)W=p.g=m[j],U=tn(W,T,!1,p)&&U}st.prototype.N=function(){if(st.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var m=u.g[p],T=0;T<m.length;T++)Ji(m[T]);delete u.g[p],u.h--}}this.F=null},st.prototype.K=function(u,p,m,T){return this.i.add(String(u),p,!1,m,T)},st.prototype.L=function(u,p,m,T){return this.i.add(String(u),p,!0,m,T)};function tn(u,p,m,T){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var U=!0,j=0;j<p.length;++j){var W=p[j];if(W&&!W.da&&W.capture==m){var Le=W.listener,et=W.ha||W.src;W.fa&&Vs(u.i,W),U=Le.call(et,T)!==!1&&U}}return U&&!T.defaultPrevented}function xt(u,p,m){if(typeof u=="function")m&&(u=O(u,m));else if(u&&typeof u.handleEvent=="function")u=O(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:g.setTimeout(u,p||0)}function Jl(u){u.g=xt(()=>{u.g=null,u.i&&(u.i=!1,Jl(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class vh extends ${constructor(p,m){super(),this.m=p,this.l=m,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Jl(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ys(u){$.call(this),this.h=u,this.g={}}K(Ys,$);var Ks=[];function Xs(u){je(u.g,function(p,m){this.g.hasOwnProperty(m)&&Xr(p)},u),u.g={}}Ys.prototype.N=function(){Ys.aa.N.call(this),Xs(this)},Ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dn=g.JSON.stringify,Qr=g.JSON.parse,Ws=class{stringify(u){return g.JSON.stringify(u,void 0)}parse(u){return g.JSON.parse(u,void 0)}};function lo(){}lo.prototype.h=null;function uo(u){return u.h||(u.h=u.i())}function eu(){}var gi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mi(){X.call(this,"d")}K(mi,X);function co(){X.call(this,"c")}K(co,X);var _i={},ho=null;function Qs(){return ho=ho||new st}_i.La="serverreachability";function Zr(u){X.call(this,_i.La,u)}K(Zr,X);function es(u){const p=Qs();Pe(p,new Zr(p))}_i.STAT_EVENT="statevent";function tu(u,p){X.call(this,_i.STAT_EVENT,u),this.stat=p}K(tu,X);function Je(u){const p=Qs();Pe(p,new tu(p,u))}_i.Ma="timingevent";function gt(u,p){X.call(this,_i.Ma,u),this.size=p}K(gt,X);function ct(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){u()},p)}function gn(){this.g=!0}gn.prototype.xa=function(){this.g=!1};function fo(u,p,m,T,U,j){u.info(function(){if(u.g)if(j)for(var W="",Le=j.split("&"),et=0;et<Le.length;et++){var be=Le[et].split("=");if(1<be.length){var Et=be[0];be=be[1];var Tt=Et.split("_");W=2<=Tt.length&&Tt[1]=="type"?W+(Et+"="+be+"&"):W+(Et+"=redacted&")}}else W=null;else W=j;return"XMLHTTP REQ ("+T+") [attempt "+U+"]: "+p+`
`+m+`
`+W})}function Eh(u,p,m,T,U,j,W){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+U+"]: "+p+`
`+m+`
`+j+" "+W})}function ts(u,p,m,T){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Zs(u,m)+(T?" "+T:"")})}function nu(u,p){u.info(function(){return"TIMEOUT: "+p})}gn.prototype.info=function(){};function Zs(u,p){if(!u.g)return p;if(!p)return null;try{var m=JSON.parse(p);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var T=m[u];if(!(2>T.length)){var U=T[1];if(Array.isArray(U)&&!(1>U.length)){var j=U[0];if(j!="noop"&&j!="stop"&&j!="close")for(var W=1;W<U.length;W++)U[W]=""}}}}return Dn(m)}catch{return p}}var $s={NO_ERROR:0,TIMEOUT:8},ns={},Yn;function Kn(){}K(Kn,lo),Kn.prototype.g=function(){return new XMLHttpRequest},Kn.prototype.i=function(){return{}},Yn=new Kn;function jt(u,p,m,T){this.j=u,this.i=p,this.l=m,this.R=T||1,this.U=new Ys(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ot}function ot(){this.i=null,this.g="",this.h=!1}var po={},$r={};function Mn(u,p,m){u.L=1,u.v=ir(nn(p)),u.m=m,u.P=!0,yi(u,null)}function yi(u,p){u.F=Date.now(),Js(u),u.A=nn(u.v);var m=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Eo(m.i,"t",T),u.C=0,m=u.j.J,u.h=new ot,u.g=yu(u.j,m?p:null,!u.m),0<u.O&&(u.M=new vh(O(u.Y,u,u.g),u.O)),p=u.U,m=u.g,T=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(Ks[0]=U.toString()),U=Ks);for(var j=0;j<U.length;j++){var W=Zl(m,U[j],T||p.handleEvent,!1,p.h||p);if(!W)break;p.g[W.key]=W}p=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),es(),fo(u.i,u.u,u.A,u.l,u.R,u.m)}jt.prototype.ca=function(u){u=u.target;const p=this.M;p&&vn(u)==3?p.j():this.Y(u)},jt.prototype.Y=function(u){try{if(u==this.g)e:{const Tt=vn(this.g);var p=this.g.Ba();const Ci=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||cu(this.g)))){this.J||Tt!=4||p==7||(p==8||0>=Ci?es(3):es(2)),is(this);var m=this.g.Z();this.X=m;t:if(iu(this)){var T=cu(this.g);u="";var U=T.length,j=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nt(this),Xn(this);var W="";break t}this.h.i=new g.TextDecoder}for(p=0;p<U;p++)this.h.h=!0,u+=this.h.i.decode(T[p],{stream:!(j&&p==U-1)});T.length=0,this.h.g+=u,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=m==200,Eh(this.i,this.u,this.A,this.l,this.R,Tt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,et=this.g;if((Le=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Se(Le)){var be=Le;break t}}be=null}if(m=be)ts(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,er(this,m);else{this.o=!1,this.s=3,Je(12),Nt(this),Xn(this);break e}}if(this.P){m=!0;let Kt;for(;!this.J&&this.C<W.length;)if(Kt=su(this,W),Kt==$r){Tt==4&&(this.s=4,Je(14),m=!1),ts(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==po){this.s=4,Je(15),ts(this.i,this.l,W,"[Invalid Chunk]"),m=!1;break}else ts(this.i,this.l,Kt,null),er(this,Kt);if(iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||W.length!=0||this.h.h||(this.s=1,Je(16),m=!1),this.o=this.o&&m,!m)ts(this.i,this.l,W,"[Invalid Chunked Response]"),Nt(this),Xn(this);else if(0<W.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),hr(Et),Et.M=!0,Je(11))}}else ts(this.i,this.l,W,null),er(this,W);Tt==4&&Nt(this),this.o&&!this.J&&(Tt==4?gu(this.j,this):(this.o=!1,Js(this)))}else wh(this.g),m==400&&0<W.indexOf("Unknown SID")?(this.s=3,Je(12)):(this.s=0,Je(13)),Nt(this),Xn(this)}}}catch{}finally{}};function iu(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function su(u,p){var m=u.C,T=p.indexOf(`
`,m);return T==-1?$r:(m=Number(p.substring(m,T)),isNaN(m)?po:(T+=1,T+m>p.length?$r:(p=p.slice(T,T+m),u.C=T+m,p)))}jt.prototype.cancel=function(){this.J=!0,Nt(this)};function Js(u){u.S=Date.now()+u.I,ru(u,u.I)}function ru(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=ct(O(u.ba,u),p)}function is(u){u.B&&(g.clearTimeout(u.B),u.B=null)}jt.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(nu(this.i,this.A),this.L!=2&&(es(),Je(17)),Nt(this),this.s=2,Xn(this)):ru(this,this.S-u)};function Xn(u){u.j.G==0||u.J||gu(u.j,u)}function Nt(u){is(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Xs(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function er(u,p){try{var m=u.j;if(m.G!=0&&(m.g==u||go(m.h,u))){if(!u.K&&go(m.h,u)&&m.G==3){try{var T=m.Da.g.parse(p)}catch{T=null}if(Array.isArray(T)&&T.length==3){var U=T;if(U[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)ca(m),la(m);else break e;wo(m),Je(18)}}else m.za=U[1],0<m.za-m.T&&37500>U[2]&&m.F&&m.v==0&&!m.C&&(m.C=ct(O(m.Za,m),6e3));if(1>=ea(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else wi(m,11)}else if((u.K||m.g==u)&&ca(m),!Se(p))for(U=m.Da.g.parse(p),p=0;p<U.length;p++){let be=U[p];if(m.T=be[0],be=be[1],m.G==2)if(be[0]=="c"){m.K=be[1],m.ia=be[2];const Et=be[3];Et!=null&&(m.la=Et,m.j.info("VER="+m.la));const Tt=be[4];Tt!=null&&(m.Aa=Tt,m.j.info("SVER="+m.Aa));const Ci=be[5];Ci!=null&&typeof Ci=="number"&&0<Ci&&(T=1.5*Ci,m.L=T,m.j.info("backChannelRequestTimeoutMs_="+T)),T=m;const Kt=u.g;if(Kt){const ei=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ei){var j=T.h;j.g||ei.indexOf("spdy")==-1&&ei.indexOf("quic")==-1&&ei.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(ta(j,j.h),j.h=null))}if(T.D){const Ri=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ri&&(T.ya=Ri,Ve(T.I,T.D,Ri))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),T=m;var W=u;if(T.qa=_u(T,T.J?T.ia:null,T.W),W.K){Vt(T.h,W);var Le=W,et=T.L;et&&(Le.I=et),Le.B&&(is(Le),Js(Le)),T.g=W}else du(T);0<m.i.length&&ua(m)}else be[0]!="stop"&&be[0]!="close"||wi(m,7);else m.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?wi(m,7):bo(m):be[0]!="noop"&&m.l&&m.l.ta(be),m.v=0)}}es(4)}catch{}}var au=class{constructor(u,p){this.g=u,this.map=p}};function vi(u){this.l=u||10,g.PerformanceNavigationTiming?(u=g.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jr(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function ea(u){return u.h?1:u.g?u.g.size:0}function go(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function ta(u,p){u.g?u.g.add(p):u.h=p}function Vt(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}vi.prototype.cancel=function(){if(this.i=mo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function mo(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const m of u.g.values())p=p.concat(m.D);return p}return ie(u.i)}function Th(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(y(u)){for(var p=[],m=u.length,T=0;T<m;T++)p.push(u[T]);return p}p=[],m=0;for(T in u)p[m++]=u[T];return p}function na(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(y(u)||typeof u=="string"){var p=[];u=u.length;for(var m=0;m<u;m++)p.push(m);return p}p=[],m=0;for(const T in u)p[m++]=T;return p}}}function _o(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(y(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var m=na(u),T=Th(u),U=T.length,j=0;j<U;j++)p.call(void 0,T[j],m&&m[j],u)}var tr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sh(u,p){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var T=u[m].indexOf("="),U=null;if(0<=T){var j=u[m].substring(0,T);U=u[m].substring(T+1)}else j=u[m];p(j,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function ht(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ht){this.h=u.h,nr(this,u.j),this.o=u.o,this.g=u.g,ss(this,u.s),this.l=u.l;var p=u.i,m=new Ti;m.i=p.i,p.g&&(m.g=new Map(p.g),m.h=p.h),Ei(this,m),this.m=u.m}else u&&(p=String(u).match(tr))?(this.h=!1,nr(this,p[1]||"",!0),this.o=mn(p[2]||""),this.g=mn(p[3]||"",!0),ss(this,p[4]),this.l=mn(p[5]||"",!0),Ei(this,p[6]||"",!0),this.m=mn(p[7]||"")):(this.h=!1,this.i=new Ti(null,this.h))}ht.prototype.toString=function(){var u=[],p=this.j;p&&u.push(sr(p,yo,!0),":");var m=this.g;return(m||p=="file")&&(u.push("//"),(p=this.o)&&u.push(sr(p,yo,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(sr(m,m.charAt(0)=="/"?bh:vo,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",sr(m,ia)),u.join("")};function nn(u){return new ht(u)}function nr(u,p,m){u.j=m?mn(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function ss(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Ei(u,p,m){p instanceof Ti?(u.i=p,lu(u.i,u.h)):(m||(p=sr(p,Ah)),u.i=new Ti(p,u.h))}function Ve(u,p,m){u.i.set(p,m)}function ir(u){return Ve(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function mn(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function sr(u,p,m){return typeof u=="string"?(u=encodeURI(u).replace(p,ou),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ou(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var yo=/[#\/\?@]/g,vo=/[#\?:]/g,bh=/[#\?]/g,Ah=/[#\?@]/g,ia=/#/g;function Ti(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function _n(u){u.g||(u.g=new Map,u.h=0,u.i&&Sh(u.i,function(p,m){u.add(decodeURIComponent(p.replace(/\+/g," ")),m)}))}s=Ti.prototype,s.add=function(u,p){_n(this),this.i=null,u=Wn(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(p),this.h+=1,this};function Si(u,p){_n(u),p=Wn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function bi(u,p){return _n(u),p=Wn(u,p),u.g.has(p)}s.forEach=function(u,p){_n(this),this.g.forEach(function(m,T){m.forEach(function(U){u.call(p,U,T,this)},this)},this)},s.na=function(){_n(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),m=[];for(let T=0;T<p.length;T++){const U=u[T];for(let j=0;j<U.length;j++)m.push(p[T])}return m},s.V=function(u){_n(this);let p=[];if(typeof u=="string")bi(this,u)&&(p=p.concat(this.g.get(Wn(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)p=p.concat(u[m])}return p},s.set=function(u,p){return _n(this),this.i=null,u=Wn(this,u),bi(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},s.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Eo(u,p,m){Si(u,p),0<m.length&&(u.i=null,u.g.set(Wn(u,p),ie(m)),u.h+=m.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var m=0;m<p.length;m++){var T=p[m];const j=encodeURIComponent(String(T)),W=this.V(T);for(T=0;T<W.length;T++){var U=j;W[T]!==""&&(U+="="+encodeURIComponent(String(W[T]))),u.push(U)}}return this.i=u.join("&")};function Wn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function lu(u,p){p&&!u.j&&(_n(u),u.i=null,u.g.forEach(function(m,T){var U=T.toLowerCase();T!=U&&(Si(this,T),Eo(this,U,m))},u)),u.j=p}function rr(u,p){const m=new gn;if(g.Image){const T=new Image;T.onload=Q(yn,m,"TestLoadImage: loaded",!0,p,T),T.onerror=Q(yn,m,"TestLoadImage: error",!1,p,T),T.onabort=Q(yn,m,"TestLoadImage: abort",!1,p,T),T.ontimeout=Q(yn,m,"TestLoadImage: timeout",!1,p,T),g.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else p(!1)}function kn(u,p){const m=new gn,T=new AbortController,U=setTimeout(()=>{T.abort(),yn(m,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:T.signal}).then(j=>{clearTimeout(U),j.ok?yn(m,"TestPingServer: ok",!0,p):yn(m,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(U),yn(m,"TestPingServer: error",!1,p)})}function yn(u,p,m,T,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),T(m)}catch{}}function ar(){this.g=new Ws}function Qn(u,p,m){const T=m||"";try{_o(u,function(U,j){let W=U;v(U)&&(W=Dn(U)),p.push(T+j+"="+encodeURIComponent(W))})}catch(U){throw p.push(T+"type="+encodeURIComponent("_badmap")),U}}function rs(u){this.l=u.Ub||null,this.j=u.eb||!1}K(rs,lo),rs.prototype.g=function(){return new Ai(this.l,this.j)},rs.prototype.i=function(u){return function(){return u}}({});function Ai(u,p){st.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K(Ai,st),s=Ai.prototype,s.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,$n(this)},s.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||g).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zn(this)),this.readyState=0},s.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,$n(this)),this.g&&(this.readyState=3,$n(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;To(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function To(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}s.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Zn(this):$n(this),this.readyState==3&&To(this)}},s.Ra=function(u){this.g&&(this.response=this.responseText=u,Zn(this))},s.Qa=function(u){this.g&&(this.response=u,Zn(this))},s.ga=function(){this.g&&Zn(this)};function Zn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,$n(u)}s.setRequestHeader=function(u,p){this.u.append(u,p)},s.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var m=p.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=p.next();return u.join(`\r
`)};function $n(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function So(u){let p="";return je(u,function(m,T){p+=T,p+=":",p+=m,p+=`\r
`}),p}function vt(u,p,m){e:{for(T in m){var T=!1;break e}T=!0}T||(m=So(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):Ve(u,p,m))}function ze(u){st.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K(ze,st);var sa=/^https?$/i,or=["POST","PUT"];s=ze.prototype,s.Ha=function(u){this.J=u},s.ea=function(u,p,m,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yn.g(),this.v=this.o?uo(this.o):uo(Yn),this.g.onreadystatechange=O(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(j){uu(this,j);return}if(u=m||"",m=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var U in T)m.set(U,T[U]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const j of T.keys())m.set(j,T.get(j));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(m.keys()).find(j=>j.toLowerCase()=="content-type"),U=g.FormData&&u instanceof g.FormData,!(0<=Array.prototype.indexOf.call(or,p,void 0))||T||U||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,W]of m)this.g.setRequestHeader(j,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lr(this),this.u=!0,this.g.send(u),this.u=!1}catch(j){uu(this,j)}};function uu(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,ra(u),Jn(u)}function ra(u){u.A||(u.A=!0,Pe(u,"complete"),Pe(u,"error"))}s.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Pe(this,"complete"),Pe(this,"abort"),Jn(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jn(this,!0)),ze.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?aa(this):this.bb())},s.bb=function(){aa(this)};function aa(u){if(u.h&&typeof d<"u"&&(!u.v[1]||vn(u)!=4||u.Z()!=2)){if(u.u&&vn(u)==4)xt(u.Ea,0,u);else if(Pe(u,"readystatechange"),vn(u)==4){u.h=!1;try{const W=u.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var m;if(!(m=p)){var T;if(T=W===0){var U=String(u.D).match(tr)[1]||null;!U&&g.self&&g.self.location&&(U=g.self.location.protocol.slice(0,-1)),T=!sa.test(U?U.toLowerCase():"")}m=T}if(m)Pe(u,"complete"),Pe(u,"success");else{u.m=6;try{var j=2<vn(u)?u.g.statusText:""}catch{j=""}u.l=j+" ["+u.Z()+"]",ra(u)}}finally{Jn(u)}}}}function Jn(u,p){if(u.g){lr(u);const m=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||Pe(u,"ready");try{m.onreadystatechange=T}catch{}}}function lr(u){u.I&&(g.clearTimeout(u.I),u.I=null)}s.isActive=function(){return!!this.g};function vn(u){return u.g?u.g.readyState:0}s.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Qr(p)}};function cu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function wh(u){const p={};u=(u.g&&2<=vn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(Se(u[T]))continue;var m=M(u[T]);const U=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const j=p[U]||[];p[U]=j,j.push(m)}k(p,function(T){return T.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ur(u,p,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||p}function oa(u){this.Aa=0,this.i=[],this.j=new gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ur("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ur("baseRetryDelayMs",5e3,u),this.cb=ur("retryDelaySeedMs",1e4,u),this.Wa=ur("forwardChannelMaxRetries",2,u),this.wa=ur("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new vi(u&&u.concurrentRequestLimit),this.Da=new ar,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=oa.prototype,s.la=8,s.G=1,s.connect=function(u,p,m,T){Je(0),this.W=u,this.H=p||{},m&&T!==void 0&&(this.H.OSID=m,this.H.OAID=T),this.F=this.X,this.I=_u(this,null,this.W),ua(this)};function bo(u){if(hu(u),u.G==3){var p=u.U++,m=nn(u.I);if(Ve(m,"SID",u.K),Ve(m,"RID",p),Ve(m,"TYPE","terminate"),cr(u,m),p=new jt(u,u.j,p),p.L=2,p.v=ir(nn(m)),m=!1,g.navigator&&g.navigator.sendBeacon)try{m=g.navigator.sendBeacon(p.v.toString(),"")}catch{}!m&&g.Image&&(new Image().src=p.v,m=!0),m||(p.g=yu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Js(p)}mu(u)}function la(u){u.g&&(hr(u),u.g.cancel(),u.g=null)}function hu(u){la(u),u.u&&(g.clearTimeout(u.u),u.u=null),ca(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&g.clearTimeout(u.s),u.s=null)}function ua(u){if(!Jr(u.h)&&!u.s){u.s=!0;var p=u.Ga;Z||R(),re||(Z(),re=!0),De.add(p,u),u.B=0}}function Ch(u,p){return ea(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=ct(O(u.Ga,u,p),Co(u,u.B)),u.B++,!0)}s.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new jt(this,this.j,u);let j=this.o;if(this.S&&(j?(j=S(j),D(j,this.S)):j=this.S),this.m!==null||this.O||(U.H=j,j=null),this.P)e:{for(var p=0,m=0;m<this.i.length;m++){t:{var T=this.i[m];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(p+=T,4096<p){p=m;break e}if(p===4096||m===this.i.length-1){p=m+1;break e}}p=1e3}else p=1e3;p=fu(this,U,p),m=nn(this.I),Ve(m,"RID",u),Ve(m,"CVER",22),this.D&&Ve(m,"X-HTTP-Session-Id",this.D),cr(this,m),j&&(this.O?p="headers="+encodeURIComponent(String(So(j)))+"&"+p:this.m&&vt(m,this.m,j)),ta(this.h,U),this.Ua&&Ve(m,"TYPE","init"),this.P?(Ve(m,"$req",p),Ve(m,"SID","null"),U.T=!0,Mn(U,m,null)):Mn(U,m,p),this.G=2}}else this.G==3&&(u?Ao(this,u):this.i.length==0||Jr(this.h)||Ao(this))};function Ao(u,p){var m;p?m=p.l:m=u.U++;const T=nn(u.I);Ve(T,"SID",u.K),Ve(T,"RID",m),Ve(T,"AID",u.T),cr(u,T),u.m&&u.o&&vt(T,u.m,u.o),m=new jt(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),p&&(u.i=p.D.concat(u.i)),p=fu(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ta(u.h,m),Mn(m,T,p)}function cr(u,p){u.H&&je(u.H,function(m,T){Ve(p,T,m)}),u.l&&_o({},function(m,T){Ve(p,T,m)})}function fu(u,p,m){m=Math.min(u.i.length,m);var T=u.l?O(u.l.Na,u.l,u):null;e:{var U=u.i;let j=-1;for(;;){const W=["count="+m];j==-1?0<m?(j=U[0].g,W.push("ofs="+j)):j=0:W.push("ofs="+j);let Le=!0;for(let et=0;et<m;et++){let be=U[et].g;const Et=U[et].map;if(be-=j,0>be)j=Math.max(0,U[et].g-100),Le=!1;else try{Qn(Et,W,"req"+be+"_")}catch{T&&T(Et)}}if(Le){T=W.join("&");break e}}}return u=u.i.splice(0,m),p.D=u,T}function du(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Z||R(),re||(Z(),re=!0),De.add(p,u),u.v=0}}function wo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=ct(O(u.Fa,u),Co(u,u.v)),u.v++,!0)}s.Fa=function(){if(this.u=null,pu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=ct(O(this.ab,this),u)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Je(10),la(this),pu(this))};function hr(u){u.A!=null&&(g.clearTimeout(u.A),u.A=null)}function pu(u){u.g=new jt(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=nn(u.qa);Ve(p,"RID","rpc"),Ve(p,"SID",u.K),Ve(p,"AID",u.T),Ve(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ve(p,"TO",u.ja),Ve(p,"TYPE","xmlhttp"),cr(u,p),u.m&&u.o&&vt(p,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=ir(nn(p)),m.m=null,m.P=!0,yi(m,u)}s.Za=function(){this.C!=null&&(this.C=null,la(this),wo(this),Je(19))};function ca(u){u.C!=null&&(g.clearTimeout(u.C),u.C=null)}function gu(u,p){var m=null;if(u.g==p){ca(u),hr(u),u.g=null;var T=2}else if(go(u.h,p))m=p.D,Vt(u.h,p),T=1;else return;if(u.G!=0){if(p.o)if(T==1){m=p.m?p.m.length:0,p=Date.now()-p.F;var U=u.B;T=Qs(),Pe(T,new gt(T,m)),ua(u)}else du(u);else if(U=p.s,U==3||U==0&&0<p.X||!(T==1&&Ch(u,p)||T==2&&wo(u)))switch(m&&0<m.length&&(p=u.h,p.i=p.i.concat(m)),U){case 1:wi(u,5);break;case 4:wi(u,10);break;case 3:wi(u,6);break;default:wi(u,2)}}}function Co(u,p){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*p}function wi(u,p){if(u.j.info("Error code "+p),p==2){var m=O(u.fb,u),T=u.Xa;const U=!T;T=new ht(T||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||nr(T,"https"),ir(T),U?rr(T.toString(),m):kn(T.toString(),m)}else Je(2);u.G=0,u.l&&u.l.sa(p),mu(u),hu(u)}s.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function mu(u){if(u.G=0,u.ka=[],u.l){const p=mo(u.h);(p.length!=0||u.i.length!=0)&&(te(u.ka,p),te(u.ka,u.i),u.h.i.length=0,ie(u.i),u.i.length=0),u.l.ra()}}function _u(u,p,m){var T=m instanceof ht?nn(m):new ht(m);if(T.g!="")p&&(T.g=p+"."+T.g),ss(T,T.s);else{var U=g.location;T=U.protocol,p=p?p+"."+U.hostname:U.hostname,U=+U.port;var j=new ht(null);T&&nr(j,T),p&&(j.g=p),U&&ss(j,U),m&&(j.l=m),T=j}return m=u.D,p=u.ya,m&&p&&Ve(T,m,p),Ve(T,"VER",u.la),cr(u,T),T}function yu(u,p,m){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new ze(new rs({eb:m})):new ze(u.pa),p.Ha(u.J),p}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function vu(){}s=vu.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function Yt(u,p){st.call(this),this.g=new oa(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!Se(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!Se(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new as(this)}K(Yt,st),Yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Yt.prototype.close=function(){bo(this.g)},Yt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=Dn(u),u=m);p.i.push(new au(p.Ya++,u)),p.G==3&&ua(p)},Yt.prototype.N=function(){this.g.l=null,delete this.j,bo(this.g),delete this.g,Yt.aa.N.call(this)};function Eu(u){mi.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const m in p){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}K(Eu,mi);function Tu(){co.call(this),this.status=1}K(Tu,co);function as(u){this.g=u}K(as,vu),as.prototype.ua=function(){Pe(this.g,"a")},as.prototype.ta=function(u){Pe(this.g,new Eu(u))},as.prototype.sa=function(u){Pe(this.g,new Tu)},as.prototype.ra=function(){Pe(this.g,"b")},Yt.prototype.send=Yt.prototype.o,Yt.prototype.open=Yt.prototype.m,Yt.prototype.close=Yt.prototype.close,$s.NO_ERROR=0,$s.TIMEOUT=8,$s.HTTP_ERROR=6,ns.COMPLETE="complete",eu.EventType=gi,gi.OPEN="a",gi.CLOSE="b",gi.ERROR="c",gi.MESSAGE="d",st.prototype.listen=st.prototype.K,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha}).apply(typeof bc<"u"?bc:typeof self<"u"?self:typeof window<"u"?window:{});const dv="@firebase/firestore",pv="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Gt.UNAUTHENTICATED=new Gt(null),Gt.GOOGLE_CREDENTIALS=new Gt("google-credentials-uid"),Gt.FIRST_PARTY=new Gt("first-party-uid"),Gt.MOCK_USER=new Gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new Pl("@firebase/firestore");function Bn(s,...e){if(Qa.logLevel<=ke.DEBUG){const i=e.map(Up);Qa.debug(`Firestore (${ql}): ${s}`,...i)}}function UE(s,...e){if(Qa.logLevel<=ke.ERROR){const i=e.map(Up);Qa.error(`Firestore (${ql}): ${s}`,...i)}}function l2(s,...e){if(Qa.logLevel<=ke.WARN){const i=e.map(Up);Qa.warn(`Firestore (${ql}): ${s}`,...i)}}function Up(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(i){return JSON.stringify(i)}(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(s,e,i){let a="Unexpected state";typeof e=="string"?a=e:i=e,PE(s,a,i)}function PE(s,e,i){let a=`FIRESTORE (${ql}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw UE(a),new Error(a)}function bl(s,e,i,a){let l="Unexpected state";typeof i=="string"?l=i:a=i,s||PE(e,l,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Ne extends On{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class u2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(Gt.UNAUTHENTICATED))}shutdown(){}}class c2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class h2{constructor(e){this.t=e,this.currentUser=Gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){bl(this.o===void 0,42304);let a=this.i;const l=y=>this.i!==a?(a=this.i,i(y)):Promise.resolve();let h=new Al;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new Al,e.enqueueRetryable(()=>l(this.currentUser))};const d=()=>{const y=h;e.enqueueRetryable(async()=>{await y.promise,await l(this.currentUser)})},g=y=>{Bn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(y=>g(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?g(y):(Bn("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new Al)}},0),d()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(a=>this.i!==e?(Bn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(bl(typeof a.accessToken=="string",31837,{l:a}),new zE(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return bl(e===null||typeof e=="string",2055,{h:e}),new Gt(e)}}class f2{constructor(e,i,a){this.P=e,this.T=i,this.I=a,this.type="FirstParty",this.user=Gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class d2{constructor(e,i,a){this.P=e,this.T=i,this.I=a}getToken(){return Promise.resolve(new f2(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable(()=>i(Gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class p2{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){bl(this.o===void 0,3512);const a=h=>{h.error!=null&&Bn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const d=h.token!==this.m;return this.m=h.token,Bn("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(h.token):Promise.resolve()};this.o=h=>{e.enqueueRetryable(()=>a(h))};const l=h=>{Bn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(h=>l(h)),setTimeout(()=>{if(!this.appCheck){const h=this.V.getImmediate({optional:!0});h?l(h):Bn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new gv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(bl(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new gv(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let a=0;a<s;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=g2(40);for(let h=0;h<l.length;++h)a.length<20&&l[h]<i&&(a+=e.charAt(l[h]%62))}return a}}function Us(s,e){return s<e?-1:s>e?1:0}function _2(s,e){const i=Math.min(s.length,e.length);for(let a=0;a<i;a++){const l=s.charAt(a),h=e.charAt(a);if(l!==h)return xd(l)===xd(h)?Us(l,h):xd(l)?1:-1}return Us(s.length,e.length)}const y2=55296,v2=57343;function xd(s){const e=s.charCodeAt(0);return e>=y2&&e<=v2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="__name__";class ai{constructor(e,i,a){i===void 0?i=0:i>e.length&&xl(637,{offset:i,range:e.length}),a===void 0?a=e.length-i:a>e.length-i&&xl(1746,{length:a,range:e.length-i}),this.segments=e,this.offset=i,this.len=a}get length(){return this.len}isEqual(e){return ai.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof ai?e.forEach(a=>{i.push(a)}):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,a=this.limit();i<a;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const a=Math.min(e.length,i.length);for(let l=0;l<a;l++){const h=ai.compareSegments(e.get(l),i.get(l));if(h!==0)return h}return Us(e.length,i.length)}static compareSegments(e,i){const a=ai.isNumericId(e),l=ai.isNumericId(i);return a&&!l?-1:!a&&l?1:a&&l?ai.extractNumericId(e).compare(ai.extractNumericId(i)):_2(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Lp.fromString(e.substring(4,e.length-2))}}class Pn extends ai{construct(e,i,a){return new Pn(e,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const a of e){if(a.indexOf("//")>=0)throw new Ne(Ie.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter(l=>l.length>0))}return new Pn(i)}static emptyPath(){return new Pn([])}}const E2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nr extends ai{construct(e,i,a){return new Nr(e,i,a)}static isValidIdentifier(e){return E2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nr.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mv}static keyField(){return new Nr([mv])}static fromServerFormat(e){const i=[];let a="",l=0;const h=()=>{if(a.length===0)throw new Ne(Ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;l<e.length;){const g=e[l];if(g==="\\"){if(l+1===e.length)throw new Ne(Ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[l+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new Ne(Ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=y,l+=2}else g==="`"?(d=!d,l++):g!=="."||d?(a+=g,l++):(h(),l++)}if(h(),d)throw new Ne(Ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nr(i)}static emptyPath(){return new Nr([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.path=e}static fromPath(e){return new Dr(Pn.fromString(e))}static fromName(e){return new Dr(Pn.fromString(e).popFirst(5))}static empty(){return new Dr(Pn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pn.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return Pn.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Dr(new Pn(e.slice()))}}function T2(s,e,i,a){if(e===!0&&a===!0)throw new Ne(Ie.INVALID_ARGUMENT,`${s} and ${i} cannot be used together.`)}function S2(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function b2(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":xl(12329,{type:typeof s})}function A2(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new Ne(Ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=b2(s);throw new Ne(Ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(s,e){const i={typeString:s};return e&&(i.value=e),i}function Gl(s,e){if(!S2(s))throw new Ne(Ie.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in e)if(e[a]){const l=e[a].typeString,h="value"in e[a]?{value:e[a].value}:void 0;if(!(a in s)){i=`JSON missing required field: '${a}'`;break}const d=s[a];if(l&&typeof d!==l){i=`JSON field '${a}' must be a ${l}.`;break}if(h!==void 0&&d!==h.value){i=`Expected '${a}' field to equal '${h.value}'`;break}}if(i)throw new Ne(Ie.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=-62135596800,yv=1e6;class oi{static now(){return oi.fromMillis(Date.now())}static fromDate(e){return oi.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),a=Math.floor((e-1e3*i)*yv);return new oi(i,a)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new Ne(Ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new Ne(Ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<_v)throw new Ne(Ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ne(Ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yv}_compareTo(e){return this.seconds===e.seconds?Us(this.nanoseconds,e.nanoseconds):Us(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:oi._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Gl(e,oi._jsonSchema))return new oi(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_v;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}oi._jsonSchemaVersion="firestore/timestamp/1.0",oi._jsonSchema={type:pt("string",oi._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};function w2(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.binaryString=e}static fromBase64String(e){const i=function(l){try{return atob(l)}catch(h){throw typeof DOMException<"u"&&h instanceof DOMException?new C2("Invalid base64 string: "+h):h}}(e);return new Br(i)}static fromUint8Array(e){const i=function(l){let h="";for(let d=0;d<l.length;++d)h+=String.fromCharCode(l[d]);return h}(e);return new Br(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Us(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Br.EMPTY_BYTE_STRING=new Br("");const tp="(default)";class Kc{constructor(e,i){this.projectId=e,this.database=i||tp}static empty(){return new Kc("","")}get isDefaultDatabase(){return this.database===tp}isEqual(e){return e instanceof Kc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,i=null,a=[],l=[],h=null,d="F",g=null,y=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=l,this.limit=h,this.limitType=d,this.startAt=g,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function I2(s){return new R2(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vv,we;(we=vv||(vv={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Lp([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=1048576;function Ld(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e,i,a=1e3,l=1.5,h=6e4){this.Mi=e,this.timerId=i,this.d_=a,this.A_=l,this.R_=h,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),l=Math.max(0,i-a);l>0&&Bn("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,i,a,l,h){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=a,this.op=l,this.removalCallback=h,this.deferred=new Al,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,a,l,h){const d=Date.now()+a,g=new Pp(e,i,d,l,h);return g.start(a),g}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ne(Ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ev,Tv;(Tv=Ev||(Ev={})).Ma="default",Tv.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M2(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="firestore.googleapis.com",bv=!0;class Av{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Ne(Ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=HE,this.ssl=bv}else this.host=e.host,this.ssl=e.ssl??bv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=N2;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<O2)throw new Ne(Ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}T2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=M2(e.experimentalLongPollingOptions??{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new Ne(Ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new Ne(Ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new Ne(Ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,l){return a.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class BE{constructor(e,i,a,l){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Av({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ne(Ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ne(Ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Av(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new u2;switch(a.type){case"firstParty":return new d2(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new Ne(Ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const a=Sv.get(i);a&&(Bn("ComponentProvider","Removing Datastore"),Sv.delete(i),a.terminate())}(this),Promise.resolve()}}function k2(s,e,i,a={}){s=A2(s,BE);const l=zs(e),h=s._getSettings(),d={...h,emulatorOptions:s._getEmulatorOptions()},g=`${e}:${i}`;l&&(sh(`https://${g}`),rh("Firestore",!0)),h.host!==HE&&h.host!==g&&l2("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...h,host:g,ssl:l,emulatorOptions:a};if(!Ki(y,d)&&(s._setSettings(y),a.mockUserToken)){let v,b;if(typeof a.mockUserToken=="string")v=a.mockUserToken,b=Gt.MOCK_USER;else{v=vp(a.mockUserToken,s._app?.options.projectId);const I=a.mockUserToken.sub||a.mockUserToken.user_id;if(!I)throw new Ne(Ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new Gt(I)}s._authCredentials=new c2(new zE(v,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new zp(this.firestore,e,this._query)}}class li{constructor(e,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new li(this.firestore,e,this._key)}toJSON(){return{type:li._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,a){if(Gl(i,li._jsonSchema))return new li(e,a||null,new Dr(Pn.fromString(i.referencePath)))}}li._jsonSchemaVersion="firestore/documentReference/1.0",li._jsonSchema={type:pt("string",li._jsonSchemaVersion),referencePath:pt("string")};class Hp extends zp{constructor(e,i,a){super(e,i,I2(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new li(this.firestore,null,new Dr(e))}withConverter(e){return new Hp(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="AsyncQueue";class Cv{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new D2(this,"async_queue_retry"),this._c=()=>{const a=Ld();a&&Bn(wv,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=e;const i=Ld();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const i=Ld();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const i=new Al;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!w2(e))throw e;Bn(wv,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const i=this.ac.then(()=>(this.rc=!0,e().catch(a=>{throw this.nc=a,this.rc=!1,UE("INTERNAL UNHANDLED ERROR: ",Rv(a)),a}).then(a=>(this.rc=!1,a))));return this.ac=i,i}enqueueAfterDelay(e,i,a){this.uc(),this.oc.indexOf(e)>-1&&(i=0);const l=Pp.createAndSchedule(this,e,i,a,h=>this.hc(h));return this.tc.push(l),l}uc(){this.nc&&xl(47125,{Pc:Rv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const i of this.tc)if(i.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((i,a)=>i.targetTimeMs-a.targetTimeMs);for(const i of this.tc)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const i=this.tc.indexOf(e);this.tc.splice(i,1)}}function Rv(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class x2 extends BE{constructor(e,i,a,l){super(e,i,a,l),this.type="firestore",this._queue=new Cv,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cv(e),this._firestoreClient=void 0,await e}}}function L2(s,e){const i=typeof s=="object"?s:zl(),a=typeof s=="string"?s:tp,l=$i(i,"firestore").getImmediate({identifier:a});if(!l._initialized){const h=_p("firestore");h&&k2(l,...h)}return l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ji(Br.fromBase64String(e))}catch(i){throw new Ne(Ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new ji(Br.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ji._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Gl(e,ji._jsonSchema))return ji.fromBase64String(e.bytes)}}ji._jsonSchemaVersion="firestore/bytes/1.0",ji._jsonSchema={type:pt("string",ji._jsonSchemaVersion),bytes:pt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new Ne(Ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nr(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new Ne(Ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new Ne(Ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Us(this._lat,e._lat)||Us(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xr._jsonSchemaVersion}}static fromJSON(e){if(Gl(e,xr._jsonSchema))return new xr(e.latitude,e.longitude)}}xr._jsonSchemaVersion="firestore/geoPoint/1.0",xr._jsonSchema={type:pt("string",xr._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this._values=(e||[]).map(i=>i)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(a,l){if(a.length!==l.length)return!1;for(let h=0;h<a.length;++h)if(a[h]!==l[h])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Lr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Gl(e,Lr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(i=>typeof i=="number"))return new Lr(e.vectorValues);throw new Ne(Ie.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Lr._jsonSchemaVersion="firestore/vectorValue/1.0",Lr._jsonSchema={type:pt("string",Lr._jsonSchemaVersion),vectorValues:pt("object")};const U2=new RegExp("[~\\*/\\[\\]]");function P2(s,e,i){if(e.search(U2)>=0)throw Iv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s);try{return new jE(...e.split("."))._internalPath}catch{throw Iv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s)}}function Iv(s,e,i,a,l){let h=`Function ${e}() called with invalid data`;h+=". ";let d="";return new Ne(Ie.INVALID_ARGUMENT,h+s+d)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,i,a,l,h){this._firestore=e,this._userDataWriter=i,this._key=a,this._document=l,this._converter=h}get id(){return this._key.path.lastSegment()}get ref(){return new li(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new z2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const i=this._document.data.field(qE("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class z2 extends VE{data(){return super.data()}}function qE(s,e){return typeof e=="string"?P2(s,e):e instanceof jE?e._internalPath:e._delegate._internalPath}class Ac{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ya extends VE{constructor(e,i,a,l,h,d){super(e,i,a,l,d),this._firestore=e,this._firestoreImpl=e,this.metadata=h}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new kc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const a=this._document.data.field(qE("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Ne(Ie.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=Ya._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Ya._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ya._jsonSchema={type:pt("string",Ya._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class kc extends Ya{data(e={}){return super.data(e)}}class wl{constructor(e,i,a,l){this._firestore=e,this._userDataWriter=i,this._snapshot=l,this.metadata=new Ac(l.hasPendingWrites,l.fromCache),this.query=a}get docs(){const e=[];return this.forEach(i=>e.push(i)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach(a=>{e.call(i,new kc(this._firestore,this._userDataWriter,a.key,a,new Ac(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new Ne(Ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(l,h){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map(g=>{const y=new kc(l._firestore,l._userDataWriter,g.doc.key,g.doc,new Ac(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);return g.doc,{type:"added",doc:y,oldIndex:-1,newIndex:d++}})}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(g=>h||g.type!==3).map(g=>{const y=new kc(l._firestore,l._userDataWriter,g.doc.key,g.doc,new Ac(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);let v=-1,b=-1;return g.type!==0&&(v=d.indexOf(g.doc.key),d=d.delete(g.doc.key)),g.type!==1&&(d=d.add(g.doc),b=d.indexOf(g.doc.key)),{type:H2(g.type),doc:y,oldIndex:v,newIndex:b}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Ne(Ie.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=wl._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=m2.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],l=[];return this.docs.forEach(h=>{h._document!==null&&(i.push(h._document),a.push(this._userDataWriter.convertObjectMap(h._document.data.value.mapValue.fields,"previous")),l.push(h.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function H2(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xl(61501,{type:s})}}wl._jsonSchemaVersion="firestore/querySnapshot/1.0",wl._jsonSchema={type:pt("string",wl._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};(function(e,i=!0){(function(l){ql=l})(Hs),In(new dn("firestore",(a,{instanceIdentifier:l,options:h})=>{const d=a.getProvider("app").getImmediate(),g=new x2(new h2(a.getProvider("auth-internal")),new p2(d,a.getProvider("app-check-internal")),function(v,b){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new Ne(Ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kc(v.options.projectId,b)}(d,l),d);return h={useFetchStreams:i,...h},g._setSettings(h),g},"PUBLIC").setMultipleInstances(!0)),Bt(dv,pv,e),Bt(dv,pv,"esm2020")})();var Nv={};const Ov="@firebase/database",Dv="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GE="";function B2(s){GE=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,i){i==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),kt(i))}get(e){const i=this.domStorage_.getItem(this.prefixedName_(e));return i==null?null:Ol(i)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,i){i==null?delete this.cache_[e]:this.cache_[e]=i}get(e){return Zi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new j2(e)}}catch{}return new V2},Mr=FE("localStorage"),q2=FE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new Pl("@firebase/database"),G2=function(){let s=1;return function(){return s++}}(),YE=function(s){const e=pb(s),i=new ub;i.update(e);const a=i.digest();return gp.encodeByteArray(a)},Fl=function(...s){let e="";for(let i=0;i<s.length;i++){const a=s[i];Array.isArray(a)||a&&typeof a=="object"&&typeof a.length=="number"?e+=Fl.apply(null,a):typeof a=="object"?e+=kt(a):e+=a,e+=" "}return e};let Cl=null,Mv=!0;const F2=function(s,e){J(!0,"Can't turn on custom loggers persistently."),Ka.logLevel=ke.VERBOSE,Cl=Ka.log.bind(Ka)},Pt=function(...s){if(Mv===!0&&(Mv=!1,Cl===null&&q2.get("logging_enabled")===!0&&F2()),Cl){const e=Fl.apply(null,s);Cl(e)}},Yl=function(s){return function(...e){Pt(s,...e)}},np=function(...s){const e="FIREBASE INTERNAL ERROR: "+Fl(...s);Ka.error(e)},Qi=function(...s){const e=`FIREBASE FATAL ERROR: ${Fl(...s)}`;throw Ka.error(e),new Error(e)},fn=function(...s){const e="FIREBASE WARNING: "+Fl(...s);Ka.warn(e)},Y2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&fn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},KE=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},K2=function(s){if(document.readyState==="complete")s();else{let e=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},Za="[MIN_NAME]",jr="[MAX_NAME]",no=function(s,e){if(s===e)return 0;if(s===Za||e===jr)return-1;if(e===Za||s===jr)return 1;{const i=kv(s),a=kv(e);return i!==null?a!==null?i-a===0?s.length-e.length:i-a:-1:a!==null?1:s<e?-1:1}},X2=function(s,e){return s===e?0:s<e?-1:1},pl=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+kt(e))},Bp=function(s){if(typeof s!="object"||s===null)return kt(s);const e=[];for(const a in s)e.push(a);e.sort();let i="{";for(let a=0;a<e.length;a++)a!==0&&(i+=","),i+=kt(e[a]),i+=":",i+=Bp(s[e[a]]);return i+="}",i},XE=function(s,e){const i=s.length;if(i<=e)return[s];const a=[];for(let l=0;l<i;l+=e)l+e>i?a.push(s.substring(l,i)):a.push(s.substring(l,l+e));return a};function Nn(s,e){for(const i in s)s.hasOwnProperty(i)&&e(i,s[i])}const WE=function(s){J(!KE(s),"Invalid JSON number");const e=11,i=52,a=(1<<e-1)-1;let l,h,d,g,y;s===0?(h=0,d=0,l=1/s===-1/0?1:0):(l=s<0,s=Math.abs(s),s>=Math.pow(2,1-a)?(g=Math.min(Math.floor(Math.log(s)/Math.LN2),a),h=g+a,d=Math.round(s*Math.pow(2,i-g)-Math.pow(2,i))):(h=0,d=Math.round(s/Math.pow(2,1-a-i))));const v=[];for(y=i;y;y-=1)v.push(d%2?1:0),d=Math.floor(d/2);for(y=e;y;y-=1)v.push(h%2?1:0),h=Math.floor(h/2);v.push(l?1:0),v.reverse();const b=v.join("");let I="";for(y=0;y<64;y+=8){let O=parseInt(b.substr(y,8),2).toString(16);O.length===1&&(O="0"+O),I=I+O}return I.toLowerCase()},W2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Q2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Z2=new RegExp("^-?(0*)\\d{1,10}$"),$2=-2147483648,J2=2147483647,kv=function(s){if(Z2.test(s)){const e=Number(s);if(e>=$2&&e<=J2)return e}return null},Kl=function(s){try{s()}catch(e){setTimeout(()=>{const i=e.stack||"";throw fn("Exception was thrown by user callback.",i),e},Math.floor(0))}},eI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rl=function(s,e){const i=setTimeout(s,e);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,i){this.appCheckProvider=i,this.appName=e.name,Zt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=i?.getImmediate({optional:!0}),this.appCheck||i?.get().then(a=>this.appCheck=a)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((i,a)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(i,a):i(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){fn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,i,a){this.appName_=e,this.firebaseOptions_=i,this.authProvider_=a,this.auth_=null,this.auth_=a.getImmediate({optional:!0}),this.auth_||a.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(i=>i&&i.code==="auth/token-not-initialized"?(Pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,a)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(i,a):i(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(i=>i.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(i=>i.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',fn(e)}}class xc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="5",QE="v",ZE="s",$E="r",JE="f",eT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,tT="ls",nT="p",ip="ac",iT="websocket",sT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,i,a,l,h=!1,d="",g=!1,y=!1,v=null){this.secure=i,this.namespace=a,this.webSocketOnly=l,this.nodeAdmin=h,this.persistenceKey=d,this.includeNamespaceInQueryParams=g,this.isUsingEmulator=y,this.emulatorOptions=v,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${i}`}}function iI(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function aT(s,e,i){J(typeof e=="string","typeof type must == string"),J(typeof i=="object","typeof params must == object");let a;if(e===iT)a=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===sT)a=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);iI(s)&&(i.ns=s.namespace);const l=[];return Nn(i,(h,d)=>{l.push(h+"="+d)}),a+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.counters_={}}incrementCounter(e,i=1){Zi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=i}get(){return Y1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud={},Pd={};function Vp(s){const e=s.toString();return Ud[e]||(Ud[e]=new sI),Ud[e]}function rI(s,e){const i=s.toString();return Pd[i]||(Pd[i]=e()),Pd[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,i){this.closeAfterResponse=e,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,i){for(this.pendingResponses[e]=i;this.pendingResponses[this.currentResponseNum];){const a=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<a.length;++l)a[l]&&Kl(()=>{this.onMessage_(a[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="start",oI="close",lI="pLPCommand",uI="pRTLPCB",oT="id",lT="pw",uT="ser",cI="cb",hI="seg",fI="ts",dI="d",pI="dframe",cT=1870,hT=30,gI=cT-hT,mI=25e3,_I=3e4;class ja{constructor(e,i,a,l,h,d,g){this.connId=e,this.repoInfo=i,this.applicationId=a,this.appCheckToken=l,this.authToken=h,this.transportSessionId=d,this.lastSessionId=g,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yl(e),this.stats_=Vp(i),this.urlFn=y=>(this.appCheckToken&&(y[ip]=this.appCheckToken),aT(i,sT,y))}open(e,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new aI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_I)),K2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qp((...h)=>{const[d,g,y,v,b]=h;if(this.incrementIncomingBytes_(h),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===xv)this.id=g,this.password=y;else if(d===oI)g?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(g,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...h)=>{const[d,g]=h;this.incrementIncomingBytes_(h),this.myPacketOrderer.handleResponse(d,g)},()=>{this.onClosed_()},this.urlFn);const a={};a[xv]="t",a[uT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(a[cI]=this.scriptTagHolder.uniqueCallbackIdentifier),a[QE]=jp,this.transportSessionId&&(a[ZE]=this.transportSessionId),this.lastSessionId&&(a[tT]=this.lastSessionId),this.applicationId&&(a[nT]=this.applicationId),this.appCheckToken&&(a[ip]=this.appCheckToken),typeof location<"u"&&location.hostname&&eT.test(location.hostname)&&(a[$E]=JE);const l=this.urlFn(a);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ja.forceAllow_=!0}static forceDisallow(){ja.forceDisallow_=!0}static isAvailable(){return ja.forceAllow_?!0:!ja.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!W2()&&!Q2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const i=kt(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=y0(i),l=XE(a,gI);for(let h=0;h<l.length;h++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[h]),this.curSegmentNum++}addDisconnectPingFrame(e,i){this.myDisconnFrame=document.createElement("iframe");const a={};a[pI]="t",a[oT]=e,a[lT]=i,this.myDisconnFrame.src=this.urlFn(a),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const i=kt(e).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class qp{constructor(e,i,a,l){this.onDisconnect=a,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=G2(),window[lI+this.uniqueCallbackIdentifier]=e,window[uI+this.uniqueCallbackIdentifier]=i,this.myIFrame=qp.createIFrame_();let h="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(h='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+h+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(g){Pt("frame writing exception"),g.stack&&Pt(g.stack),Pt(g)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pt("No IE domain setting required")}catch{const a=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+a+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,i){for(this.myID=e,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[oT]=this.myID,e[lT]=this.myPW,e[uT]=this.currentSerial;let i=this.urlFn(e),a="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hT+a.length<=cT;){const d=this.pendingSegs.shift();a=a+"&"+hI+l+"="+d.seg+"&"+fI+l+"="+d.ts+"&"+dI+l+"="+d.d,l++}return i=i+a,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(e,i,a){this.pendingSegs.push({seg:e,ts:i,d:a}),this.alive&&this.newRequest_()}addLongPollTag_(e,i){this.outstandingRequests.add(i);const a=()=>{this.outstandingRequests.delete(i),this.newRequest_()},l=setTimeout(a,Math.floor(mI)),h=()=>{clearTimeout(l),a()};this.addTag(e,h)}addTag(e,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const a=this.myIFrame.doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,a.onload=a.onreadystatechange=function(){const l=a.readyState;(!l||l==="loaded"||l==="complete")&&(a.onload=a.onreadystatechange=null,a.parentNode&&a.parentNode.removeChild(a),i())},a.onerror=()=>{Pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(a)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=16384,vI=45e3;let Xc=null;typeof MozWebSocket<"u"?Xc=MozWebSocket:typeof WebSocket<"u"&&(Xc=WebSocket);class zn{constructor(e,i,a,l,h,d,g){this.connId=e,this.applicationId=a,this.appCheckToken=l,this.authToken=h,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yl(this.connId),this.stats_=Vp(i),this.connURL=zn.connectionURL_(i,d,g,l,a),this.nodeAdmin=i.nodeAdmin}static connectionURL_(e,i,a,l,h){const d={};return d[QE]=jp,typeof location<"u"&&location.hostname&&eT.test(location.hostname)&&(d[$E]=JE),i&&(d[ZE]=i),a&&(d[tT]=a),l&&(d[ip]=l),h&&(d[nT]=h),aT(e,iT,d)}open(e,i){this.onDisconnect=i,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mr.set("previous_websocket_failure",!0);try{let a;nb(),this.mySock=new Xc(this.connURL,[],a)}catch(a){this.log_("Error instantiating WebSocket.");const l=a.message||a.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=a=>{this.handleIncomingFrame(a)},this.mySock.onerror=a=>{this.log_("WebSocket error.  Closing connection.");const l=a.message||a.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){zn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,a=navigator.userAgent.match(i);a&&a.length>1&&parseFloat(a[1])<4.4&&(e=!0)}return!e&&Xc!==null&&!zn.forceDisallow_}static previouslyFailed(){return Mr.isInMemoryStorage||Mr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const a=Ol(i);this.onMessage(a)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(J(this.frames===null,"We already have a frame buffer"),e.length<=6){const i=Number(e);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const i=e.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const a=this.extractFrameCount_(i);a!==null&&this.appendFrame_(a)}}send(e){this.resetKeepAlive();const i=kt(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=XE(i,yI);a.length>1&&this.sendString_(String(a.length));for(let l=0;l<a.length;l++)this.sendString_(a[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vI))}sendString_(e){try{this.mySock.send(e)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zn.responsesRequiredToBeHealthy=2;zn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{static get ALL_TRANSPORTS(){return[ja,zn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const i=zn&&zn.isAvailable();let a=i&&!zn.previouslyFailed();if(e.webSocketOnly&&(i||fn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),a=!0),a)this.transports_=[zn];else{const l=this.transports_=[];for(const h of Ll.ALL_TRANSPORTS)h&&h.isAvailable()&&l.push(h);Ll.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ll.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=6e4,TI=5e3,SI=10*1024,bI=100*1024,zd="t",Lv="d",AI="s",Uv="r",wI="e",Pv="o",zv="a",Hv="n",Bv="p",CI="h";class RI{constructor(e,i,a,l,h,d,g,y,v,b){this.id=e,this.repoInfo_=i,this.applicationId_=a,this.appCheckToken_=l,this.authToken_=h,this.onMessage_=d,this.onReady_=g,this.onDisconnect_=y,this.onKill_=v,this.lastSessionId=b,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yl("c:"+this.id+":"),this.transportManager_=new Ll(i),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),a=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,a)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Rl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>bI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>SI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return i=>{e===this.conn_?this.onConnectionLost_(i):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return i=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(i):e===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(e){const i={t:"d",d:e};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zd in e){const i=e[zd];i===zv?this.upgradeIfSecondaryHealthy_():i===Uv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===Pv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const i=pl("t",e),a=pl("d",e);if(i==="c")this.onSecondaryControl_(a);else if(i==="d")this.pendingDataMessages.push(a);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const i=pl("t",e),a=pl("d",e);i==="c"?this.onControl_(a):i==="d"&&this.onDataMessage_(a)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const i=pl(zd,e);if(Lv in e){const a=e[Lv];if(i===CI){const l={...a};this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(i===Hv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===AI?this.onConnectionShutdown_(a):i===Uv?this.onReset_(a):i===wI?np("Server Error: "+a):i===Pv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):np("Unknown control packet command: "+i)}}onHandshake_(e){const i=e.ts,a=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),jp!==a&&fn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),a=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,a),Rl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(EI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,i){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{put(e,i,a,l){}merge(e,i,a,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,i,a){}onDisconnectMerge(e,i,a){}onDisconnectCancel(e,i){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.allowedEvents_=e,this.listeners_={},J(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...i){if(Array.isArray(this.listeners_[e])){const a=[...this.listeners_[e]];for(let l=0;l<a.length;l++)a[l].callback.apply(a[l].context,i)}}on(e,i,a){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:i,context:a});const l=this.getInitialEvent(e);l&&i.apply(a,l)}off(e,i,a){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let h=0;h<l.length;h++)if(l[h].callback===i&&(!a||a===l[h].context)){l.splice(h,1);return}}validateEventType_(e){J(this.allowedEvents_.find(i=>i===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends dT{static getInstance(){return new Wc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ep()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return J(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=32,Vv=768;class $e{constructor(e,i){if(i===void 0){this.pieces_=e.split("/");let a=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[a]=this.pieces_[l],a++);this.pieces_.length=a,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=i}toString(){let e="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(e+="/"+this.pieces_[i]);return e||"/"}}function Ye(){return new $e("")}function Ce(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function Ps(s){return s.pieces_.length-s.pieceNum_}function Ze(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new $e(s.pieces_,e)}function pT(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function II(s){let e="";for(let i=s.pieceNum_;i<s.pieces_.length;i++)s.pieces_[i]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[i])));return e||"/"}function gT(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function mT(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let i=s.pieceNum_;i<s.pieces_.length-1;i++)e.push(s.pieces_[i]);return new $e(e,0)}function Rt(s,e){const i=[];for(let a=s.pieceNum_;a<s.pieces_.length;a++)i.push(s.pieces_[a]);if(e instanceof $e)for(let a=e.pieceNum_;a<e.pieces_.length;a++)i.push(e.pieces_[a]);else{const a=e.split("/");for(let l=0;l<a.length;l++)a[l].length>0&&i.push(a[l])}return new $e(i,0)}function Te(s){return s.pieceNum_>=s.pieces_.length}function Rn(s,e){const i=Ce(s),a=Ce(e);if(i===null)return e;if(i===a)return Rn(Ze(s),Ze(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function _T(s,e){if(Ps(s)!==Ps(e))return!1;for(let i=s.pieceNum_,a=e.pieceNum_;i<=s.pieces_.length;i++,a++)if(s.pieces_[i]!==e.pieces_[a])return!1;return!0}function jn(s,e){let i=s.pieceNum_,a=e.pieceNum_;if(Ps(s)>Ps(e))return!1;for(;i<s.pieces_.length;){if(s.pieces_[i]!==e.pieces_[a])return!1;++i,++a}return!0}class NI{constructor(e,i){this.errorPrefix_=i,this.parts_=gT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let a=0;a<this.parts_.length;a++)this.byteLength_+=ah(this.parts_[a]);yT(this)}}function OI(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=ah(e),yT(s)}function DI(s){const e=s.parts_.pop();s.byteLength_-=ah(e),s.parts_.length>0&&(s.byteLength_-=1)}function yT(s){if(s.byteLength_>Vv)throw new Error(s.errorPrefix_+"has a key path longer than "+Vv+" bytes ("+s.byteLength_+").");if(s.parts_.length>jv)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jv+") or object contains a cycle "+Ir(s))}function Ir(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp extends dT{static getInstance(){return new Gp}constructor(){super(["visible"]);let e,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const a=!document[e];a!==this.visible_&&(this.visible_=a,this.trigger("visible",a))},!1)}getInitialEvent(e){return J(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=1e3,MI=300*1e3,qv=30*1e3,kI=1.3,xI=3e4,LI="server_kill",Gv=3;class Yi extends fT{constructor(e,i,a,l,h,d,g,y){if(super(),this.repoInfo_=e,this.applicationId_=i,this.onDataUpdate_=a,this.onConnectStatus_=l,this.onServerInfoUpdate_=h,this.authTokenProvider_=d,this.appCheckTokenProvider_=g,this.authOverride_=y,this.id=Yi.nextPersistentConnectionId_++,this.log_=Yl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gl,this.maxReconnectDelay_=MI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,y)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Gp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,i,a){const l=++this.requestNumber_,h={r:l,a:e,b:i};this.log_(kt(h)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(h),a&&(this.requestCBHash_[l]=a)}get(e){this.initConnection_();const i=new yp,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const g=d.d;d.s==="ok"?i.resolve(g):i.reject(g)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const h=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(h),i.promise}listen(e,i,a,l){this.initConnection_();const h=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+h),this.listens.has(d)||this.listens.set(d,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(d).has(h),"listen() called twice for same path/queryId.");const g={onComplete:l,hashFn:i,query:e,tag:a};this.listens.get(d).set(h,g),this.connected_&&this.sendListen_(g)}sendGet_(e){const i=this.outstandingGets_[e];this.sendRequest("g",i.request,a=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(a)})}sendListen_(e){const i=e.query,a=i._path.toString(),l=i._queryIdentifier;this.log_("Listen on "+a+" for "+l);const h={p:a},d="q";e.tag&&(h.q=i._queryObject,h.t=e.tag),h.h=e.hashFn(),this.sendRequest(d,h,g=>{const y=g.d,v=g.s;Yi.warnOnListenWarnings_(y,i),(this.listens.get(a)&&this.listens.get(a).get(l))===e&&(this.log_("listen response",g),v!=="ok"&&this.removeListen_(a,l),e.onComplete&&e.onComplete(v,y))})}static warnOnListenWarnings_(e,i){if(e&&typeof e=="object"&&Zi(e,"w")){const a=Wa(e,"w");if(Array.isArray(a)&&~a.indexOf("no_index")){const l='".indexOn": "'+i._queryParams.getIndex().toString()+'"',h=i._path.toString();fn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${h} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,i=ob(e)?"auth":"gauth",a={cred:e};this.authOverride_===null?a.noauth=!0:typeof this.authOverride_=="object"&&(a.authvar=this.authOverride_),this.sendRequest(i,a,l=>{const h=l.s,d=l.d||"error";this.authToken_===e&&(h==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(h,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const i=e.s,a=e.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,a)})}unlisten(e,i){const a=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+a+" "+l),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(a,l)&&this.connected_&&this.sendUnlisten_(a,l,e._queryObject,i)}sendUnlisten_(e,i,a,l){this.log_("Unlisten on "+e+" for "+i);const h={p:e},d="n";l&&(h.q=a,h.t=l),this.sendRequest(d,h)}onDisconnectPut(e,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,i,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:i,onComplete:a})}onDisconnectMerge(e,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,i,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:i,onComplete:a})}onDisconnectCancel(e,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(e,i,a,l){const h={p:i,d:a};this.log_("onDisconnect "+e,h),this.sendRequest(e,h,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,i,a,l){this.putInternal("p",e,i,a,l)}merge(e,i,a,l){this.putInternal("m",e,i,a,l)}putInternal(e,i,a,l,h){this.initConnection_();const d={p:i,d:a};h!==void 0&&(d.h=h),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const g=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(g):this.log_("Buffering put: "+i)}sendPut_(e){const i=this.outstandingPuts_[e].action,a=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(i,a,h=>{this.log_(i+" response",h),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(h.s,h.d)})}reportStats(e){if(this.connected_){const i={c:e};this.log_("reportStats",i),this.sendRequest("s",i,a=>{if(a.s!=="ok"){const h=a.d;this.log_("reportStats","Error sending stats: "+h)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+kt(e));const i=e.r,a=this.requestCBHash_[i];a&&(delete this.requestCBHash_[i],a(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,i){this.log_("handleServerMessage",e,i),e==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):e==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):e==="c"?this.onListenRevoked_(i.p,i.q):e==="ac"?this.onAuthRevoked_(i.s,i.d):e==="apc"?this.onAppCheckRevoked_(i.s,i.d):e==="sd"?this.onSecurityDebugPacket_(i):np("Unrecognized action received from server: "+kt(e)+`
Are you using the latest client?`)}onReady_(e,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xI&&(this.reconnectDelay_=gl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-e);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),a=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Yi.nextConnectionId_++,h=this.lastSessionId;let d=!1,g=null;const y=function(){g?g.close():(d=!0,a())},v=function(I){J(g,"sendRequest call when we're not connected not allowed."),g.sendRequest(I)};this.realtime_={close:y,sendRequest:v};const b=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[I,O]=await Promise.all([this.authTokenProvider_.getToken(b),this.appCheckTokenProvider_.getToken(b)]);d?Pt("getToken() completed but was canceled"):(Pt("getToken() completed. Creating connection."),this.authToken_=I&&I.accessToken,this.appCheckToken_=O&&O.token,g=new RI(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,i,a,Q=>{fn(Q+" ("+this.repoInfo_.toString()+")"),this.interrupt(LI)},h))}catch(I){this.log_("Failed to get token: "+I),d||(this.repoInfo_.nodeAdmin&&fn(I),y())}}}interrupt(e){Pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gd(this.interruptReasons_)&&(this.reconnectDelay_=gl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const i=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const i=this.outstandingPuts_[e];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,i){let a;i?a=i.map(h=>Bp(h)).join("$"):a="default";const l=this.removeListen_(e,a);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,i){const a=new $e(e).toString();let l;if(this.listens.has(a)){const h=this.listens.get(a);l=h.get(i),h.delete(i),h.size===0&&this.listens.delete(a)}else l=void 0;return l}onAuthRevoked_(e,i){Pt("Auth token revoked: "+e+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gv&&(this.reconnectDelay_=qv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,i){Pt("App check token revoked: "+e+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const i of e.values())this.sendListen_(i);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let i="js";e["sdk."+i+"."+GE.replace(/\./g,"-")]=1,Ep()?e["framework.cordova"]=1:A0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wc.getInstance().currentlyOnline();return Gd(this.interruptReasons_)&&e}}Yi.nextPersistentConnectionId_=0;Yi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,i){this.name=e,this.node=i}static Wrap(e,i){return new Re(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,i){const a=new Re(Za,e),l=new Re(Za,i);return this.compare(a,l)!==0}minPost(){return Re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc;class vT extends fh{static get __EMPTY_NODE(){return wc}static set __EMPTY_NODE(e){wc=e}compare(e,i){return no(e.name,i.name)}isDefinedOn(e){throw Ja("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,i){return!1}minPost(){return Re.MIN}maxPost(){return new Re(jr,wc)}makePost(e,i){return J(typeof e=="string","KeyIndex indexValue must always be a string."),new Re(e,wc)}toString(){return".key"}}const Xa=new vT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,i,a,l,h=null){this.isReverse_=l,this.resultGenerator_=h,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=i?a(e.key,i):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(e.key,e.value):i={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ct{constructor(e,i,a,l,h){this.key=e,this.value=i,this.color=a??Ct.RED,this.left=l??$t.EMPTY_NODE,this.right=h??$t.EMPTY_NODE}copy(e,i,a,l,h){return new Ct(e??this.key,i??this.value,a??this.color,l??this.left,h??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,a){let l=this;const h=a(e,l.key);return h<0?l=l.copy(null,null,null,l.left.insert(e,i,a),null):h===0?l=l.copy(null,i,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,i,a)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return $t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,i){let a,l;if(a=this,i(e,a.key)<0)!a.left.isEmpty()&&!a.left.isRed_()&&!a.left.left.isRed_()&&(a=a.moveRedLeft_()),a=a.copy(null,null,null,a.left.remove(e,i),null);else{if(a.left.isRed_()&&(a=a.rotateRight_()),!a.right.isEmpty()&&!a.right.isRed_()&&!a.right.left.isRed_()&&(a=a.moveRedRight_()),i(e,a.key)===0){if(a.right.isEmpty())return $t.EMPTY_NODE;l=a.right.min_(),a=a.copy(l.key,l.value,null,null,a.right.removeMin_())}a=a.copy(null,null,null,null,a.right.remove(e,i))}return a.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ct.RED=!0;Ct.BLACK=!1;class UI{copy(e,i,a,l,h){return this}insert(e,i,a){return new Ct(e,i,null)}remove(e,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $t{constructor(e,i=$t.EMPTY_NODE){this.comparator_=e,this.root_=i}insert(e,i){return new $t(this.comparator_,this.root_.insert(e,i,this.comparator_).copy(null,null,Ct.BLACK,null,null))}remove(e){return new $t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ct.BLACK,null,null))}get(e){let i,a=this.root_;for(;!a.isEmpty();){if(i=this.comparator_(e,a.key),i===0)return a.value;i<0?a=a.left:i>0&&(a=a.right)}return null}getPredecessorKey(e){let i,a=this.root_,l=null;for(;!a.isEmpty();)if(i=this.comparator_(e,a.key),i===0){if(a.left.isEmpty())return l?l.key:null;for(a=a.left;!a.right.isEmpty();)a=a.right;return a.key}else i<0?a=a.left:i>0&&(l=a,a=a.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Cc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,i){return new Cc(this.root_,e,this.comparator_,!1,i)}getReverseIteratorFrom(e,i){return new Cc(this.root_,e,this.comparator_,!0,i)}getReverseIterator(e){return new Cc(this.root_,null,this.comparator_,!0,e)}}$t.EMPTY_NODE=new UI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(s,e){return no(s.name,e.name)}function Fp(s,e){return no(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sp;function zI(s){sp=s}const ET=function(s){return typeof s=="number"?"number:"+WE(s):"string:"+s},TT=function(s){if(s.isLeafNode()){const e=s.val();J(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zi(e,".sv"),"Priority must be a string or number.")}else J(s===sp||s.isEmpty(),"priority of unexpected type.");J(s===sp||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fv;class wt{static set __childrenNodeConstructor(e){Fv=e}static get __childrenNodeConstructor(){return Fv}constructor(e,i=wt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=i,this.lazyHash_=null,J(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),TT(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new wt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:wt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Te(e)?this:Ce(e)===".priority"?this.priorityNode_:wt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,i){return null}updateImmediateChild(e,i){return e===".priority"?this.updatePriority(i):i.isEmpty()&&e!==".priority"?this:wt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,i).updatePriority(this.priorityNode_)}updateChild(e,i){const a=Ce(e);return a===null?i:i.isEmpty()&&a!==".priority"?this:(J(a!==".priority"||Ps(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(a,wt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ze(e),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,i){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ET(this.priorityNode_.val())+":");const i=typeof this.value_;e+=i+":",i==="number"?e+=WE(this.value_):e+=this.value_,this.lazyHash_=YE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===wt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof wt.__childrenNodeConstructor?-1:(J(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const i=typeof e.value_,a=typeof this.value_,l=wt.VALUE_TYPE_ORDER.indexOf(i),h=wt.VALUE_TYPE_ORDER.indexOf(a);return J(l>=0,"Unknown leaf type: "+i),J(h>=0,"Unknown leaf type: "+a),l===h?a==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:h-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const i=e;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}wt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ST,bT;function HI(s){ST=s}function BI(s){bT=s}class jI extends fh{compare(e,i){const a=e.node.getPriority(),l=i.node.getPriority(),h=a.compareTo(l);return h===0?no(e.name,i.name):h}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,i){return!e.getPriority().equals(i.getPriority())}minPost(){return Re.MIN}maxPost(){return new Re(jr,new wt("[PRIORITY-POST]",bT))}makePost(e,i){const a=ST(e);return new Re(i,new wt("[PRIORITY-POST]",a))}toString(){return".priority"}}const Ht=new jI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=Math.log(2);class qI{constructor(e){const i=h=>parseInt(Math.log(h)/VI,10),a=h=>parseInt(Array(h+1).join("1"),2);this.count=i(e+1),this.current_=this.count-1;const l=a(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qc=function(s,e,i,a){s.sort(e);const l=function(y,v){const b=v-y;let I,O;if(b===0)return null;if(b===1)return I=s[y],O=i?i(I):I,new Ct(O,I.node,Ct.BLACK,null,null);{const Q=parseInt(b/2,10)+y,K=l(y,Q),ie=l(Q+1,v);return I=s[Q],O=i?i(I):I,new Ct(O,I.node,Ct.BLACK,K,ie)}},h=function(y){let v=null,b=null,I=s.length;const O=function(K,ie){const te=I-K,xe=I;I-=K;const Se=l(te+1,xe),fe=s[te],Ee=i?i(fe):fe;Q(new Ct(Ee,fe.node,ie,null,Se))},Q=function(K){v?(v.left=K,v=K):(b=K,v=K)};for(let K=0;K<y.count;++K){const ie=y.nextBitIsOne(),te=Math.pow(2,y.count-(K+1));ie?O(te,Ct.BLACK):(O(te,Ct.BLACK),O(te,Ct.RED))}return b},d=new qI(s.length),g=h(d);return new $t(a||e,g)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hd;const Ha={};class Gi{static get Default(){return J(Ha&&Ht,"ChildrenNode.ts has not been loaded"),Hd=Hd||new Gi({".priority":Ha},{".priority":Ht}),Hd}constructor(e,i){this.indexes_=e,this.indexSet_=i}get(e){const i=Wa(this.indexes_,e);if(!i)throw new Error("No index defined for "+e);return i instanceof $t?i:null}hasIndex(e){return Zi(this.indexSet_,e.toString())}addIndex(e,i){J(e!==Xa,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const a=[];let l=!1;const h=i.getIterator(Re.Wrap);let d=h.getNext();for(;d;)l=l||e.isDefinedOn(d.node),a.push(d),d=h.getNext();let g;l?g=Qc(a,e.getCompare()):g=Ha;const y=e.toString(),v={...this.indexSet_};v[y]=e;const b={...this.indexes_};return b[y]=g,new Gi(b,v)}addToIndexes(e,i){const a=Pc(this.indexes_,(l,h)=>{const d=Wa(this.indexSet_,h);if(J(d,"Missing index implementation for "+h),l===Ha)if(d.isDefinedOn(e.node)){const g=[],y=i.getIterator(Re.Wrap);let v=y.getNext();for(;v;)v.name!==e.name&&g.push(v),v=y.getNext();return g.push(e),Qc(g,d.getCompare())}else return Ha;else{const g=i.get(e.name);let y=l;return g&&(y=y.remove(new Re(e.name,g))),y.insert(e,e.node)}});return new Gi(a,this.indexSet_)}removeFromIndexes(e,i){const a=Pc(this.indexes_,l=>{if(l===Ha)return l;{const h=i.get(e.name);return h?l.remove(new Re(e.name,h)):l}});return new Gi(a,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml;class Ue{static get EMPTY_NODE(){return ml||(ml=new Ue(new $t(Fp),null,Gi.Default))}constructor(e,i,a){this.children_=e,this.priorityNode_=i,this.indexMap_=a,this.lazyHash_=null,this.priorityNode_&&TT(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ml}updatePriority(e){return this.children_.isEmpty()?this:new Ue(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const i=this.children_.get(e);return i===null?ml:i}}getChild(e){const i=Ce(e);return i===null?this:this.getImmediateChild(i).getChild(Ze(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,i){if(J(i,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(i);{const a=new Re(e,i);let l,h;i.isEmpty()?(l=this.children_.remove(e),h=this.indexMap_.removeFromIndexes(a,this.children_)):(l=this.children_.insert(e,i),h=this.indexMap_.addToIndexes(a,this.children_));const d=l.isEmpty()?ml:this.priorityNode_;return new Ue(l,d,h)}}updateChild(e,i){const a=Ce(e);if(a===null)return i;{J(Ce(e)!==".priority"||Ps(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(a).updateChild(Ze(e),i);return this.updateImmediateChild(a,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const i={};let a=0,l=0,h=!0;if(this.forEachChild(Ht,(d,g)=>{i[d]=g.val(e),a++,h&&Ue.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):h=!1}),!e&&h&&l<2*a){const d=[];for(const g in i)d[g]=i[g];return d}else return e&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ET(this.getPriority().val())+":"),this.forEachChild(Ht,(i,a)=>{const l=a.hash();l!==""&&(e+=":"+i+":"+l)}),this.lazyHash_=e===""?"":YE(e)}return this.lazyHash_}getPredecessorChildName(e,i,a){const l=this.resolveIndex_(a);if(l){const h=l.getPredecessorKey(new Re(e,i));return h?h.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const i=this.resolveIndex_(e);if(i){const a=i.minKey();return a&&a.name}else return this.children_.minKey()}getFirstChild(e){const i=this.getFirstChildName(e);return i?new Re(i,this.children_.get(i)):null}getLastChildName(e){const i=this.resolveIndex_(e);if(i){const a=i.maxKey();return a&&a.name}else return this.children_.maxKey()}getLastChild(e){const i=this.getLastChildName(e);return i?new Re(i,this.children_.get(i)):null}forEachChild(e,i){const a=this.resolveIndex_(e);return a?a.inorderTraversal(l=>i(l.name,l.node)):this.children_.inorderTraversal(i)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,i){const a=this.resolveIndex_(i);if(a)return a.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,Re.Wrap);let h=l.peek();for(;h!=null&&i.compare(h,e)<0;)l.getNext(),h=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,i){const a=this.resolveIndex_(i);if(a)return a.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,Re.Wrap);let h=l.peek();for(;h!=null&&i.compare(h,e)>0;)l.getNext(),h=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xl?-1:0}withIndex(e){if(e===Xa||this.indexMap_.hasIndex(e))return this;{const i=this.indexMap_.addIndex(e,this.children_);return new Ue(this.children_,this.priorityNode_,i)}}isIndexed(e){return e===Xa||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const i=e;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const a=this.getIterator(Ht),l=i.getIterator(Ht);let h=a.getNext(),d=l.getNext();for(;h&&d;){if(h.name!==d.name||!h.node.equals(d.node))return!1;h=a.getNext(),d=l.getNext()}return h===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===Xa?null:this.indexMap_.get(e.toString())}}Ue.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class GI extends Ue{constructor(){super(new $t(Fp),Ue.EMPTY_NODE,Gi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ue.EMPTY_NODE}isEmpty(){return!1}}const Xl=new GI;Object.defineProperties(Re,{MIN:{value:new Re(Za,Ue.EMPTY_NODE)},MAX:{value:new Re(jr,Xl)}});vT.__EMPTY_NODE=Ue.EMPTY_NODE;wt.__childrenNodeConstructor=Ue;zI(Xl);BI(Xl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=!0;function zt(s,e=null){if(s===null)return Ue.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),J(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const i=s;return new wt(i,zt(e))}if(!(s instanceof Array)&&FI){const i=[];let a=!1;if(Nn(s,(d,g)=>{if(d.substring(0,1)!=="."){const y=zt(g);y.isEmpty()||(a=a||!y.getPriority().isEmpty(),i.push(new Re(d,y)))}}),i.length===0)return Ue.EMPTY_NODE;const h=Qc(i,PI,d=>d.name,Fp);if(a){const d=Qc(i,Ht.getCompare());return new Ue(h,zt(e),new Gi({".priority":d},{".priority":Ht}))}else return new Ue(h,zt(e),Gi.Default)}else{let i=Ue.EMPTY_NODE;return Nn(s,(a,l)=>{if(Zi(s,a)&&a.substring(0,1)!=="."){const h=zt(l);(h.isLeafNode()||!h.isEmpty())&&(i=i.updateImmediateChild(a,h))}}),i.updatePriority(zt(e))}}HI(zt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI extends fh{constructor(e){super(),this.indexPath_=e,J(!Te(e)&&Ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,i){const a=this.extractChild(e.node),l=this.extractChild(i.node),h=a.compareTo(l);return h===0?no(e.name,i.name):h}makePost(e,i){const a=zt(e),l=Ue.EMPTY_NODE.updateChild(this.indexPath_,a);return new Re(i,l)}maxPost(){const e=Ue.EMPTY_NODE.updateChild(this.indexPath_,Xl);return new Re(jr,e)}toString(){return gT(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI extends fh{compare(e,i){const a=e.node.compareTo(i.node);return a===0?no(e.name,i.name):a}isDefinedOn(e){return!0}indexedValueChanged(e,i){return!e.equals(i)}minPost(){return Re.MIN}maxPost(){return Re.MAX}makePost(e,i){const a=zt(e);return new Re(i,a)}toString(){return".value"}}const XI=new KI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(s){return{type:"value",snapshotNode:s}}function QI(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function ZI(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function Yv(s,e,i){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:i}}function $I(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ht}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Za}hasEnd(){return this.endSet_}getIndexEndValue(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:jr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ht}copy(){const e=new Yp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Kv(s){const e={};if(s.isDefault())return e;let i;if(s.index_===Ht?i="$priority":s.index_===XI?i="$value":s.index_===Xa?i="$key":(J(s.index_ instanceof YI,"Unrecognized index type!"),i=s.index_.toString()),e.orderBy=kt(i),s.startSet_){const a=s.startAfterSet_?"startAfter":"startAt";e[a]=kt(s.indexStartValue_),s.startNameSet_&&(e[a]+=","+kt(s.indexStartName_))}if(s.endSet_){const a=s.endBeforeSet_?"endBefore":"endAt";e[a]=kt(s.indexEndValue_),s.endNameSet_&&(e[a]+=","+kt(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function Xv(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let i=s.viewFrom_;i===""&&(s.isViewFromLeft()?i="l":i="r"),e.vf=i}return s.index_!==Ht&&(e.i=s.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends fT{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,i){return i!==void 0?"tag$"+i:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,i,a,l){super(),this.repoInfo_=e,this.onDataUpdate_=i,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.log_=Yl("p:rest:"),this.listens_={}}listen(e,i,a,l){const h=e._path.toString();this.log_("Listen called for "+h+" "+e._queryIdentifier);const d=Zc.getListenId_(e,a),g={};this.listens_[d]=g;const y=Kv(e._queryParams);this.restRequest_(h+".json",y,(v,b)=>{let I=b;if(v===404&&(I=null,v=null),v===null&&this.onDataUpdate_(h,I,!1,a),Wa(this.listens_,d)===g){let O;v?v===401?O="permission_denied":O="rest_error:"+v:O="ok",l(O,null)}})}unlisten(e,i){const a=Zc.getListenId_(e,i);delete this.listens_[a]}get(e){const i=Kv(e._queryParams),a=e._path.toString(),l=new yp;return this.restRequest_(a+".json",i,(h,d)=>{let g=d;h===404&&(g=null,h=null),h===null?(this.onDataUpdate_(a,g,!1,null),l.resolve(g)):l.reject(new Error(g))}),l.promise}refreshAuthToken(e){}restRequest_(e,i={},a){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,h])=>{l&&l.accessToken&&(i.auth=l.accessToken),h&&h.token&&(i.ac=h.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+eo(i);this.log_("Sending REST request for "+d);const g=new XMLHttpRequest;g.onreadystatechange=()=>{if(a&&g.readyState===4){this.log_("REST Response for "+d+" received. status:",g.status,"response:",g.responseText);let y=null;if(g.status>=200&&g.status<300){try{y=Ol(g.responseText)}catch{fn("Failed to parse JSON response for "+d+": "+g.responseText)}a(null,y)}else g.status!==401&&g.status!==404&&fn("Got unsuccessful REST response for "+d+" Status: "+g.status),a(g.status);a=null}},g.open("GET",d,!0),g.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.rootNode_=Ue.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,i){this.rootNode_=this.rootNode_.updateChild(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(){return{value:null,children:new Map}}function AT(s,e,i){if(Te(e))s.value=i,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,i);else{const a=Ce(e);s.children.has(a)||s.children.set(a,$c());const l=s.children.get(a);e=Ze(e),AT(l,e,i)}}function rp(s,e,i){s.value!==null?i(e,s.value):eN(s,(a,l)=>{const h=new $e(e.toString()+"/"+a);rp(l,h,i)})}function eN(s,e){s.children.forEach((i,a)=>{e(a,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),i={...e};return this.last_&&Nn(this.last_,(a,l)=>{i[a]=i[a]-l}),this.last_=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=10*1e3,nN=30*1e3,iN=300*1e3;class sN{constructor(e,i){this.server_=i,this.statsToReport_={},this.statsListener_=new tN(e);const a=Wv+(nN-Wv)*Math.random();Rl(this.reportStats_.bind(this),Math.floor(a))}reportStats_(){const e=this.statsListener_.get(),i={};let a=!1;Nn(e,(l,h)=>{h>0&&Zi(this.statsToReport_,l)&&(i[l]=h,a=!0)}),a&&this.server_.reportStats(i),Rl(this.reportStats_.bind(this),Math.floor(Math.random()*2*iN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ui;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ui||(ui={}));function wT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function CT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function RT(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,i,a){this.path=e,this.affectedTree=i,this.revert=a,this.type=ui.ACK_USER_WRITE,this.source=wT()}operationForChild(e){if(Te(this.path)){if(this.affectedTree.value!=null)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new $e(e));return new Jc(Ye(),i,this.revert)}}else return J(Ce(this.path)===e,"operationForChild called for unrelated child."),new Jc(Ze(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,i,a){this.source=e,this.path=i,this.snap=a,this.type=ui.OVERWRITE}operationForChild(e){return Te(this.path)?new Vr(this.source,Ye(),this.snap.getImmediateChild(e)):new Vr(this.source,Ze(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,i,a){this.source=e,this.path=i,this.children=a,this.type=ui.MERGE}operationForChild(e){if(Te(this.path)){const i=this.children.subtree(new $e(e));return i.isEmpty()?null:i.value?new Vr(this.source,Ye(),i.value):new Ul(this.source,Ye(),i)}else return J(Ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ul(this.source,Ze(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,i,a){this.node_=e,this.fullyInitialized_=i,this.filtered_=a}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Te(e))return this.isFullyInitialized()&&!this.filtered_;const i=Ce(e);return this.isCompleteForChild(i)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function rN(s,e,i,a){const l=[],h=[];return e.forEach(d=>{d.type==="child_changed"&&s.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&h.push($I(d.childName,d.snapshotNode))}),_l(s,l,"child_removed",e,a,i),_l(s,l,"child_added",e,a,i),_l(s,l,"child_moved",h,a,i),_l(s,l,"child_changed",e,a,i),_l(s,l,"value",e,a,i),l}function _l(s,e,i,a,l,h){const d=a.filter(g=>g.type===i);d.sort((g,y)=>oN(s,g,y)),d.forEach(g=>{const y=aN(s,g,h);l.forEach(v=>{v.respondsTo(g.type)&&e.push(v.createEvent(y,s.query_))})})}function aN(s,e,i){return e.type==="value"||e.type==="child_removed"||(e.prevName=i.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function oN(s,e,i){if(e.childName==null||i.childName==null)throw Ja("Should only compare child_ events.");const a=new Re(e.childName,e.snapshotNode),l=new Re(i.childName,i.snapshotNode);return s.index_.compare(a,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(s,e){return{eventCache:s,serverCache:e}}function Il(s,e,i,a){return IT(new Kp(e,i,a),s.serverCache)}function NT(s,e,i,a){return IT(s.eventCache,new Kp(e,i,a))}function ap(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function qr(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bd;const lN=()=>(Bd||(Bd=new $t(X2)),Bd);class Qe{static fromObject(e){let i=new Qe(null);return Nn(e,(a,l)=>{i=i.set(new $e(a),l)}),i}constructor(e,i=lN()){this.value=e,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,i){if(this.value!=null&&i(this.value))return{path:Ye(),value:this.value};if(Te(e))return null;{const a=Ce(e),l=this.children.get(a);if(l!==null){const h=l.findRootMostMatchingPathAndValue(Ze(e),i);return h!=null?{path:Rt(new $e(a),h.path),value:h.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Te(e))return this;{const i=Ce(e),a=this.children.get(i);return a!==null?a.subtree(Ze(e)):new Qe(null)}}set(e,i){if(Te(e))return new Qe(i,this.children);{const a=Ce(e),h=(this.children.get(a)||new Qe(null)).set(Ze(e),i),d=this.children.insert(a,h);return new Qe(this.value,d)}}remove(e){if(Te(e))return this.children.isEmpty()?new Qe(null):new Qe(null,this.children);{const i=Ce(e),a=this.children.get(i);if(a){const l=a.remove(Ze(e));let h;return l.isEmpty()?h=this.children.remove(i):h=this.children.insert(i,l),this.value===null&&h.isEmpty()?new Qe(null):new Qe(this.value,h)}else return this}}get(e){if(Te(e))return this.value;{const i=Ce(e),a=this.children.get(i);return a?a.get(Ze(e)):null}}setTree(e,i){if(Te(e))return i;{const a=Ce(e),h=(this.children.get(a)||new Qe(null)).setTree(Ze(e),i);let d;return h.isEmpty()?d=this.children.remove(a):d=this.children.insert(a,h),new Qe(this.value,d)}}fold(e){return this.fold_(Ye(),e)}fold_(e,i){const a={};return this.children.inorderTraversal((l,h)=>{a[l]=h.fold_(Rt(e,l),i)}),i(e,this.value,a)}findOnPath(e,i){return this.findOnPath_(e,Ye(),i)}findOnPath_(e,i,a){const l=this.value?a(i,this.value):!1;if(l)return l;if(Te(e))return null;{const h=Ce(e),d=this.children.get(h);return d?d.findOnPath_(Ze(e),Rt(i,h),a):null}}foreachOnPath(e,i){return this.foreachOnPath_(e,Ye(),i)}foreachOnPath_(e,i,a){if(Te(e))return this;{this.value&&a(i,this.value);const l=Ce(e),h=this.children.get(l);return h?h.foreachOnPath_(Ze(e),Rt(i,l),a):new Qe(null)}}foreach(e){this.foreach_(Ye(),e)}foreach_(e,i){this.children.inorderTraversal((a,l)=>{l.foreach_(Rt(e,a),i)}),this.value&&i(e,this.value)}foreachChild(e){this.children.inorderTraversal((i,a)=>{a.value&&e(i,a.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.writeTree_=e}static empty(){return new qn(new Qe(null))}}function Nl(s,e,i){if(Te(e))return new qn(new Qe(i));{const a=s.writeTree_.findRootMostValueAndPath(e);if(a!=null){const l=a.path;let h=a.value;const d=Rn(l,e);return h=h.updateChild(d,i),new qn(s.writeTree_.set(l,h))}else{const l=new Qe(i),h=s.writeTree_.setTree(e,l);return new qn(h)}}}function Qv(s,e,i){let a=s;return Nn(i,(l,h)=>{a=Nl(a,Rt(e,l),h)}),a}function Zv(s,e){if(Te(e))return qn.empty();{const i=s.writeTree_.setTree(e,new Qe(null));return new qn(i)}}function op(s,e){return Yr(s,e)!=null}function Yr(s,e){const i=s.writeTree_.findRootMostValueAndPath(e);return i!=null?s.writeTree_.get(i.path).getChild(Rn(i.path,e)):null}function $v(s){const e=[],i=s.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(Ht,(a,l)=>{e.push(new Re(a,l))}):s.writeTree_.children.inorderTraversal((a,l)=>{l.value!=null&&e.push(new Re(a,l.value))}),e}function Ls(s,e){if(Te(e))return s;{const i=Yr(s,e);return i!=null?new qn(new Qe(i)):new qn(s.writeTree_.subtree(e))}}function lp(s){return s.writeTree_.isEmpty()}function $a(s,e){return OT(Ye(),s.writeTree_,e)}function OT(s,e,i){if(e.value!=null)return i.updateChild(s,e.value);{let a=null;return e.children.inorderTraversal((l,h)=>{l===".priority"?(J(h.value!==null,"Priority writes must always be leaf nodes"),a=h.value):i=OT(Rt(s,l),h,i)}),!i.getChild(s).isEmpty()&&a!==null&&(i=i.updateChild(Rt(s,".priority"),a)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(s,e){return UT(e,s)}function uN(s,e,i,a,l){J(a>s.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),s.allWrites.push({path:e,snap:i,writeId:a,visible:l}),l&&(s.visibleWrites=Nl(s.visibleWrites,e,i)),s.lastWriteId=a}function cN(s,e){for(let i=0;i<s.allWrites.length;i++){const a=s.allWrites[i];if(a.writeId===e)return a}return null}function hN(s,e){const i=s.allWrites.findIndex(g=>g.writeId===e);J(i>=0,"removeWrite called with nonexistent writeId.");const a=s.allWrites[i];s.allWrites.splice(i,1);let l=a.visible,h=!1,d=s.allWrites.length-1;for(;l&&d>=0;){const g=s.allWrites[d];g.visible&&(d>=i&&fN(g,a.path)?l=!1:jn(a.path,g.path)&&(h=!0)),d--}if(l){if(h)return dN(s),!0;if(a.snap)s.visibleWrites=Zv(s.visibleWrites,a.path);else{const g=a.children;Nn(g,y=>{s.visibleWrites=Zv(s.visibleWrites,Rt(a.path,y))})}return!0}else return!1}function fN(s,e){if(s.snap)return jn(s.path,e);for(const i in s.children)if(s.children.hasOwnProperty(i)&&jn(Rt(s.path,i),e))return!0;return!1}function dN(s){s.visibleWrites=MT(s.allWrites,pN,Ye()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function pN(s){return s.visible}function MT(s,e,i){let a=qn.empty();for(let l=0;l<s.length;++l){const h=s[l];if(e(h)){const d=h.path;let g;if(h.snap)jn(i,d)?(g=Rn(i,d),a=Nl(a,g,h.snap)):jn(d,i)&&(g=Rn(d,i),a=Nl(a,Ye(),h.snap.getChild(g)));else if(h.children){if(jn(i,d))g=Rn(i,d),a=Qv(a,g,h.children);else if(jn(d,i))if(g=Rn(d,i),Te(g))a=Qv(a,Ye(),h.children);else{const y=Wa(h.children,Ce(g));if(y){const v=y.getChild(Ze(g));a=Nl(a,Ye(),v)}}}else throw Ja("WriteRecord should have .snap or .children")}}return a}function kT(s,e,i,a,l){if(!a&&!l){const h=Yr(s.visibleWrites,e);if(h!=null)return h;{const d=Ls(s.visibleWrites,e);if(lp(d))return i;if(i==null&&!op(d,Ye()))return null;{const g=i||Ue.EMPTY_NODE;return $a(d,g)}}}else{const h=Ls(s.visibleWrites,e);if(!l&&lp(h))return i;if(!l&&i==null&&!op(h,Ye()))return null;{const d=function(v){return(v.visible||l)&&(!a||!~a.indexOf(v.writeId))&&(jn(v.path,e)||jn(e,v.path))},g=MT(s.allWrites,d,e),y=i||Ue.EMPTY_NODE;return $a(g,y)}}}function gN(s,e,i){let a=Ue.EMPTY_NODE;const l=Yr(s.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Ht,(h,d)=>{a=a.updateImmediateChild(h,d)}),a;if(i){const h=Ls(s.visibleWrites,e);return i.forEachChild(Ht,(d,g)=>{const y=$a(Ls(h,new $e(d)),g);a=a.updateImmediateChild(d,y)}),$v(h).forEach(d=>{a=a.updateImmediateChild(d.name,d.node)}),a}else{const h=Ls(s.visibleWrites,e);return $v(h).forEach(d=>{a=a.updateImmediateChild(d.name,d.node)}),a}}function mN(s,e,i,a,l){J(a||l,"Either existingEventSnap or existingServerSnap must exist");const h=Rt(e,i);if(op(s.visibleWrites,h))return null;{const d=Ls(s.visibleWrites,h);return lp(d)?l.getChild(i):$a(d,l.getChild(i))}}function _N(s,e,i,a){const l=Rt(e,i),h=Yr(s.visibleWrites,l);if(h!=null)return h;if(a.isCompleteForChild(i)){const d=Ls(s.visibleWrites,l);return $a(d,a.getNode().getImmediateChild(i))}else return null}function yN(s,e){return Yr(s.visibleWrites,e)}function vN(s,e,i,a,l,h,d){let g;const y=Ls(s.visibleWrites,e),v=Yr(y,Ye());if(v!=null)g=v;else if(i!=null)g=$a(y,i);else return[];if(g=g.withIndex(d),!g.isEmpty()&&!g.isLeafNode()){const b=[],I=d.getCompare(),O=h?g.getReverseIteratorFrom(a,d):g.getIteratorFrom(a,d);let Q=O.getNext();for(;Q&&b.length<l;)I(Q,a)!==0&&b.push(Q),Q=O.getNext();return b}else return[]}function EN(){return{visibleWrites:qn.empty(),allWrites:[],lastWriteId:-1}}function up(s,e,i,a){return kT(s.writeTree,s.treePath,e,i,a)}function xT(s,e){return gN(s.writeTree,s.treePath,e)}function Jv(s,e,i,a){return mN(s.writeTree,s.treePath,e,i,a)}function eh(s,e){return yN(s.writeTree,Rt(s.treePath,e))}function TN(s,e,i,a,l,h){return vN(s.writeTree,s.treePath,e,i,a,l,h)}function Xp(s,e,i){return _N(s.writeTree,s.treePath,e,i)}function LT(s,e){return UT(Rt(s.treePath,e),s.writeTree)}function UT(s,e){return{treePath:s,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(){this.changeMap=new Map}trackChildChange(e){const i=e.type,a=e.childName;J(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),J(a!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(a);if(l){const h=l.type;if(i==="child_added"&&h==="child_removed")this.changeMap.set(a,Yv(a,e.snapshotNode,l.snapshotNode));else if(i==="child_removed"&&h==="child_added")this.changeMap.delete(a);else if(i==="child_removed"&&h==="child_changed")this.changeMap.set(a,ZI(a,l.oldSnap));else if(i==="child_changed"&&h==="child_added")this.changeMap.set(a,QI(a,e.snapshotNode));else if(i==="child_changed"&&h==="child_changed")this.changeMap.set(a,Yv(a,e.snapshotNode,l.oldSnap));else throw Ja("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(a,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{getCompleteChild(e){return null}getChildAfterChild(e,i,a){return null}}const PT=new bN;class Wp{constructor(e,i,a=null){this.writes_=e,this.viewCache_=i,this.optCompleteServerCache_=a}getCompleteChild(e){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(e))return i.getNode().getImmediateChild(e);{const a=this.optCompleteServerCache_!=null?new Kp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xp(this.writes_,e,a)}}getChildAfterChild(e,i,a){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qr(this.viewCache_),h=TN(this.writes_,l,i,1,a,e);return h.length===0?null:h[0]}}function AN(s,e){J(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),J(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function wN(s,e,i,a,l){const h=new SN;let d,g;if(i.type===ui.OVERWRITE){const v=i;v.source.fromUser?d=cp(s,e,v.path,v.snap,a,l,h):(J(v.source.fromServer,"Unknown source."),g=v.source.tagged||e.serverCache.isFiltered()&&!Te(v.path),d=th(s,e,v.path,v.snap,a,l,g,h))}else if(i.type===ui.MERGE){const v=i;v.source.fromUser?d=RN(s,e,v.path,v.children,a,l,h):(J(v.source.fromServer,"Unknown source."),g=v.source.tagged||e.serverCache.isFiltered(),d=hp(s,e,v.path,v.children,a,l,g,h))}else if(i.type===ui.ACK_USER_WRITE){const v=i;v.revert?d=ON(s,e,v.path,a,l,h):d=IN(s,e,v.path,v.affectedTree,a,l,h)}else if(i.type===ui.LISTEN_COMPLETE)d=NN(s,e,i.path,a,h);else throw Ja("Unknown operation type: "+i.type);const y=h.getChanges();return CN(e,d,y),{viewCache:d,changes:y}}function CN(s,e,i){const a=e.eventCache;if(a.isFullyInitialized()){const l=a.getNode().isLeafNode()||a.getNode().isEmpty(),h=ap(s);(i.length>0||!s.eventCache.isFullyInitialized()||l&&!a.getNode().equals(h)||!a.getNode().getPriority().equals(h.getPriority()))&&i.push(WI(ap(e)))}}function zT(s,e,i,a,l,h){const d=e.eventCache;if(eh(a,i)!=null)return e;{let g,y;if(Te(i))if(J(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const v=qr(e),b=v instanceof Ue?v:Ue.EMPTY_NODE,I=xT(a,b);g=s.filter.updateFullNode(e.eventCache.getNode(),I,h)}else{const v=up(a,qr(e));g=s.filter.updateFullNode(e.eventCache.getNode(),v,h)}else{const v=Ce(i);if(v===".priority"){J(Ps(i)===1,"Can't have a priority with additional path components");const b=d.getNode();y=e.serverCache.getNode();const I=Jv(a,i,b,y);I!=null?g=s.filter.updatePriority(b,I):g=d.getNode()}else{const b=Ze(i);let I;if(d.isCompleteForChild(v)){y=e.serverCache.getNode();const O=Jv(a,i,d.getNode(),y);O!=null?I=d.getNode().getImmediateChild(v).updateChild(b,O):I=d.getNode().getImmediateChild(v)}else I=Xp(a,v,e.serverCache);I!=null?g=s.filter.updateChild(d.getNode(),v,I,b,l,h):g=d.getNode()}}return Il(e,g,d.isFullyInitialized()||Te(i),s.filter.filtersNodes())}}function th(s,e,i,a,l,h,d,g){const y=e.serverCache;let v;const b=d?s.filter:s.filter.getIndexedFilter();if(Te(i))v=b.updateFullNode(y.getNode(),a,null);else if(b.filtersNodes()&&!y.isFiltered()){const Q=y.getNode().updateChild(i,a);v=b.updateFullNode(y.getNode(),Q,null)}else{const Q=Ce(i);if(!y.isCompleteForPath(i)&&Ps(i)>1)return e;const K=Ze(i),te=y.getNode().getImmediateChild(Q).updateChild(K,a);Q===".priority"?v=b.updatePriority(y.getNode(),te):v=b.updateChild(y.getNode(),Q,te,K,PT,null)}const I=NT(e,v,y.isFullyInitialized()||Te(i),b.filtersNodes()),O=new Wp(l,I,h);return zT(s,I,i,l,O,g)}function cp(s,e,i,a,l,h,d){const g=e.eventCache;let y,v;const b=new Wp(l,e,h);if(Te(i))v=s.filter.updateFullNode(e.eventCache.getNode(),a,d),y=Il(e,v,!0,s.filter.filtersNodes());else{const I=Ce(i);if(I===".priority")v=s.filter.updatePriority(e.eventCache.getNode(),a),y=Il(e,v,g.isFullyInitialized(),g.isFiltered());else{const O=Ze(i),Q=g.getNode().getImmediateChild(I);let K;if(Te(O))K=a;else{const ie=b.getCompleteChild(I);ie!=null?pT(O)===".priority"&&ie.getChild(mT(O)).isEmpty()?K=ie:K=ie.updateChild(O,a):K=Ue.EMPTY_NODE}if(Q.equals(K))y=e;else{const ie=s.filter.updateChild(g.getNode(),I,K,O,b,d);y=Il(e,ie,g.isFullyInitialized(),s.filter.filtersNodes())}}}return y}function e0(s,e){return s.eventCache.isCompleteForChild(e)}function RN(s,e,i,a,l,h,d){let g=e;return a.foreach((y,v)=>{const b=Rt(i,y);e0(e,Ce(b))&&(g=cp(s,g,b,v,l,h,d))}),a.foreach((y,v)=>{const b=Rt(i,y);e0(e,Ce(b))||(g=cp(s,g,b,v,l,h,d))}),g}function t0(s,e,i){return i.foreach((a,l)=>{e=e.updateChild(a,l)}),e}function hp(s,e,i,a,l,h,d,g){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let y=e,v;Te(i)?v=a:v=new Qe(null).setTree(i,a);const b=e.serverCache.getNode();return v.children.inorderTraversal((I,O)=>{if(b.hasChild(I)){const Q=e.serverCache.getNode().getImmediateChild(I),K=t0(s,Q,O);y=th(s,y,new $e(I),K,l,h,d,g)}}),v.children.inorderTraversal((I,O)=>{const Q=!e.serverCache.isCompleteForChild(I)&&O.value===null;if(!b.hasChild(I)&&!Q){const K=e.serverCache.getNode().getImmediateChild(I),ie=t0(s,K,O);y=th(s,y,new $e(I),ie,l,h,d,g)}}),y}function IN(s,e,i,a,l,h,d){if(eh(l,i)!=null)return e;const g=e.serverCache.isFiltered(),y=e.serverCache;if(a.value!=null){if(Te(i)&&y.isFullyInitialized()||y.isCompleteForPath(i))return th(s,e,i,y.getNode().getChild(i),l,h,g,d);if(Te(i)){let v=new Qe(null);return y.getNode().forEachChild(Xa,(b,I)=>{v=v.set(new $e(b),I)}),hp(s,e,i,v,l,h,g,d)}else return e}else{let v=new Qe(null);return a.foreach((b,I)=>{const O=Rt(i,b);y.isCompleteForPath(O)&&(v=v.set(b,y.getNode().getChild(O)))}),hp(s,e,i,v,l,h,g,d)}}function NN(s,e,i,a,l){const h=e.serverCache,d=NT(e,h.getNode(),h.isFullyInitialized()||Te(i),h.isFiltered());return zT(s,d,i,a,PT,l)}function ON(s,e,i,a,l,h){let d;if(eh(a,i)!=null)return e;{const g=new Wp(a,e,l),y=e.eventCache.getNode();let v;if(Te(i)||Ce(i)===".priority"){let b;if(e.serverCache.isFullyInitialized())b=up(a,qr(e));else{const I=e.serverCache.getNode();J(I instanceof Ue,"serverChildren would be complete if leaf node"),b=xT(a,I)}b=b,v=s.filter.updateFullNode(y,b,h)}else{const b=Ce(i);let I=Xp(a,b,e.serverCache);I==null&&e.serverCache.isCompleteForChild(b)&&(I=y.getImmediateChild(b)),I!=null?v=s.filter.updateChild(y,b,I,Ze(i),g,h):e.eventCache.getNode().hasChild(b)?v=s.filter.updateChild(y,b,Ue.EMPTY_NODE,Ze(i),g,h):v=y,v.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=up(a,qr(e)),d.isLeafNode()&&(v=s.filter.updateFullNode(v,d,h)))}return d=e.serverCache.isFullyInitialized()||eh(a,Ye())!=null,Il(e,v,d,s.filter.filtersNodes())}}function DN(s,e){const i=qr(s.viewCache_);return i&&(s.query._queryParams.loadsAllData()||!Te(e)&&!i.getImmediateChild(Ce(e)).isEmpty())?i.getChild(e):null}function n0(s,e,i,a){e.type===ui.MERGE&&e.source.queryId!==null&&(J(qr(s.viewCache_),"We should always have a full cache before handling merges"),J(ap(s.viewCache_),"Missing event cache, even though we have a server cache"));const l=s.viewCache_,h=wN(s.processor_,l,e,i,a);return AN(s.processor_,h.viewCache),J(h.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=h.viewCache,MN(s,h.changes,h.viewCache.eventCache.getNode())}function MN(s,e,i,a){const l=s.eventRegistrations_;return rN(s.eventGenerator_,e,i,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i0;function kN(s){J(!i0,"__referenceConstructor has already been defined"),i0=s}function Qp(s,e,i,a){const l=e.source.queryId;if(l!==null){const h=s.views.get(l);return J(h!=null,"SyncTree gave us an op for an invalid query."),n0(h,e,i,a)}else{let h=[];for(const d of s.views.values())h=h.concat(n0(d,e,i,a));return h}}function Zp(s,e){let i=null;for(const a of s.views.values())i=i||DN(a,e);return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s0;function xN(s){J(!s0,"__referenceConstructor has already been defined"),s0=s}class r0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Qe(null),this.pendingWriteTree_=EN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function LN(s,e,i,a,l){return uN(s.pendingWriteTree_,e,i,a,l),l?ph(s,new Vr(wT(),e,i)):[]}function Va(s,e,i=!1){const a=cN(s.pendingWriteTree_,e);if(hN(s.pendingWriteTree_,e)){let h=new Qe(null);return a.snap!=null?h=h.set(Ye(),!0):Nn(a.children,d=>{h=h.set(new $e(d),!0)}),ph(s,new Jc(a.path,h,i))}else return[]}function dh(s,e,i){return ph(s,new Vr(CT(),e,i))}function UN(s,e,i){const a=Qe.fromObject(i);return ph(s,new Ul(CT(),e,a))}function PN(s,e,i,a){const l=VT(s,a);if(l!=null){const h=qT(l),d=h.path,g=h.queryId,y=Rn(d,e),v=new Vr(RT(g),y,i);return GT(s,d,v)}else return[]}function zN(s,e,i,a){const l=VT(s,a);if(l){const h=qT(l),d=h.path,g=h.queryId,y=Rn(d,e),v=Qe.fromObject(i),b=new Ul(RT(g),y,v);return GT(s,d,b)}else return[]}function HT(s,e,i){const l=s.pendingWriteTree_,h=s.syncPointTree_.findOnPath(e,(d,g)=>{const y=Rn(d,e),v=Zp(g,y);if(v)return v});return kT(l,e,h,i,!0)}function ph(s,e){return BT(e,s.syncPointTree_,null,DT(s.pendingWriteTree_,Ye()))}function BT(s,e,i,a){if(Te(s.path))return jT(s,e,i,a);{const l=e.get(Ye());i==null&&l!=null&&(i=Zp(l,Ye()));let h=[];const d=Ce(s.path),g=s.operationForChild(d),y=e.children.get(d);if(y&&g){const v=i?i.getImmediateChild(d):null,b=LT(a,d);h=h.concat(BT(g,y,v,b))}return l&&(h=h.concat(Qp(l,s,a,i))),h}}function jT(s,e,i,a){const l=e.get(Ye());i==null&&l!=null&&(i=Zp(l,Ye()));let h=[];return e.children.inorderTraversal((d,g)=>{const y=i?i.getImmediateChild(d):null,v=LT(a,d),b=s.operationForChild(d);b&&(h=h.concat(jT(b,g,y,v)))}),l&&(h=h.concat(Qp(l,s,a,i))),h}function VT(s,e){return s.tagToQueryMap.get(e)}function qT(s){const e=s.indexOf("$");return J(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new $e(s.substr(0,e))}}function GT(s,e,i){const a=s.syncPointTree_.get(e);J(a,"Missing sync point for query tag that we're tracking");const l=DT(s.pendingWriteTree_,e);return Qp(a,i,l,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e){this.node_=e}getImmediateChild(e){const i=this.node_.getImmediateChild(e);return new $p(i)}node(){return this.node_}}class Jp{constructor(e,i){this.syncTree_=e,this.path_=i}getImmediateChild(e){const i=Rt(this.path_,e);return new Jp(this.syncTree_,i)}node(){return HT(this.syncTree_,this.path_)}}const HN=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},a0=function(s,e,i){if(!s||typeof s!="object")return s;if(J(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return BN(s[".sv"],e,i);if(typeof s[".sv"]=="object")return jN(s[".sv"],e);J(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},BN=function(s,e,i){switch(s){case"timestamp":return i.timestamp;default:J(!1,"Unexpected server value: "+s)}},jN=function(s,e,i){s.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const a=s.increment;typeof a!="number"&&J(!1,"Unexpected increment value: "+a);const l=e.node();if(J(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return a;const d=l.getValue();return typeof d!="number"?a:d+a},VN=function(s,e,i,a){return eg(e,new Jp(i,s),a)},qN=function(s,e,i){return eg(s,new $p(e),i)};function eg(s,e,i){const a=s.getPriority().val(),l=a0(a,e.getImmediateChild(".priority"),i);let h;if(s.isLeafNode()){const d=s,g=a0(d.getValue(),e,i);return g!==d.getValue()||l!==d.getPriority().val()?new wt(g,zt(l)):s}else{const d=s;return h=d,l!==d.getPriority().val()&&(h=h.updatePriority(new wt(l))),d.forEachChild(Ht,(g,y)=>{const v=eg(y,e.getImmediateChild(g),i);v!==y&&(h=h.updateImmediateChild(g,v))}),h}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e="",i=null,a={children:{},childCount:0}){this.name=e,this.parent=i,this.node=a}}function ng(s,e){let i=e instanceof $e?e:new $e(e),a=s,l=Ce(i);for(;l!==null;){const h=Wa(a.node.children,l)||{children:{},childCount:0};a=new tg(l,a,h),i=Ze(i),l=Ce(i)}return a}function io(s){return s.node.value}function FT(s,e){s.node.value=e,fp(s)}function YT(s){return s.node.childCount>0}function GN(s){return io(s)===void 0&&!YT(s)}function gh(s,e){Nn(s.node.children,(i,a)=>{e(new tg(i,s,a))})}function KT(s,e,i,a){i&&e(s),gh(s,l=>{KT(l,e,!0)})}function FN(s,e,i){let a=s.parent;for(;a!==null;){if(e(a))return!0;a=a.parent}return!1}function Wl(s){return new $e(s.parent===null?s.name:Wl(s.parent)+"/"+s.name)}function fp(s){s.parent!==null&&YN(s.parent,s.name,s)}function YN(s,e,i){const a=GN(i),l=Zi(s.node.children,e);a&&l?(delete s.node.children[e],s.node.childCount--,fp(s)):!a&&!l&&(s.node.children[e]=i.node,s.node.childCount++,fp(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=/[\[\].#$\/\u0000-\u001F\u007F]/,XN=/[\[\].#$\u0000-\u001F\u007F]/,jd=10*1024*1024,XT=function(s){return typeof s=="string"&&s.length!==0&&!KN.test(s)},WN=function(s){return typeof s=="string"&&s.length!==0&&!XN.test(s)},QN=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),WN(s)},WT=function(s,e,i){const a=i instanceof $e?new NI(i,s):i;if(e===void 0)throw new Error(s+"contains undefined "+Ir(a));if(typeof e=="function")throw new Error(s+"contains a function "+Ir(a)+" with contents = "+e.toString());if(KE(e))throw new Error(s+"contains "+e.toString()+" "+Ir(a));if(typeof e=="string"&&e.length>jd/3&&ah(e)>jd)throw new Error(s+"contains a string greater than "+jd+" utf8 bytes "+Ir(a)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,h=!1;if(Nn(e,(d,g)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(h=!0,!XT(d)))throw new Error(s+" contains an invalid key ("+d+") "+Ir(a)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);OI(a,d),WT(s,g,a),DI(a)}),l&&h)throw new Error(s+' contains ".value" child '+Ir(a)+" in addition to actual children.")}},ZN=function(s,e){const i=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!XT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!QN(i))throw new Error(db(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function JN(s,e){let i=null;for(let a=0;a<e.length;a++){const l=e[a],h=l.getPath();i!==null&&!_T(h,i.path)&&(s.eventLists_.push(i),i=null),i===null&&(i={events:[],path:h}),i.events.push(l)}i&&s.eventLists_.push(i)}function Kr(s,e,i){JN(s,i),eO(s,a=>jn(a,e)||jn(e,a))}function eO(s,e){s.recursionDepth_++;let i=!0;for(let a=0;a<s.eventLists_.length;a++){const l=s.eventLists_[a];if(l){const h=l.path;e(h)?(tO(s.eventLists_[a]),s.eventLists_[a]=null):i=!1}}i&&(s.eventLists_=[]),s.recursionDepth_--}function tO(s){for(let e=0;e<s.events.length;e++){const i=s.events[e];if(i!==null){s.events[e]=null;const a=i.getEventRunner();Cl&&Pt("event: "+i.toString()),Kl(a)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO="repo_interrupt",iO=25;class sO{constructor(e,i,a,l){this.repoInfo_=e,this.forceRestClient_=i,this.authTokenProvider_=a,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $N,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$c(),this.transactionQueueTree_=new tg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rO(s,e,i){if(s.stats_=Vp(s.repoInfo_),s.forceRestClient_||eI())s.server_=new Zc(s.repoInfo_,(a,l,h,d)=>{o0(s,a,l,h,d)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>l0(s,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{kt(i)}catch(a){throw new Error("Invalid authOverride provided: "+a)}}s.persistentConnection_=new Yi(s.repoInfo_,e,(a,l,h,d)=>{o0(s,a,l,h,d)},a=>{l0(s,a)},a=>{oO(s,a)},s.authTokenProvider_,s.appCheckProvider_,i),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(a=>{s.server_.refreshAuthToken(a)}),s.appCheckProvider_.addTokenChangeListener(a=>{s.server_.refreshAppCheckToken(a.token)}),s.statsReporter_=rI(s.repoInfo_,()=>new sN(s.stats_,s.server_)),s.infoData_=new JI,s.infoSyncTree_=new r0({startListening:(a,l,h,d)=>{let g=[];const y=s.infoData_.getNode(a._path);return y.isEmpty()||(g=dh(s.infoSyncTree_,a._path,y),setTimeout(()=>{d("ok")},0)),g},stopListening:()=>{}}),ig(s,"connected",!1),s.serverSyncTree_=new r0({startListening:(a,l,h,d)=>(s.server_.listen(a,h,l,(g,y)=>{const v=d(g,y);Kr(s.eventQueue_,a._path,v)}),[]),stopListening:(a,l)=>{s.server_.unlisten(a,l)}})}function aO(s){const i=s.infoData_.getNode(new $e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function QT(s){return HN({timestamp:aO(s)})}function o0(s,e,i,a,l){s.dataUpdateCount++;const h=new $e(e);i=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,i):i;let d=[];if(l)if(a){const y=Pc(i,v=>zt(v));d=zN(s.serverSyncTree_,h,y,l)}else{const y=zt(i);d=PN(s.serverSyncTree_,h,y,l)}else if(a){const y=Pc(i,v=>zt(v));d=UN(s.serverSyncTree_,h,y)}else{const y=zt(i);d=dh(s.serverSyncTree_,h,y)}let g=h;d.length>0&&(g=rg(s,h)),Kr(s.eventQueue_,g,d)}function l0(s,e){ig(s,"connected",e),e===!1&&uO(s)}function oO(s,e){Nn(e,(i,a)=>{ig(s,i,a)})}function ig(s,e,i){const a=new $e("/.info/"+e),l=zt(i);s.infoData_.updateSnapshot(a,l);const h=dh(s.infoSyncTree_,a,l);Kr(s.eventQueue_,a,h)}function lO(s){return s.nextWriteId_++}function uO(s){ZT(s,"onDisconnectEvents");const e=QT(s),i=$c();rp(s.onDisconnect_,Ye(),(l,h)=>{const d=VN(l,h,s.serverSyncTree_,e);AT(i,l,d)});let a=[];rp(i,Ye(),(l,h)=>{a=a.concat(dh(s.serverSyncTree_,l,h));const d=dO(s,l);rg(s,d)}),s.onDisconnect_=$c(),Kr(s.eventQueue_,Ye(),a)}function cO(s){s.persistentConnection_&&s.persistentConnection_.interrupt(nO)}function ZT(s,...e){let i="";s.persistentConnection_&&(i=s.persistentConnection_.id+":"),Pt(i,...e)}function $T(s,e,i){return HT(s.serverSyncTree_,e,i)||Ue.EMPTY_NODE}function sg(s,e=s.transactionQueueTree_){if(e||mh(s,e),io(e)){const i=eS(s,e);J(i.length>0,"Sending zero length transaction queue"),i.every(l=>l.status===0)&&hO(s,Wl(e),i)}else YT(e)&&gh(e,i=>{sg(s,i)})}function hO(s,e,i){const a=i.map(v=>v.currentWriteId),l=$T(s,e,a);let h=l;const d=l.hash();for(let v=0;v<i.length;v++){const b=i[v];J(b.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),b.status=1,b.retryCount++;const I=Rn(e,b.path);h=h.updateChild(I,b.currentOutputSnapshotRaw)}const g=h.val(!0),y=e;s.server_.put(y.toString(),g,v=>{ZT(s,"transaction put response",{path:y.toString(),status:v});let b=[];if(v==="ok"){const I=[];for(let O=0;O<i.length;O++)i[O].status=2,b=b.concat(Va(s.serverSyncTree_,i[O].currentWriteId)),i[O].onComplete&&I.push(()=>i[O].onComplete(null,!0,i[O].currentOutputSnapshotResolved)),i[O].unwatcher();mh(s,ng(s.transactionQueueTree_,e)),sg(s,s.transactionQueueTree_),Kr(s.eventQueue_,e,b);for(let O=0;O<I.length;O++)Kl(I[O])}else{if(v==="datastale")for(let I=0;I<i.length;I++)i[I].status===3?i[I].status=4:i[I].status=0;else{fn("transaction at "+y.toString()+" failed: "+v);for(let I=0;I<i.length;I++)i[I].status=4,i[I].abortReason=v}rg(s,e)}},d)}function rg(s,e){const i=JT(s,e),a=Wl(i),l=eS(s,i);return fO(s,l,a),a}function fO(s,e,i){if(e.length===0)return;const a=[];let l=[];const d=e.filter(g=>g.status===0).map(g=>g.currentWriteId);for(let g=0;g<e.length;g++){const y=e[g],v=Rn(i,y.path);let b=!1,I;if(J(v!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),y.status===4)b=!0,I=y.abortReason,l=l.concat(Va(s.serverSyncTree_,y.currentWriteId,!0));else if(y.status===0)if(y.retryCount>=iO)b=!0,I="maxretry",l=l.concat(Va(s.serverSyncTree_,y.currentWriteId,!0));else{const O=$T(s,y.path,d);y.currentInputSnapshot=O;const Q=e[g].update(O.val());if(Q!==void 0){WT("transaction failed: Data returned ",Q,y.path);let K=zt(Q);typeof Q=="object"&&Q!=null&&Zi(Q,".priority")||(K=K.updatePriority(O.getPriority()));const te=y.currentWriteId,xe=QT(s),Se=qN(K,O,xe);y.currentOutputSnapshotRaw=K,y.currentOutputSnapshotResolved=Se,y.currentWriteId=lO(s),d.splice(d.indexOf(te),1),l=l.concat(LN(s.serverSyncTree_,y.path,Se,y.currentWriteId,y.applyLocally)),l=l.concat(Va(s.serverSyncTree_,te,!0))}else b=!0,I="nodata",l=l.concat(Va(s.serverSyncTree_,y.currentWriteId,!0))}Kr(s.eventQueue_,i,l),l=[],b&&(e[g].status=2,function(O){setTimeout(O,Math.floor(0))}(e[g].unwatcher),e[g].onComplete&&(I==="nodata"?a.push(()=>e[g].onComplete(null,!1,e[g].currentInputSnapshot)):a.push(()=>e[g].onComplete(new Error(I),!1,null))))}mh(s,s.transactionQueueTree_);for(let g=0;g<a.length;g++)Kl(a[g]);sg(s,s.transactionQueueTree_)}function JT(s,e){let i,a=s.transactionQueueTree_;for(i=Ce(e);i!==null&&io(a)===void 0;)a=ng(a,i),e=Ze(e),i=Ce(e);return a}function eS(s,e){const i=[];return tS(s,e,i),i.sort((a,l)=>a.order-l.order),i}function tS(s,e,i){const a=io(e);if(a)for(let l=0;l<a.length;l++)i.push(a[l]);gh(e,l=>{tS(s,l,i)})}function mh(s,e){const i=io(e);if(i){let a=0;for(let l=0;l<i.length;l++)i[l].status!==2&&(i[a]=i[l],a++);i.length=a,FT(e,i.length>0?i:void 0)}gh(e,a=>{mh(s,a)})}function dO(s,e){const i=Wl(JT(s,e)),a=ng(s.transactionQueueTree_,e);return FN(a,l=>{Vd(s,l)}),Vd(s,a),KT(a,l=>{Vd(s,l)}),i}function Vd(s,e){const i=io(e);if(i){const a=[];let l=[],h=-1;for(let d=0;d<i.length;d++)i[d].status===3||(i[d].status===1?(J(h===d-1,"All SENT items should be at beginning of queue."),h=d,i[d].status=3,i[d].abortReason="set"):(J(i[d].status===0,"Unexpected transaction status in abort"),i[d].unwatcher(),l=l.concat(Va(s.serverSyncTree_,i[d].currentWriteId,!0)),i[d].onComplete&&a.push(i[d].onComplete.bind(null,new Error("set"),!1,null))));h===-1?FT(e,void 0):i.length=h+1,Kr(s.eventQueue_,Wl(e),l);for(let d=0;d<a.length;d++)Kl(a[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(s){let e="";const i=s.split("/");for(let a=0;a<i.length;a++)if(i[a].length>0){let l=i[a];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function gO(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const i of s.split("&")){if(i.length===0)continue;const a=i.split("=");a.length===2?e[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):fn(`Invalid query segment '${i}' in query '${s}'`)}return e}const u0=function(s,e){const i=mO(s),a=i.namespace;i.domain==="firebase.com"&&Qi(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!a||a==="undefined")&&i.domain!=="localhost"&&Qi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||Y2();const l=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new rT(i.host,i.secure,a,l,e,"",a!==i.subdomain),path:new $e(i.pathString)}},mO=function(s){let e="",i="",a="",l="",h="",d=!0,g="https",y=443;if(typeof s=="string"){let v=s.indexOf("//");v>=0&&(g=s.substring(0,v-1),s=s.substring(v+2));let b=s.indexOf("/");b===-1&&(b=s.length);let I=s.indexOf("?");I===-1&&(I=s.length),e=s.substring(0,Math.min(b,I)),b<I&&(l=pO(s.substring(b,I)));const O=gO(s.substring(Math.min(s.length,I)));v=e.indexOf(":"),v>=0?(d=g==="https"||g==="wss",y=parseInt(e.substring(v+1),10)):v=e.length;const Q=e.slice(0,v);if(Q.toLowerCase()==="localhost")i="localhost";else if(Q.split(".").length<=2)i=Q;else{const K=e.indexOf(".");a=e.substring(0,K).toLowerCase(),i=e.substring(K+1),h=a}"ns"in O&&(h=O.ns)}return{host:e,port:y,domain:i,subdomain:a,secure:d,scheme:g,pathString:l,namespace:h}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,i,a,l){this._repo=e,this._path=i,this._queryParams=a,this._orderByCalled=l}get key(){return Te(this._path)?null:pT(this._path)}get ref(){return new so(this._repo,this._path)}get _queryIdentifier(){const e=Xv(this._queryParams),i=Bp(e);return i==="{}"?"default":i}get _queryObject(){return Xv(this._queryParams)}isEqual(e){if(e=en(e),!(e instanceof ag))return!1;const i=this._repo===e._repo,a=_T(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return i&&a&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+II(this._path)}}class so extends ag{constructor(e,i){super(e,i,new Yp,!1)}get parent(){const e=mT(this._path);return e===null?null:new so(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}kN(so);xN(so);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O="FIREBASE_DATABASE_EMULATOR_HOST",dp={};let yO=!1;function vO(s,e,i,a){const l=e.lastIndexOf(":"),h=e.substring(0,l),d=zs(h);s.repoInfo_=new rT(e,d,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,i),a&&(s.authTokenProvider_=a)}function EO(s,e,i,a,l){let h=a||s.options.databaseURL;h===void 0&&(s.options.projectId||Qi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pt("Using default host for project ",s.options.projectId),h=`${s.options.projectId}-default-rtdb.firebaseio.com`);let d=u0(h,l),g=d.repoInfo,y;typeof process<"u"&&Nv&&(y=Nv[_O]),y?(h=`http://${y}?ns=${g.namespace}`,d=u0(h,l),g=d.repoInfo):d.repoInfo.secure;const v=new nI(s.name,s.options,e);ZN("Invalid Firebase Database URL",d),Te(d.path)||Qi("Database URL must point to the root of a Firebase Database (not including a child path).");const b=SO(g,s,v,new tI(s,i));return new bO(b,s)}function TO(s,e){const i=dp[e];(!i||i[s.key]!==s)&&Qi(`Database ${e}(${s.repoInfo_}) has already been deleted.`),cO(s),delete i[s.key]}function SO(s,e,i,a){let l=dp[e.name];l||(l={},dp[e.name]=l);let h=l[s.toURLString()];return h&&Qi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),h=new sO(s,yO,i,a),l[s.toURLString()]=h,h}class bO{constructor(e,i){this._repoInternal=e,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new so(this._repo,Ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(TO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qi("Cannot call "+e+" on a deleted database.")}}function AO(s=zl(),e){const i=$i(s,"database").getImmediate({identifier:e});if(!i._instanceStarted){const a=_p("database");a&&wO(i,...a)}return i}function wO(s,e,i,a={}){s=en(s),s._checkNotDeleted("useEmulator");const l=`${e}:${i}`,h=s._repoInternal;if(s._instanceStarted){if(l===s._repoInternal.repoInfo_.host&&Ki(a,h.repoInfo_.emulatorOptions))return;Qi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(h.repoInfo_.nodeAdmin)a.mockUserToken&&Qi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new xc(xc.OWNER);else if(a.mockUserToken){const g=typeof a.mockUserToken=="string"?a.mockUserToken:vp(a.mockUserToken,s.app.options.projectId);d=new xc(g)}zs(e)&&(sh(e),rh("Database",!0)),vO(h,l,a,d)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(s){B2(Hs),In(new dn("database",(e,{instanceIdentifier:i})=>{const a=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),h=e.getProvider("app-check-internal");return EO(a,l,h,i)},"PUBLIC").setMultipleInstances(!0)),Bt(Ov,Dv,s),Bt(Ov,Dv,"esm2020")}Yi.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};Yi.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};CO();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="firebasestorage.googleapis.com",RO="storageBucket",IO=120*1e3,NO=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends On{constructor(e,i,a=0){super(qd(e),`Firebase Storage: ${i} (${qd(e)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,di.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fi;(function(s){s.UNKNOWN="unknown",s.OBJECT_NOT_FOUND="object-not-found",s.BUCKET_NOT_FOUND="bucket-not-found",s.PROJECT_NOT_FOUND="project-not-found",s.QUOTA_EXCEEDED="quota-exceeded",s.UNAUTHENTICATED="unauthenticated",s.UNAUTHORIZED="unauthorized",s.UNAUTHORIZED_APP="unauthorized-app",s.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",s.INVALID_CHECKSUM="invalid-checksum",s.CANCELED="canceled",s.INVALID_EVENT_NAME="invalid-event-name",s.INVALID_URL="invalid-url",s.INVALID_DEFAULT_BUCKET="invalid-default-bucket",s.NO_DEFAULT_BUCKET="no-default-bucket",s.CANNOT_SLICE_BLOB="cannot-slice-blob",s.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",s.NO_DOWNLOAD_URL="no-download-url",s.INVALID_ARGUMENT="invalid-argument",s.INVALID_ARGUMENT_COUNT="invalid-argument-count",s.APP_DELETED="app-deleted",s.INVALID_ROOT_OPERATION="invalid-root-operation",s.INVALID_FORMAT="invalid-format",s.INTERNAL_ERROR="internal-error",s.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fi||(fi={}));function qd(s){return"storage/"+s}function OO(){const s="An unknown error occurred, please check the error payload for server response.";return new di(fi.UNKNOWN,s)}function DO(){return new di(fi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function MO(){return new di(fi.CANCELED,"User canceled the upload/download.")}function kO(s){return new di(fi.INVALID_URL,"Invalid URL '"+s+"'.")}function xO(s){return new di(fi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.")}function c0(s){return new di(fi.INVALID_ARGUMENT,s)}function iS(){return new di(fi.APP_DELETED,"The Firebase app was deleted.")}function LO(s){return new di(fi.INVALID_ROOT_OPERATION,"The operation '"+s+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,i){this.bucket=e,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,i){let a;try{a=Vn.makeFromUrl(e,i)}catch{return new Vn(e,"")}if(a.path==="")return a;throw xO(e)}static makeFromUrl(e,i){let a=null;const l="([A-Za-z0-9.\\-_]+)";function h(Ee){Ee.path.charAt(Ee.path.length-1)==="/"&&(Ee.path_=Ee.path_.slice(0,-1))}const d="(/(.*))?$",g=new RegExp("^gs://"+l+d,"i"),y={bucket:1,path:3};function v(Ee){Ee.path_=decodeURIComponent(Ee.path)}const b="v[A-Za-z0-9_]+",I=i.replace(/[.]/g,"\\."),O="(/([^?#]*).*)?$",Q=new RegExp(`^https?://${I}/${b}/b/${l}/o${O}`,"i"),K={bucket:1,path:3},ie=i===nS?"(?:storage.googleapis.com|storage.cloud.google.com)":i,te="([^?#]*)",xe=new RegExp(`^https?://${ie}/${l}/${te}`,"i"),fe=[{regex:g,indices:y,postModify:h},{regex:Q,indices:K,postModify:v},{regex:xe,indices:{bucket:1,path:2},postModify:v}];for(let Ee=0;Ee<fe.length;Ee++){const de=fe[Ee],je=de.regex.exec(e);if(je){const k=je[de.indices.bucket];let S=je[de.indices.path];S||(S=""),a=new Vn(k,S),de.postModify(a);break}}if(a==null)throw kO(e);return a}}class UO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(s,e,i){let a=1,l=null,h=null,d=!1,g=0;function y(){return g===2}let v=!1;function b(...te){v||(v=!0,e.apply(null,te))}function I(te){l=setTimeout(()=>{l=null,s(Q,y())},te)}function O(){h&&clearTimeout(h)}function Q(te,...xe){if(v){O();return}if(te){O(),b.call(null,te,...xe);return}if(y()||d){O(),b.call(null,te,...xe);return}a<64&&(a*=2);let fe;g===1?(g=2,fe=0):fe=(a+Math.random())*1e3,I(fe)}let K=!1;function ie(te){K||(K=!0,O(),!v&&(l!==null?(te||(g=2),clearTimeout(l),I(0)):te||(g=1)))}return I(0),h=setTimeout(()=>{d=!0,ie(!0)},i),ie}function zO(s){s(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(s){return s!==void 0}function h0(s,e,i,a){if(a<e)throw c0(`Invalid value for '${s}'. Expected ${e} or greater.`);if(a>i)throw c0(`Invalid value for '${s}'. Expected ${i} or less.`)}function BO(s){const e=encodeURIComponent;let i="?";for(const a in s)if(s.hasOwnProperty(a)){const l=e(a)+"="+e(s[a]);i=i+l+"&"}return i=i.slice(0,-1),i}var nh;(function(s){s[s.NO_ERROR=0]="NO_ERROR",s[s.NETWORK_ERROR=1]="NETWORK_ERROR",s[s.ABORT=2]="ABORT"})(nh||(nh={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(s,e){const i=s>=500&&s<600,l=[408,429].indexOf(s)!==-1,h=e.indexOf(s)!==-1;return i||l||h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,i,a,l,h,d,g,y,v,b,I,O=!0,Q=!1){this.url_=e,this.method_=i,this.headers_=a,this.body_=l,this.successCodes_=h,this.additionalRetryCodes_=d,this.callback_=g,this.errorCallback_=y,this.timeout_=v,this.progressCallback_=b,this.connectionFactory_=I,this.retry=O,this.isUsingEmulator=Q,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((K,ie)=>{this.resolve_=K,this.reject_=ie,this.start_()})}start_(){const e=(a,l)=>{if(l){a(!1,new Rc(!1,null,!0));return}const h=this.connectionFactory_();this.pendingConnection_=h;const d=g=>{const y=g.loaded,v=g.lengthComputable?g.total:-1;this.progressCallback_!==null&&this.progressCallback_(y,v)};this.progressCallback_!==null&&h.addUploadProgressListener(d),h.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&h.removeUploadProgressListener(d),this.pendingConnection_=null;const g=h.getErrorCode()===nh.NO_ERROR,y=h.getStatus();if(!g||jO(y,this.additionalRetryCodes_)&&this.retry){const b=h.getErrorCode()===nh.ABORT;a(!1,new Rc(!1,null,b));return}const v=this.successCodes_.indexOf(y)!==-1;a(!0,new Rc(v,h))})},i=(a,l)=>{const h=this.resolve_,d=this.reject_,g=l.connection;if(l.wasSuccessCode)try{const y=this.callback_(g,g.getResponse());HO(y)?h(y):h()}catch(y){d(y)}else if(g!==null){const y=OO();y.serverResponse=g.getErrorText(),this.errorCallback_?d(this.errorCallback_(g,y)):d(y)}else if(l.canceled){const y=this.appDelete_?iS():MO();d(y)}else{const y=DO();d(y)}};this.canceled_?i(!1,new Rc(!1,null,!0)):this.backoffId_=PO(e,i,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Rc{constructor(e,i,a){this.wasSuccessCode=e,this.connection=i,this.canceled=!!a}}function qO(s,e){e!==null&&e.length>0&&(s.Authorization="Firebase "+e)}function GO(s,e){s["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function FO(s,e){e&&(s["X-Firebase-GMPID"]=e)}function YO(s,e){e!==null&&(s["X-Firebase-AppCheck"]=e)}function KO(s,e,i,a,l,h,d=!0,g=!1){const y=BO(s.urlParams),v=s.url+y,b=Object.assign({},s.headers);return FO(b,e),qO(b,i),GO(b,h),YO(b,a),new VO(v,s.method,b,s.body,s.successCodes,s.additionalRetryCodes,s.handler,s.errorHandler,s.timeout,s.progressCallback,l,d,g)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(s){if(s.length===0)return null;const e=s.lastIndexOf("/");return e===-1?"":s.slice(0,e)}function WO(s){const e=s.lastIndexOf("/",s.length-2);return e===-1?s:s.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,i){this._service=e,i instanceof Vn?this._location=i:this._location=Vn.makeFromUrl(i,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,i){return new ih(e,i)}get root(){const e=new Vn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return WO(this._location.path)}get storage(){return this._service}get parent(){const e=XO(this._location.path);if(e===null)return null;const i=new Vn(this._location.bucket,e);return new ih(this._service,i)}_throwIfRoot(e){if(this._location.path==="")throw LO(e)}}function f0(s,e){const i=e?.[RO];return i==null?null:Vn.makeFromBucketSpec(i,s)}function QO(s,e,i,a={}){s.host=`${e}:${i}`;const l=zs(e);l&&(sh(`https://${s.host}/b`),rh("Storage",!0)),s._isUsingEmulator=!0,s._protocol=l?"https":"http";const{mockUserToken:h}=a;h&&(s._overrideAuthToken=typeof h=="string"?h:vp(h,s.app.options.projectId))}class ZO{constructor(e,i,a,l,h,d=!1){this.app=e,this._authProvider=i,this._appCheckProvider=a,this._url=l,this._firebaseVersion=h,this._isUsingEmulator=d,this._bucket=null,this._host=nS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IO,this._maxUploadRetryTime=NO,this._requests=new Set,l!=null?this._bucket=Vn.makeFromBucketSpec(l,this._host):this._bucket=f0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vn.makeFromBucketSpec(this._url,e):this._bucket=f0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){h0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){h0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const i=await e.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){if(Zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ih(this,e)}_makeRequest(e,i,a,l,h=!0){if(this._deleted)return new UO(iS());{const d=KO(e,this._appId,a,l,i,this._firebaseVersion,h,this._isUsingEmulator);return this._requests.add(d),d.getPromise().then(()=>this._requests.delete(d),()=>this._requests.delete(d)),d}}async makeRequestWithTokens(e,i){const[a,l]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,i,a,l).getPromise()}}const d0="@firebase/storage",p0="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="storage";function $O(s=zl(),e){s=en(s);const a=$i(s,sS).getImmediate({identifier:e}),l=_p("storage");return l&&JO(a,...l),a}function JO(s,e,i,a={}){QO(s,e,i,a)}function eD(s,{instanceIdentifier:e}){const i=s.getProvider("app").getImmediate(),a=s.getProvider("auth-internal"),l=s.getProvider("app-check-internal");return new ZO(i,a,l,e,Hs)}function tD(){In(new dn(sS,eD,"PUBLIC").setMultipleInstances(!0)),Bt(d0,p0,""),Bt(d0,p0,"esm2020")}tD();const nD={apiKey:"AIzaSyCUeP_xs69ei-yMrHEi2Y2I3C4iMbVR8zI",authDomain:"free-fire-tornament-6cee2.firebaseapp.com",databaseURL:"https://free-fire-tornament-6cee2-default-rtdb.firebaseio.com",projectId:"free-fire-tornament-6cee2",storageBucket:"free-fire-tornament-6cee2.firebasestorage.app",messagingSenderId:"399443779657",appId:"1:399443779657:web:748831ddd587c5ee351f98",measurementId:"G-RT2GCBDE0N"},Ql=D0(nD);s2(Ql);const Ic=HC(Ql);L2(Ql);AO(Ql);$O(Ql);const iD=()=>{const[s,e]=kr.useState(null),[i,a]=kr.useState(!0);return kr.useEffect(()=>{const g=Rw(Ic,y=>{e(y),a(!1)});return()=>g()},[]),{user:s,loading:i,login:async(g,y)=>{try{return(await Aw(Ic,g,y)).user}catch(v){throw v}},register:async(g,y)=>{try{return(await bw(Ic,g,y)).user}catch(v){throw v}},logout:async()=>{try{await Iw(Ic)}catch(g){throw g}}}},sD=()=>{const{user:s,logout:e}=iD(),i=async()=>{try{await e()}catch(a){console.error("Error logging out:",a)}};return ee.jsx("header",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"1rem 2rem",color:"white",boxShadow:"0 2px 10px rgba(0,0,0,0.1)"},children:ee.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:"1200px",margin:"0 auto"},children:[ee.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:ee.jsx("div",{style:{fontSize:"1.5rem",fontWeight:"bold",background:"linear-gradient(45deg, #ffd700, #ffed4e)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"🔥 Free Fire Tournament"})}),ee.jsxs("nav",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[ee.jsx("a",{href:"#tournaments",style:{color:"white",textDecoration:"none",fontWeight:"500"},children:"Tournaments"}),ee.jsx("a",{href:"#leaderboard",style:{color:"white",textDecoration:"none",fontWeight:"500"},children:"Leaderboard"}),s?ee.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[ee.jsxs("span",{style:{fontSize:"0.9rem",opacity:.9},children:["Welcome, ",s.email]}),ee.jsx("button",{onClick:i,style:{padding:"0.5rem 1rem",background:"rgba(255,255,255,0.2)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"8px",color:"white",cursor:"pointer",fontWeight:"500",transition:"all 0.3s ease"},onMouseOver:a=>{a.currentTarget.style.background="rgba(255,255,255,0.3)"},onMouseOut:a=>{a.currentTarget.style.background="rgba(255,255,255,0.2)"},children:"Logout"})]}):ee.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[ee.jsx("button",{style:{padding:"0.5rem 1rem",background:"transparent",border:"1px solid white",borderRadius:"8px",color:"white",cursor:"pointer",fontWeight:"500"},children:"Login"}),ee.jsx("button",{style:{padding:"0.5rem 1rem",background:"white",border:"none",borderRadius:"8px",color:"#667eea",cursor:"pointer",fontWeight:"600"},children:"Sign Up"})]})]})]})})},rD=({tournament:s,onJoin:e})=>{const i=h=>{switch(h){case"upcoming":return"#3b82f6";case"active":return"#10b981";case"completed":return"#6b7280";case"cancelled":return"#ef4444";default:return"#6b7280"}},a=h=>{switch(h){case"upcoming":return"Upcoming";case"active":return"Live Now";case"completed":return"Completed";case"cancelled":return"Cancelled";default:return h}},l=h=>new Date(h).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return ee.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"1.5rem",boxShadow:"0 4px 20px rgba(0,0,0,0.1)",border:"1px solid rgba(0,0,0,0.05)",transition:"all 0.3s ease",cursor:"pointer"},onMouseOver:h=>{h.currentTarget.style.transform="translateY(-4px)",h.currentTarget.style.boxShadow="0 8px 30px rgba(0,0,0,0.15)"},onMouseOut:h=>{h.currentTarget.style.transform="translateY(0)",h.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.1)"},children:[ee.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem"},children:[ee.jsxs("div",{children:[ee.jsx("h3",{style:{margin:"0 0 0.5rem 0",fontSize:"1.25rem",fontWeight:"700",color:"#1f2937"},children:s.name}),ee.jsx("p",{style:{margin:0,color:"#6b7280",fontSize:"0.9rem",lineHeight:"1.4"},children:s.description})]}),ee.jsx("span",{style:{padding:"0.25rem 0.75rem",borderRadius:"20px",fontSize:"0.75rem",fontWeight:"600",color:"white",background:i(s.status),whiteSpace:"nowrap"},children:a(s.status)})]}),ee.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",marginBottom:"1.5rem"},children:[ee.jsxs("div",{children:[ee.jsx("span",{style:{fontSize:"0.75rem",color:"#9ca3af",fontWeight:"500"},children:"PRIZE POOL"}),ee.jsxs("p",{style:{margin:"0.25rem 0 0 0",fontSize:"1.1rem",fontWeight:"700",color:"#059669"},children:["₹",s.prizePool.toLocaleString()]})]}),ee.jsxs("div",{children:[ee.jsx("span",{style:{fontSize:"0.75rem",color:"#9ca3af",fontWeight:"500"},children:"ENTRY FEE"}),ee.jsxs("p",{style:{margin:"0.25rem 0 0 0",fontSize:"1.1rem",fontWeight:"700",color:"#dc2626"},children:["₹",s.entryFee]})]}),ee.jsxs("div",{children:[ee.jsx("span",{style:{fontSize:"0.75rem",color:"#9ca3af",fontWeight:"500"},children:"PLAYERS"}),ee.jsxs("p",{style:{margin:"0.25rem 0 0 0",fontSize:"1.1rem",fontWeight:"700",color:"#374151"},children:[s.participants.length,"/",s.maxPlayers]})]}),ee.jsxs("div",{children:[ee.jsx("span",{style:{fontSize:"0.75rem",color:"#9ca3af",fontWeight:"500"},children:"MODE"}),ee.jsx("p",{style:{margin:"0.25rem 0 0 0",fontSize:"1.1rem",fontWeight:"700",color:"#374151",textTransform:"capitalize"},children:s.gameMode})]})]}),ee.jsxs("div",{style:{marginBottom:"1.5rem"},children:[ee.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[ee.jsx("span",{style:{fontSize:"0.75rem",color:"#9ca3af",fontWeight:"500"},children:"START TIME"}),ee.jsxs("span",{style:{fontSize:"0.75rem",color:"#9ca3af",fontWeight:"500"},children:["MAP: ",s.map]})]}),ee.jsx("p",{style:{margin:0,fontSize:"0.9rem",fontWeight:"600",color:"#374151"},children:l(s.startDate)})]}),s.status==="upcoming"&&e&&ee.jsx("button",{onClick:e,style:{width:"100%",padding:"0.75rem",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"12px",fontSize:"1rem",fontWeight:"600",cursor:"pointer",transition:"all 0.3s ease"},onMouseOver:h=>{h.currentTarget.style.transform="scale(1.02)"},onMouseOut:h=>{h.currentTarget.style.transform="scale(1)"},children:"Join Tournament"})]})},aD=[{id:"1",name:"Free Fire Championship",description:"The ultimate Free Fire tournament with amazing prizes!",maxPlayers:100,entryFee:50,prizePool:1e4,startDate:new Date("2024-02-01T18:00:00"),endDate:new Date("2024-02-01T20:00:00"),status:"upcoming",gameMode:"squad",map:"Bermuda",rules:["No hacking","Fair play only","Respect all players"],createdBy:"admin",createdAt:new Date,participants:[]},{id:"2",name:"Solo Survival Challenge",description:"Test your solo skills in this intense survival challenge.",maxPlayers:50,entryFee:25,prizePool:5e3,startDate:new Date("2024-01-28T16:00:00"),endDate:new Date("2024-01-28T18:00:00"),status:"active",gameMode:"solo",map:"Purgatory",rules:["Solo only","No teaming","Survive to win"],createdBy:"admin",createdAt:new Date,participants:[]},{id:"3",name:"Duo Masters Tournament",description:"Partner up and dominate in this duo tournament.",maxPlayers:60,entryFee:75,prizePool:15e3,startDate:new Date("2024-02-05T19:00:00"),endDate:new Date("2024-02-05T21:00:00"),status:"upcoming",gameMode:"duo",map:"Kalahari",rules:["Duo teams only","No substitutions","Communication allowed"],createdBy:"admin",createdAt:new Date,participants:[]}],oD=()=>{const[s,e]=kr.useState([]),[i,a]=kr.useState(!0);kr.useEffect(()=>{setTimeout(()=>{e(aD),a(!1)},1e3)},[]);const l=h=>{console.log("Joining tournament:",h)};return i?ee.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh",fontSize:"1.2rem",color:"#6b7280"},children:"Loading tournaments..."}):ee.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",padding:"2rem 0"},children:ee.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 2rem"},children:[ee.jsxs("div",{style:{textAlign:"center",marginBottom:"3rem"},children:[ee.jsx("h1",{style:{fontSize:"3rem",fontWeight:"800",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",marginBottom:"1rem"},children:"Free Fire Tournaments"}),ee.jsx("p",{style:{fontSize:"1.2rem",color:"#6b7280",maxWidth:"600px",margin:"0 auto",lineHeight:"1.6"},children:"Join exciting Free Fire tournaments, compete with the best players, and win amazing prizes!"})]}),ee.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"2rem",marginBottom:"3rem"},children:[ee.jsxs("div",{style:{background:"white",padding:"2rem",borderRadius:"16px",textAlign:"center",boxShadow:"0 4px 20px rgba(0,0,0,0.1)"},children:[ee.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"0.5rem"},children:"🏆"}),ee.jsx("h3",{style:{margin:"0 0 0.5rem 0",fontSize:"2rem",fontWeight:"700",color:"#1f2937"},children:s.length}),ee.jsx("p",{style:{margin:0,color:"#6b7280"},children:"Active Tournaments"})]}),ee.jsxs("div",{style:{background:"white",padding:"2rem",borderRadius:"16px",textAlign:"center",boxShadow:"0 4px 20px rgba(0,0,0,0.1)"},children:[ee.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"0.5rem"},children:"💰"}),ee.jsxs("h3",{style:{margin:"0 0 0.5rem 0",fontSize:"2rem",fontWeight:"700",color:"#1f2937"},children:["₹",s.reduce((h,d)=>h+d.prizePool,0).toLocaleString()]}),ee.jsx("p",{style:{margin:0,color:"#6b7280"},children:"Total Prize Pool"})]}),ee.jsxs("div",{style:{background:"white",padding:"2rem",borderRadius:"16px",textAlign:"center",boxShadow:"0 4px 20px rgba(0,0,0,0.1)"},children:[ee.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"0.5rem"},children:"👥"}),ee.jsx("h3",{style:{margin:"0 0 0.5rem 0",fontSize:"2rem",fontWeight:"700",color:"#1f2937"},children:s.reduce((h,d)=>h+d.maxPlayers,0)}),ee.jsx("p",{style:{margin:0,color:"#6b7280"},children:"Total Slots"})]})]}),ee.jsxs("div",{children:[ee.jsx("h2",{style:{fontSize:"2rem",fontWeight:"700",color:"#1f2937",marginBottom:"2rem",textAlign:"center"},children:"Available Tournaments"}),ee.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"2rem"},children:s.map(h=>ee.jsx(rD,{tournament:h,onJoin:()=>l(h.id)},h.id))})]}),s.length===0&&ee.jsxs("div",{style:{textAlign:"center",padding:"3rem",color:"#6b7280"},children:[ee.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🎮"}),ee.jsx("h3",{style:{fontSize:"1.5rem",marginBottom:"0.5rem"},children:"No tournaments available"}),ee.jsx("p",{children:"Check back later for new tournaments!"})]})]})})};function lD(){return ee.jsxs("div",{style:{margin:0,padding:0,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},children:[ee.jsx(sD,{}),ee.jsx(oD,{})]})}const uD=`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8fafc;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  button {
    font-family: inherit;
  }
`,rS=document.createElement("style");rS.textContent=uD;document.head.appendChild(rS);V1.createRoot(document.getElementById("root")).render(ee.jsx(x1.StrictMode,{children:ee.jsx(lD,{})}));
