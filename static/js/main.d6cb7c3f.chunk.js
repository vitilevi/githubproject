(this["webpackJsonpfreela-github"]=this["webpackJsonpfreela-github"]||[]).push([[0],{39:function(e,t,n){},41:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(20),i=n.n(c),s=n(15),o=n(11),u=n(16),l=n(28),j=n(19),h=n(4),d="REQUEST_API",b="REQUEST_API_SUCCESS",p="REQUEST_API_ERROR",f="REQUEST_DETAILS",O="REQUEST_DETAILS_SUCCESS",m="REQUEST_USER",g="REQUEST_USER_SUCCESS",v="RESET_RESULTS",x="RESET_REPOS",y=function(e){return function(t){return t({type:d}),fetch("https://api.github.com/search/users?q=".concat(e,"&per_page=5")).then((function(e){return e.json()})).then((function(e){return t((n=e.items,{type:b,payload:n}));var n})).catch((function(e){return t({type:p,payload:e})}))}},E=function(e){return function(t){var n;return t({type:m,payload:n}),fetch("https://api.github.com/users/".concat(e)).then((function(e){return e.json()})).then((function(e){return t(function(e){return{type:g,payload:e}}(e))}))}},R=function(e){return function(t){var n;return t({type:f,payload:n}),fetch("https://api.github.com/users/".concat(e,"/repos")).then((function(e){return e.json()})).then((function(e){return t(function(e){return{type:O,payload:e}}(e))}))}},S={result:[],isLoading:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case d:return Object(h.a)(Object(h.a)({},e),{},{isLoading:!0});case b:return Object(h.a)(Object(h.a)({},e),{},{result:Object(j.a)(r),isLoading:!1});case p:return Object(h.a)(Object(h.a)({},e),{},{isLoading:!1});case v:return Object(h.a)(Object(h.a)({},e),{},{result:[],isLoading:!1});default:return e}},N={detailsResult:[],user:{},isLoadingProfile:!1,isLoadingRepo:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case m:return Object(h.a)(Object(h.a)({},e),{},{isLoadingProfile:!0});case g:return Object(h.a)(Object(h.a)({},e),{},{user:r,isLoadingProfile:!1});case f:return Object(h.a)(Object(h.a)({},e),{},{isLoadingRepo:!0});case O:return Object(h.a)(Object(h.a)({},e),{},{detailsResult:[].concat(Object(j.a)(e.detailsResult),Object(j.a)(r)),isLoadingRepo:!1});case x:return Object(h.a)(Object(h.a)({},e),{},{detailsResult:[],user:{}});default:return e}},k=Object(u.b)({searchReducer:L,details:_}),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,U=Object(u.d)(k,P(Object(u.a)(l.a))),T=(n(39),n(3)),C=n(24),I=n.n(C),A=n(29),w=n(21),D=n(9),Q=n(10),F=n(17),M=n(13),B=n(12),z=(n(41),n(1)),J=function(e){Object(M.a)(n,e);var t=Object(B.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(Q.a)(n,[{key:"getRepo",value:function(e){(0,this.props.fetchRepo)(e)}},{key:"render",value:function(){var e=this.props,t=e.results,n=e.isLoading,r=Object(z.jsx)("h1",{className:"loading",children:"Loading..."});return Object(z.jsx)("div",{className:"results",children:n?r:t.map((function(e,t){var n=e.login,r=e.avatar_url,a=e.html_url;return Object(z.jsxs)("div",{className:"profile-list",children:[Object(z.jsxs)("div",{className:"profile-pic-details",children:[Object(z.jsx)("span",{children:n}),Object(z.jsx)("img",{className:"img",src:r,alt:n})]}),Object(z.jsxs)("div",{className:"profile-btn",children:[Object(z.jsx)("a",{className:"btn btn-primary",target:"_blank",rel:"noreferrer",href:a,children:"Profile"}),Object(z.jsx)(s.b,{className:"btn btn-info",to:"/users/".concat(n),children:"Details"})]})]},t)}))})}}]),n}(r.Component),X=Object(o.b)((function(e){var t=e.searchReducer,n=e.details;return{results:t.result,isLoading:t.isLoading,repos:n.detailsResult}}),(function(e){return{fetchApi:function(t){return e(y(t))},fetchRepo:function(t){return e(R(t))}}}))(J),q=(n(47),function(e){Object(M.a)(n,e);var t=Object(B.a)(n);function n(){var e;return Object(D.a)(this,n),(e=t.call(this)).state={userInput:""},e.handleState=e.handleState.bind(Object(F.a)(e)),e.getInformation=e.getInformation.bind(Object(F.a)(e)),e.handleEnter=e.handleEnter.bind(Object(F.a)(e)),e}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.reset)()}},{key:"handleState",value:function(e){var t=e.target,n=t.name,r=t.value;this.setState(Object(w.a)({},n,r))}},{key:"getInformation",value:function(){var e=Object(A.a)(I.a.mark((function e(){var t,n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.fetchApi,r=t.results,e.next=3,n();case 3:return e.next=5,console.log(r);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleEnter",value:function(e){var t=e.key,n=this.props.fetchApi,r=this.state.userInput;"Enter"===t&&n(r)}},{key:"render",value:function(){var e=this.state.userInput;return Object(z.jsxs)("main",{className:"main",children:[Object(z.jsx)("div",{className:"search-bar-container",children:Object(z.jsxs)("label",{className:"home-form-label form-label",htmlFor:"user-input",children:[Object(z.jsx)("i",{className:"home-icon fa-2x fab fa-github"}),Object(z.jsx)("input",{type:"text",id:"user-input",name:"userInput",className:"form-control form-input",placeholder:"Search for a GitHub username",onChange:this.handleState,onKeyDown:this.handleEnter,value:e})]})}),Object(z.jsx)(X,{})]})}}]),n}(r.Component)),G=Object(o.b)((function(e){return{results:e.searchReducer.result}}),(function(e){return{fetchApi:function(t){return e(y(t))},reset:function(){return e({type:v})}}}))(q),H=(n(48),function(e){Object(M.a)(n,e);var t=Object(B.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.reset)(),this.getUserAndRepos()}},{key:"getUserAndRepos",value:function(){var e=this.props,t=e.match.params.login,n=e.fetchApi,r=e.fetchRepo,a=e.fetchUserProfile;n(t),a(t),r(t)}},{key:"render",value:function(){var e=this.props,t=e.repos,n=e.userProfile,r=e.isLoadingProfile,a=e.isLoadingRepo,c=n.login,i=n.avatar_url,o=n.html_url,u=n.bio,l=n.location,j=n.name,h=Object(z.jsx)("h1",{children:"Loading profile..."}),d=Object(z.jsx)("h1",{children:"Loading repos..."}),b=Object(z.jsx)("h2",{children:"No repositories"});return Object(z.jsxs)("div",{className:"profile",children:[Object(z.jsx)("div",{className:"back-btn",children:Object(z.jsx)(s.b,{to:"/",children:Object(z.jsx)("i",{class:"fas fa-arrow-circle-left",children:" Back home"})})}),r?h:Object(z.jsxs)("div",{className:"profile-wrapper",children:[Object(z.jsxs)("div",{className:"profile-pic",children:[Object(z.jsx)("img",{className:"img-details",src:i,alt:c}),Object(z.jsxs)("div",{className:"profile-name",children:[Object(z.jsx)("span",{children:c}),Object(z.jsx)("a",{className:"btn btn-primary",target:"_blank",rel:"noreferrer",href:o,children:"Profile"})]})]}),Object(z.jsxs)("div",{className:"profile-details",children:[Object(z.jsx)("p",{children:j}),Object(z.jsx)("p",{children:u}),Object(z.jsx)("p",{children:l})]})]}),Object(z.jsxs)("div",{className:"profile-repos",children:[Object(z.jsx)("h2",{children:"Principais reposit\xf3rios"}),a?d:0===t.length?b:t.filter((function(e){return!1===e.fork})).sort((function(e,t){return t.size-e.size})).slice(0,3).map((function(e,t){var n=e.name,r=e.html_url;return Object(z.jsxs)("div",{className:"repos",children:[Object(z.jsx)("span",{className:"repo-name",children:n}),Object(z.jsx)("a",{className:"btn btn-light",target:"_blank",rel:"noreferrer",href:r,children:"Details"})]},t)}))]})]})}}]),n}(r.Component)),K=Object(o.b)((function(e){var t=e.details;return{userProfile:t.user,repos:t.detailsResult,isLoadingProfile:t.isLoadingProfile,isLoadingRepo:t.isLoadingRepo}}),(function(e){return{fetchApi:function(t){return e(y(t))},fetchRepo:function(t){return e(R(t))},fetchUserProfile:function(t){return e(E(t))},reset:function(){return e({type:x})}}}))(H),V=function(e){Object(M.a)(n,e);var t=Object(B.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(Q.a)(n,[{key:"render",value:function(){return Object(z.jsx)("div",{children:Object(z.jsx)("h1",{children:"Not found..."})})}}]),n}(r.Component);function W(){return Object(z.jsxs)(T.c,{children:[Object(z.jsx)(T.a,{exact:!0,path:"/",component:G}),Object(z.jsx)(T.a,{path:"/users/:login",component:K}),Object(z.jsx)(T.a,{component:V})]})}var Y=function(){return Object(z.jsx)("div",{children:Object(z.jsx)(W,{})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(o.a,{store:U,children:Object(z.jsx)(s.a,{children:Object(z.jsx)(Y,{})})})}),document.getElementById("root")),Z()}},[[49,1,2]]]);
//# sourceMappingURL=main.d6cb7c3f.chunk.js.map