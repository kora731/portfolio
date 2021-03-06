import React from "react"

import Brief from "../components/brief"
import ContentHighlight from "../components/content-highlight"
import LightboxImage from  "../components/lightbox-image"

/* Image Assets */
import Cover from "../images/q-mobile-header.png"
import Soa from "../images/qm-soa.png"
import Now1 from "../images/qm-notif.png"
import Now2 from "../images/qm-list.png"
import Now3 from "../images/qm-detail.png"
import User from "../images/qm-user.png"
import Login from "../images/qm-login.png"
import Login2 from "../images/qm-login-2.png"
import Archive from "../images/archive.gif"
import Mute from "../images/mute.gif"
import Priority from "../images/qm-tag.png"
import Enrich1 from "../images/qm-enrich-1.png"
import Enrich2 from "../images/qm-enrich-2.png"
import Enrich3 from "../images/qm-enrich-3.png"
import Kudo1 from "../images/qm-kudo-1.png"
import Kudo2 from "../images/qm-kudo-2.png"
import Kudo3 from "../images/qm-kudo-3.png"
import Manual1 from "../images/qm-man-1.png"
import Manual2 from "../images/qm-man-2.png"
import Manual3 from "../images/manual.gif"
import Agenda from  "../images/qm-agenda.png"
import Part1 from  "../images/qm-research.png"
import Part2 from  "../images/qds-design.png"
import Hook from  "../images/qm-hook.png"
import NFFlow from  "../images/qds-flow.png"
import NFMock from  "../images/qds-flow-mock.png"
import RedesignIA from  "../images/qm-redesign-ia.png"
import RedesignWire from  "../images/qm-research-wire.png"
import Hifi from  "../images/qm-redesign-ui.png"
import Demo from  "../images/qm-prototype.mp4"
import Template from "../components/template";

const data = {
    name: "mobile",
    pri: {
        label: "PathFinder",
        href: "/project/pf/index.html"
    },
    next: {
        label: "Jaunt",
        href: "/project/pipeline/index.html"
    },
    title: "Qventus app: deliver real-time nudges to patient care team",
    subTitle: "Right data for the right people at the right time",
    highlight1: ["How might we reduce the mobile app usage friction and increase value delivered to ED nurses?"],
    highlight2: [ "Enable collaboration and decision making", "Deliver contextual and actionable data", "Transparent outcome and motivated teams"],
    highlight3: ["How to come up with a nudge framework to enable and motivate care teams to improve healthcare operations?"],

    briefAttribute: [
        {
            label: "Timeline",
            value: "Nov. 2018 - Jul. 2019"
        },
        {
            label: "Team",
            value: "PM and 2 Engineers"
        },
        {
            label: "Role",
            value: "Lead Designer / Quasi-PM"
        },
        {
            label: "Targeted Users",
            value: "Emergency department (ED) care team"
        },
        {
            label: "Design Scope",
            value: "Full design lifecycle (UXR, UX/UI) \nDesign sprint\nRedesign concept"
        },
        {
            label: "Outcome",
            value: "Improved usability of mobile app, nudge framework and redesign concept"
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
            label: "Product suite and mobile app",
            key:  "Product suite and mobile app"
        },
        {
            label: "Engagement problems",
            key:  "Engagement problems"
        },
        {
            label: "Design challenge",
            key:  "Design challenge"
        },
        {
            label: "Solution framework",
            subTitle: [
                "Reduce friction",
                "Increase value"
            ],
            key:  "Solution framework"
        },
        {
            label: "Design sprint",
            key:  "Design sprint"
        },
        {
            label: "Redesign concept",
            key:  "Redesign concept"
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

        case "Product suite and mobile app":
            return <>
                <span>Qventus is the first system of action, from historic analytical data to predictive recipe, trying to simplify healthcare operations by empowering teams to excel in real time. The solutions include dashboard for root cause analysis, patient board for proactive planning, system operational board for situational awareness, and mobile app to deliver real-time interventions. </span>
                <img alt="" className="img-responsive" src={Soa}/>

                <h4 className="text-bold mt-40">Mobile app for the care team in the ED</h4>
                <span>For most hospitals, the ED is the primary entry point for patients driving up to 70% of hospital admissions. But in this highly dynamic and variable environment, ED are normally overwhelmed with sudden patient influxes, long wait times, patients boarded in hallways and dissatisfied patients walking out. </span>
                <p/>
                <span>Qventus mobile app targets at solving ED problems by identify surges, delays, dissatisfied patients and push real time notifications to prompt preparations downstream. It also enables team collaboration across departments and functions to address problems in the same chat thread. Each chat thread is called a nudge quoted Richard Thaler’s behavior science concept.</span>
                <p className="mb-20"/>
                <div className="col-lg-4">
                    <img alt="" className="img-responsive img-shadow" src={Now1}/>
                </div>
                <div className="col-lg-4">
                    <img alt="" className="img-responsive img-shadow" src={Now2}/>
                </div>
                <div className="col-lg-4">
                    <img alt="" className="img-responsive img-shadow" src={Now3}/>
                </div>
            </>;

        case "Engagement problems":
            return <>
                <span>Experience goals of the mobile app are to reduce cognitive burden and engage frontline care team. But data tells us another story.</span>
                <p/>
                <span>Started from early 2018 Qventus set up the infrastructure to collect usage data and there are tracking funnels through Amplitude. Mobile data showed the usage were dropping continuously to our surprise. After the app was launched at the hospital site, fewer users came back to use the app after a month or so. </span>
                <p/>
                <span>To find out the root caues of the usage drop, we started setting up onsite interviews and partnered with customer success team to collect feedback from our users. </span>
                <div className="row mt-40">
                    <div className="col-lg-6">
                        <h4 className="text-bold">Targeted users - ED nurses</h4>
                        <span>Through talking to different ED nurses, we captured their workflows and touchpoints in the persona format. It helps align the whole team on the user empathy and acts as a reference point when we’re talking about user problems. </span>
                        <p/>
                        <span>Below are the two main problems indentified from the user feedback.</span>
                        <p/>
                    </div>
                    <div className="col-lg-6">
                        <img alt="" className="img-responsive" src={User}/>
                    </div>
                </div>
                <h4 className="text-bold mt-40">Friction while using the app</h4>
                <span>During the interview, users shared that they’re having trouble logging into the app. Nurses are interacting with different information systems at work, and Qventus required them to remember another set of credentials which is quite challenging.</span>
                <p/>
                <span>Second, users got overwhelmed with all the notifications coming in, but no way to clear up the thread  or see which one is important. When they got off work, mobile app still buzzed with all notifications which then forced them to log out of the app. Then it circled back to the login problem. </span>

                <h4 className="text-bold mt-20">“Now what?”</h4>
                <span>Another important finding from the interviews is that care teams don’t know what to do with all the notifications received. “I’ve got these alerts, but I don’t know what to do with them”, quoted from a charge nurse. We realized that prompts are not providing enough context or actinable items to solve the problem. 
                    Compared with what care team already know, they don't add enough value to their operations. Nudges start losing interests from the care team and thus less engaged users.</span>
            </>;

        case "Design challenge":
            return <>
                <ContentHighlight attributes={data.highlight1}/>

                <h4 className="text-bold mt-40">Experience goals</h4>
                <span>- Delightful to engage users, helpful while not intrusive</span>
                <p/>
                <span>- Foster collaboration and positive mindset within the care team</span>
                <p/>
                <span>- Insightful and automated, push useful data to users rather than pull</span>
            </>;

        case "Solution framework":
            return <>
                <span>I worked closely with two mobile engineers, and also acted as the quasi PM role in the beginning of the project. 
                    Through design workshops with the team and key stakeholders, we came up with our mobile roadmap. 
                    It’s targeted at delivering incremental improvements, while setting up framework for the long term redesign of mobile app.</span>
                <p/>
            </>;

        case "Reduce friction":
            return <>
                <span>After reviewing customer interview notes with the team, we identified a few key areas to improve the app usability: </span>
                <p/>
                <span>1. Difficult login flow with hospital url and credential required</span>
                <p/>
                <span>2. Overwhelmed notifications and home feed view</span>
                <p/>
                <span>3. Not able to mute notifications even when off shift</span>
                <p/>
                <span>4. Among hundreds of messages, which one is important?</span>

                <h4 className="text-bold mt-40">Login flow redesign</h4>
                <span>Current flow requires the user to enter hospital url and then directs them to the login section. As the tracking data shows that more than half of users gave up at the step one of entering URL, it’s a friction point which is removable by binding user email with the domain URL so that it's more efficient to login. </span>
                <p/>
                <img alt="" className="img-responsive" src={Login}/>
                <img alt="" className="img-responsive mt-20" src={Login2}/>


                <h4 className="text-bold mt-40">User validation on login redesign</h4>
                <span>We interviewed current users of mobile app remotely to validate the login flow, and got very positive feedback. Quote from a user, “When can we have this and what do you need me do to make it happen?” The SSO model got a lot of interest from across clients and it’s currently work in progress to generalize the capability to more clients. </span>
                
                <h4 className="text-bold mt-40 mb-20">Other feature design to reduce friction</h4>

                <div className="row">
                    <div className="col-lg-4">
                        <img alt="" className="img-responsive mb-10 img-shadow" src={Archive}/>
                        <span className="text-sm"><b>Archive</b>: Swiping to archive nudges helps clear up the feed to reduce information overload</span>
                    </div>
                    <div className="col-lg-4">
                        <img alt="" className="img-responsive mb-10 img-shadow" src={Mute}/>
                        <span className="text-sm mt-12"><b>Mute</b>: Ability to set mute schedule lets users control notifications when on/off shift</span>
                    </div>
                    <div className="col-lg-4">
                        <img alt="" className="img-responsive mb-10 img-shadow" src={Priority}/>
                        <span className="text-sm mt-12"><b>Tagging</b>: Prioritize data feed easily</span>
                    </div>
                </div>
                <h4 className="text-bold mt-40">Results of improved usability</h4>
                <span>Most of these incremental changes were implemented by two mobile engineers and released to customers within 3 months. The archive feature is well received by end users and usage data indicates a growing number of users interacting with the feature on a daily basis. 
                    In addition, as I was making these changes into the product wearing the hat of both designer and PM, my coworkers gave me the “all about outcome” internal reward as a recognition for improving mobile app.</span>
                <p/>
            </>;

        case "Increase value":
            return <>
                <span>Aside from improving usability, how might we augment mobile app to do more than chatting? Below are three areas that mobile team brainstormed together based on input from different stakeholders.</span>
                <p/>
                <ContentHighlight attributes={data.highlight2}/>
                <h4 className="text-bold mt-40">Enriched nudge detail</h4>
                <div className="row">
                    <div className="col-lg-4">
                        <img alt="" className="img-responsive img-shadow" src={Enrich1}/>

                    </div>
                    <div className="col-lg-4">
                        <img alt="" className="img-responsive img-shadow" src={Enrich2}/>

                    </div>
                    <div className="col-lg-4">
                        <img alt="" className="img-responsive img-shadow" src={Enrich3}/>
                        {/* <h5 className="text-gray mt-6">Tagging the nudges makes scanning and prioiritization easy</h5> */}
                    </div>
                </div>

                <h4 className="text-bold mt-40">Kudos for outcome and motivation</h4>
                <div className="row">
                    <div className="col-lg-4">
                        <img alt="" className="img-responsive img-shadow" src={Kudo1}/>

                    </div>
                    <div className="col-lg-4">
                        <img alt="" className="img-responsive img-shadow" src={Kudo2}/>

                    </div>
                    <div className="col-lg-4">
                        <img alt="" className="img-responsive img-shadow" src={Kudo3}/>
                        {/* <h5 className="text-gray mt-6">Tagging the nudges makes scanning and prioiritization easy</h5> */}
                    </div>
                </div>

                <h4 className="text-bold mt-40">Manual nudge to enable collaboration</h4>
                <div className="row">
                    <div className="col-lg-4">
                        <img alt="" className="img-responsive img-shadow" src={Manual1}/>

                    </div>
                    <div className="col-lg-4">
                        <img alt="" className="img-responsive img-shadow" src={Manual2}/>

                    </div>
                    <div className="col-lg-4">
                        <img alt="" className="img-responsive img-shadow" src={Manual3}/>
                        {/* <h5 className="text-gray mt-6">Tagging the nudges makes scanning and prioiritization easy</h5> */}
                    </div>
                </div>
                <h4 className="text-bold mt-40">Outcome</h4>
                <span>These sections are in the concept and validated with clients. From interviews, they provided positive feedback and confirmed the use cases where mobile app would serve the value. However due to the mobile team engineering resources, it didn’t make into the development stage. </span>
            </>;

        case "Design sprint":
            return <>
                <span>Outside working on incremental changes to mobile app today, we started the nudge framework project, as the data to action got ranked higher as a company stratigic priority. It would be better to reimagine how nudge could have been done without limits and build the roadmap to deliver the ideal experience step by step. </span>
                <p/>
                <span>As the team planned on tackling the challenge, we thought design sprint would be great to help lay down the nudge framework foundation. I proposed to facilitate 5-day design sprint session with the help from another designer and two PMs. </span>

                <h4 className="text-bold mt-40">Design sprint goal</h4>
                <ContentHighlight attributes={data.highlight3}/>


                <h4 className="text-bold mt-40">Special Sprint:  Hybrid Research + Design</h4>
                <span>Different from the standard design sprint, we designed the version of 2-day research plus 3-day sketch/build/test workshops. Because it’s an important project but less urgent project, it’s challenging to run two separate sprints to ask for 10 days’ dedication from th team. Also we conducted the light and hybrid vesion so that everyone is onboard with the pain points directly heard from end users.</span>
                <p/>
                
                <img alt="" className="img-responsive" src={Agenda}/>

                <h4 className="text-bold mt-40">Part 1 - Research and Synthesis</h4>
                <img alt="" className="img-responsive" src={Part1}/>

                <h4 className="text-bold mt-40">Part 2 - Design and Prototype</h4>
                <img alt="" className="img-responsive" src={Part2}/>


                <h4 className="text-bold mt-40">Outcome: HOOK framework</h4>
                <span>After one whole week’s workshops, the team came to one single framework to enable care team with a better designed nudge cycle. We also extend Hook Model from Nir Eyal to a sequential system that drives user to change behaviors and form routine habits. This proposal got highly recognized during customer conference, and leadership teams are excited to apply the nudge framework to their daily operations. Though not all the features and redesign make the way into production, it projects a clear and promising roadmap for the nudge framework.</span>

                <img alt="" className="img-responsive" src={Hook}/>

            <div className="row mt-40">
                <LightboxImage className="col-lg-6" src={NFFlow}/>
                <LightboxImage className="col-lg-6" src={NFMock}/>
            </div>
                <h4 className="text-bold mt-40">Key takeaways</h4>
                <span>From coordinating the design sprint, I have learnt a lot about how to run design workshops to solve problems with the team, also the power of diverging and converging along the problem space. It also makes me believe creativity and the best solution comes from joint efforts of the team rather than any individual. I’m truly inspired to continue applying design sprint model to more collaborative design sessions. </span>

            </>;

        case "Redesign concept":
            return <>
                <span>Why I initiated the mobile app redesign is that the current version has limited capabilities to be a core intervention delivery channel. Post the nudge design sprint, we found there are quite a few
                     promising directions for mobile app to evolve towards. My design process composes of four parts:  
                     1) use case analysis, 2) information architecture, 3) wireframe, 4) hi-fi mockups and prototype for validation. 
                     After one month of completing these designs, I presented them to different stakeholders to get buy-in so that we could include the redesign in the mobile app roadmap. </span>
                <h4 className="text-bold mt-40">Targeted users and core use cases</h4>
                <span>The four main uses cases for frontline nurses and leadership teams are:</span>
                <p/>
                <span>1. Getting alerted on upcoming crowding or problems</span>
                <p/>
                <span>2. Check real time census and status while being mobile</span>
                <p/>
                <span>3. Prompt to take actions based on contextual information</span>
                <p/>
                <span>4. Collaborate with the team about problems/requests</span>

                <h4 className="text-bold mt-40">Information architecture</h4>
                <LightboxImage src={RedesignIA}/>

                <h4 className="text-bold mt-40">Wireframes</h4>
                <LightboxImage src={RedesignWire}/>

                <h4 className="text-bold mt-40">Hi-fi Mockups and Visual Exploration</h4>
                <LightboxImage src={Hifi}/>

                <h4 className="text-bold mt-40">Prototype</h4>
                <div className="row bg-gray pt-40 pb-40">
                    <video className="img-responsive col-lg-4 col-lg-push-4" controls>
                        <source src={Demo} type="video/mp4"/>
                    </video>
                </div>
            </>;

        case "Outcome":
            return <>
                {/*<h4 className="text-bold"/>*/}
                <span>Redesign concept got a lot of great feedback both internally and externally. One nurse manager commented, "I really like how the app delivers the snapshot of the system status and make it very easy to access patient data.” Our mobile team is planning more extensive user testing sessions to prioritize all the use cases and features so that the team can start building towards the long term vision.</span>
            </>;
        default:
            return <></>;
    }
};

const IndexPage = () => (
    <Template data={data} renderSection={renderSection} lock={true}/>
);

export default IndexPage
