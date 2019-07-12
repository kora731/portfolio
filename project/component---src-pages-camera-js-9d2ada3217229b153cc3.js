(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(203),i=a.n(l),s=a(189),o=a(190),c=a(191),m=a(264),p=a.n(m),d=a(265),u=a.n(d),g=a(266),h=a.n(g),f=a(267),b=a.n(f),v=a(268),w=a.n(v),E=a(269),y=a.n(E),N=a(270),x=a.n(N),k=a(271),T=a.n(k),I=a(272),M=a.n(I),S=a(273),C=a.n(S),A=a(274),F=a.n(A),U=a(275),j=a.n(U),z=a(276),D=a.n(z),P=a(277),O=a.n(P),R=a(278),L=a.n(R),J=a(279),B=a.n(J),V=a(280),W=a.n(V),H=a(281),q=a.n(H),X=a(282),_=a.n(X),G=a(283),Y=a.n(G),K=a(284),Q=a.n(K),Z=a(285),$=a.n(Z),ee={name:"Pipeline",pri:{label:"Video Pipeline",href:"/project/pipeline/index.html"},next:{label:"Autodesk",href:"/project/infraWork/index.html"},title:"Jaunt Desktop App: Camera Controller and Media Manager",subTitle:"Capture and manage media in a simply and reliable way",highlight1:["How to redesign the desktop app to provide a stable, fluid and transparent experience?"],briefAttribute:[{label:"Timeline",value:"Nov. 2016 - May. 2017"},{label:"Team",value:"Engineering team, PM"},{label:"Role",value:"Lead UX/UI Designer"},{label:"Targeted Users",value:"Indie movie producers and creators"},{label:"Design Scope",value:"Full design lifecycle (UXR, UX/UI)\nExperience map\nLiving style guide"},{label:"Outcome",value:"Very well received app releases. Timelapse and live feed features are top rated functions by Jaunt camera users"}],aTitle:[{key:"Overview"},{label:"Brief",key:"Brief"},{label:"Capture recordings",key:"Capture recordings"},{label:"Design challenge",key:"Design challenge"},{label:"Solution framework",subTitle:["Media manager","Camera controller"],key:"Solution framework"},{label:"Outcome",key:"Outcome"},{label:"Takeaway",key:"Takeaway"}],images:[{original:O.a,thumbnail:O.a},{original:L.a,thumbnail:L.a},{original:B.a,thumbnail:B.a},{original:W.a,thumbnail:W.a},{original:q.a,thumbnail:q.a},{original:_.a,thumbnail:_.a},{original:Y.a,thumbnail:Y.a},{original:Q.a,thumbnail:Q.a},{original:$.a,thumbnail:$.a}]},te=function(e){switch(e){case"Overview":return r.a.createElement("img",{alt:"",className:"img-responsive",src:p.a});case"Brief":return r.a.createElement(s.a,{attributes:ee.briefAttribute});case"Capture recordings":return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Jaunt flagship product Jaunt One camera is paired with the camera controller application to access a wide variety of features. While connecting to the camera, users can adjust the camera exposure, capture preview and even get real time views. Jaunt media manager is the gateway tool to transfer recordings between VR camera, cloud services and user local data. It organizes 24 camera footage into formats ready for ingestion, to upload and download from the cloud."),r.a.createElement("p",null),r.a.createElement("img",{alt:"",className:"img-responsive",src:u.a}),r.a.createElement("h4",{className:"text-bold mt-40"},"Camera Controller App Pain Points"),r.a.createElement("span",null,"Overloaded with lots of features and tangled statuses, the users had a hard time understanding all the modes and controls. Also the camera has 24 modules which may need to manual exposure adjustment of specific modules. How to design the viewport layout to support both global and individual camera view?"),r.a.createElement("p",null),r.a.createElement("h4",{className:"sectionTitle text-bold mt-40"},"Media Manager App Pain Points"),r.a.createElement("span",null,"VR video data size is very large at 50+ GB level sheer size with 4+ formats of stitched results. Long download time and internet connection stability are also challenging to manage the media in a secure and stable way."),r.a.createElement("p",null));case"Design challenge":return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{attributes:ee.highlight1}),r.a.createElement("h4",{className:"text-bold mt-40"},"Experience Goals"),r.a.createElement("span",null,"Alleviate the user burden - redesign configuration flow to make it much easier and automate unnecessary steps"),r.a.createElement("p",null),r.a.createElement("span",null,"Transparent system status - monitor the system changes, visualize the progress up-front for the user"),r.a.createElement("p",null),r.a.createElement("span",null,"Balance advanced powerful settings with simplicity to support various user needs"),r.a.createElement("p",null),r.a.createElement("span",null,"Fluid and scalable UI to support newly added features and long term vision"),r.a.createElement("p",null));case"Solution framework":return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{alt:"",className:"img-responsive",src:h.a}));case"Media manager":return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"text-bold mt-40"},"Download media workflow and UI"),r.a.createElement("div",{className:"row"},r.a.createElement("img",{alt:"",className:"img-responsive col-lg-8",src:b.a}),r.a.createElement("img",{alt:"",className:"img-responsive col-lg-4",src:w.a})),r.a.createElement("h4",{className:"text-bold mt-40"},"Cloud Sync Model"),r.a.createElement("img",{alt:"",className:"img-responsive",src:y.a}),r.a.createElement("h4",{className:"text-bold mt-40"},"Final product focusing on download feature"),r.a.createElement("span",null,"Although synchronization model between local and cloud is desirable, it poses huge technical challenges for the team. Given the limited engineering resources, we re-define the download feature scope to focus on patch download. After talking to more editors and data wranglers, we learnt that users mostly will gather the same type of media during each session. With default setup to most frequent use cases, the user is still able to customize to their special case needs."),r.a.createElement("img",{alt:"",className:"img-responsive",src:x.a}));case"Camera controller":return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"text-bold mt-40"},"Experience Framework"),r.a.createElement("p",null,"How to provide a more fluid and scalable UI with new added features",r.a.createElement("br",null),"- to adopt a similar mental model to DSLR camera operation: switch between commands and actions, instead of showing all buttons and UI at once, prioritize and group functions."),r.a.createElement("p",null,"How to make widgets more accessible and efficient",r.a.createElement("br",null),"- to lower the learning bar to understand the UI, focus on user tasks to simplify the flow. Learn from mobile camera apps, simple WYSIWYG model while still powerful with advanced settings"),r.a.createElement("h4",{className:"text-bold mt-40"},"IA Structure"),r.a.createElement("span",null,"Modes:  Record or Time-lapse,  Capture Preview and Video Feed",r.a.createElement("p",null),"Settings: The camera has Setting Profile, difference between auto and manual modes",r.a.createElement("p",null),"Viewport: View of All / Individual Camera Modules: naive stitch, list, side by side"),r.a.createElement("h4",{className:"text-bold mt-40"},"Design Iterations"),r.a.createElement("span",null,"Iteration 1:",r.a.createElement("p",null),"My first iteration is to design the button group, which helps prioritize functions. But the introduction of modes is making design more complicated. The coupling relationship makes users more confused with the view and action dependency. Also the location of the customization view is not scalable, and taking up the valuable screen space."),r.a.createElement("div",{className:"row mt-20 mb-20"},r.a.createElement("img",{alt:"",className:"img-responsive col-lg-6",src:T.a}),r.a.createElement("img",{alt:"",className:"img-responsive col-lg-6",src:M.a})),r.a.createElement("span",null," Iteration 2:",r.a.createElement("p",null),"For the next iteration, I tried to have the left sidebar showing the default parameters while expanding to edit: powerful but also too complicated, not mapping to camera controller mental model. Live feed as a separate way to streaming views, is designed with more visual emphasis to encourage user interaction to try it out."),r.a.createElement("div",{className:"row mt-20 mb-20"},r.a.createElement("img",{alt:"",className:"img-responsive col-lg-6",src:C.a}),r.a.createElement("img",{alt:"",className:"img-responsive col-lg-6",src:F.a})),r.a.createElement("span",null,"Iteration 3:",r.a.createElement("p",null),"While research and keep trying out different layout, it's critical to remember the base principle of balancing simplicity with being powerful. Then I introduce the toggle control of camera settings to allow for hide / show components."),r.a.createElement("div",{className:"row mt-20 mb-20"},r.a.createElement("img",{alt:"",className:"img-responsive col-lg-6",src:j.a}),r.a.createElement("img",{alt:"",className:"img-responsive col-lg-6",src:D.a})));case"Outcome":return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"When I shared the proposal via InVision prototype with creators remotely, they are very excited about the upcoming timelapse new feature. I worked tightly with the app engineer to prepare all the assets and UI specs, and got the app released in May 2017. It was well received among creators using Jaunt camera."),r.a.createElement(i.a,{items:ee.images}));case"Takeaway":return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Fast and slow:  During the first week of joining Jaunt, I was able to design the download module right away. However, in the following months, I start learning more about how users actually interact with the Media Manager, only to discover the initial download dialog is not addressing the key pain points. Then I started slow iteration of the download dialog, to craft each interaction to support the user tasks better. The easiest and most accessible, right at hand, solution always poses high risk to actually solving the problem. Because it mostly overlooks the factors and edge cases, and that's where UX matters most. It has to be thought through with all use cases, and test against all possible routes."),r.a.createElement("p",null),r.a.createElement("span",null,"Camera is very prevalent in our daily life. But the adjustable controls vary a lot between mobile and professional cameras. Optimizing the UI layout alone doesn’t help address the workflow problem. Also with so much customization involved, how to uncover the mental model is also critical."),r.a.createElement("p",null));default:return r.a.createElement(r.a.Fragment,null)}};t.default=function(){return r.a.createElement(c.a,{data:ee,renderSection:te,lock:!1})}},185:function(e,t,a){e.exports=a.p+"static/logo-sr-rev-cc0c68663cfae4850fe70c1916d70c68.png"},186:function(e,t,a){"use strict";var n=a(187),r=a(0),l=a.n(r),i=a(11),s=a.n(i),o=a(192),c=a.n(o);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,s=n.data.site,o=t||s.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:i},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:o}].concat(r)},l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",rel:"stylesheet"}),l.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-143750132-1"}),l.a.createElement("script",null,"window.dataLayer = window.dataLayer || []; function gtag()",dataLayer.push(arguments),"gtag('js', new Date()); gtag('config', 'UA-143750132-1');"))}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=m},187:function(e){e.exports={data:{site:{siteMetadata:{title:"Surong Design Portfolio",description:"Surong Design Portfolio",author:"@surong ruan"}}}}},188:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(11),i=a.n(l),s=a(185),o=a.n(s);var c=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={openNav:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return r.a.createElement("div",{className:"main-nav navbar"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle",onClick:function(){return e.setState(function(e){return{openNav:!e.openNav}})}},r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{className:"site-logo",src:o.a,alt:"logo"}))),r.a.createElement("div",{className:"navbar-collapse collapse"+(this.state.openNav?" in":"")},r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},this.props.pri&&r.a.createElement("li",null,r.a.createElement("a",{href:this.props.pri.href},"Pre: ",this.props.pri.label)),this.props.next&&r.a.createElement("li",null,r.a.createElement("a",{href:this.props.next.href},"Next: ",this.props.next.label)))))},n}(r.a.Component),m=function(e){var t=e.pri,a=e.next,n=e.children;return r.a.createElement("div",null,r.a.createElement(c,{pri:t,next:a}),r.a.createElement("div",{className:"pt-40 pb-80"},r.a.createElement("main",null,n)))};m.propTypes={pri:i.a.object,next:i.a.object,children:i.a.node.isRequired};t.a=m},189:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(11),i=a.n(l),s=(a(176),function(e){var t=e.attributes;return r.a.createElement("div",{className:"brief"},t.map(function(e,t){return r.a.createElement("div",{className:"attribute",key:t},r.a.createElement("h5",null,e.label),r.a.createElement("span",null,e.value))}))});s.propTypes={attributes:i.a.array},t.a=s},190:function(e,t,a){"use strict";var n=a(11),r=a.n(n),l=a(0),i=a.n(l),s=function(e){var t=e.attributes,a=Math.min(4,t.length);return i.a.createElement("div",{className:"row"},t.map(function(e,t){return i.a.createElement("div",{className:"col-lg-"+12/a,key:t},i.a.createElement("h4",{className:"contentHeighlight"},e))}))};s.propTypes={attributes:r.a.array},t.a=s},191:function(e,t,a){"use strict";a(34);var n=a(0),r=a.n(n),l=a(11),i=a.n(l),s=a(186),o=function(e){var t=e.title,a=e.subTitle;return r.a.createElement("div",{className:"container bg-light pt-40 text-center"},r.a.createElement("h1",{className:"mb-10 text-bold"},t),r.a.createElement("h3",{className:"text-color mb-60"},a))};o.propTypes={title:i.a.string,subTitle:i.a.string};var c=o,m=a(193),p=a.n(m),d=function(){return r.a.createElement("div",{className:"password"},r.a.createElement("p",null,"Please ",r.a.createElement("a",{href:"mailto:surong731@gmail.com",target:"_blank",rel:"noopener noreferrer"},"contact me "),"for the password to access project content."),r.a.createElement("form",null,r.a.createElement("input",{type:"password",placeholder:"Enter password"}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),"c3ItdXg="===btoa(p()(".password input").val())?(p()(".password button").removeClass("-wrong"),p()(".password").slideUp(),p()(".password-protected").slideDown()):p()(".password button").addClass("-wrong")}})))},u=a(378),g=(a(177),function(e){var t=e.title,a=e.isSubTitle,n=e.children;return r.a.createElement("div",{id:t,className:"container bg-light pt-40 text-left content-section"},r.a.createElement("div",{className:"row col-lg-9 col-lg-push-2"},t?a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-2 contentSubtitle"}),r.a.createElement("div",{className:"col-lg-10"},r.a.createElement("h3",{className:"text-color"},t)))),r.a.createElement("div",{className:"col-lg-9"},n))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("h4",{className:"text-color text-bold text-lg mb-0"},t),r.a.createElement("hr",{className:"hr-color hr-bold mt-0 mb-0"})),r.a.createElement("div",{className:"col-lg-9"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"}),r.a.createElement("div",{className:"col-lg-9"},n))):n))});g.propTypes={title:i.a.string,isSubTitle:i.a.bool,children:i.a.node.isRequired};var h=g,f=a(188),b=u.a.Link,v=function(e){var t=e.data,a=e.renderSection,n=e.lock;return r.a.createElement(f.a,{pri:t.pri,next:t.next},r.a.createElement(s.a,{title:t.name}),r.a.createElement(c,{title:t.title,subTitle:t.subTitle}),n&&r.a.createElement(d,null),r.a.createElement("div",{className:n?"password-protected":""},r.a.createElement("div",{className:"AnchorPosition"},r.a.createElement(u.a,null,t.aTitle.map(function(e,t){return(0===t||e.label)&&r.a.createElement(b,{href:0===t?"#top":"#"+e.label,title:e.label||"Overview",key:t},e.subTitle&&e.subTitle.map(function(e,t){return r.a.createElement(b,{href:"#"+e,title:e,key:t})}))}))),t.aTitle.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(h,{title:e.label},a(e.key)),e.subTitle&&e.subTitle.map(function(e,t){return r.a.createElement(h,{title:e,isSubTitle:!0,key:t},a(e))}))})))};v.propTypes={data:i.a.object,lock:i.a.bool,renderSection:i.a.func.isRequired};t.a=v},264:function(e,t,a){e.exports=a.p+"static/cam-cover-a844fa0a2f31166521eb1c46a8facb9c.png"},265:function(e,t,a){e.exports=a.p+"static/jaunt-pipeline-916525424de094fe9f0e3d47677f5fb1.png"},266:function(e,t,a){e.exports=a.p+"static/jaunt-ia-2dd2c21b7e16115293670c046eed01f5.png"},267:function(e,t,a){e.exports=a.p+"static/dozer-ixd-0b4286c7c47a0af4543cb72b332f49d3.png"},268:function(e,t,a){e.exports=a.p+"static/dozer-ui-f4e07d30923605f861c5cd774b582d69.png"},269:function(e,t,a){e.exports=a.p+"static/dozer-syncmedia-e2ee3e0330418dbc0c6eb225c6643212.png"},270:function(e,t,a){e.exports=a.p+"static/dozer-download-6f289b41f092db76e481bafc155fa92f.png"},271:function(e,t,a){e.exports=a.p+"static/tri-v1-1-f97c17be1149d09c4d6528d34e8a49d7.png"},272:function(e,t,a){e.exports=a.p+"static/tri-v1-2-d5676d66e50ba7337c6506e8a7c3f633.png"},273:function(e,t,a){e.exports=a.p+"static/tri-v2-1-3fdd049459041b359040586f5088f418.png"},274:function(e,t,a){e.exports=a.p+"static/tri-v2-2-7c94dbb5aac6cde022657e962c503649.png"},275:function(e,t,a){e.exports=a.p+"static/tri-v3-1-bc660f1f870b85345f89f26855ea900d.png"},276:function(e,t,a){e.exports=a.p+"static/tri-v3-2-c197cb4cf0bb1757dc702ff2a27c0dd5.png"},277:function(e,t,a){e.exports=a.p+"static/tri-step1-aafed8ba5ab2af85bf8d55fca7419c6f.png"},278:function(e,t,a){e.exports=a.p+"static/tri-step2-95643950df5a3e52193ad1ca72299a2e.png"},279:function(e,t,a){e.exports=a.p+"static/tri-step3-145d2aa327f5ec7ad113ab85afd8f340.png"},280:function(e,t,a){e.exports=a.p+"static/tri-step4-fbee0176819e9e31312e626a0d4ea50c.png"},281:function(e,t,a){e.exports=a.p+"static/tri-step5-cc21fd919e9ae6bf91c4bac56168914a.png"},282:function(e,t,a){e.exports=a.p+"static/tri-step6-e11f5fb27b1a09d7ced82b5d21d9c532.png"},283:function(e,t,a){e.exports=a.p+"static/tri-step7-82df9d915634f7ac556c598a45cfe581.png"},284:function(e,t,a){e.exports=a.p+"static/tri-step8-b881ca5850199eb081e9dc0079e614fe.png"},285:function(e,t,a){e.exports=a.p+"static/tri-step9-64e54319d89e5282ec058ffd603fe6e0.png"}}]);
//# sourceMappingURL=component---src-pages-camera-js-9d2ada3217229b153cc3.js.map