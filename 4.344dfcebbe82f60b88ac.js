webpackJsonp([4],{486:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(123),l=a.n(n),r=a(124),c=a.n(r),s=a(126),o=a.n(s),m=a(125),i=a.n(m),d=a(1),g=a.n(d),u=a(496),E=(a.n(u),a(208)),p=(a.n(E),a(209)),b=(a.n(p),a(12)),N=a.n(b),v=a(210),D=(a.n(v),a(514)),C=a.n(D),h=a(515),A=a.n(h),f=function(e){function t(e){l()(this,t);var a=o()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.onChange=function(){},a.onInputChange=function(e,t){var n=a.state;n[t]=e,a.setState({state:n})},a.goToPaymentDetail=function(){a.props.router.push("/payment-detail")},a.goToIndex=function(){a.props.router.push("/")},a.handleSelect=function(e){var t=e.selection.startDate,n=e.selection.endDate,l=a.subtractDate(t,n)+1;a.setState({startDate:t,endDate:n,startDateString:a.getDateString(t),endDateString:a.getDateString(n),endDateYearString:a.getYearString(n),days:l})},a.openDatePicker=function(){a.setState({showDatePicker:!0})},a.closeDatePicker=function(){a.setState({showDatePicker:!1})},a.getDateString=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.toDateString();return t?a.substring(8,10)+" "+a.substring(4,7):a.substring(0,3)+", "+a.substring(8,10)+" "+a.substring(4,7)},a.getYearString=function(e){return""+e.getFullYear()};var n=new Date;return a.state={startDate:n,endDate:n,startDateString:a.getDateString(n),endDateString:a.getDateString(n),endDateYearString:a.getYearString(n),days:1,showDatePicker:!1,promoCode:"may31x"},a}return i()(t,e),c()(t,[{key:"subtractDate",value:function(e,t){var a=e.getTime(),n=t.getTime(),l=n-a;return Math.round(l/864e5)}},{key:"render",value:function(){var e=this,t=this.state,a=t.startDate,n=t.endDate,l=t.days,r=t.startDateString,c=t.endDateString,s=t.endDateYearString,o=t.showDatePicker,m=t.promoCode,i={startDate:a,endDate:n,key:"selection"};return g.a.createElement("div",{className:"oder-summary"},g.a.createElement("div",{className:"header-section"},g.a.createElement("div",{className:"header-items"},g.a.createElement("div",{className:"header-left"},g.a.createElement("img",{src:C.a,className:"droplet-logo",onClick:this.goToIndex})),g.a.createElement("div",{className:"header-right"},g.a.createElement("label",{className:"name-text clickable"},"Welcome back, Elson Ng"),g.a.createElement("div",{className:"slash-div"}),g.a.createElement("label",{className:"name-text clickable"},"Log out"),g.a.createElement("img",{src:A.a,className:"logout-img clickable"})))),g.a.createElement("div",{className:"progress"},g.a.createElement("div",{className:"finish-progress"})),g.a.createElement("div",{className:"container history-container"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"offset-1 col-10"},g.a.createElement("div",{className:"step-section"},g.a.createElement("h4",{className:"step-text"},"Step 3 : Order Summary")),g.a.createElement("div",{className:"pick-date-section"},g.a.createElement("div",{className:"row label-section"},g.a.createElement("div",{className:"offset-1 col-4"},g.a.createElement("label",{className:"title-text"},"Covered Dates")),g.a.createElement("div",{className:"col-5"},g.a.createElement("label",{className:"title-text"},"Total Cost ",g.a.createElement("span",null,"(S$4/day)")))),g.a.createElement("div",{className:"row second-section"},g.a.createElement("div",{className:"offset-1 col-4"},g.a.createElement("p",{className:"date-time",onClick:this.openDatePicker},r," ",g.a.createElement("span",null,"to")," ",g.a.createElement("br",null),c," ",g.a.createElement("span",null,s)),g.a.createElement("div",{className:N()({"d-none":!o})},g.a.createElement("div",{className:"date-popup-narrow"}),g.a.createElement(v.DateRangePicker,{ranges:[i],onChange:this.handleSelect,months:2,direction:"horizontal",showMonthAndYearPickers:!1,showDateDisplay:!1}),g.a.createElement("div",{className:"date-picker-footer"},g.a.createElement("button",{type:"button",className:"btn btn-close",onClick:this.closeDatePicker},"Close")),g.a.createElement("div",{className:"date-range-picker-modal",onClick:this.closeDatePicker})),g.a.createElement("div",null,g.a.createElement("button",{className:"btn btn-green btn-change-date",onClick:this.openDatePicker},"CHANGE DATE"))),g.a.createElement("div",{className:"col-5"},g.a.createElement("p",{className:"money"},"S$",4*l,".00"),g.a.createElement("hr",{className:"green-line"}),g.a.createElement("p",{className:"detail-text"},g.a.createElement("strong",null,l," Day Coverage"),g.a.createElement("br",null),"Cover 70% of Your Fare",g.a.createElement("br",null),g.a.createElement("span",null,"Maximum Claim for ",l," days:",g.a.createElement("br",null),"S$",65*l," (up to S$65/day)"))))),g.a.createElement("div",{className:"table-section"},g.a.createElement("table",{className:"table order-table"},g.a.createElement("thead",null,g.a.createElement("tr",null,g.a.createElement("th",null,"Order"),g.a.createElement("th",null,"Details"),g.a.createElement("th",null),g.a.createElement("th",{className:"text-right"},"Total($)"))),g.a.createElement("tbody",null,g.a.createElement("tr",null,g.a.createElement("td",null,g.a.createElement("strong",null,l," Day Coverages")),g.a.createElement("td",null,this.getDateString(a,!0)," - ",this.getDateString(n,!0)," ",this.getYearString(n)),g.a.createElement("td",null),g.a.createElement("td",{className:"text-right"},4*l,".00")),g.a.createElement("tr",null,g.a.createElement("td",null),g.a.createElement("td",null),g.a.createElement("td",{className:"text-right"},"Promo Code Applied(",m,"):"),g.a.createElement("td",{className:"text-right"},"-2.00")),g.a.createElement("tr",null,g.a.createElement("td",null),g.a.createElement("td",null),g.a.createElement("td",{className:"text-right"},g.a.createElement("strong",null,"Total:")),g.a.createElement("td",{className:"text-right total-number"},4*l-2,".00"))))),g.a.createElement("div",{className:"promo-code-section"},g.a.createElement("div",{className:"form-group"},g.a.createElement("label",{htmlFor:"code",className:"promo-text"},"Promo Code, if any:"),g.a.createElement("input",{type:"input",className:"form-control promo-input",id:"code",value:m,onChange:function(t){e.onInputChange(t.target.value,"promoCode")}})),g.a.createElement("button",{className:"btn btn-green btn-checkout",onClick:this.goToPaymentDetail},"CHECKOUT NOW ➡"))))))}}]),t}(g.a.Component);t.default=f},496:function(e,t){},514:function(e,t,a){e.exports=a.p+"2680118b03c7549c16978754c4473377.png"},515:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=4.344dfcebbe82f60b88ac.js.map