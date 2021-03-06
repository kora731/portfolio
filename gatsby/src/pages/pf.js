import React from "react"

import Brief from "../components/brief"
import Template from "../components/template"
import ContentHighlight from "../components/content-highlight"
import LightboxImage from  "../components/lightbox-image"

/* Image Assets */
import Cover from "../images/pf-cs-cover.png"
import Goal from "../images/pf-cs-goal.png"
import User from "../images/pf-cs-user.png"
import flow from "../images/pf-ip-flow-web.png"
import Before from "../images/pf-before.png"
import Idr from "../images/pf-idr-data.png"
import Wf1 from "../images/pf-6-wireframe.png"
import Wf2 from "../images/pf-3-wireframe.png"
import Ixd from "../images/pf-ixd.png"
import Edd1 from "../images/pf-edd-1.png"
import Edd2 from "../images/pf-edd-2.png"
import Dispo from "../images/pf-dispo.png"
import Barrier from "../images/pf-barrier.png"
import UI1 from "../images/pf-ui-1.png"
import UI2 from "../images/pf-ui-2.png"
import Demo from "../images/pf-demo.mp4"
import Specs1 from "../images/pf-specs-1.png"
import Specs2 from "../images/pf-specs-2.png"
import Specs3 from "../images/pf-specs-3.png"
import Specs4 from "../images/pf-specs-4.png"
import RWD1 from "../images/pf-rwd-1.png"
import RWD2 from "../images/pf-rwd-2.png"
import DSM from "../images/dsm.png"

const data = {
    name: "PathFinder",
    pri : {
        label: "home",
        href: "/"
    },
    next: {
        label: "mobile",
        href: "/project/mobile/index.html"
    },
    title: "PathFinder: patient board to facilitate discharge planning",
    subTitle: "Actionable Data Delivered in a Delightful Humane Way",
    highlight1: ["How might we redesign the patient board to enable proactive discharge planning?"],
    highlight2: [
        "Easy to configure and reuse",
        "Actionable and transparent",
        "Delightful and refreshing"],

    briefAttribute: [
        {
            label: "Timeline",
            value: "Jan. 2018 - Oct. 2018"
        },
        {
            label: "Team",
            value: "PM, FE and BE"
        },
        {
            label: "Role",
            value: "Lead UX/UI Designer"
        },
        {
            label: "Targeted Users",
            value: "Hospital in-patient care team"
        },
        {
            label: "Design Scope",
            value: "User Research   IA\nInteraction Design\nRedesign   UI Specs"
        },
        {
            label: "Outcome",
            value: "Flagship product used at 20+ hospitals with widely positive feedback"
        }
    ],
    aTitle: [
        {
            key:  "Overview"
        },
        {
            label: "Brief",
            key:  "Brief"
        },
        {
            label: "Why PathFinder",
            key:  "Why PathFinder"
        },
        {
            label: "Product Goals",
            key:  "Product Goals"
        },
        {
            label: "Understand Users",
            key:  "Understand Users"
        },
        {
            label: "Design Challenge",
            key:  "Design Challenge"
        },
        {
            label: "Solution Framework",
            subTitle: [
                "Modularized and scalable board",
                "Actionable Component",
                "UI Exploration",
                "Final Product UI"
            ],
            key:  "Solution Framework"
        },
        {
            label: "UI Delivery",
            key:  "UI Delivery"
        },
        {
            label: "Outcome",
            key:  "Outcome"
        }
    ]
};

const renderSection= (key) => {
    switch (key) {
        case "Overview":
            return <img alt="" className="img-responsive" src={Cover}/>;

        case "Brief":
            return <Brief attributes={data.briefAttribute}/>;

        case "Why PathFinder":
            return <>
                <span>Today’s healthcare systems are increasingly focused on reducing patient flow efficiency to save costs and capital spending. Managing patient flows are shouldered by frontline care teams, who are already overwhelmed with increasing patient demands, complex dashboards and reports. </span>
                <p className="mt-10"/>
                <span>Qventus offers <b>PathFinder solution to optimize patient flow in real time while reducing the cognitive burden of care teams</b>.</span>
            </>;

        case "Product Goals":
            return <>
                    <span>When I got onboard with PathFinder project, PM and I set up meetings with key stakeholders within the company
                        to understand both business and product strategies. I also initiated the competitive research to understand the
                        dashboards and existing solutions of patient data display. Below are the main goals we summarized based on the internal input and 
                        market landscape.
                        <p className="mt-20"/>
                    </span>
                    <img alt="" className="img-responsive" src={Goal}/>
            </>;
        case "Understand Users":
            return <>
                <span>We shadowed multiple hospitals to observe how frontline nurses handled the patient flows in their day to day work. Onsite interviews and observations helped uncover touchpoints where PathFinder could facilitate care teams to improve discharge process. 
                    I consolidated our learnings into the persona and flow diagram so that the whole team can leverage these user data to understand problems with enough context.</span>
                <h4 className="text-bold mt-40">Stakeholder mapping and key persona</h4>
                <img alt="" className="img-responsive" src={User}/>
                <p/>
                <h4 className="text-bold mt-40">Patient discharge flow diagram</h4>
                <img alt="" className="img-responsive" src={flow}/>


                <h4 className="text-bold mt-40">Targeted use case: IDR (Interdisciplinary Rounding)</h4>
                <span>How might we support charge nurse to review patients during IDR, like daily standup 
                    by the TV and to make a decision, so that patient flow and discharge are streamlined and move patients 
                    forward in the process to drive the outcome of reduced length of stay.
                    </span>
            </>;

        case "Design Challenge":
            return <>
                <ContentHighlight attributes={data.highlight1}/>
                

                <p/>
                <h4 className="text-bold mt-40">Gap of the previous patient board</h4>
                <img alt="" className="img-responsive mb-20 mt-10" src={Before}/>
                <span>Before I joint the team, there was already a patient board for IDR use case. After talking to customer success teams who have experiences implementing the board, we identified a few gaps:</span>
                <p/>
                <p className="text-bold mt-10">1. Not configurable</p>
                <span>Data columns on the board were manually written with SQL and it took a long time to configure every board and test the schemas.</span>
                <p/>

                <p className="text-bold mt-10">2. Poor affordance</p>
                <span>Some columns are editable and require user entry. However the previous UI didn't show clearly interactive fields and 
                    users couldn't locate where they need to enter data.</span>
                <p/>

                <p className="text-bold mt-10">3. How to differentiate from other healthcare products?</p>
                <span>Heathcare IT software mostly share a corporate blue hue which tends to look alike. How might we make PathFinder visually appealing and differentiate from other competitors?</span>
                <p/>

                <h4 className="text-bold mt-40">Experience Goals</h4>
                <span>Based on these insights, I started the design project by establishing explicit experience goals for the new patient board:</span>
                <p/>
                <ContentHighlight attributes={data.highlight2}/>
            </>;

        case "Solution Framework":
            return <>
                <span>In terms of approaches to solve the design challenge and meet experience goals, my design processes can be summarized into three themes:</span>
                <p/>

                <h4 className="text-bold">- Modularized and scalable board</h4>
                <h4 className="text-bold">- Actionable component</h4>
                <h4 className="text-bold">- UI exploration for stellar visual</h4>
            </>;

        case "Modularized and scalable board":
            return <>
                <h4 className="text-bold mt-0">Patient data taxonomy - IA</h4>
                
                <span>To make sure the board design meets configuration requirements, I worked closely with BE and FE to layout the information architecutre, so that each column and field aligned with how
 data would be presented to support user interaction.</span>
 <p/>
 <span>The taxonomy table below helps the team catalog different categories of data, whether it requires user input or read only, or whether it supports special style or data validation.</span>
               

                <img alt="" className="img-responsive" src={Idr}/>

                <h4 className="text-bold mt-40">Expand board space for more data</h4>
                <span>Previous table UI was challenging for adding more columns. I started exploring different board layouts to expand the horizontal space. </span>
                <p/>
                <img alt="" className="img-responsive" src={Wf1}/>
                <p/>
                <h4 className="text-bold mt-40">Focus on list view design</h4>
                <span>After the first iteration, we narrowed down to three options because of the project timeline and technical constraints. The list view became the unification point where data was presented in a progressive way, and also with the advantage to sort and filter. 
                We also constructed the low-fi mockup covering data structure, so that moving forward we could validate both layout and data with end users.</span>
                <p/>
                <img alt="" className="img-responsive" src={Wf2}/>

                <h4 className="text-bold mt-40">User testing findings</h4>
                <span>When we presented three options above to end users, 4 out of 5 users chose Option Two because of it being clean and familiar. Expanding the row rather than replacing/relocating information was preferred, which made it easy to scan and compare data across rows.</span>
                <p/>
                <span>After I brought these findings back to the team, we decided on constructing the list view first. Later we would investigate further into the expansion view as V2. </span>
            </>;

        case "Actionable Component":
            return <>
                <span>PathFinder boards serve as the single data source to prompt care teams to enter patient dicharge plan, and collaborate on resolving barriers. 
                    User-entry data on the board is critical to patient discharge plan and also to train Qventus machine learning models to improve prediction. How might we design the data columns to encourage user input?</span>
                <p/>

                <img alt="" className="img-responsive" src={Ixd}/>

                <h4 className="text-bold mt-40">EDD (estimated discharge date): deliver predictive leaving date</h4>
                <span>Qventus developed machine learning models to predict when patient is going to leave. We surface these prediction results next to EDD field for entry reference. 
                    Among the solutions I explored, we chose Option D for the short term MVP solution based on the data availability. </span>
                <p/>

                
                <LightboxImage src={Edd1}/>
                
                <LightboxImage src={Edd2}/>

                <h4 className="text-bold mt-40">Disposition flow indicator</h4>
                <span>When the care team are trying to decide where the patient is going post hospital visit,
                    there are usually dependency on the order status as required by disposition. To visualize order status up front for the care team, it could help prompt
                    the care team to check for orders so that patients will not be delayed for disposition.</span>
                <p/>

                <LightboxImage src={Dispo}/>

                <h4 className="text-bold mt-40">Barrier design</h4>
                <span>Design problem of managing barrier is: how could care teams quickly identify important barriers and easily manage an updating list? After I explored different barrier list UI, our team decided on the solution to combine Option B and C to show an easy-to-scan and scalable list.</span>
                <p/>

                <LightboxImage src={Barrier}/>

                <h4 className="text-bold mt-40">Outcome</h4>
                <span>During our internal feedback with clinical team, we got a lot of positive feedback. Also from tracking usage data at Amplitude, we found completion rate of these fields general high along with increasing DAU. 
                    These indicators helped validated the design improvements to prompt user input and enhance engagement.</span>
            </>;

        case "UI Exploration":
            return <>
                <h4 className="text-bold mt-0">Visual identity criteria</h4>
                <span>We started exploring the visual identity by collaboraing on the moodboard, identifying a few dimensions to explore different themes and finally converge to one design that the whole team is happy with. 
                    Dimensions of visual divergence include color, layout and data highlight patterns.
                </span>
                <p/>
                <img alt="" className="img-responsive" src={UI1}/>

                <p/>
               
                <img alt="" className="img-responsive" src={UI2}/>

                <h4 className="text-bold mt-40">Review and feedback</h4>

                <span>Along the exploration process, our product team do daily reviews to help visual direction move fast. The team arrived at the concensus that we want to convey intelligent and energetic feelings. Among these, blue wave pattern provides a lot of possibilities for animation and user delights.</span>
            </>;

        case "Final Product UI":
            return <>
                
                <span>After three months of design work focused on modular, actionable and aesthetic boards, we put together all the interaction and UI pattterns into one demo board. 
                   Sales team have been resuing the demo board to pitch to potential clients for various use cases. 
                <p/></span>
                <video className="img-responsive" controls>
                    <source src={Demo} type="video/mp4"/>
                </video>
            </>;

        case "UI Delivery":
            return <>

                <span>During the PathFinder development, I worked closely with our frontend and backend engineers to deliver the UI specs and 
                    understand technical constraints. Thanks to the close collaborative team, I was able to conduct design QA of the product
                    early and ensure that the final delivered board aligned with the design solution. 
                <p/></span>
                <div className="col-lg-6">
                    <img alt="" className="img-responsive" src={Specs1}/>
                </div>
                <div className="col-lg-6">
                    <img alt="" className="img-responsive" src={Specs2}/>
                </div>

                <div className="col-lg-6">
                    <img alt="" className="img-responsive" src={Specs3}/>
                </div>
                <div className="col-lg-6">
                    <img alt="" className="img-responsive" src={Specs4}/>
                </div>

                <h4 className="text-bold mt-40 mb-10">Responsive design</h4>
                <span>In the later stage of introducing PathFinder to more users and use cases, there is a prominent request to view the list on mobile devices. 
                    I started cataloging all the patient data by priority groups to guide the wireframe design. Next step is to validate with care team, and explore unique use cases for mobile usage.</span>
                <p/>

                <img alt="" className="img-responsive" src={RWD1}/>
                <img alt="" className="img-responsive mt-20" src={RWD2}/>
                <p/>
               
            </>;

        case "Outcome":
            return <>
                <h4 className="text-bold">Widely deployed at client hospitals </h4>
                <span>Since the new PathFinder was launched in June 2018, 20+ leading hospitals and health systems are streamlining patient flow with the product, achieving results including:</span>
                <p/>
                <span className="mt-10">0.5+ day reduction in in-patient length of stay</span>
                <p/>
                <span className="">20%+ decrease in postop transfer delays</span>
                <p/>
                <span className="">20%+ increase in patient satisfaction</span>

                <h4 className="text-bold mt-40">Frontline user feedback</h4>
                <span>“With Qventus you have a snapshot of a patient without digging through any charts and without having to ask a lot of questions. You know what the plan is, where they are going, and what's keeping them here.”</span>

                <span>- Registered Nurse</span>
                <p/>
                <span>“Finally, I have a technology that makes my job easier.”    - Charge Nurse</span>

                <h4 className="text-bold mt-40">Design system development</h4>

                <span>Because PathFinder UX/UI received a lot of positive feedback, our design team proposed to 
                    establish the design system to generalize the stellar UX across products and provide an enterprise suite experience. 
                    Below is the diagram representing our approaches to design system, which includes cycles of auditing, unification and inspiration. 
                </span>
                <p className="mt-20"/>
                <img alt="" className="img-responsive" src={DSM}/>

            </>;
        default:
            return <></>;
    }
};

const IndexPage = () => (
    <Template data={data} renderSection={renderSection} lock={true}/>
);

export default IndexPage