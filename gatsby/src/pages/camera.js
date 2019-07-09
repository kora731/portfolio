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
        {
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

        case "Capture recordings":
            return <>
                <span>Jaunt flagship product Jaunt One camera is paired with the camera controller application to access a wide variety of features. While connecting to the camera, users can adjust the camera exposure, capture preview and even get real time views. Jaunt media manager is the gateway tool to transfer recordings between VR camera, cloud services and user local data. It organizes 24 camera footage into formats ready for ingestion, to upload and download from the cloud.</span>
                <p/>

                <img alt="" className="img-responsive" src={System}/>

                <h4 className="text-bold mt-40">Camera Controller App Pain Points</h4>
                <span>Overloaded with lots of features and tangled statuses, the users had a hard time understanding all the modes and controls. Also the camera has 24 modules which may need to manual exposure adjustment of specific modules. How to design the viewport layout to support both global and individual camera view?</span>
                <p/>

                <h4 className="sectionTitle text-bold mt-40">Media Manager App Pain Points</h4>
                <span>VR video data size is very large at 50+ GB level sheer size with 4+ formats of stitched results. Long download time and internet connection stability are also challenging to manage the media in a secure and stable way.</span>
                <p/>
            </>;

        case "Design Challenge":
            return <>
                <ContentHighlight attributes={data.highlight1}/>
                <h4 className="text-bold mt-40">Experience Goals</h4>
                <span>Alleviate the user burden - redesign configuration flow to make it much easier and automate unnecessary steps</span>
                <p/>
                <span>Transparent system status - monitor the system changes, visualize the progress up-front for the user</span>
                <p/>
                <span>Balance advanced powerful settings with simplicity to support various user needs</span>
                <p/>
                <span>Fluid and scalable UI to support newly added features and long term vision</span>
                <p/>
            </>;

        case "Solution framework":
            return <>
                
            </>;

        case "Media Manager":
            return <>

            </>;

        case "Camera Controller":
            return <>

            </>;

        case "Takeaway":
            return <>
                <span>Fast and slow:  During the first week of joining Jaunt, I was able to design the download module right away. However, in the following months, I start learning more about how users actually interact with the Media Manager, only to discover the initial download dialog is not addressing the key pain points. Then I started slow iteration of the download dialog, to craft each interaction to support the user tasks better. The easiest and most accessible, right at hand, solution always poses high risk to actually solving the problem. Because it mostly overlooks the factors and edge cases, and that's where UX matters most. It has to be thought through with all use cases, and test against all possible routes.</span>
                <p/>
                <span>Camera is very prevalent in our daily life. But the adjustable controls vary a lot between mobile and professional cameras. Optimizing the UI layout alone doesn’t help address the workflow problem. Also with so much customization involved, how to uncover the mental model is also critical.</span>
                <p/>
            </>;

        default:
            return <></>;
    }
};

const IndexPage = () => (
    <Template data={data} renderSection={renderSection} lock={false}/>
);

export default IndexPage