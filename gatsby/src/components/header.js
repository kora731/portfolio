import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-sr-rev.png"

class Header extends React.Component {
    constructor(props){

        super(props);
        this.state = {
            openNav: false
        }
    }

    render() {

        return <div className="main-nav navbar">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" onClick={()=> (this.setState(state => ({
                    openNav: !state.openNav
                })))}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">
                    <img className="site-logo" src={logo} alt="logo"/>
                </a>

            </div>
            <div className={"navbar-collapse collapse" + (this.state.openNav ? " in" : "")}>
                <ul className="nav navbar-nav navbar-right">
                    {this.props.pri &&
                    <li>
                        <a href={this.props.pri.href}>Pre: {this.props.pri.label}</a>
                    </li>
                    }
                    {this.props.next &&
                    <li>
                        <a href={this.props.next.href}>Next: {this.props.next.label}</a>
                    </li>
                    }
                </ul>
            </div>
        </div>;
    }
}
export default Header;

