(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(188),i=a(186);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},185:function(e,t,a){e.exports=a.p+"static/logo-sr-rev-cc0c68663cfae4850fe70c1916d70c68.png"},186:function(e,t,a){"use strict";var n=a(187),r=a(0),o=a.n(r),i=a(11),s=a.n(i),c=a(192),l=a.n(c);function p(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,s=n.data.site,c=t||s.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",rel:"stylesheet"}),o.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-143750132-1"}),o.a.createElement("script",null,"window.dataLayer = window.dataLayer || []; function gtag()",window.dataLayer.push(arguments),"gtag('js', new Date()); gtag('config', 'UA-143750132-1');"))}p.defaultProps={lang:"en",meta:[],description:""},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=p},187:function(e){e.exports={data:{site:{siteMetadata:{title:"Surong Design Portfolio",description:"Surong Design Portfolio",author:"@surong ruan"}}}}},188:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(11),i=a.n(o),s=a(185),c=a.n(s);var l=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={openNav:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return r.a.createElement("div",{className:"main-nav navbar"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle",onClick:function(){return e.setState(function(e){return{openNav:!e.openNav}})}},r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{className:"site-logo",src:c.a,alt:"logo"}))),r.a.createElement("div",{className:"navbar-collapse collapse"+(this.state.openNav?" in":"")},r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},this.props.pri&&r.a.createElement("li",null,r.a.createElement("a",{href:this.props.pri.href},"Pre: ",this.props.pri.label)),this.props.next&&r.a.createElement("li",null,r.a.createElement("a",{href:this.props.next.href},"Next: ",this.props.next.label)))))},n}(r.a.Component),p=function(e){var t=e.pri,a=e.next,n=e.children;return r.a.createElement("div",null,r.a.createElement(l,{pri:t,next:a}),r.a.createElement("div",{className:"pt-40 pb-80"},r.a.createElement("main",null,n)))};p.propTypes={pri:i.a.object,next:i.a.object,children:i.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-8c08d2c58bb78b52ea24.js.map