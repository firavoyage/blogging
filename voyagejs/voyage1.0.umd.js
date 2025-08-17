!function(n,l){"object"==typeof exports&&"undefined"!=typeof module?l(exports):"function"==typeof define&&define.amd?define(["exports"],l):l((n||self).preact={})}(this,function(n){var l,u,t,i,o,r,f,e,c,s=65536,a=1<<17,h={},v=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,d=Array.isArray;function y(n,l){for(var u in l)n[u]=l[u];return n}function _(n){var l=n.parentNode;l&&l.removeChild(n)}function b(n,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?l.call(arguments,2):t),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)void 0===f[r]&&(f[r]=n.defaultProps[r]);return g(n,f,i,o,null)}function g(n,l,i,o,r){var f={type:n,props:l,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++t:r,__i:-1,__u:0};return null==r&&null!=u.vnode&&u.vnode(f),f}function m(n){return n.children}function w(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function x(n,l,t){var i,o=n.__v,r=o.__e,f=n.__P;if(f)return(i=y({},o)).__v=o.__v+1,u.vnode&&u.vnode(i),M(f,i,o,n.__n,void 0!==f.ownerSVGElement,32&o.__u?[r]:null,l,null==r?k(o):r,!!(32&o.__u),t),i.__v=o.__v,i.__.__k[i.__i]=i,i.__d=void 0,i.__e!=r&&P(i),i}function P(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return P(n)}}function S(n){(!n.__d&&(n.__d=!0)&&o.push(n)&&!T.__r++||r!==u.debounceRendering)&&((r=u.debounceRendering)||f)(T)}function T(){var n,l,t,i=[],r=[];for(o.sort(e);n=o.shift();)n.__d&&(t=o.length,l=x(n,i,r)||l,0===t||o.length>t?(z(i,l,r),r.length=i.length=0,l=void 0,o.sort(e)):l&&u.__c&&u.__c(l,v));l&&z(i,l,r),T.__r=0}function $(n,l,u,t,i,o,r,f,e,c,a){var p,d,y,_,b,g=t&&t.__k||v,m=l.length;for(u.__d=e,C(u,l,g),e=u.__d,p=0;p<m;p++)null!=(y=u.__k[p])&&"boolean"!=typeof y&&"function"!=typeof y&&(d=-1===y.__i?h:g[y.__i]||h,y.__i=p,M(n,y,d,i,o,r,f,e,c,a),_=y.__e,y.ref&&d.ref!=y.ref&&(d.ref&&O(d.ref,null,y),a.push(y.ref,y.__c||_,y)),null==b&&null!=_&&(b=_),y.__u&s||d.__k===y.__k?e=H(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:_&&(e=_.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=b}function C(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,h=c,v=0;for(n.__k=[],t=0;t<e;t++)r=t+v,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):d(i)?g(m,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=I(i,u,r,h),i.__i=f,o=null,-1!==f&&(h--,(o=u[f])&&(o.__u|=a)),null==o||null===o.__v?(-1==f&&v--,"function"!=typeof i.type&&(i.__u|=s)):f!==r&&(f===r+1?v++:f>r?h>e-r?v+=f-r:v--:f<r?f==r-1&&(v=f-r):v=0,f!==t+v&&(i.__u|=s))):(o=u[r])&&null==o.key&&o.__e&&0==(o.__u&a)&&(o.__e==n.__d&&(n.__d=k(o)),q(o,o,!1),u[r]=null,h--);if(h)for(t=0;t<c;t++)null!=(o=u[t])&&0==(o.__u&a)&&(o.__e==n.__d&&(n.__d=k(o)),q(o,o))}function H(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=H(t[i],l,u));return l}n.__e!=l&&(u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8===l.nodeType);return l}function I(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(e.__u&a))return u;if(t>(null!=e&&0==(e.__u&a)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(e.__u&a)&&i==e.key&&o===e.type)return r;r--}if(f<l.length){if((e=l[f])&&0==(e.__u&a)&&i==e.key&&o===e.type)return f;f++}}return-1}function j(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||p.test(l)?u:u+"px"}function A(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||j(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||j(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=Date.now(),n.addEventListener(l,o?L:D,o)):n.removeEventListener(l,o?L:D,o);else{if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&"role"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u))}}function D(n){if(this.l){var l=this.l[n.type+!1];if(n.t){if(n.t<=l.u)return}else n.t=Date.now();return l(u.event?u.event(n):n)}}function L(n){if(this.l)return this.l[n.type+!0](u.event?u.event(n):n)}function M(n,l,t,i,o,r,f,e,c,s){var a,h,v,p,_,b,g,k,x,P,S,T,C,H,I,j=l.type;if(void 0!==l.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=l.__e=t.__e]),(a=u.__b)&&a(l);n:if("function"==typeof j)try{if(k=l.props,x=(a=j.contextType)&&i[a.__c],P=a?x?x.props.value:a.__:i,t.__c?g=(h=l.__c=t.__c).__=h.__E:("prototype"in j&&j.prototype.render?l.__c=h=new j(k,P):(l.__c=h=new w(k,P),h.constructor=j,h.render=B),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=P,h.__n=i,v=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=j.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=y({},h.__s)),y(h.__s,j.getDerivedStateFromProps(k,h.__s))),p=h.props,_=h.state,h.__v=l,v)null==j.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==j.getDerivedStateFromProps&&k!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,P),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,P)||l.__v===t.__v)){for(l.__v!==t.__v&&(h.props=k,h.state=h.__s,h.__d=!1),l.__e=t.__e,l.__k=t.__k,l.__k.forEach(function(n){n&&(n.__=l)}),S=0;S<h._sb.length;S++)h.__h.push(h._sb[S]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,P),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,_,b)})}if(h.context=P,h.props=k,h.__P=n,h.__e=!1,T=u.__r,C=0,"prototype"in j&&j.prototype.render){for(h.state=h.__s,h.__d=!1,T&&T(l),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,T&&T(l),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++C<25);h.state=h.__s,null!=h.getChildContext&&(i=y(y({},i),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(b=h.getSnapshotBeforeUpdate(p,_)),$(n,d(I=null!=a&&a.type===m&&null==a.key?a.props.children:a)?I:[I],l,t,i,o,r,f,e,c,s),h.base=l.__e,l.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null)}catch(n){l.__v=null,c||null!=r?(l.__e=e,l.__u|=c?160:32,r[r.indexOf(e)]=null):(l.__e=t.__e,l.__k=t.__k),u.__e(n,l,t)}else null==r&&l.__v===t.__v?(l.__k=t.__k,l.__e=t.__e):l.__e=N(t.__e,l,t,i,o,r,f,c,s);(a=u.diffed)&&a(l)}function z(n,l,t){for(var i=0;i<t.length;i++)O(t[i],t[++i],t[++i]);u.__c&&u.__c(l,n),n.some(function(l){try{n=l.__h,l.__h=[],n.some(function(n){n.call(l)})}catch(n){u.__e(n,l.__v)}})}function N(n,u,t,i,o,r,f,e,c){var s,a,v,p,y,b,g,m=t.props,w=u.props,x=u.type;if("svg"===x&&(o=!0),null!=r)for(s=0;s<r.length;s++)if((y=r[s])&&"setAttribute"in y==!!x&&(x?y.localName===x:3===y.nodeType)){n=y,r[s]=null;break}if(null==n){if(null===x)return document.createTextNode(w);n=o?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,w.is&&w),r=null,e=!1}if(null===x)m===w||e&&n.data===w||(n.data=w);else{if(r=r&&l.call(n.childNodes),m=t.props||h,!e&&null!=r)for(m={},s=0;s<n.attributes.length;s++)m[(y=n.attributes[s]).name]=y.value;for(s in m)y=m[s],"children"==s||("dangerouslySetInnerHTML"==s?v=y:"key"===s||s in w||A(n,s,null,y,o));for(s in w)y=w[s],"children"==s?p=y:"dangerouslySetInnerHTML"==s?a=y:"value"==s?b=y:"checked"==s?g=y:"key"===s||e&&"function"!=typeof y||m[s]===y||A(n,s,y,m[s],o);if(a)e||v&&(a.__html===v.__html||a.__html===n.innerHTML)||(n.innerHTML=a.__html),u.__k=[];else if(v&&(n.innerHTML=""),$(n,d(p)?p:[p],u,t,i,o&&"foreignObject"!==x,r,f,r?r[0]:t.__k&&k(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&_(r[s]);e||(s="value",void 0!==b&&(b!==n[s]||"progress"===x&&!b||"option"===x&&b!==m[s])&&A(n,s,b,m[s],!1),s="checked",void 0!==g&&g!==n[s]&&A(n,s,g,m[s],!1))}return n}function O(n,l,t){try{"function"==typeof n?n(l):n.current=l}catch(n){u.__e(n,t)}}function q(n,l,t){var i,o;if(u.unmount&&u.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||O(i,null,l)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){u.__e(n,l)}i.base=i.__P=null,n.__c=void 0}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&q(i[o],l,t||"function"!=typeof n.type);t||null==n.__e||_(n.__e),n.__=n.__e=n.__d=void 0}function B(n,l,u){return this.constructor(n,u)}function E(n,t,i){var o,r,f,e;u.__&&u.__(n,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],M(t,n=(!o&&i||t).__k=b(m,null,[n]),r||h,h,void 0!==t.ownerSVGElement,!o&&i?[i]:r?null:t.firstChild?l.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),n.__d=void 0,z(f,n,e)}l=v.slice,u={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l}throw n}},t=0,i=function(n){return null!=n&&null==n.constructor},w.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=y({},this.state),"function"==typeof n&&(n=n(y({},u),this.props)),n&&y(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),S(this))},w.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),S(this))},w.prototype.render=m,o=[],f="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e=function(n,l){return n.__v.__b-l.__v.__b},T.__r=0,c=0,n.Component=w,n.Fragment=m,n.cloneElement=function(n,u,t){var i,o,r,f,e=y({},n.props);for(r in n.type&&n.type.defaultProps&&(f=n.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?l.call(arguments,2):t),g(n.type,e,i||n.key,o||n.ref,null)},n.createContext=function(n,l){var u={__c:l="__cC"+c++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,S(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u},n.createElement=b,n.createRef=function(){return{current:null}},n.h=b,n.hydrate=function n(l,u){E(l,u,n)},n.isValidElement=i,n.options=u,n.render=E,n.toChildArray=function n(l,u){return u=u||[],null==l||"boolean"==typeof l||(d(l)?l.some(function(l){n(l,u)}):u.push(l)),u}});
//# sourceMappingURL=preact.umd.js.map

!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("preact")):"function"==typeof define&&define.amd?define(["exports","preact"],t):t((n||self).preactHooks={},n.preact)}(this,function(n,t){var u,r,i,o,f=0,c=[],e=[],a=t.options,v=a.__b,l=a.__r,d=a.diffed,s=a.__c,p=a.unmount,h=a.__;function y(n,t){a.__h&&a.__h(r,n,f||t),f=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({__V:e}),u.__[n]}function m(n){return f=1,_(P,n)}function _(n,t,i){var o=y(u++,2);if(o.t=n,!o.__c&&(o.__=[i?i(t):P(void 0,t),function(n){var t=o.__N?o.__N[0]:o.__[0],u=o.t(t,n);t!==u&&(o.__N=[u,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,u){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter(function(n){return!!n.__c});if(r.every(function(n){return!n.__N}))return!c||c.call(this,n,t,u);var i=!1;return r.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,u))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,u){if(this.__e){var r=c;c=void 0,f(n,t,u),c=r}e&&e.call(this,n,t,u)},r.shouldComponentUpdate=f}return o.__N||o.__}function T(n,t){var i=y(u++,4);!a.__s&&j(i.__H,t)&&(i.__=n,i.i=t,r.__h.push(i))}function b(n,t){var r=y(u++,7);return j(r.__H,t)?(r.__V=n(),r.i=t,r.__h=n,r.__V):r.__}function q(){for(var n;n=c.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(F),n.__H.__h.forEach(g),n.__H.__h=[]}catch(t){n.__H.__h=[],a.__e(t,n.__v)}}a.__b=function(n){r=null,v&&v(n)},a.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),h&&h(n,t)},a.__r=function(n){l&&l(n),u=0;var t=(r=n.__c).__H;t&&(i===r?(t.__h=[],r.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=e,n.__N=n.i=void 0})):(t.__h.forEach(F),t.__h.forEach(g),t.__h=[],u=0)),i=r},a.diffed=function(n){d&&d(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==c.push(t)&&o===a.requestAnimationFrame||((o=a.requestAnimationFrame)||A)(q)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==e&&(n.__=n.__V),n.i=void 0,n.__V=e})),i=r=null},a.__c=function(n,t){t.some(function(n){try{n.__h.forEach(F),n.__h=n.__h.filter(function(n){return!n.__||g(n)})}catch(u){t.some(function(n){n.__h&&(n.__h=[])}),t=[],a.__e(u,n.__v)}}),s&&s(n,t)},a.unmount=function(n){p&&p(n);var t,u=n.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{F(n)}catch(n){t=n}}),u.__H=void 0,t&&a.__e(t,u.__v))};var x="function"==typeof requestAnimationFrame;function A(n){var t,u=function(){clearTimeout(r),x&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);x&&(t=requestAnimationFrame(u))}function F(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function g(n){var t=r;n.__c=n.__(),r=t}function j(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function P(n,t){return"function"==typeof t?t(n):t}n.useCallback=function(n,t){return f=8,b(function(){return n},t)},n.useContext=function(n){var t=r.context[n.__c],i=y(u++,9);return i.c=n,t?(null==i.__&&(i.__=!0,t.sub(r)),t.props.value):n.__},n.useDebugValue=function(n,t){a.useDebugValue&&a.useDebugValue(t?t(n):n)},n.useEffect=function(n,t){var i=y(u++,3);!a.__s&&j(i.__H,t)&&(i.__=n,i.i=t,r.__H.__h.push(i))},n.useErrorBoundary=function(n){var t=y(u++,10),i=m();return t.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,u){t.__&&t.__(n,u),i[1](n)}),[i[0],function(){i[1](void 0)}]},n.useId=function(){var n=y(u++,11);if(!n.__){for(var t=r.__v;null!==t&&!t.__m&&null!==t.__;)t=t.__;var i=t.__m||(t.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__},n.useImperativeHandle=function(n,t,u){f=6,T(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==u?u:u.concat(n))},n.useLayoutEffect=T,n.useMemo=b,n.useReducer=_,n.useRef=function(n){return f=5,b(function(){return{current:n}},[])},n.useState=m});
//# sourceMappingURL=hooks.umd.js.map

/**
 * @file
 * voyage framework: a sweeter preact
 *
 * this version is developed during 20250814 ~ 20250817 (utc+8)
 *
 * features
 * - core functions: h (html), p (props), e (effect), r (render)
 *   - h:
 *     - more freedom of params
 *     - @${event}
 *     - utilities (special props)
 *     - style obj with kebeb case
 *     - class/classname in both array and object
 *   - p:
 *     - prop() -> get the lastest value
 *     - prop(value) -> set value
 *     - store support like solidjs
 * - utilities: bind, html, show.
 *
 * @author firavoyage
 * @version 1.0
 * @since 0.1 initiated on 20240816, 1.0 initiated on 20250814
 * @see changelog.md
 */

const preact = {
  ...window.preact,
  ...window.preactHooks,
};

let voyage = {
  h(..._) {
    // html
    const { createElement, Fragment } = preact;

    // todo: support more patterns of _ (done)
    // todo: support Fragment (done)

    let tag = "",
      props = {},
      children = [];

    for (const [index, item] of _.entries()) {
      const type = typeof item;
      if ((type == "string" || type == "function") && index == 0) {
        tag = item;
      } else if (type == "object" && !Array.isArray(item)) {
        if (item.constructor) {
          // props have a constructor like object
          props = item;
        } else {
          // for children created by preact.createElement()
          // constructor == undefined
          children.push(item);
        }
      } else if (type == "object" && Array.isArray(item)) {
        // fragment
        children.push(createElement(Fragment, {}, ...item));
      } else if (type == "function") {
        // components should be wrapped in createElement

        // () => item() instead of item to support props
        // such components couldnt have params
        children.push(createElement(() => item()));
      } else {
        children.push(item);
      }
    }

    // fragment
    if (tag == "") {
      // "" and Fragment are considered the same
      tag = Fragment;
    }

    const has = (a, b) => Object.prototype.hasOwnProperty.call(a, b);

    /**
     * Converts kebab-case CSS props to camelCase for React/Preact.
     * Example: { "background-color": "red" } → { backgroundColor: "red" }
     */
    const normalizeStyles = (styleObj) => {
      if (!styleObj || typeof styleObj !== "object") return styleObj;

      const normalized = {};
      for (const key in styleObj) {
        const camelKey = key.replace(/-([a-z])/g, (_, letter) =>
          letter.toUpperCase()
        );
        normalized[camelKey] = styleObj[key];
      }
      return normalized;
    };

    /**
     * Normalizes class input (string, array, object) into a string.
     * @example
     * normalizeClass("btn") → "btn"
     * normalizeClass(["btn", "active"]) → "btn active"
     * normalizeClass({ "btn": true, "active": false }) → "btn"
     */
    function normalizeClass(value) {
      if (!value) return "";
      if (typeof value == "string") return value;
      if (Array.isArray(value)) return value.filter(Boolean).join(" ");
      if (typeof value == "object") {
        return Object.entries(value)
          .filter(([_, shouldApply]) => shouldApply)
          .map(([cls]) => cls)
          .join(" ");
      }
      return "";
    }

    for (const key in props) {
      if (key.startsWith("@")) {
        // this is the only condition
        // where function values should not be considered as props
        const newKey = `on${key.slice(1, 2).toUpperCase()}${key.slice(2)}`;
        props[newKey] = props[key];
        delete props[key];

        continue;
      } else if (key == "ref") {
        // ref is one of the special props
        // where a setter is passed
        // so there's no need to call its getter
        continue;
      }

      const prop = props[key];
      const value = typeof prop == "function" ? prop() : prop;
      const utilities = {
        html() {
          props.dangerouslySetInnerHTML = { __html: value };
        },
        bind() {
          // one of the utilities where a setter is passed
          props.value = prop();
          props.onChange = (e) => prop(e.target.value);
        },
        show() {
          // Only modify display if this is the first render or visibility changed
          if (!props.__originalDisplay) {
            // Capture the element's default display type (like Vue does)
            props.ref = (el) => {
              if (el && !props.__originalDisplay) {
                props.__originalDisplay = window.getComputedStyle(el).display;
              }
            };
          }

          props.style = {
            ...props.style,
            display: value ? props.__originalDisplay || "block" : "none",
          };
        },
      };
      if (has(utilities, key)) {
        utilities[key]();
        delete props[key];
      } else if (key == "style") {
        // Normalize style object (supports both camelCase and kebab-case)
        props.style = normalizeStyles(value);
      } else if (key == "class" || key == "className") {
        // Normalize class/className (supports arrays/objects)
        props.className = normalizeClass(value);
        if (key == "class") delete props.class; // Prefer className for Preact
      }
    }

    return createElement(tag, props, ...children);
  },
  p(initial) {
    const { useState } = preact;

    // Efficient deep clone function
    const deepClone = (obj) => {
      if (obj === null || typeof obj !== "object") return obj;

      if (Array.isArray(obj)) {
        const arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
          arrCopy[i] = deepClone(obj[i]);
        }
        return arrCopy;
      }

      const objCopy = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          objCopy[key] = deepClone(obj[key]);
        }
      }
      return objCopy;
    };

    // Fast shallow equality check
    const shallowEqual = (a, b) => {
      if (a === b) return true;
      if (
        typeof a !== "object" ||
        a === null ||
        typeof b !== "object" ||
        b === null
      )
        return false;

      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
      if (keysA.length !== keysB.length) return false;

      for (const key of keysA) {
        if (
          !Object.prototype.hasOwnProperty.call(b, key) ||
          a[key] !== b[key]
        ) {
          return false;
        }
      }
      return true;
    };

    // Helper for structural sharing
    const clonePath = (obj, path, newValue) => {
      const newObj = Array.isArray(obj) ? [...obj] : { ...obj };
      if (path.length === 0) return newValue;

      let current = newObj;
      for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        current[key] = Array.isArray(current[key])
          ? [...current[key]]
          : { ...current[key] };
        current = current[key];
      }

      current[path[path.length - 1]] = newValue;
      return newObj;
    };

    // initial can be a function
    initial = typeof initial == "function" ? initial() : initial;

    // setstate is just for creating rerenders
    // both the getter and the setter are on current
    const [state, setState] = useState(initial);
    let current = deepClone(state); // Initialize as clone

    const prop = (...args) => {
      if (args.length == 0) {
        // do nothing
      } else if (args.length == 1) {
        const newValue =
          typeof args[0] == "function" ? args[0](current) : args[0];
        if (!shallowEqual(newValue, current)) {
          current = deepClone(newValue); // Store clone as current
          setState(current);
        }
      } else if (args.length >= 2) {
        // Path + value case
        const path = args.slice(0, -1);
        const valueOrUpdater = args[args.length - 1];

        const targetValue = path.reduce((obj, key) => obj?.[key], current);
        const newValue =
          typeof valueOrUpdater == "function"
            ? valueOrUpdater(targetValue)
            : valueOrUpdater;

        if (!shallowEqual(targetValue, newValue)) {
          current = clonePath(current, path, newValue);
          setState(current);
        }
      }
      return current; // Now returns current directly
    };

    prop.produce = (fn) => {
      const newState = deepClone(current);
      fn(newState);
      if (!shallowEqual(newState, current)) {
        current = newState; // newState is already a clone
        setState(current);
      }
      return current; // Now returns current directly
    };

    prop.reconcile = (...args) => {
      const options =
        typeof args[args.length - 1] == "object" ? args.pop() : {};
      const path = args.slice(0, -1);
      const value = args[args.length - 1];

      const target = path.reduce((obj, key) => obj?.[key], current);
      if (!target) return current;

      let newValue;
      if (options.key) {
        // Array reconciliation
        const arr = target ? [...target] : [];
        const searchKey = value[options.key];
        if (searchKey !== undefined) {
          const index = arr.findIndex((item) => item[options.key] == searchKey);
          if (index >= 0) {
            newValue = [...arr];
            newValue[index] = { ...arr[index], ...value };
          } else {
            newValue = [...arr, value];
          }
        }
      } else {
        // Object reconciliation
        newValue = { ...target, ...value };
      }

      if (newValue && !shallowEqual(target, newValue)) {
        current = clonePath(current, path, newValue);
        setState(current);
      }
      return current;
    };

    return prop;
  },
  e(e, deps = []) {
    // effect

    // for safety reason, deps should not be empty in any case

    // todo: for fn (prop) in deps, call it. (done)

    const { useEffect } = preact;

    deps.map((dep) => (typeof dep == "function" ? dep() : dep));
    useEffect(e, deps);
  },
  r(app, parent, replaceNode) {
    // render
    const { render, createElement } = preact;

    // todo: for fn apps, wrap it with h() (done)

    if (typeof app == "function") {
      app = createElement(app);
    }

    render(app, parent, replaceNode);
  },
};
