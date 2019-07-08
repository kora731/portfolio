import React from "react"

import { Anchor } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentHeader from "../components/content-header"
import ContentSection from "../components/content-section"
import Brief from "../components/brief"
import Lock from "../components/lock"
import ContentHeighlight from "../components/content-heighlight"

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
import { homedir } from "os";

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
  title: "PathFinder: patient board to facilitate discharge planning",
  subTitle: "Actionable Data Delivered in a Delightful Humane Way",
  hightlight1: ["How to redesign the patient board to enable proactive discharge planning and a scalable solution to customers?"],
  hightlight2: [
  "Easy to access data while scalable",
  "Actionable components",
  "Delightful and refreshing"],

  briefAttribute: [
    {
      label: "Timeline",
      value: "Jan. 2018 - Oct. 2018"
    },
    {
      label: "Team",
      value: "PM, FE, BE"
    },
    {
      label: "Role",
      value: "Lead UX/UI Designer"
    },
    {
      label: "Targeted Users",
      value: "Hospital in-patient care team"
    },
    {
      label: "Design Scope",
      value: "User Research   IA\nInteraction Design\nRedesign\nUI Specs"
    },
    {
      label: "Outcome",
      value: "Top sale product used at 20+ hospitals with wide positive feedback"
    }
  ]
}
const IndexPage = () => (
  <Layout pri={data.pri} next={data.next}>
    <SEO title="Mobile" />

    <ContentHeader title={data.title} subTitle={data.subTitle}/>

    <Lock/>

    <div className="password-protected">
      <div className="AnchorPosition">
        <Anchor>
          <Link href="#top" title="Overview" />
          <Link href="#Brief" title="Brief" />
          <Link href="#Why PathFinder" title="Why PathFinder" />
          <Link href="#Product Goals" title="Product Goals" />
          <Link href="#UNDERSTAND USERS" title="Understand Users" />
          <Link href="#DESIGN CHALLENGE" title="Design Challenge" />
          <Link href="#SOLUTION FRAMEWORK" title="Solution Framework">
            <Link href="#Modularize and scalable board" title="Modularize and scalable board" />
            <Link href="#Actionable Component" title="Actionable Component" />
            <Link href="#UI Exploration for Stellar UI" title="UI Exploration for Stellar UI" />
            <Link href="#Final Product UI" title="Final Product UI" />
          </Link>
          <Link href="#UI DELIVERY" title="UI Delivery" />
          <Link href="#OUTCOME" title="Outcome" />
        </Anchor>
      </div>
      <ContentSection id="top">
        <img className="img-responsive" src={Cover}/>
      </ContentSection>

      <ContentSection title="Brief">
        <Brief attributes={data.briefAttribute}/>
      </ContentSection>

      <ContentSection title="Why PathFinder">
        <span>Today’s health systems are increasingly focused on reducing inefficiencies of patient flows to reduce costs and capital spending. But the day to day responsibilities of managing patient flows are shouldered by frontline care teams, who are already overwhelmed with increasing patient demands, and complex dashboards and reports.</span>
        <span>Caregivers are burning out trying to operate in an intense, highly dynamic environment. Furthermore, patients are the ones who suffer the consequences.</span>
        <p/>
        <span>Qventus offers PathFinder solution to optimize patient flow in realtime and reduce the cognitive burden of care team. It facilitates care team to plan discharge on day one and captures barriers to help prioritize work items. With a dedicated product focus on modern, user-centric design, PathFinder intends to engage the whole team to streamline the patient flow and reduce length of stay.</span>
      </ContentSection>

      <ContentSection title="Product Goals">
        <img className="img-responsive" src={Goal}/>

      </ContentSection>

      <ContentSection title="UNDERSTAND USERS">
        <span>We shadowed multiple hospitals to observe how frontline nurses are handling the patient flow today. It helps uncover potential touchpoints where PathFinder could make an impact to improve discharge process. I consolidated our learnings into the persona and flow diagrams so that the whole team can leverage these user insights to solve problems.</span>
        <h4 className="text-bold mt-20">Stakeholder mapping and key persona</h4>
        <img className="img-responsive" src={User}/>
        <p/>
        <h4 className="text-bold mt-20">Patient Discharge Flow</h4>
        <img className="img-responsive" src={flow}/>
      </ContentSection>

      <ContentSection title="DESIGN CHALLENGE">
        <ContentHeighlight attributes={data.hightlight1}/>
        <img className="img-responsive" src={Before}/>

        <p/>
        <h4 className="text-bold mt-20">Gap of the previous patient board</h4>
        <span>Before I joint the team, there is already a patient board for IDR. After taling to Qventus internal stakeholders, there are a few gaps we identified:</span>
        <p/>

        <h4 className="text-bold mt-20">1. Not configurable</h4>
        <span>Data columns are manually written with SQL for every board and it takes a long time to configure every board.</span>
        <p/>

        <h4 className="text-bold mt-20">2. Poor affordance</h4>
        <span>Certain column data is editable and requires user entry. However the current UI doesn’t show clearly interactive fields.</span>
        <p/>

        <h4 className="text-bold mt-20">3. How to differentiate</h4>
        <span>Heathcare IT software all share a corporate blue hue which tends to look alike. How might we make PathFinder visually appealing and differentiate from other competitors?</span>
        <p/>

        <h4 className="text-bold mt-20">Experience Goals</h4>
        <span>As the lead designer, I started the design project by working with PM on the experience goals of this new patient board. </span>
        <p/>
        <ContentHeighlight attributes={data.hightlight2}/>
      </ContentSection>

      <ContentSection title="SOLUTION FRAMEWORK">
        <span>Our approaches to solve the design challenge and meet experience goals can be summarized in three themes:</span>
        <p/>

        <h4 className="text-bold mt-20">1. Modularize and scalable board</h4>
        <h4 className="text-bold mt-20">2. Actionable component</h4>
        <h4 className="text-bold mt-20">3. UI Exploration for Stellar UI</h4>
      </ContentSection>

      <ContentSection title="Modularize and scalable board" isSubTitle={true}>
        <h4 className="text-bold">Patient Data Taxonomy - IA</h4>
        <span>The taxonomy helps understand different categories of data types, whether it needs user input or read only, or whether it supports special style or data validation.</span>
        <p/>
        <span>To make sure the board design meets configuration requirements, I’m working closely with BE and FE to layout the information architecutre, so that each column and field is aligned with how
it will present data and support user interaction.</span>

        <img className="img-responsive" src={Idr}/>

        <h4 className="text-bold mt-20">Board space for more data</h4>
        <span>After the first iteration, we narrow down to three options because of the project timeline and technical constraints. The list view becomes the unification point where data is presented in a progressive way, and also has advantage to sort and filter. We also constructed the low fi mockup covering data structure, so that moving forward we can valid both layout and data with end users.</span>
        <p/>
        <img className="img-responsive" src={Wf1}/>
        <p/>
        <span>After the first iteration, we narrow down to three options because of the project timeline and technical constraints. The list view becomes the unification point where data is presented in a progressive way, and also has advantage to sort and filter. We also constructed the low fi mockup covering data structure, so that moving forward we can valid both layout and data with end users.</span>
        <p/>
        <img className="img-responsive" src={Wf2}/>

        <h4 className="text-bold mt-20">User Testing Findings</h4>
        <span>When we presented the three options to end users, 4 out of 5 users chose Option Two, commented on it being clean and familiar. Expanding the row data rather than replacing/relocating is also easier to scan and digest the information.</span>
        <p/>
        <span>After I brought these findings back to the team, we decided on constructing the list view first. Then we will investigate further into the expansion view to iterate the design. </span>
      </ContentSection>

      <ContentSection title="Actionable Component" isSubTitle={true}>
        <span>PathFinder boards serve as the data source to prompt care team to enter patient dicharge plan, and collaborate on resolving barriers. User-entry data on the board is the most valuable information set. How might we design the data columns to encourage user input?</span>
        <p/>

        <img className="img-responsive" src={Ixd}/>

        <h4 className="text-bold mt-20">EDD (estimated discharge date): Deliver predictive date and status flags</h4>
        <span>Qventus developed machine learning models to predict when patient is going to leave. We surface these prediction results next to EDD field for entry reference. Among these solutions, we choose Option D for the short term MVP solution based on the data availability.</span>
        <p/>

        <img className="img-responsive" src={Edd1}/>
        <img className="img-responsive" src={Edd2}/>

        <h4 className="text-bold mt-20">Disposition flow indicator</h4>
        <span>Visualize the flow and order status up front for the care team</span>
        <p/>

        <img className="img-responsive" src={Dispo}/>

        <h4 className="text-bold mt-20">Barrier design</h4>
        <span>Design problem of managing barrier is: how could care teams quickly identify important barriers and easily manage an updating list? After I explored different barrier list UI, our team decided on the solution to combine Option B and C to show an easy-to-scan and scalable list.</span>
        <p/>

        <img className="img-responsive" src={Barrier}/>

        <h4 className="text-bold mt-20">OUTCOME</h4>
        <span>During our internal feedback with clinical team, we got a lot of positive feedback. Also from tracking usage data at Amplitude, we found completion rate of these fields general high along with increasing DAU. These indicators help show a more engaged user group.</span>
      </ContentSection>

      <ContentSection title="UI Exploration for Stellar UI" isSubTitle={true}>

        <h4 className="text-bold">Visual identity Criteria</h4>
        <span>We started exploring the visual redesign by construct the moodboard, identifying a few dimensions to push forward in the UI iteractions and finally converge to one design.</span>
        <p/>
        <img className="img-responsive" src={UI1}/>

        <p/>
        <span>Dimensions of visual divergence:  color, IA,</span>
        <p/>
        <img className="img-responsive" src={UI2}/>

        <h4 className="text-bold mt-20">Review and feedback</h4>

        <span>Along the visual exploration, our product team did a few rounds of reviews. The team arrived at the concensus that we want to convey intelligent and dynamic data feeling. Wave provides a lot of possibilities for data related animation</span>
      </ContentSection>

      <ContentSection title="Final Product UI" isSubTitle={true}>

        <video className="img-responsive" controls>
          <source src={Demo} type="video/mp4"/>
        </video>
      </ContentSection>

      <ContentSection title="UI DELIVERY">

        <div className="col-lg-6">
          <img className="img-responsive" src={Specs1}/>
        </div>
        <div className="col-lg-6">
          <img className="img-responsive" src={Specs2}/>
        </div>

        <div className="col-lg-6">
          <img className="img-responsive" src={Specs3}/>
        </div>
        <div className="col-lg-6">
          <img className="img-responsive" src={Specs4}/>
        </div>

        <h4 className="text-bold mt-20">Responsive design</h4>

        <img className="img-responsive" src={RWD1}/>
        <img className="img-responsive" src={RWD2}/>
        <p/>
        <span>In the later stage of introducing PathFinder to more users and use cases, ability to view the list on the mobile devices becomes a prominent request. I started cataloging all the data by priority group, and designed the wireframes first. This approach makes sure important are consistantly emphasized across different channels. Next step is to validate with care team, and explore unique use cases for mobile usage.</span>
        <p/>
      </ContentSection>

      <ContentSection title="OUTCOME">
        <h4 className="text-bold">Widely deployed at client hospitals </h4>
        <span>Since the new PathFinder was launched in June 2018, 20+ leading hospitals and health systems are streamlining patient flow with the product, achieving results including:</span>

        <h4 className="text-bold mt-20">- 0.5+ day reduction in in-patient length of stay</h4>

        <h4 className="text-bold mt-10">- 20%+ decrease in postop transfer delays</h4>

        <h4 className="text-bold mt-10">- 20%+ increase in patient satisfaction</h4>

        <h4 className="text-bold mt-40">Frontline user feedback</h4>
        <span>“With Qventus you have a snapshot of a patient without digging through any charts and without having to ask a lot of questions. You know what the plan is, where they are going, and what's keeping them here.”</span>

        <span>- Registered Nurse</span>
        <p/>
        <span>“Finally, I have a technology that makes my job easier.”    - Charge Nurse</span>
      </ContentSection>
    </div>

  </Layout>
)

export default IndexPage
