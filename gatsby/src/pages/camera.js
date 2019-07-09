import React from "react"

import ImageGallery from 'react-image-gallery';

import Brief from "../components/brief"
import ContentHighlight from "../components/content-highlight"
import Template from "../components/template";

/* Image Assets */
import Cover from "../images/cam/cam-cover.png"
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
import Timeline1 from "../images/jcs/P2 Recording Create Dis.png"
import Timeline2 from "../images/jcs/P2 Timeline Flow.png"
import Timeline3 from "../images/jcs/P2 IxD.png"

const data = {
    name: "Pipeline",
    pri : {
        label: "Video Pipeline",
        href: "/project/pipeline/index.html"
    },
    next: {
        label: "First Experience",
        href: "/project/fe/index.html"
    },
    title: "Jaunt Desktop App: Camera Controller and Media Manager",
    subTitle: "Capture and manage media in a simply and reliable way",
    highlight1: ["How to redesign the desktop app to provide a stable, fluid and transparent experience?"],


    briefAttribute: [
        {
            label: "Timeline",
            value: "Nov. 2016 - May. 2017"
        },
        {
            label: "Team",
            value: "Engineering team, PM"
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
            value: "Very well received new controller UI and media manager releases. Timelapse and live feed features are top rated functions by Jaunt camera users"
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
            label: "Capture recordings",
            key:  "Capture recordings"
        },
        {
            label: "Design challenge",
            key:  "Design challenge"
        },
        {
            label: "Solution framework",
            subTitle: [
                "Media manager",
                "Camera controller",
                
            ],
            key:  "Solution framework"
        },
            label: "Takeaway",
            key:  "Takeaway"
        },
      
    ],
    images: [
        // {
        //     original: Specs1,
        //     thumbnail: Specs1,
        // },
        // {
        //     original: Specs2,
        //     thumbnail: Specs2,
        // },
        // {
        //     original: Specs3,
        //     thumbnail: Specs3,
        // },
        // {
        //     original: Specs4,
        //     thumbnail: Specs4,
        // }
    ]    
};

const renderSection= (key) => {
    switch (key) {
        case "Overview":
            return <img alt="" className="img-responsive" src={Cover}/>;

        case "Brief":
            return <Brief attributes={data.briefAttribute}/>;

        case "VR Video Pipeline":
            return <>
                <span>Current With Jaunt Cloud Services(JCS), users can apply cloud rendering to stitch 24 footage together, and transcode them into different formats. The cloud services help prepare video media for distribution on all VR platforms instead of managing files one by one. Along with the rendering, JCS also provides the service modules of Publishing and Analytics to help creators distribute videos and track the audience engagement.</span>
                <p/>

                <img alt="" className="img-responsive" src={System}/>

                <h4 className="text-bold mt-40">Targeted Users</h4>
                <span>JCS serves people who are working in VR movie production, including Editors, Producers and Jaunt internal people to trouble shoot. Utilizing VR as a new medium and territory to do storytelling and deliver cinematic VR experiences, JCS users try to focus on the creative side and make most of rendering platform and services.</span>
                <p/>
                <img alt="" className="img-responsive" src={User}/>

                <h4 className="sectionTitle text-bold mt-40">Experience Map of today’s production</h4>
                <span>I started the project by interviewing in-house production team. Together we mapped out the full journey of creating videos, so that we could have a holistic view to prioritize breakdown points.</span>
                <p/>

                <img alt="" className="img-responsive" src={ExMap}/>
                <h4 className="text-bold mt-40">Key problems of production pipelinet</h4>
                <span>1. Media centric UI rather than project based. Users have a hard time managing media across projects and the naming of media is hard to manage and often lead to errors.</span>
                <p/>
                <span>2. No transparency on the rendering status, and upload/download sessions are complicated.</span>
                <p/>
                <span>3. How to onboard new users who don’t have video editing or production experiences?</span>
                <p/>
            </>;

        case "Production Design Challenge":
            return <>
                <ContentHighlight attributes={data.highlight1}/>
                <h4 className="text-bold mt-40">Design Process</h4>
                <span>I’m the only product designer working with a team of four engineers and two product managers. We’re moving fast on shipping incremental features. Meanwhile PM and I are working on the next version of the JCS platform to help prioritize features.</span>
                <p/>
                <span>When there is request or complaint from end users, we started by talking to our internal production team to understand the problem better. If we have enough confidence, then the team will sketch out various solutions and discuss their feasibility.</span>
                <p/>
                <span>I’ll lead the next step to visualize top two solutions with wireframes and flow charts. Then our team will share these two low-fi solutions with external users for feedback. Once we confirmed on the use case and solution, technical lead will start building the structure while I’m working on the UI delivery to ensure usability and quality of the solution design.</span>
                <p/>
            </>;

        case "SOLUTION FRAMEWORK":
            return <>
                
            </>;

        case "Redesign Service Structure":
            return <>
                <img alt="" className="img-responsive" src={Service}/>
                <h4 className="text-bold mt-40">Wireframe of project oriented content management flow</h4>
                <img alt="" className="img-responsive" src={Wire}/>
            </>;

        case "Improve video editing experience":
            return <>
                <span>I lead the design of improving timeline editor where the users can quickly trim the video beginning and end points to reduce rendering cost. Below is the interaction diagram of time scrub and player handle to propose a simplified editing and saving process. 
                <p/>Once the feature is released to our users, they shared back that editing and saving clips have been much faster and they like the ability to easily modify the scrub and time handle.
                </span>
                <div class="row">
                    <img alt="" className="img-responsive col-lg-6 col-sm-12" src={Timeline1}/>
                    <img alt="" className="img-responsive col-lg-6 col-sm-12" src={Timeline1}/>
                </div>
                <img alt="" className="img-responsive" src={Timeline3}/>
            </>;

        case "User onboarding flow":
            return <>
                
                <img alt="" className="img-responsive" src={Tour}/>
            </>;


        case "Publishing and analytics":
                return <>
                     <img alt="" className="img-responsive" src={Sketch}/>
                     <img alt="" className="img-responsive" src={Pub}/>
                </>;
            
        case "Living style guide":
            return <>
            <span>While I were producing more pages, the team feel we need a redesign of the whole product UI. 
            To start I decided to catalog current design tokens and components used, as well as page layout. 
            In addition, there is a growing request for dark themed UI because most video production software are in dark mode already. 
            Dark theme is easier on the eyes while presenting rich media data. I lead the style guide design outside project work, and document the final style 
            guide online. It leads to our frontend engineers complete the dark themed UI within two weeks. </span>

            <img alt="" className="img-responsive" src={StyleGuide}/>
            <p className="text-center mt-20">
                <a className="btn btn-3d bt-lg" href="https://codepen.io/kora731/pen/dNdZgK" target="_blank">View Style Guide Online</a>
            </p>
            </>;

        case "Visualize the blackbox":
            return <>
                <span>Having a super talented technical artist in the team (Rory), I invited him to collaborate on a hackathon project to visualize how the video were brought into final production ready. The robot metaphor helps onboard not only internal team but also external new users to understand the whole video pipeline.
                    </span>

             <img alt="" className="img-responsive" src={Robot}/>


            </>;

        case "Takeaway":
            return <>
               <span>Design solution needs to balance between future long-term goal and current iterations, how to handle user feedback and understand the insights instead of only following features asked for. To come up with effective solutions, designers need to learn about and prepare for the big picture and understand the why better. For example, a large part of the system today is built upon request, but what turned out happening is that the features built are not used by the end user. 
                 <p/>
                When users ask for certain features, should we really follow the comments? or we need to rethink through the deeper reason and flow, why they are like this today. Remind me of Ford’s faster horse theory. Designers need to consolidate the insights, collaboratively define the vision we’re heading towards.
               </span>
               <ImageGallery items={data.images}/>;
            </>;

        default:
            return <></>;
    }
};

const IndexPage = () => (
    <Template data={data} renderSection={renderSection} lock={false}/>
);

export default IndexPage