webpackJsonp([0],{485:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(123),l=n.n(a),o=n(124),r=n.n(o),s=n(126),c=n.n(s),i=n(125),u=n.n(i),d=n(1),m=n.n(d),p=n(495),f=(n.n(p),n(505)),E=n.n(f),h=n(49),v=n(511),y=n.n(v),b=n(513),g=n.n(b),C=n(512),N=n.n(C);E.a.setAppElement("#root");var O=function(e){function t(e){l()(this,t);var n=c()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onChange=function(){},n.openGrabModal=function(){n.setState({showGrabModal:!0})},n.closeGrabModal=function(){n.setState({showGrabModal:!1})},n.openTransactionModal=function(){n.setState({showTransactionModal:!0})},n.closeTransactionModal=function(){n.setState({showTransactionModal:!1})},n.goToIndex=function(){n.props.router.push("/")},n.state={showGrabModal:!1,showTransactionModal:!1},n}return u()(t,e),r()(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"droplet-history"},m.a.createElement("div",{className:"header-section"},m.a.createElement("div",{className:"header-items"},m.a.createElement("div",{className:"header-left"},m.a.createElement("img",{src:y.a,className:"droplet-logo",onClick:this.goToIndex})),m.a.createElement("div",{className:"header-right"},m.a.createElement("label",{className:"name-text clickable"},"Welcome back, Elson Ng"),m.a.createElement("div",{className:"slash-div"}),m.a.createElement("label",{className:"name-text clickable"},"Log out"),m.a.createElement("img",{src:g.a,className:"logout-img clickable"})))),m.a.createElement("div",{className:"container history-container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-2"},m.a.createElement("button",{className:"btn btn-white"},"Buy Droplet"),m.a.createElement("button",{className:"btn btn-white"},"Invite Friends"),m.a.createElement("div",{className:"list-menu"},m.a.createElement(h.Link,{to:"/droplet-history"},"Droplet History"),m.a.createElement(h.Link,{to:"/#"},"Payment Method"),m.a.createElement(h.Link,{to:"/user-profile"},"User Profile"))),m.a.createElement("div",{className:"col-10 history-section"},m.a.createElement("div",{className:"title-section"},m.a.createElement("h4",{className:"title-text"},"Droplet History")),m.a.createElement("div",{className:"form-group date-section"},m.a.createElement("select",{className:"form-control select-year",value:"2017",onChange:this.onChange},m.a.createElement("option",null,"2015"),m.a.createElement("option",null,"2016"),m.a.createElement("option",{value:"2017"},"2017"),m.a.createElement("option",null,"2018"),m.a.createElement("option",null,"2019")),m.a.createElement("select",{className:"form-control select-from"},m.a.createElement("option",null,"From: January"),m.a.createElement("option",null,"February"),m.a.createElement("option",null,"March"),m.a.createElement("option",null,"April"),m.a.createElement("option",null,"May"),m.a.createElement("option",null,"June"),m.a.createElement("option",null,"July"),m.a.createElement("option",null,"August"),m.a.createElement("option",null,"September"),m.a.createElement("option",null,"October"),m.a.createElement("option",null,"November"),m.a.createElement("option",null,"December")),m.a.createElement("select",{className:"form-control select-from",value:"12",onChange:this.onChange},m.a.createElement("option",null,"January"),m.a.createElement("option",null,"February"),m.a.createElement("option",null,"March"),m.a.createElement("option",null,"April"),m.a.createElement("option",null,"May"),m.a.createElement("option",null,"June"),m.a.createElement("option",null,"July"),m.a.createElement("option",null,"August"),m.a.createElement("option",null,"September"),m.a.createElement("option",null,"October"),m.a.createElement("option",null,"November"),m.a.createElement("option",{value:"12"},"To: December"))),m.a.createElement("div",{className:"table-section"},m.a.createElement("table",{className:"table table-profile"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Policy"),m.a.createElement("th",null,"Start Date"),m.a.createElement("th",null,"Duration"),m.a.createElement("th",null,"Description"),m.a.createElement("th",null,"Cost (i)"),m.a.createElement("th",null,"Paid Out"))),m.a.createElement("tbody",null,m.a.createElement("tr",{className:"highlight-row"},m.a.createElement("td",{className:"policy-text"},"30042018"),m.a.createElement("td",null,"30 Apr 18"),m.a.createElement("td",null,"3 Days"),m.a.createElement("td",null,"Purchased"),m.a.createElement("td",null,"$12.00"),m.a.createElement("td",null)),m.a.createElement("tr",null,m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,m.a.createElement("strong",null,"Claim Available (3 days left)")),m.a.createElement("td",null),m.a.createElement("td",null)),m.a.createElement("tr",{className:"highlight-row"},m.a.createElement("td",{className:"policy-text"},"28042018"),m.a.createElement("td",null,"28 Apr 18"),m.a.createElement("td",null,"1 Days"),m.a.createElement("td",null,"Purchased"),m.a.createElement("td",null,"$4.00"),m.a.createElement("td",null)),m.a.createElement("tr",null,m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,"Pending Review"),m.a.createElement("td",null),m.a.createElement("td",{className:"green-text"},m.a.createElement("p",{className:"text-right",onClick:this.openGrabModal},"View"))),m.a.createElement("tr",{className:"highlight-row"},m.a.createElement("td",{className:"policy-text"},"18042018"),m.a.createElement("td",null,"18 Apr 18"),m.a.createElement("td",null,"1 Days"),m.a.createElement("td",null,"Purchased"),m.a.createElement("td",null,"$4.00"),m.a.createElement("td",null)),m.a.createElement("tr",null,m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,"Invalid Claim (1 days left to appeal)"),m.a.createElement("td",null),m.a.createElement("td",{className:"green-text"},m.a.createElement("p",{className:"text-right",onClick:this.openGrabModal},"View"))),m.a.createElement("tr",{className:"highlight-row"},m.a.createElement("td",{className:"policy-text"},"08042018"),m.a.createElement("td",null,"08 Apr 18"),m.a.createElement("td",null,"1 Days"),m.a.createElement("td",null,"Purchased"),m.a.createElement("td",null,"$4.00"),m.a.createElement("td",null)),m.a.createElement("tr",null,m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,"Paid Out"),m.a.createElement("td",null),m.a.createElement("td",{className:"green-text"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6"},m.a.createElement("p",{className:"text-left",onClick:this.openTransactionModal},"$16.40")),m.a.createElement("div",{className:"col-6"},m.a.createElement("p",{className:"text-right",onClick:this.openGrabModal},"View"))))),m.a.createElement("tr",null,m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,"Paid Out"),m.a.createElement("td",null),m.a.createElement("td",{className:"green-text"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6"},m.a.createElement("p",{className:"text-left",onClick:this.openTransactionModal},"$33.57")),m.a.createElement("div",{className:"col-6"},m.a.createElement("p",{className:"text-right",onClick:this.openGrabModal},"View"))))),m.a.createElement("tr",null,m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,"Policy Expired"),m.a.createElement("td",null),m.a.createElement("td",{className:"green-text"})),m.a.createElement("tr",{className:"highlight-row"},m.a.createElement("td",{className:"policy-text"},"20032018"),m.a.createElement("td",null,"20 Mar 18"),m.a.createElement("td",null,"6 Days"),m.a.createElement("td",null,"Purchased"),m.a.createElement("td",null,"$24.00"),m.a.createElement("td",null)),m.a.createElement("tr",null,m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,"Invalid Claim"),m.a.createElement("td",null),m.a.createElement("td",{className:"green-text"},m.a.createElement("p",{className:"text-right",onClick:this.openGrabModal},"View"))),m.a.createElement("tr",null,m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,"Appeal Rejected"),m.a.createElement("td",null),m.a.createElement("td",{className:"green-text"},m.a.createElement("p",{className:"text-right",onClick:this.openGrabModal},"View"))),m.a.createElement("tr",null,m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,"Policy Expired"),m.a.createElement("td",{className:"green-text"}),m.a.createElement("td",{className:"green-text"})),m.a.createElement("tr",{className:"highlight-row"},m.a.createElement("td",{className:"policy-text"},"13022018"),m.a.createElement("td",null,"13 Feb 18"),m.a.createElement("td",null,"1 Days"),m.a.createElement("td",null,"Purchased"),m.a.createElement("td",null,"$4.00"),m.a.createElement("td",null)),m.a.createElement("tr",null,m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,"Invalid Claim"),m.a.createElement("td",null),m.a.createElement("td",{className:"green-text"},m.a.createElement("p",{className:"text-right",onClick:this.openGrabModal},"View"))),m.a.createElement("tr",null,m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,"Appeal Approved & Paid Out"),m.a.createElement("td",null),m.a.createElement("td",{className:"green-text"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6"},m.a.createElement("p",{className:"text-left",onClick:this.openTransactionModal},"$12.90")),m.a.createElement("div",{className:"col-6"},m.a.createElement("p",{className:"text-right",onClick:this.openGrabModal},"View"))))),m.a.createElement("tr",null,m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,"Policy Expired"),m.a.createElement("td",{className:"green-text"}),m.a.createElement("td",{className:"green-text"})),m.a.createElement("tr",{className:"highlight-row"},m.a.createElement("td",{className:"policy-text"},"09022018"),m.a.createElement("td",null,"09 Feb 18"),m.a.createElement("td",null,"1 Days"),m.a.createElement("td",null,"Purchased"),m.a.createElement("td",null,"$4.00"),m.a.createElement("td",null)),m.a.createElement("tr",null,m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,"Paid Out"),m.a.createElement("td",null),m.a.createElement("td",{className:"green-text"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6"},m.a.createElement("p",{className:"text-left",onClick:this.openTransactionModal},"$14.46")),m.a.createElement("div",{className:"col-6"},m.a.createElement("p",{className:"text-right",onClick:this.openGrabModal},"View"))))),m.a.createElement("tr",null,m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null),m.a.createElement("td",null,"Policy Expired"),m.a.createElement("td",{className:"green-text"}),m.a.createElement("td",{className:"green-text"})))),m.a.createElement("div",{className:"text-center view-more"},m.a.createElement("a",{className:"clickable"},"View more")))))),m.a.createElement(E.a,{isOpen:this.state.showGrabModal,className:"modal-dialog "},m.a.createElement("div",{className:"modal-content grab-modal"},m.a.createElement("div",{className:"modal-header"},m.a.createElement("h5",{className:"modal-title"},"View Receipt")),m.a.createElement("div",{className:"modal-body"},m.a.createElement("p",null,"Uploaded 30 Apr 2018, 3.35pm"),m.a.createElement("img",{src:N.a,className:"grab-img"})),m.a.createElement("div",{className:"modal-footer"},m.a.createElement("button",{type:"button",className:"btn btn-close",onClick:this.closeGrabModal},"Close")))),m.a.createElement(E.a,{isOpen:this.state.showTransactionModal,className:"modal-dialog "},m.a.createElement("div",{className:"modal-content transaction-modal"},m.a.createElement("div",{className:"modal-header"},m.a.createElement("h5",{className:"modal-title"},"View Transaction Reference")),m.a.createElement("div",{className:"modal-body"},m.a.createElement("p",null,"You have received SGD 14.00 ",m.a.createElement("br",null),"in your PayNow-linked account ending 6463",m.a.createElement("br",null),"on 30 Apr 2018, 3.35pm",m.a.createElement("br",null),m.a.createElement("br",null),"Ref. 8173815719")),m.a.createElement("div",{className:"modal-footer"},m.a.createElement("button",{type:"button",className:"btn btn-close",onClick:this.closeTransactionModal},"Close")))))}}]),t}(m.a.Component);t.default=O},489:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var a=n(492),l=function(e){return e&&e.__esModule?e:{default:e}}(a),o=l.default,r=o.canUseDOM?window.HTMLElement:{};t.canUseDOM=o.canUseDOM;t.default=r},490:function(e,t,n){"use strict";function a(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function l(e){var t=e;if("string"==typeof t&&m.canUseDOM){var n=document.querySelectorAll(t);a(n,t),t="length"in n?n[0]:n}return p=t||p}function o(e){return!(!e&&!p)||((0,d.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),!1)}function r(e){o(e)&&(e||p).setAttribute("aria-hidden","true")}function s(e){o(e)&&(e||p).removeAttribute("aria-hidden")}function c(){p=null}function i(){p=null}Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=a,t.setElement=l,t.validateElement=o,t.hide=r,t.show=s,t.documentNotReadyOrSSRTesting=c,t.resetForTesting=i;var u=n(17),d=function(e){return e&&e.__esModule?e:{default:e}}(u),m=n(489),p=null},491:function(e,t,n){"use strict";function a(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow"):"none"==n.getPropertyValue("display")}function l(e){for(var t=e;t&&t!==document.body;){if(a(t))return!1;t=t.parentNode}return!0}function o(e,t){var n=e.nodeName.toLowerCase();return(c.test(n)&&!e.disabled||("a"===n?e.href||t:t))&&l(e)}function r(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&o(e,!n)}function s(e){return[].slice.call(e.querySelectorAll("*"),0).filter(r)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var c=/input|select|textarea|button|object/;e.exports=t.default},492:function(e,t,n){var a;!function(){"use strict";var l=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:l,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:l&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:l&&!!window.screen};void 0!==(a=function(){return o}.call(t,n,t,e))&&(e.exports=a)}()},495:function(e,t){},499:function(e,t,n){"use strict";function a(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){function t(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}this.setState(t.bind(this))}function o(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}function r(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,r=null,s=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?s="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==r||null!==s){var c=e.displayName||e.name,i="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+c+" uses "+i+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==r?"\n  "+r:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=a,t.componentWillReceiveProps=l),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=o;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var a=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,a)}}return e}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"polyfill",function(){return r}),a.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0},500:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return e()}Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),d=a(u),m=n(41),p=a(m),f=n(5),E=a(f),h=n(501),v=a(h),y=n(490),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(y),g=n(489),C=a(g),N=n(499),O=t.portalClassName="ReactModalPortal",w=t.bodyOpenClassName="ReactModal__Body--open",A=void 0!==p.default.createPortal,M=A?p.default.createPortal:p.default.unstable_renderSubtreeIntoContainer,S=function(e){function t(){var e,n,a,r;l(this,t);for(var i=arguments.length,u=Array(i),m=0;m<i;m++)u[m]=arguments[m];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.removePortal=function(){!A&&p.default.unmountComponentAtNode(a.node),s(a.props.parentSelector).removeChild(a.node)},a.portalRef=function(e){a.portal=e},a.renderPortal=function(e){var n=M(a,d.default.createElement(v.default,c({defaultStyles:t.defaultStyles},e)),a.node);a.portalRef(n)},r=n,o(a,r)}return r(t,e),i(t,[{key:"componentDidMount",value:function(){if(g.canUseDOM){A||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName;s(this.props.parentSelector).appendChild(this.node),!A&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:s(e.parentSelector),nextParent:s(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(g.canUseDOM){var a=this.props,l=a.isOpen,o=a.portalClassName;if(e.portalClassName!==o&&(this.node.className=o),e.isOpen||l){var r=n.prevParent,s=n.nextParent;s!==r&&(r.removeChild(this.node),s.appendChild(this.node)),!A&&this.renderPortal(this.props)}}}},{key:"componentWillUnmount",value:function(){if(g.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return g.canUseDOM&&A?(!this.node&&A&&(this.node=document.createElement("div")),M(d.default.createElement(v.default,c({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){b.setElement(e)}}]),t}(u.Component);S.propTypes={isOpen:E.default.bool.isRequired,style:E.default.shape({content:E.default.object,overlay:E.default.object}),portalClassName:E.default.string,bodyOpenClassName:E.default.string,htmlOpenClassName:E.default.string,className:E.default.oneOfType([E.default.string,E.default.shape({base:E.default.string.isRequired,afterOpen:E.default.string.isRequired,beforeClose:E.default.string.isRequired})]),overlayClassName:E.default.oneOfType([E.default.string,E.default.shape({base:E.default.string.isRequired,afterOpen:E.default.string.isRequired,beforeClose:E.default.string.isRequired})]),appElement:E.default.instanceOf(C.default),onAfterOpen:E.default.func,onRequestClose:E.default.func,closeTimeoutMS:E.default.number,ariaHideApp:E.default.bool,shouldFocusAfterRender:E.default.bool,shouldCloseOnOverlayClick:E.default.bool,shouldReturnFocusAfterClose:E.default.bool,parentSelector:E.default.func,aria:E.default.object,role:E.default.string,contentLabel:E.default.string,shouldCloseOnEsc:E.default.bool,overlayRef:E.default.func,contentRef:E.default.func},S.defaultProps={isOpen:!1,portalClassName:O,bodyOpenClassName:w,ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body}},S.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,N.polyfill)(S),t.default=S},501:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n(1),m=l(d),p=n(5),f=l(p),E=n(503),h=a(E),v=n(504),y=l(v),b=n(490),g=a(b),C=n(502),N=a(C),O=n(489),w=l(O),A={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},M=9,S=27,R=0,k=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,a=e.ariaHideApp,l=e.htmlOpenClassName,o=e.bodyOpenClassName;N.remove(document.body,o),l&&N.remove(document.getElementsByTagName("html")[0],l),a&&R>0&&0===(R-=1)&&g.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(h.returnFocus(),h.teardownScopedFocus()):h.popWithoutFocus())},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(h.setupScopedFocus(n.node),h.markForFocusLater()),n.setState({isOpen:!0},function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen()}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus()},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){e.keyCode===M&&(0,y.default)(n.content,e),n.props.shouldCloseOnEsc&&e.keyCode===S&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var a="object"===(void 0===t?"undefined":i(t))?t:{base:A[e],afterOpen:A[e]+"--after-open",beforeClose:A[e]+"--before-close"},l=a.base;return n.state.afterOpen&&(l=l+" "+a.afterOpen),n.state.beforeClose&&(l=l+" "+a.beforeClose),"string"==typeof t&&t?l+" "+t:l},n.ariaAttributes=function(e){return Object.keys(e).reduce(function(t,n){return t["aria-"+n]=e[n],t},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return s(t,e),u(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,a=e.htmlOpenClassName,l=e.bodyOpenClassName;N.add(document.body,l),a&&N.add(document.getElementsByTagName("html")[0],a),n&&(R+=1,g.hide(t))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.overlayClassName,a=e.defaultStyles,l=t?{}:a.content,o=n?{}:a.overlay;return this.shouldBeClosed()?null:m.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",n),style:c({},o,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown,"aria-modal":"true"},m.default.createElement("div",c({ref:this.setContentRef,style:c({},l,this.props.style.content),className:this.buildClassName("content",t),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.ariaAttributes(this.props.aria||{}),{"data-testid":this.props.testId}),this.props.children))}}]),t}(d.Component);k.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},k.propTypes={isOpen:f.default.bool.isRequired,defaultStyles:f.default.shape({content:f.default.object,overlay:f.default.object}),style:f.default.shape({content:f.default.object,overlay:f.default.object}),className:f.default.oneOfType([f.default.string,f.default.object]),overlayClassName:f.default.oneOfType([f.default.string,f.default.object]),bodyOpenClassName:f.default.string,htmlOpenClassName:f.default.string,ariaHideApp:f.default.bool,appElement:f.default.instanceOf(w.default),onAfterOpen:f.default.func,onRequestClose:f.default.func,closeTimeoutMS:f.default.number,shouldFocusAfterRender:f.default.bool,shouldCloseOnOverlayClick:f.default.bool,shouldReturnFocusAfterClose:f.default.bool,role:f.default.string,contentLabel:f.default.string,aria:f.default.object,children:f.default.node,shouldCloseOnEsc:f.default.bool,overlayRef:f.default.func,contentRef:f.default.func,testId:f.default.string},t.default=k,e.exports=t.default},502:function(e,t,n){"use strict";function a(){}Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=a;var l={},o={},r=function(e,t){return e[t]||(e[t]=0),e[t]+=1,t},s=function(e,t){return e[t]&&(e[t]-=1),t},c=function(e,t,n){n.forEach(function(n){r(t,n),e.add(n)})},i=function(e,t,n){n.forEach(function(n){s(t,n),0===t[n]&&e.remove(n)})};t.add=function(e,t){return c(e.classList,"html"==e.nodeName.toLowerCase()?l:o,t.split(" "))},t.remove=function(e,t){return i(e.classList,"html"==e.nodeName.toLowerCase()?l:o,t.split(" "))}},503:function(e,t,n){"use strict";function a(){f=!0}function l(){if(f){if(f=!1,!p)return;setTimeout(function(){if(!p.contains(document.activeElement)){((0,d.default)(p)[0]||p).focus()}},0)}}function o(){m.push(document.activeElement)}function r(){var e=null;try{return void(0!==m.length&&(e=m.pop(),e.focus()))}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function s(){m.length>0&&m.pop()}function c(e){p=e,window.addEventListener?(window.addEventListener("blur",a,!1),document.addEventListener("focus",l,!0)):(window.attachEvent("onBlur",a),document.attachEvent("onFocus",l))}function i(){p=null,window.addEventListener?(window.removeEventListener("blur",a),document.removeEventListener("focus",l)):(window.detachEvent("onBlur",a),document.detachEvent("onFocus",l))}Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=a,t.handleFocus=l,t.markForFocusLater=o,t.returnFocus=r,t.popWithoutFocus=s,t.setupScopedFocus=c,t.teardownScopedFocus=i;var u=n(491),d=function(e){return e&&e.__esModule?e:{default:e}}(u),m=[],p=null,f=!1},504:function(e,t,n){"use strict";function a(e,t){var n=(0,o.default)(e);if(!n.length)return void t.preventDefault();var a=t.shiftKey,l=n[0],r=n[n.length-1];if(e===document.activeElement){if(!a)return;s=r}var s;if(r!==document.activeElement||a||(s=l),l===document.activeElement&&a&&(s=r),s)return t.preventDefault(),void s.focus();var c=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null!=c&&"Chrome"!=c[1]&&null==/\biPod\b|\biPad\b/g.exec(navigator.userAgent)){var i=n.indexOf(document.activeElement);i>-1&&(i+=a?-1:1),t.preventDefault(),n[i].focus()}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var l=n(491),o=function(e){return e&&e.__esModule?e:{default:e}}(l);e.exports=t.default},505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(500),l=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=l.default,e.exports=t.default},511:function(e,t,n){e.exports=n.p+"2680118b03c7549c16978754c4473377.png"},512:function(e,t,n){e.exports=n.p+"354729cc5b5944116aff8112c1d8c8f7.png"},513:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=0.68a40cc5cd280c17b1f5.js.map