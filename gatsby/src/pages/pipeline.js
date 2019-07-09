import React from "react"

import { Anchor } from 'antd';
import ImageGallery from 'react-image-gallery';

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentHeader from "../components/content-header"
import ContentSection from "../components/content-section"
import Brief from "../components/brief"
import Lock from "../components/lock"
import ContentHighlight from "../components/content-highlight"

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

const { Link } = Anchor;

const data = {
    pri : {
        label: "home",
        href: "/"
    },
    next: {
        label: "mobile",
        href: "/project/mobile/index.html"
    },
    title: "Jaunt Cloud Services: Video Production Pipeline",
    subTitle: "Empower VR Media Creation and Distribution",
    highlight1: ["How to improve the video production pipeline to make it easy to onboard and manage media in a seamless and transparent way?"],
    highlight2: [
        "Easy to access data while scalable",
        "Actionable components",
        "Delightful and refreshing"],

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
            label: "VR Video Pipeline",
            key:  "VR Video Pipeline"
        },
        {
            label: "Production Design Challenge",
            key:  "Production Design Challenge"
        },
        {
            label: "SOLUTION FRAMEWORK",
            subTitle: [
                "Redesign Service Structure",
                "Improve video editing experience",
                "User onboarding flow"
            ],
            key:  "SOLUTION FRAMEWORK"
        },
        {
            label: "Post-production: publishing and analytics",
            key:  "Post-production: publishing and analytics"
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
            label: "Takeaway",
            key:  "Takeaway"
        },
        {
            key:  "Image"
        }
    ]
};

const images = [
    {
        original: Specs1,
        thumbnail: Specs1,
    },
    {
        original: Specs2,
        thumbnail: Specs2,
    },
    {
        original: Specs3,
        thumbnail: Specs3,
    },
    {
        original: Specs4,
        thumbnail: Specs4,
    }
];

const renderSection= (oTitle, index) => {
    switch (oTitle.key) {
        case "Overview":
            return <img className="img-responsive" src={Cover}/>;

        case "Brief":
            return <Brief attributes={data.briefAttribute}/>;

        case "VR Video Pipeline":
            return <>
                <span>Current With Jaunt Cloud Services(JCS), users can apply cloud rendering to stitch 24 footage together, and transcode them into different formats. The cloud services help prepare video media for distribution on all VR platforms instead of managing files one by one. Along with the rendering, JCS also provides the service modules of Publishing and Analytics to help creators distribute videos and track the audience engagement.</span>
                <p/>

                <img className="img-responsive" src={Cover}/>;
                <h4 className="text-bold mt-40">Targeted Users</h4>
                <span>JCS serves people who are working in VR movie production, including Editors, Producers and Jaunt internal people to trouble shoot. Utilizing VR as a new medium and territory to do storytelling and deliver cinematic VR experiences, JCS users try to focus on the creative side and make most of rendering platform and services.</span>
                <p/>

                <img className="img-responsive" src={Cover}/>;
                <h4 className="sectionTitle text-bold mt-40">Experience Map of today’s production</h4>
                <span>I started the project by interviewing in-house production team. Together we mapped out the full journey of creating videos, so that we could have a holistic view to prioritize breakdown points.</span>
                <p/>

                <img className="img-responsive" src={Cover}/>;
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

        case "Post-production: publishing and analytics":
            return <>
            </>;

        case "Living style guide":
            return <>
            </>;

        case "Visualize the blackbox":
            return <>
            </>;

        case "Takeaway":
            return <>
            </>;

        case "Image":
            return <ImageGallery items={images}/>;
    }
};

const IndexPage = () => (
    <Layout pri={data.pri} next={data.next}>
        <SEO title="Mobile" />

        <ContentHeader title={data.title} subTitle={data.subTitle}/>

        <div className="AnchorPosition">
            <Anchor>
                {
                    data.aTitle.map((oTitle, index) => (
                        (index ===0 || oTitle.label) && <Link href={index ===0 ? "#top" : ("#" + oTitle.label)} title={oTitle.label || "Overview"} key={index}>
                            {oTitle.subTitle && oTitle.subTitle.map((subTitle, index2) => (
                                <Link href={"#" + subTitle} title={subTitle} key={index2}/>
                            ))}
                        </Link>
                    ))
                }
            </Anchor>
        </div>

        {
            data.aTitle.map((oTitle, index) => (
                <ContentSection title={oTitle.label} key={index}>
                    {renderSection(oTitle, index)}
                </ContentSection>
            ))
        }

    </Layout>
);

export default IndexPage