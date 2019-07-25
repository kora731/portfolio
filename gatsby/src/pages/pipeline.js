import React from "react"

import Brief from "../components/brief"
import ContentHighlight from "../components/content-highlight"
import Template from "../components/template";
import LightboxImage from  "../components/lightbox-image"

/* Image Assets */
import Cover from "../images/jcs/jcs-cover.png"
import System from "../images/jcs/jcs-system.png"
import User from "../images/jcs/jcs-persona.jpg"
import ExMap from "../images/jcs/jaunt-expmap.png"
import Service from "../images/jcs/jcs-services.png"
import Wire from "../images/jcs/jcs-wire.png"
import Tour from "../images/jcs/jcs-onboard.png"
import Sketch from "../images/jcs/jcs-sketch.png"
import Pub from "../images/jcs/jcs-pub.png"
import StyleGuide from "../images/jcs/jcs-styleguide.png"
import Robot from "../images/jcs/jcs_robot.jpg"
import Timeline1 from "../images/jcs/jcs-record.png"
import Timeline2 from "../images/jcs/jcs-ixd-small.png"
import Timeline3 from "../images/jcs/jcs-ixd.png"
import VR from "../images/jcs/jaunt-vr.png"

const data = {
    name: "Pipeline",
    pri : {
        label: "Mobile",
        href: "/project/mobile/index.html"
    },
    next: {
        label: "Jaunt App",
        href: "/project/camera/index.html"
    },
    title: "Jaunt Cloud Services: Video Production Pipeline",
    subTitle: "Empower VR Media Creation and Distribution",
    highlight1: ["How to improve the video production pipeline to make it easy to onboard and manage media in a seamless and transparent way?"],
    briefAttribute: [
        {
            label: "Timeline",
            value: "Sep. 2016 - Dec. 2017"
        },
        {
            label: "Team",
            value: "PM, engineers and internal video editors"
        },
        {
            label: "Role",
            value: "Lead UX/UI Designer"
        },
        {
            label: "Targeted Users",
            value: "Indie movie producers and creators"
        },
        {
            label: "Design Scope",
            value: "Full design lifecycle (UXR, UX/UI)\nExperience map\nLiving style guide"
        },
        {
            label: "Outcome",
            value: "Improved usability of video pipeline with released publishing and analytics modules and a validated JCS experience roadmap"
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
            label: "VR video pipeline",
            key:  "VR video pipeline"
        },
        {
            label: "Design challenge",
            key:  "Design challenge"
        },
        {
            label: "Solution framework",
            subTitle: [
                "Redesign service structure",
                "Improve video editing experience",
                "User onboarding flow"
            ],
            key:  "Solution framework"
        },
        {
            label: "Publishing and analytics",
            key:  "Publishing and analytics"
        },
        {
            label: "Jaunt VR Player",
            key:  "Jaunt VR Player"
        },
        {
            label: "Living style guide",
            key:  "Living style guide"
        },
        {
            label: "Visualize the blackbox",
            key:  "Visualize the blackbox"
        },
        {
            key:  "Image"
        },
        {
            label: "Takeaway",
            key:  "Takeaway"
        }
    ]
};

const renderSection= (key) => {
    switch (key) {
        case "Overview":
            return <img alt="" className="img-responsive" src={Cover}/>;

        case "Brief":
            return <Brief attributes={data.briefAttribute}/>;

        case "VR video pipeline":
            return <>
                <span>With Jaunt Cloud Services (JCS), users can apply cloud rendering to stitch 24 footage together, and transcode them into different formats. The cloud services help prepare video media for distribution on all VR platforms instead of managing files one by one. Along with the rendering, JCS also provides the service modules of Publishing and Analytics to help creators distribute videos and track the audience engagement.</span>
                <p/>

                <img alt="" className="img-responsive" src={System}/>

                <h4 className="text-bold mt-40">Targeted Users</h4>
                <span>JCS serves people who are working in VR movie production, including Editors, Producers and Jaunt internal people to trouble shoot. Utilizing VR as a new medium and territory to do storytelling and deliver cinematic VR experiences, JCS users try to focus on the creative side and make most of rendering platform and services.</span>
                <p/>
                <img alt="" className="img-responsive" src={User}/>

                <h4 className="sectionTitle text-bold mt-40">Experience map of today’s production</h4>
                <span>I started the project by interviewing in-house production team. Together we mapped out the full journey of creating videos, so that we could have a holistic view to prioritize breakdown points.</span>
                <p/>

                <img alt="" className="img-responsive" src={ExMap}/>
                <h4 className="text-bold mt-40">Key problems of production pipeline</h4>
                <span>1. Media centric UI rather than project based. Users have a hard time managing media across projects and the naming of media is hard to track and often lead to errors.</span>
                <p/>
                <span>2. Video editing within the browser: how to make the process smooth and efficient to produce video clips?</span>
                <p/>
                <span>3. How to onboard new users who don’t have video editing or production experiences?</span>
                <p/>
            </>;

        case "Design challenge":
            return <>
                <ContentHighlight attributes={data.highlight1}/>
                <h4 className="text-bold mt-40">Design Process</h4>
                <span>I’m working with the team of four engineers and two product managers. We moved fast on shipping incremental features. Meanwhile PM and I were working on the next version of the JCS platform to help prioritize features and target at long term vision.</span>
                <p/>
                <span>When there was a request or complaint from end users, we started by talking to our internal production team who are subject masters to understand the problem scope. If we had enough context about the problem, the team would sketch out various solutions and review them together.</span>
                <p/>
                <span>I’d lead the next step to visualize top two solutions with wireframes and flow charts. Then our team would share these two prototypes with external users for feedback. Once we confirmed on the use case and solution, technical lead would start building the structure 
                    while I worked on the UI delivery to ensure usability and quality of the solution design.</span>
                <p/>
            </>;

        case "Solution framework":
            return <>

            </>;

        case "Redesign service structure":
            return <>
                <img alt="" className="img-responsive" src={Service}/>
                <h4 className="text-bold mt-40">Wireframe of project oriented content management flow</h4>
                <img alt="" className="img-responsive" src={Wire}/>
            </>;

        case "Improve video editing experience":
            return <>
                <span>I lead the design of improving timeline editor where the users could quickly trim the video 
                    start and end points to reduce rendering cost. Below is the interaction diagram of time scrub and player handle where I proposed a simplified editing and saving process.
                <p/>When the feature was released to our users, they shared that editing and saving clips had been much faster and they liked the ability to easily modify the scrub and player handle.
                </span>
                <div className="row">
                    <img alt="" className="img-responsive col-lg-6 col-sm-12" src={Timeline1}/>
                    <img alt="" className="img-responsive col-lg-6 col-sm-12" src={Timeline2}/>
                </div>
                <img alt="" className="img-responsive" src={Timeline3}/>
            </>;

        case "User onboarding flow":
            return <>
                <span>Jaunt Cloud Services is targeted at indie video producers who may not be familiar with the workflow at all. I proposed to design the user onboarding flow to
                    help introduce the workflow to the user in an intuitive way. It helps users follow through the production flow and could reduce support tickets we received. 
                    <p/></span>
                <img alt="" className="img-responsive" src={Tour}/>
            </>;


        case "Publishing and analytics":
            return <>
                <span> 
                    <p/></span>
                <img alt="" className="img-responsive" src={Sketch}/>
                <img alt="" className="img-responsive" src={Pub}/>
            </>;

        case "Jaunt VR Player":
            return <>
                <img alt="" className="img-responsive" src={VR}/>
            </>;

        case "Living style guide":
            return <>
                <span>While I were producing more pages, the team felt we needed a redesign of the whole product UI.
            I decided to catalog current design tokens and components used, as well as page layout to get started.
            In addition, there were a growing requests for dark themed UI because most video production software are in dark mode already.
            Dark theme is easier on the eyes while presenting rich media data. I lead the style guide design outside project work, and documented the final style
            guide online. It helped our frontend engineers completed the dark themed UI within two weeks. </span>

                <img alt="" className="img-responsive" src={StyleGuide}/>
                <p className="text-center mt-20">
                    <a className="btn btn-3d bt-lg" href="https://codepen.io/kora731/pen/dNdZgK" target="_blank" rel="noopener noreferrer">View Style Guide Online</a>
                </p>
            </>;

        case "Visualize the blackbox":
            return <>
                <span>Having a super talented technical artist in the team, I invited him to collaborate on a hackathon project to visualize how the video were brought into final production ready. The robot metaphor helps onboard not only internal team but also external new users to understand the whole video pipeline.</span>
            </>;

        case "Image":
            return <LightboxImage className="img-responsive" src={Robot}/>;

        case "Takeaway":
            return <>
                <span>Design solution needs to balance between future long-term goal and current iterations, how to handle user feedback and understand the insights instead of only following features asked for? To come up with effective solutions, 
                    designers need to learn about and prepare for the big picture and understand the why better. For example, a large part of the system today is built upon user requests, 
                    but what actually happened is that the features we built were not used by the end user asked for it.
                 <p/>
                When users ask for certain features, should we simply follow the comments? Or we could rethink through the deeper reason and flow, why they are asking for the feature today. The challenge reminds me of Ford’s faster horse theory. 
                Designers need to consolidate the insights from different sources, work collaboratively with the team to define the vision we’re heading towards.
               </span>

            </>;

        default:
            return <></>;
    }
};

const IndexPage = () => (
    <Template data={data} renderSection={renderSection} lock={false}/>
);

export default IndexPage