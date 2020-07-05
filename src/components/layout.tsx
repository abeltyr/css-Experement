import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from "../style/globalStyle"
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
