var t,e,r,n,o,i,a,c,u,s,l,f,p,d,h,y,v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},g={},m={},b=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
m=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
b("object"==typeof self&&self)||b("object"==typeof v&&v)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||m||Function("return this")();var w={},S={};// Detect IE8's incomplete defineProperty implementation
w=!(S=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var L={},E={};E=!S(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var j=Function.prototype.call;L=E?j.bind(j):function(){return j.apply(j,arguments)};var O={}.propertyIsEnumerable,T=Object.getOwnPropertyDescriptor;n=T&&!O.call({1:2},1)?function(t){var e=T(this,t);return!!e&&e.enumerable}:O;var k={};k=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var P={},x={},M={},I=Function.prototype,$=I.call,_=E&&I.bind.bind($,$),C={},F=(M=E?_:function(t){return function(){return $.apply(t,arguments)}})({}.toString),q=M("".slice);C=function(t){return q(F(t),8,-1)};var H=Object,N=M("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
x=S(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!H("z").propertyIsEnumerable(0)})?function(t){return"String"===C(t)?N(t,""):H(t)}:H;var A={},D={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
D=function(t){return null==t};var G=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
A=function(t){if(D(t))throw G("Can't call method on "+t);return t},P=function(t){return x(A(t))};var R={},z={},B={},W={},Y={},K="object"==typeof document&&document.all,U=(Y={all:K,IS_HTMLDDA:void 0===K&&void 0!==K}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
W=Y.IS_HTMLDDA?function(t){return"function"==typeof t||t===U}:function(t){return"function"==typeof t};var V=Y.all;B=Y.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:W(t)||t===V}:function(t){return"object"==typeof t?null!==t:W(t)};var J={},Q={};Q=function(t,e){var r;return arguments.length<2?(r=m[t],W(r)?r:void 0):m[t]&&m[t][e]};var X={};X=M({}.isPrototypeOf);var Z={},tt={},te={},tr={};tr="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var tn=m.process,to=m.Deno,ti=tn&&tn.versions||to&&to.version,ta=ti&&ti.v8;ta&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(i=(o=ta.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!i&&tr&&(!(o=tr.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=tr.match(/Chrome\/(\d+)/))&&(i=+o[1]),te=i;var tc=m.String;Z=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(tt=!!Object.getOwnPropertySymbols&&!S(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tc(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&te&&te<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tu=Object;J=Z?function(t){return"symbol"==typeof t}:function(t){var e=Q("Symbol");return W(e)&&X(e.prototype,tu(t))};var ts={},tl={},tf={},tp=String;tf=function(t){try{return tp(t)}catch(t){return"Object"}};var td=TypeError;// `Assert: IsCallable(argument) is true`
tl=function(t){if(W(t))return t;throw td(tf(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ts=function(t,e){var r=t[e];return D(r)?void 0:tl(r)};var th={},ty=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
th=function(t,e){var r,n;if("string"===e&&W(r=t.toString)&&!B(n=L(r,t))||W(r=t.valueOf)&&!B(n=L(r,t))||"string"!==e&&W(r=t.toString)&&!B(n=L(r,t)))return n;throw ty("Can't convert object to primitive value")};var tv={},tg={};tg=!1;var tm={},tb={},tw=Object.defineProperty;tb=function(t,e){try{tw(m,t,{value:e,configurable:!0,writable:!0})}catch(r){m[t]=e}return e};var tS="__core-js_shared__";tm=m[tS]||tb(tS,{}),(tv=function(t,e){return tm[t]||(tm[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.1",mode:tg?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"});var tL={},tE={},tj=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
tE=function(t){return tj(A(t))};var tO=M({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
tL=Object.hasOwn||function(t,e){return tO(tE(t),e)};var tT={},tk=0,tP=Math.random(),tx=M(1..toString);tT=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tx(++tk+tP,36)};var tM=m.Symbol,tI=tv("wks"),t$=Z?tM.for||tM:tM&&tM.withoutSetter||tT,t_=TypeError,tC=(tL(tI,t="toPrimitive")||(tI[t]=tt&&tL(tM,t)?tM[t]:t$("Symbol."+t)),tI[t]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
z=function(t,e){if(!B(t)||J(t))return t;var r,n=ts(t,tC);if(n){if(void 0===e&&(e="default"),r=L(n,t,e),!B(r)||J(r))return r;throw t_("Can't convert object to primitive value")}return void 0===e&&(e="number"),th(t,e)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
R=function(t){var e=z(t,"string");return J(e)?e:e+""};var tF={},tq={},tH=m.document,tN=B(tH)&&B(tH.createElement);tq=function(t){return tN?tH.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
tF=!w&&!S(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(tq("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var tA=Object.getOwnPropertyDescriptor;r=w?tA:function(t,e){if(t=P(t),e=R(e),tF)try{return tA(t,e)}catch(t){}if(tL(t,e))return k(!L(n,t,e),t[e])};var tD={},tG={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
tG=w&&S(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tR={},tz=String,tB=TypeError;// `Assert: Type(argument) is Object`
tR=function(t){if(B(t))return t;throw tB(tz(t)+" is not an object")};var tW=TypeError,tY=Object.defineProperty,tK=Object.getOwnPropertyDescriptor,tU="enumerable",tV="configurable",tJ="writable";a=w?tG?function(t,e,r){if(tR(t),e=R(e),tR(r),"function"==typeof t&&"prototype"===e&&"value"in r&&tJ in r&&!r[tJ]){var n=tK(t,e);n&&n[tJ]&&(t[e]=r.value,r={configurable:tV in r?r[tV]:n[tV],enumerable:tU in r?r[tU]:n[tU],writable:!1})}return tY(t,e,r)}:tY:function(t,e,r){if(tR(t),e=R(e),tR(r),tF)try{return tY(t,e,r)}catch(t){}if("get"in r||"set"in r)throw tW("Accessors not supported");return"value"in r&&(t[e]=r.value),t},tD=w?function(t,e,r){return a(t,e,k(1,r))}:function(t,e,r){return t[e]=r,t};var tQ={},tX={},tZ=Function.prototype,t0=w&&Object.getOwnPropertyDescriptor,t1=tL(tZ,"name")&&(!w||w&&t0(tZ,"name").configurable),t2={},t3=M(Function.toString);W(tm.inspectSource)||(tm.inspectSource=function(t){return t3(t)}),t2=tm.inspectSource;var t4={},t7={},t9=m.WeakMap;t7=W(t9)&&/native code/.test(String(t9));var t8={},t6=tv("keys");t8=function(t){return t6[t]||(t6[t]=tT(t))};var t5={};t5={};var et="Object already initialized",ee=m.TypeError,er=m.WeakMap;if(t7||tm.state){var en=tm.state||(tm.state=new er);/* eslint-disable no-self-assign -- prototype methods protection */en.get=en.get,en.has=en.has,en.set=en.set,/* eslint-enable no-self-assign -- prototype methods protection */c=function(t,e){if(en.has(t))throw ee(et);return e.facade=t,en.set(t,e),e},u=function(t){return en.get(t)||{}},s=function(t){return en.has(t)}}else{var eo=t8("state");t5[eo]=!0,c=function(t,e){if(tL(t,eo))throw ee(et);return e.facade=t,tD(t,eo,e),e},u=function(t){return tL(t,eo)?t[eo]:{}},s=function(t){return tL(t,eo)}}var ei=(t4={set:c,get:u,has:s,enforce:function(t){return s(t)?u(t):c(t,{})},getterFor:function(t){return function(e){var r;if(!B(e)||(r=u(e)).type!==t)throw ee("Incompatible receiver, "+t+" required");return r}}}).enforce,ea=t4.get,ec=String,eu=Object.defineProperty,es=M("".slice),el=M("".replace),ef=M([].join),ep=w&&!S(function(){return 8!==eu(function(){},"length",{value:8}).length}),ed=String(String).split("String"),eh=tX=function(t,e,r){"Symbol("===es(ec(e),0,7)&&(e="["+el(ec(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!tL(t,"name")||t1&&t.name!==e)&&(w?eu(t,"name",{value:e,configurable:!0}):t.name=e),ep&&r&&tL(r,"arity")&&t.length!==r.arity&&eu(t,"length",{value:r.arity});try{r&&tL(r,"constructor")&&r.constructor?w&&eu(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=ei(t);return tL(n,"source")||(n.source=ef(ed,"string"==typeof e?e:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=eh(function(){return W(this)&&ea(this).source||t2(this)},"toString"),tQ=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(W(r)&&tX(r,i,n),n.global)o?t[e]=r:tb(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:a(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var ey={},ev={},eg={},em={},eb={},ew={},eS=Math.ceil,eL=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
ew=Math.trunc||function(t){var e=+t;return(e>0?eL:eS)(e)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
eb=function(t){var e=+t;// eslint-disable-next-line no-self-compare -- NaN check
return e!=e||0===e?0:ew(e)};var eE=Math.max,ej=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
em=function(t,e){var r=eb(t);return r<0?eE(r+e,0):ej(r,e)};var eO={},eT={},ek=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
eT=function(t){return t>0?ek(eb(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
eO=function(t){return eT(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var eP=function(t){return function(e,r,n){var o,i=P(e),a=eO(i),c=em(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&r!=r){for(;a>c;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[c++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},ex={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:eP(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:eP(!1)}.indexOf,eM=M([].push);eg=function(t,e){var r,n=P(t),o=0,i=[];for(r in n)!tL(t5,r)&&tL(n,r)&&eM(i,r);// Don't enum bug & hidden keys
for(;e.length>o;)tL(n,r=e[o++])&&(~ex(i,r)||eM(i,r));return i};var eI=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(t){return eg(t,eI)},f=Object.getOwnPropertySymbols;var e$=M([].concat);// all object keys, includes non-enumerable and symbols
ev=Q("Reflect","ownKeys")||function(t){var e=l(tR(t));return f?e$(e,f(t)):e},ey=function(t,e,n){for(var o=ev(e),i=0;i<o.length;i++){var c=o[i];tL(t,c)||n&&tL(n,c)||a(t,c,r(e,c))}};var e_={},eC=/#|\.prototype\./,eF=function(t,e){var r=eH[eq(t)];return r===eA||r!==eN&&(W(e)?S(e):!!e)},eq=eF.normalize=function(t){return String(t).replace(eC,".").toLowerCase()},eH=eF.data={},eN=eF.NATIVE="N",eA=eF.POLYFILL="P";e_=eF,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/g=function(t,e){var n,o,i,a,c,u=t.target,s=t.global,l=t.stat;if(n=s?m:l?m[u]||tb(u,{}):(m[u]||{}).prototype)for(o in e){// contained in target
if(a=e[o],i=t.dontCallGetSet?(c=r(n,o))&&c.value:n[o],!e_(s?o:u+(l?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;ey(a,i)}(t.sham||i&&i.sham)&&tD(a,"sham",!0),tQ(n,o,a,t)}};var eD={},eG={},eR=Function.prototype,ez=eR.apply,eB=eR.call;// eslint-disable-next-line es/no-reflect -- safe
eG="object"==typeof Reflect&&Reflect.apply||(E?eB.bind(ez):function(){return eB.apply(ez,arguments)});var eW={},eY={},eK=(eY=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===C(t))return M(t)})(eY.bind);// optional / simple context binding
eW=function(t,e){return tl(t),void 0===e?t:E?eK(t,e):function(){return t.apply(e,arguments)}};var eU={};eU=Q("document","documentElement");var eV={};eV=M([].slice);var eJ={},eQ=TypeError;eJ=function(t,e){if(t<e)throw eQ("Not enough arguments");return t};var eX={};// eslint-disable-next-line redos/no-vulnerable -- safe
eX=/(?:ipad|iphone|ipod).*applewebkit/i.test(tr);var eZ={};eZ="process"===C(m.process);var e0=m.setImmediate,e1=m.clearImmediate,e2=m.process,e3=m.Dispatch,e4=m.Function,e7=m.MessageChannel,e9=m.String,e8=0,e6={},e5="onreadystatechange";S(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
p=m.location});var rt=function(t){if(tL(e6,t)){var e=e6[t];delete e6[t],e()}},re=function(t){return function(){rt(t)}},rr=function(t){rt(t.data)},rn=function(t){// old engines have not location.origin
m.postMessage(e9(t),p.protocol+"//"+p.host)};e0&&e1||(e0=function(t){eJ(arguments.length,1);var e=W(t)?t:e4(t),r=eV(arguments,1);return e6[++e8]=function(){eG(e,void 0,r)},d(e8),e8},e1=function(t){delete e6[t]},eZ?d=function(t){e2.nextTick(re(t))}:e3&&e3.now?d=function(t){e3.now(re(t))}:e7&&!eX?(y=(h=new e7).port2,h.port1.onmessage=rr,d=eW(y.postMessage,y)):m.addEventListener&&W(m.postMessage)&&!m.importScripts&&p&&"file:"!==p.protocol&&!S(rn)?(d=rn,m.addEventListener("message",rr,!1)):d=e5 in tq("script")?function(t){eU.appendChild(tq("script"))[e5]=function(){eU.removeChild(this),rt(t)}}:function(t){setTimeout(re(t),0)});var ro=(eD={set:e0,clear:e1}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
g({global:!0,bind:!0,enumerable:!0,forced:m.clearImmediate!==ro},{clearImmediate:ro});var ri=eD.set,ra={},rc={};/* global Bun -- Deno case */rc="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ru=m.Function,rs=/MSIE .\./.test(tr)||rc&&((e=m.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
ra=function(t,e){var r=e?2:1;return rs?function(n,o/* , ...arguments */){var i=eJ(arguments.length,1)>r,a=W(n)?n:ru(n),c=i?eV(arguments,r):[],u=i?function(){eG(a,this,c)}:a;return e?t(u,o):t(u)}:t};// https://github.com/oven-sh/bun/issues/1633
var rl=m.setImmediate?ra(ri,!1):ri;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
g({global:!0,bind:!0,enumerable:!0,forced:m.setImmediate!==rl},{setImmediate:rl});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,r,n,i){var a,c,u=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(u,"_invoke",{value:(a=new k(i||[]),c=p,function(r,o){if(c===d)throw Error("Generator is already running");if(c===h){if("throw"===r)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:e,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var u=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(r,n){var o=n.method,i=r.iterator[o];if(i===e)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),y);var a=f(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var c=a.arg;return c?c.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=c.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,y):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,y)}(i,a);if(u){if(u===y)continue;return u}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=d;var s=f(t,n,a);if("normal"===s.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
c=a.done?h:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(c=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=s.arg)}})}),u)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",d="executing",h="completed",y={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function v(){}function g(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};s(b,a,function(){return this});var w=Object.getPrototypeOf,S=w&&w(w(P([])));S&&S!==r&&n.call(S,a)&&// of the polyfill.
(b=S);var L=m.prototype=v.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function j(t,e){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new e(function(r,a){!function r(o,i,a,c){var u=f(t[o],t,i);if("throw"===u.type)c(u.arg);else{var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(l).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
s.value=t,a(s)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",t,a,c)})}}(o,i,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw TypeError(typeof t+" is not iterable")}return g.prototype=m,o(L,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=s(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},E(j.prototype),s(j.prototype,c,function(){return this}),t.AsyncIterator=j,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(L),s(L,u,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
s(L,a,function(){return this}),s(L,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(s){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=e),y}},t}({});try{regeneratorRuntime=rf}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=rf:Function("r","regeneratorRuntime = r")(rf)}const rp=[],rd=async function(){try{// API request for all the products
let t=await fetch("https://dummyjson.com/products");// Throw an exception
if(!t.ok)throw Error("Something went wrong!!");// Convert the data to a json string
let e=await t.json();// Return the products from the function
return e.products}catch(t){// Rethrow the error
throw Error(t.message)}},rh=function(t){// Get the clicked item
let e=t.target.closest(".sidebar-item"),{product:r}=e.dataset;// Return the id
return r},ry=function(t){// Set the categories array
let e=t.reduce(function(t,e,r,n){return t.includes(e.category)||t.push(e.category),t},["all"]);// Return the categories
return e},rv=async function(t){try{// API request for all the products
let e=await rd();// Get the category
if("all"===t||""===t)return e;// Filter the array
let r=e.filter(e=>e.category===t);// Return the products
return r}catch(t){throw Error(t.message)}},rg=function(t,e){// Manipulate classes
t.classList.toggle("overflow-modal-hidden"),e.classList.toggle("shopping-modal-hidden")},rm=function(t){// Manipulate classes
t.classList.toggle("checkout-modal-hidden")},rb=async function(t){// Fetch the products
let e=await rd(),r=e.find(e=>e.id===t),n={productImage:r.thumbnail,productTitle:r.title,productCategory:r.category,productStock:r.stock,productPrice:r.price,productId:r.id};// Return the array
return rp.push(n),rp},rw=new class{constructor(){}// Display spinner
displaySpinner(t){let e=`
        <div class="spinner-container">
          <i class="fa-sharp fa-solid fa-circle-notch spinner"></i>
        </div>
      `;t.insertAdjacentHTML("beforeend",e)}// Display select container options
displaySelectOptions(t,e){// Generate markup
let r=`<option value="${t}">${t}</option>`;// Append to the container
e.insertAdjacentHTML("beforeend",r)}// Display sidebar list
displaySidebarResults(t,e){// Generate markup
let r=`
      <li class="sidebar-item" data-product="${t.id}">
        <img
          src="${t.thumbnail}"
          alt="${t.title}"
          class="sidebar-img"
        />
        <div class="sidebar-info">
          <h3 class="sidebar-name">${t.title.length>30?t.title.split("").slice(0,30).join("")+"...":t.title}</h3>
          <p class="sidebar-text">${t.brand}</p>
        </div>
      </li>
    `;// Append to the UI
e.insertAdjacentHTML("beforeend",r)}// Display product
displayProduct(t,e){var r;// Generate markup
let n=`
      <figure class="product-photo">
        <img
          src="${t.thumbnail}"
          alt="${t.title}"
          class="product-img"
        />
        <figcaption class="product-name">
          <h1>${t.title}</h1>
        </figcaption>
      </figure>
      <div class="product-info">
        <p class="product-category">${t.category[0].toUpperCase()+t.category.slice(1)}</p>
        <p class="product-brand">${t.brand}</p>
        <p class="product-price">${(r=t.price,new Intl.NumberFormat(navigator.language,{style:"currency",currency:"som"}).format(1206*r))}</p>
        <p class="product-stock">${t.stock} units left</p>
        <p class="product-rating">${t.rating} rating</p>
        <button class="product-shopping" data-item="${t.id}">
          <i class="fa-sharp fa-solid fa-cart-plus shopping-icon"></i>
          <i class="fa-solid fa-check shopping-icon hide-shopping-icon"></i>
        </button>
      </div>
      <p class="product-description">${t.description}</p>
      <div class="product-links">
        <a href="" class="product-link"
          >Check out more <i class="fa-solid fa-arrow-right"></i
        ></a>
      </div>
    `;// Append to the UI
e.insertAdjacentHTML("beforeend",n)}updateShoppingCartLength(t,e){t.textContent=e}updateShoppingCart(t,e){// Generate markup
let r=`
      <tr>
        <td>
          <img src="${e.productImage}" alt="${e.productTitle}"/>
        </td>
        <td>${e.productTitle}</td>
        <td>${e.productCategory}</td>
        <td>${e.productStock} units</td>
        <td>${e.productPrice}</td>
        <td class="total-items-container">
          <i
            class="fa-solid fa-chevron-up total-items total-items-increase"
          ></i>
          <p class="shopping-list-total-items">1</p>
          <i
            class="fa-solid fa-chevron-down total-items total-items-reduce"
          ></i>
        </td>
      </tr>
    `;// Append to the UI
t.insertAdjacentHTML("beforeend",r)}},rS=document.querySelector(".sidebar-list"),rL=document.querySelector(".product"),rE=document.querySelector(".header-select");document.querySelector(".header-searchbar");const rj=document.querySelector(".header-shopping"),rO=document.querySelector(".overflows"),rT=document.querySelector(".shopping-list"),rk=document.querySelector(".shopping-list-close"),rP=document.querySelector(".checkout-modal-hidden"),rx=document.querySelector(".checkout-btn"),rM=document.querySelector(".shopping-list-btn"),rI=document.querySelector(".header-product-value"),r$=document.querySelector(".shopping-list-body"),r_=async function(){rw.displaySpinner(rS);try{// Get the products
let t=await rd();// Empty the sidebar container
rS.innerHTML="",// Display results to the side bar
t.forEach(function(t,e,r){rw.displaySidebarResults(t,rS)}),// Add an event listener to the sidebar
rS.addEventListener("click",async function(t){// Clear the product container
rL.innerHTML="",rw.displaySpinner(rL);// Get the product id
let e=+rh(t),r=await rd(),n=r.find(t=>t.id===e);// Clear the container
rL.innerHTML="",rw.displayProduct(n,rL)});// Get all the categories
let e=ry(t),r=e.sort();// Display the categories to the UI
r.forEach(function(t,e,r){rw.displaySelectOptions(t,rE)}),// Add an event listener
rE.addEventListener("change",async function(t){// Empty the sidebar
rS.innerHTML="",rw.displaySpinner(rS);// Get the clicked value
let e=t.target.value,r=await rv(e);// Empty the sidebar
rS.innerHTML="",// Loop over the array
r.forEach(function(t,e,r){rw.displaySidebarResults(t,rS)})}),// Event listeners to the product page
rL.addEventListener("click",async function(t){// Traget item
let e=t.target.classList.contains("product-shopping"),r=t.target.classList.contains("shopping-icon");if(e||r){// Select the parent element
let e=t.target.closest(".product"),r=e.querySelector(".product-shopping"),n=+r.dataset.item,o=await rb(n),i=o.length;rw.updateShoppingCartLength(rI,i),// Clear the shopping list container
r$.innerHTML="",// Update shopping cart
o.forEach(function(t){rw.updateShoppingCart(r$,t)})}})}catch(t){console.log(t.message)}};r_();// Toggle the hidden class
const rC=function(){rg(rO,rT)};// Add event listeners
rj.addEventListener("click",function(){// Remove the hidden class
rC()}),rk.addEventListener("click",function(){// Add the hidden class
rC()}),rO.addEventListener("click",function(){// Add the hidden classes
rC()}),rM.addEventListener("click",function(){// Remove hidden class
rm(rP),rT.classList.add("shopping-modal-hidden")}),rx.addEventListener("click",function(){// Remove hidden class
rm(rP),rO.classList.add("overflow-modal-hidden")});//# sourceMappingURL=index.a2cdf350.js.map

//# sourceMappingURL=index.a2cdf350.js.map
