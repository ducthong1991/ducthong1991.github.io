webpackJsonp([7,14],{637:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(251),o=n.n(r),i=n(254),a=n.n(i),s=n(253),c=n.n(s),l=n(252),u=n.n(l),p=n(1),d=n.n(p),f=n(59),m=(n.n(f),n(656)),h=(n.n(m),n(655)),y=(n.n(h),n(657)),g=n.n(y),b=n(659),v=n.n(b),E=n(658),w=n.n(E),C=n(660),A=n.n(C),N=function(e){function t(e){return o()(this,t),c()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u()(t,e),a()(t,[{key:"homeHeader",value:function(){return d.a.createElement("div",{className:"header-section sticky-header",style:{backgroundImage:"url("+g.a+")"}},d.a.createElement("div",{className:"header-left"},d.a.createElement("img",{src:v.a,className:"droplet-logo",onClick:this.props.isHome?"":this.props.goHome})),this.homeHeaderRightSection())}},{key:"otherHeader",value:function(){return d.a.createElement("div",{className:"header-section"},d.a.createElement("div",{className:"header-left"},d.a.createElement("img",{src:w.a,className:"droplet-logo",onClick:this.props.goHome})),this.headerRightSection())}},{key:"homeHeaderRightSection",value:function(){return this.props.isLoggedIn?d.a.createElement("div",{className:"header-right"},d.a.createElement("label",{className:"header-text clickable"},"Welcome, Elson Ng"),d.a.createElement("button",{className:"btn btn-buy-now",onClick:this.props.buyNow},"BUY NOW")):d.a.createElement("div",{className:"header-right-session"},d.a.createElement("label",{className:"header-text pointer",onClick:this.props.instructions},"How it Works"),d.a.createElement("label",{className:"header-text pointer",onClick:this.props.login},"Login"),d.a.createElement("button",{className:"btn btn-buy-now",onClick:this.props.buyNow},"BUY NOW"))}},{key:"headerRightSection",value:function(){if(this.props.isLoggedIn)return d.a.createElement("div",{className:"header-right"},d.a.createElement("label",{className:"name-text clickable"},"Welcome, Elson Ng"),d.a.createElement("div",{className:"slash-div"}),d.a.createElement("label",{className:"name-text clickable"},"Log out"),d.a.createElement("img",{src:A.a,className:"logout-img clickable"}));var e=this.props.isHome?"header-text pointer":"header-text-dark pointer";return d.a.createElement("div",{className:"header-right"},d.a.createElement("label",{className:e,onClick:this.props.goToLogin},"Login"))}},{key:"render",value:function(){return d.a.createElement("div",null,this.props.isHome?this.homeHeader():this.otherHeader())}}]),t}(d.a.Component);t.default=N},646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(251),o=n.n(r),i=n(254),a=n.n(i),s=n(253),c=n.n(s),l=n(252),u=n.n(l),p=n(1),d=n.n(p),f=n(840),m=(n.n(f),n(784)),h=n(637),y=n(896),g=(n.n(y),n(897)),b=(n.n(g),function(e){function t(e){o()(this,t);var n=c()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onChange=function(){},n.goToBuyDroplet=function(){n.props.router.push("/buy-droplet")},n.goToIndex=function(){n.props.router.push("/")},n}return u()(t,e),a()(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"payment-detail"},d.a.createElement(h.default,{goHome:this.goToIndex,isLoggedIn:!0}),d.a.createElement("div",{className:"progress"},d.a.createElement("div",{className:"finish-progress"})),d.a.createElement("div",{className:"container history-container"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"offset-1 col-10"},d.a.createElement("div",{className:"step-section"},d.a.createElement("h4",{className:"step-text"},"Step 4 : Payment Details")),d.a.createElement(m.a,{isUser:!1})))))}}]),t}(d.a.Component));t.default=b},655:function(e,t){},656:function(e,t){},657:function(e,t,n){e.exports=n.p+"1287cf5abd1adfa8ca4ef6e42100669f.png"},658:function(e,t,n){e.exports=n.p+"2680118b03c7549c16978754c4473377.png"},659:function(e,t){e.exports="data:image/png;base64,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"},660:function(e,t){e.exports="data:image/png;base64,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"},687:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.elementContextTypes=t.injectContextTypes=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),p=r(u),d=n(3),f=r(d),m=n(710),h=t.injectContextTypes={getRegisteredElements:f.default.func.isRequired},y=t.elementContextTypes={addElementsLoadListener:f.default.func.isRequired,registerElement:f.default.func.isRequired,unregisterElement:f.default.func.isRequired},g=function(e){function t(n,r){a(this,t);var o=s(this,e.call(this,n,r));return o.handleRegisterElement=function(e,t,n){o.setState(function(r){return{registeredElements:[].concat(i(r.registeredElements),[l({element:e},t?{impliedTokenType:t}:{},n?{impliedSourceType:n}:{})])}})},o.handleUnregisterElement=function(e){o.setState(function(t){return{registeredElements:t.registeredElements.filter(function(t){return t.element!==e})}})},o.state={registeredElements:[]},o}return c(t,e),t.prototype.getChildContext=function(){var e=this;return{addElementsLoadListener:function(t){if(e._elements)return void t(e._elements);var n=e.props,r=(n.children,o(n,["children"]));"sync"===e.context.tag?(e._elements=e.context.stripe.elements(r),t(e._elements)):e.context.addStripeLoadListener(function(n){e._elements?t(e._elements):(e._elements=n.elements(r),t(e._elements))})},registerElement:this.handleRegisterElement,unregisterElement:this.handleUnregisterElement,getRegisteredElements:function(){return e.state.registeredElements}}},t.prototype.render=function(){return p.default.Children.only(this.props.children)},t}(p.default.Component);g.childContextTypes=l({},h,y),g.contextTypes=m.providerContextTypes,g.defaultProps={children:null},t.default=g},688:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.IdealBankElement=t.IbanElement=t.PaymentRequestButtonElement=t.PostalCodeElement=t.CardCVCElement=t.CardExpiryElement=t.CardNumberElement=t.CardElement=t.Elements=t.injectStripe=t.StripeProvider=void 0;var o=n(710),i=r(o),a=n(815),s=r(a),c=n(687),l=r(c),u=n(813),p=r(u),d=n(814),f=r(d),m=(0,p.default)("card",{impliedTokenType:"card",impliedSourceType:"card"}),h=(0,p.default)("cardNumber",{impliedTokenType:"card",impliedSourceType:"card"}),y=(0,p.default)("cardExpiry"),g=(0,p.default)("cardCvc"),b=(0,p.default)("postalCode"),v=(0,p.default)("iban",{impliedTokenType:"bank_account",impliedSourceType:"sepa_debit"}),E=(0,p.default)("idealBank",{impliedSourceType:"ideal"});t.StripeProvider=i.default,t.injectStripe=s.default,t.Elements=l.default,t.CardElement=m,t.CardNumberElement=h,t.CardExpiryElement=y,t.CardCVCElement=g,t.PostalCodeElement=b,t.PaymentRequestButtonElement=f.default,t.IbanElement=v,t.IdealBankElement=E},710:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.providerContextTypes=void 0;var c=n(1),l=r(c),u=n(3),p=r(u),d=t.providerContextTypes={tag:p.default.string.isRequired,stripe:p.default.object,addStripeLoadListener:p.default.func},f=function(e,t){window.Stripe.__cachedInstances=window.Stripe.__cachedInstances||{};var n="key="+e+" options="+JSON.stringify(t),r=window.Stripe.__cachedInstances[n]||window.Stripe(e,t);return window.Stripe.__cachedInstances[n]=r,r},m=function(e){if(e&&e.elements&&e.createSource&&e.createToken)return e;throw new Error("Please pass a valid Stripe object to StripeProvider. You can obtain a Stripe object by calling 'Stripe(...)' with your publishable key.")},h=function(e){function t(n){i(this,t);var r=a(this,e.call(this,n));if(r.props.apiKey&&r.props.stripe)throw new Error("Please pass either 'apiKey' or 'stripe' to StripeProvider, not both.");if(r.props.apiKey){if(!window.Stripe)throw new Error("Please load Stripe.js (https://js.stripe.com/v3/) on this page to use react-stripe-elements. If Stripe.js isn't available yet (it's loading asynchronously, or you're using server-side rendering), see https://github.com/stripe/react-stripe-elements#advanced-integrations");var s=r.props,c=s.apiKey,l=(s.children,s.stripe,o(s,["apiKey","children","stripe"]));r._meta={tag:"sync",stripe:f(c,l)}}else if(r.props.stripe)r._meta={tag:"sync",stripe:m(r.props.stripe)};else{if(null!==r.props.stripe)throw new Error("Please pass either 'apiKey' or 'stripe' to StripeProvider. If you're using 'stripe' but don't have a Stripe instance yet, pass 'null' explicitly.");r._meta={tag:"async",stripe:null}}return r._didWarn=!1,r._didWakeUpListeners=!1,r._listeners=[],r}return s(t,e),t.prototype.getChildContext=function(){var e=this;return"sync"===this._meta.tag?{tag:"sync",stripe:this._meta.stripe}:{tag:"async",addStripeLoadListener:function(t){e._meta.stripe?t(e._meta.stripe):e._listeners.push(t)}}},t.prototype.componentWillReceiveProps=function(e){var t=this.props.apiKey&&e.apiKey&&this.props.apiKey!==e.apiKey,n=this.props.stripe&&e.stripe&&this.props.stripe!==e.stripe;if(!this._didWarn&&(t||n)&&window.console&&window.console.error)return this._didWarn=!0,void console.error("StripeProvider does not support changing the apiKey parameter.");if(!this._didWakeUpListeners&&e.stripe){this._didWakeUpListeners=!0;var r=m(e.stripe);this._meta.stripe=r,this._listeners.forEach(function(e){e(r)})}},t.prototype.render=function(){return l.default.Children.only(this.props.children)},t}(l.default.Component);h.propTypes={apiKey:p.default.string,stripe:p.default.object,children:p.default.node},h.childContextTypes=d,h.defaultProps={apiKey:void 0,stripe:void 0,children:null},t.default=h},776:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){var n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(function(n){return t.hasOwnProperty(n)&&t[n]===e[n]})};t.default=r},777:function(e,t,n){e.exports=n.p+"0d3fa743e0b946b68cde19b3e59af43b.png"},781:function(e,t,n){"use strict";var r=n(251),o=n.n(r),i=n(254),a=n.n(i),s=n(253),c=n.n(s),l=n(252),u=n.n(l),p=n(1),d=n.n(p),f=n(58),m=n(688),h=(n.n(m),n(777)),y=n.n(h),g=function(e){function t(e){return o()(this,t),c()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u()(t,e),a()(t,[{key:"render",value:function(){var e=this.props.isUser?"btn btn-green btn-save":"btn btn-green btn-checkout",t=this.props.isUser?"Update and Save":"CHECKOUT NOW ➡",n=this.props.isUser?"":"/buy-droplet";return d.a.createElement("div",{className:"stripe-ui"},d.a.createElement("div",{className:"detail-section"},d.a.createElement("img",{src:y.a,className:"visa-img"}),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{htmlFor:"creditNumber"},"Credit Card Number"),d.a.createElement(m.CardNumberElement,null)),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{htmlFor:"creditName"},"Name on Credit Card"),d.a.createElement("br",null),d.a.createElement("input",{type:"text",className:"form-control has-icon",id:"creditName"})),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-3"},d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{htmlFor:"selectMonth"},"Expiry Month"),d.a.createElement(m.CardExpiryElement,null))),d.a.createElement("div",{className:"col-3"},d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{htmlFor:"creditNumber"},"Security Code"),d.a.createElement(m.CardCVCElement,null))))),d.a.createElement("div",{className:"form-check checkbox"},d.a.createElement("label",{className:"form-check-label green-checkbox"},d.a.createElement("input",{type:"checkbox",className:"form-check-input"}),d.a.createElement("i",{className:this.props.isUser?"":"helper"}),d.a.createElement("i",null,d.a.createElement("span",null,this.props.isUser?"":"Yes, save my card details for future purchases.")))),d.a.createElement("div",{className:"row col-12"},d.a.createElement("button",{className:e},d.a.createElement(f.Link,{to:n},t))))}}]),t}(d.a.Component);t.a=g},782:function(e,t,n){"use strict";var r=n(251),o=n.n(r),i=n(254),a=n.n(i),s=n(253),c=n.n(s),l=n(252),u=n.n(l),p=n(1),d=n.n(p),f=n(688),m=(n.n(f),n(781)),h=function(e){function t(){var e,n,r,i;o()(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return n=r=c()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.handleSubmit=function(e){e.preventDefault(),console.log("submit stripe form")},i=n,c()(r,i)}return u()(t,e),a()(t,[{key:"render",value:function(){return d.a.createElement("form",{onSubmit:this.handleSubmit},d.a.createElement(m.a,{isUser:this.props.isUser}))}}]),t}(d.a.Component);t.a=n.i(f.injectStripe)(h)},783:function(e,t,n){"use strict";var r=n(251),o=n.n(r),i=n(254),a=n.n(i),s=n(253),c=n.n(s),l=n(252),u=n.n(l),p=n(1),d=n.n(p),f=n(688),m=(n.n(f),n(782)),h=function(e){function t(){return o()(this,t),c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u()(t,e),a()(t,[{key:"render",value:function(){return d.a.createElement(f.Elements,null,d.a.createElement(m.a,{isUser:this.props.isUser}))}}]),t}(d.a.Component);t.a=h},784:function(e,t,n){"use strict";var r=n(251),o=n.n(r),i=n(254),a=n.n(i),s=n(253),c=n.n(s),l=n(252),u=n.n(l),p=n(1),d=n.n(p),f=n(807),m=(n.n(f),n(58),n(688)),h=(n.n(m),n(783)),y=n(823),g=n.n(y),b=n(777),v=(n.n(b),function(e){function t(e){return o()(this,t),c()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u()(t,e),a()(t,[{key:"render",value:function(){return d.a.createElement(m.StripeProvider,{apiKey:g.a.STRIPE_API_KEY},d.a.createElement(h.a,{isUser:this.props.isUser}))}}]),t}(d.a.Component));t.a=v},807:function(e,t){},813:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),l=r(c),u=n(3),p=r(u),d=n(776),f=r(d),m=n(687),h=function(){},y=function(e){e.id,e.className,e.onChange,e.onFocus,e.onBlur,e.onReady;return s(e,["id","className","onChange","onFocus","onBlur","onReady"])},g=function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=t=function(t){function n(e,r){o(this,n);var a=i(this,t.call(this,e,r));a.handleRef=function(e){a._ref=e},a._element=null;var s=y(a.props);return a._options=s,a}return a(n,t),n.prototype.componentDidMount=function(){var t=this;this.context.addElementsLoadListener(function(n){var o=n.create(e,t._options);t._element=o,t._setupEventListeners(o),o.mount(t._ref),(r.impliedTokenType||r.impliedSourceType)&&t.context.registerElement(o,r.impliedTokenType,r.impliedSourceType)})},n.prototype.componentWillReceiveProps=function(e){var t=y(e);0===Object.keys(t).length||(0,f.default)(t,this._options)||(this._options=t,this._element&&this._element.update(t))},n.prototype.componentWillUnmount=function(){if(this._element){var e=this._element;e.destroy(),this.context.unregisterElement(e)}},n.prototype._setupEventListeners=function(e){var t=this;e.on("ready",function(){t.props.onReady(t._element)}),e.on("change",function(e){t.props.onChange(e)}),e.on("blur",function(){var e;return(e=t.props).onBlur.apply(e,arguments)}),e.on("focus",function(){var e;return(e=t.props).onFocus.apply(e,arguments)})},n.prototype.render=function(){return l.default.createElement("div",{id:this.props.id,className:this.props.className,ref:this.handleRef})},n}(l.default.Component),t.propTypes={id:p.default.string,className:p.default.string,onChange:p.default.func,onBlur:p.default.func,onFocus:p.default.func,onReady:p.default.func},t.defaultProps={id:void 0,className:void 0,onChange:h,onBlur:h,onFocus:h,onReady:h},t.contextTypes=m.elementContextTypes,n};t.default=g},814:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(1),u=r(l),p=n(3),d=r(p),f=n(776),m=r(f),h=n(687),y=function(){},g=function(e){e.id,e.className,e.onBlur,e.onClick,e.onFocus,e.onReady,e.paymentRequest;return s(e,["id","className","onBlur","onClick","onFocus","onReady","paymentRequest"])},b=function(e){function t(n,r){o(this,t);var a=i(this,e.call(this,n,r));a.handleRef=function(e){a._ref=e};var s=g(n);return a._options=s,a}return a(t,e),t.prototype.componentDidMount=function(){var e=this;this.context.addElementsLoadListener(function(t){e._element=t.create("paymentRequestButton",c({paymentRequest:e.props.paymentRequest},e._options)),e._element.on("ready",function(){e.props.onReady(e._element)}),e._element.on("focus",function(){var t;return(t=e.props).onFocus.apply(t,arguments)}),e._element.on("click",function(){var t;return(t=e.props).onClick.apply(t,arguments)}),e._element.on("blur",function(){var t;return(t=e.props).onBlur.apply(t,arguments)}),e._element.mount(e._ref)})},t.prototype.componentWillReceiveProps=function(e){this.props.paymentRequest!==e.paymentRequest&&console.warn("Unsupported prop change: paymentRequest is not a customizable property.");var t=g(e);0===Object.keys(t).length||(0,m.default)(t,this._options)||(this._options=t,this._element.update(t))},t.prototype.componentWillUnmount=function(){this._element.destroy()},t.prototype.render=function(){return u.default.createElement("div",{id:this.props.id,className:this.props.className,ref:this.handleRef})},t}(u.default.Component);b.propTypes={id:d.default.string,className:d.default.string,onBlur:d.default.func,onClick:d.default.func,onFocus:d.default.func,onReady:d.default.func,paymentRequest:d.default.shape({canMakePayment:d.default.func.isRequired,on:d.default.func.isRequired,show:d.default.func.isRequired}).isRequired},b.defaultProps={id:void 0,className:void 0,onBlur:y,onClick:y,onFocus:y,onReady:y},b.contextTypes=h.elementContextTypes,t.default=b},815:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=n(1),u=function(e){return e&&e.__esModule?e:{default:e}}(l),p=n(687),d=n(710),f=function(e){var t,n,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},f=l.withRef,m=void 0!==f&&f;return n=t=function(t){function n(e,a){if(o(this,n),!a||!a.getRegisteredElements)throw new Error("It looks like you are trying to inject Stripe context outside of an Elements context.\nPlease be sure the component that calls createSource or createToken is within an <Elements> component.");var s=i(this,t.call(this,e,a));return s.findElement=function(e,t){var n=s.context.getRegisteredElements(),r=n.filter(function(t){return t[e]}),o="auto"===t?r:r.filter(function(n){return n[e]===t});if(1===o.length)return o[0].element;if(o.length>1)throw new Error("You did not specify the type of Source or Token to create.\n        We could not infer which Element you want to use for this operation.");return null},s.requireElement=function(e,t){var n=s.findElement(e,t);if(n)return n;throw new Error("You did not specify the type of Source or Token to create.\n        We could not infer which Element you want to use for this operation.")},s.wrappedCreateToken=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t&&"object"===(void 0===t?"undefined":c(t))){var o=t,i=o.type,a=r(o,["type"]),l="string"==typeof i?i:"auto",u=s.requireElement("impliedTokenType",l);return e.createToken(u,a)}if("string"==typeof t){var p=t;return e.createToken(p,n)}throw new Error("Invalid options passed to createToken. Expected an object, got "+(void 0===t?"undefined":c(t))+".")}},s.wrappedCreateSource=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t&&"object"===(void 0===t?"undefined":c(t))){if("string"!=typeof t.type)throw new Error("Invalid Source type passed to createSource. Expected string, got "+c(t.type)+".");var n=s.findElement("impliedSourceType",t.type);return n?e.createSource(n,t):e.createSource(t)}throw new Error("Invalid options passed to createSource. Expected an object, got "+(void 0===t?"undefined":c(t))+".")}},"sync"===s.context.tag?s.state={stripe:s.stripeProps(s.context.stripe)}:s.state={stripe:null},s}return a(n,t),n.prototype.componentDidMount=function(){var e=this;"async"===this.context.tag&&this.context.addStripeLoadListener(function(t){e.setState({stripe:e.stripeProps(t)})})},n.prototype.getWrappedInstance=function(){if(!m)throw new Error("To access the wrapped instance, the `{withRef: true}` option must be set when calling `injectStripe()`");return this.wrappedInstance},n.prototype.stripeProps=function(e){return s({},e,{createToken:this.wrappedCreateToken(e),createSource:this.wrappedCreateSource(e)})},n.prototype.render=function(){var t=this;return u.default.createElement(e,s({},this.props,{stripe:this.state.stripe,ref:m?function(e){t.wrappedInstance=e}:null}))},n}(u.default.Component),t.contextTypes=s({},d.providerContextTypes,p.injectContextTypes),t.displayName="InjectStripe("+(e.displayName||e.name||"Component")+")",n};t.default=f},840:function(e,t){},896:function(e,t,n){e.exports=n.p+"2680118b03c7549c16978754c4473377.png"},897:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=7.b54550aee9cd3c224d78.js.map