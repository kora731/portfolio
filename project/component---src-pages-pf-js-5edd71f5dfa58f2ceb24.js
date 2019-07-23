(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(191),s=a(192),i=a(193),o=a(203),c=a(344),m=a.n(c),d=a(345),p=a.n(d),u=a(346),h=a.n(u),g=a(347),f=a.n(g),b=a(348),E=a.n(b),v=a(349),w=a.n(v),y=a(350),N=a.n(y),x=a(351),k=a.n(x),T=a(352),I=a.n(T),F=a(353),D=a.n(F),U=a(354),P=a.n(U),A=a(355),S=a.n(A),O=a(356),C=a.n(O),R=a(357),W=a.n(R),j=a(358),q=a.n(j),M=a(359),B=a.n(M),H=a(360),z=a.n(H),_=a(361),Q=a.n(_),G=a(362),J=a.n(G),L=a(363),X=a.n(L),V=a(364),Y=a.n(V),K=a(365),Z=a.n(K),$=a(366),ee=a.n($),te={name:"PathFinder",pri:{label:"home",href:"/"},next:{label:"mobile",href:"/project/mobile/index.html"},title:"PathFinder: patient board to facilitate discharge planning",subTitle:"Actionable Data Delivered in a Delightful Humane Way",highlight1:["How might we redesign the patient board to enable proactive discharge planning"],highlight2:["Easy to configure and reuse","Actionable and transparent","Delightful and refreshing"],briefAttribute:[{label:"Timeline",value:"Jan. 2018 - Oct. 2018"},{label:"Team",value:"PM, FE and BE"},{label:"Role",value:"Lead UX/UI Designer"},{label:"Targeted Users",value:"Hospital in-patient care team"},{label:"Design Scope",value:"User Research   IA\nInteraction Design\nRedesign   UI Specs"},{label:"Outcome",value:"Flagship product used at 20+ hospitals with widely positive feedback"}],aTitle:[{key:"Overview"},{label:"Brief",key:"Brief"},{label:"Why PathFinder",key:"Why PathFinder"},{label:"Product Goals",key:"Product Goals"},{label:"Understand Users",key:"Understand Users"},{label:"Design Challenge",key:"Design Challenge"},{label:"Solution Framework",subTitle:["Modularized and scalable board","Actionable Component","UI Exploration","Final Product UI"],key:"Solution Framework"},{label:"UI Delivery",key:"UI Delivery"},{label:"Outcome",key:"Outcome"}]},ae=function(e){switch(e){case"Overview":return r.a.createElement("img",{alt:"",className:"img-responsive",src:m.a});case"Brief":return r.a.createElement(l.a,{attributes:te.briefAttribute});case"Why PathFinder":return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Today’s healthcare systems are increasingly focused on reducing patient flow efficiency to save costs and capital spending. Managing patient flows are shouldered by frontline care teams, who are already overwhelmed with increasing patient demands, and complex dashboards and reports. "),r.a.createElement("p",{className:"mt-6"}),r.a.createElement("span",null,"Qventus offers ",r.a.createElement("b",null,"PathFinder solution to optimize patient flow in realtime while reducing the cognitive burden of care team"),". With a dedicated product focus on modern, user-centric design, PathFinder intends to engage the whole team to streamline the patient flow and reduce length of stay."));case"Product Goals":return r.a.createElement("img",{alt:"",className:"img-responsive",src:p.a});case"Understand Users":return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"We shadowed multiple hospitals to observe how frontline nurses handled the patient flow in their day to day job. It helps uncover potential touchpoints where PathFinder could facilitate care teams to improve discharge process. I consolidated our learnings into the persona and flow diagram so that the whole team can leverage these user insights to understand problems better."),r.a.createElement("h4",{className:"text-bold mt-40"},"Stakeholder mapping and key persona"),r.a.createElement("img",{alt:"",className:"img-responsive",src:h.a}),r.a.createElement("p",null),r.a.createElement("h4",{className:"text-bold mt-40"},"Patient Discharge Flow"),r.a.createElement("img",{alt:"",className:"img-responsive",src:f.a}),r.a.createElement("h4",{className:"text-bold mt-40"},"Targeted Use Case: IDR (Interdisciplinary Rounding)"),r.a.createElement("span",null,"How might we support charge nurse to review patients during IDR, like daily standup by the TV and to make a decision, so that patient flow and discharge are streamlined and move patients forward in the process to drive the outcome of reduced length of stay."));case"Design Challenge":return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{attributes:te.highlight1}),r.a.createElement("p",null),r.a.createElement("h4",{className:"text-bold mt-40"},"Gap of the previous patient board"),r.a.createElement("img",{alt:"",className:"img-responsive mb-20 mt-10",src:E.a}),r.a.createElement("span",null,"Before I joint the team, there was already a patient board for IDR use case. After talking to Qventus internal stakeholders, we identified a few gaps:"),r.a.createElement("p",null),r.a.createElement("p",{className:"text-bold mt-10"},"1. Not configurable"),r.a.createElement("span",null,"Data columns on the board were manually written with SQL and it took a long time to configure every board and test the schemas."),r.a.createElement("p",null),r.a.createElement("p",{className:"text-bold mt-10"},"2. Poor affordance"),r.a.createElement("span",null,"Some columns are editable and require user entry. However the previous UI didn't show clearly interactive fields and users couldn't locate where they need to enter data."),r.a.createElement("p",null),r.a.createElement("p",{className:"text-bold mt-10"},"3. How to differentiate from other healthcare products?"),r.a.createElement("span",null,"Heathcare IT software mostly share a corporate blue hue which tends to look alike. How might we make PathFinder visually appealing and differentiate from other competitors?"),r.a.createElement("p",null),r.a.createElement("h4",{className:"text-bold mt-40"},"Experience Goals"),r.a.createElement("span",null,"As the lead designer, I started the design project by working with PM closely on setting experience goals for the new patient board. "),r.a.createElement("p",null),r.a.createElement(i.a,{attributes:te.highlight2}));case"Solution Framework":return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Our approaches to solve the design challenge and meet experience goals can be summarized into three themes:"),r.a.createElement("p",null),r.a.createElement("h4",{className:"text-bold"},"- Modularized and scalable board"),r.a.createElement("h4",{className:"text-bold"},"- Actionable component"),r.a.createElement("h4",{className:"text-bold"},"- UI exploration for stellar visual"));case"Modularized and scalable board":return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"text-bold mt-0"},"Patient Data Taxonomy - IA"),r.a.createElement("span",null,"To make sure the board design meets configuration requirements, I’m working closely with BE and FE to layout the information architecutre, so that each column and field is aligned with how data is presented to support user interaction."),r.a.createElement("p",null),r.a.createElement("span",null,"The taxonomy table below helps the team understand different categories of data, whether it requires user input or read only, or whether it supports special style or data validation."),r.a.createElement("img",{alt:"",className:"img-responsive",src:w.a}),r.a.createElement("h4",{className:"text-bold mt-40"},"Expand board space for more data"),r.a.createElement("span",null,"Previous table UI was challenging for adding more columns. I started exploring different board layouts to expand the horizontal space. "),r.a.createElement("p",null),r.a.createElement("img",{alt:"",className:"img-responsive",src:N.a}),r.a.createElement("p",null),r.a.createElement("h4",{className:"text-bold mt-40"},"Focus on list view design"),r.a.createElement("span",null,"After the first iteration, we narrowed down to three options because of the project timeline and technical constraints. The list view became the unification point where data was presented in a progressive way, and also with the advantage to sort and filter. We also constructed the low-fi mockup covering data structure, so that moving forward we could valid both layout and data with end users."),r.a.createElement("p",null),r.a.createElement("img",{alt:"",className:"img-responsive",src:k.a}),r.a.createElement("h4",{className:"text-bold mt-40"},"User testing findings"),r.a.createElement("span",null,"When we presented the three options to end users, 4 out of 5 users chose Option Two because of it being clean and familiar. Expanding the row rather than replacing/relocating information was preferred, which made it easy to scan and compare data across rows."),r.a.createElement("p",null),r.a.createElement("span",null,"After I brought these findings back to the team, we decided on constructing the list view first. Later we would investigate further into the expansion view as the version two. "));case"Actionable Component":return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"PathFinder boards serve as the data source to prompt care team to enter patient dicharge plan, and collaborate on resolving barriers. User-entry data on the board is the most valuable information set. How might we design the data columns to encourage user input?"),r.a.createElement("p",null),r.a.createElement("img",{alt:"",className:"img-responsive",src:I.a}),r.a.createElement("h4",{className:"text-bold mt-40"},"EDD (estimated discharge date): deliver predictive leaving date"),r.a.createElement("span",null,"Qventus developed machine learning models to predict when patient is going to leave. We surface these prediction results next to EDD field for entry reference. Among the solutions I explored, we chose Option D for the short term MVP solution based on the data availability. "),r.a.createElement("p",null),r.a.createElement(o.a,{src:D.a}),r.a.createElement(o.a,{src:P.a}),r.a.createElement("h4",{className:"text-bold mt-40"},"Disposition flow indicator"),r.a.createElement("span",null,"When the care team are trying to decide where the patient is going post hospital visit, there are usually dependency on the order status as required by disposition. To visualize order status up front for the care team, it could help prompt the care team to check for orders so that patients will not be delayed for disposition."),r.a.createElement("p",null),r.a.createElement(o.a,{src:S.a}),r.a.createElement("h4",{className:"text-bold mt-40"},"Barrier design"),r.a.createElement("span",null,"Design problem of managing barrier is: how could care teams quickly identify important barriers and easily manage an updating list? After I explored different barrier list UI, our team decided on the solution to combine Option B and C to show an easy-to-scan and scalable list."),r.a.createElement("p",null),r.a.createElement(o.a,{src:C.a}),r.a.createElement("h4",{className:"text-bold mt-40"},"Outcome"),r.a.createElement("span",null,"During our internal feedback with clinical team, we got a lot of positive feedback. Also from tracking usage data at Amplitude, we found completion rate of these fields general high along with increasing DAU. These indicators help show a more engaged user group."));case"UI Exploration":return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"text-bold mt-0"},"Visual identity Criteria"),r.a.createElement("span",null,"We started exploring the visual redesign by construct the moodboard, identifying a few dimensions to push forward in the UI iteractions and finally converge to one design. Dimensions of visual divergence include color, layout and data highlight patterns."),r.a.createElement("p",null),r.a.createElement("img",{alt:"",className:"img-responsive",src:W.a}),r.a.createElement("p",null),r.a.createElement("img",{alt:"",className:"img-responsive",src:q.a}),r.a.createElement("h4",{className:"text-bold mt-40"},"Review and feedback"),r.a.createElement("span",null,"Along the visual exploration, our product team did a few rounds of reviews. The team arrived at the concensus that we want to convey intelligent and dynamic data feeling. Wave provides a lot of possibilities for data related animation"));case"Final Product UI":return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"After three months of design work focusing on modular, actionable and aesthetic boards, we put together all the interaction and UI pattterns into one demo board. Sales team have been able to leverage the board to introduce to potential clients as well.",r.a.createElement("p",null)),r.a.createElement("video",{className:"img-responsive",controls:!0},r.a.createElement("source",{src:B.a,type:"video/mp4"})));case"UI Delivery":return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"During the PathFinder development, I was working closely with our frontend and backend engineers to deliver the UI specs and get better understanding of technical constraints. Thanks to our closely collaborative team, I was able to do the design QA of the product early and get the final developed board aligned with the design proposal.",r.a.createElement("p",null)),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("img",{alt:"",className:"img-responsive",src:z.a})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("img",{alt:"",className:"img-responsive",src:Q.a})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("img",{alt:"",className:"img-responsive",src:J.a})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("img",{alt:"",className:"img-responsive",src:X.a})),r.a.createElement("h4",{className:"text-bold mt-40 mb-10"},"Responsive design"),r.a.createElement("span",null,"In the later stage of introducing PathFinder to more users and use cases, ability to view the list on the mobile devices becomes a prominent request. I started cataloging all the data by priority group, and designed the wireframes first. This approach makes sure important are consistantly emphasized across different channels. Next step is to validate with care team, and explore unique use cases for mobile usage."),r.a.createElement("p",null),r.a.createElement("img",{alt:"",className:"img-responsive",src:Y.a}),r.a.createElement("img",{alt:"",className:"img-responsive mt-20",src:Z.a}),r.a.createElement("p",null));case"Outcome":return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"text-bold"},"Widely deployed at client hospitals "),r.a.createElement("span",null,"Since the new PathFinder was launched in June 2018, 20+ leading hospitals and health systems are streamlining patient flow with the product, achieving results including:"),r.a.createElement("p",null),r.a.createElement("span",{className:"mt-10"},"- 0.5+ day reduction in in-patient length of stay"),r.a.createElement("p",null),r.a.createElement("span",{className:""},"- 20%+ decrease in postop transfer delays"),r.a.createElement("p",null),r.a.createElement("span",{className:""},"- 20%+ increase in patient satisfaction"),r.a.createElement("h4",{className:"text-bold mt-40"},"Frontline user feedback"),r.a.createElement("span",null,"“With Qventus you have a snapshot of a patient without digging through any charts and without having to ask a lot of questions. You know what the plan is, where they are going, and what's keeping them here.”"),r.a.createElement("span",null,"- Registered Nurse"),r.a.createElement("p",null),r.a.createElement("span",null,"“Finally, I have a technology that makes my job easier.”    - Charge Nurse"),r.a.createElement("h4",{className:"text-bold mt-40"},"Design system development"),r.a.createElement("span",null,"Because PathFinder UX/UI received a lot of positive feedback, our design team proposed to establish the design system to generalize the stellar UX across products and provide an enterprise suite experience. Below is the diagram representing our approaches to design system, which includes cycles of auditing, unification and inspiration."),r.a.createElement("p",{className:"mt-20"}),r.a.createElement("img",{alt:"",className:"img-responsive",src:ee.a}));default:return r.a.createElement(r.a.Fragment,null)}};t.default=function(){return r.a.createElement(s.a,{data:te,renderSection:ae,lock:!0})}},187:function(e,t,a){e.exports=a.p+"static/logo-sr-rev-cc0c68663cfae4850fe70c1916d70c68.png"},188:function(e,t,a){"use strict";var n=a(189),r=a(0),l=a.n(r),s=a(11),i=a.n(s),o=a(194),c=a.n(o);function m(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,i=n.data.site,o=t||i.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(r)},l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Barlow:300,400,500,600,700&display=swap",rel:"stylesheet"}))}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=m},189:function(e){e.exports={data:{site:{siteMetadata:{title:"Surong Design Portfolio",description:"Surong Design Portfolio",author:"@surong ruan"}}}}},190:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(11),s=a.n(l),i=a(187),o=a.n(i);var c=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={openNav:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return r.a.createElement("div",{className:"main-nav navbar"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle",onClick:function(){return e.setState(function(e){return{openNav:!e.openNav}})}},r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{className:"site-logo",src:o.a,alt:"logo"}))),r.a.createElement("div",{className:"navbar-collapse collapse"+(this.state.openNav?" in":"")},r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},this.props.pri&&r.a.createElement("li",null,r.a.createElement("a",{href:this.props.pri.href},"Pre: ",this.props.pri.label)),this.props.next&&r.a.createElement("li",null,r.a.createElement("a",{href:this.props.next.href},"Next: ",this.props.next.label)))))},n}(r.a.Component),m=function(e){var t=e.pri,a=e.next,n=e.children;return r.a.createElement("div",null,r.a.createElement(c,{pri:t,next:a}),r.a.createElement("div",{className:"pt-40 pb-80"},r.a.createElement("main",null,n)))};m.propTypes={pri:s.a.object,next:s.a.object,children:s.a.node.isRequired};t.a=m},191:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(11),s=a.n(l),i=(a(178),function(e){var t=e.attributes;return r.a.createElement("div",{className:"brief"},t.map(function(e,t){return r.a.createElement("div",{className:"attribute",key:t},r.a.createElement("h5",null,e.label),r.a.createElement("span",null,e.value))}))});i.propTypes={attributes:s.a.array},t.a=i},192:function(e,t,a){"use strict";a(34);var n=a(0),r=a.n(n),l=a(11),s=a.n(l),i=a(188),o=function(e){var t=e.title,a=e.subTitle;return r.a.createElement("div",{className:"container bg-light pt-40 text-center"},r.a.createElement("h1",{className:"mb-10 text-bold"},t),r.a.createElement("h3",{className:"text-color mb-60"},a))};o.propTypes={title:s.a.string,subTitle:s.a.string};var c=o,m=a(195),d=a.n(m),p=function(){return r.a.createElement("div",{className:"password"},r.a.createElement("p",null,"Please ",r.a.createElement("a",{href:"mailto:surong731@gmail.com",target:"_blank",rel:"noopener noreferrer"},"contact me "),"for the password to access project content."),r.a.createElement("form",null,r.a.createElement("input",{type:"password",placeholder:"Enter password"}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),"c3ItdXg="===btoa(d()(".password input").val())?(d()(".password button").removeClass("-wrong"),d()(".password").slideUp(),d()(".password-protected").slideDown()):d()(".password button").addClass("-wrong")}})))},u=a(396),h=(a(179),function(e){var t=e.title,a=e.isSubTitle,n=e.children;return r.a.createElement("div",{id:t,className:"container bg-light pt-80 text-left content-section"},r.a.createElement("div",{className:"row col-lg-9 col-lg-push-2"},t?a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-2 contentSubtitle"}),r.a.createElement("div",{className:"col-lg-10"},r.a.createElement("h3",{className:"text-color"},t)))),r.a.createElement("div",{className:"col-lg-9"},n))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("h4",{className:"text-color text-bold text-lg mb-0"},t),r.a.createElement("hr",{className:"hr-color hr-bold mt-0 mb-0"})),r.a.createElement("div",{className:"col-lg-9"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"}),r.a.createElement("div",{className:"col-lg-9"},n))):n))});h.propTypes={title:s.a.string,isSubTitle:s.a.bool,children:s.a.node.isRequired};var g=h,f=a(190),b=u.a.Link,E=function(e){var t=e.data,a=e.renderSection,n=e.lock;return r.a.createElement(f.a,{pri:t.pri,next:t.next},r.a.createElement(i.a,{title:t.name}),r.a.createElement(c,{title:t.title,subTitle:t.subTitle}),n&&r.a.createElement(p,null),r.a.createElement("div",{className:n?"password-protected":""},r.a.createElement("div",{className:"AnchorPosition"},r.a.createElement(u.a,null,t.aTitle.map(function(e,t){return(0===t||e.label)&&r.a.createElement(b,{href:0===t?"#top":"#"+e.label,title:e.label||"Overview",key:t},e.subTitle&&e.subTitle.map(function(e,t){return r.a.createElement(b,{href:"#"+e,title:e,key:t})}))}))),t.aTitle.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(g,{title:e.label},a(e.key)),e.subTitle&&e.subTitle.map(function(e,t){return r.a.createElement(g,{title:e,isSubTitle:!0,key:t},a(e))}))})))};E.propTypes={data:s.a.object,lock:s.a.bool,renderSection:s.a.func.isRequired};t.a=E},193:function(e,t,a){"use strict";var n=a(11),r=a.n(n),l=a(0),s=a.n(l),i=function(e){var t=e.attributes,a=Math.min(4,t.length);return s.a.createElement("div",{className:"row"},t.map(function(e,t){return s.a.createElement("div",{className:"col-lg-"+12/a,key:t},s.a.createElement("h4",{className:"contentHeighlight"},e))}))};i.propTypes={attributes:r.a.array},t.a=i},203:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(218);var s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.state.isOpen;return r.a.createElement("div",null,r.a.createElement("img",{alt:"",className:"img-responsive c-pointer",src:this.props.src,onClick:function(){return e.setState({isOpen:!0})}}),t&&r.a.createElement(l.a,{mainSrc:this.props.src,onCloseRequest:function(){return e.setState({isOpen:!1})}}))},n}(r.a.Component);t.a=s},344:function(e,t,a){e.exports=a.p+"static/pf-cs-cover-662e4c50b5954e64bdd92d3f2d1c3253.png"},345:function(e,t,a){e.exports=a.p+"static/pf-cs-goal-682ffecaa82bafe6352cfe3e519e9a9a.png"},346:function(e,t,a){e.exports=a.p+"static/pf-cs-user-8763883f377a8f866812a9a64ec6c197.png"},347:function(e,t,a){e.exports=a.p+"static/pf-ip-flow-web-dc5c8830ef9990363a9df296d88bc67e.png"},348:function(e,t,a){e.exports=a.p+"static/pf-before-1bc46dd13d268f3fa3912969286308c3.png"},349:function(e,t,a){e.exports=a.p+"static/pf-idr-data-7a03e6e58d79e6708d985e3d8459742e.png"},350:function(e,t,a){e.exports=a.p+"static/pf-6-wireframe-71650519cccef30f203a7aa22a82963b.png"},351:function(e,t,a){e.exports=a.p+"static/pf-3-wireframe-a20c952a8b3c82493d3624768bd3382c.png"},352:function(e,t,a){e.exports=a.p+"static/pf-ixd-68e78d481b199b5bbd861de3491fbe72.png"},353:function(e,t,a){e.exports=a.p+"static/pf-edd-1-b216dca96945410212d73ee8a1d26e25.png"},354:function(e,t,a){e.exports=a.p+"static/pf-edd-2-2fd6031422528f198b083d698adf691f.png"},355:function(e,t,a){e.exports=a.p+"static/pf-dispo-e757a5bff59e865edadd7bb172b04289.png"},356:function(e,t,a){e.exports=a.p+"static/pf-barrier-f7fd2083abebe9dba6601df4e4854ae3.png"},357:function(e,t,a){e.exports=a.p+"static/pf-ui-1-87d6594747aa9337364ee8d47155ddfe.png"},358:function(e,t,a){e.exports=a.p+"static/pf-ui-2-7c004497b54b2bcf6768770ef65698a8.png"},359:function(e,t,a){e.exports=a.p+"static/pf-demo-19ac4f29e158abd8b8079e651678cbbf.mp4"},360:function(e,t,a){e.exports=a.p+"static/pf-specs-1-7f83e0bbaab5af0a87914a1288a48d18.png"},361:function(e,t,a){e.exports=a.p+"static/pf-specs-2-d875898d8761e36112bcd959b2cab7ab.png"},362:function(e,t,a){e.exports=a.p+"static/pf-specs-3-99417a8dc31c432647bed153cfdac04b.png"},363:function(e,t,a){e.exports=a.p+"static/pf-specs-4-8a586beee2f8dfbc779f3e9054456bfa.png"},364:function(e,t,a){e.exports=a.p+"static/pf-rwd-1-f37bbb7bcf70257846007ab89a09496c.png"},365:function(e,t,a){e.exports=a.p+"static/pf-rwd-2-c3976645445709dff9306d6a9a1ec059.png"},366:function(e,t,a){e.exports=a.p+"static/dsm-bb0c2b387a5db8fbd067d27bfc372724.png"}}]);
//# sourceMappingURL=component---src-pages-pf-js-5edd71f5dfa58f2ceb24.js.map