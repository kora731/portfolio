/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import $ from 'jquery';

const Lock = () => {
  function handleSubmit(event) {
    event.preventDefault();
    if (btoa($('.password input').val()) === "c3ItdXg=") {
      $('.password button').removeClass('-wrong');
      $('.password').slideUp();
      $('.password-protected').slideDown();
    } else {
      $('.password button').addClass('-wrong');
    }
  }

  return   <div className="password">
    <p>Please <a href="mailto:surong731@gmail.com" target="_blank">contact me</a>
      for the password to access project content.
    </p>
    <form>
      <input type="password" placeholder="Enter password"/>
      <button onClick={handleSubmit}/>
    </form>
  </div>;
}

export default Lock
