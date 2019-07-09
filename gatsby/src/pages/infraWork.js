import React from "react"

import Brief from "../components/brief"
import ContentHighlight from "../components/content-highlight"
import Template from "../components/template";

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
import Timeline1 from "../images/jcs/P2 Recording Create Dis.png"
import Timeline3 from "../images/jcs/P2 IxD.png"

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
        }
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
                <img alt="" className="img-responsive" src={ExMap}/>
            </>;

        case "Installation Flow":
            return <>
                <img alt="" className="img-responsive" src={ExMap}/>
            </>;

        case "Outcome":
            return <>
                <span>Through working with cross-function team, including content delelopers and installation team, we came up with three design deliverables: Contextual Help Patterns, Product Installation-Tour Design and Seamless Delivery Design.</span>
                <p/>
                <span>When I presented the installation flow to customers, they were very excited about the curated experience and proposed that if it could help personalize the product UI. Unfortunately the installation tool didn’t get built into product in the end, but there is a lot of learning for product feature development where we could onboard users with curated and personalized experiences. </span>
            </>;

        case "Image":
            return <img alt="" className="img-responsive" src={Robot}/>;

        default:
            return <></>;
    }
};

const IndexPage = () => (
    <Template data={data} renderSection={renderSection} lock={false}/>
);

export default IndexPage