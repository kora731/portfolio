/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import SEO from "./seo";
import ContentHeader from "./content-header";
import Lock from "./lock";
import {Anchor} from "antd";
import ContentSection from "./content-section";
import Layout from "./layout";

const { Link } = Anchor;

const Template = ({ data, renderSection, lock }) => {

    return (
        <Layout pri={data.pri} next={data.next}>
            <SEO title={data.name} />

            <ContentHeader title={data.title} subTitle={data.subTitle}/>

            {lock && <Lock/>}

            <div className={lock ? "password-protected" : ""}>
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
                        <div  key={index}>
                            <ContentSection title={oTitle.label}>
                                {renderSection(oTitle.key)}
                            </ContentSection>
                            {oTitle.subTitle && oTitle.subTitle.map((subTitle, index2) => (
                                <ContentSection title={subTitle} isSubTitle={true} key={index2}>
                                    {renderSection(subTitle)}
                                </ContentSection>
                            ))}
                        </div>
                    ))
                }
            </div>

        </Layout>
    )
}

Template.propTypes = {
    data: PropTypes.object,
    lock: PropTypes.bool,
    renderSection: PropTypes.func.isRequired
}

export default Template
