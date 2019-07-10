import React from "react"

import Brief from "../components/brief"
import ContentHighlight from "../components/content-highlight"
import Template from "../components/template";

/* Image Assets */
import Cover from "../images/smx/smx-cover.png"
import Store from "../images/smx/smx-store.png"
import Aisle from "../images/smx/smx-aisle.png"
import Compete from "../images/smx/smx-compet.jpg"
import Discover from "../images/smx/smx_discover1.jpg"
import Nav1 from "../images/smx/smx-nav.jpg"
import Nav2 from "../images/smx/smx-nav2.png"
import Control1 from "../images/smx/navi-action.png"
import Control2 from "../images/smx/control.png"
import Control3 from "../images/smx/nav-control.png"
import Help1 from "../images/smx/smx_help1.png"
import Help2 from "../images/smx/smx_help2.png"
import UI from "../images/smx/smx-ui.png"
import Guide from "../images/smx/smx-guide.jpg"

const data = {
    name: "ShopperMX",
    pri : {
        label: "Autodesk",
        href: "/project/infraWork/index.html"
    },
    next: {
        label: "WebSite Design",
        href: "/project-data.html"
    },
    title: "ShopperMX: 3D Virtual Store Navigation Experience",
    subTitle: "Design virtual store on the web app to drive innovative store design and market research insights",
    highlight1: ["How to enable non-gamers to navigate through the 3D store smoothly on the web browser?"],

    briefAttribute: [
        {
            label: "Timeline",
            value: "Feb. 2013 - Sep. 2014"
        },
        {
            label: "Team",
            value: "PM, FE, Game Developers, 3D Artists"
        },
        {
            label: "Role",
            value: "UX/UI Designer - team of one"
        },
        {
            label: "Targeted Users",
            value: "Market researchers, shoppers"
        },
        {
            label: "Design Scope",
            value: "Full cycle design\nStyle guide\nNavigation design"
        },
        {
            label: "Outcome",
            value: "Launched ShopperMX within four months as the first web-based SaaS product for market research, well received by large clients like Walmart and Target."
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
            label: "ShopperMX Overview",
            key:  "ShopperMX Overview"
        },
        {
            label: "Design Challenge",
            key:  "Design Challenge",

        },
        {
            label: "Discover",
            key:  "Discover",
        },
        {
            label: "Framework",
            key:  "Framework",
        },
        {
            label: "Navigation Design",
            key:  "Navigation Design",
        },
        {
            label: "UX/UI Design",
            key:  "UX/UI Design",
        },
        {
            label: "Demo and takeaways",
            key:  "Demo and takeaways"
        }
    ]
};
const renderSection= (key) => {
    switch (key) {
        case "Overview":
            return <img alt="" className="img-responsive" src={Cover}/>;

        case "Brief":
            return <Brief attributes={data.briefAttribute}/>;

        case "ShopperMX Overview":
            return <>
                <span>ShopperMX is the first 3D simulation app to visualize shelves and stores on a web browser. Powered by game technologies like Unity Engine, ShopperMX drives innovative store designs and visual communication for retailers and manufacturers. ShopperMX was successfully launched in June 2013. It has a growing user base and recognized as a simple and powerful platform to drive innovation.</span>
                <p/>
            <div className="row">
                    <img alt="" className="img-responsive col-lg-6" src={Store}/>
                    <img alt="" className="img-responsive col-lg-6" src={Aisle}/>
                </div>
            </>;

        case "Design Challenge":
            return <>
                <ContentHighlight attributes={data.highlight1}/>
                <span>When users enters the virtual store through a web browser, they have to learn to use mouse and keyboard to walk around and pick up products. It is challenging for most users in retailing industry to learn the controls for 3D environment, because they have no prior gaming knowledge and there is no clear similarity to webpages or office software they use daily. How can I help users learn hidden interactions fast and engage in the virtual environment to design stores easily?</span>
                <p/>
            </>;

        case "Discover":
            return <>
                <span>To stand in the shoes of users, I researched on canvas tools that our primary users interact with daily, like PowerPoint and Google map. It helps me understand their mental models and expectations for common controls in the 2D and 3D space. On the competitive landscape, I reviewed 3D model design applications like Tinkercad and Sketchfab, to get inspirations on interaction pattern design in 3D space.</span>
                <p/>
                <span>To fully understand the user behavior pattern, I created 2 personas to represent CPG industry common users. On the other hand, I approached the problem by analyzing primary task flows and user contextual tasks while in the virtual environment.</span>
                <div className="row">
                    <img alt="" className="img-responsive col-lg-6" src={Compete}/>
                    <img alt="" className="img-responsive col-lg-6" src={Discover}/>
                </div>
            </>;

        case "Framework":
            return <>
                 <div className="row">
                    <img alt="" className="img-responsive col-lg-6" src={Nav1}/>
                    <img alt="" className="img-responsive col-lg-6" src={Nav2}/>
                </div>
            </>;

        case "Navigation Design":
            return <>
                <span>Under the guidelines of Simplicity and Easiness to Learn, I designed the navigation system and associated interaction patterns. In ShopperMX there are Walk, View and Design modes, and each has 4 control patterns to facilitate 3D interactions.</span>
                <p/>
                <div className="row">
                    <img alt="" className="img-responsive col-lg-6" src={Control1}/>
                    <img alt="" className="img-responsive col-lg-6" src={Control2}/>
                </div>
                <img alt="" className="img-responsive" src={Control3}/>
                <div className="row">
                    <img alt="" className="img-responsive col-lg-6" src={Help1}/>
                    <img alt="" className="img-responsive col-lg-6" src={Help2}/>
                </div>
            </>;

        case "UX/UI Design":
            return <>
                <img alt="" className="img-responsive" src={UI}/>
                <img alt="" className="img-responsive" src={Guide}/>
            </>;

        case "Demo and takeaways":
            return <>
                <span>The feedback we got from client testing sessions reflected it was easy to navigate and design objects in the virtual environment, and the usage report showed increasing usage time on the platform per user. Based on the feedback, we iterated the navigation system to support power users with short cuts and personal configuration.</span>
                <p/>
                <h4 className="text-bold mt-20">Product Demo</h4>

                <div className="embed-responsive embed-responsive-16by9 mt-20 mb-20">
  							<iframe className="embed-responsive-item" src="https://player.vimeo.com/video/68538011?title=0&byline=0&portrait=0" allowfullscreen></iframe>

							</div>

                <h4>1. Be Ready for Changes Along the Way</h4>
                <p/>
                <span>Since ShopperMX is the first web-based SaaS product for clients in CPG industry, we kept learning what the product would be like by working with clients side by side. The fact also leads to the UX/UI design getting updated very frequently. To cope with this challenge, I structures the feature documentation in a light-noted manner and keep developers and QA team in the loop. At the same time, I started building Pattern Library to save efforts on UI specs to focus on features and interaction flows more.</span>
                <p/>
                <h4>2. Make Everyone's Voice Heard</h4>
                <p/>
                <span>As the only designer, I always reach out to hear voices about ShopperMX from different teams: development, QA, customer service, marketing and etc. It helps me re-evaluate my design solutions from different perspectives, and also got inspired to find better solutions. I put all main UI on the lounge wall so that everyone in the company can view it and share with me their opinions. When they saw their suggestions being added to the new product release, people are very happy and more likely to help the product improve.</span>
                <p/>
                <h4>3. Can I Do Better Next Time?</h4>
                <p/>
                <span>Though I have learnt most principles and methods from graduate school, I found there are more flexible UX practices to be mastered and executed in daily work. When I finished a feature design and delivery, I stopped to retrospect my process and researched on potential improvements. I appreciate great resources online shared by UX gurus. They help me broaden my UX toolkit and keep fresh with design trends.</span>
            </>;

        default:
            return <></>;
    }
};

const IndexPage = () => (
    <Template data={data} renderSection={renderSection} lock={false}/>
);

export default IndexPage