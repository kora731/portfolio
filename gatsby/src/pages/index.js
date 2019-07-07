import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentHeader from "../components/content-header"
import ContentSection from "../components/content-section"
import Brief from "../components/brief"
import Lock from "../components/lock"

// import image from "../images/adsk-step-1.png"

const title = "PathFinder: patient board to facilitate discharge planning";
const subTitle = "Actionable Data Delivered in a Delightful Humane Way";
const briefAttribute = [
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
];
const IndexPage = () => (
  <Layout pri="home" next="new">
    <SEO title="PathFinder" />

    <ContentHeader title={title} subTitle={subTitle}/>

    <Lock/>
    <div className="password-protected">
      {/*<img className="img-responsive" src={image}/>*/}

      <ContentSection title="BRIEF">
        <Brief attributes={briefAttribute}/>
      </ContentSection>

      <ContentSection title="WHY PATHFINDER">
        <span>Today’s health systems are increasingly focused on reducing inefficiencies of patient flows to reduce costs and capital spending. But the day to day responsibilities of managing patient flows are shouldered by frontline care teams, who are already overwhelmed with increasing patient demands, and complex dashboards and reports.</span>
        <p/>
        <span>Caregivers are burning out trying to operate in an intense, highly dynamic environment. Furthermore, patients are the ones who suffer the consequences.</span>
        <p/>
        <span>Qventus offers PathFinder solution to optimize patient flow in realtime and reduce the cognitive burden of care team. It facilitates care team to plan discharge on day one and captures barriers to help prioritize work items. With a dedicated product focus on modern, user-centric design, PathFinder intends to engage the whole team to streamline the patient flow and reduce length of stay.</span>
      </ContentSection>

      <ContentSection title="UNDERSTAND USERS">
        <span>We shadowed multiple hospitals to observe how frontline nurses are handling the patient flow today. It helps uncover potential touchpoints where PathFinder could make an impact to improve discharge process. I consolidated our learnings into the persona and flow diagrams so that the whole team can leverage these user insights to solve problems.</span>
        <p/>
        <span>Stakeholder mapping and key persona</span>

        <p/>
        <span>Patient Discharge Flow</span>

      </ContentSection>

      <ContentSection title="DESIGN CHALLENGE">
        <span>Today’s health systems are increasingly focused on reducing inefficiencies of patient flows to reduce costs and capital spending. But the day to day responsibilities of managing patient flows are shouldered by frontline care teams, who are already overwhelmed with increasing patient demands, and complex dashboards and reports.</span>
        <p/>
        <span>Caregivers are burning out trying to operate in an intense, highly dynamic environment. Furthermore, patients are the ones who suffer the consequences.</span>
        <p/>
        <span>Qventus offers PathFinder solution to optimize patient flow in realtime and reduce the cognitive burden of care team. It facilitates care team to plan discharge on day one and captures barriers to help prioritize work items. With a dedicated product focus on modern, user-centric design, PathFinder intends to engage the whole team to streamline the patient flow and reduce length of stay.</span>
      </ContentSection>

      <ContentSection title="SOLUTION FRAMEWORK">
        <span>Today’s health systems are increasingly focused on reducing inefficiencies of patient flows to reduce costs and capital spending. But the day to day responsibilities of managing patient flows are shouldered by frontline care teams, who are already overwhelmed with increasing patient demands, and complex dashboards and reports.</span>
        <p/>
        <span>Caregivers are burning out trying to operate in an intense, highly dynamic environment. Furthermore, patients are the ones who suffer the consequences.</span>
        <p/>
        <span>Qventus offers PathFinder solution to optimize patient flow in realtime and reduce the cognitive burden of care team. It facilitates care team to plan discharge on day one and captures barriers to help prioritize work items. With a dedicated product focus on modern, user-centric design, PathFinder intends to engage the whole team to streamline the patient flow and reduce length of stay.</span>
      </ContentSection>
    </div>

  </Layout>
)

export default IndexPage
