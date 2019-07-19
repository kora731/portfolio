import React from "react"

import ImageGallery from 'react-image-gallery';

import Brief from "../components/brief"
import ContentHighlight from "../components/content-highlight"
import Template from "../components/template";

/* Image Assets */
import Cover from "../images/cam/cam-cover.png"
import System from "../images/cam/jaunt-pipeline.png"
import IA from "../images/cam/jaunt-ia.png"
import DozerIXD from "../images/cam/dozer-ixd.png"
import DozerUI from "../images/cam/dozer-ui.png"
import Sync from "../images/cam/dozer-syncmedia.png"
import Download from "../images/cam/dozer-download.png"
import TriV1A from "../images/cam/tri-v1-1.png"
import TriV1B from "../images/cam/tri-v1-2.png"
import TriV2A from "../images/cam/tri-v2-1.png"
import TriV2B from "../images/cam/tri-v2-2.png"
import TriV3A from "../images/cam/tri-v3-1.png"
import TriV3B from "../images/cam/tri-v3-2.png"
import TriStep1 from "../images/cam/tri-step1.png"
import TriStep2 from "../images/cam/tri-step2.png"
import TriStep3 from "../images/cam/tri-step3.png"
import TriStep4 from "../images/cam/tri-step4.png"
import TriStep5 from "../images/cam/tri-step5.png"
import TriStep6 from "../images/cam/tri-step6.png"
import TriStep7 from "../images/cam/tri-step7.png"
import TriStep8 from "../images/cam/tri-step8.png"
import TriStep9 from "../images/cam/tri-step9.png"

const data = {
    name: "Pipeline",
    pri : {
        label: "Video Pipeline",
        href: "/project/pipeline/index.html"
    },
    next: {
        label: "Autodesk",
        href: "/project/infraWork/index.html"
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
            value: "Very well received app releases. Timelapse and live feed features are top rated functions by Jaunt camera users"
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
            label: "Outcome",
            key:  "Outcome"
        },
        {
            label: "Takeaway",
            key:  "Takeaway"
        },
      
    ],
    images: [
        {
            original: TriStep1,
            thumbnail: TriStep1,
        },
        {
            original: TriStep2,
            thumbnail: TriStep2,
        },
        {
            original: TriStep3,
            thumbnail: TriStep3,
        },
        {
            original: TriStep4,
            thumbnail: TriStep4,
        },
        {
            original: TriStep5,
            thumbnail: TriStep5,
        },
        {
            original: TriStep6,
            thumbnail: TriStep6,
        },
        {
            original: TriStep7,
            thumbnail: TriStep7,
        },
        {
            original: TriStep8,
            thumbnail: TriStep8,
        },
        {
            original: TriStep9,
            thumbnail: TriStep9,
        },
      
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
                <span>Overloaded with lots of features and tangled statuses, the users had a hard time understanding all the modes and controls. In addition, the camera has 24 modules and each one may need manual adjustment. How to design the viewport layout to support both global and individual camera view for adjustment?</span>
                <p/>

                <h4 className="sectionTitle text-bold mt-40">Media Manager App Pain Points</h4>
                <span>VR video data size is very large at 50+ GB level sheer size with 4+ formats of stitched results. Long download time and internet connection stability are also challenging to manage the media in a secure and stable way.</span>
                <p/>
            </>;

        case "Design challenge":
            return <>
                <ContentHighlight attributes={data.highlight1}/>
                <h4 className="text-bold mt-20">Experience Goals</h4>
                <span>Alleviate the user burden - simplify configuration flow and automate unnecessary steps</span>
                <p/>
                <span>Transparent system status - monitor the system changes, visualize and update the progresses up-front</span>
                <p/>
                <span>Balance advanced settings with simplicity to support diverse user needs</span>
                <p/>
                <span>Fluid and scalable UI to support newly added features and long term vision</span>
                <p/>
            </>;

        case "Solution framework":
            return <>
                
            </>;

        case "Media manager":
            return <>
                <h4 className="text-bold mt-40">Download media workflow and UI</h4>
                <div className="row">
                    <img alt="" className="img-responsive col-lg-8" src={DozerIXD}/>
                    <img alt="" className="img-responsive col-lg-4" src={DozerUI}/> 
                </div>

                <h4 className="text-bold mt-40">Cloud Sync Model</h4>
                <img alt="" className="img-responsive" src={Sync}/> 

                <h4 className="text-bold mt-40">MVP with a focus on download feature</h4>
                <span className="row">Although synchronization model between local and cloud is desirable, it poses huge technical challenges for the team. Given the limited engineering resources, we re-define the download feature scope to focus on patch download. After talking to more editors and data wranglers, we learnt that users mostly will gather the same type of media during each session. With default setup to most frequent use cases, the user is still able to customize to their special case needs.
                    </span>
                    <img alt="" className="img-responsive" src={Download}/> 

            </>;

        case "Camera controller":
            return <>
            <h4 className="text-bold mt-40">Experience Framework</h4>
            <p>How to provide a more fluid and scalable UI with new added features
                <br/>- to adopt a similar mental model to DSLR camera operation: switch between commands and actions, instead of showing all buttons and UI at once, prioritize and group functions.</p>
            <p>How to make widgets more accessible and efficient
                <br/>- to lower the learning bar to understand the UI, focus on user tasks to simplify the flow. Learn from mobile camera apps, simple WYSIWYG model while still powerful with advanced settings</p>

            <h4 className="text-bold mt-40">IA Structure</h4>
            <span>Modes:  Record or Time-lapse,  Capture Preview and Video Feed 
            <p/>Settings: The camera has Setting Profile, difference between auto and manual modes 
            <p/>Viewport: View of All / Individual Camera Modules: naive stitch, list, side by side
            </span>

            <h4 className="text-bold mt-40">Design Iterations</h4>
            
            <span><b>Iteration 1</b>:
                <p/>My first iteration is to design the button group, which helps prioritize functions. But the introduction of modes is making design more complicated. The coupling relationship makes users more confused with the view and action dependency. Also the location of the customization view is not scalable, and taking up the valuable screen space. 
                </span>
                <div className="row mt-20 mb-20">
                    <img alt="" className="img-responsive col-lg-6" src={TriV1A}/>
                    <img alt="" className="img-responsive col-lg-6" src={TriV1B}/> 
                </div>

                <span> <b>Iteration 2</b>:<p/>
               For the next iteration, I tried to have the left sidebar showing the default parameters while expanding to edit: powerful but also too complicated, not mapping to camera controller mental model. Live feed as a separate way to streaming views, is designed with more visual emphasis to encourage user interaction to try it out.

                </span>
                <div className="row mt-20 mb-20">
                    <img alt="" className="img-responsive col-lg-6" src={TriV2A}/>
                    <img alt="" className="img-responsive col-lg-6" src={TriV2B}/> 
                </div>

                <span><b>Iteration 3</b>:<p/>
                While research and keep trying out different layout, it's critical to remember the base principle of balancing simplicity with being powerful. Then I introduce the toggle control of camera settings to allow for hide / show components.
                </span>
                <div className="row mt-20 mb-20">
                    <img alt="" className="img-responsive col-lg-6" src={TriV3A}/>
                    <img alt="" className="img-responsive col-lg-6" src={TriV3B}/> 
                </div>
            </>;
        case "Outcome":
            return <>
            
            
            <span>
            When I shared the proposal via InVision prototype with creators remotely, they are very excited about the upcoming timelapse new feature. I worked tightly with the app engineer to prepare all the assets and UI specs, and got the app released in May 2017. It was well received among creators using Jaunt camera.
            </span>
            <ImageGallery items={data.images}/>

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