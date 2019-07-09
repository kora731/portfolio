import React from "react"

import Brief from "../components/brief"
import ContentHighlight from "../components/content-highlight"
import Template from "../components/template";
import ImageGallery from 'react-image-gallery';

/* Image Assets */
import Cover from "../images/fe/fe-cover.png"
import Help from "../images/fe/fe-help.png"
import Install from "../images/fe/adsk-install.png"
import Flow from "../images/fe/adsk-flow.png"
import Wire from "../images/fe/fe-wire.png"
import Step1 from "../images/fe/adsk-step-1.png"
import Step2 from "../images/fe/adsk-step-2.png"
import Step3 from "../images/fe/adsk-step-3.png"
import Step4 from "../images/fe/adsk-step-4.png"
import Step5 from "../images/fe/adsk-step-5.png"
import Step6 from "../images/fe/adsk-step-6.png"
import Step7 from "../images/fe/adsk-step-7.png"
import Step8 from "../images/fe/adsk-step-8.png"
import Step9 from "../images/fe/adsk-step-9.png"
import Step10 from "../images/fe/adsk-step-10.png"

const data = {
    name: "InfraWork",
    pri : {
        label: "Jaunt App",
        href: "/project/camera/index.html"
    },
    next: {
        label: "ShopperMX",
        href: "/project/smx/index.html"
    },
    title: "First Experience: User Onboard Journey of Autodesk Infraworks",
    subTitle: "How to engage users at installation and introduce new features?",
    briefAttribute: [
        {
            label: "Timeline",
            value: "Sep. 2014 - Mar. 2015"
        },
        {
            label: "Team",
            value: "Design team, learning content developer"
        },
        {
            label: "Role",
            value: "UX Designer"
        },
        {
            label: "Targeted Users",
            value: "Infraworks users"
        },
        {
            label: "Design Scope",
            value: "Pattern library\nPrototype\nUser Testing"
        },
        {
            label: "Outcome",
            value: "Contextual help pattern library got recognition from peer Autodesk designers. Installation design received very positive feedback from external users."
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
            label: "First Experience",
            key:  "First Experience"
        },
        {
            label: "Contextual help",
            key:  "Contextual help"
        },
        {
            label: "Installation Flow",
            key:  "Installation Flow"
        },
        {
            key:  "Image"
        },
        {
            label: "Outcome",
            key:  "Outcome"
        },
    ],
    images: [
        {
            original: Step1,
            thumbnail: Step1,
        },
        {
            original: Step2,
            thumbnail: Step2,
        },
        {
            original: Step3,
            thumbnail: Step3,
        },
        {
            original: Step4,
            thumbnail: Step4,
        },
        {
            original: Step5,
            thumbnail: Step5,
        },
        {
            original: Step6,
            thumbnail: Step6,
        },
        {
            original: Step7,
            thumbnail: Step7,
        },
        {
            original: Step8,
            thumbnail: Step8,
        },
        {
            original: Step9,
            thumbnail: Step9,
        },
        {
            original: Step10,
            thumbnail: Step10,
        },
    ]    

};

const renderSection= (key) => {
    switch (key) {
        case "Overview":
            return <img alt="" className="img-responsive" src={Cover}/>;

        case "Brief":
            return <Brief attributes={data.briefAttribute}/>;

        case "First Experience":
            return <>
                <span>The first project I lead designing at Autodesk is to deliver an engaging first experience to help users get started with InfraWorks 360, a civil engineering design software with data-rich 3D models. During the customer journey, First Experience covers multiple touch points where users get onboard with the product and develop design skills using InfraWorks 360. Its components consist of product installation & update, first product launch, trial experience and in-product help where the design helps a novice user become an expert.</span>
                <p/>

                <h4 className="text-bold mt-40">First Experience Components</h4>
                <span>Product Tour: curated learning contents during installation or first launch</span>
                <p/>
                <span>Onboard help: coachmark and step-through to present new features</span>
                <p/>
                <span>Interactive dialog: bot initiated conversational walkthrough</span>
                <p/>
                <span>Contextual Callout: highlight certain elements while not blocking actions</span>
                <p/>
                <span>Trial experience: in-product messaging to introduce trial term and services</span>
                <p/>

                <h4 className="sectionTitle text-bold mt-40">Design Guidelines</h4>
                <span>- Aware of user profile and provide curated and crafted onboard experiences</span>
                <p/>
                <span>- Build humane conversations and avoid software jargons, show more than tells</span>
                <p/>
                <span>- Showcase 3D visual capabilities early to engage userss</span>
                <p/>
                <span>- Learn through doing: provide contextual help right next to user taskss</span>
                <p/>
                <span>- Allow users to opt out of help mode at any times</span>
                <p/>
                <span>- Copywrite is about user benefits rather than product featuress</span>
                <p/>
                <span>- Reward users right in the context</span>
                <p/>
            </>;

        case "Contextual help":
            return <>
                <img alt="" className="img-responsive" src={Help}/>
            </>;

        case "Installation Flow":
            return <>
                <img alt="" className="img-responsive mt-20 mb-20" src={Install}/>
                <img alt="" className="img-responsive mt-20 mb-20" src={Flow}/>
                <img alt="" className="img-responsive mt-20 mb-20" src={Wire}/>

                <ImageGallery items={data.images}/>
            </>;

        case "Outcome":
            return <>
                <span>Through working with cross-function team, including content delelopers and installation team, we came up with three design deliverables: Contextual Help Patterns, Product Installation-Tour Design and Seamless Delivery Design.</span>
                <p/>
                <span>When I presented the installation flow to customers, they were very excited about the curated experience and proposed that if it could help personalize the product UI. Unfortunately the installation tool didn’t get built into product in the end, but there is a lot of learning for product feature development where we could onboard users with curated and personalized experiences. </span>
            </>;

        default:
            return <></>;
    }
};

const IndexPage = () => (
    <Template data={data} renderSection={renderSection} lock={false}/>
);

export default IndexPage