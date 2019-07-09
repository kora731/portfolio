import React from "react"

import Brief from "../components/brief"
import ContentHighlight from "../components/content-highlight"
import Template from "../components/template";

/* Image Assets */
import Cover from "../images/pf-cs-cover.png"

const data = {
    name: "ShopperMX",
    pri : {
        label: "AutoDest",
        href: "/project/infraWork/index.html"
    },
    next: {
        label: "WebSite Design",
        href: "project-webdesign.html"
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
            subTitle: [
                "Discovery:",
                "Framework:"
            ],
        },
        {
            label: "Navigation Control Panel UI Design",
            key:  "Navigation Control Panel UI Design",
            subTitle: [
                "UX/UI Design:"
            ],
        },
        {
            label: "Testing and Outcome",
            key:  "Testing and Outcome"
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

                <img alt="" className="img-responsive" src={Cover}/>;
            </>;

        case "Design Challenge":
            return <>
                <ContentHighlight attributes={data.highlight1}/>
                <span>When users enters the virtual store through a web browser, they have to learn to use mouse and keyboard to walk around and pick up products. It is challenging for most users in retailing industry to learn the controls for 3D environment, because they have no prior gaming knowledge and there is no clear similarity to webpages or office software they use daily. How can I help users learn hidden interactions fast and engage in the virtual environment to design stores easily?</span>
                <p/>
            </>;

        case "Discovery":
            return <>
                <span>To stand in the shoes of users, I researched on canvas tools that our primary users interact with daily, like PowerPoint and Google map. It helps me understand their mental models and expectations for common controls in the 2D and 3D space. On the competitive landscape, I reviewed 3D model design applications like Tinkercad and Sketchfab, to get inspirations on interaction pattern design in 3D space.</span>
                <p/>
                <span>To fully understand the user behavior pattern, I created 2 personas to represent CPG industry common users. On the other hand, I approached the problem by analyzing primary task flows and user contextual tasks while in the virtual environment.</span>
                <img alt="" className="img-responsive" src={Cover}/>;
            </>;

        case "Framework":
            return <>
                <img alt="" className="img-responsive" src={Cover}/>;
                <img alt="" className="img-responsive" src={Cover}/>;
            </>;

        case "Navigation Control Panel UI Design":
            return <>
                <span>Under the guidelines of Simplicity and Easiness to Learn, I designed the navigation system and associated interaction patterns. In ShopperMX there are Walk, View and Design modes, and each has 4 control patterns to facilitate 3D interactions.</span>
                <p/>
                <img alt="" className="img-responsive" src={Cover}/>;
            </>;

        case "UX/UI Design:":
            return <>
                <img alt="" className="img-responsive" src={Cover}/>;
            </>;

        case "Testing and Outcome":
            return <>
                <span>The feedback we got from client testing sessions reflected it was easy to navigate and design objects in the virtual environment, and the usage report showed increasing usage time on the platform per user. Based on the feedback, we iterated the navigation system to support power users with short cuts and personal configuration.</span>
                <p/>
                <h4 className="text-bold mt-20">Product Demo</h4>

                <img alt="" className="img-responsive" src={Cover}/>;

                <span>1. Be Ready for Changes Along the Way</span>
                <p/>
                <span>Since ShopperMX is the first web-based SaaS product for clients in CPG industry, we kept learning what the product would be like by working with clients side by side. The fact also leads to the UX/UI design getting updated very frequently. To cope with this challenge, I structures the feature documentation in a light-noted manner and keep developers and QA team in the loop. At the same time, I started building Pattern Library to save efforts on UI specs to focus on features and interaction flows more.</span>
                <p/>
                <span>2. Make Everyone's Voice Heard</span>
                <p/>
                <span>As the only designer, I always reach out to hear voices about ShopperMX from different teams: development, QA, customer service, marketing and etc. It helps me re-evaluate my design solutions from different perspectives, and also got inspired to find better solutions. I put all main UI on the lounge wall so that everyone in the company can view it and share with me their opinions. When they saw their suggestions being added to the new product release, people are very happy and more likely to help the product improve.</span>
                <p/>
                <span>3. Can I Do Better Next Time?</span>
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