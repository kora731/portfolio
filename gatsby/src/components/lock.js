/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import $ from 'jquery';

class Lock extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    if (btoa($('.password input').val()) === "c3ItdXg=") {
      $('.password button').removeClass('-wrong');
      $('.password').slideUp();
      $('.password-protected').slideDown();
      this.props.unlock();
    } else {
      $('.password button').addClass('-wrong');
    }
  }
  render() {

    return <div className="password">
      <p>Please <a href="mailto:surong731@gmail.com" target="_blank" rel="noopener noreferrer">contact me </a>
        for the password to access project content.
      </p>
      <form>
        <input type="password" placeholder="Enter password"/>
        <button onClick={this.handleSubmit.bind(this)}/>
      </form>
    </div>;
  }
}

export default Lock
