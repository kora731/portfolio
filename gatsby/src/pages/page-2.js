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
import Cover from "../images/q-mobile-header.png"
import Soa from "../images/qm-soa.png"
import Now1 from "../images/qm-notif.png"
import Now2 from "../images/qm-list.png"
import Now3 from "../images/qm-detail.png"
import User from "../images/qm-user.png"
import Login from "../images/qm-login.png"
import Login2 from "../images/qm-login-2.png"
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

const title = "Qventus app: deliver real-time nudges to patient care team";
const subTitle = "Right data for the right people at the right time";
const hightlight1 = ["How to reduce the mobile app usage friction and increase value delivered to ED nurses?"];
const hightlight2 = [ "How to come up with a nudge framework to enable and motivate care teams to improve healthcare operations?"];

const briefAttribute = [
  {
    label: "Timeline",
    value: "Nov. 2018 - Present"
  },
  {
    label: "Team",
    value: "BE, FE"
  },
  {
    label: "Role",
    value: "Lead Designer / PM"
  },
  {
    label: "Targeted Users",
    value: "Emergency department (ED) care team"
  },
  {
    label: "Design Scope",
    value: "Full design lifecycle (UXR, UX/UI) \nDesign Sprint\nRedesign Concept"
  },
  {
    label: "Outcome",
    value: "Improved usability of mobile app, nudge framework and redesign concept"
  }
];
const IndexPage = () => (
  <Layout pri="home" next="new">
    <SEO title="PathFinder" />

    <ContentHeader title={title} subTitle={subTitle}/>

    <Lock/>

    <div className="password-protected">
      <div className="AnchorPosition">
        <Anchor>
          <Link href="#top" title="Overview" />
          <Link href="#Brief" title="Brief" />
          <Link href="#Product suite and mobile app" title="Product suite and mobile app" />
          <Link href="#Product Goals" title="Product Goals" />
          <Link href="#UNDERSTAND USERS" title="Understand Users" />
          <Link href="#DESIGN CHALLENGE" title="Design Challenge" />
          <Link href="#SOLUTION FRAMEWORK" title="Solution Framework">
            <Link href="#Modularize board and scale to support data" title="Modularize board and scale to support data" />
            <Link href="#Actionable Component" title="Actionable Component" />
            <Link href="#UI Exploration for Stellar UI" title="UI Exploration for Stellar UI" />
            <Link href="#Final mockup and animation" title="Final mockup and animation" />
          </Link>
          <Link href="#UI DELIVERY" title="UI Delivery" />
          <Link href="#OUTCOME" title="Outcome" />
        </Anchor>
      </div>
      <ContentSection id="top">
        <img className="img-responsive" src={Cover}/>
      </ContentSection>

      <ContentSection title="Brief">
        <Brief attributes={briefAttribute}/>
      </ContentSection>

      <ContentSection title="Product suite and mobile app">
        <span>Qventus is the first system of action, from historic analytical data to predictive recipe, trying to simplify healthcare operations by empowering teams to excel in real-time. The solutions include dashboard for root cause analysis, patient board for proactive planning, system operational board for situational awareness, and mobile app to deliver real-time interventions. </span>
        <img className="img-responsive" src={Soa}/>
        <h4 className="text-bold mt-20">Mobile app for the care team in the ED</h4>
        <span>For most hospitals, the ED is the primary entry point for patients driving up to 70% of hospital admissions. But in this highly dynamic and variable environment, ED are normally overwhelmed with sudden patient influxes, long wait times, patients boarded in hallways and dissatisfied patients walking out. </span>
        <p/>
        <span>Qventus mobile app targets at solving ED problems by identify surges, delays, dissatisfied patients and push real time notifications to prompt preparations downstream. It also enables team collaboration across departments and functions to address problems in the same chat thread. Each chat thread is called a nudge quoted Richard Thaler’s behavior science concept.</span>
        <p/>
        <div className="col-lg-4">
            <img className="img-responsive" src={Now1}/>
        </div>
        <div className="col-lg-4">
            <img className="img-responsive" src={Now2}/>
        </div>
        <div className="col-lg-4">
            <img className="img-responsive" src={Now3}/>
        </div>
      </ContentSection>

      <ContentSection title="Engagement problems">
        <span>Experience goals of the mobile app are to reduce cognitive burden and engage frontline care team. But data tells us another story.</span>
        <p/>
        <span>Started from early 2018 Qventus set up the infrastructure to collect usage data and tracking funnels through Amplitude, and we found mobile usage dropped continuously to our surprise. After the app launched at the hospital site, less and less users came back after one month. </span>
        <p/>
        <span>To find out the root caues of the usage drop, we started setting up onsite interviews and partnered with customer success team to collect feedback from our users. There are a few consistent problems that surface: </span>
        <div className="row">
          <div className="col-lg-6">
              <h4 className="text-bold mt-20">Targeted Users - ED Nurses</h4>
              <span>Through talking to different ED nurses, we captured their characteristics and touchpoints with Qventus products in the persona format. It helps align the whole team on the user empathy and acts as a reference point when we’re talking about user problems. </span>
              <p/>
              <span>Below are the two main feedback themes in terms of using Qventus products.</span>
              <p/>
          </div>
          <div className="col-lg-6">
            <img className="img-responsive" src={User}/>
          </div>
        </div>
        <h4 className="text-bold mt-20">- Friction through using the app</h4>
        <span>During the interview, users shared that they’re having trouble logging into the app. Nurses are using all different information systems at work, and Qventus required them to remember another set of credentials which is quite challenging.</span>
        <p/>
        <span>Second, users got overwhelmed with all the notifications coming in, but no way to clear up the thread  or see which one is important. When they got off work, mobile app still buzzed with all notifications which then forced them to log out of the app. Then it circled back to the login problem. </span>
  
        <h4 className="text-bold mt-20">- “Now what?”</h4>
        <span>Another important finding from the interviews is that care teams don’t know what to do with all the notifications. “I’ve got these alerts, but I don’t know what to do with them”, quoted from a charge nurse. We realized that prompts are not providing enough context or actinable items to solve the problem. Compared with what care team already know, it doesn’t add enough value to their operations. Nudges starts losing interests from the care team and thus less engaged users.</span>
  
       
      </ContentSection>

      <ContentSection title="Design challenge">
        <ContentHeighlight attributes={hightlight1}/>

        <h4 className="text-bold mt-20">Experience Goals</h4>
        <span>- Delightful to engage users, helpful while not intrusive</span>
        <p/>
        <span>- Foster collaboration and positive mindset within the care team</span>
        <p/>
        <span>- Insightful and automated, push useful data to users rather than pull</span>
      </ContentSection>

      <ContentSection title="Solution framework">
        <span>I worked closely with two mobile engineers, and also acted as the quasi PM role as the team is going through transitions. Through design workshop with the team and key stakeholders, we came up with the list of work items as our mobile roadmap. It’s targeted at delivering incremental improvements while setting up framework for long term redesign of the mobile app.O</span>
        <p/>


      </ContentSection>

      <ContentSection title="Reduce friction" isSubTitle={true}>
      <span>After reviewing the interview syntheses with the team, we identified a few key problems to improve the usability of the app. </span>
      <p/>
      <span>
        1. Difficult login with URL and credential required
        </span>
        <p/>
        <span>
        2. Overwhelmed notifications and home feed
        </span>
        <p/>
        <span>
        3. Not able to mute notifications even when off-shift
        </span>
        <p/>
        <span>
        4. Among hundreds of messages, Which one is important? 
        </span>

        <h4 className="text-bold mt-20">Login Flow Diagram</h4>
        <span>Current flow requires the user to enter hospital URL and then directs them to the login section. As the tracking data shows that more than half of users gave up at step one of entering URL, it’s a friction point that is removable by binding user email with the domain URL so that one step closer to login. </span>
        <p/>
        <img className="img-responsive" src={Login}/>
        <img className="img-responsive" src={Login2}/>
        

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

      <ContentSection title="Final mockup and animation" isSubTitle={true}>

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

        <h4 className="text-bold mt-20">Style Guide and Design System</h4>

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

        <h4 className="text-bold mt-20">- 20%+ decrease in postop transfer delays</h4>

        <h4 className="text-bold mt-20">- 20%+ increase in patient satisfaction</h4>

        <h4 className="text-bold mt-40">Frontline User Feedback</h4>
        <span>“With Qventus you have a snapshot of a patient without digging through any charts and without having to ask a lot of questions. You know what the plan is, where they are going, and what's keeping them here.”</span>
       
        <span>- Registered Nurse</span>
        <p/>
        <span>“Finally, I have a technology that makes my job easier.”    - Charge Nurse</span>
      </ContentSection>
    </div>

  </Layout>
)

export default IndexPage
